import HomeText from '@/components/homepage/HomeText';
import Photo from '@/components/homepage/Photo';
import Stats from '@/components/homepage/Stats';

export default function Home() {
  return (
    <main className="h-full container mx-auto px-xl">
      <section>
        <div className="flex flex-col lg:flex-row lg:gap-xl items-center justify-between lg:pt-8 lg:pb-24">
          {/* Left */}
          <HomeText />
          {/* Right */}
          <div className="order-1 lg:order-3 py-xl lg:py-0">
            <Photo />
          </div>
        </div>
      </section>
      <Stats />
    </main>
  );
}
