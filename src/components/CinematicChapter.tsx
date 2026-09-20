import type { CSSProperties, ReactNode } from 'react';

interface CinematicChapterProps {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  progress?: number;
  visibility?: number;
  className?: string;
}

export default function CinematicChapter({
  eyebrow,
  title,
  children,
  progress = 0,
  visibility = 1,
  className = '',
}: CinematicChapterProps) {
  const style = {
    '--chapter-progress': progress,
    '--chapter-visibility': visibility,
    visibility: visibility > 0.001 ? 'visible' : 'hidden',
    zIndex: visibility > 0.001 ? 2 : 1,
  } as CSSProperties;

  return (
    <section
      className={`cinematic-chapter ${className}`}
      data-cinematic-chapter
      style={style}
    >
      <div className="cinematic-chapter-inner">
        {eyebrow && <div className="cinematic-chapter-eyebrow">{eyebrow}</div>}
        {title && <h2 className="cinematic-chapter-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
