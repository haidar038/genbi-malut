"use client";

import { useScrollReveal, useCounterAnimation, useSmoothScroll } from "@/hooks";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import VisionMission from "@/components/sections/VisionMission";
import Programs from "@/components/sections/Programs";
import Commissariats from "@/components/sections/Commissariats";
import Structure from "@/components/sections/Structure";
import Achievements from "@/components/sections/Achievements";
import Gallery from "@/components/sections/Gallery";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  useScrollReveal();
  useCounterAnimation();
  useSmoothScroll();

  return (
    <>
      <a
        href="#main-content"
        className="skip-link font-display text-sm tracking-wide"
      >
        Lewati ke Konten Utama
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Marquee />
        <About />
        <VisionMission />
        <Programs />
        <Commissariats />
        <Structure />
        <Achievements />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}