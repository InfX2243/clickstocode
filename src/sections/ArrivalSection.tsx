import type { CSSProperties } from 'react';
import CinematicChapter from '../components/CinematicChapter';
import { DoorOpen, MapPin, ClipboardCheck, Cloud, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { VENUE, CHECKIN_LOCATION, MEETUP_STATUS } from '../constants/event';

interface ArrivalStepData {
  step: string;
  domain: string;
  title: string;
  description: string;
  keypoint: string;
  Icon: typeof ClipboardCheck;
}

const ARRIVAL_STEPS: ArrivalStepData[] = [
  {
    step: '01',
    domain: 'CHECK-IN',
    title: 'QR CHECK-IN',
    description: 'Show your official Meetup QR pass at the Ground Floor desk to receive entry verification.',
    keypoint: 'Meetup Pass Required',
    Icon: ClipboardCheck,
  },
  {
    step: '02',
    domain: 'LAB CHECK',
    title: 'WAITING ROOM',
    description: 'Confirm that you received your AWS Academy Learner Lab resource and can access the console.',
    keypoint: 'Learner Lab Online',
    Icon: Cloud,
  },
  {
    step: '03',
    domain: 'HALL ENTRY',
    title: 'SEMINAR HALL ENTRY',
    description: 'Around 9:55 AM, proceed to the 3rd Floor Seminar Hall via the staff lift or central staircase.',
    keypoint: '3rd Floor · MHSSCE',
    Icon: MessageCircle,
  },
  {
    step: '04',
    domain: 'KEYNOTE',
    title: 'PROGRAM BEGINS',
    description: 'Take your seats in the Seminar Hall for the opening ceremony, leadership address, and hands-on lab.',
    keypoint: '10:00 AM Prompt Start',
    Icon: DoorOpen,
  },
];

export default function ArrivalSection() {
  return (
    <CinematicChapter
      eyebrow="EVENT DAY"
      title="Arrive. Check in. Get ready to build."
      className="arrival-chapter"
    >
      <div className="arrival-scene">
        <div className="arrival-intro">
          <div className="arrival-badge">
            <DoorOpen size={16} strokeWidth={2} />
            <span>YOUR FIRST 30 MINUTES</span>
          </div>
          <p>
            Check in, verify your AWS Academy Learner Lab access in the waiting room, then move into the Seminar Hall before the 10:00 AM program begins.
          </p>
        </div>

        <div className="arrival-window arrival-window-priority" aria-label="Key event timings">
          <div className="arrival-window-col">
            <span>09:30 — 09:50 AM</span>
            <strong>CHECK-IN + LAB VERIFICATION</strong>
            <small>GROUND FLOOR DESK</small>
          </div>
          <div className="arrival-window-divider">
            <span className="arrival-window-pill">
              <Clock size={13} className="text-[#00d26a]" />
              MORNING TIMELINE
            </span>
            <span className="arrival-window-line" />
          </div>
          <div className="arrival-window-col text-right">
            <span>10:00 AM</span>
            <strong>MAIN PROGRAM BEGINS</strong>
            <small>3RD FLOOR SEMINAR HALL</small>
          </div>
        </div>

        <div className="arrival-hero">
          <div className="arrival-time-card">
            <div className="arrival-time-badge">
              <Clock size={16} />
              <span>09:30 AM OPENING</span>
            </div>
            <strong>REGISTRATION DESK OPENS</strong>
            <p>Ground Floor, near Staff Lift. Organizers will scan your Meetup ticket and verify your lab credentials.</p>
          </div>

          <div className="arrival-location-card">
            <div className="arrival-location-icon">
              <MapPin size={22} strokeWidth={1.8} />
            </div>
            <div className="arrival-location-info">
              <span>CHECK-IN & ASSISTANCE</span>
              <strong>Registration Desk</strong>
              <small>Ground Floor · Near Staff Lift</small>
            </div>
          </div>

          <div className="arrival-location-card">
            <div className="arrival-location-icon">
              <DoorOpen size={22} strokeWidth={1.8} />
            </div>
            <div className="arrival-location-info">
              <span>MAIN VENUE · 10:00 AM</span>
              <strong>Seminar Hall</strong>
              <small>3rd Floor · MHSSCE</small>
            </div>
          </div>
        </div>

        <div className="arrival-steps" aria-label="Arrival checklist">
          {ARRIVAL_STEPS.map((step, index) => {
            const ArrivalIcon = step.Icon;
            return (
              <article
                className="arrival-step"
                key={step.step}
                style={{ '--arrival-index': index } as CSSProperties}
              >
                <div className="arrival-step-top">
                  <div className="arrival-step-badge">
                    <span>STEP</span>
                    <b>{step.step}</b>
                  </div>
                  <div className="arrival-topic-rail">
                    <span className="arrival-domain-tag">{step.domain}</span>
                    <span className="arrival-rail-line" aria-hidden="true" />
                  </div>
                  <div className="arrival-step-icon">
                    <ArrivalIcon size={20} strokeWidth={1.8} />
                  </div>
                </div>

                <div className="arrival-step-content">
                  <strong>{step.title}</strong>
                  <p>{step.description}</p>
                </div>

                <div className="arrival-step-footer">
                  <CheckCircle2 size={13} className="text-[#00d26a]" />
                  <span>{step.keypoint}</span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="arrival-note">
          <span>CAMPUS VENUE · 10:00 AM</span>
          <p>
            {VENUE}. Check-in and support remain at the {CHECKIN_LOCATION.toLowerCase()}.
          </p>
        </div>

        <div
          className="event-overview-register event-overview-register-disabled arrival-register"
          aria-label={MEETUP_STATUS}
        >
          <img src="/images/meetup-icon.png" alt="" aria-hidden="true" />
          <span>{MEETUP_STATUS}</span>
          <b aria-hidden="true">·</b>
        </div>
      </div>
    </CinematicChapter>
  );
}

