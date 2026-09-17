import type { CSSProperties, ReactNode } from 'react';

interface CinematicChapterProps {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  progress?: number;
  className?: string;
}

export default function CinematicChapter({ eyebrow, title, children, progress = 0, className = '' }: CinematicChapterProps) {
  const style = { '--chapter-progress': progress } as CSSProperties;

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
