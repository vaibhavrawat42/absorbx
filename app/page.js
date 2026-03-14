import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import SecondSection from '@/components/SecondSection';
import ThirdSection from '@/components/ThirdSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#100f0f]">
      <NavBar />
      <main className="md:max-w-[1440px] md:mx-auto">
        <HeroSection />
        <SecondSection />
        <ThirdSection />
      </main>
      <FooterSection />
    </div>
  );
}
