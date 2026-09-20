import CinematicChapter from '../components/CinematicChapter';
import { Users, Cloud, Code2, ShieldCheck } from 'lucide-react';

export default function SpeakerSection() {
  return (
    <CinematicChapter
      eyebrow="YOUR GUIDE"
      title="Meet the builder behind the session."
      className="speaker-chapter"
    >
      <div className="speaker-scene">
        <div className="speaker-portrait-card">
          <div className="speaker-portrait-frame">
            <img src="/images/speaker.png" alt="Afreen Bano" />
          </div>
          <span>YOUR MENTOR</span>
        </div>
        <div className="speaker-profile">
          <div className="speaker-badge">
            <Users size={16} strokeWidth={2} />
            <span>INVITED MENTOR · AWS COMMUNITY</span>
          </div>
          <span className="mono-label">ER. AFREEN BANO</span>
          <h3>
            Build with context.<br />
            <em>Leave with confidence.</em>
          </h3>
          <p className="speaker-role">
            Technology Leader <b>·</b> AWS Cloud <b>·</b> DevSecOps <b>·</b> Engineering Leadership
          </p>
          <p className="speaker-bio">
            Afreen Bano is a technology leader with 15+ years of experience, spanning AWS Cloud, DevSecOps, engineering leadership, and high-performing teams. She leads HerTechEra – Pune Chapter, building a community where technology, learning, and inclusion come together. A globally recognized speaker and community leader, she has shared her expertise on international technology and leadership platforms and has been recognized for her impact in the tech community. At heart, she is passionate about turning complex technology into practical learning and inspiring the next generation of technologists.
          </p>
          <div className="speaker-focus-grid">
            <article style={{ '--speaker-index': 0 } as React.CSSProperties}>
              <Cloud size={19} />
              <strong>CLOUD + AWS</strong>
              <span>Learn the foundations behind the infrastructure you will build.</span>
            </article>
            <article style={{ '--speaker-index': 1 } as React.CSSProperties}>
              <Code2 size={19} />
              <strong>DEVOPS</strong>
              <span>Connect practical building with repeatable engineering habits.</span>
            </article>
            <article style={{ '--speaker-index': 2 } as React.CSSProperties}>
              <ShieldCheck size={19} />
              <strong>CLOUD SECURITY</strong>
              <span>Understand why secure access belongs in the workflow.</span>
            </article>
          </div>
          <div className="speaker-note">
            <span>SESSION FOCUS</span>
            <strong>Practical cloud skills you can carry into your next project.</strong>
          </div>
          <a
            className="speaker-link-placeholder"
            href="https://in.linkedin.com/in/afreen-bano"
            target="_blank"
            rel="noreferrer"
          >
            <span>LINKEDIN</span>
            <strong>VIEW AFREEN BANO'S PROFILE ↗</strong>
          </a>
        </div>
      </div>
    </CinematicChapter>
  );
}
