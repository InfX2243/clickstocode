import { useMemo, type ReactNode } from 'react';
import CinematicChapter from '../components/CinematicChapter';
import { useReducedMotion, useScrollProgress } from '../lib/useScrollProgress';

const chapters = 12;
const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const chapterProgress = (global: number, index: number) => clamp01(global * chapters - index);

function ChapterShell({ index, title, eyebrow, children, progress }: { index: number; title: string; eyebrow: string; children: ReactNode; progress: number }) {
  return (
    <CinematicChapter eyebrow={`${String(index).padStart(2, '0')} // ${eyebrow}`} title={title} progress={progress}>
      {children}
    </CinematicChapter>
  );
}

export default function Home() {
  const progress = useScrollProgress();
  const reducedMotion = useReducedMotion();
  const screen1Exit = reducedMotion ? progress > 0.015 : progress > 0.035;
  const chapterProgresses = useMemo(() => Array.from({ length: chapters }, (_, i) => chapterProgress(progress, i)), [progress]);

  return (
    <div className="experience">
      <section id="screen-1" className={`screen-1 relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#080b13] px-6 py-16${screen1Exit ? ' is-exiting' : ''}`}>
        <div className="screen-1-glow absolute inset-0 pointer-events-none" />
        <div className="screen-1-grid absolute inset-0 pointer-events-none" />
        <div className="screen-1-content relative z-10 flex w-full max-w-6xl flex-col items-center text-center">
          <div className="screen-1-brand flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="screen-1-logo-wrap flex h-48 w-48 shrink-0 items-center justify-center rounded-[2rem] border border-[#00d26a]/30 bg-[#111621]/80 p-7 shadow-[0_0_90px_rgba(0,210,106,0.2)] backdrop-blur-md sm:h-56 sm:w-56 sm:p-9">
              <img src="/images/awssbg-logo.png" alt="AWS Student Builder Group MHSSCE" className="h-full w-full object-contain" />
            </div>
            <div className="screen-1-org max-w-2xl text-center md:text-left">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">AWS Student Builder Group at<br />M.H. Saboo Siddik College of Engineering</h1>
            </div>
          </div>
          <div className="screen-1-presents mt-14 sm:mt-16"><p className="font-mono text-sm uppercase tracking-[0.45em] text-white/50 sm:text-base">presents</p></div>
          <div className="screen-1-event mt-6 sm:mt-8"><h2 className="screen-1-title text-5xl font-extrabold leading-none tracking-tight sm:text-6xl md:text-8xl lg:text-9xl"><span className="screen-1-title-white">AWS From</span><br className="sm:hidden" /> <span className="screen-1-title-green">Clicks to Code</span></h2></div>
          <div className="screen-1-scroll-hint" aria-hidden="true"><span className="screen-1-scroll-line" /><span className="screen-1-scroll-label">SCROLL TO EXPLORE</span><span className="screen-1-scroll-arrow">↓</span></div>
        </div>
      </section>

      <ChapterShell index={2} eyebrow="THE JOURNEY" title="What are we actually doing?" progress={chapterProgresses[0]}>
        <div className="chapter-split">
          <p className="scene-copy">Start with the console. End with infrastructure you can describe, repeat, and ship.</p>
          <div className="motif" aria-label="Click to code journey"><span>CLICK</span><i>→</i><span className="accent">CODE</span></div>
        </div>
      </ChapterShell>

      <ChapterShell index={3} eyebrow="THE CLICK" title="One action. One server." progress={chapterProgresses[1]}>
        <div className="console-scene" style={{ transform: `translateY(${(1 - chapterProgresses[1]) * 18}px) scale(${0.96 + chapterProgresses[1] * 0.04})` }}>
          <div className="console-bar"><span className="dot" /><span>EC2 / Instances</span><span className="console-status">READY</span></div>
          <div className="console-body"><div className="console-nav"><b>Compute</b><span>Instances</span><span>Images</span><span>Security</span></div><div className="console-main"><span className="console-kicker">INSTANCE ACTION</span><strong>Launch instance</strong><span className="console-button" aria-hidden="true">Launch</span><span className="fake-cursor" aria-hidden="true" style={{ transform: `translate(${chapterProgresses[1] * 150}px, ${chapterProgresses[1] * 55}px)` }}>➤</span></div></div>
        </div>
      </ChapterShell>

      <ChapterShell index={4} eyebrow="THE PROBLEM" title="What if infrastructure could remember what you wanted?" progress={chapterProgresses[2]}>
        <div className="repeat-scene">{Array.from({ length: 5 }, (_, i) => <div key={i} className="repeat-card" style={{ transform: `translateX(${i * chapterProgresses[2] * 22}px) translateY(${i * chapterProgresses[2] * 8}px)`, opacity: 0.45 + i * 0.11 }}><span>Launch instance</span><small>manual action #{i + 1}</small></div>)}</div>
      </ChapterShell>

      <ChapterShell index={5} eyebrow="THE TURN" title="From clicking to declaring." progress={chapterProgresses[3]}>
        <div className="terminal-scene"><div className="terminal-top"><span>terminal</span><span>terraform</span></div><div className="terminal-line"><span className="prompt">$</span><span className="command">terraform apply</span><span className="cursor-block" aria-hidden="true" style={{ opacity: chapterProgresses[3] > .2 ? 1 : 0 }} /></div><div className="terminal-output" style={{ opacity: chapterProgresses[3] }}>Plan: 1 to add, 0 to change, 0 to destroy.</div></div>
      </ChapterShell>

      <ChapterShell index={6} eyebrow="INFRASTRUCTURE AS CODE" title="Human → Code → Plan → Infrastructure" progress={chapterProgresses[4]}>
        <div className="iac-scene"><pre><code>{`resource "aws_instance" "web" {\n  ami           = "ami-example"\n  instance_type = "t3.micro"\n}`}</code></pre><div className="iac-result"><img src="/images/ec2.png" alt="EC2 service icon" /><span>EC2 instance</span></div></div>
      </ChapterShell>

      <ChapterShell index={7} eyebrow="THE PIPELINE" title="Click → Console → Code → Plan → Apply → Infrastructure" progress={chapterProgresses[5]}>
        <div className="pipeline" aria-label="Infrastructure delivery pipeline">{['CLICK','CONSOLE','CODE','PLAN','APPLY','INFRASTRUCTURE'].map((step, i) => <div key={step} className={`pipeline-step ${chapterProgresses[5] >= i / 5 ? 'is-active' : ''}`}><span>{step}</span>{i < 5 && <i aria-hidden="true">→</i>}</div>)}</div>
      </ChapterShell>

      <ChapterShell index={8} eyebrow="YOUR MISSION" title="Build the muscle, not just the demo." progress={chapterProgresses[6]}>
        <div className="mission-grid">{[['01','Provision','Create repeatable infrastructure'],['02','Secure','Remove fragile access paths'],['03','Automate','Make the next run predictable']].map(([n,t,d], i) => <article key={t} className="mission-card" style={{ opacity: chapterProgresses[6] >= i / 3 ? 1 : .25, transform: `translateY(${chapterProgresses[6] >= i / 3 ? 0 : 18}px)` }}><b>{n}</b><strong>{t}</strong><span>{d}</span></article>)}</div>
      </ChapterShell>

      <ChapterShell index={9} eyebrow="MISSION RUNTIME" title="The lab, as an execution log." progress={chapterProgresses[7]}>
        <div className="execution-log" aria-label="Workshop execution log">{[['09:30','PRE-FLIGHT','Check-in + credentials'],['10:00','MODULE 01','Manual EC2 compute'],['10:40','MODULE 02','Portless SSM access'],['11:20','MODULE 03','Declarative IaC']].map(([time,tag,label], i) => <div key={time} className={`log-row ${chapterProgresses[7] >= i / 4 ? 'is-active' : ''}`}><time>{time}</time><b>{tag}</b><span>{label}</span></div>)}</div>
      </ChapterShell>

      <ChapterShell index={10} eyebrow="$ WHOAMI" title="Meet the builder." progress={chapterProgresses[8]}>
        <div className="speaker-scene"><img src="/images/speaker.png" alt="Afreen Bano, invited mentor" /><div><span className="mono-label">INVITED MENTOR</span><h3>Ms. Afreen Bano</h3><p>DevOps Architect · AWS Community Leader · Cloud Security Specialist</p></div></div>
      </ChapterShell>

      <ChapterShell index={11} eyebrow="WHY IT MATTERS" title="You're not just learning AWS." progress={chapterProgresses[9]}>
        <div className="payoff"><span style={{ opacity: chapterProgresses[9] > .1 ? 1 : .2 }}>Build.</span><span style={{ opacity: chapterProgresses[9] > .35 ? 1 : .2 }}>Automate.</span><span style={{ opacity: chapterProgresses[9] > .6 ? 1 : .2 }}>Think like an engineer.</span></div>
      </ChapterShell>

      <ChapterShell index={12} eyebrow="PRE-FLIGHT" title="Before you enter the lab." progress={chapterProgresses[10]}>
        <div className="faq-grid">{[['WHO','Students & builders'],['LEVEL','No prior AWS expertise required'],['BRING','Laptop + charger'],['COST','Free community session']].map(([q,a]) => <div key={q}><b>{q}</b><span>{a}</span></div>)}</div>
      </ChapterShell>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="final-cta-inner"><span className="mono-label">AWS SBG MHSSCE // FINAL BUILD</span><h2 id="final-cta-title">YOU'VE SEEN THE CLICKS.<br /><em>NOW WRITE THE CODE.</em></h2><button className="join-button" type="button" disabled aria-describedby="rsvp-status">JOIN THE BUILD <span aria-hidden="true">→</span></button><small id="rsvp-status">RSVP destination pending: add the event-specific Meetup URL before launch.</small></div>
      </section>
    </div>
  );
}
