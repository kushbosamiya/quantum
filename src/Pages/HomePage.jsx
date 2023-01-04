import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import PerformanceSection from "../Components/PerformanceSection/PerformanceSection";
import AddonPerformance from "../Components/PerformanceSection/AddonPerformance";
import ProductSection from "../Components/ProductSection";
import AboutSection from "../Components/AboutSection";
import FooterSection from "../Components/FooterSection";
import ContactSection from "../Components/ContactSection";
import FooterSec from "../Components/FooterSec";

import { AnimatePresence, motion } from "framer-motion";
const HomePage = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 4 }}
        >
          <Navbar />
          <HeroSection />
          <PerformanceSection />
          <AddonPerformance />
          <ProductSection />
          <AboutSection />
          {/* <FooterSection /> */}
          <ContactSection />
          <FooterSec />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default HomePage;

// bg
// #E2E2E2
