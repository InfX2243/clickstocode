import StorySection from '../../components/editorial/StorySection';
import { Clock, MapPin, Laptop, BatteryCharging, IdCard, Ticket, CheckCircle2, ArrowRight } from 'lucide-react';
import { EVENT_DATE, EVENT_TIME, VENUE, CHECKIN_LOCATION, MEETUP_STATUS } from '../../constants/event';

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
    time: '09:30 AM',
    category: 'CHECK-IN OPENS',
    title: 'Arrival & QR Ticket Verification',
    location: 'Ground Floor · Near Staff Lift',
    description: 'Present your official Meetup QR pass at the Ground Floor help desk for badge verification.',
  },
  {
    time: '09:30 — 09:50 AM',
    category: 'SANDBOX SUPPORT',
    title: 'Waiting Room & Learner Lab Check',
    location: 'Ground Floor Waiting Hub',
    description: 'Organizers verify your AWS Academy Learner Lab resource and ensure you can access the console before entering the hall.',
    highlight: true,
  },
  {
    time: '≈ 09:55 AM',
    category: 'HALL MOVEMENT',
    title: 'Transition to Main Venue',
    location: '3rd Floor · Seminar Hall, MHSSCE',
    description: 'Move to the 3rd Floor Seminar Hall via staff elevators or central stairs to take your seats.',
  },
  {
    time: '10:00 AM',
    category: 'MAIN PROGRAM',
    title: 'Opening Ceremony & Academic Addresses',
    location: 'Seminar Hall Stage',
    description: 'Welcome by AWS Student Builder Group, felicitations, and addresses by college leadership.',
  },
  {
    time: 'WORKSHOP',
    category: 'KEYNOTE BUILD',
    title: 'Speaker-Led Hands-On Cloud Odyssey',
    location: 'Interactive Lab Environment',
    description: 'Ms. Afreen Bano conducts the live technical workshop from EC2 compute to CloudFormation automation.',
    highlight: true,
  },
  {
    time: '11:40 AM',
    category: 'COMPETITION',
    title: 'Live Cloud Trivia & Swag Prizes',
    location: 'Live Interactive Session',
    description: 'Test your retention in real time with fellow builders. High scorers win official swag rewards.',
  },
  {
    time: '12:00 PM',
    category: 'CONSTITUTION',
    title: 'Vote of Thanks & Feedback',
    location: 'Seminar Hall',
    description: 'Closing acknowledgments and attendee feedback submission. Digital certificates dispatched next day.',
  },
];

export default function Act5Blueprint() {
  return (
    <StorySection
      id="story-blueprint"
      actNumber="05"
      actLabel="THE EVENT BLUEPRINT"
      eyebrow="SCHEDULE & FIELD REQUIREMENTS"
    >
      <div className="space-y-16 sm:space-y-24">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] leading-[1.06] text-white mb-6">
            From arrival desk to the final build.
          </h2>
          <p className="text-base sm:text-xl text-[#8e95a5] font-light leading-relaxed">
            One seamless morning at MHSSCE. Arrive at 9:30 AM, verify your AWS sandbox, and take your seat in the Seminar Hall before the 10:00 AM keynote.
          </p>
        </div>

        {/* Two-Column Master Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Chronological Flow */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono text-[#8e95a5] uppercase">
              <span>CHRONOLOGICAL TIMELINE</span>
              <span>{EVENT_DATE}</span>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-white/[0.08] space-y-8">
              {BLUEPRINT_SCHEDULE.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full border-2 border-[#080b11] transition-all duration-300 ${
                    item.highlight ? 'bg-[#00d26a] ring-4 ring-[#00d26a]/20' : 'bg-white/40 group-hover:bg-white'
                  }`} />

                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-[#00d26a] tracking-wider">
                        {item.time}
                      </span>
                      <span className="text-white/20">·</span>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-[#8e95a5]">
                        {item.category}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-medium text-white tracking-tight">
                      {item.title}
                    </h4>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#8e95a5]">
                      <MapPin size={12} className="text-[#00d26a]" />
                      <span>{item.location}</span>
                    </div>

                    <p className="text-sm text-[#8e95a5] font-light leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Field Kit & Registration Rules */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#8e95a5] pb-3 border-b border-white/[0.08]">
              Builder Field Requirements
            </div>

            {/* Laptop Requirement Card */}
            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5 text-xs font-mono text-[#00d26a] uppercase">
                  <Laptop size={16} />
                  <span>NON-NEGOTIABLE GEAR</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#00d26a]/10 text-[#00d26a] border border-[#00d26a]/30">
                  MANDATORY
                </span>
              </div>

              <h4 className="text-xl font-light text-white mb-2">Personal Laptop & Charger</h4>
              <p className="text-sm text-[#8e95a5] font-light leading-relaxed mb-4">
                This is a live, hands-on terminal session. Every builder needs their own laptop running Windows, macOS, or Linux with a modern web browser installed.
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-[#8e95a5] pt-3 border-t border-white/[0.06]">
                <BatteryCharging size={14} className="text-[#00d26a]" />
                <span>Bring your device fully charged + charging brick</span>
              </div>
            </div>

            {/* Institutional Domain ID Card */}
            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
              <div className="flex items-center gap-2.5 text-xs font-mono text-[#00d26a] uppercase mb-3">
                <IdCard size={16} />
                <span>VERIFIED DOMAIN IDENTIFIER</span>
              </div>
              <h4 className="text-lg font-light text-white mb-2">College Email Address</h4>
              <p className="text-sm text-[#8e95a5] font-light leading-relaxed mb-4">
                Participants must use or provide their official institutional email during registration:
              </p>
              <div className="p-3 rounded-lg bg-black/50 border border-white/[0.06] font-mono text-sm text-[#00d26a] flex items-center justify-between">
                <span>@mhssce.ac.in</span>
                <span className="text-[10px] text-[#8e95a5] uppercase">OFFICIAL DOMAIN</span>
              </div>
            </div>

            {/* Venue & Desk Information */}
            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-mono text-[#00d26a] uppercase">
                <MapPin size={16} />
                <span>LOCATION SPECIFICATIONS</span>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-xs font-mono text-[#8e95a5] uppercase">CHECK-IN DESK (09:30 AM)</div>
                  <div className="text-white font-medium">{CHECKIN_LOCATION}</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#8e95a5] uppercase">MAIN VENUE (10:00 AM)</div>
                  <div className="text-white font-medium">{VENUE}</div>
                </div>
              </div>
            </div>

            {/* Registration Capacity Box */}
            <div className="p-7 rounded-2xl bg-gradient-to-br from-[#00d26a]/[0.08] via-transparent to-transparent border border-[#00d26a]/20 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00d26a]">
                <Ticket size={14} />
                <span>LIMITED TO 100 REGISTRATIONS</span>
              </div>
              <div className="text-white font-medium text-base">
                100% Free · RSVP Required on Meetup
              </div>
              <p className="text-xs text-[#8e95a5] font-light leading-relaxed">
                Meetup will accept exactly 100 RSVPs. Private WhatsApp community access will be distributed automatically through Meetup upon confirmation.
              </p>
              <div className="pt-2">
                <div className="text-xs font-mono text-white/60">
                  Status: <span className="text-[#00d26a]">{MEETUP_STATUS}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StorySection>
  );
}
