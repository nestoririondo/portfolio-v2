import { About } from "./About";
import { Approach } from "./Approach";
import { CaseStudy } from "./CaseStudy";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { ProblemRecognition } from "./ProblemRecognition";
import { Services } from "./Services";
import { useScrollHash } from "../hooks/useScrollHash";
import styles from '../styles/components/Body.module.css';

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
