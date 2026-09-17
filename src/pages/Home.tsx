import Hero from '../components/Hero';
import StoryPipeline from '../components/StoryPipeline';
import Speaker from '../components/Speaker';
import Timeline from '../components/Timeline';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
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
