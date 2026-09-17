import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, CalendarDays, Check, ChevronDown, Cloud, ExternalLink, LockKeyhole, Menu, Network, Server, ShieldCheck, Terminal, X, Zap } from 'lucide-react';
import './styles.css';

const MEETUP_URL = 'https://www.meetup.com/';
const faqs = [
  ['Do I need prior AWS experience?', 'No. We start with the fundamentals and build toward a real AWS workflow. Familiarity with Linux or the command line is helpful, but not required.'],
  ['What should I bring?', 'Bring a laptop, a browser, and your curiosity. Practical setup instructions will be shared with registered attendees.'],
  ['Will we use an SSH port?', 'No. A core part of the workshop is using Systems Manager Session Manager, so the EC2 instance does not need a public inbound SSH port.'],
  ['Is the workshop hands-on?', 'Yes. You will provision EC2 manually, connect securely, and then turn the same workflow into CloudFormation infrastructure as code.']
];

function App() {
  const [menu, setMenu] = useState(false); const [open, setOpen] = useState(null); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);
  return <div className="app">
    <nav className={scrolled ? 'nav nav-solid' : 'nav'}>
      <a className="brand" href="#top" aria-label="AWS SBG MHSSCE home"><span className="brand-mark"><Cloud size={17}/></span><span><strong>AWS</strong> Student Builder Group <b>MHSSCE</b></span></a>
      <div className={menu ? 'links open' : 'links'}><a href="#workshop" onClick={() => setMenu(false)}>Workshop</a><a href="#flow" onClick={() => setMenu(false)}>Flow</a><a href="#takeaways" onClick={() => setMenu(false)}>Takeaways</a><a href="#faq" onClick={() => setMenu(false)}>FAQ</a><a className="nav-cta" href={MEETUP_URL} target="_blank" rel="noreferrer">Register <ArrowUpRight size={15}/></a></div>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu" aria-expanded={menu}>{menu ? <X/> : <Menu/>}</button>
    </nav>
    <main id="top">
      <section className="hero"><div className="orb orb-a"/><div className="orb orb-b"/><div className="hero-grid"/><div className="hero-copy">
        <div className="eyebrow"><span className="pulse"/> AWS Student Builder Group · MHSSCE</div><p className="community-line">BUILD <span>•</span> LEARN <span>•</span> CONNECT</p>
        <h1>From <i>Clicks</i><br/>to <strong>Code.</strong></h1><p className="lead">A hands-on AWS workshop for student builders — moving from a first EC2 deployment to secure access and repeatable infrastructure.</p>
        <div className="hero-actions"><a className="primary" href={MEETUP_URL} target="_blank" rel="noreferrer">Reserve your seat <ArrowUpRight size={18}/></a><a className="secondary" href="#workshop">Explore workshop <ArrowDown size={16}/></a></div>
        <div className="event-strip"><div><CalendarDays size={18}/><span><b>24 September 2026</b><small>Wednesday · MHSSCE</small></span></div><div><span className="dotline"/><span><b>9:30 AM — 12:00 PM</b><small>First 30 min · attendee check-in</small></span></div></div>
      </div><div className="terminal-card"><div className="term-head"><span><i/><i/><i/></span><small>clicks-to-code.sh</small></div><div className="term-body"><p><em>$</em> aws ec2 run-instances</p><p className="dim">--instance-type t3.micro</p><p><em>✓</em> Instance launched</p><p className="dim">i-0a7f...mhssce</p><p><em>→</em> aws ssm start-session</p><p className="dim">secure shell · no public :22</p><div className="cursor"/></div><div className="term-badge"><LockKeyhole size={14}/> no public SSH</div></div></section>
      <section className="marquee"><div>EC2 <span>✦</span> SYSTEMS MANAGER <span>✦</span> CLOUDFORMATION <span>✦</span> SECURITY <span>✦</span> AUTOMATION <span>✦</span> EC2 <span>✦</span> SSM <span>✦</span></div></section>
      <section className="intro" id="workshop"><div className="section-kicker">AWS SBG MHSSCE · HANDS-ON SESSION</div><div><h2>Learn the cloud<br/><span>by building in it.</span></h2><p>Our student community is built around one simple idea: <strong>Build. Learn. Connect.</strong> This session puts that philosophy into practice with a focused AWS workflow you can understand, repeat, and extend.</p></div></section>
      <section className="flow" id="flow"><div className="section-head"><div><div className="section-kicker">THE WORKSHOP</div><h2>Three moves.<br/><span>One real workflow.</span></h2></div><p>Start with the console. Understand the infrastructure. Finish with code you can reason about.</p></div><div className="steps"><Step n="01" icon={<Server/>} title="Launch" text="Provision an EC2 instance manually and understand the pieces behind AWS compute." tag="EC2 · CONSOLE"/><Step n="02" icon={<LockKeyhole/>} title="Connect" text="Use Systems Manager Session Manager to open a shell without exposing inbound SSH." tag="SSM · NO SSH"/><Step n="03" icon={<Zap/>} title="Automate" text="Recreate the setup with CloudFormation and build an infrastructure-as-code mental model." tag="CLOUDFORMATION"/></div></section>
      <section className="takeaways" id="takeaways"><div className="takeaway-art"><div className="rings"><span/><span/><span/></div><div className="cube"><Cloud/></div><span className="float f1">EC2</span><span className="float f2">SSM</span><span className="float f3">YAML</span></div><div className="takeaway-copy"><div className="section-kicker">YOU’LL LEAVE WITH</div><h2>A clearer mental model<br/><span>of cloud infrastructure.</span></h2><div className="checklist"><p><Check/> Know the core pieces behind an EC2 deployment.</p><p><Check/> Connect to instances securely without public SSH.</p><p><Check/> Read and write a practical CloudFormation template.</p><p><Check/> Recognise when manual work should become code.</p></div></div></section>
      <section className="speaker"><div><div className="section-kicker">YOUR GUIDE</div><h2>Learn by doing<br/><span>with Afreen Bano.</span></h2><p>A focused technical session designed to make AWS infrastructure feel less like a black box and more like something you can build, inspect, and improve.</p></div><div className="speaker-card"><div className="portrait">AB</div><div><b>Ms. Afreen Bano</b><span>Workshop Speaker</span></div><ArrowUpRight/></div></section>
      <section className="details"><div className="detail"><CalendarDays/><small>DATE</small><b>24 Sep 2026</b><span>Wednesday</span></div><div className="detail"><Terminal/><small>TIME</small><b>9:30 AM — 12 PM</b><span>Check-in from 9:30 AM</span></div><div className="detail"><Network/><small>FORMAT</small><b>Hands-on</b><span>AWS technical workshop</span></div><div className="detail"><ShieldCheck/><small>ACCESS</small><b>Registered attendees</b><span>Practical instructions after signup</span></div></section>
      <section className="faq" id="faq"><div className="section-kicker">GOOD TO KNOW</div><h2>Questions, answered.</h2><div className="faq-list">{faqs.map(([q,a],i)=><div className={open===i?'faq-item active':'faq-item'} key={q}><button onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i}><span>0{i+1}</span><b>{q}</b><ChevronDown/></button>{open===i&&<p>{a}</p>}</div>)}</div></section>
      <section className="final"><div className="final-glow"/><div className="section-kicker">AWS SBG MHSSCE · 24 · 09 · 2026</div><h2>Ready to go<br/><i>from clicks to code?</i></h2><p>Join the community. Build something real. Registration happens on Meetup.</p><a className="primary" href={MEETUP_URL} target="_blank" rel="noreferrer">Register on Meetup <ExternalLink size={17}/></a></section>
    </main><footer><span>© 2026 AWS Student Builder Group MHSSCE</span><span>BUILD · LEARN · CONNECT</span><a href="#top">Back to top ↑</a></footer>
  </div>
}
function Step({n,icon,title,text,tag}){return <article className="step"><div className="step-top"><span>{n}</span>{icon}</div><h3>{title}</h3><p>{text}</p><small>{tag}</small></article>}
createRoot(document.getElementById('root')).render(<App/>);
