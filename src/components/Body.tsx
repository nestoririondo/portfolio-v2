import { About } from "./Body/About";
import { Approach } from "./Body/Approach";
import { CaseStudy } from "./Body/CaseStudy";
import { Contact } from "./Body/Contact";
import { Hero } from "./Body/Hero";
import { ProblemRecognition } from "./Body/ProblemRecognition";
import { Services } from "./Body/Services";
import { useScrollHash } from "../hooks/useScrollHash";

export const Body = () => {
  useScrollHash();

  return (
    <main>
      <Hero />
      <ProblemRecognition />
      <Services />
      <Approach />
      <CaseStudy />
      <About />
      <Contact />
    </main>
  );
};
