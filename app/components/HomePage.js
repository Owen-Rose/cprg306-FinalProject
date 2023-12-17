import React from "react";
import Link from "next/link";
import HeroSection from "./HeroSection";
import Header from "./Header";
import Footer from "./Footer";
import CallToAction from "./CallToAction";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;
