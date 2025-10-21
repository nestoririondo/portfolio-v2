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
