import CinematicChapter from '../components/CinematicChapter';
import { EVENT_DATE, EVENT_TIME, VENUE, MEETUP_STATUS } from '../constants/event';

export default function EventOverviewSection() {
  return (
    <CinematicChapter title="" className="event-overview-chapter">
      <div className="event-overview-scene">
        <header className="event-overview-header">
          <div>
            <h2>AWS From <em>Clicks to Code</em></h2>
            <strong>AWS FUNDAMENTALS · HANDS-ON CLOUD JOURNEY</strong>
            <div className="event-overview-meta">
              <span>{EVENT_DATE}</span>
              <span>{EVENT_TIME}</span>
              <span>{VENUE}</span>
            </div>
          </div>
        </header>
        <div className="event-overview-grid">
          <div className="event-overview-copy">
            <span className="mono-label">ABOUT THE EVENT</span>
            <p>
              The AWS Student Builder Group at M.H. Saboo Siddik College of Engineering invites students to a practical cloud journey — from understanding AWS fundamentals to provisioning a server, securely accessing it, hosting a customized web page, and automating the infrastructure with Infrastructure as Code.
            </p>
            <div className="event-overview-register event-overview-register-disabled" aria-label={MEETUP_STATUS}>
              <img src="/images/meetup-icon.png" alt="" aria-hidden="true" />
              <span>{MEETUP_STATUS}</span>
              <b aria-hidden="true">·</b>
            </div>
          </div>
          <div className="event-overview-steps" aria-label="Five-step cloud journey">
            <article>
              <b>1</b>
              <img src="/images/aws-logo.png" alt="AWS" />
              <div>
                <strong>UNDERSTAND</strong>
                <span>Cloud Computing + AWS</span>
              </div>
            </article>
            <article>
              <b>2</b>
              <img src="/images/ec2.png" alt="Amazon EC2" />
              <div>
                <strong>PROVISION</strong>
                <span>Amazon EC2</span>
              </div>
            </article>
            <article>
              <b>3</b>
              <img src="/images/systemsmanager.png" alt="Systems Manager" />
              <div>
                <strong>CONNECT SECURELY</strong>
                <span>Systems Manager · Session Manager</span>
              </div>
            </article>
            <article>
              <b>4</b>
              <span className="event-service-badge event-service-image">
                <img src="/images/web-server-icon.png" alt="Web Server" />
              </span>
              <div>
                <strong>MAKE IT REAL</strong>
                <span>Web Server</span>
              </div>
            </article>
            <article>
              <b>5</b>
              <img src="/images/cloudformation.png" alt="CloudFormation" />
              <div>
                <strong>AUTOMATE</strong>
                <span>CloudFormation + Infrastructure as Code</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </CinematicChapter>
  );
}
