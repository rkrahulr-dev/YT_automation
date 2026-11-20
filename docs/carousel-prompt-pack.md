# Carousel prompt pack

Carousels are made in ChatGPT by Rahul and saved on the local drive. Claude supplies the pack, Rahul generates the images, Claude publishes on the calendar date after Gate 2.

## How it runs

1. Claude picks a trending, sourced topic, writes the slide copy and the caption, and posts the pack in the thread (this file's format). Notion row moves to Drafting.
2. Rahul checks the facts and the slide wording, then sets Status Approved. Gate 1.
3. Rahul opens one new ChatGPT chat per carousel, pastes the Style prompt, then each Slide prompt in order. One image per message, in the same chat, so the style stays the same.
4. Rahul checks every word on every slide against the pack. ChatGPT often misspells. If a word is wrong, ask "Redo this slide, keep everything but fix the text to exactly: ..." until it matches.
5. Rahul saves the files as `slide-01.png` to `slide-08.png` in a folder named by the date and topic, for example `2026-11-24-settings`, and tells Claude the folder is ready.
6. Claude shows the slides and caption, Rahul approves that post. Gate 2. Claude publishes on the calendar date.

How the files reach Claude is not settled yet. Composio file upload is untested, and the Google Drive connector needs reconnecting. Until it is settled, attach the slides in the thread and Claude uploads from there.

## Format for every pack

- Size: portrait 4:5. Ask for 1080 by 1350. If ChatGPT returns another ratio, crop to 4:5 and keep text inside the middle.
- Number of slides: 6 to 10. First is the cover, second the reason, last the call to action.
- The cover headline is six words or fewer. Every slide has one idea.
- The style prompt is pasted once at the start of each chat. Slide prompts quote the exact text.

## Style prompt (paste first, in a new chat)

I am making an Instagram carousel for a GTA 6 fan page called ai_play_hub. Make each image I ask for as a separate portrait 4:5 image, 1080 by 1350, in the same style. Style: stylized Vice City inspired Florida at sunset, hot pink, magenta and violet sky with orange glow, gold sun, turquoise neon, palm trees, pastel Art Deco buildings. Text style: huge tall condensed poster capitals (like Anton), left aligned, with headline words in hot pink #ff3d8b and the rest white; body text in a clean sans serif (like DM Sans), white; small tags in turquoise #2ad4d0. Three thin stripes across the very top in pink, orange and gold. Deep violet #12062b is the base color for any plain slide. Small turquoise handle "@ai_play_hub" at the bottom left and the slide number at the bottom right. Keep all text at least 100 pixels from every edge. Spell all text exactly as I write it, in quotes. No Rockstar or GTA logos, no game interface, no real people, no extra text. Characters are invented adults in everyday clothes, seen from behind or small in frame. Reply "ready" and wait for my first slide.

## Slide prompt format

`Slide N of T. <role>. <exact text with colors>. <scene or background>. Handle "@ai_play_hub" bottom left, "N/T" bottom right.`

## Example: Tuesday 24 Nov, "4 GTA 6 settings to change"

Status: Drafting. Fact checked is not ticked, because the menu names have not been checked in the game. Sources: space4games (18 Nov) and allthings.how (19 Nov).

### Slide 1

Slide 1 of 8. Cover. Look: Leonida day street. Headline, 3 lines, huge: "4 GTA 6" in hot pink, "SETTINGS TO CHANGE" in white. Smaller line below: "Do these before your first mission." Scene: a muscular man in a black tank top seen from behind, walking down a sunny sidewalk toward a red-pink motel, muscle car, water tower, palms, blue sky. Keep the top 40% as open sky for the headline. Handle "@ai_play_hub" bottom left, "1/8" bottom right.

### Slide 2

Slide 2 of 8. Text slide. Headline in pink: "WHY BOTHER". Body in white: "A few defaults get in the way of reading text, spotting turns, or recording clean video.". Background: flat deep violet, plain, no scene. Handle "@ai_play_hub" bottom left, "2/8" bottom right.

### Slide 3

Slide 3 of 8. Text slide. Headline in pink: "SUBTITLES". Body in white: "Set subtitles to show outside missions too.". Small tag in turquoise: "Menu: UI". Background: flat deep violet, plain, no scene. Handle "@ai_play_hub" bottom left, "3/8" bottom right.

### Slide 4

Slide 4 of 8. Text slide. Headline in pink: "MINIMAP". Body in white: "Keep it always on while you learn the map.". Small tag in turquoise: "Menu: UI, Navigation". Background: flat deep violet, plain, no scene. Handle "@ai_play_hub" bottom left, "4/8" bottom right.

### Slide 5

Slide 5 of 8. Text slide. Headline in pink: "TEXT SIZE". Body in white: "Small is the default. Go Medium or Large if you sit far from the screen.". Small tag in turquoise: "Menu: UI". Background: flat deep violet, plain, no scene. Handle "@ai_play_hub" bottom left, "5/8" bottom right.

### Slide 6

Slide 6 of 8. Text slide. Headline in pink: "MUSIC". Body in white: "Streaming or recording? Turn on Mute Licensed Music.". Small tag in turquoise: "Menu: Audio". Background: flat deep violet, plain, no scene. Handle "@ai_play_hub" bottom left, "6/8" bottom right.

### Slide 7

Slide 7 of 8. Recap slide, the one people screenshot. Headline in pink: "THE 4 SETTINGS". Numbered list in white, numbers in orange: 1. Subtitles outside missions; 2. Minimap always on; 3. Text size Medium or Large; 4. Mute Licensed Music. Background: flat deep violet, plain. Handle "@ai_play_hub" bottom left, "7/8" bottom right.

### Slide 8

Slide 8 of 8. Last slide. Headline in pink: "SAVE THIS". Line below in white: "For your first session." Background: Flat Deco sunset look (violet to pink to orange sky, palm silhouettes, pastel Art Deco buildings), calm sky at the top for the text. Handle "@ai_play_hub" bottom left, "8/8" bottom right.

### Caption

These 4 GTA 6 settings are worth changing before your first mission. Where to find each is inside.

Based on two launch-week guides, not Rockstar. Save this for your first session.

#GTA6 #GTAVI #GTA6Tips

### Alt text

Cover slide reading 4 GTA 6 settings to change.
