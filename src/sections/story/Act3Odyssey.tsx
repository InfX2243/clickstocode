import { useState } from 'react';
import StorySection from '../../components/editorial/StorySection';
import { Cloud, Server, ShieldCheck, Globe, Code2, Phone, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';

interface TechnicalStage {
  id: string;
  stepNumber: string;
  domain: string;
  title: string;
  subtitle: string;
  narrative: string;
  keypoint: string;
  image: string;
  codeSnippet: string;
  Icon: typeof Cloud;
}

const STAGES: TechnicalStage[] = [
  {
    id: 'foundation',
    stepNumber: '1',
    domain: 'CLOUD ENVIRONMENT',
    title: 'Cloud Computing & AWS',
    subtitle: 'Global Infrastructure & Identity',
    narrative:
      'We deconstruct cloud architecture, availability zones, and IAM boundaries. You discover why modern applications no longer live on physical on-premise hardware, and how cloud identity secures multi-tenant workloads.',
    keypoint: 'AWS Console, IAM roles, and region isolation',
    image: '/images/aws-logo.png',
    codeSnippet: '# 1. Authenticate & Verify IAM Session\naws sts get-caller-identity\nexport AWS_DEFAULT_REGION="ap-south-1"',
    Icon: Cloud,
  },
  {
    id: 'ec2',
    stepNumber: '2',
    domain: 'ELASTIC COMPUTE',
    title: 'Amazon EC2',
    subtitle: 'Provisioning Virtual Linux Compute',
    narrative:
      'Move past diagrams and spin up a real Amazon Elastic Compute Cloud (EC2) instance. Configure virtual networking, storage volumes, and operating system images tailored for high reliability.',
    keypoint: 'Instance lifecycle, Amazon Linux AMI, and security groups',
    image: '/images/ec2.png',
    codeSnippet: '# 2. Provision Virtual Machine\naws ec2 run-instances \\\n  --image-id ami-0c55b159cbfafe1f0 \\\n  --count 1 --instance-type t3.micro',
    Icon: Server,
  },
  {
    id: 'ssm',
    stepNumber: '3',
    domain: 'ZERO-TRUST ACCESS',
    title: 'AWS Systems Manager',
    subtitle: 'Session Manager Without Open SSH',
    narrative:
      'The traditional habit of opening port 22 to 0.0.0.0/0 is a critical security risk. Learn how AWS Systems Manager (SSM) creates encrypted, auditable command-line access directly through the browser without exposing inbound firewall ports.',
    keypoint: 'Zero-trust architecture, encrypted shell sessions, no public IP needed',
    image: '/images/systemsmanager.png',
    codeSnippet: '# 3. Secure interactive shell without open port 22\naws ssm start-session \\\n  --target i-0a1b2c3d4e5f6g7h8',
    Icon: ShieldCheck,
  },
  {
    id: 'webserver',
    stepNumber: '4',
    domain: 'WEB HOSTING',
    title: 'Web Server Deployment',
    subtitle: 'Transforming Compute Into a Live Endpoint',
    narrative:
      'Configure an HTTP web server on your live Linux instance. Install necessary daemon packages, customize HTML content, and expose your builder application to the public internet.',
    keypoint: 'HTTP daemon initialization, systemd services, and customized landing',
    image: '/images/web-server-icon.png',
    codeSnippet: '# 4. Bootstrap Web Server on Amazon Linux\nyum update -y && yum install -y httpd\necho "<h1>Hello from AWS</h1>" > /var/www/html/index.html\nsystemctl start httpd',
    Icon: Globe,
  },
  {
    id: 'iac',
    stepNumber: '5',
    domain: 'DEVOPS & AUTOMATION',
    title: 'AWS CloudFormation',
    subtitle: 'Codifying Infrastructure as Code',
    narrative:
      'The final leap from Clicks to Code. Codify your entire architecture into a declarative YAML template. Deploy, inspect, and delete your complete cloud stack with a single reproducible command.',
    keypoint: 'Declarative CloudFormation stacks, repeatable CI/CD blueprints',
    image: '/images/cloudformation.png',
    codeSnippet: '# 5. Declarative Stack Template\nAWSTemplateFormatVersion: "2010-09-09"\nResources:\n  WebServerInstance:\n    Type: "AWS::EC2::Instance"',
    Icon: Code2,
  },
];

const LAB_STEPS = [
  { step: '1', title: 'Accept Course Invitation', desc: 'Open your AWS Academy student invitation email and accept enrollment.' },
  { step: '2', title: 'Open Learner Lab Workspace', desc: 'Navigate to the course module list and locate the assigned Learner Lab.' },
  { step: '3', title: 'Start Lab Environment', desc: 'Click "Start Lab" and monitor the AWS badge until it shifts from red to green.' },
  { step: '4', title: 'Launch AWS Management Console', desc: 'Click the active AWS button to open the real cloud console sandbox.' },
  { step: '5', title: 'Verify Active Lab Session', desc: 'Confirm session timer is active and you have access before the workshop begins.' },
];

export default function Act3Odyssey() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStageSelect = (idx: number) => {
    if (idx === activeStageIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveStageIndex(idx);
      setIsTransitioning(false);
    }, 150);
  };

  const activeStage = STAGES[activeStageIndex];

  return (
    <StorySection
      id="story-odyssey"
      actNumber="3"
      actLabel="TECH"
      eyebrow="HANDS-ON WORKSHOP ARCHITECTURE"
    >
      <div className="space-y-20 sm:space-y-28">
        {/* Editorial Heading */}
        <div className="max-w-3xl reveal-init">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] leading-[1.06] text-white mb-6">
            From raw compute to automated code.
          </h2>
          <p className="text-base sm:text-xl text-[#8e95a5] font-light leading-relaxed">
            Five sequential architectural milestones that turn cloud theory into production habits. Explore each layer to see the exact CLI instructions you will run on event day.
          </p>
        </div>

        {/* Desktop Technical Architecture Connection Pipeline */}
        <div className="hidden lg:block relative py-4 px-6 rounded-2xl bg-white/[0.02] border border-[#0073bb]/20 overflow-x-auto reveal-init">
          <div className="min-w-[640px] flex items-center justify-between">
            {STAGES.map((s, idx) => {
              const isPastOrCurrent = idx <= activeStageIndex;
              const isCurrent = idx === activeStageIndex;
              return (
                <div key={s.id} className="flex items-center flex-1 last:flex-initial">
                  <button
                    onClick={() => handleStageSelect(idx)}
                    className="flex items-center gap-3 cursor-pointer group focus:outline-none"
                  >
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono text-xs transition-all duration-300 ${
                      isCurrent
                        ? 'bg-[#00d26a] border-[#00d26a] text-[#080b11] font-bold shadow-[0_0_12px_rgba(0,210,106,0.35)]'
                        : isPastOrCurrent
                        ? 'bg-[#00d26a]/15 border-[#00d26a]/50 text-[#00d26a]'
                        : 'bg-white/[0.03] border-[#0073bb]/30 text-[#8e95a5] group-hover:border-[#0073bb]/60'
                    }`}>
                      {s.stepNumber}
                    </div>
                    <span className={`text-xs font-mono tracking-wider transition-colors hidden sm:inline ${
                      isCurrent ? 'text-white font-medium' : 'text-[#8e95a5] group-hover:text-white'
                    }`}>
                      {s.title.split(' ')[0]}
                    </span>
                  </button>

                  {idx < STAGES.length - 1 && (
                    <div className="flex-1 mx-4 h-0.5 bg-[#0073bb]/20 relative overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-[#00d26a] transition-all duration-500"
                        style={{
                          width: idx < activeStageIndex ? '100%' : '0%',
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Compact 5-Step Switcher (Fits in 1 Screen) */}
        <div className="lg:hidden grid grid-cols-5 gap-1.5 p-1.5 rounded-xl bg-white/[0.03] border border-[#0073bb]/20 reveal-init">
          {STAGES.map((s, idx) => {
            const isCurrent = idx === activeStageIndex;
            return (
              <button
                key={s.id}
                onClick={() => handleStageSelect(idx)}
                className={`py-2 px-1 rounded-lg text-center font-mono transition-all duration-200 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#00d26a] text-[#080b11] font-bold shadow-md shadow-[#00d26a]/30'
                    : 'text-[#8e95a5] hover:text-white bg-transparent'
                }`}
              >
                <div className="text-xs">{s.stepNumber}</div>
                <div className="text-[10px] truncate">{s.title.split(' ')[0]}</div>
              </button>
            );
          })}
        </div>

        {/* Two-Column Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Milestone List (Desktop Only — on Mobile, the Compact Switcher Above Controls This) */}
          <div className="hidden lg:block lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#8e95a5] mb-4 flex items-center justify-between">
              <span>WORKSHOP MILESTONES</span>
              <span className="text-[#00d26a]">STAGE {activeStageIndex + 1} OF 5</span>
            </div>

            {STAGES.map((stage, idx) => {
              const isSelected = idx === activeStageIndex;
              const StageIcon = stage.Icon;
              return (
                <button
                  key={stage.id}
                  onClick={() => handleStageSelect(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-white/[0.06] border-[#00d26a] shadow-[0_0_25px_rgba(0,210,106,0.15)] translate-x-1'
                      : 'bg-white/[0.01] border-white/[0.06] hover:bg-white/[0.03] hover:border-white/[0.14]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-sm transition-colors ${isSelected ? 'text-[#00d26a] font-bold' : 'text-[#8e95a5]'}`}>
                      {stage.stepNumber}
                    </span>
                    <div>
                      <div className="text-[11px] font-mono text-[#38bdf8] uppercase">
                        {stage.domain}
                      </div>
                      <div className={`text-base sm:text-lg font-medium tracking-tight transition-colors ${isSelected ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                        {stage.title}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <StageIcon
                      size={18}
                      className={isSelected ? 'text-[#00d26a]' : 'text-[#8e95a5] group-hover:text-white'}
                    />
                    <ChevronRight
                      size={16}
                      className={`transition-transform duration-300 ${isSelected ? 'rotate-90 text-[#00d26a]' : 'text-[#8e95a5]'}`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Specification with Smooth Transition */}
          <div className="w-full lg:col-span-7 bg-[#0d121c] border border-white/[0.08] rounded-2xl p-5 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl">
            <div
              className={`transition-all duration-200 ${
                isTransitioning
                  ? 'opacity-0 -translate-y-2'
                  : 'opacity-100 translate-y-0'
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#00d26a] tracking-widest uppercase">
                    STAGE {activeStage.stepNumber} OF 5
                  </span>
                  <span className="text-white/20">|</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#38bdf8]">
                    {activeStage.domain}
                  </span>
                </div>
                <img
                  src={activeStage.image}
                  alt={activeStage.title}
                  className="w-9 h-9 object-contain"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-2">
                {activeStage.title}
              </h3>
              <div className="text-sm font-mono text-[#38bdf8] mb-6">
                {activeStage.subtitle}
              </div>

              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8">
                {activeStage.narrative}
              </p>

              {/* Terminal Specification Box */}
              <div className="rounded-xl bg-black/70 border border-white/[0.08] p-4 font-mono text-xs sm:text-sm text-stone-300 mb-6 overflow-x-auto shadow-inner">
                <div className="text-[11px] text-[#8e95a5] border-b border-white/[0.08] pb-2 mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal size={12} className="text-[#00d26a]" />
                    <span>TERMINAL INSTRUCTION SPEC</span>
                  </div>
                  <span className="text-[#00d26a]">BASH / AWS CLI</span>
                </div>
                <pre className="whitespace-pre-wrap leading-relaxed text-[#38bdf8]">
                  {activeStage.codeSnippet}
                </pre>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#8e95a5] pt-2">
                <CheckCircle2 size={14} className="text-[#00d26a]" />
                <span>Core Takeaway: {activeStage.keypoint}</span>
              </div>

              {/* Mobile Quick Navigation Controls */}
              <div className="flex lg:hidden items-center justify-between pt-5 border-t border-white/[0.08] mt-6">
                <button
                  disabled={activeStageIndex === 0}
                  onClick={() => handleStageSelect(Math.max(0, activeStageIndex - 1))}
                  className="px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-mono text-[#8e95a5] disabled:opacity-30 disabled:pointer-events-none hover:text-white cursor-pointer"
                >
                  ← Prev
                </button>
                <span className="font-mono text-xs text-[#00d26a]">
                  Stage {activeStageIndex + 1} of 5
                </span>
                <button
                  disabled={activeStageIndex === STAGES.length - 1}
                  onClick={() => handleStageSelect(Math.min(STAGES.length - 1, activeStageIndex + 1))}
                  className="px-3.5 py-1.5 rounded-full bg-[#00d26a]/15 border border-[#00d26a]/40 text-xs font-mono text-[#00d26a] disabled:opacity-30 disabled:pointer-events-none hover:bg-[#00d26a] hover:text-[#080b11] cursor-pointer"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* AWS Academy Learner Lab Sandbox (Steps 1-5) */}
        <div className="pt-12 border-t border-white/[0.08] reveal-init">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00d26a] uppercase tracking-widest mb-3">
              <span>SANDBOX ENVIRONMENT</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight mb-3">
              AWS Academy Learner Lab
            </h3>
            <p className="text-sm sm:text-base text-[#8e95a5] font-light leading-relaxed">
              Every participant receives an official cloud sandbox powered by AWS Academy. As per workshop protocol, verify <strong className="text-white">Steps 1 through 5</strong> before moving to the Seminar Hall.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {LAB_STEPS.map((lab) => (
              <div
                key={lab.step}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] transition-colors"
              >
                <div className="font-mono text-xs text-[#00d26a] mb-2">STEP {lab.step}</div>
                <div className="text-sm font-medium text-white mb-2">{lab.title}</div>
                <p className="text-xs text-[#8e95a5] font-light leading-relaxed">{lab.desc}</p>
              </div>
            ))}
          </div>

          {/* Contact Support Assistance Callout */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <div className="text-xs font-mono text-[#8e95a5]">
              Need assistance with your AWS Academy sandbox or haven&apos;t received your invite?
            </div>
            <a
              href="tel:+919967813266"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#00d26a] hover:text-white uppercase tracking-wider transition-colors"
            >
              <Phone size={13} />
              <span>Contact Organizer Support: +91 99678 13266</span>
            </a>
          </div>
        </div>
      </div>
    </StorySection>
  );
}
