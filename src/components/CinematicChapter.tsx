import type { CSSProperties, ReactNode } from 'react';

interface CinematicChapterProps {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  progress?: number;
  visibility?: number;
  className?: string;
}

export default function CinematicChapter({ eyebrow, title, children, progress = 0, visibility = 1, className = '' }: CinematicChapterProps) {
  const style = {
    '--chapter-progress': progress,
    '--chapter-visibility': visibility,
  } as CSSProperties;

  return (
    <section className={`cinematic-chapter ${className}`} style={style}>
      <div className="cinematic-chapter-inner">
        {eyebrow && <div className="cinematic-chapter-eyebrow">{eyebrow}</div>}
        <h2 className="cinematic-chapter-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
