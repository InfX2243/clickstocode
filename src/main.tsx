import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowUpRight, CalendarDays, Check, ChevronDown, ExternalLink,
  LockKeyhole, Menu, Network, Server, ShieldCheck, Terminal, X, Zap,
} from 'lucide-react';
import './styles.css';

const MEETUP_URL = 'https://www.meetup.com/';
const IMAGE_BASE = '/images';

type Step = {
  number: string;
  title: string;
  kicker: string;
  description: string;
  icon: ReactNode;
  command: string;
  image: string;
};

const steps: Step[] = [
  {
    number: '01', title: 'Launch', kicker: 'EC2 · CONSOLE',
    description: 'Provision an EC2 instance manually. See the pieces, settings, and decisions behind a compute resource.',
    icon: <Server />, command: 'aws ec2 run-instances', image: `${IMAGE_BASE}/ec2.png`,
  },
  {
    number: '02', title: 'Connect', kicker: 'SSM · NO SSH',
    description: 'Use Systems Manager Session Manager to reach the instance without exposing an inbound SSH port.',
    icon: <LockKeyhole />, command: 'aws ssm start-session', image: `${IMAGE_BASE}/systemsmanager.png`,
  },
  {
    number: '03', title: 'Automate', kicker: 'CLOUDFORMATION',
    description: 'Turn the manual setup into CloudFormation and start thinking in repeatable infrastructure.',
    icon: <Zap />, command: 'aws cloudformation deploy', image: `${IMAGE_BASE}/cloudformation.png`,
  },
];

const faqs = [
  ['Do I need prior AWS experience?', 'No. We start with the fundamentals and build toward a real AWS workflow. Familiarity with Linux or the command line is helpful, but not required.'],
  ['What should I bring?', 'Bring a laptop, a browser, and your curiosity. Practical setup instructions will be shared with registered attendees.'],
  ['Will we use an SSH port?', 'No. A core part of the workshop is using Systems Manager Session Manager, so the EC2 instance does not need a public inbound SSH port.'],
  ['Is the workshop hands-on?', 'Yes. You will provision EC2 manually, connect securely, and then turn the same workflow into CloudFormation infrastructure as code.'],
] as const;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? window.scrollY / max : 0);
      setIsScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number((entry.target as HTMLElement).dataset.stepIndex ?? 0);
          setActiveStep(index);
        }
      }),
      { rootMargin: '-38% 0px -38% 0px', threshold: 0 },
    );
    stepRefs.current.forEach(element => element && observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const activeCommand = useMemo(() => steps[activeStep]?.command ?? steps[0].command, [activeStep]);
  const activeImage = useMemo(() => steps[activeStep]?.image ?? steps[0].image, [activeStep]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app" id="top">
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
      <nav className={isScrolled ? 'nav nav-solid' : 'nav'}>
        <a className="brand" href="#top" aria-label="AWS Student Builder Group MHSSCE home" onClick={closeMenu}>
          <span className="brand-logos">
            <img src={`${IMAGE_BASE}/awssbg-logo.png`} alt="AWS Student Builder Group MHSSCE" />
            <span>×</span>
            <img src={`${IMAGE_BASE}/aws-logo.png`} alt="AWS" />
          </span>
          <span className="brand-copy"><strong>AWS</strong> Student Builder Group <b>MHSSCE</b></span>
        </a>
        <div className={menuOpen ? 'links open' : 'links'}>
          <a href="#workshop" onClick={closeMenu}>Workshop</a>
          <a href="#flow" onClick={closeMenu}>Flow</a>
          <a href="#takeaways" onClick={closeMenu}>Takeaways</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a className="nav-cta" href={MEETUP_URL} target="_blank" rel="noreferrer">Register <ArrowUpRight size={15} /></a>
        </div>
        <button className="menu" onClick={() => setMenuOpen(value => !value)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <main>
        <section className="hero cinematic-section" id="cinema-hero">
          <div className="orb orb-a" /><div className="orb orb-b" /><div className="hero-grid" />
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="pulse" /> AWS Student Builder Group · MHSSCE</div>
            <p className="community-line">BUILD <span>•</span> LEARN <span>•</span> CONNECT</p>
            <h1>From <i>Clicks</i><br />to <strong>Code.</strong></h1>
            <p className="lead">A hands-on AWS workshop for student builders — moving from a first EC2 deployment to secure access and repeatable infrastructure.</p>
            <div className="hero-actions">
              <a className="primary" href={MEETUP_URL} target="_blank" rel="noreferrer">Reserve your seat <ArrowUpRight size={18} /></a>
              <a className="secondary" href="#workshop">Explore workshop <ArrowDown size={16} /></a>
            </div>
            <div className="event-strip">
              <div><CalendarDays size={18} /><span><b>24 September 2026</b><small>MHSSCE · Mumbai</small></span></div>
              <div><span className="dotline" /><span><b>9:30 AM — 12:00 PM</b><small>First 30 min · attendee check-in</small></span></div>
            </div>
          </div>
          <div className="terminal-card cinematic-object" aria-label="Workshop workflow terminal">
            <div className="term-head"><span><i /><i /><i /></span><small>clicks-to-code.sh</small></div>
            <div className="term-body">
              <p><em>$</em> {activeCommand}</p>
              <p className="dim">--instance-type t3.micro</p>
              <p><em>✓</em> infrastructure state: ready</p>
              <p className="dim">i-0a7f...mhssce</p>
              <p><em>→</em> session established</p>
              <p className="dim">secure session · no public :22</p>
              <div className="cursor" />
            </div>
            <div className="term-badge"><LockKeyhole size={14} /> no public SSH</div>
          </div>
        </section>

        <section className="marquee" aria-hidden="true"><div>EC2 <span>✦</span> SYSTEMS MANAGER <span>✦</span> CLOUDFORMATION <span>✦</span> SECURITY <span>✦</span> AUTOMATION <span>✦</span> EC2 <span>✦</span> SSM <span>✦</span></div></section>

        <section className="intro cinematic-section" id="workshop">
          <div className="section-kicker">AWS SBG MHSSCE · HANDS-ON SESSION</div>
          <div className="reveal"><h2>Learn the cloud<br /><span>by building in it.</span></h2><p>Our student community is built around one simple idea: <strong>Build. Learn. Connect.</strong> This session puts that philosophy into practice with a focused AWS workflow you can understand, repeat, and extend.</p></div>
        </section>

        <section className="flow cinematic-section" id="flow">
          <div className="section-head reveal"><div><div className="section-kicker">THE WORKSHOP</div><h2>Three moves.<br /><span>One real workflow.</span></h2></div><p>Scroll through the build. Start with the console. Understand the infrastructure. Finish with code you can reason about.</p></div>
          <div className="story-stage">
            <div className="story-rail"><div className="story-rail-fill" style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }} /></div>
            <div className="story-copy">
              {steps.map((step, index) => (
                <article className={activeStep === index ? 'step story-step is-active' : 'step story-step'} data-step-index={index} ref={element => { stepRefs.current[index] = element; }} key={step.number}>
                  <div className="step-top"><span>{step.number}</span>{step.icon}</div>
                  <h3>{step.title}</h3><p>{step.description}</p><small>{step.kicker}</small>
                </article>
              ))}
            </div>
            <div className="story-visual">
              <div className="story-visual-inner">
                <span className="visual-label">LIVE WORKFLOW</span>
                <img className="workflow-image" src={activeImage} alt="" aria-hidden="true" />
                <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
                <div className="visual-core"><img src={`${IMAGE_BASE}/aws-logo.png`} alt="AWS" /></div>
                <div className="visual-command"><span>$</span> {activeCommand}<b>_</b></div>
                <div className="visual-status"><span /> SYSTEM READY</div>
              </div>
            </div>
          </div>
        </section>

        <section className="takeaways cinematic-section" id="takeaways">
          <div className="takeaway-art cinematic-object"><div className="rings"><span /><span /><span /></div><div className="cube"><img src={`${IMAGE_BASE}/cloudformation.png`} alt="CloudFormation" /></div><span className="float f1">EC2</span><span className="float f2">SSM</span><span className="float f3">YAML</span></div>
          <div className="takeaway-copy reveal"><div className="section-kicker">YOU’LL LEAVE WITH</div><h2>A clearer mental model<br /><span>of cloud infrastructure.</span></h2><div className="checklist"><p><Check /> Know the core pieces behind an EC2 deployment.</p><p><Check /> Connect to instances securely without public SSH.</p><p><Check /> Read and write a practical CloudFormation template.</p><p><Check /> Recognise when manual work should become code.</p></div></div>
        </section>

        <section className="speaker cinematic-section" id="speaker"><div className="reveal"><div className="section-kicker">YOUR GUIDE</div><h2>Learn by doing<br /><span>with Afreen Bano.</span></h2><p>A focused technical session designed to make AWS infrastructure feel less like a black box and more like something you can build, inspect, and improve.</p></div><div className="speaker-card cinematic-object"><img className="speaker-photo" src={`${IMAGE_BASE}/speaker.png`} alt="Ms. Afreen Bano" /><div><b>Ms. Afreen Bano</b><span>Workshop Speaker</span></div><ArrowUpRight /></div></section>

        <section className="details cinematic-section" id="lab-timeline"><div className="detail"><CalendarDays /><small>DATE</small><b>24 Sep 2026</b><span>Workshop day</span></div><div className="detail"><Terminal /><small>TIME</small><b>9:30 AM — 12 PM</b><span>Check-in from 9:30 AM</span></div><div className="detail"><Network /><small>FORMAT</small><b>Hands-on</b><span>AWS technical workshop</span></div><div className="detail"><ShieldCheck /><small>ACCESS</small><b>Registered attendees</b><span>Practical instructions after signup</span></div></section>

        <section className="faq cinematic-section" id="faq"><div className="section-kicker">GOOD TO KNOW</div><h2>Questions, answered.</h2><div className="faq-list">{faqs.map(([question, answer], index) => <div className={faqOpen === index ? 'faq-item active' : 'faq-item'} key={question}><button onClick={() => setFaqOpen(faqOpen === index ? null : index)} aria-expanded={faqOpen === index}><span>0{index + 1}</span><b>{question}</b><ChevronDown /></button>{faqOpen === index && <p>{answer}</p>}</div>)}</div></section>

        <section className="final cinematic-section"><div className="final-glow" /><div className="section-kicker">AWS SBG MHSSCE · 24 · 09 · 2026</div><h2>Ready to go<br /><i>from clicks to code?</i></h2><p>Join the community. Build something real. Registration happens on Meetup.</p><a className="primary" href={MEETUP_URL} target="_blank" rel="noreferrer">Register on Meetup <ExternalLink size={17} /></a></section>
      </main>
      <footer><span>© 2026 AWS Student Builder Group MHSSCE</span><span>BUILD · LEARN · CONNECT</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
