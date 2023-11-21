import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Web Wizards
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange mr-4"
            >
              Home
            </Link>
            <Link
              href=",/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange mr-4"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange mr-4"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
