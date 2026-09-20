import StorySection from '../../components/editorial/StorySection';
import { Award, Sparkles, CheckCircle2, Gift } from 'lucide-react';

const SWAGS = [
  {
    name: 'AWS SBG Builder Diary',
    spec: 'Hardbound chapter journal for architectural designs & notes',
    tag: 'OFFICIAL JOURNAL',
    image: '/images/swags-diary.png',
  },
  {
    name: 'AWS Cloud Precision Pen',
    spec: 'Branded signature instrument for workshop planning',
    tag: 'SIGNATURE TOOL',
    image: '/images/swags-pen.png',
  },
  {
    name: 'AWS Builder Holographic Pack',
    spec: 'Custom laptop and developer workstation decals',
    tag: 'DECAL PACK',
    image: '/images/swags-stickers.png',
  },
];

export default function Act6Honors() {
  return (
    <StorySection
      id="story-honors"
      actNumber="06"
      actLabel="RECOGNITION & HONORS"
      eyebrow="CREDENTIALS & WORKSHOP PERKS"
    >
      <div className="space-y-16 sm:space-y-24">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] leading-[1.06] text-white mb-6">
            Build it. Verify it. Leave with tangible proof.
          </h2>
          <p className="text-base sm:text-xl text-[#8e95a5] font-light leading-relaxed">
            The workshop does not end when your cloud stack deploys. Every participant leaves with an authenticated digital credential and the opportunity to compete for official builder swags.
          </p>
        </div>

        {/* Certificate Feature Banner (Editorial Stagger) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d26a]/10 border border-[#00d26a]/30 text-xs font-mono text-[#00d26a]">
              <Award size={13} />
              <span>GUARANTEED DIGITAL CREDENTIAL</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              Official Digital Certificate of Attendance
            </h3>

            <p className="text-sm sm:text-base text-[#8e95a5] font-light leading-relaxed">
              Every participant who checks in and completes the hands-on workshop receives a verified digital certificate. Dispatched directly to your registered email address by the next day.
            </p>

            <div className="space-y-2 pt-2 text-xs font-mono text-[#8e95a5]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#00d26a]" />
                <span className="text-white">Delivered by the next day to your registered email</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#00d26a]" />
                <span>Issued by AWS Student Builder Group at MHSSCE</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0c1017] shadow-2xl shadow-black/80 p-2 group">
              <img
                src="/images/certificate.png"
                alt="Digital Certificate Sample Preview"
                className="w-full h-full object-cover rounded-xl filter contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                <div className="text-[11px] font-mono text-white/90">
                  // VERIFIED CREDENTIAL PREVIEW
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Cloud Trivia & Official Swags */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Trivia Challenge Column */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00d26a] uppercase tracking-wider">
              <Sparkles size={15} />
              <span>LIVE PARTICIPATION</span>
            </div>
            <h4 className="text-2xl font-light text-white tracking-tight">
              Cloud Trivia Showdown
            </h4>
            <p className="text-sm text-[#8e95a5] font-light leading-relaxed">
              Before concluding, test your retention of EC2, IAM, Session Manager, and CloudFormation in an interactive live challenge with the entire hall.
            </p>
            <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-[#8e95a5] space-y-1.5">
              <div>• Instant real-time leaderboard</div>
              <div>• Collaborative builder questions</div>
              <div>• Official swags awarded to top performers</div>
            </div>
          </div>

          {/* Builder Gear Gallery */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono text-[#8e95a5] uppercase">
              <span>EXCLUSIVE BUILDER REWARDS</span>
              <span>TOP CONTRIBUTORS & TRIVIA</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {SWAGS.map((swag, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.16] transition-all group"
                >
                  <div className="aspect-square rounded-xl bg-black/40 border border-white/[0.06] mb-4 overflow-hidden p-4 flex items-center justify-center">
                    <img
                      src={swag.image}
                      alt={swag.name}
                      className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-[10px] font-mono uppercase text-[#00d26a] tracking-widest mb-1">
                    {swag.tag}
                  </div>
                  <div className="text-sm font-medium text-white mb-1">{swag.name}</div>
                  <p className="text-xs text-[#8e95a5] font-light leading-relaxed">{swag.spec}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StorySection>
  );
}
