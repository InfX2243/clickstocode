import type { CSSProperties } from 'react';
import CinematicChapter from '../components/CinematicChapter';
import { Handshake, Cloud, Users, Gift, Rocket } from 'lucide-react';
import { SPONSOR_EMAIL, SPONSOR_MAILTO } from '../constants/event';

const SPONSOR_WAYS = [
  [Cloud, 'CLOUD + TECHNOLOGY', 'Support hands-on access to modern cloud tools and learning.'],
  [Users, 'COMMUNITY', 'Help connect students with practitioners and builder communities.'],
  [Gift, 'EVENT SUPPORT', 'Contribute to the workshop experience, learning materials, or swag.'],
  [Rocket, 'INDUSTRY PARTNERSHIP', 'Bring mentorship, collaboration, or opportunities closer to campus.'],
] as const;

export default function SponsorSection() {
  return (
    <CinematicChapter
      eyebrow="SPONSOR THE NEXT BUILD"
      title="Help put practical cloud skills in more hands."
      className="sponsor-chapter"
    >
      <div className="sponsor-scene">
        <div className="sponsor-intro">
          <div className="sponsor-badge">
            <Handshake size={16} strokeWidth={2} />
            <span>OPEN TO INDUSTRY · COMMUNITY · CLOUD PARTNERS</span>
          </div>
          <p>
            We welcome companies, technology and cloud organizations, professionals, community groups, and industry partners who want to support student builders.
          </p>
        </div>

        <div className="sponsor-main">
          <div className="sponsor-hero-card">
            <div className="sponsor-hero-icon">
              <Handshake size={34} strokeWidth={1.5} />
            </div>
            <span>PARTNERSHIP OPPORTUNITY</span>
            <strong>Support the next generation of cloud builders.</strong>
            <p>
              Your support can help make practical, accessible cloud learning possible for students and emerging builders.
            </p>
            <div className="sponsor-question">
              WANT TO SUPPORT THE NEXT GENERATION OF CLOUD BUILDERS?
            </div>
          </div>

          <div className="sponsor-options">
            <span className="mono-label">WAYS TO SUPPORT</span>
            {SPONSOR_WAYS.map(([Icon, title, description], index) => {
              const SponsorIcon = Icon as typeof Cloud;
              return (
                <article
                  key={title}
                  style={{ '--sponsor-index': index } as CSSProperties}
                >
                  <SponsorIcon size={20} strokeWidth={1.8} />
                  <div>
                    <strong>{title}</strong>
                    <p>{description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="sponsor-contact">
          <div>
            <span>GET IN TOUCH</span>
            <strong>{SPONSOR_EMAIL}</strong>
          </div>
          <a className="sponsor-mail-button" href={SPONSOR_MAILTO}>
            <span>OPEN PREFILLED EMAIL</span>
            <b aria-hidden="true">↗</b>
          </a>
        </div>
      </div>
    </CinematicChapter>
  );
}
