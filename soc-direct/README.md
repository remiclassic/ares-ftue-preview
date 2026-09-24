# SOC Control / Direct paths

I interpreted the feedback as two focused states: choosing a Learning Path directly, then viewing an already-selected path. This is an additive concept.

## Source review

Reviewed origin/main at 51946181e: PathsExperience.tsx, PathsExperience.module.css, NoActiveSelection.module.css, SelectionConsoleOverlay.module.css, and docs/guides/terminology.md. The reviewed styles match the local checkout.

The background image has been removed. Both states now use an expanded 1840 × 928 content panel within the 1920 × 1080 canvas, with larger cards, module rows, typography, and actions. The concept retains dark squared SOC panels and Rajdhani / Roboto Mono typography. Gold identifies selection and the main action.

## Intentional changes

- No global navigation, sidebar, app tabs, world-map action, globe, rank, XP, or explainer video.
- Start with Learning Path choices, without a preceding Program-versus-Path chooser.
- The selected path shows its modules and selected-module detail across the available screen area.
- Change learning path is a contextual action, not global navigation.
- View Briefing opens a modal. Begin Activity ends the preview without creating a live attempt.
- Path names, durations, modules, and prerequisite states are illustrative sample data, not a claimed live catalog or reproduction of production behavior.
- Gallery navigation belongs to the review tool, outside the product screens.

## Deliverables

- 01-paths.html: direct path choice.
- 02-selected.html: already-selected path; accepts path=cyber, network, or defense.
- index.html: gallery entry with standalone/fullscreen links.
- [Figma design](https://www.figma.com/design/Niz8y7B5viQ3kRd6Mr0pj9?node-id=395-2522)

Originals: previews/soc-direct. Generator: previews/build_soc_direct.py. Published pages use the shared 1920x1080 fit wrapper. No prior screen files were modified for this addition.
