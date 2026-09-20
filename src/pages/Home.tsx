import EditorialNav from '../components/editorial/EditorialNav';
import Act1Hero from '../sections/story/Act1Hero';
import Act2Manifesto from '../sections/story/Act2Manifesto';
import Act3Odyssey from '../sections/story/Act3Odyssey';
import Act4Keynote from '../sections/story/Act4Keynote';
import Act5Blueprint from '../sections/story/Act5Blueprint';
import Act6Honors from '../sections/story/Act6Honors';
import Act7Patronage from '../sections/story/Act7Patronage';
import Act8Inquiries from '../sections/story/Act8Inquiries';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#080b11] text-[#dfe2f1] selection:bg-[#00d26a]/30 selection:text-[#00ff88]">
      {/* Floating Editorial Navigation */}
      <EditorialNav />

      {/* The 8 Narrative Acts of the Event Story */}
      <main className="relative flex flex-col w-full overflow-x-clip">
        <Act1Hero />
        <Act2Manifesto />
        <Act3Odyssey />
        <Act4Keynote />
        <Act5Blueprint />
        <Act6Honors />
        <Act7Patronage />
        <Act8Inquiries />
      </main>
    </div>
  );
}
