# AI Play Hub brand guidelines

The full page is the AI Play Hub Brand Guidelines design system on claude.ai. Tokens are in `brand/tokens.json`.

AI Play Hub is a fan page for GTA 6 clips, settings, tips and news on Instagram, with YouTube Shorts to follow. It is not made or endorsed by Rockstar Games or Take-Two. The channel name is still open; where this book says AI Play Hub, swap the final name in.

## The GTA 6 look

The brand is a Vice City sunset seen from Leonida: a deep violet night, a hot pink to orange sky, a gold sun, turquoise neon and palm silhouettes. It borrows the mood of the game's marketing, never its logos, lettering or art.

- Build every cover as one scene: `sky` at the top fading through `pink` to `orange` at the horizon, a `gold` sun with slits cut across its lower half, a `night` ground with a `cyan` perspective grid, and palm silhouettes in `night`.
- Use the sunset gradient only inside that scene, on covers and the last slide. Slides in between stay flat `night`.
- Palms are silhouettes drawn in `night`, trunk and five fronds, placed at a scene edge. Never more than two per scene.
- Neon lines are flat 3px strokes in `pink` or `cyan`. No glow, blur or shadow.
- The sun is a `gold` disc cut by horizontal slits that widen toward the bottom.
- Headlines are tall poster capitals, left aligned, stacked on two to four lines.
- The roman numeral VI may appear as plain text in the headline font. Do not recreate the official GTA 6 logo, its lettering or its sunset artwork.

## Content fundamentals

- Write short, plain sentences in second person. Say "you" and name the thing: "Turn on Mute Licensed Music."
- Lead with the specific fact or moment, never "Hey guys" or "Check this out". Cover lines are six words or fewer, in capitals.
- No emoji in slides or captions. One emoji at most in the bio.
- Every clip credits the streamer by name and platform in the caption: "Clip: <streamer> on <platform>, credited with permission." Only use this line once permission is confirmed.
- Label the page as a fan page in the bio. Never imply a link to Rockstar or Take-Two.
- State facts only when checked against the game or a named source. Name the source in the caption when it comes from a guide: "Based on two launch-week guides, not Rockstar."
- Hashtags: three per post, placed below the first lines. Use `#GTA6`, `#GTAVI` and one topic tag.
- Ask for one action per post: save, comment or follow.

## Visual foundations

- Background is `night`, text is `ink`. Use `night-raised` only for a card or panel and `sky` only inside a scene.
- `pink` carries the hook word and the main accent. `orange` marks highlights and numbers. `gold` is the sun. `cyan` marks links, tags, the handle and the grid. Use at most two accents on one slide.
- Put text on an accent fill in `on-accent`, never in `ink`.
- Headlines use the `display` family (Anton) in `display-xl`, `display-lg` or `title`, in capitals. Body text uses `body` in the `sans` family. Small labels and slide numbers use `label` in the `mono` family.
- Carousel slides are 1080x1350. Use `slide-cover` for the cover line and `slide-headline` for each slide headline, `slide-body` for text under it and `slide-meta` for the handle and slide number. Keep all text inside `slide-margin` on every side.
- Every slide carries a three-line sunset stripe across the top in `pink`, `orange` and `gold`, each 8px, with 8px gaps.
- Number every slide (3/8) in `slide-meta`, muted. Put the handle in the bottom corner of every slide in `cyan`.
- The recap slide lists every point in one view. It is the slide people screenshot, so it must read without the others.
- Reels and stories are 1080x1920. Keep text between y=250 and y=1600, and inside the middle of the frame. Lower-third captions sit on a `night` strip, never directly on footage.
- Corners come from the radius tokens: `radius-lg` on color blocks and cards, `radius-pill` on the profile photo circle.
- No drop shadows, no blur effects, no stock photos of cars, guns or cityscapes.

## Profile and channel

- Profile photo: the gold striped sun over a pink and orange horizon with one palm silhouette, on `night`. No text, readable at 40px.
- Name field: the page name plus the niche in words people search, within 30 characters.
- Bio: four lines. What it posts, how clips are credited, the fan-page notice, and where the full videos are.
- Highlights: Settings, News, Clips, Tips, each with a sun-and-palm icon on `night`.
- Pin three posts: the best streamer clip, the settings carousel and a post that says what the page is.

## Iconography

There is no logo yet. Set the name in the `display` family until one exists, and add it under assets when chosen. The only graphic motifs are the striped sun, the palm silhouette and the grid horizon. Never use Rockstar or Take-Two logos, GTA lettering, game art or screenshots as brand elements.

## Color tokens

| Token | Dark | Light | Use |
| --- | --- | --- | --- |
| night | #12062b | #f6f1fb | Page and post background. Deep Leonida night. Every slide, cover and profile graphic sits on it. |
| night-raised | #1d0f3f | #ffffff | Cards and panels on night. Never the only thing that separates two areas. |
| sky | #2a1250 | #e9dcf7 | Top of the sunset sky and scene backgrounds. Text on sky is ink or muted only, never pink. |
| ink | #f6efff | #1b1030 | All text on night, night-raised and sky. Headlines and body copy. |
| muted | #b9aed3 | #5b4f78 | Secondary text on night, night-raised and sky: captions, credit lines, slide numbers. |
| pink | #ff3d8b | #c7125e | Neon pink: hook words and the main accent. Text in pink only on night and night-raised. |
| orange | #ff8a3d | #b8480a | Sunset orange: highlights, numbers and the lower sky. Second accent. |
| gold | #ffc93c | #8a5d00 | Sun gold: the sun disc and small highlights. Text in gold only on night, night-raised and sky in the dark theme. |
| cyan | #2ad4d0 | #08766f | Turquoise neon: links, tags, handle and the grid horizon. Third accent, used least. |
| on-accent | #12062b | #ffffff | Text on a pink, orange, gold or cyan fill. Never ink on an accent fill. |

Fonts (free on Google Fonts): Anton for headlines, DM Sans for body text, JetBrains Mono for small labels. Carousel sizes: cover 150px, slide headline 104px, body 44px, handle and number 32px, on a 1080x1350 slide with a 120px margin.
