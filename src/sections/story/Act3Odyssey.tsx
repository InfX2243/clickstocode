import { useState } from 'react';
import StorySection from '../../components/editorial/StorySection';
import { Cloud, Server, ShieldCheck, Globe, Code2, ExternalLink, CheckCircle2, ChevronRight } from 'lucide-react';
import { LEARNER_LAB_GUIDE_URL } from '../../constants/event';

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
    stepNumber: '01',
    domain: 'CLOUD ENVIRONMENT',
    title: 'Cloud Computing & AWS',
    subtitle: 'Understanding the Global Infrastructure',
    narrative:
      'We deconstruct cloud architecture, availability zones, and IAM boundaries. You discover why modern applications no longer live on physical on-premise hardware, and how cloud identity secures multi-tenant workloads.',
    keypoint: 'AWS Console, IAM roles, and region isolation',
    image: '/images/aws-logo.png',
    codeSnippet: '# Authenticate & Establish IAM Session\naws sts get-caller-identity\nexport AWS_REGION="ap-south-1"',
    Icon: Cloud,
  },
  {
    id: 'ec2',
    stepNumber: '02',
    domain: 'ELASTIC COMPUTE',
    title: 'Amazon EC2',
    subtitle: 'Provisioning Virtual Linux Compute',
    narrative:
      'Move past diagrams and spin up a real Amazon Elastic Compute Cloud (EC2) instance. Configure virtual networking, storage volumes, and operating system images tailored for high reliability.',
    keypoint: 'Instance lifecycle, Amazon Linux AMI, and security groups',
    image: '/images/ec2.png',
    codeSnippet: 'aws ec2 run-instances \\\n  --image-id ami-0c55b159cbfafe1f0 \\\n  --count 1 --instance-type t3.micro',
    Icon: Server,
  },
  {
    id: 'ssm',
    stepNumber: '03',
    domain: 'ZERO-TRUST ACCESS',
    title: 'AWS Systems Manager',
    subtitle: 'Session Manager Without Open SSH',
    narrative:
      'The traditional habit of opening port 22 to 0.0.0.0/0 is a critical security risk. Learn how AWS Systems Manager (SSM) creates encrypted, auditable command-line access directly through the browser without exposing inbound firewall ports.',
    keypoint: 'Zero-trust architecture, encrypted shell sessions, no public IP needed',
    image: '/images/systemsmanager.png',
    codeSnippet: '# Secure interactive shell without SSH keypairs\naws ssm start-session \\\n  --target i-0a1b2c3d4e5f6g7h8',
    Icon: ShieldCheck,
  },
  {
    id: 'webserver',
    stepNumber: '04',
    domain: 'WEB HOSTING',
    title: 'Web Server Deployment',
    subtitle: 'Transforming Compute Into a Live Endpoint',
    narrative:
      'Configure an HTTP web server on your live Linux instance. Install necessary daemon packages, customize HTML content, and expose your builder application to the public internet.',
    keypoint: 'HTTP daemon initialization, systemd services, and customized landing',
    image: '/images/web-server-icon.png',
    codeSnippet: '# Bootstrap web server on Amazon Linux\nyum update -y && yum install -y httpd\necho "<h1>Hello from AWS</h1>" > /var/www/html/index.html',
    Icon: Globe,
  },
  {
    id: 'iac',
    stepNumber: '05',
    domain: 'DEVOPS & AUTOMATION',
    title: 'AWS CloudFormation',
    subtitle: 'Codifying Infrastructure as Code',
    narrative:
      'The final leap from Clicks to Code. Codify your entire architecture into a declarative YAML template. Deploy, inspect, and delete your complete cloud stack with a single reproducible command.',
    keypoint: 'Declarative CloudFormation stacks, repeatable CI/CD blueprints',
    image: '/images/cloudformation.png',
    codeSnippet: 'AWSTemplateFormatVersion: "2010-09-09"\nResources:\n  WebServerInstance:\n    Type: "AWS::EC2::Instance"',
    Icon: Code2,
  },
];

const LAB_STEPS = [
  { step: '06', title: 'Accept Course Invitation', desc: 'Open your AWS Academy student invitation email and accept enrollment.' },
  { step: '07', title: 'Open Learner Lab Workspace', desc: 'Navigate to the course module list and locate the assigned Learner Lab.' },
  { step: '08', title: 'Start Lab Environment', desc: 'Click "Start Lab" and monitor the AWS badge until it shifts from red to green.' },
  { step: '09', title: 'Launch AWS Management Console', desc: 'Click the active AWS button to open the real cloud console sandbox.' },
  { step: '10', title: 'Verify Active Lab Session', desc: 'Confirm session timer is active and you have access before the workshop begins.' },
];

export default function Act3Odyssey() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = STAGES[activeStageIndex];

  return (
    <StorySection
      id="story-odyssey"
      actNumber="03"
      actLabel="THE TECHNICAL JOURNEY"
      eyebrow="HANDS-ON WORKSHOP ARCHITECTURE"
    >
      <div className="space-y-20 sm:space-y-28">
        {/* Editorial Heading */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] leading-[1.06] text-white mb-6">
            From raw compute to automated code.
          </h2>
          <p className="text-base sm:text-xl text-[#8e95a5] font-light leading-relaxed">
            Five sequential architectural milestones that turn cloud theory into production habits. Every step is built on real AWS infrastructure inside your provided sandbox.
          </p>
        </div>

        {/* Interactive Architecture Stage Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Step Selector List (Left Column) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#8e95a5] mb-4">
              Workshop Progression
            </div>
            {STAGES.map((stage, idx) => {
              const isSelected = idx === activeStageIndex;
              const StageIcon = stage.Icon;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-white/[0.05] border-[#00d26a] shadow-[0_0_25px_rgba(0,210,106,0.15)]'
                      : 'bg-white/[0.01] border-white/[0.06] hover:bg-white/[0.03] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-sm ${isSelected ? 'text-[#00d26a]' : 'text-[#8e95a5]'}`}>
                      {stage.stepNumber}
                    </span>
                    <div>
                      <div className="text-xs font-mono text-[#8e95a5] uppercase">
                        {stage.domain}
                      </div>
                      <div className={`text-base sm:text-lg font-medium tracking-tight ${isSelected ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
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

          {/* Active Stage Detail Panel (Right Column) */}
          <div className="lg:col-span-7 bg-[#0d121c] border border-white/[0.08] rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#00d26a] tracking-widest uppercase">
                  MILESTONE {activeStage.stepNumber} OF 05
                </span>
                <span className="text-white/20">|</span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#8e95a5]">
                  {activeStage.domain}
                </span>
              </div>
              <img
                src={activeStage.image}
                alt={activeStage.title}
                className="w-8 h-8 object-contain"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-2">
              {activeStage.title}
            </h3>
            <div className="text-sm font-mono text-[#00d26a] mb-6">
              // {activeStage.subtitle}
            </div>

            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8">
              {activeStage.narrative}
            </p>

            {/* Code / Command Blueprint */}
            <div className="rounded-xl bg-black/60 border border-white/[0.08] p-4 font-mono text-xs sm:text-sm text-stone-300 mb-6 overflow-x-auto">
              <div className="text-[11px] text-[#8e95a5] border-b border-white/[0.08] pb-2 mb-3 flex items-center justify-between">
                <span>TERMINAL INSTRUCTION SPEC</span>
                <span className="text-[#00d26a]">BASH / CLI</span>
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed text-[#38bdf8]">
                {activeStage.codeSnippet}
              </pre>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#8e95a5]">
              <CheckCircle2 size={14} className="text-[#00d26a]" />
              <span>Core Takeaway: {activeStage.keypoint}</span>
            </div>
          </div>
        </div>

        {/* AWS Academy Learner Lab Sandbox Section (Steps 6-10) */}
        <div className="pt-12 border-t border-white/[0.08]">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00d26a] uppercase tracking-widest mb-3">
              <span>SANDBOX ENVIRONMENT</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight mb-3">
              AWS Academy Learner Lab
            </h3>
            <p className="text-sm sm:text-base text-[#8e95a5] font-light leading-relaxed">
              Every participant receives an official cloud sandbox powered by AWS Academy. As per workshop protocol, verify <strong className="text-white">Steps 6 through 10</strong> before moving to the Seminar Hall.
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

          <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <div className="text-xs font-mono text-[#8e95a5]">
              Need the complete AWS Academy setup walkthrough?
            </div>
            <a
              href={LEARNER_LAB_GUIDE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-[#00d26a] uppercase tracking-wider transition-colors"
            >
              <span>Official AWS Academy Enrollment Guide</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </StorySection>
  );
}
