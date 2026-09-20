import type { CSSProperties } from 'react';
import CinematicChapter from '../components/CinematicChapter';
import { Rocket, AlarmClock, MapPin, Award, Gift, ExternalLink } from 'lucide-react';
import { LinkedInIcon, InstagramIcon } from '../components/SocialIcons';
import { EVENT_DATE, EVENT_TIME } from '../constants/event';

export default function FinalCallSection() {
  return (
    <CinematicChapter
      eyebrow="READY TO BUILD?"
      title="You've seen the clicks. Now learn what happens behind them."
      className="final-chapter"
    >
      <div className="final-build-scene">
        <div className="final-build-hero">
          <div className="final-build-badge">
            <Rocket size={17} strokeWidth={2} />
            <span>FINAL CALL · 100 SEATS · FREE TO ATTEND</span>
          </div>
          <h3>
            One hands-on cloud experience.<br />
            <em>Built for curious people.</em>
          </h3>
          <p>
            Join us on {EVENT_DATE} from {EVENT_TIME}. Check in at 9:30 AM, verify your AWS Academy Learner Lab access, then build from AWS fundamentals to a working web server and Infrastructure as Code.
          </p>
        </div>

        <div className="final-build-facts">
          <article style={{ '--final-index': 0 } as CSSProperties}>
            <AlarmClock size={20} />
            <span>09:30 AM</span>
            <strong>ARRIVE + CHECK IN</strong>
          </article>
          <article style={{ '--final-index': 1 } as CSSProperties}>
            <MapPin size={20} />
            <span>VENUE</span>
            <strong>3RD FLOOR · SEMINAR HALL</strong>
          </article>
          <article style={{ '--final-index': 2 } as CSSProperties}>
            <Award size={20} />
            <span>CERTIFICATE</span>
            <strong>EVERY ATTENDEE · BY NEXT DAY</strong>
          </article>
          <article style={{ '--final-index': 3 } as CSSProperties}>
            <Gift size={20} />
            <span>TRIVIA + PRIZES</span>
            <strong>PLAY ALONG + WIN</strong>
          </article>
        </div>

        <div className="final-social-bar" aria-label="Stay connected with AWS Student Builder Group">
          <span className="final-social-label">CONNECT WITH AWS STUDENT BUILDER GROUP MHSSCE:</span>
          <div className="final-social-group">
            <a
              href="https://www.linkedin.com/company/awssbg-mhssce/"
              target="_blank"
              rel="noreferrer"
              className="final-social-btn"
              aria-label="AWS SBG MHSSCE on LinkedIn"
            >
              <LinkedInIcon size={16} />
              <span>LinkedIn</span>
              <ExternalLink size={11} />
            </a>

            <a
              href="https://www.instagram.com/awssbg_mhssce"
              target="_blank"
              rel="noreferrer"
              className="final-social-btn"
              aria-label="AWS SBG MHSSCE on Instagram"
            >
              <InstagramIcon size={16} />
              <span>Instagram</span>
              <ExternalLink size={11} />
            </a>

            <a
              href="https://awssbg-mhssce.in"
              target="_blank"
              rel="noreferrer"
              className="final-social-btn"
              aria-label="AWS SBG MHSSCE Official Website"
            >
              <ExternalLink size={14} />
              <span>awssbg-mhssce.in</span>
            </a>
          </div>
        </div>
      </div>
    </CinematicChapter>
  );
}
