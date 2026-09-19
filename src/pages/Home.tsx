import { useMemo, useRef, type ReactNode, type CSSProperties } from 'react';
import CinematicChapter from '../components/CinematicChapter';
import { AlarmClock, Award, BatteryCharging, CalendarCheck, CheckCircle2, ClipboardCheck, Cloud, Code2, DoorOpen, Gift, GraduationCap, IdCard, Laptop, MapPin, MessageCircle, Play, Rocket, Server, ShieldCheck, Sparkles, Terminal, Users } from 'lucide-react';
import { useElementScrollProgress, useReducedMotion } from '../lib/useScrollProgress';

const chapters = 11;
const ENTRY_START = 0.006;
const ENTRY_END = 0.032;
const STORY_START = 0.008;
const STORY_HANDOFF_END = 0.055;
const STORY_END = 0.91;
const CTA_START = 0.9;
const MEETUP_URL = 'https://www.meetup.com/';
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
const ctaProgress = (timeline: number) => smoothstep(CTA_START, 0.965, timeline);

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
  const finalProgress = ctaProgress(timelineProgress);
  const finalVisibility = finalProgress;

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
    </div>
  </header>
  <div className="event-overview-grid">
    <div className="event-overview-copy">
      <span className="mono-label">ABOUT THE EVENT</span>
      <p>The AWS Student Builder Group at M.H. Saboo Siddik College of Engineering invites you to a practical cloud journey — from understanding AWS fundamentals to provisioning a server, securely accessing it, hosting a customized web page, and automating the infrastructure with Infrastructure as Code.</p>
      <a className="event-overview-register" href={MEETUP_URL} target="_blank" rel="noreferrer">
        <img src="/images/meetup-icon.png" alt="" aria-hidden="true" />
        <span>REGISTER ON MEETUP</span>
        <b aria-hidden="true">↗</b>
      </a>
    </div>
    <div className="event-overview-steps" aria-label="Five-step cloud journey">
      <article><b>01</b><img src="/images/aws-logo.png" alt="" /><div><strong>UNDERSTAND</strong><span>Cloud Computing + AWS</span></div></article>
      <article><b>02</b><img src="/images/ec2.png" alt="" /><div><strong>PROVISION</strong><span>Amazon EC2</span></div></article>
      <article><b>03</b><img src="/images/systemsmanager.png" alt="" /><div><strong>CONNECT SECURELY</strong><span>Systems Manager · Session Manager</span></div></article>
      <article><b>04</b><span className="event-service-badge event-service-image"><img src="/images/web-server-icon.png" alt="" /></span><div><strong>MAKE IT REAL</strong><span>Web Server</span></div></article>
      <article><b>05</b><img src="/images/cloudformation.png" alt="" /><div><strong>AUTOMATE</strong><span>CloudFormation + Infrastructure as Code</span></div></article>
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
                        <span className="audience-tile-number">{String(index + 1).padStart(2, '0')}</span>
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
                      [Award, 'Leave with more', 'Certificate, trivia, and a chance to win event swag.'],
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
                  <a className="event-overview-register audience-register" href={MEETUP_URL} target="_blank" rel="noreferrer">
                    <img src="/images/meetup-icon.png" alt="" aria-hidden="true" />
                    <span>REGISTER ON MEETUP</span>
                    <b aria-hidden="true">↗</b>
                  </a>
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
                    [Cloud, '01', 'CLOUD FUNDAMENTALS', 'Understand what cloud computing actually means.', null],
                    [Cloud, '02', 'AWS FUNDAMENTALS', 'Meet the AWS ecosystem and its core building blocks.', '/images/aws-logo.png'],
                    [Server, '03', 'AMAZON EC2', 'Provision and work with your own cloud server.', '/images/ec2.png'],
                    [ShieldCheck, '04', 'SECURE ACCESS', 'Connect securely with Systems Manager / Session Manager.', '/images/systemsmanager.png'],
                    [Laptop, '05', 'BUILD A WEB SERVER', 'Turn infrastructure into something tangible in the browser.', '/images/web-server-icon.png'],
                    [Code2, '06', 'INFRASTRUCTURE AS CODE', 'Define and automate infrastructure with CloudFormation.', '/images/cloudformation.png'],
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
                    [Cloud, '01', 'AWS', 'Start with the cloud foundation', '/images/aws-logo.png'],
                    [Server, '02', 'EC2', 'Provision your cloud server', '/images/ec2.png'],
                    [ShieldCheck, '03', 'SESSION MANAGER', 'Connect securely without exposing SSH', '/images/systemsmanager.png'],
                    [Laptop, '04', 'WEB SERVER', 'Host a customized page', '/images/web-server-icon.png'],
                    [Code2, '05', 'INFRASTRUCTURE AS CODE', 'Turn the working setup into a definition', '/images/cloudformation.png'],
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

                <div className="hands-on-sandbox">
                  <div className="hands-on-sandbox-icon"><Terminal size={20} /></div>
                  <div><span>SANDBOX ENVIRONMENT</span><strong>Provided for the workshop</strong><p>Final sandbox access instructions will be added here once confirmed.</p></div>
                  <span className="hands-on-placeholder">DETAILS PENDING</span>
                </div>

                <a className="event-overview-register hands-on-register" href={MEETUP_URL} target="_blank" rel="noreferrer">
                  <img src="/images/meetup-icon.png" alt="" aria-hidden="true" />
                  <span>REGISTER ON MEETUP</span>
                  <b aria-hidden="true">↗</b>
                </a>
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="EVENT DAY" title="Arrive. Check in. Get ready to build." progress={chapterProgresses[4]} visibility={chapterVisibilities[4]} className="arrival-chapter">
              <div className="arrival-scene">
                <div className="arrival-intro">
                  <div className="arrival-badge"><DoorOpen size={16} strokeWidth={2} /><span>YOUR FIRST 30 MINUTES</span></div>
                  <p>Everything you need to know when you walk in — so you can spend the day building, not figuring out where to go.</p>
                </div>
                <div className="arrival-hero">
                  <div className="arrival-time-card">
                    <span>09:30 AM</span><strong>CHECK-IN OPENS</strong><small>Arrive early. Get settled before the workshop begins.</small>
                  </div>
                  <div className="arrival-location-card">
                    <MapPin size={24} strokeWidth={1.7} />
                    <div><span>CHECK-IN LOCATION</span><strong>Registration Desk</strong><small>Ground Floor · Near the Staff Lift</small></div>
                  </div>
                </div>
                <div className="arrival-steps" aria-label="Arrival checklist">
                  {[
                    [ClipboardCheck, '01', 'CHECK IN', 'Complete attendance at the registration desk.'],
                    [Cloud, '02', 'GET ACCESS', 'Receive or confirm your workshop and sandbox instructions.'],
                    [Laptop, '03', 'SET UP', 'Prepare your laptop, browser, network, and required accounts.'],
                    [MessageCircle, '04', 'CONNECT', 'Confirm access to the official WhatsApp group if required.'],
                  ].map(([Icon, number, title, description], index) => {
                    const ArrivalIcon = Icon as typeof ClipboardCheck;
                    return <article className="arrival-step" key={number as string} style={{ '--arrival-index': index } as CSSProperties}>
                      <div className="arrival-step-icon"><ArrivalIcon size={22} strokeWidth={1.8} /></div>
                      <span>{number as string}</span><strong>{title as string}</strong><p>{description as string}</p>
                    </article>;
                  })}
                </div>
                <div className="arrival-window">
                  <div><span>09:30 — 10:00</span><strong>CHECK-IN + SETUP WINDOW</strong></div>
                  <i aria-hidden="true" /><div><span>10:00 AM</span><strong>WORKSHOP BEGINS</strong></div>
                </div>
                <div className="arrival-note">
                  <span>FINAL AGENDA</span><p>Exact workshop timings and venue details will replace the temporary placeholders once confirmed.</p>
                </div>
                <a className="event-overview-register arrival-register" href={MEETUP_URL} target="_blank" rel="noreferrer">
                  <img src="/images/meetup-icon.png" alt="" aria-hidden="true" /><span>REGISTER ON MEETUP</span><b aria-hidden="true">↗</b>
                </a>
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="REGISTER CORRECTLY" title="Five steps. One simple registration flow." progress={chapterProgresses[5]} visibility={chapterVisibilities[5]} className="registration-chapter">
              <div className="registration-scene">
                <div className="registration-intro">
                  <div className="registration-badge"><ClipboardCheck size={16} strokeWidth={2} /><span>IMPORTANT REGISTRATION INSTRUCTIONS</span></div>
                  <p>Register once, complete the required details, then keep the event information close. The steps below are the path from Meetup registration to event day.</p>
                </div>

                <div className="registration-flow" aria-label="Registration steps">
                  {[
                    [CalendarCheck, '01', 'REGISTER THROUGH MEETUP', 'Use the official Meetup registration flow to reserve your place.'],
                    [ClipboardCheck, '02', 'ENTER YOUR COLLEGE DOMAIN ID', 'Provide your college or institutional domain ID where the Meetup form requests it.', 'FORMAT TO BE CONFIRMED'],
                    [MessageCircle, '03', 'JOIN THE WHATSAPP GROUP', 'After registering, use the WhatsApp group link provided through Meetup to join the official event group.'],
                    [Cloud, '04', 'SAVE THE EVENT DETAILS', 'Keep your registration confirmation, venue information, and event timing handy.'],
                    [MapPin, '05', 'ARRIVE AT 9:30 AM', 'Go to the Registration Desk on the Ground Floor, near the Staff Lift, for check-in.'],
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
                  <span>Register early to secure your place.</span>
                </div>

                <a className="event-overview-register registration-register" href={MEETUP_URL} target="_blank" rel="noreferrer">
                  <img src="/images/meetup-icon.png" alt="" aria-hidden="true" />
                  <span>REGISTER ON MEETUP</span>
                  <b aria-hidden="true">↗</b>
                </a>
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="EVENT DAY TIMELINE" title="One day. From check-in to certificate." progress={chapterProgresses[6]} visibility={chapterVisibilities[6]} className="timeline-chapter">
              <div className="day-timeline-scene">
                <div className="day-timeline-intro">
                  <div className="day-timeline-badge"><AlarmClock size={16} strokeWidth={2} /><span>THE DAY AT A GLANCE</span></div>
                  <p>Follow the day from arrival to completion. The final agenda will replace the temporary time markers once confirmed.</p>
                </div>

                <div className="day-timeline" aria-label="Event day timeline">
                  {[
                    [AlarmClock, '09:30', 'CHECK-IN OPENS', 'Registration desk opens on the Ground Floor, near the Staff Lift.'],
                    [ClipboardCheck, '09:30–10:00', 'REGISTRATION + SETUP', 'Attendance, sandbox access, laptop and browser preparation.'],
                    [Play, '10:00', 'WELCOME + INTRO', 'Kick off the session and get oriented for the workshop.'],
                    [Cloud, 'NEXT', 'AWS FUNDAMENTALS', 'Build the cloud foundation before touching the infrastructure.'],
                    [Laptop, 'NEXT', 'HANDS-ON LAB', 'Work through AWS → EC2 → Session Manager → Web Server → IaC.'],
                    [Gift, 'NEXT', 'TRIVIA + SWAG', 'Take part in event trivia and opportunities to win swag.'],
                    [CheckCircle2, 'NEXT', 'COMPLETION', 'Finish the hands-on experience and close out the workshop.'],
                    [Award, 'FINAL', 'CERTIFICATE', 'Receive your certificate after successfully completing the workshop.'],
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
                  <span>AGENDA STATUS</span>
                  <strong>FINAL TIMINGS TO BE CONFIRMED</strong>
                  <p>Use this timeline as the current event-day structure until the final agenda is supplied.</p>
                </div>

                <a className="event-overview-register timeline-register" href={MEETUP_URL} target="_blank" rel="noreferrer">
                  <img src="/images/meetup-icon.png" alt="" aria-hidden="true" />
                  <span>REGISTER ON MEETUP</span>
                  <b aria-hidden="true">↗</b>
                </a>
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
                    <article><IdCard size={22} /><div><strong>COLLEGE DOMAIN ID</strong><span>Have the required college/institutional details ready.</span></div></article>
                    <article><CalendarCheck size={22} /><div><strong>MEETUP CONFIRMATION</strong><span>Keep your registration confirmation accessible.</span></div></article>
                  </div>
                </div>

                <div className="requirements-footer">
                  <div><span>FREE TO ATTEND</span><strong>LIMITED TO 100 PARTICIPANTS</strong></div>
                  <p>Any additional login or account requirements will be communicated before the event.</p>
                </div>

                <a className="event-overview-register requirements-register" href={MEETUP_URL} target="_blank" rel="noreferrer">
                  <img src="/images/meetup-icon.png" alt="" aria-hidden="true" />
                  <span>REGISTER ON MEETUP</span>
                  <b aria-hidden="true">↗</b>
                </a>
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
                  <p className="speaker-role">DevOps Architect <b>·</b> AWS Community Leader <b>·</b> Cloud Security Specialist</p>
                  <div className="speaker-focus-grid">
                    <article><Cloud size={19} /><strong>CLOUD + AWS</strong><span>Learn the foundations behind the infrastructure you will build.</span></article>
                    <article><Code2 size={19} /><strong>DEVOPS</strong><span>Connect practical building with repeatable engineering habits.</span></article>
                    <article><ShieldCheck size={19} /><strong>CLOUD SECURITY</strong><span>Understand why secure access belongs in the workflow.</span></article>
                  </div>
                  <div className="speaker-note"><span>SESSION FOCUS</span><strong>Practical cloud skills you can carry into your next project.</strong></div>
                  <div className="speaker-link-placeholder"><span>LINKEDIN</span><strong>PROFILE LINK TO BE ADDED</strong></div>
                </div>
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="WHAT YOU TAKE AWAY" title="Three things should feel different when you leave." progress={chapterProgresses[9]} visibility={chapterVisibilities[9]}>
              <div className="takeaway-scene">
                {[
                  ['01','YOU CAN EXPLAIN IT','Understand what the AWS pieces are doing and why they fit together.'],
                  ['02','YOU CAN BUILD IT','Provision compute, access it securely, and put a web server on it.'],
                  ['03','YOU CAN DECLARE IT','Turn a working setup into Infrastructure as Code you can revisit.'],
                ].map(([n,t,d],i)=><article key={n} style={{'--scene-index':i,'--scene-progress':chapterProgresses[9]} as React.CSSProperties}><b>{n}</b><strong>{t}</strong><span>{d}</span></article>)}
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="PRE-FLIGHT" title="Ready for the lab?" progress={chapterProgresses[10]} visibility={chapterVisibilities[10]}>
              <div className="preflight-story">
                <div className="preflight-status"><span className="status-dot" />LAB READY</div>
                <div className="preflight-grid">
                  {[['WHO','Students, builders, cloud-curious engineers'],['LEVEL','Beginner-friendly · no prior AWS expertise required'],['BRING','Laptop, charger, and curiosity'],['OUTCOME','A working cloud flow + your first IaC mindset']].map(([q,a],i)=><article key={q} style={{'--scene-index':i,'--scene-progress':chapterProgresses[10]} as React.CSSProperties}><b>{q}</b><span>{a}</span></article>)}
                </div>
                <p>Come ready to click, inspect, question, and then rewrite the same idea as code.</p>
              </div>
            </ChapterShell>
          </div>

          <section className="final-cta cinematic-final-scene" aria-labelledby="final-cta-title" style={{ opacity: finalVisibility, '--final-visibility': finalVisibility, transform: `translate3d(0, ${(1 - finalVisibility) * 28}px, 0) scale(${0.985 + finalVisibility * 0.015})`, pointerEvents: finalVisibility > 0.5 ? 'auto' : 'none' } as CSSProperties & Record<`--${string}`, string | number>}>
            <div className="final-cta-inner"><span className="mono-label">AWS SBG MHSSCE // FINAL BUILD</span><h2 id="final-cta-title">YOU'VE SEEN THE CLICKS.<br /><em>NOW WRITE THE CODE.</em></h2><button className="join-button" type="button" disabled aria-describedby="rsvp-status">JOIN THE BUILD <span aria-hidden="true">→</span></button><small id="rsvp-status">RSVP destination pending: add the event-specific Meetup URL before launch.</small></div>
          </section>
        </div>
      </section>
    </div>
  );
}
