import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import styles from "../styles/components/Hero.module.css";

export function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.heroSection}>
      {/* Background Image Container */}
      <div className={styles.imageContainer}>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5fDB8MXxhbGx8fHx8fHx8fDE2MjM4MDY4OTg&ixlib=rb-4.0.3&q=80&w=1920"
          alt="Modern workspace"
          className={styles.heroImage}
        />
        {/* Multiple overlay layers for depth */}
        <div className={styles.overlay1}></div>
        <div className={styles.overlay2}></div>

        {/* Main Content positioned absolutely within the image container */}
        <div className={styles.contentContainer}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Hero text with glassmorphism background */}
            <motion.div
              className={styles.glassCard}
              initial={{
                opacity: 0,
                scale: 0.95,
                backdropFilter: "blur(0px)",
                background: "rgba(255, 255, 255, 0)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                backdropFilter: "blur(40px)",
                background: "rgba(255, 255, 255, 0.05)",
              }}
              transition={{
                duration: 2.5,
                delay: 0.1,
                ease: [0.25, 0.1, 0.25, 1],
                backdropFilter: { duration: 3.0, ease: [0.23, 1, 0.32, 1] },
              }}
            >
              <motion.div
                className={styles.titleContainer}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 1.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <h1 className={styles.title}>{t("hero.title")}</h1>
                <p className={styles.subtitle}>{t("hero.subtitle")}</p>
              </motion.div>
            </motion.div>

            {/* Feature highlights with enhanced glassmorphism */}
            <motion.div
              className={styles.featuresGrid}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Code />
                </div>
                <span className={styles.featureText}>Custom Code</span>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Zap />
                </div>
                <span className={styles.featureText}>Fast Delivery</span>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Palette />
                </div>
                <span className={styles.featureText}>Modern Design</span>
              </div>
            </motion.div>

            {/* CTA Button with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button onClick={scrollToContact} className={styles.ctaButton}>
                {t("hero.cta")}
                <ArrowRight />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
