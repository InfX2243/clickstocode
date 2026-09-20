import { useState, useEffect, useRef } from 'react';
import StorySection from '../../components/editorial/StorySection';
import { MapPin, Laptop, BatteryCharging, IdCard, Ticket } from 'lucide-react';
import { EVENT_DATE, VENUE, CHECKIN_LOCATION, MEETUP_STATUS } from '../../constants/event';

interface TimelineEntry {
  time: string;
  category: string;
  title: string;
  location: string;
  description: string;
  highlight?: boolean;
}

const BLUEPRINT_SCHEDULE: TimelineEntry[] = [
  {
    time: '09:30',
    category: 'CHECK-IN OPENS',
    title: 'Arrival & QR Ticket Verification',
    location: 'Ground Floor · Near Staff Lift',
    description: 'Present your official Meetup QR pass at the Ground Floor help desk for badge verification.',
  },
  {
    time: '09:30 — 09:50',
    category: 'SANDBOX SUPPORT',
    title: 'Waiting Room & Learner Lab Check',
    location: 'Ground Floor Waiting Hub',
    description: 'Organizers verify your AWS Academy Learner Lab resource and confirm console access before moving to the hall.',
    highlight: true,
  },
  {
    time: '≈ 09:55',
    category: 'HALL MOVEMENT',
    title: 'Transition to Seminar Hall',
    location: '3rd Floor · Seminar Hall, MHSSCE',
    description: 'Participants move to the 3rd Floor Seminar Hall via staff lifts or central stairs to take their seats.',
  },
  {
    time: '10:00',
    category: 'MAIN PROGRAM',
    title: 'Opening Ceremony & Academic Addresses',
    location: 'Seminar Hall Stage',
    description: 'Welcome by AWS Student Builder Group, felicitations, and addresses by Principal & faculty leadership.',
  },
  {
    time: 'WORKSHOP',
    category: 'KEYNOTE BUILD',
    title: 'Speaker-Led Hands-On Cloud Odyssey',
    location: 'Main Technical Lab',
    description: 'Ms. Afreen Bano conducts the live technical workshop from EC2 compute to CloudFormation automation.',
    highlight: true,
  },
  {
    time: '11:40',
    category: 'COMPETITION',
    title: 'Live Cloud Trivia & Prize Distribution',
    location: 'Interactive Hall Challenge',
    description: 'Real-time cloud trivia challenge with the entire hall. Top scorers win official AWS builder swags.',
  },
  {
    time: '12:00',
    category: 'CONCLUSION',
    title: 'Vote of Thanks & Feedback',
    location: 'Seminar Hall',
    description: 'Closing acknowledgments and attendee feedback submission. Digital certificates dispatched next day.',
  },
];

export default function Act5Blueprint() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const items = timelineRef.current?.querySelectorAll('[data-timeline-item]');
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-timeline-item'));
            setActiveStep((prev) => Math.max(prev, index));
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0.2,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <StorySection
      id="story-blueprint"
      actNumber="05"
      actLabel="THE EVENT BLUEPRINT"
      eyebrow="SCHEDULE & FIELD REQUIREMENTS"
    >
      <div className="space-y-16 sm:space-y-24">
        {/* Header */}
        <div className="max-w-3xl reveal-init">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] leading-[1.06] text-white mb-6">
            From arrival desk to the final build.
          </h2>
          <p className="text-base sm:text-xl text-[#8e95a5] font-light leading-relaxed">
            One unbroken morning at MHSSCE. Time itself is the structural anchor: arrive at 09:30, verify your sandbox, and build until 12:00.
          </p>
        </div>

        {/* Master Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Chronological Spine (Time As The Primary Visual Language) */}
          <div className="lg:col-span-7 space-y-6 reveal-init">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs font-mono text-[#8e95a5] uppercase">
              <span>EVENT-DAY CHRONOLOGY</span>
              <span>{EVENT_DATE}</span>
            </div>

            <div ref={timelineRef} className="relative pl-8 sm:pl-10 border-l border-white/[0.08] space-y-12">
              {/* Dynamic Line Progress Indicator */}
              <div
                className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-[#00d26a] to-[#38bdf8] transition-all duration-500 ease-out pointer-events-none"
                style={{
                  height: `${Math.min(100, ((activeStep + 1) / BLUEPRINT_SCHEDULE.length) * 100)}%`,
                }}
              />

              {BLUEPRINT_SCHEDULE.map((item, idx) => {
                const isActive = idx <= activeStep;
                const isCurrent = idx === activeStep;
                return (
                  <div
                    key={idx}
                    data-timeline-item={idx}
                    className="relative group transition-opacity duration-300"
                    style={{ opacity: isActive ? 1 : 0.45 }}
                  >
                    {/* Node Dot */}
                    <div
                      className={`absolute -left-[35px] sm:-left-[43px] top-2 w-3 h-3 rounded-full border-2 border-[#080b11] transition-all duration-400 ${
                        isCurrent
                          ? 'bg-[#00d26a] ring-4 ring-[#00d26a]/30 scale-125'
                          : isActive
                          ? 'bg-[#00d26a]'
                          : 'bg-white/20'
                      }`}
                    />

                    <div className="space-y-2">
                      {/* Big Typographic Time Numerals */}
                      <div className="flex flex-wrap items-baseline gap-3">
                        <span className={`font-mono text-2xl sm:text-3xl font-medium tracking-tight transition-colors ${
                          isCurrent ? 'text-[#00d26a]' : isActive ? 'text-white' : 'text-[#8e95a5]'
                        }`}>
                          {item.time}
                        </span>
                        <span className="font-mono text-xs uppercase tracking-widest text-[#8e95a5]">
                          // {item.category}
                        </span>
                      </div>

                      <h3 className={`text-lg sm:text-xl font-medium tracking-tight transition-colors ${
                        isCurrent ? 'text-white' : 'text-white/80'
                      }`}>
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#8e95a5]">
                        <MapPin size={12} className={isActive ? 'text-[#00d26a]' : 'text-[#8e95a5]'} />
                        <span>{item.location}</span>
                      </div>

                      <p className="text-sm text-[#8e95a5] font-light leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Field Kit Specifications (Clean & Restrained) */}
          <div className="lg:col-span-5 space-y-6 reveal-init stagger-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#8e95a5] pb-4 border-b border-white/[0.08]">
              Builder Field Requirements
            </div>

            {/* Laptop Requirement */}
            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00d26a] uppercase">
                  <Laptop size={15} />
                  <span>NON-NEGOTIABLE</span>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#00d26a]/10 text-[#00d26a] border border-[#00d26a]/30">
                  REQUIRED
                </span>
              </div>
              <h4 className="text-xl font-light text-white">Personal Laptop & Charger</h4>
              <p className="text-sm text-[#8e95a5] font-light leading-relaxed">
                This is a live terminal build. Every participant needs their own laptop (Windows, macOS, or Linux) with a modern web browser installed.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#8e95a5] pt-2 border-t border-white/[0.04]">
                <BatteryCharging size={13} className="text-[#00d26a]" />
                <span>Bring your device fully charged + charging brick</span>
              </div>
            </div>

            {/* Verified Domain ID */}
            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00d26a] uppercase">
                <IdCard size={15} />
                <span>VERIFIED DOMAIN IDENTIFIER</span>
              </div>
              <h4 className="text-lg font-light text-white">College Email Address</h4>
              <p className="text-sm text-[#8e95a5] font-light leading-relaxed">
                Provide your official institutional email during registration and check-in:
              </p>
              <div className="p-3 rounded-lg bg-black/60 border border-white/[0.06] font-mono text-sm text-[#00d26a] flex items-center justify-between">
                <span>@mhssce.ac.in</span>
                <span className="text-[10px] text-[#8e95a5] uppercase">OFFICIAL DOMAIN</span>
              </div>
            </div>

            {/* Venue & Desk */}
            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
              <div className="text-xs font-mono text-[#00d26a] uppercase">
                // LOCATION SPECIFICATIONS
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-xs font-mono text-[#8e95a5] uppercase">CHECK-IN (09:30 AM)</div>
                  <div className="text-white font-medium">{CHECKIN_LOCATION}</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#8e95a5] uppercase">MAIN VENUE (10:00 AM)</div>
                  <div className="text-white font-medium">{VENUE}</div>
                </div>
              </div>
            </div>

            {/* Registration Cap */}
            <div className="p-7 rounded-2xl bg-[#00d26a]/[0.03] border border-[#00d26a]/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00d26a]">
                <Ticket size={14} />
                <span>LIMITED CAPACITY</span>
              </div>
              <div className="text-white font-medium text-base">
                100 Free Registrations Maximum
              </div>
              <p className="text-xs text-[#8e95a5] font-light leading-relaxed">
                Meetup capacity is capped at 100 RSVPs. Private WhatsApp group access will be distributed through Meetup post-registration.
              </p>
              <div className="text-xs font-mono text-[#00d26a] pt-1">
                Status: {MEETUP_STATUS}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StorySection>
  );
}
