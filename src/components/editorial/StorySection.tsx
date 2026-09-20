import type { ReactNode } from 'react';

interface StorySectionProps {
  id: string;
  actNumber?: string;
  actLabel?: string;
  eyebrow?: string;
  className?: string;
  children: ReactNode;
  divider?: boolean;
}

export default function StorySection({
  id,
  actNumber,
  actLabel,
  eyebrow,
  className = '',
  children,
  divider = true,
}: StorySectionProps) {
  // Strip any leading zeros to ensure natural integers (1, 2, 3...)
  const cleanNumber = actNumber ? String(parseInt(actNumber, 10)) : undefined;

  return (
    <section
      id={id}
      data-story-section={id}
      className={`relative w-full max-w-full px-5 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-28 md:py-36 overflow-hidden ${className}`}
    >
      {/* Editorial Hairline Top Border */}
      {divider && (
        <div className="absolute top-0 left-5 right-5 sm:left-8 sm:right-8 md:left-12 md:right-12 lg:left-16 lg:right-16 h-px bg-gradient-to-r from-white/[0.12] via-white/[0.06] to-transparent pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto">
        {/* Act Header Marker */}
        {(cleanNumber || actLabel || eyebrow) && (
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-16 pb-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-2.5">
              {cleanNumber && (
                <span className="font-mono text-xs text-[#00d26a] font-bold tracking-widest">
                  {cleanNumber}
                </span>
              )}
              {cleanNumber && actLabel && (
                <span className="text-white/30 font-mono text-xs">—</span>
              )}
              {actLabel && (
                <span className="font-mono text-xs uppercase tracking-widest text-white/80">
                  {actLabel}
                </span>
              )}
            </div>

            {eyebrow && (
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#8e95a5]">
                {eyebrow}
              </span>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
