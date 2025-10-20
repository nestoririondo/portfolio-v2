import { About } from "./Body/About";
import { Approach } from "./Body/Approach";
import { CaseStudy } from "./Body/CaseStudy";
import { Contact } from "./Body/Contact";
import { Hero } from "./Body/Hero";
import { ProblemRecognition } from "./Body/ProblemRecognition";
import { Services } from "./Body/Services";
import { useScrollHash } from "../hooks/useScrollHash";
import styles from "../styles/components/Body.module.css";

export const Body = () => {
  // This hook will automatically update the URL hash based on scroll position
  useScrollHash();

  return (
    <main className={styles.main}>
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
