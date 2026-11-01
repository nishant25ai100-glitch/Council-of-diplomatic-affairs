# Editorial Newspaper Collage Accents Integration

Integrate authentic newspaper collage cutouts from the provided artwork into the outer margins and gutters of key conference sections (Hero, About, and Committees), enhancing the diplomatic newsroom and global affairs atmosphere without obscuring any typography or interactive controls.

### User Review & Critical Decisions

> [!IMPORTANT]
> The following directions have been confirmed based on your clarifying answers and will be implemented upon approval:
> - **Section Placement**: The newspaper cutouts will flank the **Hero**, **About**, and **Committees** sections in the outer margins, framing the content without interfering with layout flow.
> - **Visual Elements & Collage Styling**: We will spotlight curated cutouts from your uploaded collage—specifically the **engraved scales of justice** and the **vintage torn newsprint typography blocks**—styled with realistic torn paper edges, subtle tilt angles, and soft drop-shadows.
> - **Responsive Governance**: All cutout elements will be set to `hidden lg:block` (or lowered to an ambient watermark on tablet), ensuring mobile viewports remain 100% focused on legible text and smooth tap interactions.

---

### 1. Overview & Core Concept

- **What It Does**: Frames the landing page with tasteful, physical-style newspaper collage clippings along the screen edges. Delegates browsing the Model United Nations experience feel an immersive, diplomatic press and international assembly aesthetic.
- **Target Audience / Persona**: High school and university delegates, faculty advisors, and conference guests who appreciate polished editorial craftsmanship and thematic Model UN storytelling.
- **Key Value**: Replaces sterile negative space at wide viewports with thematic, high-craft physical collage artifacts that celebrate international justice, freedom of the press, and debate diplomacy.

---

### 2. User Experience & Visual Design

- **Flank Placements**:
  - **Hero Section (Diplomatic Press Debut)**:
    - *Right Flank*: An angled torn newspaper broadsheet clipping ("You don't...", newsprint columns) extending gracefully into the outer right gutter, secured by a simulated transparent archival tape accent.
    - *Left Flank*: The classical hand with scales of justice engraving cutout floating quietly on the left perimeter.
  - **About Section (Foundations & Mandate)**:
    - *Left Flank*: Vintage newsprint snippet paired with halftone texture accents, framing the mission statement.
    - *Right Flank*: The intellectual brain-with-glasses & pushpin motif or subtle torn newspaper border framing the statistics column.
  - **Committees Section (Debate Chambers)**:
    - *Perimeter Flanks*: Torn newsprint strips along the outer container edges, visually connecting the agenda cards with global current affairs reporting.
- **Visual Styling & Craft**:
  - **Zero-Overlap Guarantee**: Placed strictly in `pointer-events-none select-none` absolute outer containers with negative margins or fixed gutter bounds (`-left-12 lg:-left-24` and `-right-12 lg:-right-24`), well outside the central `max-w-6xl` content container.
  - **Torn Paper & Collage Aesthetics**: Irregular polygon clipping masks, soft drop-shadows (`drop-shadow-md`), slight rotational skews (-2° to +3°), and warm parchment blending.
  - **Mobile Discipline**: Completely hidden on smaller screens (`hidden xl:block` or `hidden lg:block`) to maintain 100% legibility and zero viewport clutter.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Curated Element Cropping vs. Full Image Strips**
  - *Chosen Approach*: Create targeted cutout viewers focused specifically on the **scales of justice** and **torn newspaper text**, rather than squeezing the entire uncropped image into margins.
  - *Why*: The original image contains diverse collage pieces; focusing on the scales of justice and vintage broadsheet headlines directly honors the MUN diplomatic theme while looking intentional and bespoke.
  - *Alternatives Considered*: Displaying the full tall image as a continuous sidebar (discarded: causes visual competition and awkward vertical stretching).

- **Decision 2: Pointer Events & Layering Hierarchy**
  - *Chosen Approach*: `pointer-events-none` with negative z-indices relative to interactive elements (`z-0` behind cards, `z-10` above empty background canvas).
  - *Why*: Guarantees buttons, filter tabs, committee cards, and registration triggers can never be accidentally blocked or hindered.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        App.tsx Layout Container                        │
├────────────────────────────────────────────────────────────────────────┤
│  Navbar (Sticky)                                                       │
├────────────────────────────────────────────────────────────────────────┤
│  Hero Section                                                          │
│  ┌───────────────────────┬─────────────────────┬────────────────────┐  │
│  │ Left Cutout Flank     │ Main Hero Content   │ Right Cutout Flank │  │
│  │ [Scales of Justice]   │ [Title, Stats, CTA] │ [Torn Newsprint]   │  │
│  └───────────────────────┴─────────────────────┴────────────────────┘  │
├────────────────────────────────────────────────────────────────────────┤
│  About Section                                                         │
│  ┌───────────────────────┬─────────────────────┬────────────────────┐  │
│  │ Left Cutout Flank     │ About Story & Pillars│ Right Cutout Flank│  │
│  │ [Torn Broadsheet]     │ [Key Metrics Grid]  │ [Editorial Scrap]  │  │
│  └───────────────────────┴─────────────────────┴────────────────────┘  │
├────────────────────────────────────────────────────────────────────────┤
│  Committees Section                                                    │
│  ┌───────────────────────┬─────────────────────┬────────────────────┐  │
│  │ Left Outer Border     │ Committee Filters & │ Right Outer Border │  │
│  │ [Editorial Clipping]  │ 7 Interactive Cards │ [Vintage Gazette]  │  │
│  └───────────────────────┴─────────────────────┴────────────────────┘  │
├────────────────────────────────────────────────────────────────────────┤
│  Schedule & Team Sections (Clean presentation)                         │
├────────────────────────────────────────────────────────────────────────┤
│  Footer & Registration Modal                                           │
└────────────────────────────────────────────────────────────────────────┘
```

- **Component Structure**:
  - `src/components/NewspaperCutout.tsx`: Dedicated modular component supporting element variants (`scales-of-justice`, `newspaper-headline`, `torn-column`, `brain-pin`) referencing `/assets/aistudio/961237114268700755_9a5b4632.jpg`.
  - Configurable rotation, scale, position, and CSS torn-edge clipping paths.
