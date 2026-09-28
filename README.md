# Through the Curtain

**Author: Sammi**

## Project description

Through the Curtain is a small, single-page browser experience set inside a nostalgic vintage train carriage. The user opens and closes a warm brown curtain to reveal three realistic, AI-generated landscapes at different times of day. Each scene combines imagery, a gradual change in carriage lighting, a short piano phrase, and a subtle poetic caption to create a quiet feeling of travel.

## Inspiration and design motivation

My grandparents have difficulty walking and cannot easily travel or go outside to experience nature. This project was inspired by the idea of giving them, and other people with limited mobility, a small virtual way to experience different landscapes while sitting comfortably. My original concept used a car, but I changed it to a train because the train felt more nostalgic and better expressed the desire to slow down in a rapidly developing modern society.

## Intended audience

The experience is for people who want a brief, calm, and emotionally gentle form of virtual travel. It has particular relevance for people who cannot easily travel or spend time outdoors, but the interaction is intentionally simple enough for a broad audience.

## Intended experience

The viewer should feel as if they are sitting alone inside an old train carriage. Pulling back the curtain reveals a different place and time of day outside. The realistic landscapes remain the visual focus while the interior light, piano, captions, train ambience, and restrained vintage-video texture support a quiet, intimate, and slightly dreamlike mood.

## Core interaction

**Open the train-window curtain → reveal the next landscape.**

Closing the curtain hides the current landscape without skipping it. The next scene appears only when the curtain is opened again. On the initial page load, the invitation “Pull the curtain open, and let the journey begin.” appears once and dissolves when the first scene is opened.

## Final scenes

1. **Mountain landscape and wooden path — morning**
   - Misty mountains, rural vegetation, and a wooden walkway
   - Brighter natural morning light in the carriage
   - Gentle, peaceful piano phrase
   - Caption: “The road disappears into the mountains, and the morning follows.”
2. **Traditional town — sunset**
   - An old town in warm evening light
   - Gradual golden-orange light in the carriage
   - Warm, nostalgic piano phrase
   - Caption: “The last light settles softly on the streets we pass.”
3. **Grassland — nighttime**
   - Open grassland beneath a moonlit sky
   - A darker carriage interior while the landscape retains its own brightness
   - Sparse, calm piano phrase
   - Caption: “Under the endless sky, there is nowhere else to be.”

## Final visual and audio design

The full viewport is a realistic vintage train carriage with aged wood, seating, lamps, framed artwork, and restrained decorative details. The landscape images are realistic generated assets rather than CSS shapes or simple geometric illustrations. A warm brown one-sided curtain gathers to the left when opened and has subtle idle fabric movement. A faint full-page DV/old-video texture adds grain, scanline texture, and restrained flicker without obscuring the scene.

The carriage lighting gradually responds to each landscape: morning is brighter, sunset is warmer, and nighttime is darker. A small bulb control can additionally dim only the carriage interior by about 70%, leaving the outside landscape unchanged. Each scene has its own short piano phrase. A supplied train recording loops in the background at 50% default volume and has a minimal volume slider and on/off control. The page attempts to start the train sound immediately; if a browser blocks audible autoplay, the first user interaction retries playback.

## How AI was used

I used Codex to help plan, implement, inspect, test, revise, and document the experience in HTML, CSS, and JavaScript. AI image generation helped create the realistic train-carriage and landscape assets. I directed the concept, audience, interaction, scene choices, mood, visual references, lighting behavior, sound direction, and revisions based on what I observed while testing.

### Selected prompts

These are representative prompts I used while developing and revising the project:

- “Open/close the train window curtain → the landscape outside the window changes.”
- “The entire webpage can be based on a generated realistic train-carriage scene. I want to see much more of the interior of the train carriage, not just a huge window.”
- “Create a realistic, cinematic, nostalgic mountain landscape with majestic distant mountains, soft atmospheric depth and natural mist, a beautiful rural environment, and a small wooden path.”
- “The interior lighting should respond to the time of day outside the window.”
- “Add a very subtle full-page vintage DV / old-video texture effect to the entire index experience.”

## Testing and revisions

I repeatedly tested the curtain through all three scenes and revised the sequence so closing the curtain keeps the current scene while the next landscape appears only on the following opening. I also checked the landscape cropping, curtain coverage and movement, scene captions, responsive full-page composition, train-audio controls, interior light control, and time-of-day lighting. Earlier versions used a car-window idea, a sliding gesture, CSS-like landscape shapes, and less integrated window framing. Testing led me to change the setting to a train, use a one-sided curtain, replace simple visuals with realistic generated imagery, refine the screen framing, and coordinate the captions, audio, and gradual lighting with the scene changes.

## Reflection

I feel that the nostalgic train carriage and warm atmosphere provide the gentle and inclusive emotional experience I intended, and this connects with my original motivation for the project. I wanted people who are unable to travel outside their homes to still experience different landscapes through one simple interaction. My original idea used a car, but I changed it to a train because it felt more nostalgic and better reflected the desire to slow down in a rapidly developing modern society. While testing, I found that landscapes built only from Codex-generated interface elements looked like simple color blocks and did not have the beauty or atmosphere I wanted, so I replaced them with more realistic generated scenes. I also revised the curtain behavior, scene presentation, lighting, captions, and audio to make the experience feel more coherent and immersive.

Codex helped me turn my ideas about color, lighting, music, and interaction into a working browser experience, but I needed to decide the emotional purpose, audience, train setting, visual mood, scene structure, and whether each revision actually supported the feeling of travel. I especially wanted the light and color outside the window to affect the carriage gradually across brighter daytime, warm sunset, and darker nighttime states, while the changing piano and ambient train sound supported immersion. What remains unresolved is movement: I originally hoped the carriage itself could have a subtle sense of motion and that elements in the landscapes could move naturally. Achieving this convincingly would require significantly more work, including video assets and more advanced motion effects. If I continue the project, I would like to develop that part further.

## Project structure

- `index.html` — page structure and accessible controls
- `styles.css` — carriage composition, curtain animation, lighting, captions, responsive layout, and DV texture
- `script.js` — scene sequencing, curtain behavior, captions, lighting state, piano, train audio, and controls
- `assets/` — generated carriage and landscape images
- `kokoreli777-inside-old-train-169418.mp3` — recorded train ambience
- `DESIGN.md` — final design decisions and interaction details
- `AGENTS.md` — instructions for future AI-assisted development

## External audio credit

The recorded train ambience was sourced from [Pixabay's train sound-effects collection](https://pixabay.com/sound-effects/search/train/). The exact individual sound-effect page and creator cannot be determined from the current project files, so this documentation does not claim a specific creator or license name.

## How to run the project

The project uses plain HTML, CSS, and JavaScript and does not require package installation or a build step.

For the most consistent browser behavior, open Terminal in the `5003_project_1` folder and run:

```bash
python3 -m http.server 4173
```

Then open [http://localhost:4173/](http://localhost:4173/) in Chrome. Opening `index.html` directly also displays the experience, but browser audio behavior can differ when using a local `file://` address.
