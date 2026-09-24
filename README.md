# Project Ares · First-time experience preview

I’ve put together five screens to show my proposed first-time experience: choosing a certification plan or a single learning path, starting training, reading the briefing, and selecting Begin activity.

I’m using a static globe in this design prototype. I’ve kept it separate from live accounts, attempts, and progress. I show a preview notice for controls outside the walkthrough, and I load the fonts from Google Fonts.

See THIRD_PARTY_NOTICES.md for imagery and source attribution.

## Unified gallery and fitted screens
The root index now lists every design version, including the earlier explorations. Each screen has a standalone page and a Full screen action. The preview canvas is fixed at 1920x1080 and scales proportionally to fit the available area; extra-wide or tall displays use centered margins. Site-level scrolling is disabled. Existing in-screen reading areas and dialogs retain their own controls.

The original editable HTML and previous overview documents are retained locally in previews/gallery-originals. After rebuilding and copying changed source screens into this publishing checkout, run previews/build_gallery.py to restore the gallery and fit wrappers. Do not edit escaped srcdoc content directly. Shared gallery files are gallery.css, gallery.js, and generated gallery-data.js.
