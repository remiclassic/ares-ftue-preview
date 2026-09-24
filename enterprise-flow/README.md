# My complete Pathfinder enterprise onboarding

I preserve every earlier preview and Figma pass. This directory adds five separate, standalone HTML screens and an index.html overview with all five embedded interactively via srcdoc. Each HTML includes its CSS and JavaScript; only the optional Inter web font is external.

## My screens

1. 01-choose.html — choose a Program or Learning Path.
2. 02-programs.html — review Cyber Defense Analyst and its first Learning Path.
3. 02-paths.html — review Cybersecurity Basics and its module sequence.
4. 03-briefing.html — review the first module and Begin Activity.
5. 04-modules.html — review/select modules through a structured list.

My dark theme uses charcoal surfaces and muted gold accents from the supplied reference. My light theme retains the neutral/teal enterprise palette. Theme selection persists locally; ?theme=light and ?theme=dark explicitly select a theme. The overview toggle updates its five embedded screens together.

I use canonical Program, Learning Path, Module, Video, Mission, Knowledge Check, and prerequisite-credit terms. This remains sample curriculum and gating data, not a production rule specification. Mission labels follow the earlier preview's sample types. A Mission is range-based content, independent of the map presentation. Begin Activity opens a preview endpoint without creating an attempt.

## My verification

Both onboarding routes reach the briefing. Begin Activity opens the endpoint. Module selection updates details. Locked modules have disabled Begin controls and explain prerequisite credit. Embedded overview navigation and theme switching work. All five screens have no horizontal overflow at 900x600. The module screen also passes 900x1600 and 3440x1440; ultrawide content is bounded to 1456px. Vertical scrolling is intentional at small heights.

## My Figma board

https://www.figma.com/design/Niz8y7B5viQ3kRd6Mr0pj9?node-id=374-1890

Pass D sits beside Pass C on page 332:1218. Five light screens above five matching dark screens. 640 editable Inter text layers, 46 component instances, a semantic theme collection, and a local component library. Earlier Pass A, B, and C are preserved.

Live overview: https://remiclassic.github.io/ares-ftue-preview/enterprise-flow/

Local generator: ../build_enterprise_flow.py. Capture-only files are not published.
