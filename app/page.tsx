import TopNavigation from "./components/navigation/header/TopNavigation";
import Footer from "./components/navigation/footer/Footer";
import HeroSection from "./components/landing/sections/HeroSection";

export default function Home() {
  return (
    <main>
      <TopNavigation />
      <HeroSection />
      <Footer />
    </main>
  );
}
