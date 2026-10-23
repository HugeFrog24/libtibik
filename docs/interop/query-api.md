# Hook query API v1

[Handbook](README.md) | [Permanent hook IDs](hook-ids.md)

Export: `tibik_get_hook_interop_v1`

This C ABI reports one Tibik hook's target, proxy, and live callback storage.
It does not install a hook, change modes, retry installation, or grant access
to another mod's internals.

**Only EnqueueRequest ID 1 and GameFrame ID 2 are queryable, after verified
MULTI installation of the requested hook.** They become ready independently.

## Declaration

These are the declarations needed for the example. The full permanent ID list
is in the [registry](hook-ids.md).

```c
#include <stdint.h>

enum {
    TIBIK_HOOK_HTTP_ENQUEUE = 1,
    TIBIK_HOOK_GAME_FRAME = 2
};

typedef struct TibikHookInteropV1 {
    uintptr_t target;
    uintptr_t proxy;
    uintptr_t next_slot;
} TibikHookInteropV1;

typedef int (*TibikHookQueryV1)(
    uint32_t hook_id, uint32_t out_size, TibikHookInteropV1 *out);

#ifdef __cplusplus
extern "C" {
#endif
int tibik_get_hook_interop_v1(
    uint32_t hook_id, uint32_t out_size, TibikHookInteropV1 *out);
#ifdef __cplusplus
}
#endif
```

The descriptor uses the native 64-bit ABI, with ordinary alignment and no
packing. Its size is 24 bytes; the three fields are at offsets 0, 8, and 16.

| Field | Meaning |
| --- | --- |
| `target` | Resolved game function entry for this hook |
| `proxy` | Tibik's proxy function address |
| `next_slot` | Address of Tibik's live callback storage, not the saved function pointer itself |

## Minimal C++ query example

Use the declarations above. `tibikHandle` must be a retained handle to the
already loaded Tibik module in this process. Obtain it through your loader's
module discovery; do not load a second copy or start Tibik early just to query it.
Keep the handle alive while using the query or descriptor.

```cpp
#include <dlfcn.h>

void InspectTibikHooks(void *tibikHandle) {
    if (!tibikHandle) return;
    const auto query = reinterpret_cast<TibikHookQueryV1>(
        dlsym(tibikHandle, "tibik_get_hook_interop_v1"));
    if (!query) return; // This binary does not provide the API.

    TibikHookInteropV1 enqueue{};
    if (query(TIBIK_HOOK_HTTP_ENQUEUE, sizeof(enqueue), &enqueue) == 1) {
        // Descriptor available. Check provider, target and chain before joining.
        // enqueue.next_slot is an address, not a function pointer to call.
    }

    TibikHookInteropV1 frame{};
    if (query(TIBIK_HOOK_GAME_FRAME, sizeof(frame), &frame) == 1) {
        // Same checks for GameFrame. This does not install or invoke a hook.
    }
}
```

The example only obtains descriptors. Resolve the export through the retained
module handle and verify that the returned symbol belongs to that module;
handle-scoped lookup alone is not provider proof.

## Return values and output storage

| Result | Meaning |
| --- | --- |
| `1` | The requested hook completed verified MULTI installation; the descriptor was copied to `out` |
| `0` | Unavailable or invalid request; `out` is left untouched |

`0` covers unknown, reserved, or retired IDs; incomplete or failed installation;
null output; output smaller than 24 bytes; and legacy UNIQUE or Relive clean-only
installations. Non-Android hosts do not publish MULTI readiness.

Pass valid writable storage and its size. A non-null pointer is not validated
for writability. On success, v1 writes exactly 24 bytes, even if `out_size` is
larger. Extra bytes are left untouched. Zero-initialize a fresh descriptor for
each attempt and use it only when that call returns `1`.

A startup query can return `0` and become ready later. Querying again does not
retry a failed hook installation. `1` means verified installation, not that the
hook has fired, that feature startup has finished, or that a gameplay action has
succeeded. A populated callback slot or an observed proxy call alone is not
enough for Tibik to publish the descriptor.

Publication is synchronized so concurrent startup queries see either
unavailable or a complete descriptor. Callers must still synchronize access to
their own output buffers.

## Hook behavior

### ID 1: EnqueueRequest

Tibik forwards once through its live non-null next slot, preserving the incoming
arguments and downstream result, then observes the request. Nested invocations
still forward but skip optional observation. Turning network logging off does
not uninstall the hook or revoke its published descriptor.

The peer must independently verify the game's EnqueueRequest calling convention
and request layout for the supported build. The descriptor does not encode them.
Another proxy can rewrite a request, so an observed body is not necessarily an
unchanged copy of the caller's input.

### ID 2: GameFrame

The proxy signature is `void(uintptr_t game)`.

On normal completion, Tibik forwards exactly once through its live non-null
next slot with the same argument. The outer invocation runs Tibik's pre-frame
work, forwards, then runs its post-frame work. Nested invocations forward but
skip that optional work.

The depth guard suppresses repeated mod work; it does not break a cyclic hook
chain or suppress recursion in the game itself. Preserve the game's normal
thread and argument contract. Do not call GameFrame from an arbitrary worker
thread or invoke the proxy as a readiness probe.

Turning individual frame features off does not uninstall GameFrame. Its
descriptor can become available before the first frame and before the remaining
feature initialization finishes.

## Lifetime and joining checks

For a successfully published hook, the descriptor addresses and hook are kept
for process lifetime. A later compatible append can change the contents of
`next_slot` without changing the descriptor. Never write to another mod's slot,
cache its contents as a permanent original, or call the slot's address as code.

Before joining, the consuming mod must verify:

1. The retained module and query symbol are the intended Tibik provider.
2. The descriptor target is the exact function and game build it intends to
   hook, with the correct calling convention.
3. The proxy and aligned callback storage belong to the expected module and
   have suitable executable or readable/writable mappings.
4. The shared hook runtime and installation evidence establish a compatible
   MULTI chain, including any other nodes. A query result alone cannot prove
   chain order or exclude an incompatible installer.
5. Both sides' forwarding, reentry, request mutation, and lifetime contracts
   are compatible. Verify the resulting links after installation and test the
   intended installation orders on a device.

This API is not a lock, an unhook lease, or proof about other chain nodes.
Integration assumes no concurrent teardown or incompatible hook installation.
An independent mod can violate that assumption; the query does not prevent it.

Tibik's existing peer admission rules remain separate. Publishing ID 2 does not
automatically let Tibik join a peer that already hooked GameFrame. If required
evidence is missing or conflicting, decline to join rather than treating the
descriptor as blanket permission.
