import HeroSection from '@/components/HeroSection';
import CharactersSection from '@/components/CharactersSection';
import WorldLoreSection from '@/components/WorldLoreSection';
import NovelDetailsSection from '@/components/NovelDetailsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <NovelDetailsSection />
      <CharactersSection />
      <WorldLoreSection />

      {/* Temporary placeholder sections */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-glow-ember mb-6">Coming Soon</h2>
          <div className="section-divider" />
          <p className="text-muted">
            Gallery
          </p>
        </div>
      </section>
    </main>
  );
}
