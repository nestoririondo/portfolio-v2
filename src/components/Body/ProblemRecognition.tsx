import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import styles from "../../styles/components/ProblemRecognition.module.css";

const problemKeys = [
  "problems.template",
  "problems.manual",
  "problems.integration",
  "problems.design",
  "problems.performance",
  "problems.limited",
];

export function ProblemRecognition() {
  const { t } = useLanguage();

  return (
      <section id="problems" className={styles.section}>
        {/* Background decoration */}
        {/* <div className={styles.backgroundDecoration}></div> */}

        <div className={styles.container}>
          <motion.div
            className={styles.titleSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>{t("problems.title")}</h2>
            <div className={styles.titleUnderline}></div>
          </motion.div>

          <div className={styles.problemsGrid}>
            {problemKeys.map((problemKey, index) => (
              
              <motion.div
                key={index}
                className={styles.problemCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.problemIcon}>
                  <AlertTriangle />
                </div>
                <p className={styles.problemText}>{t(problemKey)}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.conclusion}>
            <p className={styles.conclusionText}>{t("problems.conclusion")}</p>
            <div className={styles.conclusionSeparator}></div>
          </div>
        </div>
      </section>
  );
}
