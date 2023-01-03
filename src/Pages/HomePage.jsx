import React from "react";
import Navbar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import PerformanceSection from "../Components/PerformanceSection/PerformanceSection";
import AddonPerformance from "../Components/PerformanceSection/AddonPerformance";
import ProductSection from "../Components/ProductSection";
import AboutSection from "../Components/AboutSection";
import FooterSection from "../Components/FooterSection";
import ContactSection from "../Components/ContactSection";
import FooterSec from "../Components/FooterSec";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PerformanceSection />
      <AddonPerformance />
      <ProductSection />
      <AboutSection />
      {/* <FooterSection /> */}
      <ContactSection />
      <FooterSec />
    </>
  );
};

export default HomePage;

// bg
// #E2E2E2
