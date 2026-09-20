import CinematicTimeline from '../components/cinematic/CinematicTimeline';
import EventHero from '../sections/EventHero';
import EventOverviewSection from '../sections/EventOverviewSection';
import AudienceSection from '../sections/AudienceSection';
import LearningSection from '../sections/LearningSection';
import HandsOnSection from '../sections/HandsOnSection';
import ArrivalSection from '../sections/ArrivalSection';
import RegistrationSection from '../sections/RegistrationSection';
import DayTimelineSection from '../sections/DayTimelineSection';
import RequirementsSection from '../sections/RequirementsSection';
import SpeakerSection from '../sections/SpeakerSection';
import RewardsSection from '../sections/RewardsSection';
import SponsorSection from '../sections/SponsorSection';
import SpecialThanksSection from '../sections/SpecialThanksSection';
import FaqSection from '../sections/FaqSection';
import FinalCallSection from '../sections/FinalCallSection';

export default function Home() {
  return (
    <CinematicTimeline>
      <EventHero />
      <EventOverviewSection />
      <AudienceSection />
      <LearningSection />
      <HandsOnSection />
      <ArrivalSection />
      <RegistrationSection />
      <DayTimelineSection />
      <RequirementsSection />
      <SpeakerSection />
      <RewardsSection />
      <SponsorSection />
      <SpecialThanksSection />
      <FaqSection />
      <FinalCallSection />
    </CinematicTimeline>
  );
}
