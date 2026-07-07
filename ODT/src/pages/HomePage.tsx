import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';
import ClientsSection from '../components/ClientsSection';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import MarqueeSection from '../components/MarqueeSection';
import ShowcaseSection from '../components/ShowcaseSection';
import SolutionsHighlightSection from '../components/SolutionsHighlightSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <ClientsSection />
        <ShowcaseSection />
        <AboutSection />
        <SolutionsHighlightSection />
        <TeamSection />
        <TestimonialsSection />
        <MarqueeSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
