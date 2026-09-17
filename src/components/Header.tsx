import { ExternalLink } from 'lucide-react';

export default function Header() {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e18]/80 backdrop-blur-2xl border-b border-white/5">
    <div className="h-16 max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">
      <a className="flex items-center gap-3.5 group" href="#cinema-hero">
        <div className="relative w-9 h-9 rounded-lg bg-[#262a35] border border-[#00d26a]/40 p-1 flex items-center justify-center overflow-hidden group-hover:border-[#00d26a] transition-all shadow-[0_0_12px_rgba(0,210,106,0.25)]">
          <img alt="AWS SBG MHSSCE Logo" className="w-full h-full object-contain" src="/images/awssbg-logo.png" />
        </div>
        <span className="text-white/30 text-xs font-mono">✕</span>
        <div className="h-6 w-auto flex items-center opacity-90 group-hover:opacity-100 transition-opacity"><img alt="AWS Logo" className="h-5 w-auto object-contain" src="/images/aws-logo.png" /></div>
        <div className="hidden sm:flex flex-col ml-1 border-l border-white/10 pl-3">
          <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#00d26a] animate-pulse"/><span className="font-mono text-[10px] uppercase tracking-wider text-[#00d26a] font-bold">MHSSCE CHAPTER</span></div>
          <span className="text-[11px] text-white/90 font-medium tracking-tight">Interactive Keynote Sprint</span>
        </div>
      </a>
      <nav className="hidden md:flex items-center gap-7 text-xs font-mono text-[#8e95a5]">
        <a className="hover:text-[#00d26a]" href="#story-pipeline"><span className="text-[#00d26a] font-bold">01.</span> Story Scenes</a>
        <a className="hover:text-[#00d26a]" href="#speaker"><span className="text-[#38bdf8] font-bold">02.</span> Keynote</a>
        <a className="hover:text-[#00d26a]" href="#lab-timeline"><span className="text-[#00d26a] font-bold">03.</span> Schedule</a>
        <a className="hover:text-[#00d26a]" href="#faq"><span className="font-bold">04.</span> Intel &amp; FAQ</a>
      </nav>
      <div className="flex items-center gap-3">
        <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#171b26]/80 border border-white/10 font-mono text-[11px] text-white/70"><span className="w-2 h-2 rounded-full bg-red-500 animate-ping"/><span className="text-red-400 font-bold">LIVE BROADCAST</span><span className="text-white/20">|</span><span>SEPT 24 • 09:30 IST</span></div>
        <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00d26a] hover:bg-[#34e284] text-[#00210b] font-bold text-xs font-mono tracking-wide shadow-[0_0_20px_rgba(0,210,106,0.4)] transition-all" href="https://www.meetup.com" target="_blank" rel="noreferrer">CLAIM SEAT <ExternalLink size={14}/></a>
      </div>
    </div>
  </header>;
}
