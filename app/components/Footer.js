import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex justify-between">
        <div className="footer-links">
          <Link href="/contact" className="footer-link">
            Contact Us
          </Link>
          <Link href="/social-media" className="footer-link">
            Social Media
          </Link>
        </div>
        <div className="footer-logo">
          <span className="font-semibold text-lg">Web Wizards</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
