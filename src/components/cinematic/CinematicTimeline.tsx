import { useRef, Children, type ReactNode } from 'react';
import { useCinematicTimeline } from '../../lib/useCinematicTimeline';

interface CinematicTimelineProps {
  children: ReactNode;
}

export default function CinematicTimeline({ children }: CinematicTimelineProps) {
  const timelineRef = useRef<HTMLElement | null>(null);
  useCinematicTimeline(timelineRef);

  const childArray = Children.toArray(children);
  const hero = childArray[0];
  const storyChapters = childArray.slice(1, -1);
  const finalCall = childArray[childArray.length - 1];

  return (
    <div className="experience">
      <section
        ref={timelineRef}
        className="cinematic-timeline"
        aria-label="AWS From Clicks to Code cinematic experience"
      >
        <div className="cinematic-timeline-frame">
          {hero}
          <div className="cinematic-story-frame">
            {storyChapters}
          </div>
          {finalCall}
        </div>
      </section>
    </div>
  );
}
