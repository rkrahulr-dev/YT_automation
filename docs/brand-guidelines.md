# AI Play Hub brand guidelines

The full page is the AI Play Hub Brand Guidelines design system on claude.ai. Tokens are in `brand/tokens.json`.

AI Play Hub is a fan page for GTA 6 clips, settings, tips and news on Instagram, with YouTube Shorts to follow. It is not made or endorsed by Rockstar Games or Take-Two. The channel name is still open; where this book says AI Play Hub, swap the final name in.

## The GTA 6 look

The brand is a Vice City sunset seen from Leonida: a deep violet night, a hot pink to orange sky, a gold sun, turquoise neon and palm silhouettes. It borrows the mood of the game's marketing, never its logos, lettering or art. Two layers carry it: flat graphics (type, stripes, vector sun) and AI scene art (see Scene art).

- Build every cover as one scene: `sky` at the top fading through `pink` to `orange` at the horizon, a `gold` sun with slits cut across its lower half, a `night` ground with a `cyan` perspective grid, and palm silhouettes in `night`.
- Use the sunset gradient only inside that scene, on covers and the last slide. Slides in between stay flat `night`.
- Palms are silhouettes drawn in `night`, trunk and five fronds, placed at a scene edge. Never more than two per vector scene.
- In graphics, neon lines are flat 3px strokes in `pink` or `cyan`. No glow, blur or shadow. Scene art (below) may glow.
- The sun is a `gold` disc cut by horizontal slits that widen toward the bottom.
- Headlines are tall poster capitals, left aligned, stacked on two to four lines.
- The roman numeral VI may appear as plain text in the headline font. Do not recreate the official GTA 6 logo, its lettering or its sunset artwork.

## Scene art (AI-generated images)

Covers, stories, the profile photo and thumbnails can use AI-generated scene art. Seven reference images set the look. They are fan art, so they are kept out of the repo, and only what they teach is written down here. Every AI image follows the five looks below, with one shared palette, one cast and one set of rules.

### The five looks

| Look | Use it for | What defines it |
| --- | --- | --- |
| Aerial golden hour | Carousel covers, news posts, YouTube thumbnails | High drone view over a cable-stayed bridge and a coastline, helicopters with searchlights, yachts, a low sun and a dramatic cloud sky. Hot pink and orange sky over turquoise water. |
| Neon dusk street | Stories, reel title cards, covers | Wet road mirroring the sky, a tall palm framing one side, a vertical neon sign, magenta and violet twilight, a skyline across the water. |
| Painted ensemble | The "what this page is" pin, Highlights, collab posts | Painterly illustrated cast posed in a group, pastel pink and teal Art Deco hotels behind, fading to clean white at the bottom. |
| Leonida day street | Tips and settings posts, "first hour" content | Sunny, slightly gritty everyday scene: a two-storey motel, utility poles, a water tower, a character seen from behind. Real blue sky, hard shadows. |
| Flat Deco sunset | Profile photo, Highlight icons, story backgrounds, any slide that needs calm | Vector style. Purple to pink to orange sky gradient, palm silhouettes in a muted violet, pastel Art Deco buildings, a few gulls. Nearest to the in-house cover scene. |

### Palette for scene art

Scene art leans on the same colors as the graphics, so the two layers match. Sky runs `sky` violet through `pink` to `orange`. Water, neon and shadows lean `cyan`. The sun and highlights are `gold`. Keep the lower third of the frame darker so overlaid text reads. Neon glow, wet-road reflections and soft light are allowed in scene art and nowhere else.

### The cast

The characters are invented. They are adults and look like nobody real, and they are not the game's official characters.

- The Driver: tank top, cargo shorts, watch, seen from behind or over the shoulder. The default hero of a Leonida day street.
- The Boss: silver hair, linen blazer in pink or cream, open collar, drink in hand.
- The Local: tattoos, gold chain, black tank top, sunglasses.
- The Officer: dark vest marked POLICE, ponytail, sunglasses. Only for chase and news art.
- Wardrobe: palm-print and floral short-sleeve shirts, linen, denim, bandanas, tinted sunglasses, gold chains. Keep outfits everyday, not swimwear, so posts stay brand safe and reachable.
- Framing: back view, over the shoulder, or sitting on a car, looking at the skyline. Faces stay small. Never a close-up portrait.
- Cars and aircraft: a pink retro sports car, a red supercar, a yellow cab, news helicopters, white yachts. No real brand badges and no readable plates.

### Rules for every AI image

- Carousels are made in ChatGPT, text included, from the prompt pack Claude supplies for each post (see `docs/carousel-prompt-pack.md`). Rahul checks every word of slide text against the pack before it is saved. For every other image (profile photo, stories, thumbnails) the prompt says no text, and words are added afterwards.
- No Rockstar or Take-Two logo, no GTA wordmark, no VI logo, no official artwork, no game UI. Reject any output that has one baked in, even faint (a test with a reference image showed a baked-in logo bleeding through the shade).
- Scene art is mood, never evidence. Do not use it in news, settings or tips posts as if it were gameplay. In those posts it may only sit behind the cover, and the caption never says "gameplay".
- Turn on Instagram's AI label for every post that uses AI imagery.
- No real people, celebrities or streamers' likenesses. Streamer clips use the real clip, never an AI version.
- One look per post. Do not mix aerial and street in the same carousel.
- Cover images keep the top 40% as calm sky or dark space for the headline. Stories keep the lower third quiet.

### Using scene art in slides

Fallback when ChatGPT is not used: add `"image": "path/to/file.png"` to a cover slide in the deck JSON. The renderer fills the slide with the image, darkens the top and bottom with `night` so the headline and handle read, and drops the in-house sun scene. Middle slides stay flat `night`.

The ready-to-paste prompts are in `docs/ai-image-prompts.md`.

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
- In graphics (type, stripes, vector scenes) there are no drop shadows or blur effects. Photos come only from the scene art rules below, never from stock libraries, game screenshots or guns.

## Profile and channel

- Profile photo: the Flat Deco sunset look as an emblem: the gold striped sun over a pink and orange horizon with one palm silhouette, on `night`. No text, readable at 40px.
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
