import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Radio } from 'lucide-react';
import { LinkedInIcon, InstagramIcon } from '../SocialIcons';
import { MEETUP_EVENT_URL } from '../../constants/event';

export default function EditorialNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-[#080b11]/85 backdrop-blur-xl border-b border-white/[0.07] py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3.5 group cursor-pointer no-underline text-inherit"
            aria-label="AWS From Clicks to Code Home"
          >
            <div className="relative">
              <img
                src="/images/awssbg-logo.png"
                alt="AWS Student Builder Group Logo — MHSSCE"
                width={36}
                height={36}
                decoding="async"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain filter drop-shadow-[0_0_8px_rgba(0,210,106,0.3)] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-white font-medium text-sm sm:text-base tracking-tight group-hover:text-[#00d26a] transition-colors">
                  AWS From Clicks to Code
                </span>
              </div>
              {/* <span className="text-[11px] font-mono uppercase tracking-widest text-[#8e95a5] hidden sm:block">
                AWS Student Builder Group
              </span> */}
            </div>
          </a>

          {/* Minimal Floating Desktop Nav */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider uppercase text-[#8e95a5]">
            <a
              href="#story-manifesto"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('story-manifesto');
              }}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              STORY
            </a>
            <a
              href="#story-odyssey"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('story-odyssey');
              }}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              TECH
            </a>
            <a
              href="#story-keynote"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('story-keynote');
              }}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              SPEAKER
            </a>
            <a
              href="#story-blueprint"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('story-blueprint');
              }}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              SCHEDULE
            </a>
            <a
              href="#story-honors"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('story-honors');
              }}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              HONORS
            </a>
            <a
              href="#story-inquiries"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('story-inquiries');
              }}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              FAQ
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Social icons subtle */}
            <div className="hidden xl:flex items-center gap-2 mr-1">
              <a
                href="https://www.linkedin.com/company/awssbg-mhssce/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={13} />
              </a>
              <a
                href="https://www.instagram.com/awssbg_mhssce"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon size={13} />
              </a>
            </div>

            {/* AWS Green RSVP Button */}
            <a
              href={MEETUP_EVENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider bg-[#00d26a] text-[#080b11] hover:bg-[#00e676] hover:-translate-y-0.5 transition-all duration-200 shadow-md shadow-[#00d26a]/20 cursor-pointer shrink-0"
            >
              <img
                src="/images/meetup-icon.png"
                alt=""
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain shrink-0"
                aria-hidden="true"
              />
              <span className="whitespace-nowrap">RSVP NOW!</span>
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border border-white/[0.08] text-white hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#080b11]/98 backdrop-blur-2xl flex flex-col justify-between px-6 pt-24 pb-8 lg:hidden animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-4 max-w-sm w-full mx-auto" onClick={(e) => e.stopPropagation()}>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#8e95a5] border-b border-white/[0.08] pb-2.5 flex items-center justify-between">
              <span>NARRATIVE INDEX</span>
              <span className="text-[#00d26a]">ACTS 1–8</span>
            </div>

            <a
              href="#story-hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('story-hero');
              }}
              className="text-left py-1.5 text-xl font-light text-white hover:text-[#00d26a] transition-colors cursor-pointer flex items-center"
            >
              <span className="font-mono text-xs text-[#00d26a] w-6 font-bold">1</span>
              <span>Prologue</span>
            </a>
            <a
              href="#story-manifesto"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('story-manifesto');
              }}
              className="text-left py-1.5 text-xl font-light text-white hover:text-[#00d26a] transition-colors cursor-pointer flex items-center"
            >
              <span className="font-mono text-xs text-[#00d26a] w-6 font-bold">2</span>
              <span>Story</span>
            </a>
            <a
              href="#story-odyssey"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('story-odyssey');
              }}
              className="text-left py-1.5 text-xl font-light text-white hover:text-[#00d26a] transition-colors cursor-pointer flex items-center"
            >
              <span className="font-mono text-xs text-[#00d26a] w-6 font-bold">3</span>
              <span>Tech</span>
            </a>
            <a
              href="#story-keynote"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('story-keynote');
              }}
              className="text-left py-1.5 text-xl font-light text-white hover:text-[#00d26a] transition-colors cursor-pointer flex items-center"
            >
              <span className="font-mono text-xs text-[#00d26a] w-6 font-bold">4</span>
              <span>Speaker</span>
            </a>
            <a
              href="#story-blueprint"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('story-blueprint');
              }}
              className="text-left py-1.5 text-xl font-light text-white hover:text-[#00d26a] transition-colors cursor-pointer flex items-center"
            >
              <span className="font-mono text-xs text-[#00d26a] w-6 font-bold">5</span>
              <span>Schedule</span>
            </a>
            <a
              href="#story-honors"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('story-honors');
              }}
              className="text-left py-1.5 text-xl font-light text-white hover:text-[#00d26a] transition-colors cursor-pointer flex items-center"
            >
              <span className="font-mono text-xs text-[#00d26a] w-6 font-bold">6</span>
              <span>Honors</span>
            </a>
            <a
              href="#story-patronage"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('story-patronage');
              }}
              className="text-left py-1.5 text-xl font-light text-white hover:text-[#00d26a] transition-colors cursor-pointer flex items-center"
            >
              <span className="font-mono text-xs text-[#00d26a] w-6 font-bold">7</span>
              <span>Patronage</span>
            </a>
            <a
              href="#story-inquiries"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('story-inquiries');
              }}
              className="text-left py-1.5 text-xl font-light text-white hover:text-[#00d26a] transition-colors cursor-pointer flex items-center"
            >
              <span className="font-mono text-xs text-[#00d26a] w-6 font-bold">8</span>
              <span>FAQ</span>
            </a>
          </div>

          <div className="border-t border-white/[0.08] pt-4 flex flex-col gap-3 max-w-sm w-full mx-auto" onClick={(e) => e.stopPropagation()}>
            <a
              href={MEETUP_EVENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-[#00d26a] text-[#080b11] font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#00d26a]/20 cursor-pointer"
            >
              <img
                src="/images/meetup-icon.png"
                alt=""
                className="w-4 h-4 object-contain shrink-0"
                aria-hidden="true"
              />
              <span>RSVP FOR THE EVENT</span>
              <ArrowUpRight size={14} className="shrink-0" />
            </a>

            <div className="flex items-center justify-between text-xs font-mono text-[#8e95a5]">
              <span>24 SEPT 2026 · MHSSCE</span>
              <span className="text-[#00d26a]">100 SEATS LIMITED</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/awssbg-mhssce/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-lg border border-white/[0.08] flex items-center justify-center gap-2 text-xs font-mono text-white/80 hover:text-white hover:bg-white/5 transition-all"
              >
                <LinkedInIcon size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/awssbg_mhssce"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-lg border border-white/[0.08] flex items-center justify-center gap-2 text-xs font-mono text-white/80 hover:text-white hover:bg-white/5 transition-all"
              >
                <InstagramIcon size={14} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
