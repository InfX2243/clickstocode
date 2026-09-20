import type { CSSProperties } from 'react';
import CinematicChapter from '../components/CinematicChapter';
import {
  AlarmClock,
  ClipboardCheck,
  Cloud,
  DoorOpen,
  Play,
  Laptop,
  Gift,
  HeartHandshake,
  Award,
  Clock,
} from 'lucide-react';

interface ScheduleItem {
  time: string;
  category: string;
  title: string;
  description: string;
  Icon: typeof AlarmClock;
}

const DAY_SCHEDULE: ScheduleItem[] = [
  {
    time: '09:30 AM',
    category: 'CAMPUS ENTRY',
    title: 'CHECK-IN OPENS',
    description: 'Registration Desk opens on the Ground Floor, near the Staff Lift.',
    Icon: AlarmClock,
  },
  {
    time: '09:30–09:50 AM',
    category: 'VERIFICATION',
    title: 'QR CHECK-IN',
    description: 'Show your Meetup QR ticket and complete event-day badge verification.',
    Icon: ClipboardCheck,
  },
  {
    time: '09:50–09:55 AM',
    category: 'SANDBOX CHECK',
    title: 'WAITING ROOM + LAB',
    description: 'Confirm that you received your AWS Academy Learner Lab resource.',
    Icon: Cloud,
  },
  {
    time: '≈09:55 AM',
    category: 'TRANSITION',
    title: 'MOVE TO SEMINAR HALL',
    description: 'Participants begin moving to the 3rd Floor, Seminar Hall, MHSSCE.',
    Icon: DoorOpen,
  },
  {
    time: '10:00 AM',
    category: 'CEREMONY',
    title: 'PROGRAM BEGINS',
    description: 'Welcome, felicitations, Principal & HoD addresses, then handover.',
    Icon: Play,
  },
  {
    time: 'HANDS-ON',
    category: 'KEYNOTE LAB',
    title: 'SPEAKER-LED SESSION',
    description: 'Afreen Bano leads the live hands-on AWS infrastructure build.',
    Icon: Laptop,
  },
  {
    time: 'LATE MORNING',
    category: 'ENGAGEMENT',
    title: 'TRIVIA + PRIZES',
    description: 'Interactive cloud trivia challenge followed by prize distribution.',
    Icon: Gift,
  },
  {
    time: 'CLOSING',
    category: 'ACKNOWLEDGEMENTS',
    title: 'VOTE OF THANKS',
    description: 'Closing address, faculty appreciation, and feedback form distribution.',
    Icon: HeartHandshake,
  },
  {
    time: 'NEXT DAY',
    category: 'CREDENTIAL',
    title: 'DIGITAL CERTIFICATE',
    description: 'Every attendee receives an official digital certificate via email.',
    Icon: Award,
  },
];

export default function DayTimelineSection() {
  return (
    <CinematicChapter
      eyebrow="EVENT DAY TIMELINE"
      title="One day. From check-in to certificate."
      className="timeline-chapter"
    >
      <div className="day-timeline-scene">
        <div className="day-timeline-intro">
          <div className="day-timeline-badge">
            <AlarmClock size={16} strokeWidth={2} />
            <span>THE DAY AT A GLANCE</span>
          </div>
          <p>
            From QR check-in and Learner Lab verification to the main program, trivia, feedback, and next-day certificates.
          </p>
        </div>

        <div className="day-timeline" aria-label="Event day timeline">
          {DAY_SCHEDULE.map((item, index) => {
            const TimelineIcon = item.Icon;
            return (
              <article
                className="day-timeline-item"
                key={item.title}
                style={{ '--timeline-index': index } as CSSProperties}
              >
                <div className="day-timeline-card-top">
                  <div className="day-timeline-time-chip">
                    <Clock size={12} className="text-[#00d26a]" />
                    <span>{item.time}</span>
                  </div>
                  <span className="day-timeline-order">#{String(index + 1).padStart(2, '0')}</span>
                </div>

                <div className="day-timeline-card-body">
                  <div className="day-timeline-node">
                    <TimelineIcon size={19} strokeWidth={1.8} />
                  </div>
                  <div className="day-timeline-copy">
                    <span className="day-timeline-category">{item.category}</span>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="day-timeline-note">
          <div className="day-timeline-note-left">
            <span>EVENT WINDOW</span>
            <strong>09:30 AM – 12:00 PM</strong>
          </div>
          <p>
            Internal speaker-session timings remain flexible so the technical session can follow the speaker's natural flow.
          </p>
        </div>
      </div>
    </CinematicChapter>
  );
}

