import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-orange py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Web Wizards
        </h1>
        <p className="text-lg text-white mb-8">
          Where magic happens through code
        </p>
        <Link
          href="/explore"
          className="px-6 py-3 bg-white text-black font-medium rounded-full uppercase hover:bg-orange hover:text-white transition duration-300"
        >
          Explore More
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
