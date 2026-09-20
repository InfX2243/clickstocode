import { useEffect } from 'react';

/**
 * Universal Lightweight Viewport Reveal Observer
 * Uses native IntersectionObserver to trigger smooth CSS transitions
 * with zero layout thrashing or scroll polling overhead.
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
            // Unobserve once revealed for maximum performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.reveal-init, .reveal-mask, .reveal-scale');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}
