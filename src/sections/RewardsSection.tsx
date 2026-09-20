import CinematicChapter from '../components/CinematicChapter';
import { Sparkles, Gift, Award, CheckCircle2, PackageCheck } from 'lucide-react';
import { MEETUP_STATUS } from '../constants/event';

interface SwagItem {
  name: string;
  category: string;
  tag: string;
  desc: string;
  image: string;
}

const SWAG_ITEMS: SwagItem[] = [
  {
    name: 'AWS SBG Builder Diary',
    category: 'OFFICIAL CHAPTER NOTEBOOK',
    tag: 'HARD BOUND',
    desc: 'Custom MHSSCE chapter builder diary for your cloud architectures & notes.',
    image: '/images/swags-diary.png',
  },
  {
    name: 'Official AWS Cloud Pen',
    category: 'AWS SIGNATURE INSTRUMENT',
    tag: 'BRANDED',
    desc: 'High-precision writing instrument with official AWS cloud branding.',
    image: '/images/swags-pen.png',
  },
  {
    name: 'AWS Builder Sticker Pack',
    category: 'DEVELOPER DECK STICKERS',
    tag: 'LAPTOP PACK',
    desc: 'Holographic "I build it all with AWS" laptop & workstation stickers.',
    image: '/images/swags-stickers.png',
  },
];

export default function RewardsSection() {
  return (
    <CinematicChapter
      eyebrow="TRIVIA · SWAG · CERTIFICATE"
      title="Build it. Play along. Leave with something to remember."
      className="rewards-chapter"
    >
      <div className="rewards-scene">
        <div className="rewards-intro">
          <div className="rewards-badge">
            <Sparkles size={16} strokeWidth={2} />
            <span>THE FUN PART OF FINISHING</span>
          </div>
          <p>
            The workshop does not stop when the lab works. Take part in live cloud trivia, compete with fellow builders, and take home official rewards.
          </p>
        </div>

        <div className="rewards-feature-grid">
          {/* Card 01: Live Trivia */}
          <article className="rewards-feature rewards-trivia" style={{ '--reward-index': 0 } as React.CSSProperties}>
            <div className="rewards-feature-top">
              <div className="rewards-feature-icon">
                <Sparkles size={25} strokeWidth={1.7} />
              </div>
              <span className="rewards-pill-tag">LIVE INTERACTIVE</span>
            </div>
            <span>01 · INTERACTIVE</span>
            <strong>CLOUD TRIVIA</strong>
            <p>Test what you picked up during the session and play along with the entire hall in real time.</p>
            <div className="rewards-trivia-pills">
              <b>QUICK ROUNDS</b>
              <b>LEADERBOARD</b>
              <b>PLAY ALONG</b>
            </div>
          </article>

          {/* Card 02: Confirmed Event Swags Showcase */}
          <article className="rewards-feature rewards-swag" style={{ '--reward-index': 1 } as React.CSSProperties}>
            <div className="rewards-feature-top">
              <div className="rewards-feature-icon">
                <Gift size={25} strokeWidth={1.7} />
              </div>
              <span className="rewards-pill-tag rewards-pill-confirmed">
                <PackageCheck size={12} />
                <span>CONFIRMED SWAGS</span>
              </span>
            </div>
            <span>02 · REWARDS</span>
            <strong>EXCLUSIVE BUILDER SWAGS</strong>
            <p>Top trivia performers and active workshop contributors take home official AWS & MHSSCE builder gear.</p>
            
            <div className="rewards-swags-grid" aria-label="Official event swags preview">
              {SWAG_ITEMS.map((item) => (
                <div className="rewards-swag-card" key={item.name}>
                  <div className="rewards-swag-preview">
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </div>
                  <div className="rewards-swag-info">
                    <div className="rewards-swag-chip-row">
                      <span className="rewards-swag-badge">{item.tag}</span>
                    </div>
                    <b>{item.name}</b>
                    <small>{item.desc}</small>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Card 03: Certificate */}
          <article className="rewards-feature rewards-certificate" style={{ '--reward-index': 2 } as React.CSSProperties}>
            <div className="rewards-feature-top">
              <div className="rewards-feature-icon">
                <Award size={25} strokeWidth={1.7} />
              </div>
              <span className="rewards-pill-tag">VERIFIED CREDENTIAL</span>
            </div>
            <span>03 · COMPLETION</span>
            <strong>DIGITAL CERTIFICATE</strong>
            <p>Every registered participant who attends and completes the workshop receives an official digital certificate on their email.</p>
            <div className="rewards-certificate-mark">
              <CheckCircle2 size={15} />
              <span>DELIVERED NEXT DAY VIA EMAIL</span>
            </div>
          </article>
        </div>

        <div className="rewards-bottom">
          <div className="rewards-bottom-copy">
            <span>ONE HANDS-ON EXPERIENCE</span>
            <strong>Learn something useful. Have some fun. Finish with proof you built it.</strong>
          </div>
          <div
            className="event-overview-register event-overview-register-disabled rewards-register"
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
