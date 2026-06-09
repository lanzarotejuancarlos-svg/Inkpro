"use client";
import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import StylesSection from "./StylesSection";
import HowSection from "./HowSection";
import SocialSection from "./SocialSection";
import PricingSection from "./PricingSection";
import DoDont from "./DoDont";
import MobileSection from "./MobileSection";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";

export default function Landing({ onApp }: { onApp: () => void }) {
  return (
    <div>
      <Nav onApp={onApp} />
      <Hero onApp={onApp} />
      <StylesSection />
      <HowSection />
      <SocialSection />
      <PricingSection onApp={onApp} />
      <DoDont />
      <MobileSection />
      <FAQ />
      <FinalCTA onApp={onApp} />
      <Footer />
    </div>
  );
}
