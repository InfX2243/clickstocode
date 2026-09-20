import StorySection from '../../components/editorial/StorySection';
import { Sparkles, Terminal, ArrowRight } from 'lucide-react';

export default function Act2Manifesto() {
  return (
    <StorySection
      id="story-manifesto"
      actNumber="02"
      actLabel="THE MANIFESTO"
      eyebrow="WHY CLICKS TO CODE MATTERS"
    >
      <div className="space-y-16 sm:space-y-24">
        {/* Editorial Lead Statement */}
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] leading-[1.08] text-white">
            Most students start with visual buttons.<br />
            <span className="text-[#8e95a5]">Industry engineers never touch them.</span>
          </h2>
        </div>

        {/* Asymmetric Two-Column Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-base sm:text-lg text-white/80 font-light leading-relaxed">
            <p className="text-xl sm:text-2xl text-white font-normal leading-snug">
              Every year, thousands of students log into cloud portals, follow screenshots, click twenty dropdown menus, and hope their server stays alive.
            </p>
            <p>
              When something breaks, they don&apos;t know why. When they need to duplicate the setup, they have to click twenty menus all over again. That isn&apos;t engineering — that&apos;s just clicking buttons.
            </p>
            <p>
              <strong className="text-[#00d26a] font-medium">AWS From Clicks to Code</strong> is designed to change that exact relationship. We believe your very first encounter with cloud computing should show you how modern software actually ships: repeatable, declarative, and secure.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white/[0.02] border border-white/[0.08] p-7 sm:p-9 rounded-2xl relative">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00d26a] uppercase tracking-widest mb-4">
              <Sparkles size={14} />
              <span>THE PHILOSOPHY</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-light text-white mb-4">
              Curiosity over credentials.
            </h3>
            <p className="text-sm sm:text-base text-[#8e95a5] font-light leading-relaxed mb-6">
              You do not need to already be an AWS expert or know Linux inside out. We start from ground zero and construct every piece together in real time.
            </p>
            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#8e95a5]">
              <span>ZERO PREREQUISITES REQUIRED</span>
              <span className="text-white">MHSSCE · 2026</span>
            </div>
          </div>
        </div>

        {/* Three Editorial Theses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/[0.06]">
          <div className="space-y-3">
            <div className="font-mono text-xs text-[#00d26a] tracking-widest">[ THESIS 01 ]</div>
            <h4 className="text-lg sm:text-xl font-medium text-white tracking-tight">Real Linux Compute</h4>
            <p className="text-sm text-[#8e95a5] font-light leading-relaxed">
              No toy environments or mocked web consoles. You provision a genuine Amazon EC2 virtual machine running live in the AWS Cloud.
            </p>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-xs text-[#00d26a] tracking-widest">[ THESIS 02 ]</div>
            <h4 className="text-lg sm:text-xl font-medium text-white tracking-tight">Zero-Trust Security</h4>
            <p className="text-sm text-[#8e95a5] font-light leading-relaxed">
              Never leave port 22 open to the world. We use AWS Systems Manager (Session Manager) for browser-based encrypted shell sessions.
            </p>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-xs text-[#00d26a] tracking-widest">[ THESIS 03 ]</div>
            <h4 className="text-lg sm:text-xl font-medium text-white tracking-tight">Declarative Automation</h4>
            <p className="text-sm text-[#8e95a5] font-light leading-relaxed">
              Codify your architecture into AWS CloudFormation templates so an entire infrastructure stack can be summoned or deleted in seconds.
            </p>
          </div>
        </div>

        {/* Minimalist Quote Banner */}
        <div className="py-10 px-8 sm:px-12 rounded-2xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono text-[#8e95a5] uppercase tracking-widest">
              BUILDER REASSURANCE
            </div>
            <div className="text-lg sm:text-xl text-white font-light">
              Bring your questions, your laptop, and the curiosity to build. We handle the rest.
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('story-odyssey');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#00d26a] hover:text-white uppercase tracking-wider transition-colors cursor-pointer shrink-0"
          >
            <span>See The Technical Journey</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </StorySection>
  );
}
