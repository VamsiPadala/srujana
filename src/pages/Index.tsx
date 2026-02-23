import { Link } from "react-router-dom";
import HeroSlider from "@/components/HeroSlider";
import EventsSection from "@/components/EventsSection";
import HighlightsSection from "@/components/HighlightsSection";
import Footer from "@/components/Footer";
import useScrollReveal from "@/hooks/useScrollReveal";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { CalendarDays, MapPin } from "lucide-react";

const Index = () => {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroSlider images={[hero1, hero2, hero3]} />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-accent text-sm md:text-base font-semibold uppercase tracking-[0.3em] mb-4 animate-fade-in">
            Innovation → Impact → Nation
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold mb-4 glow-text-orange animate-fade-up text-foreground">
            SRUJANA <span className="gradient-text">2026</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-muted-foreground text-sm md:text-base mb-8" style={{ animationDelay: "0.2s" }}>
            <span className="flex items-center gap-1.5">
              <CalendarDays size={16} className="text-primary" />
              3rd – 5th April 2026
            </span>
            <span className="hidden sm:block text-border">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin size={16} className="text-primary" />
              BITS, Visakhapatnam
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/register"
              className="px-8 py-3 rounded-lg font-semibold bg-primary text-primary-foreground glow-button text-base"
            >
              Register Now
            </Link>
            <a
              href="#about"
              className="px-8 py-3 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors duration-200 text-base"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-fade-in container mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">About the Fest</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">What is SRUJANA?</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            SRUJANA 2026 is a national-level innovation fest organized by Baba Institute of Technology & Sciences (BITS), Visakhapatnam.
            It brings together students, researchers, and innovators from across India to showcase working models, present research papers,
            and compete in high-energy hackathons — all under one roof. Whether you build, code, or create, SRUJANA is your stage.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="container mx-auto px-4 md:px-6 pb-20 md:pb-28">
        <EventsSection />
      </section>

      {/* Highlights */}
      <section className="container mx-auto px-4 md:px-6 pb-20 md:pb-28">
        <HighlightsSection />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
