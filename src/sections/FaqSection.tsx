import type { CSSProperties } from 'react';
import CinematicChapter from '../components/CinematicChapter';
import {
  MessageCircle,
  Users,
  Gift,
  Laptop,
  Cloud,
  Terminal,
  IdCard,
  MapPin,
  Award,
  HeartHandshake,
} from 'lucide-react';
import { MEETUP_STATUS } from '../constants/event';

const FAQ_ITEMS = [
  [Users, 'WHO IS THIS FOR?', 'Students, cloud enthusiasts, beginners, project builders, and anyone curious about AWS, DevOps, security, or infrastructure.'],
  [Gift, 'IS IT FREE?', 'Yes. Attendance is completely free, with Meetup registration capped at 100 participants.'],
  [Laptop, 'DO I NEED A LAPTOP?', 'Yes. A laptop is mandatory for the hands-on workshop. Bring it charged, along with your charger.'],
  [Cloud, 'IS IT BEGINNER-FRIENDLY?', 'Yes. You do not need prior AWS expertise; the session is designed around learning by building.'],
  [Terminal, 'HOW DOES THE SANDBOX WORK?', 'The workshop uses AWS Academy Learner Lab. Organizers verify that you received and can access it in the waiting room before the program begins.'],
  [IdCard, 'WHAT COLLEGE ID IS NEEDED?', 'Use your college/institutional domain ID: @mhssce.ac.in.'],
  [MessageCircle, 'HOW DO I JOIN WHATSAPP?', 'The official WhatsApp group link will be provided through the Meetup registration flow.'],
  [MapPin, 'WHEN AND WHERE DO I CHECK IN?', 'Check-in opens at 9:30 AM at the Registration Desk on the Ground Floor, near the Staff Lift. The main program begins at 10:00 AM in the 3rd Floor, Seminar Hall, MHSSCE.'],
  [Award, 'DO I GET A CERTIFICATE?', 'Yes. Every participant who attends receives a digital certificate by the next day on their registered email.'],
  [HeartHandshake, 'NEED MORE HELP?', 'For event-related help, contact Abid Ahmed Shaikh, AWS Student Builder Group Leader at MHSSCE, at +91 99678 13266.'],
] as const;

export default function FaqSection() {
  return (
    <CinematicChapter
      eyebrow="FAQ · SUPPORT"
      title="The answers before you arrive."
      className="faq-chapter"
    >
      <div className="faq-scene">
        <div className="faq-intro">
          <div className="faq-badge">
            <MessageCircle size={16} strokeWidth={2} />
            <span>QUICK ANSWERS · EVENT SUPPORT</span>
          </div>
          <p>
            Everything you need to feel ready. Confirmed details stay clear; anything still being finalized is marked as a placeholder.
          </p>
        </div>

        <div className="faq-grid" aria-label="Frequently asked questions">
          {FAQ_ITEMS.map(([Icon, question, answer], index) => {
            const FaqIcon = Icon as typeof MessageCircle;
            return (
              <article
                className="faq-item"
                key={question}
                style={{ '--faq-index': index } as CSSProperties}
              >
                <div className="faq-icon">
                  <FaqIcon size={19} strokeWidth={1.8} />
                </div>
                <div>
                  <strong>{question}</strong>
                  <p>{answer}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="faq-footer">
          <div>
            <span>STILL NEED HELP?</span>
            <strong>ABID AHMED SHAIKH · +91 99678 13266</strong>
          </div>
          <div
            className="event-overview-register event-overview-register-disabled faq-register"
            aria-label={MEETUP_STATUS}
          >
            <img src="/images/meetup-icon.png" alt="" aria-hidden="true" />
            <span>{MEETUP_STATUS}</span>
            <b aria-hidden="true">·</b>
          </div>
        </div>
      </div>
    </CinematicChapter>
  );
}
