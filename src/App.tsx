import { Hero } from "./components/Hero";
import { ProblemRecognition } from "./components/ProblemRecognition";
import { Services } from "./components/Services";
import { Approach } from "./components/Approach";
import { CaseStudy } from "./components/CaseStudy";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Body } from "./components/Body";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header />
        <Body />
        <Toaster />
      </LanguageProvider>
    </ThemeProvider>
  );
}
