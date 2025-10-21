import { X } from "lucide-react";
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
        <div className={styles.container}>
          <div className={styles.titleSection}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.title}>{t("problems.title")}</h2>
              <div className={styles.titleBorder}></div>
            </div>
            <div className={styles.titleAccent}>PROBLEMS</div>
          </div>

          <div className={styles.problemsGrid}>
            {problemKeys.map((problemKey, index) => (
              <div key={index} className={styles.problemCard}>
                <div className={styles.problemHeader}>
                  <div className={styles.problemIcon}>
                    <X />
                  </div>
                  <div className={styles.problemNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className={styles.problemContent}>
                  <p className={styles.problemText}>{t(problemKey)}</p>
                </div>
                <div className={styles.problemBorder}></div>
              </div>
            ))}
          </div>

          <div className={styles.conclusion}>
            <div className={styles.conclusionBox}>
              <div className={styles.conclusionHeader}>
                <div className={styles.conclusionIcon}>!</div>
                <div className={styles.conclusionLabel}>SOLUTION NEEDED</div>
              </div>
              <p className={styles.conclusionText}>{t("problems.conclusion")}</p>
            </div>
          </div>
        </div>
      </section>
  );
}
