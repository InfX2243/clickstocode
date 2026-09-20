import { useEffect } from 'react';
import type { RefObject } from 'react';

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

/**
 * Universal Cinematic Timeline & Scroll Choreography Engine
 * Drives smooth, 120fps hardware-accelerated entrance and exit transitions
 * for all elements, cards, and chapters across Desktop, Tablet, and Mobile.
 */
export function useCinematicTimeline(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const timeline = ref.current;
    if (!timeline) return;

    const hero = timeline.querySelector<HTMLElement>('#screen-1');
    const storyFrame = timeline.querySelector<HTMLElement>('.cinematic-story-frame');
    const chapters = Array.from(timeline.querySelectorAll<HTMLElement>('[data-cinematic-chapter]'));
    let frame = 0;

    const setVariable = (element: HTMLElement, name: string, value: number) => {
      element.style.setProperty(name, value.toFixed(4));
    };

    // Ensure story frame is visible in global document flow
    storyFrame?.setAttribute('aria-hidden', 'false');
    if (storyFrame) {
      storyFrame.style.opacity = '1';
      storyFrame.style.transform = 'none';
      storyFrame.style.pointerEvents = 'auto';
    }

    // Initialize all chapters with active properties
    chapters.forEach((chapter) => {
      setVariable(chapter, '--chapter-visibility', 1);
      setVariable(chapter, '--chapter-progress', 1);
      setVariable(chapter, '--scene-enter', 1);
      setVariable(chapter, '--scene-exit', 1);
      chapter.style.visibility = 'visible';
      chapter.style.pointerEvents = 'auto';
    });

    const update = () => {
      frame = 0;
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // 1. Hero scroll exit choreography
      if (hero) {
        const heroRect = hero.getBoundingClientRect();
        const heroHeight = Math.max(1, heroRect.height);
        const scrollPast = Math.max(0, -heroRect.top);
        const heroProgress = clamp01(scrollPast / (heroHeight * 0.75));
        setVariable(timeline, '--entry-fade', heroProgress);
        hero.classList.toggle('is-exiting', heroRect.bottom < vh * 0.75);
      }

      // 2. Continuous Scroll Entrance & Exit Choreography for every Chapter
      chapters.forEach((chapter) => {
        const rect = chapter.getBoundingClientRect();
        const height = Math.max(1, rect.height);

        // Calculate Enter Progress (0 as it appears at bottom of screen, 1 when well inside)
        const enterWindow = vh * 0.32;
        const enterDistance = (vh * 0.96) - rect.top;
        const enterProgress = clamp01(enterDistance / enterWindow);

        // Calculate Exit Progress (1 while inside, smooth ramp to 0 as it leaves top of screen)
        const exitWindow = Math.min(height * 0.55, vh * 0.32);
        const exitDistance = rect.bottom;
        const exitProgress = clamp01(exitDistance / exitWindow);

        setVariable(chapter, '--scene-enter', enterProgress);
        setVariable(chapter, '--scene-exit', exitProgress);
        setVariable(chapter, '--chapter-progress', enterProgress);

        const isInView = rect.top < vh * 0.98 && rect.bottom > 0;
        const isCentered = rect.top <= vh * 0.55 && rect.bottom >= vh * 0.45;
        const isEntering = rect.top > 0 && rect.top <= vh;
        const isExiting = rect.bottom > 0 && rect.bottom <= vh * 0.35;

        chapter.classList.toggle('is-in-view', isInView);
        chapter.classList.toggle('is-centered', isCentered);
        chapter.classList.toggle('is-entering', isEntering);
        chapter.classList.toggle('is-exiting', isExiting);
      });
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ref]);
}
