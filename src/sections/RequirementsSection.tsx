import CinematicChapter from '../components/CinematicChapter';
import { Laptop, BatteryCharging, IdCard, CalendarCheck } from 'lucide-react';
import { MEETUP_STATUS } from '../constants/event';

export default function RequirementsSection() {
  return (
    <CinematicChapter
      eyebrow="WHAT TO BRING"
      title="Bring the tools that let you build."
      className="requirements-chapter"
    >
      <div className="requirements-scene">
        <div className="requirements-intro">
          <div className="requirements-badge">
            <Laptop size={16} strokeWidth={2} />
            <span>HANDS-ON WORKSHOP · LAPTOP REQUIRED</span>
          </div>
          <p>
            This is a practical build session, so come prepared with the essentials. The laptop is the one non-negotiable.
          </p>
        </div>

        <div className="requirements-hero">
          <div className="requirements-laptop">
            <Laptop size={76} strokeWidth={1.25} aria-hidden="true" />
            <span>MANDATORY</span>
            <strong>YOUR LAPTOP</strong>
            <small>Bring it charged and ready to use.</small>
          </div>
          <div className="requirements-side">
            <article>
              <BatteryCharging size={22} />
              <div>
                <strong>LAPTOP CHARGER</strong>
                <span>Keep your device powered through the hands-on lab.</span>
              </div>
            </article>
            <article>
              <IdCard size={22} />
              <div>
                <strong>COLLEGE DOMAIN ID</strong>
                <span>Use the college domain ID @mhssce.ac.in where required.</span>
              </div>
            </article>
            <article>
              <CalendarCheck size={22} />
              <div>
                <strong>MEETUP CONFIRMATION</strong>
                <span>Keep your Meetup confirmation and QR ticket accessible.</span>
              </div>
            </article>
          </div>
        </div>

        <div className="requirements-footer">
          <div>
            <span>FREE TO ATTEND</span>
            <strong>LIMITED TO 100 PARTICIPANTS</strong>
          </div>
          <p>Event date: 24 September 2026 · Venue: 3rd Floor, Seminar Hall, MHSSCE.</p>
        </div>

        <div
          className="event-overview-register event-overview-register-disabled requirements-register"
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
