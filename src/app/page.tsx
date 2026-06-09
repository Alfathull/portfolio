"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MetricsBand from "@/components/MetricsBand";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CursorGlow />
      <Navbar />
      <Hero />
      <hr className="border-t border-border mx-5 md:mx-10" />
      <About />
      <MetricsBand />
      <Stack />
      <Projects />
      <hr className="border-t border-border mx-5 md:mx-10" />
      <Experience />
      <hr className="border-t border-border mx-5 md:mx-10" />
      <Education />
      <hr className="border-t border-border mx-5 md:mx-10" />
      <Contact />
      <Footer />
    </>
  );
}
