import { ImageWithFallback } from "../figma/ImageWithFallback";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import styles from "../../styles/components/CaseStudy.module.css";

export function CaseStudy() {
  const { t } = useLanguage();
  return (
      <section id="case-study" className={styles.section}>
        {/* Background decoration */}
        <div className={styles.backgroundDecoration}></div>

        <div className={styles.container}>
          <motion.div
            className={styles.titleSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>{t("casestudy.title")}</h2>
            <div className={styles.titleUnderline}></div>
          </motion.div>

          <div className={styles.content}>
            {/* Left column - Text content */}
            <div className={styles.textContent}>
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className={styles.cardTitle}>{t("casestudy.challenge")}</h3>
                <p className={styles.cardDescription}>
                  {t("casestudy.challenge.description")}
                </p>
              </motion.div>

              <motion.div
                className={styles.card}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h3 className={styles.cardTitle}>{t("casestudy.solution")}</h3>
                <p className={styles.cardDescription}>
                  {t("casestudy.solution.description")}
                </p>
              </motion.div>

              <motion.div
                className={styles.card}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <h3 className={styles.cardTitle}>{t("casestudy.results")}</h3>
                <div className={styles.resultsList}>
                  {[
                    t("casestudy.result1"),
                    t("casestudy.result2"),
                    t("casestudy.result3"),
                  ].map((result, index) => (
                    <motion.div
                      key={index}
                      className={styles.resultItem}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 1.4 + index * 0.2 }}
                    >
                      <CheckCircle className={styles.resultIcon} />
                      <p className={styles.resultText}>{result}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right column - Images */}
            <motion.div
              className={styles.imagesContent}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={`${styles.imageContainer} ${styles.largeImage}`}>
                <div className={styles.imageOverlay}></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1630522790545-67ad2cb700fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwbGFwdG9wfGVufDF8fHx8MTc2MDg4MDQ0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={t("casestudy.image1.alt")}
                  className={styles.image}
                />
              </div>
              <div className={`${styles.imageContainer} ${styles.smallImage}`}>
                <div className={styles.imageOverlay}></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1649769425782-8cdb757da2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbHV4dXJ5JTIwaG9tZXxlbnwxfHx8fDE3NjA4MzMxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={t("casestudy.image2.alt")}
                  className={styles.image}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}
