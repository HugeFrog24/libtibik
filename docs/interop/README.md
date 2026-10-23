# Tibik developer handbook: mod interoperability

Tibik exposes a small query API for cooperative Android ARM64 mods that share
game hooks through a verified MULTI runtime.

**Only EnqueueRequest (ID 1) and GameFrame (ID 2) are queryable, and only after
that hook has passed Tibik's MULTI installation checks.** Having an assigned ID
does not make a hook available through the API.

- [Query API and minimal example](query-api.md)
- [Permanent hook ID registry](hook-ids.md)

## What each side provides

The host provides the hook runtime. Each mod owns its proxies, callback storage,
and the contract describing how its hooks forward calls. Tibik's query reports
Tibik's own verified installations. The consuming mod still checks the target,
provider, and current chain before deciding whether to join.

This is a per-mod API, not a global hook registry. The numeric IDs belong to
Tibik; another mod can assign the same numbers to different hooks.

## Availability

| Situation | Query result |
| --- | --- |
| ID 1 or 2, with that hook successfully installed and verified in MULTI | `1`, with a descriptor |
| ID 1 or 2 before verified installation, or after an installation failure | `0` |
| IDs 3 through 33 | `0`, reserved but not exposed |
| Unknown or retired IDs | `0` |
| Legacy Canvas UNIQUE or Relive's clean-target-only adapter | `0`, even if the hook works locally |

The interface is for Android ARM64. Do not rely on the export being present on
other platforms. Older Tibik binaries may lack the export or expose only ID 1.
Check the export and the requested ID at runtime instead of inferring support
from a version label.

Exposing GameFrame does not change which existing peer hooks Tibik will join.
Publication and peer admission are separate decisions. A successful query does
not establish compatibility with every other mod, nor prove both installation
orders have been tested.

## Interface evolution

Published IDs are permanent. New IDs are appended; existing assignments are
never renumbered, deleted, or reused. A retired ID stays reserved and returns
unavailable. Internal function renames do not change its identity.

The `_v1` export keeps its signature, descriptor layout, and documented contract.
Additional hook IDs can become queryable without changing that ABI, once their
contracts and checks are in place. An incompatible ABI or contract requires a
new versioned interface rather than silently changing v1.

This handbook describes the implementation introduced in source revision
`fd7e6c0`. The local build and regression checks passed; GameFrame ID 2 still
needs a device integration run with a consuming peer.
