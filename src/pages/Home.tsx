import { useMemo, useRef, type ReactNode, type CSSProperties } from 'react';
import CinematicChapter from '../components/CinematicChapter';
import { AlarmClock, Award, BatteryCharging, CalendarCheck, CheckCircle2, ClipboardCheck, Cloud, Code2, DoorOpen, Gift, GraduationCap, Handshake, HeartHandshake, IdCard, ImageIcon, Laptop, MapPin, MessageCircle, Play, Rocket, Server, ShieldCheck, Sparkles, Terminal, UserRound, Users } from 'lucide-react';
import { useElementScrollProgress, useReducedMotion } from '../lib/useScrollProgress';

const chapters = 13;
const ENTRY_START = 0.006;
const ENTRY_END = 0.032;
const STORY_START = 0.008;
const STORY_HANDOFF_END = 0.055;
const STORY_END = 0.975;
const MEETUP_STATUS = 'MEETUP REGISTRATION COMING SOON';
const EVENT_DATE = '24 September 2026';
const EVENT_TIME = '9:30 AM – 12:00 PM';
const VENUE = '3rd Floor, Seminar Hall, MHSSCE';
const CHECKIN_LOCATION = 'Ground Floor · Near the Staff Lift';
const LEARNER_LAB_GUIDE_URL = 'https://d3fzag6u5cy19y.cloudfront.net/enrollment-guide';
const SPONSOR_EMAIL = 'awssbg@mhssce.ac.in';
const SPONSOR_MAILTO = 'mailto:' + SPONSOR_EMAIL + '?subject=' + encodeURIComponent('Sponsor / Partnership Enquiry — AWS From Clicks to Code') + '&body=' + encodeURIComponent('Hello AWS Student Builder Group at MHSSCE,\\n\\nI am [YOUR NAME] from [ORGANIZATION / COMMUNITY].\\n\\nI would like to discuss [YOUR SPONSORSHIP / PARTNERSHIP IDEA].\\n\\nYou can reach me at [YOUR EMAIL / PHONE].\\n\\nThank you,\\n[YOUR NAME]');
const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const storyTimelineProgress = (timeline: number) => clamp01((timeline - STORY_START) / (STORY_END - STORY_START));
const easeInOut = (value: number) => {
  const t = clamp01(value);
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};
const smoothstep = (start: number, end: number, value: number) => {
  const t = clamp01((value - start) / (end - start));
  return t * t * (3 - 2 * t);
};
const chapterProgress = (story: number, index: number) => easeInOut(clamp01(story * chapters - index));
const chapterVisibility = (story: number, index: number) => {
  const raw = story * chapters - index;
  // Give each chapter a clean, non-overlapping handoff window:
  // enter -> hold -> exit, with the next chapter starting as the previous finishes.
  if (raw <= 0 || raw >= 1.15) return 0;
  if (raw < 0.15) return smoothstep(0, 0.15, raw);
  if (raw <= 0.85) return 1;
  return 1 - smoothstep(0.85, 1.15, raw);
};

function ChapterShell({ eyebrow, title, children, progress, visibility, className }: { eyebrow?: string; title: string; children: ReactNode; progress: number; visibility: number; className?: string }) {
  return <CinematicChapter eyebrow={eyebrow} title={title} progress={progress} visibility={visibility} className={className}>{children}</CinematicChapter>;
}

export default function Home() {
  const timelineRef = useRef<HTMLElement | null>(null);
  const timelineProgress = useElementScrollProgress(timelineRef);
  const reducedMotion = useReducedMotion();
  const screen1Exit = timelineProgress > (reducedMotion ? 0.004 : ENTRY_START);
  const entryFade = smoothstep(ENTRY_START, ENTRY_END, timelineProgress);
  const eventHandoff = smoothstep(0.012, STORY_HANDOFF_END, timelineProgress);
  const storyReveal = smoothstep(STORY_START, STORY_HANDOFF_END, timelineProgress);
  const storyProgress = storyTimelineProgress(timelineProgress);
  const handoffChapterProgress = smoothstep(0.012, STORY_HANDOFF_END, timelineProgress);
  const chapterProgresses = useMemo(() => Array.from({ length: chapters }, (_, i) => i === 0 ? handoffChapterProgress : chapterProgress(storyProgress, i)), [storyProgress, handoffChapterProgress]);
  const chapterVisibilities = useMemo(() => Array.from({ length: chapters }, (_, i) => chapterVisibility(storyProgress, i)), [storyProgress]);
  const entryVisibility = 1 - entryFade;

  return (
    <div className="experience">
      <section ref={timelineRef} className="cinematic-timeline" aria-label="AWS From Clicks to Code cinematic experience">
        <div className="cinematic-timeline-frame">
          <section id="screen-1" className={`screen-1 relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#080b13] px-6 py-16${screen1Exit ? ' is-exiting' : ''}`} style={{ '--entry-fade': entryFade, '--event-handoff': eventHandoff } as CSSProperties}>
            <div className="screen-1-glow absolute inset-0 pointer-events-none" style={{ opacity: 1 - entryFade * 0.85 }} />
            <div className="screen-1-grid absolute inset-0 pointer-events-none" style={{ opacity: 1 - entryFade }} />
            <div className="screen-1-content relative z-10 flex w-full max-w-6xl flex-col items-center text-center">
              <div className="screen-1-brand" style={{ opacity: 1 - entryFade, transform: `translate3d(0, ${entryFade * -34}px, 0)` }}>
                <a className="screen-1-logo-wrap" href="https://awssbg-mhssce.in" target="_blank" rel="noreferrer" aria-label="AWS Student Builder Group at M.H. Saboo Siddik College of Engineering">
                  <img src="/images/awssbg-logo.png" alt="AWS Student Builder Group MHSSCE" />
                </a>
                <div className="screen-1-org"><h1>AWS Student Builder Group at<br />M.H. Saboo Siddik College of Engineering</h1></div>
                <a className="screen-1-college-logo" href="https://mhssce.ac.in/" target="_blank" rel="noreferrer" aria-label="M.H. Saboo Siddik College of Engineering">
                  <img src="/images/mhssce-logo.png" alt="M.H. Saboo Siddik College of Engineering" onError={(event) => { event.currentTarget.style.display = 'none'; }} />
                </a>
              </div>
              <div className="screen-1-presents mt-14 sm:mt-16" style={{ opacity: 1 - entryFade, transform: `translate3d(0, ${entryFade * -24}px, 0)` }}><p className="font-mono text-sm uppercase tracking-[0.45em] text-white/50 sm:text-base">presents</p></div>
              <div className={`screen-1-event mt-6 sm:mt-8${screen1Exit ? ' is-handoff' : ''}`} style={{ '--event-handoff': eventHandoff } as CSSProperties}><h2 className="screen-1-title text-5xl font-extrabold leading-none tracking-tight sm:text-6xl md:text-8xl lg:text-9xl"><span className="screen-1-title-white">AWS From</span><br className="sm:hidden" /> <span className="screen-1-title-green">Clicks to Code</span></h2></div>
              <div className="screen-1-scroll-hint" aria-hidden="true" style={{ opacity: 1 - entryFade, transform: `translate3d(0, ${entryFade * -18}px, 0)` }}><span className="screen-1-scroll-line" /><span className="screen-1-scroll-label">SCROLL TO EXPLORE</span><span className="screen-1-scroll-arrow">↓</span></div>
            </div>
          </section>

          <div className="cinematic-story-frame" aria-hidden={timelineProgress < STORY_START ? 'true' : undefined} style={{ opacity: storyReveal, transform: `translate3d(0, ${(1 - storyReveal) * 1.5}vh, 0)` }}>
            <ChapterShell title="" progress={chapterProgresses[0]} visibility={chapterVisibilities[0]} className="event-overview-chapter"><div className="event-overview-scene">
  <header className="event-overview-header">
    <div>
      <h2>AWS From <em>Clicks to Code</em></h2>
      <strong>AWS FUNDAMENTALS · HANDS-ON CLOUD JOURNEY</strong>
      <div className="event-overview-meta"><span>{EVENT_DATE}</span><span>{EVENT_TIME}</span><span>{VENUE}</span></div>
    </div>
  </header>
  <div className="event-overview-grid">
    <div className="event-overview-copy">
      <span className="mono-label">ABOUT THE EVENT</span>
      <p>The AWS Student Builder Group at M.H. Saboo Siddik College of Engineering invites students to a practical cloud journey — from understanding AWS fundamentals to provisioning a server, securely accessing it, hosting a customized web page, and automating the infrastructure with Infrastructure as Code.</p>
      <div className="event-overview-register event-overview-register-disabled" aria-label={MEETUP_STATUS}>
        <img src="/images/meetup-icon.png" alt="" aria-hidden="true" />
        <span>{MEETUP_STATUS}</span>
        <b aria-hidden="true">·</b>
      </div>
    </div>
    <div className="event-overview-steps" aria-label="Five-step cloud journey">
      <article><b>1</b><img src="/images/aws-logo.png" alt="" /><div><strong>UNDERSTAND</strong><span>Cloud Computing + AWS</span></div></article>
      <article><b>2</b><img src="/images/ec2.png" alt="" /><div><strong>PROVISION</strong><span>Amazon EC2</span></div></article>
      <article><b>3</b><img src="/images/systemsmanager.png" alt="" /><div><strong>CONNECT SECURELY</strong><span>Systems Manager · Session Manager</span></div></article>
      <article><b>4</b><span className="event-service-badge event-service-image"><img src="/images/web-server-icon.png" alt="" /></span><div><strong>MAKE IT REAL</strong><span>Web Server</span></div></article>
      <article><b>5</b><img src="/images/cloudformation.png" alt="" /><div><strong>AUTOMATE</strong><span>CloudFormation + Infrastructure as Code</span></div></article>
    </div>
  </div>
</div></ChapterShell>
            <ChapterShell eyebrow="FOR THE CURIOUS" title="Is this event for me?" progress={chapterProgresses[1]} visibility={chapterVisibilities[1]} className="audience-chapter">
              <div className="audience-scene">
                <div className="audience-hero-copy">
                  <div className="audience-kicker"><Sparkles size={15} strokeWidth={2.2} /><span>BEGINNER-FRIENDLY · BUILDER-FOCUSED</span></div>
                  <p>You don't need to already be an AWS expert. <strong>Curiosity matters more than prior AWS experience.</strong></p>
                </div>

                <div className="audience-panel">
                  <div className="audience-panel-heading">
                    <div><span className="mono-label">WHO SHOULD ATTEND?</span><h3>Find your reason to build.</h3></div>
                    <Users size={22} aria-hidden="true" />
                  </div>
                  <div className="audience-audience-grid">
                    {[
                      [Cloud, 'Cloud Enthusiasts', 'Curious about what really happens behind the cloud.'],
                      [GraduationCap, 'Cloud Beginners', 'Ready to go from concepts to a first hands-on build.'],
                      [Rocket, 'Future Builders', 'Exploring DevOps, infrastructure, automation, or security.'],
                      [Code2, 'Project Builders', 'Already building things and ready to understand the cloud layer.'],
                    ].map(([Icon, title, description], index) => {
                      const AudienceIcon = Icon as typeof Cloud;
                      return <article className="audience-tile" key={title as string} style={{ '--audience-index': index } as CSSProperties}>
                        <span className="audience-tile-icon"><AudienceIcon size={22} strokeWidth={1.8} /></span>
                        <span className="audience-tile-number">{String(index + 1)}</span>
                        <strong>{title as string}</strong>
                        <p>{description as string}</p>
                      </article>;
                    })}
                  </div>
                </div>

                <div className="audience-panel audience-why-panel">
                  <div className="audience-panel-heading">
                    <div><span className="mono-label">WHY PARTICIPATE?</span><h3>More than a demo.</h3></div>
                    <Terminal size={22} aria-hidden="true" />
                  </div>
                  <div className="audience-benefit-grid">
                    {[
                      [Server, 'Build on AWS', 'Provision and work with real cloud infrastructure.'],
                      [ShieldCheck, 'Connect securely', 'Use Systems Manager / Session Manager to access your server.'],
                      [Laptop, 'Learn by doing', 'Follow the workshop flow from cloud fundamentals to automation.'],
                      [Award, 'Leave with more', 'Certificate, trivia, and event prizes.'],
                    ].map(([Icon, title, description], index) => {
                      const BenefitIcon = Icon as typeof Server;
                      return <article className="audience-benefit" key={title as string} style={{ '--benefit-index': index } as CSSProperties}>
                        <BenefitIcon size={20} strokeWidth={1.9} aria-hidden="true" />
                        <div><strong>{title as string}</strong><p>{description as string}</p></div>
                      </article>;
                    })}
                  </div>
                </div>

                <div className="audience-reassurance">
                  <div><span>NO PRIOR AWS EXPERIENCE REQUIRED</span><strong>Bring your questions, your laptop, and the willingness to build.</strong></div>
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
            </ChapterShell>

            <ChapterShell eyebrow="WHAT YOU WILL LEARN" title="Six steps from cloud curiosity to a working foundation." progress={chapterProgresses[2]} visibility={chapterVisibilities[2]} className="learning-chapter">
              <div className="learning-scene">
                <div className="learning-intro">
                  <div className="learning-intro-badge"><Cloud size={16} strokeWidth={2} /><span>YOUR LEARNING PATH</span></div>
                  <p>Move from the big picture to hands-on infrastructure — with every concept tied to something you can actually build.</p>
                </div>
                <div className="learning-modules" aria-label="What you will learn">
                  {[
                    [Cloud, '1', 'CLOUD FUNDAMENTALS', 'Understand what cloud computing actually means.', null],
                    [Cloud, '2', 'AWS FUNDAMENTALS', 'Meet the AWS ecosystem and its core building blocks.', '/images/aws-logo.png'],
                    [Server, '3', 'AMAZON EC2', 'Provision and work with your own cloud server.', '/images/ec2.png'],
                    [ShieldCheck, '4', 'SECURE ACCESS', 'Connect securely with Systems Manager / Session Manager.', '/images/systemsmanager.png'],
                    [Laptop, '5', 'BUILD A WEB SERVER', 'Turn infrastructure into something tangible in the browser.', '/images/web-server-icon.png'],
                    [Code2, '6', 'INFRASTRUCTURE AS CODE', 'Define and automate infrastructure with CloudFormation.', '/images/cloudformation.png'],
                  ].map(([Icon, number, title, description, image], index) => {
                    const LearningIcon = Icon as typeof Cloud;
                    return (
                      <article className="learning-module" key={number as string} style={{ '--learning-index': index } as CSSProperties}>
                        <div className="learning-module-top">
                          <span>{number as string}</span>
                          <div className="learning-module-visual">
                            {image ? <img src={image as string} alt="" /> : <LearningIcon size={27} strokeWidth={1.7} />}
                          </div>
                        </div>
                        <strong>{title as string}</strong>
                        <p>{description as string}</p>
                      </article>
                    );
                  })}
                </div>
                <div className="learning-strip">
                  <span><Sparkles size={15} /> LEARN → BUILD → AUTOMATE</span>
                  <strong>Every module points toward the hands-on lab.</strong>
                </div>
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="THE HANDS-ON LAB" title="You are not just watching. You are building." progress={chapterProgresses[3]} visibility={chapterVisibilities[3]} className="lab-chapter">
              <div className="hands-on-scene">
                <div className="hands-on-intro">
                  <div className="hands-on-badge"><Laptop size={16} strokeWidth={2} /><span>BUILD IT YOURSELF</span></div>
                  <p>Inside the provided sandbox environment, you will move through a real cloud workflow — from compute to a working web server, then toward automation.</p>
                </div>

                <div className="hands-on-flow" aria-label="Hands-on workshop flow">
                  {[
                    [Cloud, '1', 'AWS', 'Start with the cloud foundation', '/images/aws-logo.png'],
                    [Server, '2', 'EC2', 'Provision your cloud server', '/images/ec2.png'],
                    [ShieldCheck, '3', 'SESSION MANAGER', 'Connect securely without exposing SSH', '/images/systemsmanager.png'],
                    [Laptop, '4', 'WEB SERVER', 'Host a customized page', '/images/web-server-icon.png'],
                    [Code2, '5', 'INFRASTRUCTURE AS CODE', 'Turn the working setup into a definition', '/images/cloudformation.png'],
                  ].map(([Icon, number, title, description, image], index) => {
                    const FlowIcon = Icon as typeof Cloud;
                    return (
                      <article className="hands-on-step" key={number as string} style={{ '--hands-on-index': index } as CSSProperties}>
                        <div className="hands-on-step-top">
                          <span>{number as string}</span>
                          <div className="hands-on-visual">
                            {image ? <img src={image as string} alt="" /> : <FlowIcon size={25} strokeWidth={1.7} />}
                          </div>
                        </div>
                        <strong>{title as string}</strong>
                        <p>{description as string}</p>
                        {index < 4 && <i aria-hidden="true">→</i>}
                      </article>
                    );
                  })}
                </div>

                <section className="learner-lab-steps" aria-labelledby="learner-lab-heading">
                  <div className="learner-lab-heading">
                    <div>
                      <span className="mono-label">AWS ACADEMY LEARNER LAB</span>
                      <h3 id="learner-lab-heading">Get your lab ready before the workshop.</h3>
                    </div>
                  </div>
                  <div className="learner-lab-grid" aria-label="Learner Lab preparation steps">
                    {[
                      ['01', 'CREATE YOUR ACCOUNT', 'Use the AWS Academy invitation to create or access your learner account.'],
                      ['02', 'ACCEPT THE INVITATION', 'Join the assigned AWS Academy course before the lab begins.'],
                      ['03', 'OPEN LEARNER LAB', 'Enter the Learner Lab from your AWS Academy course workspace.'],
                      ['04', 'START THE LAB', 'Launch the lab environment and wait for the AWS Console access to become ready.'],
                      ['05', 'CHECK YOUR ACCESS', 'Confirm you can reach the lab console before the hands-on session starts.'],
                    ].map(([number, title, description]) => (
                      <article className="learner-lab-card" key={number}>
                        <span>{number}</span>
                        <strong>{title}</strong>
                        <p>{description}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <div className="hands-on-sandbox">
                  <div className="hands-on-sandbox-icon"><Terminal size={20} /></div>
                  <div><span>SANDBOX ENVIRONMENT</span><strong>AWS Academy Learner Lab</strong><p>Provided by AWS Academy. Organizers verify in the waiting room that you received the resource and can access it before the program begins.</p></div>
                  <div className="hands-on-sandbox-register event-overview-register event-overview-register-disabled" aria-label={MEETUP_STATUS}>
                    <img src="/images/meetup-icon.png" alt="" aria-hidden="true" />
                    <span>{MEETUP_STATUS}</span><b aria-hidden="true">·</b>
                  </div>
                </div>
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="EVENT DAY" title="Arrive. Check in. Get ready to build." progress={chapterProgresses[4]} visibility={chapterVisibilities[4]} className="arrival-chapter">
              <div className="arrival-scene">
                <div className="arrival-intro">
                  <div className="arrival-badge"><DoorOpen size={16} strokeWidth={2} /><span>YOUR FIRST 30 MINUTES</span></div>
                  <p>Check in, verify your AWS Academy Learner Lab access in the waiting room, then move into the Seminar Hall before the 10:00 AM program begins.</p>
                </div>
                <div className="arrival-hero">
                  <div className="arrival-time-card">
                    <span>09:30 AM</span><strong>CHECK-IN OPENS</strong><small>Start at the Registration Desk on the Ground Floor, near the Staff Lift.</small>
                  </div>
                  <div className="arrival-location-card">
                    <MapPin size={24} strokeWidth={1.7} />
                    <div><span>REGISTRATION + SUPPORT</span><strong>Registration Desk</strong><small>Ground Floor · Near the Staff Lift</small></div>
                  </div>
                  <div className="arrival-location-card">
                    <MapPin size={24} strokeWidth={1.7} />
                    <div><span>MAIN VENUE · 10:00 AM</span><strong>Seminar Hall</strong><small>3rd Floor · MHSSCE</small></div>
                  </div>
                </div>
                <div className="arrival-steps" aria-label="Arrival checklist">
                  {[
                    [ClipboardCheck, '1', 'QR CHECK-IN', 'Show your Meetup QR ticket and complete event-day check-in.'],
                    [Cloud, '2', 'WAITING ROOM', 'Confirm that you received your AWS Academy Learner Lab resource and can access it.'],
                    [MessageCircle, '3', 'MOVE TO THE VENUE', 'Around 9:55 AM, begin moving from the waiting room to the Seminar Hall.'],
                    [DoorOpen, '4', 'PROGRAM BEGINS', 'Be in the 3rd Floor Seminar Hall for the 10:00 AM main program.'],
                  ].map(([Icon, number, title, description], index) => {
                    const ArrivalIcon = Icon as typeof ClipboardCheck;
                    return <article className="arrival-step" key={number as string} style={{ '--arrival-index': index } as CSSProperties}>
                      <div className="arrival-step-icon"><ArrivalIcon size={22} strokeWidth={1.8} /></div>
                      <span>{number as string}</span><strong>{title as string}</strong><p>{description as string}</p>
                    </article>;
                  })}
                </div>
                <div className="arrival-window">
                  <div><span>09:30 — 09:50</span><strong>CHECK-IN + LEARNER LAB CHECK</strong></div>
                  <i aria-hidden="true" /><div><span>10:00 AM</span><strong>WORKSHOP BEGINS</strong></div>
                </div>
                <div className="arrival-note">
                  <span>MAIN VENUE · 10:00 AM</span><p>{VENUE}. Check-in and support remain at the {CHECKIN_LOCATION.toLowerCase()}.</p>
                </div>
                <div className="event-overview-register event-overview-register-disabled arrival-register" aria-label={MEETUP_STATUS}>
                  <img src="/images/meetup-icon.png" alt="" aria-hidden="true" /><span>{MEETUP_STATUS}</span><b aria-hidden="true">·</b></div>
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="REGISTER CORRECTLY" title="Five steps. One simple registration flow." progress={chapterProgresses[5]} visibility={chapterVisibilities[5]} className="registration-chapter">
              <div className="registration-scene">
                <div className="registration-intro">
                  <div className="registration-badge"><ClipboardCheck size={16} strokeWidth={2} /><span>IMPORTANT REGISTRATION INSTRUCTIONS</span></div>
                  <p>Once the Meetup event is published, RSVP through the official registration flow, complete the required details, and keep your confirmation close. The steps below take you from RSVP to event day.</p>
                </div>

                <div className="registration-flow" aria-label="Registration steps">
                  {[
                    [CalendarCheck, '1', 'REGISTER THROUGH MEETUP', 'Once the event is published, use the official Meetup registration flow to reserve your place.'],
                    [ClipboardCheck, '2', 'ENTER YOUR COLLEGE DOMAIN ID', 'Use your college/institutional domain ID where the registration flow requests it.', '@mhssce.ac.in'],
                    [MessageCircle, '3', 'JOIN THE WHATSAPP GROUP', 'The official WhatsApp group is not published on this website. Access is provided after you RSVP through Meetup.'],
                    [Cloud, '4', 'SAVE THE EVENT DETAILS', 'Keep your Meetup confirmation/QR ticket and the event timing handy.'],
                    [MapPin, '5', 'ARRIVE AT 9:30 AM', 'Arrive at 9:30 AM at the Registration Desk on the Ground Floor, near the Staff Lift.'],
                  ].map(([Icon, number, title, description, note], index) => {
                    const RegistrationIcon = Icon as typeof CalendarCheck;
                    return (
                      <article className="registration-step" key={number as string} style={{ '--registration-index': index } as CSSProperties}>
                        <div className="registration-step-icon"><RegistrationIcon size={22} strokeWidth={1.8} /></div>
                        <span className="registration-step-number">{number as string}</span>
                        <strong>{title as string}</strong>
                        <p>{description as string}</p>
                        {note && <small>{note as string}</small>}
                      </article>
                    );
                  })}
                </div>

                <div className="registration-callout">
                  <div><span>REGISTRATION IS FREE</span><strong>ONLY 100 SEATS AVAILABLE</strong></div>
                  <span>The Meetup event will be published when this website is ready for deployment.</span>
                </div>

                <div className="event-overview-register event-overview-register-disabled registration-register" aria-label={MEETUP_STATUS}>
                  <img src="/images/meetup-icon.png" alt="" aria-hidden="true" />
                  <span>{MEETUP_STATUS}</span><b aria-hidden="true">·</b></div>
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="EVENT DAY TIMELINE" title="One day. From check-in to certificate." progress={chapterProgresses[6]} visibility={chapterVisibilities[6]} className="timeline-chapter">
              <div className="day-timeline-scene">
                <div className="day-timeline-intro">
                  <div className="day-timeline-badge"><AlarmClock size={16} strokeWidth={2} /><span>THE DAY AT A GLANCE</span></div>
                  <p>From QR check-in and Learner Lab verification to the main program, trivia, feedback, and next-day certificates.</p>
                </div>

                <div className="day-timeline" aria-label="Event day timeline">
                  {[
                    [AlarmClock, '09:30', 'CHECK-IN OPENS', 'Registration Desk opens on the Ground Floor, near the Staff Lift.'],
                    [ClipboardCheck, '09:30–09:50', 'QR CHECK-IN', 'Show your Meetup QR ticket and complete event-day check-in.'],
                    [Cloud, '09:50–09:55', 'WAITING ROOM + LEARNER LAB', 'Confirm your AWS Academy Learner Lab resource and access before entering the main venue.'],
                    [DoorOpen, '≈09:55', 'MOVE TO SEMINAR HALL', 'Participants begin moving to the 3rd Floor, Seminar Hall, MHSSCE.'],
                    [Play, '10:00', 'PROGRAM BEGINS', 'Welcome, introductions, felicitations, Principal and faculty addresses, then handover to the speaker.'],
                    [Laptop, 'NEXT', 'SPEAKER-LED HANDS-ON SESSION', 'Afreen Bano leads the technical session according to her session plan.'],
                    [Gift, 'LATE MORNING', 'TRIVIA + PRIZES', 'Take part in trivia, followed by prize distribution.'],
                    [HeartHandshake, 'AFTER TRIVIA', 'VOTE OF THANKS + FEEDBACK', 'Close the program with a vote of thanks, then share the event feedback form.'],
                    [Award, 'BY NEXT DAY', 'DIGITAL CERTIFICATE', 'Every participant who attends receives a digital certificate by the next day via their registered email.'],
                  ].map(([Icon, time, title, description], index) => {
                    const TimelineIcon = Icon as typeof AlarmClock;
                    return (
                      <article className="day-timeline-item" key={title as string} style={{ '--timeline-index': index } as CSSProperties}>
                        <div className="day-timeline-node"><TimelineIcon size={20} strokeWidth={1.8} /></div>
                        <div className="day-timeline-copy">
                          <span>{time as string}</span>
                          <strong>{title as string}</strong>
                          <p>{description as string}</p>
                        </div>
                        {index < 7 && <i aria-hidden="true" />}
                      </article>
                    );
                  })}
                </div>

                <div className="day-timeline-note">
                  <span>EVENT WINDOW</span>
                  <strong>09:30 AM – 12:00 PM</strong>
                  <p>Internal speaker-session timings remain flexible so the technical session can follow the speaker's plan.</p>
                </div>

                <div className="event-overview-register event-overview-register-disabled timeline-register" aria-label={MEETUP_STATUS}>
                  <img src="/images/meetup-icon.png" alt="" aria-hidden="true" />
                  <span>{MEETUP_STATUS}</span><b aria-hidden="true">·</b></div>
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="WHAT TO BRING" title="Bring the tools that let you build." progress={chapterProgresses[7]} visibility={chapterVisibilities[7]} className="requirements-chapter">
              <div className="requirements-scene">
                <div className="requirements-intro">
                  <div className="requirements-badge"><Laptop size={16} strokeWidth={2} /><span>HANDS-ON WORKSHOP · LAPTOP REQUIRED</span></div>
                  <p>This is a practical build session, so come prepared with the essentials. The laptop is the one non-negotiable.</p>
                </div>

                <div className="requirements-hero">
                  <div className="requirements-laptop">
                    <Laptop size={76} strokeWidth={1.25} aria-hidden="true" />
                    <span>MANDATORY</span>
                    <strong>YOUR LAPTOP</strong>
                    <small>Bring it charged and ready to use.</small>
                  </div>
                  <div className="requirements-side">
                    <article><BatteryCharging size={22} /><div><strong>LAPTOP CHARGER</strong><span>Keep your device powered through the hands-on lab.</span></div></article>
                    <article><IdCard size={22} /><div><strong>COLLEGE DOMAIN ID</strong><span>Use the college domain ID @mhssce.ac.in where required.</span></div></article>
                    <article><CalendarCheck size={22} /><div><strong>MEETUP CONFIRMATION</strong><span>Keep your Meetup confirmation and QR ticket accessible.</span></div></article>
                  </div>
                </div>

                <div className="requirements-footer">
                  <div><span>FREE TO ATTEND</span><strong>LIMITED TO 100 PARTICIPANTS</strong></div>
                  <p>Event date: 24 September 2026 · Venue: 3rd Floor, Seminar Hall, MHSSCE.</p>
                </div>

                <div className="event-overview-register event-overview-register-disabled requirements-register" aria-label={MEETUP_STATUS}>
                  <img src="/images/meetup-icon.png" alt="" aria-hidden="true" />
                  <span>{MEETUP_STATUS}</span><b aria-hidden="true">·</b></div>
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="YOUR GUIDE" title="Meet the builder behind the session." progress={chapterProgresses[8]} visibility={chapterVisibilities[8]} className="speaker-chapter">
              <div className="speaker-scene">
                <div className="speaker-portrait-card">
                  <div className="speaker-portrait-frame"><img src="/images/speaker.png" alt="Afreen Bano" /></div>
                  <span>YOUR MENTOR</span>
                </div>
                <div className="speaker-profile">
                  <div className="speaker-badge"><Users size={16} strokeWidth={2} /><span>INVITED MENTOR · AWS COMMUNITY</span></div>
                  <span className="mono-label">MS. AFREEN BANO</span>
                  <h3>Build with context.<br /><em>Leave with confidence.</em></h3>
                  <p className="speaker-role">Technology Leader <b>·</b> AWS Cloud <b>·</b> DevSecOps <b>·</b> Engineering Leadership</p>
                  <p className="speaker-bio">Afreen Bano is a technology leader with 15+ years of experience, spanning AWS Cloud, DevSecOps, engineering leadership, and high-performing teams. She leads HerTechEra – Pune Chapter, building a community where technology, learning, and inclusion come together. A globally recognized speaker and community leader, she has shared her expertise on international technology and leadership platforms and has been recognized for her impact in the tech community. At heart, she is passionate about turning complex technology into practical learning and inspiring the next generation of technologists.</p>
                  <div className="speaker-focus-grid">
                    <article><Cloud size={19} /><strong>CLOUD + AWS</strong><span>Learn the foundations behind the infrastructure you will build.</span></article>
                    <article><Code2 size={19} /><strong>DEVOPS</strong><span>Connect practical building with repeatable engineering habits.</span></article>
                    <article><ShieldCheck size={19} /><strong>CLOUD SECURITY</strong><span>Understand why secure access belongs in the workflow.</span></article>
                  </div>
                  <div className="speaker-note"><span>SESSION FOCUS</span><strong>Practical cloud skills you can carry into your next project.</strong></div>
                  <a className="speaker-link-placeholder" href="https://in.linkedin.com/in/afreen-bano" target="_blank" rel="noreferrer"><span>LINKEDIN</span><strong>VIEW AFREEN BANO'S PROFILE ↗</strong></a>
                </div>
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="TRIVIA · SWAG · CERTIFICATE" title="Build it. Play along. Leave with something to remember." progress={chapterProgresses[9]} visibility={chapterVisibilities[9]} className="rewards-chapter">
              <div className="rewards-scene">
                <div className="rewards-intro">
                  <div className="rewards-badge"><Sparkles size={16} strokeWidth={2} /><span>THE FUN PART OF FINISHING</span></div>
                  <p>The workshop does not stop when the lab works. Take part in trivia, chase the challenge, and complete the experience.</p>
                </div>

                <div className="rewards-feature-grid">
                  <article className="rewards-feature rewards-trivia">
                    <div className="rewards-feature-icon"><Sparkles size={25} strokeWidth={1.7} /></div>
                    <span>01 · INTERACTIVE</span>
                    <strong>TRIVIA</strong>
                    <p>Test what you picked up during the session and play along with the room.</p>
                    <div className="rewards-trivia-pills"><b>QUICK</b><b>LIVE</b><b>PLAY ALONG</b></div>
                  </article>

                  <article className="rewards-feature rewards-swag">
                    <div className="rewards-feature-icon"><Gift size={25} strokeWidth={1.7} /></div>
                    <span>02 · REWARDS</span>
                    <strong>SWAG</strong>
                    <p>Trivia happens near the end of the program, followed by prize distribution. Swag details will be added only when confirmed.</p>
                    <div className="rewards-placeholder">SWAG VISUAL · TO BE ADDED</div>
                  </article>

                  <article className="rewards-feature rewards-certificate">
                    <div className="rewards-feature-icon"><Award size={25} strokeWidth={1.7} /></div>
                    <span>03 · COMPLETION</span>
                    <strong>CERTIFICATE</strong>
                    <p>Every participant who attends receives a digital certificate by the next day on their registered email.</p>
                    <div className="rewards-certificate-mark"><CheckCircle2 size={15} /><span>SUCCESSFULLY COMPLETED</span></div>
                  </article>
                </div>

                <div className="rewards-bottom">
                  <div className="rewards-bottom-copy">
                    <span>ONE HANDS-ON EXPERIENCE</span>
                    <strong>Learn something useful. Have some fun. Finish with proof you built it.</strong>
                  </div>
                  <div className="event-overview-register event-overview-register-disabled rewards-register" aria-label={MEETUP_STATUS}>
                    <img src="/images/meetup-icon.png" alt="" aria-hidden="true" />
                    <span>{MEETUP_STATUS}</span><b aria-hidden="true">·</b></div>
                </div>
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="SPONSOR THE NEXT BUILD" title="Help put practical cloud skills in more hands." progress={chapterProgresses[10]} visibility={chapterVisibilities[10]} className="sponsor-chapter">
              <div className="sponsor-scene">
                <div className="sponsor-intro">
                  <div className="sponsor-badge"><Handshake size={16} strokeWidth={2} /><span>OPEN TO INDUSTRY · COMMUNITY · CLOUD PARTNERS</span></div>
                  <p>We welcome companies, technology and cloud organizations, professionals, community groups, and industry partners who want to support student builders.</p>
                </div>

                <div className="sponsor-main">
                  <div className="sponsor-hero-card">
                    <div className="sponsor-hero-icon"><Handshake size={34} strokeWidth={1.5} /></div>
                    <span>PARTNERSHIP OPPORTUNITY</span>
                    <strong>Support the next generation of cloud builders.</strong>
                    <p>Your support can help make practical, accessible cloud learning possible for students and emerging builders.</p>
                    <div className="sponsor-question">WANT TO SUPPORT THE NEXT GENERATION OF CLOUD BUILDERS?</div>
                  </div>

                  <div className="sponsor-options">
                    <span className="mono-label">WAYS TO SUPPORT</span>
                    {[
                      [Cloud, 'CLOUD + TECHNOLOGY', 'Support hands-on access to modern cloud tools and learning.'],
                      [Users, 'COMMUNITY', 'Help connect students with practitioners and builder communities.'],
                      [Gift, 'EVENT SUPPORT', 'Contribute to the workshop experience, learning materials, or swag.'],
                      [Rocket, 'INDUSTRY PARTNERSHIP', 'Bring mentorship, collaboration, or opportunities closer to campus.'],
                    ].map(([Icon, title, description], index) => {
                      const SponsorIcon = Icon as typeof Cloud;
                      return (
                        <article key={title as string} style={{ '--sponsor-index': index } as CSSProperties}>
                          <SponsorIcon size={20} strokeWidth={1.8} />
                          <div><strong>{title as string}</strong><p>{description as string}</p></div>
                        </article>
                      );
                    })}
                  </div>
                </div>

                <div className="sponsor-contact">
                  <div>
                    <span>GET IN TOUCH</span>
                    <strong>{SPONSOR_EMAIL}</strong>
                  </div>
                  <a className="sponsor-mail-button" href={SPONSOR_MAILTO}><span>OPEN PREFILLED EMAIL</span><b aria-hidden="true">↗</b></a>
                </div>
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="FAQ · SUPPORT" title="The answers before you arrive." progress={chapterProgresses[11]} visibility={chapterVisibilities[11]} className="faq-chapter">
              <div className="faq-scene">
                <div className="faq-intro">
                  <div className="faq-badge"><MessageCircle size={16} strokeWidth={2} /><span>QUICK ANSWERS · EVENT SUPPORT</span></div>
                  <p>Everything you need to feel ready. Confirmed details stay clear; anything still being finalized is marked as a placeholder.</p>
                </div>

                <div className="faq-grid" aria-label="Frequently asked questions">
                  {[
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
                  ].map(([Icon, question, answer], index) => {
                    const FaqIcon = Icon as typeof MessageCircle;
                    return (
                      <article className="faq-item" key={question as string} style={{ '--faq-index': index } as CSSProperties}>
                        <div className="faq-icon"><FaqIcon size={19} strokeWidth={1.8} /></div>
                        <div><strong>{question as string}</strong><p>{answer as string}</p></div>
                      </article>
                    );
                  })}
                </div>

                <div className="faq-footer">
                  <div><span>STILL NEED HELP?</span><strong>ABID AHMED SHAIKH · +91 99678 13266</strong></div>
                  <div className="event-overview-register event-overview-register-disabled faq-register" aria-label={MEETUP_STATUS}>
                    <img src="/images/meetup-icon.png" alt="" aria-hidden="true" />
                    <span>{MEETUP_STATUS}</span><b aria-hidden="true">·</b></div>
                </div>
              </div>
            </ChapterShell>
          </div>

          <ChapterShell eyebrow="READY TO BUILD?" title="You've seen the clicks. Now learn what happens behind them." progress={chapterProgresses[12]} visibility={chapterVisibilities[12]} className="final-chapter">
            <div className="final-build-scene">
              <div className="final-build-hero">
                <div className="final-build-badge"><Rocket size={17} strokeWidth={2} /><span>FINAL CALL · 100 SEATS · FREE TO ATTEND</span></div>
                <h3>One hands-on cloud experience.<br /><em>Built for curious people.</em></h3>
                <p>Join us on {EVENT_DATE} from {EVENT_TIME}. Check in at 9:30 AM, verify your AWS Academy Learner Lab access, then build from AWS fundamentals to a working web server and Infrastructure as Code.</p>
              </div>

              <div className="final-build-facts">
                <article><AlarmClock size={20} /><span>09:30 AM</span><strong>ARRIVE + CHECK IN</strong></article>
                <article><MapPin size={20} /><span>VENUE</span><strong>3RD FLOOR · SEMINAR HALL</strong></article>
                <article><Award size={20} /><span>CERTIFICATE</span><strong>EVERY ATTENDEE · BY NEXT DAY</strong></article>
                <article><Gift size={20} /><span>TRIVIA + PRIZES</span><strong>PLAY ALONG + WIN</strong></article>
              </div>
            </div>
          </ChapterShell>
        </div>
      </section>
    </div>
  );
}
