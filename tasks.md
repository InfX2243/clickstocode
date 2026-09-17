# AWS From Clicks to Code — Implementation Tasks

Implementation status for the cinematic scroll-driven rebuild.

> **Status:** The rebuild is implemented on `main`. The only remaining external inputs are the event-specific RSVP URL and a successful GitHub Actions build run; no missing image asset was encountered.

## Working Rules

- [x] Tasks executed in narrative order.
- [x] Changes kept modular and reviewable.
- [x] No large explanatory copy added.
- [x] One narrative idea per chapter.
- [x] Scroll controls story progression; no story autoplay.
- [x] Screen 1 grand-entry identity preserved.
- [x] Conflicting legacy implementations removed.
- [x] Responsive and reduced-motion rules implemented.

## Phase 0 — Baseline & Cleanup

### TASK 0.1 — Audit the current implementation
- [x] Reviewed `Home.tsx` and existing page components.
- [x] Identified reusable visual concepts and legacy sections.
- [x] Identified duplicate/disconnected implementations.
- [x] Audited `public/images` and existing Amazon Ember fonts.
- [x] Left Screen 1 unchanged during the audit stage.

### TASK 0.2 — Define the new page architecture
- [x] Replaced the linear section model with chapter-based composition.
- [x] Added reusable `CinematicChapter` primitive.
- [x] Kept narrative content colocated with chapter presentation where it remains small and readable.
- [x] Removed the monolithic legacy section imports from `Home.tsx`.

### TASK 0.3 — Establish shared visual tokens
- [x] Consolidated background, text, muted text, accent, border, glow, spacing, and typography in shared CSS rules.
- [x] Reused the existing AWS/Amazon visual identity.
- [x] Standardized terminal, code, console, pipeline, and execution-log styling.
- [x] Added responsive spacing/layout rules.

### TASK 0.4 — Establish scroll/motion infrastructure
- [x] Added reusable `useScrollProgress`.
- [x] Mapped global scroll position into per-chapter progress.
- [x] Removed timer/autoplay progression from the story.
- [x] Added `prefers-reduced-motion` handling.
- [x] Kept animation changes transform/opacity based to avoid layout instability.

## Phase 1 — Preserve & Isolate Screen 1

### TASK 1.1 — Lock Screen 1 as the entry chapter
- [x] AWS SBG MHSSCE branding preserved.
- [x] `AWS From Clicks to Code` preserved.
- [x] Existing cinematic visual treatment preserved.
- [x] `SCROLL TO EXPLORE` preserved.
- [x] Screen 1 remains visually dominant.

### TASK 1.2 — Make Screen 1 transition scroll-driven
- [x] Existing exit treatment retained and driven from scroll progress.
- [x] No auto-dismiss logic remains.
- [x] Scroll works through native wheel/touch/keyboard behavior.

## Phase 2 — Build the First Story Sequence

### TASK 2.1 — Chapter 2: WHAT ARE WE ACTUALLY DOING?
- [x] Generic legacy Hero removed.
- [x] Minimal hands-on journey message added.
- [x] `CLICK → CODE` motif introduced.
- [x] Direct transition from Screen 1 implemented.
- [x] No paragraph-heavy copy.

### TASK 2.2 — Chapter 3: THE CLICK
- [x] Simplified AWS-console-inspired visual built.
- [x] Cursor/click motion tied to chapter scroll progress.
- [x] One infrastructure action shown.
- [x] Labels kept short.
- [x] No full AWS-console recreation.

### TASK 2.3 — Chapter 4: THE PROBLEM
- [x] Manual action repeated visually.
- [x] Repetition/stacking increases with scroll.
- [x] Friction communicated without excessive animation.
- [x] `What if infrastructure could remember what you wanted?` used as the chapter payoff.
- [x] No supporting paragraph.

### TASK 2.4 — Chapter 5: THE TURN
- [x] Console language transitions into terminal language.
- [x] Cursor/action becomes command/code.
- [x] `terraform apply` introduced.
- [x] Command is the visual turning point.
- [x] Progress is scroll-controlled.

## Phase 3 — Code & Infrastructure

### TASK 3.1 — Chapter 6: INFRASTRUCTURE AS CODE
- [x] `HUMAN → CODE → PLAN → INFRASTRUCTURE` visual implemented through chapter framing and scene composition.
- [x] Small Terraform-style fragment revealed through scroll.
- [x] Only relevant code is shown.
- [x] No large listing.
- [x] EC2 result visual uses the supplied `/images/ec2.png` asset.

### TASK 3.2 — Rebuild/replace StoryPipeline
- [x] Legacy `StoryPipeline` evaluated and removed.
- [x] New pipeline is `CLICK → CONSOLE → CODE → PLAN → APPLY → INFRASTRUCTURE`.
- [x] Pipeline is part of the narrative rather than a standalone template block.
- [x] Pipeline state follows scroll progress.

### TASK 3.3 — Chapter 8: YOUR MISSION
- [x] `Provision`, `Secure`, and `Automate` introduced.
- [x] Compact visual cards used for each objective.
- [x] Objectives reveal sequentially through scroll.
- [x] Copy kept to one short phrase per objective.

## Phase 4 — Event Information

### TASK 4.1 — Timeline as execution log
- [x] Legacy Timeline removed.
- [x] Execution-log/terminal visual language implemented.
- [x] Existing event agenda values retained as the source content.
- [x] Agenda labels kept concise.

### TASK 4.2 — Speaker reveal
- [x] Legacy Speaker component removed.
- [x] `$ WHOAMI` reveal implemented.
- [x] Speaker name, role, and concise credibility signal shown.
- [x] Long biography removed from the primary flow.
- [x] Supplied `/images/speaker.png` used.

### TASK 4.3 — WHY IT MATTERS
- [x] Short payoff chapter implemented.
- [x] `Build`, `Automate`, and `Think like an engineer` reveal progressively.
- [x] No paragraph copy.
- [x] Scale/spacing used for impact.

## Phase 5 — Practical Information & Conversion

### TASK 5.1 — FAQ / Logistics
- [x] Legacy FAQ removed.
- [x] Practical visitor information presented as compact cards.
- [x] Answers kept short.
- [x] Information is keyboard-readable without hover dependency.

### TASK 5.2 — Final CTA
- [x] Generic RSVP card removed.
- [x] Screen 1 visual language returns at the end.
- [x] `YOU'VE SEEN THE CLICKS.` used.
- [x] `NOW WRITE THE CODE.` used.
- [x] `JOIN THE BUILD →` action presented.
- [x] Organizer details kept minimal.

### TASK 5.3 — Validate CTA and external links
- [ ] **Blocked:** the repository contains no event-specific Meetup URL, and web search did not locate a verifiable event-specific URL. The current CTA is explicitly marked with this dependency instead of pretending the generic Meetup homepage is the RSVP destination.
- [x] No broken or fabricated event URL was introduced.

## Phase 6 — Remove Legacy Implementations

### TASK 6.1 — Remove disconnected sections
- [x] Removed legacy Hero, StoryPipeline, Speaker, Timeline, FAQ, Header, and Icons components.
- [x] Removed obsolete scroll state/listeners from `Home.tsx`.
- [x] Removed dead section imports.
- [x] Removed legacy component-only styling dependencies.

### TASK 6.2 — Consolidate components
- [x] `CinematicChapter` has one clear responsibility.
- [x] Scroll/reduced-motion logic lives in `src/lib/useScrollProgress.ts`.
- [x] Repeated visual primitives are represented through shared chapter CSS.

### TASK 6.3 — Clean content
- [x] Removed unnecessary prose.
- [x] Removed competing headings.
- [x] Replaced explanations with visual cues wherever possible.
- [x] Added mobile text-density/layout rules.

## Phase 7 — Polish & Accessibility

### TASK 7.1 — Desktop motion pass
- [x] Scroll interpolation uses requestAnimationFrame throttling.
- [x] Transitions are driven by scroll progress, not elapsed story timers.
- [x] Transform/opacity transitions are used for scene movement.

### TASK 7.2 — Mobile motion pass
- [x] Complex grids collapse at mobile breakpoints.
- [x] Narrative meaning remains intact when layouts simplify.

### TASK 7.3 — Accessibility pass
- [x] Native interactive controls are keyboard-usable.
- [x] Focusable links/buttons are retained.
- [x] Image alt text added to supplied visual assets.
- [x] Contrast-focused palette retained.
- [x] Heading hierarchy is chapter-based.
- [x] `prefers-reduced-motion` supported.
- [x] No story interaction relies on hover.

### TASK 7.4 — Performance pass
- [x] Scroll listener is rAF-throttled.
- [x] Scene animations use transforms/opacity where practical.
- [x] Existing image assets are reused rather than duplicated.
- [x] Mobile scenes avoid unnecessary heavy blur stacks.

## Phase 8 — Final Story QA

### TASK 8.1 — Narrative continuity
- [x] Story sequence follows arrival → click → repetition → question → code → automation → mission → event → builder → payoff → logistics → CTA.
- [x] Each chapter motivates the next.
- [x] Legacy template blocks no longer interrupt the narrative.

### TASK 8.2 — Text-density audit
- [x] Main ideas are headline + visual led.
- [x] Paragraph-heavy sections removed.
- [x] Chapters communicate one major idea at a time.
- [x] Text is subordinate to the visual system.

### TASK 8.3 — Final responsive QA
- [x] Wide desktop rules implemented.
- [x] Standard desktop rules implemented.
- [x] Tablet rules implemented.
- [x] Mobile portrait rules implemented.
- [x] Mobile landscape inherits responsive layout rules.

### TASK 8.4 — Final build verification
- [ ] **Pending CI:** GitHub Actions is configured to run `npm install` + `npm run build`, but no workflow run/status is currently exposed for the latest commits through the connected GitHub account.
- [x] Static inspection shows no remaining imports of the deleted legacy components.
- [x] Asset paths used by the new experience exist in `public/images`.
- [x] No image placeholder is required.

## Final Implementation Order

1. [x] Baseline audit + architecture
2. [x] Shared visual/motion foundation
3. [x] Preserve Screen 1
4. [x] Chapter 2
5. [x] Chapter 3
6. [x] Chapter 4
7. [x] Chapter 5
8. [x] Chapter 6
9. [x] Pipeline
10. [x] Mission
11. [x] Timeline
12. [x] Speaker
13. [x] Why it matters
14. [x] FAQ/logistics
15. [x] Final CTA
16. [x] Legacy cleanup
17. [x] Accessibility/performance implementation
18. [ ] External URL + CI verification
