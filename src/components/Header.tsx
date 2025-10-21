import { Globe, MessageCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import { CircleBlurThemeToggle } from "./CircleBlurThemeToggle";
import { scrollToContact, scrollToTop } from "../utils/scroll";
import styles from "../styles/components/Header.module.css";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  const cycleLanguage = () => {
    const languages = ["en", "de", "es"] as const;
    const currentIndex = languages.indexOf(language as any);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex] as any);
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
          <button
            onClick={cycleLanguage}
            className={styles.iconButton}
            title={t("language.toggle")}
          >
            <Globe />
            {language.toUpperCase()}
          </button>

          <CircleBlurThemeToggle 
            start="center"
            title={t("theme.toggle")}
          />

          <button onClick={scrollToContact} className={styles.contactButton}>
            <MessageCircle />
            <div className={styles.contactText}>{t("nav.contact")}</div>
          </button>
        </div>
      </div>
    </motion.header>
  );
}