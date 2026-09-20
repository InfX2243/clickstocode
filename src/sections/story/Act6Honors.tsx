import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import StorySection from '../../components/editorial/StorySection';
import { Award, Sparkles, CheckCircle2, Maximize2, X } from 'lucide-react';

interface ExpandedItem {
  name: string;
  tag: string;
  spec?: string;
  image: string;
}

const SWAGS = [
  {
    name: 'AWS SBG Builder Diary',
    spec: 'Hardbound chapter journal for architectural designs & notes',
    tag: 'OFFICIAL JOURNAL',
    image: '/images/swags-diary.png',
  },
  {
    name: 'AWS Cloud Precision Pen',
    spec: 'Branded signature instrument for workshop planning',
    tag: 'SIGNATURE TOOL',
    image: '/images/swags-pen.png',
  },
  {
    name: 'AWS Builder Holographic Pack',
    spec: 'Custom laptop and developer workstation decals',
    tag: 'DECAL PACK',
    image: '/images/swags-stickers.png',
  },
];

export default function Act6Honors() {
  const [expandedItem, setExpandedItem] = useState<ExpandedItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpandedItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (expandedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [expandedItem]);

  return (
    <>
      <StorySection
        id="story-honors"
        actNumber="6"
        actLabel="HONORS"
        eyebrow="CREDENTIALS & WORKSHOP PERKS"
      >
        <div className="space-y-20 sm:space-y-28">
          {/* Section Heading */}
          <div className="max-w-3xl reveal-init">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] leading-[1.06] text-white mb-6">
              Build it. Verify it. Leave with tangible proof.
            </h2>
            <p className="text-base sm:text-xl text-[#8e95a5] font-light leading-relaxed">
              The workshop does not end when your cloud stack deploys. Every participant leaves with an authenticated digital credential and the opportunity to take home official builder rewards.
            </p>
          </div>

          {/* Asymmetrical Hero Layout: Large Certificate + Compact Trivia Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Large Certificate Feature (8 Cols) */}
            <div className="lg:col-span-8 p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between reveal-init stagger-1">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d26a]/10 border border-[#00d26a]/30 text-xs font-mono text-[#00d26a]">
                  <Award size={13} />
                  <span>GUARANTEED DIGITAL CREDENTIAL</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
                  Official Digital Certificate of Attendance
                </h3>

                <p className="text-base sm:text-lg text-[#8e95a5] font-light leading-relaxed max-w-2xl">
                  Every participant who checks in and completes the hands-on workshop receives a verified digital certificate. Dispatched directly to your registered email address by the next day.
                </p>

                <div className="space-y-2 text-xs font-mono text-[#8e95a5]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00d26a]" />
                    <span className="text-white">Delivered by the next day to your registered email</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00d26a]" />
                    <span>Issued by AWS Student Builder Group at MHSSCE</span>
                  </div>
                </div>
              </div>

              {/* Certificate Preview Asset - Clean Frame & Tap to Expand */}
              <div className="pt-6 sm:pt-8">
                <div
                  onClick={() =>
                    setExpandedItem({
                      name: 'Official Digital Certificate of Attendance',
                      tag: 'VERIFIED CREDENTIAL SPECIFICATION',
                      spec: 'Issued by AWS Student Builder Group at MHSSCE. Delivered directly to your registered institutional email upon workshop completion.',
                      image: '/images/certificate.png',
                    })
                  }
                  className="rounded-2xl border border-white/[0.12] bg-[#0a0e17] p-3 sm:p-4 group shadow-2xl cursor-pointer hover:border-[#00d26a]/50 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] sm:aspect-[21/9] rounded-xl overflow-hidden bg-black/40 flex items-center justify-center">
                    <img
                      src="/images/certificate.png"
                      alt="Digital Certificate Sample Preview"
                      className="w-full h-full object-contain filter contrast-105 group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 px-1 text-xs font-mono">
                    <span className="text-[11px] text-[#8e95a5] uppercase tracking-wider">
                      VERIFIED CREDENTIAL SPECIFICATION
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] text-[#00d26a] font-medium group-hover:underline">
                      <Maximize2 size={12} />
                      <span>TAP TO EXPAND</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Live Trivia Spotlight (4 Cols) */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between reveal-init stagger-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00d26a] uppercase tracking-wider">
                  <Sparkles size={15} />
                  <span>LIVE PARTICIPATION</span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                  Cloud Trivia Showdown
                </h4>
                <p className="text-sm text-[#8e95a5] font-light leading-relaxed">
                  Before concluding, test your retention of EC2, IAM, Session Manager, and CloudFormation in an interactive live challenge with the entire hall.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] text-xs font-mono text-[#8e95a5] space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#00d26a]">▸</span>
                  <span>Instant real-time leaderboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00d26a]">▸</span>
                  <span>Collaborative builder questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00d26a]">▸</span>
                  <span>Official swags for top performers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Builder Swag Objects (Tap to Expand in Fullscreen) */}
          <div className="space-y-8 reveal-init stagger-3">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs font-mono text-[#8e95a5] uppercase">
              <span>EXCLUSIVE BUILDER GEAR</span>
              <span className="text-[#00d26a]">TAP OBJECT TO EXPAND PREVIEW</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {SWAGS.map((swag, idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    setExpandedItem({
                      name: swag.name,
                      tag: swag.tag,
                      spec: swag.spec,
                      image: swag.image,
                    })
                  }
                  className="group border-b sm:border-b-0 sm:border-r border-white/[0.06] last:border-none pb-6 sm:pb-0 sm:pr-6 space-y-4 cursor-pointer"
                >
                  <div className="aspect-[4/3] rounded-xl bg-black/40 border border-white/[0.06] group-hover:border-[#00d26a]/50 overflow-hidden p-6 flex items-center justify-center relative transition-all duration-300">
                    <img
                      src={swag.image}
                      alt={swag.name}
                      className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/70 border border-white/10 text-white/70 group-hover:text-[#00d26a] group-hover:border-[#00d26a]/40 transition-colors">
                      <Maximize2 size={13} />
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#00d26a] tracking-widest mb-1">
                      {swag.tag}
                    </div>
                    <div className="text-base font-medium text-white mb-1 group-hover:text-[#00d26a] transition-colors">
                      {swag.name}
                    </div>
                    <p className="text-xs text-[#8e95a5] font-light leading-relaxed">{swag.spec}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </StorySection>

      {/* Fullscreen Expanded Lightbox Modal Portaled to Body (Zero Nav Clipping) */}
      {expandedItem && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
          onClick={() => setExpandedItem(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Content Card */}
          <div
            className="relative max-w-3xl w-full bg-[#0d121c] border border-white/[0.15] rounded-2xl p-5 sm:p-8 shadow-[0_0_120px_rgba(0,0,0,0.95)] flex flex-col items-center max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex justify-center items-center py-2">
              <img
                src={expandedItem.image}
                alt={expandedItem.name}
                className="max-h-[52vh] sm:max-h-[58vh] w-auto max-w-full object-contain rounded-xl shadow-2xl ring-1 ring-white/10"
              />
            </div>

            <div className="w-full text-center space-y-2.5 pt-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00d26a] uppercase tracking-widest px-3 py-1 rounded-full bg-[#00d26a]/10 border border-[#00d26a]/30">
                {expandedItem.tag}
              </div>
              <h3 className="text-xl sm:text-3xl font-light text-white tracking-tight">
                {expandedItem.name}
              </h3>
              {expandedItem.spec && (
                <p className="text-xs sm:text-sm text-[#8e95a5] font-light max-w-xl mx-auto leading-relaxed">
                  {expandedItem.spec}
                </p>
              )}

              {/* Bottom Mobile-Friendly Close Action */}
              <div className="pt-3">
                <button
                  onClick={() => setExpandedItem(null)}
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 active:scale-95 text-xs font-mono text-white/80 uppercase tracking-wider transition-all cursor-pointer"
                >
                  <X size={13} />
                  <span>Close Preview</span>
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
