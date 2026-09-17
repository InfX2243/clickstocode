import Hero from '../components/Hero';
import StoryPipeline from '../components/StoryPipeline';
import Speaker from '../components/Speaker';
import Timeline from '../components/Timeline';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
      <section id="screen-1" className="screen-1 relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#080b13] px-6 py-16">
        <div className="screen-1-glow absolute inset-0 pointer-events-none" />
        <div className="screen-1-grid absolute inset-0 pointer-events-none" />
        <div className="screen-1-content relative z-10 flex w-full max-w-6xl flex-col items-center text-center">
          <div className="screen-1-brand flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="screen-1-logo-wrap flex h-48 w-48 shrink-0 items-center justify-center rounded-[2rem] border border-[#00d26a]/30 bg-[#111621]/80 p-7 shadow-[0_0_90px_rgba(0,210,106,0.2)] backdrop-blur-md sm:h-56 sm:w-56 sm:p-9">
              <img src="/images/awssbg-logo.png" alt="AWS Student Builder Group MHSSCE" className="h-full w-full object-contain" />
            </div>
            <div className="screen-1-org max-w-2xl text-center md:text-left">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">AWS Student Builder Group at<br />M.H. Saboo Siddik College of Engineering</h1>
            </div>
          </div>

          <div className="screen-1-presents mt-14 sm:mt-16">
            <p className="font-mono text-sm uppercase tracking-[0.45em] text-white/50 sm:text-base">presents</p>
          </div>

          <div className="screen-1-event mt-6 sm:mt-8">
            <h2 className="screen-1-title text-5xl font-extrabold leading-none tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
              <span className="screen-1-title-white">AWS From</span><br className="sm:hidden" /> <span className="screen-1-title-green">Clicks to Code</span>
            </h2>
          </div>

          <div className="screen-1-scroll-hint" aria-hidden="true">
            <span className="screen-1-scroll-line" />
            <span className="screen-1-scroll-label">SCROLL TO EXPLORE</span>
            <span className="screen-1-scroll-arrow">↓</span>
          </div>
        </div>
      </section>

      <Hero />
      <section className="w-full bg-[#0a0e18] py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00d26a] mb-2">AWS SBG MHSSCE • HANDS-ON SESSION</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">The Evolution of AWS Compute</h2>
          <p className="text-sm text-[#8e95a5] max-w-2xl mt-4 leading-relaxed">Move from manual console operations to secure access and repeatable infrastructure as code.</p>
        </div>
      </section>
      <StoryPipeline />
      <Speaker />
      <Timeline />
      <FAQ />
      <section className="w-full bg-[#0a0e18] py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="p-10 sm:p-16 rounded-3xl bg-[#1c1f2a]/90 border-2 border-[#00d26a]/40 text-center flex flex-col items-center gap-6 shadow-[0_0_60px_rgba(0,210,106,0.18)]">
            <div className="text-[#00d26a] font-mono text-xs font-bold uppercase">IN-PERSON SEATS STRICTLY LIMITED</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white max-w-3xl">Ready to master AWS Infrastructure from Clicks to Code?</h2>
            <p className="text-sm sm:text-base text-[#8e95a5] max-w-xl">Join fellow collegiate builders and upgrade your DevOps portfolio in a single morning sprint.</p>
            <a className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00d26a] text-[#00210b] font-extrabold text-sm" href="https://www.meetup.com" target="_blank" rel="noreferrer">RSVP NOW ON MEETUP.COM ↗</a>
            <span className="text-[11px] font-mono text-white/50">Organized by AWS Student Builder Group • M. H. Saboo Siddik College of Engineering, Byculla</span>
          </div>
        </div>
      </section>
    </>
  );
}
