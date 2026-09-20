import StorySection from '../../components/editorial/StorySection';
import { Award } from 'lucide-react';
import { LinkedInIcon } from '../../components/SocialIcons';

export default function Act4Keynote() {
  return (
    <StorySection
      id="story-keynote"
      actNumber="4"
      actLabel="SPEAKER"
      eyebrow="INVITED INDUSTRY LEADER"
    >
      <div className="space-y-16 sm:space-y-24">
        {/* Editorial Section Introduction */}
        <div className="max-w-3xl reveal-init">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00d26a] uppercase tracking-widest mb-3">
            <Award size={14} />
            <span>15+ YEARS CLOUD & ENGINEERING LEADERSHIP</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.04em] leading-[0.98] text-white">
            Turn complex cloud systems into intuitive habits.
          </h2>
        </div>

        {/* Magazine Editorial Composition: Immediately Recognizable Photograph + Expansive Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Magazine-Scale Photographic Moment — Always Recognizable */}
          <div className="lg:col-span-6 relative group reveal-init">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-xl overflow-hidden bg-[#0c1017] border border-white/[0.08] shadow-2xl">
              <img
                src="/images/speaker.png"
                alt="Er. Afreen Bano — Technology Leader, AWS Cloud & DevSecOps Speaker at AWS From Clicks to Code"
                width={600}
                height={750}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top filter contrast-[1.03] transition-all duration-700 ease-out group-hover:scale-[1.02]"
              />
              {/* Subtle edge anchoring only at the base, never obscuring the face */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080b11]/80 to-transparent pointer-events-none" />

              {/* Round LinkedIn Icon Button placed directly on the image */}
              <a
                href="https://in.linkedin.com/in/afreen-bano"
                target="_blank"
                rel="noreferrer"
                aria-label="Connect with Er. Afreen Bano on LinkedIn"
                title="Connect with Er. Afreen Bano on LinkedIn"
                className="absolute bottom-3.5 right-3.5 z-10 w-11 h-11 rounded-full bg-[#080b11]/80 hover:bg-[#0077b5] text-white border border-white/20 hover:border-[#0077b5] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 group/li"
              >
                <LinkedInIcon size={20} className="transition-transform group-hover/li:scale-110" />
              </a>
            </div>

            {/* Editorial Caption Underneath */}
            <div className="pt-4 flex flex-wrap items-baseline justify-between gap-2 border-b border-white/[0.06] pb-3">
              <div>
                <span className="text-lg font-medium text-white">Er. Afreen Bano</span>
                <span className="text-sm text-[#8e95a5] ml-3">Lead · HerTechEra (Pune Chapter)</span>
              </div>
              <span className="text-xs font-mono text-[#00d26a] uppercase">INVITED MENTOR</span>
            </div>
          </div>

          {/* Right: Editorial Biography & Three Architectural Tenets */}
          <div className="lg:col-span-6 space-y-10 reveal-init stagger-2">
            <div className="space-y-6 text-lg sm:text-xl text-white/80 font-light leading-relaxed">
              <p className="text-xl sm:text-2xl text-white font-normal leading-snug">
                &ldquo;Afreen Bano is a technology leader with 15+ years of experience spanning AWS Cloud, DevSecOps, engineering leadership, and high-performing teams.&rdquo;
              </p>
              <p className="text-[#8e95a5] text-base sm:text-lg leading-relaxed">
                She leads HerTechEra – Pune Chapter, building a community where technology, learning, and inclusion come together. A globally recognized speaker, she has shared her expertise on international technology and leadership platforms and has been recognized for her impact in the tech community.
              </p>
              <p className="text-[#8e95a5] text-base sm:text-lg leading-relaxed">
                At heart, she is passionate about turning complex technology into practical learning and inspiring the next generation of technologists.
              </p>
            </div>

            {/* Three Architectural Tenets: Clean Minimalist Rows */}
            <div className="space-y-4 pt-4 border-t border-white/[0.08]">
              <div className="flex items-start gap-4 py-3 border-b border-white/[0.04]">
                <span className="font-mono text-xs text-[#00d26a] tracking-widest pt-1">1</span>
                <div>
                  <div className="text-base font-medium text-white">AWS Architecture</div>
                  <div className="text-xs text-[#8e95a5]">Production-grade foundational patterns that scale cleanly.</div>
                </div>
              </div>

              <div className="flex items-start gap-4 py-3 border-b border-white/[0.04]">
                <span className="font-mono text-xs text-[#00d26a] tracking-widest pt-1">2</span>
                <div>
                  <div className="text-base font-medium text-white">DevSecOps</div>
                  <div className="text-xs text-[#8e95a5]">Secure-by-default habits embedded directly into code templates.</div>
                </div>
              </div>

              <div className="flex items-start gap-4 py-3 border-b border-white/[0.04]">
                <span className="font-mono text-xs text-[#00d26a] tracking-widest pt-1">3</span>
                <div>
                  <div className="text-base font-medium text-white">Builder Culture</div>
                  <div className="text-xs text-[#8e95a5]">Hands-on confidence through practical cloud problem-solving.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StorySection>
  );
}
