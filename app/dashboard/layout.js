"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

const ContentLayout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default ContentLayout;
