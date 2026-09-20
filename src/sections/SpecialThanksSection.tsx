import CinematicChapter from '../components/CinematicChapter';
import { Heart, Building2, GraduationCap, Award, ExternalLink, Sparkles } from 'lucide-react';
import { LinkedInIcon } from '../components/SocialIcons';

interface PatronCard {
  role: string;
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  isLogo?: boolean;
  citation: string;
  highlight: string;
  link?: string;
  linkText?: string;
  isLinkedIn?: boolean;
}

const PATRONS: PatronCard[] = [
  {
    role: 'HOST INSTITUTION & PATRON',
    name: 'M.H. Saboo Siddik College of Engineering',
    title: 'Premier Engineering Institution · Mumbai',
    image: '/images/mhssce-logo.png',
    imageAlt: 'M.H. Saboo Siddik College of Engineering Logo',
    isLogo: true,
    citation:
      'We extend our heartfelt gratitude to our esteemed institution for providing the state-of-the-art Seminar Hall venue, institutional resources, and an encouraging academic ecosystem that empowers students to learn, build, and innovate with world-class cloud technologies.',
    highlight: 'CAMPUS VENUE · INSTITUTIONAL PATRONAGE',
    link: 'https://mhssce.ac.in/',
    linkText: 'VISIT MHSSCE WEBSITE',
  },
  {
    role: 'COLLEGE PRINCIPAL',
    name: 'Dr. Mohd. Shafi Pathan',
    title: 'Principal, M.H. Saboo Siddik College of Engineering',
    image: '/images/dr-shafi-pathan.png',
    imageAlt: 'Dr. Mohd. Shafi Pathan - Principal, MHSSCE',
    citation:
      'Our sincere thanks and highest appreciation to our honorable Principal for his visionary leadership, unwavering encouragement of student-driven initiatives, and steadfast belief in bridging classroom learning with practical industry cloud competencies.',
    highlight: 'HONORABLE PRINCIPAL · INSPIRING LEADERSHIP',
    link: 'https://www.linkedin.com/in/mohd-shafi-pathan-ph-d-b7b09417/',
    linkText: 'CONNECT ON LINKEDIN',
    isLinkedIn: true,
  },
  {
    role: 'HEAD OF DEPARTMENT — IT',
    name: 'Dr. Zainab Mirza',
    title: 'Head of Department (Information Technology), MHSSCE',
    image: '/images/dr-zainab-mirza.png',
    imageAlt: 'Dr. Zainab Mirza - Head of Department (IT), MHSSCE',
    citation:
      'Special thanks to our respected Head of Department for her exemplary academic mentorship, continual departmental patronage, and active guidance in establishing and nurturing the AWS Student Builder Group at MHSSCE.',
    highlight: 'DEPARTMENTAL PATRON · BUILDER MENTOR',
    link: 'https://www.linkedin.com/in/dr-zainab-mirza/',
    linkText: 'CONNECT ON LINKEDIN',
    isLinkedIn: true,
  },
];

export default function SpecialThanksSection() {
  return (
    <CinematicChapter
      eyebrow="SPECIAL THANKS & LEADERSHIP ACKNOWLEDGEMENTS"
      title="Guided by vision. Powered by institutional patronage."
      className="special-thanks-chapter"
    >
      <div className="special-thanks-scene">
        <div className="special-thanks-intro">
          <div className="special-thanks-badge">
            <Heart size={16} strokeWidth={2.2} className="text-[#00d26a]" />
            <span>EXECUTIVE ACKNOWLEDGEMENTS</span>
          </div>
          <p>
            An event of this scale is only possible through the foresight, encouragement, and foundational support of our college leadership and academic mentors.
          </p>
        </div>

        <div className="special-thanks-grid" aria-label="Executive leadership and college acknowledgements">
          {PATRONS.map((patron, index) => (
            <article
              key={patron.name}
              className={`special-thanks-card ${patron.isLogo ? 'is-institution-card' : 'is-leader-card'}`}
              style={{ '--thanks-index': index } as React.CSSProperties}
            >
              <div className="special-thanks-card-header">
                <div className={`special-thanks-avatar-wrap ${patron.isLogo ? 'is-logo-wrap' : ''}`}>
                  <div className="special-thanks-avatar-glow" aria-hidden="true" />
                  <img
                    src={patron.image}
                    alt={patron.imageAlt}
                    className={patron.isLogo ? 'special-thanks-logo' : 'special-thanks-photo'}
                    loading="lazy"
                  />
                  {patron.isLogo ? (
                    <span className="special-thanks-avatar-badge" title="Host Institution">
                      <Building2 size={13} />
                    </span>
                  ) : index === 1 ? (
                    <span className="special-thanks-avatar-badge" title="Principal">
                      <Award size={13} />
                    </span>
                  ) : (
                    <span className="special-thanks-avatar-badge" title="Head of Department">
                      <GraduationCap size={13} />
                    </span>
                  )}
                </div>

                <div className="special-thanks-identity">
                  <span className="special-thanks-role-tag">{patron.role}</span>
                  <h3 className="special-thanks-name">{patron.name}</h3>
                  <span className="special-thanks-title">{patron.title}</span>
                </div>
              </div>

              <div className="special-thanks-body">
                <p className="special-thanks-citation">{patron.citation}</p>
              </div>

              <div className="special-thanks-footer">
                <div className="special-thanks-highlight">
                  <Sparkles size={13} className="text-[#00d26a]" />
                  <span>{patron.highlight}</span>
                </div>
                {patron.link && (
                  <a
                    href={patron.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`special-thanks-link ${patron.isLinkedIn ? 'is-linkedin' : ''}`}
                    aria-label={patron.isLinkedIn ? `Connect with ${patron.name} on LinkedIn` : `Visit ${patron.name} website`}
                  >
                    {patron.isLinkedIn && <LinkedInIcon size={13} className="text-[#00d26a]" />}
                    <span>{patron.linkText}</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="special-thanks-banner">
          <div className="special-thanks-banner-content">
            <div className="special-thanks-banner-icon">
              <Building2 size={22} className="text-[#00d26a]" />
            </div>
            <div className="special-thanks-banner-text">
              <strong>WITH DEEP RESPECT & GRATITUDE FROM AWS STUDENT BUILDER GROUP</strong>
              <span>
                Thank you to M.H. Saboo Siddik College of Engineering, Principal Dr. Mohd. Shafi Pathan, and Dr. Zainab Mirza for championing student cloud innovation on campus.
              </span>
            </div>
          </div>
        </div>
      </div>
    </CinematicChapter>
  );
}
