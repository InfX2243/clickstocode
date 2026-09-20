import { useEffect } from 'react';

/**
 * Universal Bidirectional Viewport Reveal Observer
 * Triggers smooth entrance when entering viewport and graceful exit
 * when scrolling back out, delivering a reversible scroll experience.
 */
export function useScrollObserver() {
  useEffect(() => {
    // If reduced motion is preferred, immediately reveal everything
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-init, .reveal-mask, .reveal-scale').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          } else if (entry.boundingClientRect.top > 0) {
            // Bidirectional: gracefully reverse when scrolling back up so it re-enters naturally
            entry.target.classList.remove('is-revealed');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -4% 0px',
        threshold: 0.05,
      }
    );

    const elements = document.querySelectorAll('.reveal-init, .reveal-mask, .reveal-scale');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}
