# AWS From Clicks to Code — Experience Concept

## 1. Vision

Build the event microsite as one cinematic, scroll-driven story rather than a collection of unrelated sections.

The visitor should feel a progression:

**ARRIVE → CLICK → REPEAT → QUESTION → CODE → AUTOMATE → BUILD → JOIN**

Screen 1 already establishes the grand entrance and should remain the visual opening of the experience.

## 2. Core Experience Rule

**Scroll is the story controller.**

- No automatic progression between story screens.
- No autoplay-driven narrative sections.
- The visitor advances by scrolling.
- Animations should respond to scroll position and settle when scrolling stops.
- Transitions should feel continuous rather than like separate page loads.
- The experience must remain usable with keyboard navigation, touch scrolling, reduced-motion preferences, and mobile layouts.

## 3. Content Philosophy

The site must be **visual-first and text-light**.

Avoid large paragraphs, walls of copy, and sections that require reading before the visitor understands what is happening.

Use:

- One strong headline at a time.
- Short supporting phrases.
- Large numbers, labels, commands, diagrams, code fragments, and visual metaphors.
- Progressive disclosure: reveal the next idea only when the visitor reaches it.
- Motion to explain relationships instead of explaining everything with prose.
- Repeated visual language so visitors can understand the story without reading every word.

A useful rule for each narrative beat:

> **One idea. One visual. One short message.**

## 4. Visual DNA: CLICK → CODE

The phrase **CLICK → CODE** is the central visual motif.

Early experience:

- Mouse/cursor movement.
- AWS-console-inspired cards.
- Buttons and manual actions.
- Repetition.

Middle experience:

- Terminal windows.
- Code fragments.
- Terraform-style infrastructure definitions.
- Cursor/command-line interactions.

Later experience:

- Pipelines.
- Infrastructure graphs.
- Deployment states.
- Event execution logs.

Final experience:

**YOU'VE SEEN THE CLICKS. NOW WRITE THE CODE.**

## 5. Experience Chapters

### Chapter 01 — THE ARRIVAL

**Purpose:** Make the event feel important immediately.

Keep the existing Screen 1 as the grand entry.

Key elements:

- AWS Student Builder Group MHSSCE identity.
- Event title: `AWS From Clicks to Code`.
- Strong cinematic background treatment.
- Existing entrance and scroll animation language.
- `SCROLL TO EXPLORE` prompt.

Do not replace this with a conventional hero section.

### Chapter 02 — WHAT ARE WE ACTUALLY DOING?

**Message:** This is a hands-on journey from clicking around AWS to actually building with it.

Visual direction:

`CLICK` → `CODE`

Keep copy minimal. Let the visual transition communicate the concept.

### Chapter 03 — THE CLICK

**Message:** It starts with a click.

Visual direction:

- AWS-console-inspired interface.
- Cursor moves toward controls.
- A resource is created or configured.
- Small state changes appear visually.

The visitor should understand the manual workflow without reading an explanation of it.

### Chapter 04 — THE PROBLEM

**Message:** Then you have to do it again.

Visual direction:

- Repeat the same action.
- Duplicate UI states.
- Increase visual repetition.
- Introduce friction and scale.

End with a short question:

**What if infrastructure could remember what you wanted?**

### Chapter 05 — THE TURN

**Message:** Move from manual actions to declarative infrastructure.

Visual direction:

- Console UI recedes.
- Terminal appears.
- Cursor changes from UI interaction to command-line interaction.
- `terraform apply` or equivalent command becomes the visual turning point.

This is the bridge from CLICK to CODE.

### Chapter 06 — INFRASTRUCTURE AS CODE

**Message:** Infrastructure should be code.

Visual direction:

`HUMAN → CODE → PLAN → INFRASTRUCTURE`

Reveal a small Terraform-style code fragment progressively instead of showing a large code listing.

The code is a visual object first and educational detail second.

### Chapter 07 — THE PIPELINE

**Message:** Code makes infrastructure repeatable and automatable.

Visual direction:

`CLICK → CONSOLE → CODE → PLAN → APPLY → INFRASTRUCTURE`

This is where the existing `StoryPipeline` concept can be reused or rebuilt into the new visual language.

### Chapter 08 — YOUR MISSION

**Message:** Turn the concepts into a hands-on build.

Three concise objectives:

1. **Provision**
2. **Secure**
3. **Automate**

Each objective should have a visual treatment rather than a paragraph.

### Chapter 09 — EVENT TIMELINE

Present the event agenda as an execution sequence rather than a conventional schedule.

Example visual language:

```text
09:00 > INITIALIZING EVENT
09:15 > AWS FOUNDATIONS
10:00 > BUILD
11:00 > AUTOMATE
12:00 > WRAP UP
```

Exact times/content should be taken from the real event information when implemented.

### Chapter 10 — MEET THE BUILDER

Introduce the speaker only after the visitor understands what they are coming to learn.

Possible framing:

`$ whoami`

Then reveal:

- Speaker name.
- Role/experience.
- Short credibility signal.
- Optional social/profile link.

Avoid a long biography.

### Chapter 11 — WHY IT MATTERS

Emotional payoff, kept extremely short:

**You're not just learning AWS.**

Then reveal one concept at a time:

**Build.**

**Automate.**

**Think like an engineer.**

### Chapter 12 — FAQ / LOGISTICS

Answer only practical questions visitors actually need.

Potential topics:

- Who can attend?
- Do I need AWS experience?
- What should I bring?
- Is it hands-on?
- Where is it?
- How long is it?

Use compact cards/accordion-style interactions rather than paragraphs.

### Chapter 13 — THE FINAL CTA

Return to the visual confidence of Screen 1.

Core message:

**YOU'VE SEEN THE CLICKS.**

**NOW WRITE THE CODE.**

Primary action:

`JOIN THE BUILD →`

Include only essential event/organizer information beneath it.

## 6. Architecture Direction

The current page contains legacy sections including `Hero`, `StoryPipeline`, `Speaker`, `Timeline`, and `FAQ`. These should not automatically dictate the final architecture.

The implementation should be reorganized around the experience chapters above.

Prefer:

- A small number of reusable cinematic chapter primitives.
- Shared motion/scroll utilities.
- Shared typography and visual tokens.
- Small focused components for individual visuals.
- Data-driven content for timeline, FAQ, and speaker details.

Avoid creating one giant `Home.tsx` component.

## 7. Motion Principles

- Scroll-driven, never autoplay-driven for story progression.
- Motion should explain cause and effect.
- Use anticipation → action → result.
- Prefer smooth transforms/opacity/scale over excessive effects.
- Preserve the user's sense of spatial continuity.
- Avoid motion that competes with the headline.
- Respect `prefers-reduced-motion`.

## 8. Responsive Principles

The experience must work on:

- Desktop.
- Tablet.
- Mobile.

On smaller screens, complexity should reduce before content becomes unreadable. A cinematic desktop interaction should have a simpler but equivalent mobile interpretation.

## 9. Definition of Done for the Experience

The finished site should feel like a single story, not a landing page followed by unrelated sections.

A visitor should be able to understand the event's core idea even if they only read the large headlines and observe the visuals.

The final journey should communicate:

**AWS → manual clicks → repetition → infrastructure as code → automation → hands-on building → event → action.**
