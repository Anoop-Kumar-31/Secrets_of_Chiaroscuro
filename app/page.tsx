import HeroSection from '@/components/HeroSection';
import CoreConflict from '@/components/CoreConflict';
import CharactersSection from '@/components/CharactersSection';
import WorldLoreSection from '@/components/WorldLoreSection';
import NovelDetailsSection from '@/components/NovelDetailsSection';
import ReaderFeedback from '@/components/ReaderFeedback';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CoreConflict />
      <NovelDetailsSection />
      <CharactersSection />
      <WorldLoreSection />
      <ReaderFeedback />

      {/* <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-glow-ember mb-6">More Coming Soon...</h3>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}
