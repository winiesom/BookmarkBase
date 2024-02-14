import Overview from '@/pages/overview';
import Hero from '../components/Hero';

export default function Home() {
  return (
      <main className="overflow-hidden">
          <Hero />

          <div className="home__filters">
            <Overview />
          </div>
      </main>
  );
}
