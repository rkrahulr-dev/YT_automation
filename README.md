# GTA 6 fan page automation

Files and scripts for the AI Play Hub GTA 6 fan page (Instagram first, YouTube Shorts later).

The plan, calendars and approval gates live in Notion. This repo holds the files the automation needs.

## Folders

- `brand/` brand tokens (colors, fonts, spacing)
- `slides/` carousel copy as JSON and the script that renders 1080x1350 slide images
- `out/` rendered images (not committed)

## Rules

- This repository is public. Never commit tokens, API keys, passwords or private streamer messages.
- Nothing here posts anything. Posting needs your approval on the specific post.
- Facts in carousel copy must be checked against the game or a named source first.

## Render a carousel

```bash
npm install
node slides/render.js slides/2026-11-24-settings.json
```

Images appear in `out/<file name>/` as 1080x1350 PNGs. Pass `light` as a second argument for the light theme.
Facts in a carousel file stay unchecked until `factChecked` is set to true after checking the game or a named source.
