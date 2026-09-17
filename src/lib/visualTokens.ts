export const visualTokens = {
  colors: {
    background: '#0a0e18',
    backgroundDeep: '#080b13',
    surface: '#111621',
    surfaceRaised: '#1c1f2a',
    text: '#dfe2f1',
    textStrong: '#ffffff',
    textMuted: '#8e95a5',
    accent: '#00d26a',
    accentSoft: 'rgba(0, 210, 106, 0.18)',
    border: 'rgba(255, 255, 255, 0.08)',
  },
  layout: {
    content: 'min(1180px, calc(100vw - 48px))',
    chapterMinHeight: '100svh',
  },
  motion: {
    ease: 'cubic-bezier(.16,1,.3,1)',
  },
} as const;
