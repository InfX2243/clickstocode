import type { CSSProperties } from 'react';
import CinematicChapter from '../components/CinematicChapter';
import {
  Sparkles,
  Users,
  Cloud,
  GraduationCap,
  Rocket,
  Code2,
  Terminal,
  Server,
  ShieldCheck,
  Laptop,
  Award,
} from 'lucide-react';

const AUDIENCE_ROLES = [
  [Cloud, 'Cloud Enthusiasts', 'Curious about what really happens behind the cloud.'],
  [GraduationCap, 'Cloud Beginners', 'Ready to go from concepts to a first hands-on build.'],
  [Rocket, 'Future Builders', 'Exploring DevOps, infrastructure, automation, or security.'],
  [Code2, 'Project Builders', 'Already building things and ready to understand the cloud layer.'],
] as const;

const BENEFITS = [
  [Server, 'Build on AWS', 'Provision and work with real cloud infrastructure.'],
  [ShieldCheck, 'Connect securely', 'Use Systems Manager / Session Manager to access your server.'],
  [Laptop, 'Learn by doing', 'Follow the workshop flow from cloud fundamentals to automation.'],
  [Award, 'Leave with more', 'Certificate, trivia, and event prizes.'],
] as const;

export default function AudienceSection() {
  return (
    <CinematicChapter
      eyebrow="FOR THE CURIOUS"
      title="Is this event for me?"
      className="audience-chapter"
    >
      <div className="audience-scene">
        <div className="audience-hero-copy">
          <div className="audience-kicker">
            <Sparkles size={15} strokeWidth={2.2} />
            <span>BEGINNER-FRIENDLY · BUILDER-FOCUSED</span>
          </div>
          <p>
            You don't need to already be an AWS expert.{' '}
            <strong>Curiosity matters more than prior AWS experience.</strong>
          </p>
        </div>

        <div className="audience-panel">
          <div className="audience-panel-heading">
            <div>
              <span className="mono-label">WHO SHOULD ATTEND?</span>
              <h3>Find your reason to build.</h3>
            </div>
            <Users size={26} aria-hidden="true" />
          </div>
          <div className="audience-audience-grid">
            {AUDIENCE_ROLES.map(([Icon, title, description], index) => (
              <article
                className="audience-tile"
                key={title}
                style={{ '--audience-index': index } as CSSProperties}
              >
                <span className="audience-tile-icon">
                  <Icon size={24} strokeWidth={2} />
                </span>
                <span className="audience-tile-number">{String(index + 1)}</span>
                <strong>{title}</strong>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="audience-panel audience-why-panel">
          <div className="audience-panel-heading">
            <div>
              <span className="mono-label">WHY PARTICIPATE?</span>
              <h3>More than a demo.</h3>
            </div>
            <Terminal size={26} aria-hidden="true" />
          </div>
          <div className="audience-benefit-grid">
            {BENEFITS.map(([Icon, title, description], index) => (
              <article
                className="audience-benefit"
                key={title}
                style={{ '--benefit-index': index } as CSSProperties}
              >
                <Icon size={22} strokeWidth={2} aria-hidden="true" />
                <div>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="audience-reassurance">
          <div>
            <span>NO PRIOR AWS EXPERIENCE REQUIRED</span>
            <strong>Bring your questions, your laptop, and the willingness to build.</strong>
          </div>
          <button
            type="button"
            className="event-overview-register audience-register"
            aria-label="Open Meetup"
            onClick={() => window.open('https://www.meetup.com/', '_blank', 'noopener,noreferrer')}
          >
            <img src="/images/meetup-icon.png" alt="" aria-hidden="true" />
            <span>OPEN MEETUP</span>
            <b aria-hidden="true">↗</b>
          </button>
        </div>
      </div>
    </CinematicChapter>
  );
}
