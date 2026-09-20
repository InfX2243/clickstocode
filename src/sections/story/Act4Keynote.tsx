import StorySection from '../../components/editorial/StorySection';
import { ArrowUpRight, Cloud, ShieldCheck, Users, Award } from 'lucide-react';
import { LinkedInIcon } from '../../components/SocialIcons';

export default function Act4Keynote() {
  return (
    <StorySection
      id="story-keynote"
      actNumber="04"
      actLabel="THE KEYNOTE VOICE"
      eyebrow="INVITED INDUSTRY LEADER"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Large Photographic Moment */}
        <div className="lg:col-span-5 relative group">
          <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0d121c]">
            <img
              src="/images/speaker.png"
              alt="Ms. Afreen Bano"
              className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-transparent opacity-80" />

            {/* Bottom Floating Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#080b11]/80 backdrop-blur-md border border-white/[0.08]">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#00d26a] mb-1">
                KEYNOTE SPEAKER & MENTOR
              </div>
              <div className="text-white font-medium text-lg">Ms. Afreen Bano</div>
              <div className="text-xs text-[#8e95a5] font-mono">Lead · HerTechEra (Pune Chapter)</div>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Profile & Authority */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00d26a] uppercase tracking-widest mb-3">
              <Award size={14} />
              <span>15+ YEARS CLOUD & ENGINEERING LEADERSHIP</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-light tracking-[-0.03em] leading-[0.98] text-white mb-6">
              Turn complex cloud systems into intuitive habits.
            </h2>
            <div className="text-xs font-mono text-[#8e95a5] uppercase tracking-wider">
              AWS Cloud · DevSecOps · Engineering Leadership · Community Impact
            </div>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-white/80 font-light leading-relaxed border-l-2 border-[#00d26a]/40 pl-6 my-6">
            <p>
              &ldquo;Afreen Bano is a technology leader with 15+ years of experience, spanning AWS Cloud, DevSecOps, engineering leadership, and high-performing teams. She leads HerTechEra – Pune Chapter, building a community where technology, learning, and inclusion come together.&rdquo;
            </p>
            <p className="text-sm sm:text-base text-[#8e95a5]">
              &ldquo;A globally recognized speaker and community leader, she has shared her expertise on international technology and leadership platforms and has been recognized for her impact in the tech community. At heart, she is passionate about turning complex technology into practical learning and inspiring the next generation of technologists.&rdquo;
            </p>
          </div>

          {/* Three Key Tenets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <Cloud size={18} className="text-[#00d26a] mb-2" />
              <div className="text-sm font-medium text-white mb-1">AWS Architecture</div>
              <div className="text-xs text-[#8e95a5] font-light">Foundations that scale cleanly in production.</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <ShieldCheck size={18} className="text-[#00d26a] mb-2" />
              <div className="text-sm font-medium text-white mb-1">DevSecOps</div>
              <div className="text-xs text-[#8e95a5] font-light">Secure by default from the very first commit.</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <Users size={18} className="text-[#00d26a] mb-2" />
              <div className="text-sm font-medium text-white mb-1">Builder Culture</div>
              <div className="text-xs text-[#8e95a5] font-light">Community, inclusion, and hands-on confidence.</div>
            </div>
          </div>

          {/* Connect on LinkedIn Action */}
          <div className="pt-2">
            <a
              href="https://in.linkedin.com/in/afreen-bano"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/[0.12] bg-white/[0.03] text-white hover:bg-white hover:text-black transition-all duration-300 font-mono text-xs uppercase tracking-wider group"
            >
              <LinkedInIcon size={14} className="text-[#00d26a] group-hover:text-black" />
              <span>Connect with Afreen Bano on LinkedIn</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </StorySection>
  );
}
