# AI-assisted development instructions

## Project scope

- Keep all project files, code, assets, and documentation inside `5003_project_1`.
- Keep the project small and appropriate for an individual class assignment.
- Preserve the final design intention: create a calm feeling of virtual travel inside a nostalgic vintage train carriage.
- Keep the project as a single-page experience.
- Prioritize a working, testable prototype over technical complexity.

## Final interaction behavior

- The main interaction is **open the curtain → reveal the next landscape**.
- Closing the curtain hides the current landscape but must not advance the scene.
- The following opening advances to the next scene.
- Preserve the three-scene sequence: mountain/wooden path in the morning, traditional town at sunset, and grassland at night.
- Do not replace the curtain with a sliding-window interaction or return the project to a car-window concept.
- Do not add unnecessary interactions or turn the project into a multi-page travel website.

## Final design behavior

- Preserve the realistic generated carriage and landscape imagery.
- Preserve the full-viewport carriage composition and framed landscape opening.
- Preserve the warm one-sided curtain, poetic scene captions, scene-specific piano, recorded train ambience, gradual time-of-day lighting, interior-light button, and subtle DV texture.
- The initial invitation appears only in the default state and disappears permanently after the first curtain opening until the page is reloaded.
- The carriage light control may darken the interior but must not darken the landscape image.
- Do not make major design decisions that contradict `README.md` or `DESIGN.md` without asking Sammi.

## Implementation approach

- Continue using simple HTML, CSS, and JavaScript unless there is a clear reason to change.
- Make focused changes rather than rewriting the entire project unnecessarily.
- Explain important implementation decisions in clear, plain language.
- Handle browser audio restrictions honestly; code may attempt autoplay, but browser policy can still require a natural user interaction.
- Test changes across the full scene cycle so closing the curtain never skips a scene.
- Keep the layout responsive rather than designing for only one preview size.

## Documentation

- Keep `README.md` and `DESIGN.md` synchronized with the implemented experience.
- Preserve the first-person reflection unless Sammi asks to revise it.
- Do not invent user-testing results, personal experiences, attribution, or licensing information.
- Mark missing personal or submission information as `NEEDS MY INPUT`.

## Git and GitHub workflow

- Do not commit, push, or create a GitHub repository unless Sammi explicitly asks.
- When Sammi authorizes final publication, review the files first, create the requested final commit, push to Sammi's repository, and verify that GitHub contains the final version.
- Add the final repository URL to `README.md` only after the repository exists.
