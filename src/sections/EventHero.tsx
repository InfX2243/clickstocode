import { Terminal, Calendar, Clock, MapPin, Gift, ExternalLink, ChevronDown, Sparkles } from 'lucide-react';
import { LinkedInIcon, InstagramIcon } from '../components/SocialIcons';
import { EVENT_DATE, EVENT_TIME, VENUE } from '../constants/event';

export default function EventHero() {
  return (
    <section id="screen-1" className="screen-1" aria-label="Hero - AWS From Clicks to Code">
      <div className="screen-1-glow" aria-hidden="true" />
      <div className="screen-1-grid" aria-hidden="true" />

      <div className="screen-1-content">
        {/* Unified Cybernetic Chapter Crest & Social Dock */}
        <header className="hero-brand-card">
          <div className="hero-brand-main">
            <a
              href="https://awssbg-mhssce.in"
              target="_blank"
              rel="noreferrer"
              className="hero-brand-logo-link"
              aria-label="AWS Student Builder Group MHSSCE Official Portal"
            >
              <div className="hero-logo-halo" aria-hidden="true" />
              <img
                src="/images/awssbg-logo.png"
                alt="AWS Student Builder Group Logo"
                className="hero-brand-logo"
              />
            </a>

            <div className="hero-brand-identity">
              <div className="hero-chapter-pill">
                <span className="hero-status-dot" aria-hidden="true" />
                <span>OFFICIAL AWS STUDENT CHAPTER</span>
              </div>
              <h1 className="hero-chapter-name">
                AWS Student Builder Group
              </h1>
              <p className="hero-chapter-sub">
                M.H. Saboo Siddik College of Engineering · Dept. of Information Technology
              </p>
            </div>
          </div>

          <div className="hero-brand-actions">
            {/* Social Media Buttons requested by user */}
            <div className="hero-social-group" aria-label="AWS SBG MHSSCE Social Media Links">
              <a
                href="https://www.linkedin.com/company/awssbg-mhssce/"
                target="_blank"
                rel="noreferrer"
                className="hero-social-btn hero-social-linkedin"
                aria-label="Follow AWS SBG MHSSCE on LinkedIn"
                title="LinkedIn · @awssbg-mhssce"
              >
                <LinkedInIcon size={16} />
                <span>LinkedIn</span>
                <ExternalLink size={11} className="hero-btn-arrow" />
              </a>

              <a
                href="https://www.instagram.com/awssbg_mhssce"
                target="_blank"
                rel="noreferrer"
                className="hero-social-btn hero-social-instagram"
                aria-label="Follow AWS SBG MHSSCE on Instagram"
                title="Instagram · @awssbg_mhssce"
              >
                <InstagramIcon size={16} />
                <span>Instagram</span>
                <ExternalLink size={11} className="hero-btn-arrow" />
              </a>
            </div>

            {/* College Crest */}
            <a
              href="https://mhssce.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="hero-college-crest"
              aria-label="M.H. Saboo Siddik College of Engineering Website"
              title="M.H. Saboo Siddik College of Engineering (Host Institution)"
            >
              <img
                src="/images/mhssce-logo.png"
                alt="MHSSCE Crest"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span className="hero-college-tooltip">MHSSCE</span>
            </a>
          </div>
        </header>

        {/* Hero Title Stack */}
        <div className="hero-event-stack">
          <div className="hero-presents-badge">
            <Terminal size={14} className="text-[#00d26a]" />
            <span>PRESENTS THE FLAGSHIP WORKSHOP</span>
            <span className="hero-badge-divider" aria-hidden="true" />
            <Sparkles size={13} className="text-[#00d26a]" />
            <span className="hero-badge-tag">HANDS-ON CLOUD</span>
          </div>

          <h2 className="screen-1-title">
            <span className="screen-1-title-white">AWS From </span>
            <span className="screen-1-title-green">Clicks to Code</span>
          </h2>

          <p className="hero-tagline">
            Move from visual console setup to real Linux compute, secure Session Manager access, and declarative CloudFormation automation in one guided builder session.
          </p>
        </div>

        {/* 4-Card Hero Metadata Dock */}
        <div className="hero-metadata-dock" aria-label="Event Key Details">
          <div className="hero-meta-card">
            <div className="hero-meta-icon">
              <Calendar size={18} />
            </div>
            <div className="hero-meta-text">
              <span className="hero-meta-label">DATE</span>
              <strong className="hero-meta-val">{EVENT_DATE}</strong>
            </div>
          </div>

          <div className="hero-meta-card">
            <div className="hero-meta-icon">
              <Clock size={18} />
            </div>
            <div className="hero-meta-text">
              <span className="hero-meta-label">TIMING</span>
              <strong className="hero-meta-val">{EVENT_TIME}</strong>
            </div>
          </div>

          <div className="hero-meta-card">
            <div className="hero-meta-icon">
              <MapPin size={18} />
            </div>
            <div className="hero-meta-text">
              <span className="hero-meta-label">CAMPUS VENUE</span>
              <strong className="hero-meta-val">{VENUE}</strong>
            </div>
          </div>

          <div className="hero-meta-card hero-meta-card-highlight">
            <div className="hero-meta-icon">
              <Gift size={18} />
            </div>
            <div className="hero-meta-text">
              <span className="hero-meta-label">REWARDS & LABS</span>
              <strong className="hero-meta-val">Swags, Trivia & Learner Labs</strong>
            </div>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="screen-1-scroll-hint" aria-hidden="true">
          <div className="hero-scroll-pill">
            <span className="screen-1-scroll-label">EXPLORE WORKSHOP STORY</span>
            <ChevronDown size={14} className="hero-scroll-chevron" />
          </div>
          <span className="screen-1-scroll-line" />
        </div>
      </div>
    </section>
  );
}
