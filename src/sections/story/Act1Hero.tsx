import { ArrowDown, Calendar, Clock, MapPin, Users, Ticket, ArrowUpRight } from 'lucide-react';
import { EVENT_DATE, EVENT_TIME, VENUE, MEETUP_STATUS } from '../../constants/event';

export default function Act1Hero() {
  const scrollToStory = () => {
    const el = document.getElementById('story-manifesto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="story-hero"
      aria-label="Prologue - AWS From Clicks to Code"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Editorial Ambient Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#00d26a]/[0.04] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-12 right-10 w-96 h-96 bg-[#38bdf8]/[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* Top Meta Bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#00d26a] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#8e95a5]">
            M.H. Saboo Siddik College of Engineering · Dept. of IT
          </span>
        </div>
        <div className="font-mono text-xs uppercase tracking-widest text-[#8e95a5]">
          AWS Student Builder Group
        </div>
      </div>

      {/* Main Editorial Headline */}
      <div className="max-w-7xl mx-auto w-full my-auto py-6 sm:py-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#8e95a5] text-xs font-mono mb-6 sm:mb-8">
          <Ticket size={13} className="text-[#00d26a]" />
          <span>FREE ADMISSION · 100 SEATS LIMITED</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[-0.04em] leading-[0.92] text-white text-balance mb-6 sm:mb-8">
          AWS From <br />
          <span className="italic font-normal text-[#00d26a] pr-2">Clicks to Code</span>
        </h1>

        <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-[#8e95a5] font-light leading-relaxed mb-10 sm:mb-14">
          Move from visual console setup to real Linux compute, zero-trust Session Manager access, and declarative CloudFormation automation in one guided builder session.
        </p>

        {/* Essential Facts Minimalist Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-white/[0.08] mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#8e95a5] uppercase mb-1">
              <Calendar size={13} className="text-[#00d26a]" />
              <span>DATE</span>
            </div>
            <div className="text-white font-medium text-sm sm:text-base tracking-tight">{EVENT_DATE}</div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#8e95a5] uppercase mb-1">
              <Clock size={13} className="text-[#00d26a]" />
              <span>TIMING</span>
            </div>
            <div className="text-white font-medium text-sm sm:text-base tracking-tight">{EVENT_TIME}</div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#8e95a5] uppercase mb-1">
              <MapPin size={13} className="text-[#00d26a]" />
              <span>VENUE</span>
            </div>
            <div className="text-white font-medium text-sm sm:text-base tracking-tight">{VENUE}</div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#8e95a5] uppercase mb-1">
              <Users size={13} className="text-[#00d26a]" />
              <span>EXPERIENCE</span>
            </div>
            <div className="text-[#00d26a] font-medium text-sm sm:text-base tracking-tight">Beginner Friendly</div>
          </div>
        </div>

        {/* Primary Actions */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => {
              const el = document.getElementById('story-blueprint');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            title={MEETUP_STATUS}
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white text-black font-mono text-sm font-semibold tracking-wider uppercase hover:bg-[#00d26a] transition-all duration-300 shadow-xl shadow-black/50 cursor-pointer"
          >
            <span>RSVP on Meetup</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={scrollToStory}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/[0.12] text-white/80 hover:text-white hover:border-white/30 font-mono text-xs uppercase tracking-widest transition-all cursor-pointer"
          >
            <span>Read The Story</span>
            <ArrowDown size={14} />
          </button>
        </div>
      </div>

      {/* Bottom Editorial Scroll Cue */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between pt-6 text-xs font-mono text-[#8e95a5]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span>SCROLL TO BEGIN NARRATIVE</span>
        </div>
        <div className="hidden sm:block uppercase tracking-wider">
          CHAPTER 01 OF 08
        </div>
      </div>
    </section>
  );
}
