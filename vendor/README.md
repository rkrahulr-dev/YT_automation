# Vendored upstream projects

Unmodified copies of two open-source projects, kept here so the whole pipeline lives in one place. Do not edit files inside these folders; update by re-copying from upstream.

| Folder | Upstream | Commit | Licence |
| --- | --- | --- | --- |
| `clips-studio/` | https://github.com/ColinGPT9/clips-studio (Clips Kitty) | fccd999e63ec63cdff1ade5406b8b82bb88b81e5 (2026-11-20) | AGPL-3.0, see `clips-studio/LICENSE` and `clips-studio/NOTICE` |
| `instagram-agent-skill/` | https://github.com/Jakeschincariol/instagram-agent-skill | d03c56bb598be770c60b201f94237e5d1a4268a6 (2026-09-13) | MIT, see `instagram-agent-skill/LICENSE` |

Notes:

- Clips Kitty is AGPL-3.0. Keeping its licence and notice files in place and this repository public satisfies sharing the source, but check the licence before using it as part of a hosted service or changing it.
- Clips Kitty runs as a desktop app on the laptop. Follow its own README to install it; this copy is for reference and version tracking.
- The Instagram skills install by copying `instagram-agent-skill/skills/ig-*` into `~/.claude/skills/`.
- Add secrets, API keys and tokens to neither folder. This repository is public.
