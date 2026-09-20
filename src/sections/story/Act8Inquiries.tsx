import { useState } from 'react';
import StorySection from '../../components/editorial/StorySection';
import { ChevronDown, Phone, Mail, ArrowUpRight, HeartHandshake, Ticket } from 'lucide-react';
import { LinkedInIcon, InstagramIcon } from '../../components/SocialIcons';
import { EVENT_DATE, EVENT_TIME } from '../../constants/event';

interface FaqItem {
  q: string;
  a: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'Who should attend this workshop?',
    a: 'Any student, beginner, or cloud enthusiast curious about real AWS infrastructure. You do not need prior cloud or DevOps experience — curiosity matters far more than credentials.',
    category: 'AUDIENCE',
  },
  {
    q: 'Is attendance completely free?',
    a: 'Yes, participation is 100% free. However, capacity is strictly capped at 100 registrations on Meetup to ensure every attendee receives individual lab support.',
    category: 'ADMISSION',
  },
  {
    q: 'Do I need to bring a personal laptop?',
    a: 'Yes. A personal laptop (Windows, macOS, or Linux) with a modern web browser and its power charger is strictly mandatory for the live hands-on build.',
    category: 'REQUIREMENTS',
  },
  {
    q: 'What institutional email ID should I provide?',
    a: 'Participants must use their official college domain identifier (@mhssce.ac.in) during the Meetup registration and check-in process.',
    category: 'REGISTRATION',
  },
  {
    q: 'How does the workshop sandbox environment work?',
    a: 'We provide an official AWS Academy Learner Lab sandbox. Organizers will assist you in the waiting room at 09:30 AM to confirm you can access the AWS console before the keynote.',
    category: 'SANDBOX',
  },
  {
    q: 'Where and when is check-in on event day?',
    a: 'Check-in begins at 09:30 AM at the Ground Floor Registration Desk, near the Staff Lift. At approximately 09:55 AM, attendees transition to the 3rd Floor Seminar Hall for the 10:00 AM start.',
    category: 'TIMING',
  },
  {
    q: 'How do I access the official WhatsApp group?',
    a: 'The private participant WhatsApp group link is distributed automatically upon completing your Meetup RSVP. We do not publish the direct WhatsApp link publicly.',
    category: 'COMMUNITY',
  },
  {
    q: 'Will every participant receive a certificate?',
    a: 'Yes. Every participant who completes the workshop will receive an official digital certificate delivered by the next day to their registered email address.',
    category: 'CERTIFICATE',
  },
  {
    q: 'Who can I contact for questions or accessibility assistance?',
    a: 'Contact AWS Student Builder Group Leaders at MHSSCE: Abid Ahmed Shaikh (+91 99678 13266) or Prem Pagar (+91 84597 03601), or email awssbg@mhssce.ac.in.',
    category: 'CONTACT',
  },
];

export default function Act8Inquiries() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <StorySection
      id="story-inquiries"
      actNumber="8"
      actLabel="FAQ"
      eyebrow="FREQUENTLY ASKED QUESTIONS"
    >
      <div className="space-y-24 sm:space-y-36">
        {/* FAQ Header */}
        <div className="max-w-3xl reveal-init">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] leading-[1.06] text-white mb-6">
            Clear answers before you arrive.
          </h2>
          <p className="text-base sm:text-xl text-[#8e95a5] font-light leading-relaxed">
            Everything you need to know about registration, sandbox access, requirements, and logistics.
          </p>
        </div>

        {/* Utility FAQ List & Direct Helpline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Minimalist Accordion List */}
          <div className="lg:col-span-8 divide-y divide-white/[0.08] border-y border-white/[0.08] reveal-init">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-6 sm:py-7">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-start justify-between gap-6 group cursor-pointer focus:outline-none"
                  >
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] text-[#38bdf8] uppercase tracking-widest">
                        {faq.category}
                      </span>
                      <h3 className={`text-lg sm:text-xl font-normal transition-colors ${
                        isOpen ? 'text-[#00d26a]' : 'text-white group-hover:text-white/90'
                      }`}>
                        {faq.q}
                      </h3>
                    </div>
                    <div className={`p-2 rounded-full border border-white/[0.08] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-white/10 border-white/20 text-[#00d26a]' : 'text-white/70'
                    }`}>
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out overflow-hidden ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden text-sm sm:text-base text-[#8e95a5] font-light leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Direct Organizer Help Desk */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-6 reveal-init stagger-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00d26a] uppercase tracking-wider">
              <HeartHandshake size={15} />
              <span>DIRECT EVENT ASSISTANCE</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
              Have a specific question?
            </h3>

            <p className="text-sm text-[#8e95a5] font-light leading-relaxed">
              Our student organizer team is on campus and available to assist with registration verification or accessibility requests.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/[0.06] text-xs font-mono">
              <div className="text-[#8e95a5] uppercase tracking-wider mb-2">ORGANIZER LEADS</div>

              <div className="space-y-3">
                <div>
                  <div className="text-white font-medium text-sm">Abid Ahmed Shaikh</div>
                  <div className="text-[#8e95a5] text-[11px]">AWS Student Builder Group Leader</div>
                  <div className="flex items-center gap-2 pt-1 text-white">
                    <Phone size={13} className="text-[#00d26a]" />
                    <a href="tel:+919967813266" className="hover:text-[#00d26a] transition-colors">
                      +91 99678 13266
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.04]">
                  <div className="text-white font-medium text-sm">Prem Pagar</div>
                  <div className="text-[#8e95a5] text-[11px]">AWS Student Builder Group Leader</div>
                  <div className="flex items-center gap-2 pt-1 text-white">
                    <Phone size={13} className="text-[#00d26a]" />
                    <a href="tel:+918459703601" className="hover:text-[#00d26a] transition-colors">
                      +91 84597 03601
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06] text-white">
                <Mail size={14} className="text-[#00d26a]" />
                <a href="mailto:awssbg@mhssce.ac.in" className="hover:text-[#00d26a] transition-colors">
                  awssbg@mhssce.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Major Dramatic Whitespace Pause Before Climax */}
        <div className="pt-20 sm:pt-28 pb-10 border-t border-white/[0.08] text-center space-y-10 reveal-init">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#8e95a5]">
            <Ticket size={14} className="text-[#00d26a]" />
            <span>24 SEPTEMBER 2026 · MHSSCE MUMBAI</span>
          </div>

          {/* The Definitive Visual Statement of the Entire Website */}
          <div className="space-y-4 max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-7xl md:text-8xl font-light tracking-[-0.04em] leading-[0.94] text-white">
              You&apos;ve seen the clicks.
            </h2>
            <div className="text-4xl sm:text-7xl md:text-8xl font-light tracking-[-0.04em] leading-[0.94] text-[#00d26a] italic">
              Now write the code.
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#8e95a5] font-light leading-relaxed">
            Join us on {EVENT_DATE} from {EVENT_TIME} at 3rd Floor Seminar Hall, MHSSCE. Move from cloud fundamentals to real automated infrastructure.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                window.open('https://www.meetup.com/', '_blank', 'noopener,noreferrer');
              }}
              className="px-9 py-4 rounded-full bg-[#00d26a] text-[#080b11] font-mono text-sm uppercase tracking-wider font-semibold hover:bg-[#00e676] hover:-translate-y-0.5 transition-all duration-300 shadow-2xl shadow-[#00d26a]/25 flex items-center gap-2 cursor-pointer"
            >
              <span>RSVP FOR THE EVENT</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Minimalist Editorial Footer */}
        <footer className="pt-12 border-t border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-xs font-mono text-[#8e95a5]">
          <div className="space-y-1">
            <div className="text-white font-medium text-sm">
              AWS Student Builder Group · MHSSCE
            </div>
            <div>
              Department of Information Technology · M.H. Saboo Siddik College of Engineering, Mumbai
            </div>
            <div>
              © 2026 AWS Student Builder Group. All rights reserved.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://www.linkedin.com/company/awssbg-mhssce/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LinkedInIcon size={13} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/awssbg_mhssce"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <InstagramIcon size={13} />
              <span>Instagram</span>
            </a>
            <a
              href="https://awssbg-mhssce.in"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              awssbg-mhssce.in
            </a>
            <a
              href="https://mhssce.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              mhssce.ac.in
            </a>
          </div>
        </footer>
      </div>
    </StorySection>
  );
}
