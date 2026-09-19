import { useMemo, useRef, type ReactNode, type CSSProperties } from 'react';
import CinematicChapter from '../components/CinematicChapter';
import { useElementScrollProgress, useReducedMotion } from '../lib/useScrollProgress';

const chapters = 11;
const ENTRY_START = 0.006;
const ENTRY_END = 0.032;
const STORY_START = 0.022;
const STORY_END = 0.91;
const CTA_START = 0.9;
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
  if (raw < -0.24 || raw > 1.24) return 0;
  if (raw < 0) return smoothstep(-0.24, 0, raw);
  if (raw <= 1) return 1;
  return 1 - smoothstep(1, 1.24, raw);
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
  const eventHandoff = smoothstep(0.012, 0.055, timelineProgress);
  const storyProgress = storyTimelineProgress(timelineProgress);
  const chapterProgresses = useMemo(() => Array.from({ length: chapters }, (_, i) => chapterProgress(storyProgress, i)), [storyProgress]);
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
              <div className="screen-1-topbar" style={{ opacity: 1 - entryFade, transform: `translate3d(0, ${entryFade * -24}px, 0)` }}>
                <div className="screen-1-college-logo" aria-label="M.H. Saboo Siddik College of Engineering logo placeholder"><span>MHSSCE</span></div>
                <a className="screen-1-register" href="https://www.meetup.com/" target="_blank" rel="noreferrer">REGISTER ON MEETUP <span aria-hidden="true">↗</span></a>
              </div>
              <div className="screen-1-brand flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12" style={{ opacity: 1 - entryFade, transform: `translate3d(0, ${entryFade * -34}px, 0)` }}>
                <div className="screen-1-logo-wrap flex h-48 w-48 shrink-0 items-center justify-center rounded-[2rem] border border-[#00d26a]/30 bg-[#111621]/80 p-7 shadow-[0_0_90px_rgba(0,210,106,0.2)] backdrop-blur-md sm:h-56 sm:w-56 sm:p-9"><img src="/images/awssbg-logo.png" alt="AWS Student Builder Group MHSSCE" className="h-full w-full object-contain" /></div>
                <div className="screen-1-org max-w-2xl text-center md:text-left"><h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">AWS Student Builder Group at<br />M.H. Saboo Siddik College of Engineering</h1></div>
              </div>
              <div className="screen-1-presents mt-14 sm:mt-16" style={{ opacity: 1 - entryFade, transform: `translate3d(0, ${entryFade * -24}px, 0)` }}><p className="font-mono text-sm uppercase tracking-[0.45em] text-white/50 sm:text-base">presents</p></div>
              <div className={`screen-1-event mt-6 sm:mt-8${screen1Exit ? ' is-handoff' : ''}`} style={{ '--event-handoff': eventHandoff } as CSSProperties}><h2 className="screen-1-title text-5xl font-extrabold leading-none tracking-tight sm:text-6xl md:text-8xl lg:text-9xl"><span className="screen-1-title-white">AWS From</span><br className="sm:hidden" /> <span className="screen-1-title-green">Clicks to Code</span></h2></div>
              <div className="screen-1-scroll-hint" aria-hidden="true" style={{ opacity: 1 - entryFade, transform: `translate3d(0, ${entryFade * -18}px, 0)` }}><span className="screen-1-scroll-line" /><span className="screen-1-scroll-label">SCROLL TO EXPLORE</span><span className="screen-1-scroll-arrow">↓</span></div>
            </div>
          </section>

          <div className="cinematic-story-frame" aria-hidden={timelineProgress < STORY_START ? 'true' : undefined}>
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
      <div className="event-overview-idea"><span>THE CORE IDEA</span><strong>From clicking “Launch Instance”</strong><i>→</i><strong>to defining infrastructure as code.</strong></div>
    </div>
    <div className="event-overview-steps" aria-label="Five-step cloud journey">
      <article><b>01</b><img src="/images/aws-logo.png" alt="" /><div><strong>UNDERSTAND</strong><span>Cloud Computing + AWS</span></div></article>
      <article><b>02</b><img src="/images/ec2.png" alt="" /><div><strong>PROVISION</strong><span>Amazon EC2</span></div></article>
      <article><b>03</b><img src="/images/systemsmanager.png" alt="" /><div><strong>CONNECT SECURELY</strong><span>Systems Manager · Session Manager</span></div></article>
      <article><b>04</b><span className="event-service-badge">WEB</span><div><strong>MAKE IT REAL</strong><span>Web Server</span></div></article>
      <article><b>05</b><img src="/images/cloudformation.png" alt="" /><div><strong>AUTOMATE</strong><span>CloudFormation + Infrastructure as Code</span></div></article>
    </div>
  </div>
</div></ChapterShell>
            <ChapterShell eyebrow="FOR THE CURIOUS" title="Who should attend? What will you learn?" progress={chapterProgresses[1]} visibility={chapterVisibilities[1]}><div className="audience-learnings-scene"><div className="audience-learnings-intro"><span className="mono-label">THIS SESSION IS FOR YOU IF…</span><p>You're a student, builder, or cloud-curious engineer who wants to move beyond clicking through a console and understand how AWS actually fits together.</p></div><div className="audience-learnings-grid"><section><div className="audience-learnings-heading"><span>01</span><h3>WHO SHOULD ATTEND?</h3></div><ul><li><b>Students</b><span>Starting their cloud journey or exploring AWS for the first time.</span></li><li><b>Builders</b><span>Already experimenting with projects and ready to make them repeatable.</span></li><li><b>Future DevOps engineers</b><span>Curious about secure access, automation, and infrastructure as code.</span></li></ul></section><section><div className="audience-learnings-heading"><span>02</span><h3>WHAT YOU LEARN</h3></div><ul><li><b>AWS fundamentals</b><span>Understand the building blocks behind cloud infrastructure.</span></li><li><b>EC2 + secure access</b><span>Provision a server and connect without relying on fragile access paths.</span></li><li><b>Infrastructure as Code</b><span>Turn a working setup into something you can define, repeat, and automate.</span></li></ul></section></div></div></ChapterShell>
            <ChapterShell eyebrow="THE PROBLEM" title="Clicking works once. What happens the next time?" progress={chapterProgresses[2]} visibility={chapterVisibilities[2]}>
              <div className="problem-scene">
                <div className="problem-intro"><span className="mono-label">THE MANUAL LOOP</span><p>Console clicks are useful for learning. They become painful when the same infrastructure has to be rebuilt, reviewed, or reproduced.</p></div>
                <div className="problem-flow" aria-label="Manual infrastructure loop">
                  {[
                    ['01','CLICK','Launch the instance'],
                    ['02','CONFIGURE','Change settings by hand'],
                    ['03','REMEMBER','Hope the setup is documented'],
                    ['04','REPEAT','Do it again for the next environment'],
                  ].map(([n,t,d],i)=><article key={n} style={{'--scene-index':i,'--scene-progress':chapterProgresses[2]} as React.CSSProperties}><b>{n}</b><strong>{t}</strong><span>{d}</span></article>)}
                </div>
                <div className="problem-callout"><span>THE QUESTION</span><strong>Can the infrastructure remember the intent instead?</strong></div>
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="THE TURN" title="Stop describing clicks. Start declaring the result." progress={chapterProgresses[3]} visibility={chapterVisibilities[3]}>
              <div className="declaration-scene">
                <div className="declaration-copy"><span className="mono-label">THE MINDSET SHIFT</span><p>You define what the infrastructure should look like. The tooling works out the changes needed to get there.</p></div>
                <div className="declaration-compare">
                  <article><span>BEFORE</span><code>click → configure → repeat</code><small>imperative, manual, easy to drift</small></article>
                  <i aria-hidden="true">→</i>
                  <article className="declaration-after"><span>AFTER</span><code>code → plan → apply</code><small>declarative, reviewable, repeatable</small></article>
                </div>
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="INFRASTRUCTURE AS CODE" title="A few lines can describe a whole machine." progress={chapterProgresses[4]} visibility={chapterVisibilities[4]}>
              <div className="iac-story-scene">
                <div className="iac-code-card">
                  <div className="code-chrome"><span>main.tf</span><span>HCL</span></div>
                  <pre><code>{`resource "aws_instance" "web" {
  ami           = "ami-example"
  instance_type = "t3.micro"

  tags = {
    Name = "clicks-to-code"
  }
}`}</code></pre>
                </div>
                <div className="iac-anatomy">
                  <span className="mono-label">WHAT THE CODE GIVES YOU</span>
                  {[
                    ['DEFINE','Describe the desired infrastructure.'],
                    ['REVIEW','See the change before it happens.'],
                    ['REPEAT','Use the same definition again.'],
                  ].map(([t,d],i)=><article key={t} style={{'--scene-index':i,'--scene-progress':chapterProgresses[4]} as React.CSSProperties}><b>{t}</b><span>{d}</span></article>)}
                </div>
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="THE PIPELINE" title="From intent to infrastructure — one visible chain." progress={chapterProgresses[5]} visibility={chapterVisibilities[5]}>
              <div className="pipeline-story">
                {[
                  ['01','INTENT','What should exist?'],
                  ['02','CODE','Describe it'],
                  ['03','PLAN','Preview the delta'],
                  ['04','APPLY','Create the change'],
                  ['05','VERIFY','Check the result'],
                ].map(([n,t,d],i)=><article key={n} style={{'--scene-index':i,'--scene-progress':chapterProgresses[5]} as React.CSSProperties}><b>{n}</b><strong>{t}</strong><span>{d}</span>{i<4&&<i aria-hidden="true">↓</i>}</article>)}
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="WHY THIS MATTERS" title="You leave with a way of thinking, not just a working server." progress={chapterProgresses[6]} visibility={chapterVisibilities[6]}>
              <div className="principles-scene">
                {[
                  ['REPEATABLE','If it works once, define it so it can work again.'],
                  ['REVIEWABLE','Infrastructure changes can be read, discussed, and checked before apply.'],
                  ['AUTOMATABLE','A clear definition becomes a foundation for CI/CD and larger systems.'],
                ].map(([t,d],i)=><article key={t} style={{'--scene-index':i,'--scene-progress':chapterProgresses[6]} as React.CSSProperties}><span>{String(i+1).padStart(2,'0')}</span><strong>{t}</strong><p>{d}</p></article>)}
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="THE LAB" title="What you actually build in the session." progress={chapterProgresses[7]} visibility={chapterVisibilities[7]}>
              <div className="lab-story">
                {[
                  ['01','UNDERSTAND','AWS fundamentals','Start with the mental model.'],
                  ['02','PROVISION','Amazon EC2','Create the compute resource.'],
                  ['03','CONNECT','Session Manager','Access it securely.'],
                  ['04','MAKE IT REAL','Web Server','Serve a customized page.'],
                  ['05','AUTOMATE','CloudFormation / IaC','Turn the setup into a definition.'],
                ].map(([n,t,s,d],i)=><article key={n} style={{'--scene-index':i,'--scene-progress':chapterProgresses[7]} as React.CSSProperties}><b>{n}</b><div><strong>{t}</strong><span>{s}</span><small>{d}</small></div></article>)}
              </div>
            </ChapterShell>

            <ChapterShell eyebrow="YOUR GUIDE" title="Meet the builder behind the session." progress={chapterProgresses[8]} visibility={chapterVisibilities[8]}>
              <div className="mentor-story">
                <div className="mentor-portrait"><img src="/images/speaker.png" alt="Afreen Bano" /></div>
                <div className="mentor-copy"><span className="mono-label">INVITED MENTOR</span><h3>Ms. Afreen Bano</h3><p>DevOps Architect · AWS Community Leader · Cloud Security Specialist</p><div className="mentor-note"><span>THE FOCUS</span><strong>Practical cloud skills you can carry into your next project.</strong></div></div>
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
