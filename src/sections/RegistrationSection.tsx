import type { CSSProperties } from 'react';
import CinematicChapter from '../components/CinematicChapter';
import { ClipboardCheck, CalendarCheck, MessageCircle, Cloud, MapPin, CheckCircle2, Ticket } from 'lucide-react';

interface RegistrationStepData {
  step: string;
  domain: string;
  title: string;
  description: string;
  keypoint: string;
  badgeNote?: string;
  Icon: typeof CalendarCheck;
}

const REGISTRATION_FLOW: RegistrationStepData[] = [
  {
    step: '01',
    domain: 'RSVP',
    title: 'REGISTER ON MEETUP',
    description: 'Reserve your builder seat on the official Meetup event page as soon as registrations open.',
    keypoint: '100 Limited Builder Seats',
    Icon: CalendarCheck,
  },
  {
    step: '02',
    domain: 'DOMAIN',
    title: 'COLLEGE DOMAIN ID',
    description: 'Submit your verified college domain email when prompted during the Meetup RSVP process.',
    keypoint: 'Official College Domain',
    badgeNote: '@mhssce.ac.in',
    Icon: ClipboardCheck,
  },
  {
    step: '03',
    domain: 'CHAT',
    title: 'JOIN WHATSAPP GROUP',
    description: 'Receive instant access to the private participant group after completing your Meetup RSVP.',
    keypoint: 'Private Participant Hub',
    Icon: MessageCircle,
  },
  {
    step: '04',
    domain: 'PASS',
    title: 'SAVE CONFIRMATION',
    description: 'Keep your QR pass, calendar invite, and learner lab checklist handy for expedited entry.',
    keypoint: 'Meetup QR Ticket',
    Icon: Cloud,
  },
  {
    step: '05',
    domain: 'VENUE',
    title: 'ARRIVE AT 09:30 AM',
    description: 'Arrive promptly at the Ground Floor Registration Desk, near the Staff Lift for verification.',
    keypoint: 'Ground Floor Desk',
    Icon: MapPin,
  },
];

export default function RegistrationSection() {
  return (
    <CinematicChapter
      eyebrow="REGISTER CORRECTLY"
      title="Five steps. One simple registration flow."
      className="registration-chapter"
    >
      <div className="registration-scene">
        <div className="registration-intro">
          <div className="registration-badge">
            <ClipboardCheck size={16} strokeWidth={2} />
            <span>IMPORTANT REGISTRATION INSTRUCTIONS</span>
          </div>
          <p>
            Once the Meetup event is published, RSVP through the official registration flow, complete the required details, and keep your confirmation close. The steps below take you from RSVP to event day.
          </p>
        </div>

        <div className="registration-flow" aria-label="Registration steps">
          {REGISTRATION_FLOW.map((step, index) => {
            const RegistrationIcon = step.Icon;
            return (
              <article
                className="registration-step"
                key={step.step}
                style={{ '--registration-index': index } as CSSProperties}
              >
                <div className="registration-step-top">
                  <div className="registration-step-badge">
                    <span>STEP</span>
                    <b>{step.step}</b>
                  </div>
                  <div className="registration-topic-rail">
                    <span className="registration-domain-tag">{step.domain}</span>
                    <span className="registration-rail-line" aria-hidden="true" />
                  </div>
                  <div className="registration-step-icon">
                    <RegistrationIcon size={20} strokeWidth={1.8} />
                  </div>
                </div>

                <div className="registration-step-content">
                  <strong>{step.title}</strong>
                  <p>{step.description}</p>
                  {step.badgeNote && (
                    <div className="registration-domain-pill">
                      <code>{step.badgeNote}</code>
                    </div>
                  )}
                </div>

                <div className="registration-step-footer">
                  <CheckCircle2 size={13} className="text-[#00d26a]" />
                  <span>{step.keypoint}</span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="registration-callout">
          <div className="registration-callout-left">
            <div className="registration-callout-badge">
              <Ticket size={15} />
              <span>REGISTRATION IS 100% FREE</span>
            </div>
            <strong>ONLY 100 SEATS AVAILABLE · RSVP MANDATORY</strong>
          </div>
          <p>The official Meetup event link will be activated when this platform is published for deployment.</p>
        </div>
      </div>
    </CinematicChapter>
  );
}

