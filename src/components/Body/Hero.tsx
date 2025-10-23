import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { motion } from "framer-motion";
import { StatusIndicator } from "../ui/StatusIndicator";
import { scrollToContact } from "../../utils/scroll";
import styles from "../../styles/components/Hero.module.css";

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className={styles.heroWrapper}>
      <section id="hero" className={styles.heroSection}>
        <div className={styles.content}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {t("hero.title")}
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
              <MessageCircle />
              <span className={styles.ctaMainText}>{t("hero.cta")}</span>
              <ArrowRight className={styles.ctaArrow} />
            </button>

            <motion.div
              className={styles.statusIndicator}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: "backIn" }}
            >
              <StatusIndicator />
              {t("hero.status")}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
