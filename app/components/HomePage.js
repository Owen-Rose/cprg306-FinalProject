import React from "react";
import Link from "next/link";
import HeroSection from "./HeroSection";
import Header from "./Header";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default HomePage;
