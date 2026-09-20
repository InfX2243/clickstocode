import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Radio } from 'lucide-react';
import { LinkedInIcon, InstagramIcon } from '../SocialIcons';

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
          <div className="flex items-center gap-3.5 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative">
              <img
                src="/images/awssbg-logo.png"
                alt="AWS SBG Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain filter drop-shadow-[0_0_8px_rgba(0,210,106,0.3)] transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#00d26a] ring-2 ring-[#080b11] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-white font-medium text-sm sm:text-base tracking-tight group-hover:text-[#00d26a] transition-colors">
                  AWS From Clicks to Code
                </span>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#8e95a5] hidden sm:block">
                AWS Student Builder Group
              </span>
            </div>
          </div>

          {/* Minimal Floating Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-wider uppercase text-[#8e95a5]">
            <button
              onClick={() => scrollTo('story-manifesto')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              STORY
            </button>
            <button
              onClick={() => scrollTo('story-odyssey')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              TECH
            </button>
            <button
              onClick={() => scrollTo('story-keynote')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              SPEAKER
            </button>
            <button
              onClick={() => scrollTo('story-blueprint')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              SCHEDULE
            </button>
            <button
              onClick={() => scrollTo('story-inquiries')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              FAQ
            </button>
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
            <button
              onClick={() => scrollTo('story-blueprint')}
              className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#00d26a] text-[#080b11] hover:bg-[#00e676] hover:-translate-y-0.5 transition-all duration-200 shadow-md shadow-[#00d26a]/20 cursor-pointer"
            >
              <span>RSVP FOR THE EVENT</span>
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border border-white/[0.08] text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080b11]/98 backdrop-blur-2xl flex flex-col justify-between px-6 pt-28 pb-10 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#8e95a5] border-b border-white/[0.08] pb-3">
              Navigation Index
            </div>
            <button
              onClick={() => scrollTo('story-manifesto')}
              className="text-left text-2xl font-light text-white hover:text-[#00d26a] transition-colors"
            >
              <span className="font-mono text-xs text-[#00d26a] mr-3">1</span>
              Story
            </button>
            <button
              onClick={() => scrollTo('story-odyssey')}
              className="text-left text-2xl font-light text-white hover:text-[#00d26a] transition-colors"
            >
              <span className="font-mono text-xs text-[#00d26a] mr-3">2</span>
              Tech
            </button>
            <button
              onClick={() => scrollTo('story-keynote')}
              className="text-left text-2xl font-light text-white hover:text-[#00d26a] transition-colors"
            >
              <span className="font-mono text-xs text-[#00d26a] mr-3">3</span>
              Speaker
            </button>
            <button
              onClick={() => scrollTo('story-blueprint')}
              className="text-left text-2xl font-light text-white hover:text-[#00d26a] transition-colors"
            >
              <span className="font-mono text-xs text-[#00d26a] mr-3">4</span>
              Schedule
            </button>
            <button
              onClick={() => scrollTo('story-inquiries')}
              className="text-left text-2xl font-light text-white hover:text-[#00d26a] transition-colors"
            >
              <span className="font-mono text-xs text-[#00d26a] mr-3">5</span>
              FAQ
            </button>
          </div>

          <div className="border-t border-white/[0.08] pt-6 flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#8e95a5]">
              <span>24 SEPT 2026 · MHSSCE</span>
              <span className="text-[#00d26a]">100 SEATS MAXIMUM</span>
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
