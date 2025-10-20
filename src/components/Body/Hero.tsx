import { ArrowRight, Terminal } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { motion } from "framer-motion";
import styles from "../../styles/components/Hero.module.css";

export function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.heroSection}>
      {/* Subtle grid overlay */}
      <div className={styles.gridOverlay}></div>

      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Custom websites
          <span className={styles.titleAccent}>that actually work</span>
          for your business
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <button onClick={scrollToContact} className={styles.ctaButton}>
            <Terminal />
            {t("hero.cta")}
            <ArrowRight />
          </button>

          <div className={styles.statusIndicator}>
            <div className={styles.statusDot}></div>
            Available for select projects
          </div>
        </motion.div>
      </div>
    </section>
  );
}
