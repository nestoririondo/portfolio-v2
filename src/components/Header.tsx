import { Moon, Sun, Globe, Terminal } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import styles from "../styles/components/Header.module.css";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const cycleLanguage = () => {
    const languages = ["en", "de", "es"] as const;
    const currentIndex = languages.indexOf(language as any);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex] as any);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.history.pushState(null, "", window.location.pathname);
  };

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    >
      <div className={styles.container}>
        <div className={styles.logo} onClick={scrollToTop}>
          <span className={styles.logoYellow}>nestor</span>
          <span className={styles.logoGray}>iriondo</span>
        </div>

        <div className={styles.buttonsContainer}>
          <button onClick={scrollToContact} className={styles.contactButton}>
            <Terminal />
            <div className={styles.contactText}>Contact</div>
          </button>

          <button
            onClick={cycleLanguage}
            className={styles.iconButton}
            title={t("language.toggle")}
          >
            <Globe />
            {language.toUpperCase()}
          </button>

          <button
            onClick={toggleTheme}
            className={styles.iconButton}
            title={t("theme.toggle")}
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </div>
      </div>
    </motion.header>
  );
}