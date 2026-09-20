import type { CSSProperties } from 'react';
import CinematicChapter from '../components/CinematicChapter';
import { Laptop, Cloud, Server, ShieldCheck, Code2, Terminal, CheckCircle2 } from 'lucide-react';
import { MEETUP_STATUS } from '../constants/event';

interface WorkshopStepData {
  step: string;
  domain: string;
  title: string;
  description: string;
  keypoint: string;
  image?: string;
  Icon: typeof Cloud;
}

const WORKSHOP_FLOW: WorkshopStepData[] = [
  {
    step: '01',
    domain: 'CORE',
    title: 'AWS CONSOLE',
    description: 'Access your cloud environment and navigate core account boundaries.',
    keypoint: 'Cloud Console & IAM',
    image: '/images/aws-logo.png',
    Icon: Cloud,
  },
  {
    step: '02',
    domain: 'COMPUTE',
    title: 'AMAZON EC2',
    description: 'Provision and operate a live virtual Linux server in the cloud.',
    keypoint: 'VPC & Instance Launch',
    image: '/images/ec2.png',
    Icon: Server,
  },
  {
    step: '03',
    domain: 'ACCESS',
    title: 'SESSION MANAGER',
    description: 'Connect securely into your instance without opening inbound SSH ports.',
    keypoint: 'Zero-Trust AWS SSM',
    image: '/images/systemsmanager.png',
    Icon: ShieldCheck,
  },
  {
    step: '04',
    domain: 'HOSTING',
    title: 'WEB SERVER',
    description: 'Deploy and host a live customized web application endpoint.',
    keypoint: 'Live HTTP Endpoint',
    image: '/images/web-server-icon.png',
    Icon: Laptop,
  },
  {
    step: '05',
    domain: 'DEVOPS',
    title: 'INFRASTRUCTURE AS CODE',
    description: 'Codify and automate your entire setup with CloudFormation templates.',
    keypoint: 'Declarative YAML Stack',
    image: '/images/cloudformation.png',
    Icon: Code2,
  },
];

interface LearnerLabStepData {
  step: string;
  action: string;
  title: string;
  desc: string;
}

const LEARNER_LAB_STEPS: LearnerLabStepData[] = [
  {
    step: '01',
    action: 'INVITATION',
    title: 'CREATE YOUR ACCOUNT',
    desc: 'Use the official AWS Academy invitation to create or access your learner account.',
  },
  {
    step: '02',
    action: 'COURSE ACCESS',
    title: 'ACCEPT INVITATION',
    desc: 'Join the assigned AWS Academy course workspace before the lab session begins.',
  },
  {
    step: '03',
    action: 'SANDBOX',
    title: 'OPEN LEARNER LAB',
    desc: 'Enter the Learner Lab from your AWS Academy course dashboard.',
  },
  {
    step: '04',
    action: 'BOOTSTRAP',
    title: 'START THE LAB',
    desc: 'Launch the lab environment and wait for AWS Console status to turn active green.',
  },
  {
    step: '05',
    action: 'VERIFY',
    title: 'CHECK YOUR ACCESS',
    desc: 'Confirm you can reach the AWS management console before the hands-on session starts.',
  },
];

export default function HandsOnSection() {
  return (
    <CinematicChapter
      eyebrow="THE HANDS-ON LAB"
      title="You are not just watching. You are building."
      className="lab-chapter"
    >
      <div className="hands-on-scene">
        <div className="hands-on-intro">
          <div className="hands-on-badge">
            <Laptop size={16} strokeWidth={2} />
            <span>BUILD IT YOURSELF</span>
          </div>
          <p>
            Inside the provided sandbox environment, you will move through a real cloud workflow — from compute to a working web server, then toward automation.
          </p>
        </div>

        <div className="hands-on-flow" aria-label="Hands-on workshop flow">
          {WORKSHOP_FLOW.map((mod, index) => {
            const FlowIcon = mod.Icon;
            return (
              <article
                className="hands-on-step"
                key={mod.step}
                style={{ '--hands-on-index': index } as CSSProperties}
              >
                <div className="hands-on-step-top">
                  <div className="hands-on-step-badge">
                    <span>STEP</span>
                    <b>{mod.step}</b>
                  </div>
                  <div className="hands-on-topic-rail">
                    <span className="hands-on-domain-tag">{mod.domain}</span>
                    <span className="hands-on-rail-line" aria-hidden="true" />
                  </div>
                  <div className="hands-on-visual">
                    {mod.image ? (
                      <img src={mod.image} alt={mod.title} />
                    ) : (
                      <FlowIcon size={24} strokeWidth={1.8} />
                    )}
                  </div>
                </div>

                <div className="hands-on-step-content">
                  <strong>{mod.title}</strong>
                  <p>{mod.description}</p>
                </div>

                <div className="hands-on-step-footer">
                  <CheckCircle2 size={13} className="text-[#00d26a]" />
                  <span>{mod.keypoint}</span>
                </div>
              </article>
            );
          })}
        </div>

        <section className="learner-lab-steps" aria-labelledby="learner-lab-heading">
          <div className="learner-lab-heading">
            <span className="mono-label">AWS ACADEMY LEARNER LAB</span>
            <h3 id="learner-lab-heading">Get your lab ready before the workshop.</h3>
          </div>
          <div className="learner-lab-grid" aria-label="Learner Lab preparation steps">
            {LEARNER_LAB_STEPS.map((item) => (
              <article className="learner-lab-card" key={item.step}>
                <div className="learner-lab-card-top">
                  <span className="learner-lab-step-num">{item.step}</span>
                  <span className="learner-lab-action-tag">{item.action}</span>
                </div>
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="hands-on-sandbox">
          <div className="hands-on-sandbox-icon">
            <Terminal size={20} />
          </div>
          <div className="hands-on-sandbox-content">
            <div className="hands-on-sandbox-tag">SANDBOX ENVIRONMENT</div>
            <strong>AWS Academy Learner Lab</strong>
            <p>
              Provided by AWS Academy. Organizers verify in the waiting room that you received the resource and can access it before the program begins.
            </p>
          </div>
          <div
            className="hands-on-sandbox-register event-overview-register event-overview-register-disabled"
            aria-label={MEETUP_STATUS}
          >
            <img src="/images/meetup-icon.png" alt="" aria-hidden="true" />
            <span>{MEETUP_STATUS}</span>
            <b aria-hidden="true">·</b>
          </div>
        </div>
      </div>
    </CinematicChapter>
  );
}

