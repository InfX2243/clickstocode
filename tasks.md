# AWS From Clicks to Code — Implementation Tasks

This file is the implementation checklist for rebuilding the microsite around `concept.md`.

## Working Rules

- Complete tasks in order unless a task explicitly depends on a later one.
- Keep every change small enough to review visually.
- Do not add large blocks of explanatory copy.
- Every narrative beat should communicate one idea at a time.
- Scroll controls progression; no story autoplay.
- Preserve Screen 1's current grand-entry identity unless a task explicitly changes it.
- Remove or replace legacy implementations when they conflict with the new concept.
- Validate desktop and mobile after every major chapter.
- Respect reduced-motion preferences.

---

## Phase 0 — Baseline & Cleanup

### TASK 0.1 — Audit the current implementation
- [ ] Review `Home.tsx` and all existing page components.
- [ ] Identify which existing components can be reused conceptually.
- [ ] Identify duplicate, placeholder, or visually disconnected implementations.
- [ ] Record reusable assets, fonts, logos, and images from `public/`.
- [ ] Do not change the grand-entry experience yet.

### TASK 0.2 — Define the new page architecture
- [ ] Replace the current linear collection-of-sections mental model with chapter-based architecture.
- [ ] Decide the shared chapter/scene primitives.
- [ ] Keep content/data separate from presentation where practical.
- [ ] Avoid a monolithic `Home.tsx`.

### TASK 0.3 — Establish shared visual tokens
- [ ] Consolidate background, text, muted text, accent, border, glow, spacing, and typography values.
- [ ] Reuse the existing visual identity where it works.
- [ ] Establish consistent terminal/code/UI styling.
- [ ] Establish responsive spacing rules.

### TASK 0.4 — Establish scroll/motion infrastructure
- [ ] Create a reusable scroll-progress mechanism.
- [ ] Map viewport scroll progress to chapter animation progress.
- [ ] Remove assumptions that a timer or autoplay advances the story.
- [ ] Add reduced-motion behavior.
- [ ] Ensure animations do not cause layout instability.

---

## Phase 1 — Preserve & Isolate Screen 1

### TASK 1.1 — Lock Screen 1 as the entry chapter
- [ ] Preserve the existing AWS SBG MHSSCE branding.
- [ ] Preserve `AWS From Clicks to Code` as the hero title.
- [ ] Preserve the existing cinematic visual treatment.
- [ ] Preserve `SCROLL TO EXPLORE`.
- [ ] Keep Screen 1 visually dominant.

### TASK 1.2 — Make Screen 1 transition scroll-driven
- [ ] Keep the current scroll-triggered exit behavior as the starting point.
- [ ] Refine the transition only after the new scroll architecture exists.
- [ ] Ensure Screen 1 never auto-dismisses.
- [ ] Test touch, trackpad, mouse wheel, and keyboard scrolling.

**Checkpoint:** Screen 1 should still feel like the original grand opening before continuing.

---

## Phase 2 — Build the First Story Sequence

### TASK 2.1 — Create Chapter 2: WHAT ARE WE ACTUALLY DOING?
- [ ] Replace the current generic `Hero` section if it does not fit the concept.
- [ ] Use a minimal message explaining the hands-on journey.
- [ ] Introduce the visual `CLICK → CODE` motif.
- [ ] Build the transition directly from Screen 1.
- [ ] Avoid paragraphs.

### TASK 2.2 — Create Chapter 3: THE CLICK
- [ ] Build a simplified AWS-console-inspired visual.
- [ ] Introduce a cursor/click interaction as a scroll-driven animation.
- [ ] Show one clear infrastructure action.
- [ ] Keep interface labels short and readable.
- [ ] Avoid recreating a full AWS console.

### TASK 2.3 — Create Chapter 4: THE PROBLEM
- [ ] Repeat the manual action visually.
- [ ] Increase repetition through duplication/stacking.
- [ ] Create a clear feeling of friction without excessive animation.
- [ ] End with the question: `What if infrastructure could remember what you wanted?`
- [ ] Ensure the question is readable without a large supporting paragraph.

### TASK 2.4 — Create Chapter 5: THE TURN
- [ ] Transition from console UI to terminal UI.
- [ ] Morph the interaction language from click/cursor to command/code.
- [ ] Introduce a short command such as `terraform apply`.
- [ ] Make the command the visual turning point.
- [ ] Ensure this is controlled by scroll position.

**Checkpoint:** Chapters 1–5 must already feel like one coherent story before proceeding.

---

## Phase 3 — Code & Infrastructure

### TASK 3.1 — Create Chapter 6: INFRASTRUCTURE AS CODE
- [ ] Build the `HUMAN → CODE → PLAN → INFRASTRUCTURE` visual.
- [ ] Reveal a small Terraform-style code fragment progressively.
- [ ] Animate only the relevant lines/elements.
- [ ] Avoid showing a large code listing.
- [ ] Make the infrastructure result visually understandable.

### TASK 3.2 — Rebuild/replace StoryPipeline
- [ ] Evaluate the existing `StoryPipeline` against the new concept.
- [ ] Reuse only pieces that support the new story.
- [ ] Remove visual treatment that feels like a standalone unrelated section.
- [ ] Build the `CLICK → CONSOLE → CODE → PLAN → APPLY → INFRASTRUCTURE` pipeline.
- [ ] Tie pipeline progress to scroll progress.

### TASK 3.3 — Create Chapter 8: YOUR MISSION
- [ ] Introduce `Provision`, `Secure`, and `Automate`.
- [ ] Give each objective a compact visual/icon/diagram.
- [ ] Reveal objectives sequentially through scroll.
- [ ] Keep copy to one short phrase per objective.

---

## Phase 4 — Event Information

### TASK 4.1 — Rebuild the Timeline as an execution log
- [ ] Evaluate the current `Timeline` component.
- [ ] Replace conventional timeline presentation if it conflicts with the concept.
- [ ] Use execution-log/terminal-inspired visual language.
- [ ] Add only verified event times and agenda information.
- [ ] Keep each agenda item concise.

### TASK 4.2 — Rebuild the Speaker reveal
- [ ] Evaluate the current `Speaker` component.
- [ ] Introduce the speaker with a concise `$ whoami` visual cue.
- [ ] Show speaker name, role, and one short credibility signal.
- [ ] Keep biography out of the primary visual flow.
- [ ] Add profile/social links only if available and relevant.

### TASK 4.3 — Build WHY IT MATTERS
- [ ] Create a short emotional payoff section.
- [ ] Reveal `Build`, `Automate`, and `Think like an engineer` progressively.
- [ ] Avoid paragraph copy.
- [ ] Use scale/spacing/motion rather than more text to create impact.

---

## Phase 5 — Practical Information & Conversion

### TASK 5.1 — Rebuild FAQ / Logistics
- [ ] Evaluate the existing `FAQ` component.
- [ ] Keep only practical questions visitors need.
- [ ] Use compact cards or accordion interaction.
- [ ] Ensure answers remain short.
- [ ] Make the section keyboard accessible.

### TASK 5.2 — Rebuild the final CTA
- [ ] Replace the current generic RSVP card if it does not match the narrative.
- [ ] Return to the visual language of Screen 1.
- [ ] Use `YOU'VE SEEN THE CLICKS.`
- [ ] Follow with `NOW WRITE THE CODE.`
- [ ] Use a clear `JOIN THE BUILD →` action.
- [ ] Keep organizer/event details minimal.

### TASK 5.3 — Validate CTA and external links
- [ ] Verify the actual RSVP destination.
- [ ] Do not use placeholder links in the finished experience.
- [ ] Verify external links open safely.

---

## Phase 6 — Remove Legacy Implementations

### TASK 6.1 — Remove disconnected sections
- [ ] Remove old sections that duplicate new chapters.
- [ ] Remove placeholder copy.
- [ ] Remove components that no longer participate in the story.
- [ ] Remove obsolete state and scroll listeners.
- [ ] Remove dead CSS/classes/imports.

### TASK 6.2 — Consolidate components
- [ ] Ensure each component has one clear responsibility.
- [ ] Extract repeated visual primitives.
- [ ] Avoid unnecessary abstraction where a simple component is clearer.

### TASK 6.3 — Clean content
- [ ] Check every screen for unnecessary prose.
- [ ] Reduce headings that compete with the main message.
- [ ] Replace explanatory paragraphs with visual cues where possible.
- [ ] Check mobile layouts for text overflow and density.

---

## Phase 7 — Polish & Accessibility

### TASK 7.1 — Desktop motion pass
- [ ] Tune scroll interpolation.
- [ ] Tune transition timing based on scroll distance rather than elapsed time.
- [ ] Remove jitter and abrupt jumps.
- [ ] Ensure sections settle cleanly when scrolling stops.

### TASK 7.2 — Mobile motion pass
- [ ] Test touch scrolling.
- [ ] Simplify complex scenes where necessary.
- [ ] Keep the same narrative meaning even if animation complexity is reduced.

### TASK 7.3 — Accessibility pass
- [ ] Test keyboard navigation.
- [ ] Test focus visibility.
- [ ] Add meaningful image alt text.
- [ ] Verify contrast.
- [ ] Verify semantic heading structure.
- [ ] Support `prefers-reduced-motion`.
- [ ] Ensure interactive elements are usable without relying on hover.

### TASK 7.4 — Performance pass
- [ ] Avoid unnecessary scroll handlers and re-renders.
- [ ] Use efficient animation techniques.
- [ ] Check image sizes and loading behavior.
- [ ] Avoid excessive blur/glow layers on mobile.
- [ ] Verify the page remains responsive during scrolling.

---

## Phase 8 — Final Story QA

### TASK 8.1 — Narrative continuity
- [ ] Verify the story reads correctly from top to bottom.
- [ ] Verify each chapter naturally motivates the next.
- [ ] Verify no section feels like an unrelated template block.

### TASK 8.2 — Text-density audit
For every chapter ask:

- [ ] Can the main idea be understood from the headline + visual?
- [ ] Is there any paragraph that can be removed?
- [ ] Is more than one major idea being introduced at once?
- [ ] Is the text competing with the visual?

### TASK 8.3 — Final responsive QA
- [ ] Desktop wide.
- [ ] Desktop standard.
- [ ] Tablet.
- [ ] Mobile portrait.
- [ ] Mobile landscape.

### TASK 8.4 — Final build verification
- [ ] TypeScript passes.
- [ ] Production build passes.
- [ ] No unused imports or dead components remain.
- [ ] No broken asset paths.
- [ ] No placeholder copy/links remain.

---

## Implementation Order

Use this order for the actual rebuild:

1. Baseline audit + architecture
2. Shared visual/motion foundation
3. Preserve Screen 1
4. Chapter 2
5. Chapter 3
6. Chapter 4
7. Chapter 5
8. Chapter 6
9. Pipeline
10. Mission
11. Timeline
12. Speaker
13. Why it matters
14. FAQ/logistics
15. Final CTA
16. Legacy cleanup
17. Accessibility/performance
18. Final story QA

**Do not implement all chapters in one pass.** Build and visually validate each narrative group before moving to the next.
