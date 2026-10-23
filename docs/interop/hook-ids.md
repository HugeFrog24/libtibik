# Permanent hook IDs

[Handbook](README.md) | [Query API](query-api.md)

These IDs identify logical game-hook targets across game builds. They are not
addresses, installation order, or a promise that every target installs on every
build.

**Only IDs 1 and 2 are exposed, after verified MULTI installation. IDs 3 through
33 currently return `0`.** An unexposed hook may still be installed internally.

| ID | Public constant | Logical target | Query support |
| --- | --- | --- | --- |
| 1 | `TIBIK_HOOK_HTTP_ENQUEUE` | EnqueueRequest | Verified MULTI only |
| 2 | `TIBIK_HOOK_GAME_FRAME` | GameFrame | Verified MULTI only |
| 3 | `TIBIK_HOOK_QUEUE_LEVEL` | QueueLevel | Reserved |
| 4 | `TIBIK_HOOK_SET_LEVEL_START_MARKER` | SetLevelStartMarker | Reserved |
| 5 | `TIBIK_HOOK_HTTP_GET_COMPLETED_SLOT` | GetCompletedSlot | Reserved |
| 6 | `TIBIK_HOOK_AVATAR_LOCO_UPDATE` | AvatarLocoUpdate | Reserved |
| 7 | `TIBIK_HOOK_AVATAR_LOCO_UPDATE_ORIENTATION` | AvatarLoco::UpdateOrientation | Reserved |
| 8 | `TIBIK_HOOK_UPDATE_EYE_POS_AND_ROT_MAT` | FPV / UpdateEyePosAndRotMat | Reserved |
| 9 | `TIBIK_HOOK_TIMELINE_BARN_UPDATE` | TimelineBarnUpdate | Reserved |
| 10 | `TIBIK_HOOK_IS_AFK_TIER` | IsAfkTier | Reserved |
| 11 | `TIBIK_HOOK_CHAT_SEND_MESSAGE` | Chat::SendMessage | Reserved |
| 12 | `TIBIK_HOOK_ACCOUNT_INBOX_ON_SYNC` | AccountInbox::OnSync | Reserved |
| 13 | `TIBIK_HOOK_INBOX_TAP_HANDLER` | Inbox tap handler | Reserved |
| 14 | `TIBIK_HOOK_LEVEL_OBJECTS_LOAD` | LevelObjects::Load | Reserved |
| 15 | `TIBIK_HOOK_HELD_CANDLE_MOVEMENT_DROP` | HeldCandle::MovementDrop | Reserved |
| 16 | `TIBIK_HOOK_GATE_LIGHTUP_STARTER` | GateLightupStarter | Reserved |
| 17 | `TIBIK_HOOK_SEASON_QUEST_IS_CLAIMABLE` | SeasonQuest::IsClaimable | Reserved |
| 18 | `TIBIK_HOOK_SEASON_QUEST_REPLAY_CHECK` | SeasonQuest::ReplayCheck | Reserved |
| 19 | `TIBIK_HOOK_SEASON_QUEST_BUTTON_STATE` | SeasonQuest::ButtonState | Reserved |
| 20 | `TIBIK_HOOK_IS_PLACEMENT_VALID` | IsPlacementValid | Reserved |
| 21 | `TIBIK_HOOK_PROP_AVAILABILITY` | PropAvailability | Reserved |
| 22 | `TIBIK_HOOK_SHOUT_TICK` | ShoutTick | Reserved |
| 23 | `TIBIK_HOOK_DO_SHOUT` | DoShout | Reserved |
| 24 | `TIBIK_HOOK_CAPE_BADGES_SELECTOR` | CapeBadges::Selector | Reserved |
| 25 | `TIBIK_HOOK_CAPE_DYES_UNIFORM` | CapeDyes::Uniform | Reserved |
| 26 | `TIBIK_HOOK_CAPE_DYES_DEFINITION` | CapeDyes::Definition | Reserved |
| 27 | `TIBIK_HOOK_CAPE_DYES_APPLY` | CapeDyes::Apply | Reserved |
| 28 | `TIBIK_HOOK_CAPE_FUR_INFO` | CapeFur::Info | Reserved |
| 29 | `TIBIK_HOOK_CAPE_FUR_TEARDOWN` | CapeFur::Teardown | Reserved |
| 30 | `TIBIK_HOOK_CAPE_FUR_RENDER` | CapeFur::Render | Reserved |
| 31 | `TIBIK_HOOK_CAPE_PALETTE_REBUILD` | CapePalette::Rebuild | Reserved |
| 32 | `TIBIK_HOOK_PORTABLE_CINEMA_UNLOAD` | PortableCinema.Unload | Reserved |
| 33 | `TIBIK_HOOK_PORTABLE_CINEMA_UPDATE` | PortableCinema.Update | Reserved |

## Allocation rules

- ID `0` is reserved and unavailable.
- The next allocation is `34`. New assignments use explicit increasing values.
- Published names and numbers stay assigned, including when a hook retires.
- Retired IDs return `0`; they never acquire another meaning.
- Names describe stable interface identities. Renaming an internal function does
  not rename its published constant or reassign its number.
- Adding an ID does not enable querying it. Exposure needs a documented hook
  contract, verified publication, and regression coverage.

Tibik's regression tests pin the assignments and reject renumbering, reuse,
deleted history, aliases, and implicit numbering. New allocations must extend
that permanent snapshot as well as this table.
