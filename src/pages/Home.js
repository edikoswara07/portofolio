import React from "react";
import About from "../components/About.js";
import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
