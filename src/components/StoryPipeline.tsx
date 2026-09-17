import { useState } from 'react';
import { ArrowRight, ShieldCheck, Terminal } from 'lucide-react';

type Scene = {
  tag: string;
  title: string;
  synopsis: string;
  icon: string;
  filename: string;
  bullets: string[];
  code: string;
};

const scenes: Scene[] = [
  {
    tag: 'ACT I: POINT & CLICK',
    title: 'Scene 01: AWS Management Console Operations (Click-Ops)',
    synopsis:
      'Attendees witness the friction of building infrastructure manually. We launch an Amazon EC2 instance by navigating deep console menus, auditing the danger of exposing port 22 directly to public IP ranges, and recognizing how unrecorded steps create tech debt.',
    icon: '/images/ec2.png',
    filename: 'manual-ec2-params.json',
    bullets: [
      'AMI: Amazon Linux 2023 64-bit (x86_64)',
      'Instance Type: t2.micro / t3.small Free Tier eligible',
      'Manual Inbound Rule: TCP 22 (Vulnerable public surface)',
    ],
    code: `AWSTemplateFormatVersion: '2010-09-09'
Description: 'Stage 1 - Foundational EC2 Compute Provisioning'
Parameters:
  InstanceTypeParam:
    Type: String
    Default: t2.micro
Resources:
  LabEC2Instance:
    Type: AWS::EC2::Instance
    Properties:
      InstanceType: !Ref InstanceTypeParam
      ImageId: ami-0c101f26f147fa7fd
      Tags:
        - Key: Event
          Value: ClicksToCode-AWS-SBG`,
  },
  {
    tag: 'ACT II: ZERO-SSH HARDENING (SSM)',
    title: 'Scene 02: Zero-SSH Port Bastion (AWS Systems Manager)',
    synopsis:
      'Exposing port 22 invites automated botnet attacks and credential leakage. We demonstrate how AWS Systems Manager (SSM) Session Manager replaces fragile .pem private keys with cryptographically signed browser terminal sessions.',
    icon: '/images/systemsmanager.png',
    filename: 'ssm-iam-role.yaml',
    bullets: [
      'Zero Inbound Security Rules required (No Port 22)',
      'IAM Instance Role: AmazonSSMManagedInstanceCore',
      'Encrypted browser terminal session via AWS Console / CLI',
    ],
    code: `EC2SSMRole:
  Type: AWS::IAM::Role
  Properties:
    AssumeRolePolicyDocument:
      Statement:
        - Effect: Allow
          Principal:
            Service: ec2.amazonaws.com
          Action: sts:AssumeRole
    ManagedPolicyArns:
      - arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore`,
  },
  {
    tag: 'ACT III: DECLARATIVE INFRASTRUCTURE AS CODE',
    title: 'Scene 03: The Declarative Future (AWS CloudFormation)',
    synopsis:
      'Convert human clicks into code. With CloudFormation, our entire hardened compute stack is defined in a concise YAML template that can be versioned on Git, tested in CI/CD, and deployed reliably.',
    icon: '/images/cloudformation.png',
    filename: 'production-stack.yaml',
    bullets: [
      'Declarative Infrastructure as Code (YAML / JSON)',
      'Automated Stack Rollback on provisioning failure',
      'One-Click repeatable deployment in any AWS Region',
    ],
    code: `HardenedComputeStack:
  Type: AWS::CloudFormation::Stack

Outputs:
  SSMConnectCommand:
    Description: "Start Zero-Port 22 Terminal Session"
    Value: !Sub "aws ssm start-session --target \\${LabEC2Instance}"`,
  },
];

export default function StoryPipeline() {
  const [scene, setScene] = useState(0);
  const [mode, setMode] = useState<'terminal' | 'telemetry'>('terminal');
  const currentScene = scenes[scene];

  return (
    <section
      id="story-pipeline"
      className="w-full bg-[#0a0e18] py-24 border-b border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00d26a] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#00d26a] animate-pulse" />
              EPISODE REEL • THREE-ACT ARCHITECTURE TRANSFORMATION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              The Evolution of AWS Compute
            </h2>
          </div>
          <p className="text-sm text-[#8e95a5] max-w-md font-mono">
            Click across the scenes to simulate real-time architecture transitions, security telemetry, and production deployment scripts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {scenes.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setScene(index)}
              className={`text-left p-6 rounded-2xl border transition-all relative overflow-hidden ${
                scene === index
                  ? 'border-[#00d26a] bg-gradient-to-br from-[#1c1f2a] to-[#171b26] shadow-[0_0_35px_rgba(0,210,106,0.18)]'
                  : 'border-white/10 bg-[#171b26] hover:border-[#38bdf8]/50'
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="px-2.5 py-1 rounded bg-[#0a0e18] text-[#00d26a] border border-[#00d26a]/30 font-mono text-[10px] font-bold">
                  SCENE 0{index + 1} • {index === 0 ? 'LEGACY OPS' : index === 1 ? 'HARDENING' : 'THE FUTURE'}
                </span>
                <span className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center">
                  <img src={item.icon} alt="" className="w-full h-full object-contain" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {index === 0 ? 'The Console Click Era' : index === 1 ? 'Zero-SSH SSM Bastion' : 'The Declarative Code IaC'}
              </h3>
              <p className="text-xs text-[#8e95a5] leading-relaxed mb-4">{item.synopsis}</p>
              <div className="flex items-center justify-between pt-3 border-t border-white/5 font-mono text-xs">
                <span className="text-[#00d26a]">
                  {index === 0 ? '⚠ Port 22 Exposed' : index === 1 ? '🔒 Zero Open Ports' : '✓ 1-Click Codified'}
                </span>
                <span>Inspect →</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-[#1c1f2a] border border-white/15 p-6 md:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0a0e18] border border-white/10 p-2.5">
                <img src={currentScene.icon} alt="" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00d26a]/15 text-[#00d26a] border border-[#00d26a]/30 inline-block">
                  {currentScene.tag}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mt-1">{currentScene.title}</h4>
              </div>
            </div>

            <div className="flex items-center gap-1 bg-[#0a0e18] p-1 rounded-xl border border-white/10 font-mono text-xs">
              <button
                type="button"
                onClick={() => setMode('terminal')}
                className={`px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 ${
                  mode === 'terminal' ? 'bg-[#00d26a] text-[#00210b] font-bold' : 'text-[#8e95a5]'
                }`}
              >
                <Terminal size={14} />
                Production YAML
              </button>
              <button
                type="button"
                onClick={() => setMode('telemetry')}
                className={`px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 ${
                  mode === 'telemetry' ? 'bg-[#00d26a] text-[#00210b] font-bold' : 'text-[#8e95a5]'
                }`}
              >
                Telemetry
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#00d26a] font-semibold">
                  Scene Narrative &amp; Pain Points
                </span>
                <p className="mt-2 text-sm text-[#8e95a5] leading-relaxed">{currentScene.synopsis}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0a0e18] border border-white/10">
                <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck size={14} />
                  Cloud Architecture Specs
                </span>
                <ul className="text-xs font-mono space-y-2 text-white/90 mt-3">
                  {currentScene.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <ArrowRight size={13} className="text-[#00d26a]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              {mode === 'terminal' ? (
                <div className="rounded-xl bg-[#0a0e18] border border-white/10 p-4 font-mono text-xs shadow-inner">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-white/70">
                      ● ● ● <span className="ml-2">{currentScene.filename}</span>
                    </span>
                    <span className="text-[#00d26a] font-bold">AWS CloudFormation Ready</span>
                  </div>
                  <pre className="mt-4 overflow-x-auto text-white leading-relaxed whitespace-pre-wrap">
                    {currentScene.code}
                  </pre>
                </div>
              ) : (
                <div className="rounded-xl bg-[#0a0e18] border border-white/10 p-5 font-mono text-xs flex flex-col gap-3">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-white font-bold">Friction Analysis</span>
                    <span className="text-amber-400 font-bold">Total: ~32 Manual Clicks</span>
                  </div>
                  {[
                    'Navigate Console → EC2',
                    'Select AMI, instance type & keypair',
                    'Configure inbound rules & storage',
                    'IaC: one-command stack',
                  ].map((text, index) => (
                    <div key={text} className="p-3 rounded-lg bg-[#1c1f2a] flex items-center justify-between">
                      <span>{index + 1}. {text}</span>
                      <span className="text-white/50">{[3, 12, 17, 1][index]} clicks</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
