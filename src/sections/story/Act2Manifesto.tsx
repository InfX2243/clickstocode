import StorySection from '../../components/editorial/StorySection';
import { ArrowRight } from 'lucide-react';

export default function Act2Manifesto() {
  return (
    <StorySection
      id="story-manifesto"
      actNumber="2"
      actLabel="THE MANIFESTO"
      eyebrow="WHY CLICKS TO CODE MATTERS"
    >
      <div className="space-y-20 sm:space-y-28">
        {/* Editorial Lead Statement with Continuous Flow */}
        <div className="max-w-4xl space-y-4">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.04em] leading-[1.02] text-white reveal-init">
            Most students start with visual buttons.
          </h2>
          <div className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.035em] leading-[1.04] text-[#8e95a5] reveal-init stagger-2">
            Industry engineers <span className="text-[#00d26a] font-normal italic">never touch them.</span>
          </div>
        </div>

        {/* Asymmetric Editorial Essay */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-base sm:text-xl text-white/80 font-light leading-relaxed reveal-init stagger-2">
            <p className="text-xl sm:text-2xl text-white font-normal leading-snug">
              Every year, thousands of students log into cloud portals, follow screenshots, click twenty dropdown menus, and hope their server stays alive.
            </p>
            <p className="text-[#8e95a5]">
              When something breaks, they don&apos;t know why. When they need to duplicate the setup, they have to click twenty menus all over again. That isn&apos;t engineering — that&apos;s just clicking buttons.
            </p>
            <p>
              <strong className="text-white font-medium">AWS From Clicks to Code</strong> is designed to change that exact relationship. We believe your very first encounter with cloud computing should show you how modern software actually ships: repeatable, declarative, and secure.
            </p>
          </div>

          <div className="lg:col-span-4 border-l border-white/[0.08] pl-6 sm:pl-8 space-y-4 reveal-init stagger-3">
            <div className="text-xs font-mono text-[#00d26a] uppercase tracking-widest">
              THE PRINCIPLE
            </div>
            <h3 className="text-xl sm:text-2xl font-light text-white">
              Curiosity over credentials.
            </h3>
            <p className="text-sm text-[#8e95a5] font-light leading-relaxed">
              You do not need prior AWS experience or Linux mastery. We start from ground zero and construct every piece together in real time.
            </p>
            <div className="pt-4 text-xs font-mono text-[#5a6275]">
              M.H. SABOO SIDDIK COLLEGE OF ENGINEERING · 2026
            </div>
          </div>
        </div>

        {/* Three Editorial Theses: Pure Typography & Hairline Rules (No Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 pt-12 border-t border-white/[0.08]">
          <div className="space-y-3 reveal-init stagger-1">
            <div className="font-mono text-3xl sm:text-4xl font-light text-white/30 tracking-tight">1</div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00d26a]">REAL LINUX COMPUTE</div>
            <p className="text-sm text-[#8e95a5] font-light leading-relaxed">
              No toy environments or simulated web consoles. You provision a genuine Amazon EC2 virtual machine running live in the AWS Cloud.
            </p>
          </div>

          <div className="space-y-3 reveal-init stagger-2">
            <div className="font-mono text-3xl sm:text-4xl font-light text-white/30 tracking-tight">2</div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00d26a]">ZERO-TRUST SECURITY</div>
            <p className="text-sm text-[#8e95a5] font-light leading-relaxed">
              Never leave port 22 open to the public internet. We configure AWS Systems Manager Session Manager for browser-based encrypted shell access.
            </p>
          </div>

          <div className="space-y-3 reveal-init stagger-3">
            <div className="font-mono text-3xl sm:text-4xl font-light text-white/30 tracking-tight">3</div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00d26a]">DECLARATIVE AUTOMATION</div>
            <p className="text-sm text-[#8e95a5] font-light leading-relaxed">
              Codify your architecture into AWS CloudFormation templates so an entire infrastructure stack can be deployed, tested, and torn down with code.
            </p>
          </div>
        </div>

        {/* Quiet Reassurance Action */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 reveal-init stagger-4">
          <div className="text-sm sm:text-base text-[#8e95a5] font-light">
            Bring your questions, your laptop, and the willingness to build.
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('story-odyssey');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#00d26a] hover:text-white uppercase tracking-wider transition-colors cursor-pointer shrink-0"
          >
            <span>Enter Technical Odyssey</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </StorySection>
  );
}
