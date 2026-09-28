# Final design document

## Concept

Through the Curtain is a minimal interactive experience set inside a realistic, nostalgic train carriage. The viewer opens and closes a one-sided fabric curtain to discover three landscapes. Generated imagery, time-of-day lighting, piano, poetic captions, train ambience, and a subtle DV texture work together to suggest quiet virtual travel.

## Intended audience

The experience is designed for people who want a calm, accessible moment of virtual travel, with particular relevance for people with limited mobility who cannot easily travel or experience nature outdoors.

## Design intention

The project was inspired by the creator's grandparents, who have difficulty walking and cannot easily travel outside. Its purpose is to offer a small virtual way to encounter different landscapes while sitting comfortably. The final train setting replaced the original car concept because a vintage train better supports nostalgia, slowness, and reflection.

## Core interaction

**Open the train-window curtain → reveal the next landscape.**

Closing the curtain covers the current scene. It does not advance the sequence. When the curtain is opened again, the next landscape appears.

## Interaction flow

1. The page loads as a full-screen vintage carriage with the curtain closed.
2. The initial invitation slowly blooms into view: “Pull the curtain open, and let the journey begin.”
3. The user opens the curtain. The invitation dissolves, the next landscape appears, a scene-specific piano phrase plays, and the carriage lighting gradually responds to the scene.
4. A subtle poetic caption appears near the lower center while the scene remains open.
5. The user closes the curtain. The same scene remains behind it and the carriage returns to its default scene-lighting state.
6. The next opening advances to the following landscape. The three scenes repeat in sequence.

The curtain is a warm brown, one-sided fabric element. It extends beyond the framed opening when closed, gathers to the left when opened, and has very restrained idle movement.

## Final scenes

| Scene | Landscape | Time of day | Piano mood | Caption |
| --- | --- | --- | --- | --- |
| 1 | Mountain landscape, vegetation, and wooden path | Morning | Gentle and peaceful | “The road disappears into the mountains, and the morning follows.” |
| 2 | Traditional old town | Sunset | Warm and nostalgic | “The last light settles softly on the streets we pass.” |
| 3 | Open grassland | Nighttime | Sparse, calm, and slightly melancholic | “Under the endless sky, there is nowhere else to be.” |

## Landscape direction

The three landscapes use realistic generated imagery rather than CSS shapes or geometric illustrations. Each image is cropped to completely fill the framed view. The scenes use atmospheric depth and a slightly nostalgic photographic quality while remaining visually distinct.

## Time-of-day and interior-lighting direction

The morning scene gradually brightens the carriage, the sunset scene introduces warm golden-orange light, and the night scene gradually darkens the carriage. These changes are synchronized with the curtain opening. The night landscape keeps its original image brightness while the carriage interior becomes darker.

A separate bulb control switches the carriage interior between its normal state and an approximately 70% darker state. This dimming layer affects the carriage and curtain without dimming the landscape outside, and it preserves the underlying scene color treatment.

## Audio direction

Each scene has a short, simple piano phrase played when the curtain is used. The notes change with the active landscape. A recorded train ambience loops at 50% default volume and has a minimal volume slider and on/off button. The page attempts to start the train recording on load; when browser autoplay policy blocks it, the first natural user interaction retries playback.

## Caption direction

The initial invitation appears only in the default state after a page load. It emerges from a softly blurred, diffused state and dissolves on the first opening. It does not return during normal scene cycling.

Scene captions use restrained, slightly translucent 22px italic typography near the lower center of the viewport. They fade gently with scene changes and do not use panels, boxes, or title styling.

## Visual direction

- Full-viewport realistic vintage train carriage with aged wood, upholstered seats, lamps, brass details, framed artwork, and subtle decorative patterns
- A framed landscape opening integrated into the central carriage wall
- Warm brown curtain with a brown-to-deep-brown gradient and soft fabric folds
- Realistic generated landscapes with a subtle glass/film treatment
- Faint full-page DV/old-video grain, restrained scanlines, and very subtle flicker
- Minimal bottom controls for train volume, train sound, and carriage light
- No separate black webpage frame and no multi-page interface

## Implemented requirements

- Single-page HTML/CSS/JavaScript experience
- One primary curtain interaction
- Three complete landscape/time-of-day scenes
- Scene-specific piano phrases
- Recorded train ambience with volume and on/off controls
- Gradual scene-responsive carriage lighting
- Independent carriage light on/off control
- Initial invitation and three poetic scene captions
- Realistic generated carriage and landscape assets
- Subtle vintage DV texture
- Responsive full-viewport layout

## Features intentionally excluded

- Multi-page travel content, navigation, booking, accounts, maps, or itineraries
- Additional major interactions unrelated to the curtain
- Frameworks or complex application architecture
- Full video landscapes
- Convincing carriage motion or naturally animated landscape elements

## Possible future development

If the project continues, the main open direction is subtle physical motion. This could include a more convincing sense of train movement and naturally moving elements in the landscapes. Producing these effects would likely require video assets and more advanced motion design.

## Final decision status

The train setting, intended audience, one-sided curtain behavior, three scenes, generated-image approach, captions, piano, recorded train ambience, time-of-day lighting, DV texture, and minimal controls are final decisions for this version. The only documented future direction is more convincing carriage and landscape motion.
