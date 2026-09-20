import StorySection from '../../components/editorial/StorySection';
import { Mail, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon } from '../../components/SocialIcons';
import { SPONSOR_EMAIL, SPONSOR_MAILTO } from '../../constants/event';

interface Patron {
  name: string;
  role: string;
  title: string;
  image: string;
  isLogo?: boolean;
  citation: string;
  link?: string;
  linkText?: string;
}

const PATRONS: Patron[] = [
  {
    role: 'HOST INSTITUTION & PATRON',
    name: 'M.H. Saboo Siddik College of Engineering',
    title: 'Premier Engineering Institution · Mumbai',
    image: '/images/mhssce-logo.png',
    isLogo: true,
    citation:
      'Providing the state-of-the-art 3rd Floor Seminar Hall, institutional infrastructure, and an academic ecosystem empowering student builders to innovate with world-class cloud technologies.',
    link: 'https://mhssce.ac.in/',
    linkText: 'VISIT MHSSCE PORTAL',
  },
  {
    role: 'HONORABLE PRINCIPAL',
    name: 'Dr. Mohd. Shafi Pathan',
    title: 'Principal, M.H. Saboo Siddik College of Engineering',
    image: '/images/dr-shafi-pathan.png',
    citation:
      'Visionary leadership, unwavering encouragement of student builder initiatives, and championing the transition from classroom theory to practical, hands-on industry cloud competencies.',
    link: 'https://www.linkedin.com/in/mohd-shafi-pathan-ph-d-b7b09417/',
    linkText: 'CONNECT ON LINKEDIN',
  },
  {
    role: 'HEAD OF DEPARTMENT — IT',
    name: 'Dr. Zainab Mirza',
    title: 'Head of Department (Information Technology), MHSSCE',
    image: '/images/dr-zainab-mirza.png',
    citation:
      'Exemplary academic mentorship, continual departmental patronage, and active guidance in establishing and nurturing the AWS Student Builder Group at MHSSCE.',
    link: 'https://www.linkedin.com/in/dr-zainab-mirza/',
    linkText: 'CONNECT ON LINKEDIN',
  },
];

export default function Act7Patronage() {
  return (
    <StorySection
      id="story-patronage"
      actNumber="7"
      actLabel="PATRONAGE"
      eyebrow="LEADERSHIP & PARTNERSHIP"
    >
      <div className="space-y-20 sm:space-y-28">
        {/* Editorial Heading with Generous Space */}
        <div className="max-w-3xl reveal-init">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] leading-[1.06] text-white mb-6">
            Guided by academic vision. Powered by institutional leadership.
          </h2>
          <p className="text-base sm:text-xl text-[#8e95a5] font-light leading-relaxed">
            An event of this scale is made possible through the foresight, encouragement, and foundational support of our college administration and department leadership.
          </p>
        </div>

        {/* Dignified Patron Columns: Delicate Hairlines & Subdued Presence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 pt-8 border-t border-white/[0.08]">
          {PATRONS.map((patron, idx) => (
            <div
              key={idx}
              className="space-y-6 reveal-init"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg overflow-hidden border border-white/[0.08] bg-[#0c1017] p-1 flex items-center justify-center shrink-0">
                  <img
                    src={patron.image}
                    alt={patron.isLogo ? `${patron.name} Official Emblem` : `${patron.name} — ${patron.title}`}
                    width={56}
                    height={56}
                    loading="lazy"
                    decoding="async"
                    className={patron.isLogo ? 'w-full h-full object-contain' : 'w-full h-full object-cover object-top rounded'}
                  />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#00d26a] uppercase tracking-widest">
                    {patron.role}
                  </div>
                  <h3 className="text-lg font-medium text-white tracking-tight">
                    {patron.name}
                  </h3>
                  <div className="text-xs text-[#8e95a5]">
                    {patron.title}
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#8e95a5] font-light leading-relaxed">
                {patron.citation}
              </p>

              {patron.link && (
                <div>
                  <a
                    href={patron.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-white/70 hover:text-white transition-colors"
                  >
                    {idx > 0 && <LinkedInIcon size={12} />}
                    <span>{patron.linkText}</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Calm Industry Partnership Callout */}
        <div className="pt-12 border-t border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 reveal-init">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono text-[#00d26a] uppercase tracking-widest">
              INDUSTRY & COMMUNITY PARTNERSHIP
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              Support the next generation of cloud builders.
            </h3>
            <p className="text-sm text-[#8e95a5] font-light leading-relaxed">
              We welcome technology organizations, cloud practitioners, and developer communities interested in providing mentorship, technical resources, or event support.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <a
              href={SPONSOR_MAILTO}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#00d26a] text-[#080b11] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#00e676] hover:-translate-y-0.5 transition-all cursor-pointer shadow-md shadow-[#00d26a]/20"
            >
              <span>Compose Partner Email</span>
              <ArrowUpRight size={14} />
            </a>
            <div className="text-[11px] font-mono text-[#8e95a5]">
              {SPONSOR_EMAIL}
            </div>
          </div>
        </div>
      </div>
    </StorySection>
  );
}
