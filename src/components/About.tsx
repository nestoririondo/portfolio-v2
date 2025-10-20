import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import { MotionSection } from "./MotionSection";
import { motion } from "framer-motion";
import styles from "../styles/components/About.module.css";

export function About() {
  const { t } = useLanguage();

  return (
    <MotionSection>
      <section id="about" className={styles.section}>
        {/* Background */}
        <div className={styles.backgroundDecoration}></div>
        <div className={styles.backgroundAccent}></div>

        <div className={styles.container}>
          <motion.div
            className={styles.titleSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>{t("about.title")}</h2>
            <div className={styles.titleUnderline}></div>
          </motion.div>

          <div className={styles.content}>
            <motion.div
              className={styles.imageContainer}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.imageOverlay}></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwODg4NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer workspace"
                className={styles.image}
              />

              {/* Decorative border */}
              <div className={styles.decorativeBorder}></div>
            </motion.div>

            <div className={styles.textContainer}>
              <div className={styles.textContent}>
                <motion.p
                  className={styles.description}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  {t("about.description1")}
                </motion.p>

                <motion.p
                  className={styles.description}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  {t("about.description2")}
                </motion.p>
              </div>

              {/* Skills badges */}
              <motion.div
                className={styles.skillsContainer}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.7 }}
              >
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "APIs",
                  "Design Systems",
                ].map((skill) => (
                  <span key={skill} className={styles.skillBadge}>
                    {skill}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </MotionSection>
  );
}
