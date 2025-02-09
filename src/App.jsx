import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Tecnologies from "./components/Tecnologies";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact1 from "./components/Contact";
import Shortcourse from "./components/Shortcourse";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Tecnologies />
        <Education />
        <Shortcourse />
        <Projects />
        <Contact1 />
      </div>
      <Analytics />
    </div>
  );
};

export default App;
