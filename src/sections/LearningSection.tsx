import type { CSSProperties } from 'react';
import CinematicChapter from '../components/CinematicChapter';
import { Cloud, Server, ShieldCheck, Laptop, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

interface LearningModuleData {
  step: string;
  domain: string;
  keypoint: string;
  title: string;
  description: string;
  image?: string | null;
  Icon: typeof Cloud;
}

const LEARNING_MODULES: LearningModuleData[] = [
  {
    step: '01',
    domain: 'CLOUD CONCEPTS',
    keypoint: 'Virtualization & Regions',
    title: 'CLOUD FUNDAMENTALS',
    description: 'Understand core cloud architecture, virtualization, regions, and why modern software runs on the cloud.',
    image: null,
    Icon: Cloud,
  },
  {
    step: '02',
    domain: 'AWS ECOSYSTEM',
    keypoint: 'Console, IAM & Security',
    title: 'AWS FUNDAMENTALS',
    description: 'Explore the AWS ecosystem, IAM identity foundations, and navigate the cloud management console with confidence.',
    image: '/images/aws-logo.png',
    Icon: Cloud,
  },
  {
    step: '03',
    domain: 'COMPUTE INSTANCE',
    keypoint: 'Linux OS & Provisioning',
    title: 'AMAZON EC2',
    description: 'Launch, configure, and operate a live virtual server in the cloud with tailored instance types and storage.',
    image: '/images/ec2.png',
    Icon: Server,
  },
  {
    step: '04',
    domain: 'ZERO-TRUST ACCESS',
    keypoint: 'Session Manager Without SSH',
    title: 'SECURE ACCESS',
    description: 'Connect securely into your running instance using AWS Systems Manager without exposing open inbound SSH ports.',
    image: '/images/systemsmanager.png',
    Icon: ShieldCheck,
  },
  {
    step: '05',
    domain: 'WEB HOSTING',
    keypoint: 'Live HTTP Web Endpoint',
    title: 'BUILD A WEB SERVER',
    description: 'Turn your cloud server into an active web endpoint hosting a customized live application reachable in the browser.',
    image: '/images/web-server-icon.png',
    Icon: Laptop,
  },
  {
    step: '06',
    domain: 'IaC & AUTOMATION',
    keypoint: 'Repeatable Code Templates',
    title: 'INFRASTRUCTURE AS CODE',
    description: 'Codify and automate your entire cloud stack using AWS CloudFormation templates for repeatable deployments.',
    image: '/images/cloudformation.png',
    Icon: Code2,
  },
];

export default function LearningSection() {
  return (
    <CinematicChapter
      eyebrow="WHAT YOU WILL LEARN"
      title="Six steps from cloud curiosity to a working foundation."
      className="learning-chapter"
    >
      <div className="learning-scene">
        <div className="learning-intro">
          <div className="learning-intro-badge">
            <Cloud size={16} strokeWidth={2.2} />
            <span>YOUR LEARNING PATH</span>
          </div>
          <p>
            Move from the big picture to hands-on infrastructure — with every concept tied to something you can actually build.
          </p>
        </div>

        <div className="learning-modules" aria-label="What you will learn">
          {LEARNING_MODULES.map((mod, index) => {
            const LearningIcon = mod.Icon;
            return (
              <article
                className="learning-module"
                key={mod.step}
                style={{ '--learning-index': index } as CSSProperties}
              >
                <div className="learning-module-top">
                  <div className="learning-module-step-badge">
                    <span>STEP</span>
                    <b>{mod.step}</b>
                  </div>
                  <div className="learning-module-topic-rail">
                    <span className="learning-module-domain-tag">{mod.domain}</span>
                    <span className="learning-module-rail-line" aria-hidden="true" />
                  </div>
                  <div className="learning-module-visual">
                    {mod.image ? (
                      <img src={mod.image} alt={mod.title} />
                    ) : (
                      <LearningIcon size={26} strokeWidth={2} />
                    )}
                  </div>
                </div>

                <div className="learning-module-content">
                  <strong>{mod.title}</strong>
                  <p>{mod.description}</p>
                </div>

                <div className="learning-module-footer">
                  <CheckCircle2 size={13} className="text-[#00d26a]" />
                  <span>{mod.keypoint}</span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="learning-strip">
          <span>
            <Sparkles size={15} /> LEARN → BUILD → AUTOMATE
          </span>
          <strong>Every module points toward the hands-on lab.</strong>
        </div>
      </div>
    </CinematicChapter>
  );
}
