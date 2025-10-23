import { useLanguage } from "../../contexts/LanguageContext";
import { motion } from "framer-motion";
import { StatusIndicator } from "../ui/StatusIndicator";
import { SKILLS } from "../../constants/skills";
import styles from "../../styles/components/About.module.css";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className={styles.container}>
        <motion.div
          className={styles.titleSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>{t("about.title")}</h2>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.imageSection}>
            <div className={styles.profileImage}>NI</div>
            <div className={styles.profileLabel}>
              {t("about.profile.role")}
              <br />
              {t("about.profile.location")}
            </div>
          </div>

          <div className={styles.textSection}>
            <p className={styles.description}>{t("about.description1")}</p>

            <div className={styles.skillsContainer}>
              {SKILLS.map((skill, index) => (
                <span key={index} className={styles.skillBadge}>
                  {skill}
                </span>
              ))}
            </div>

            <div className={styles.statusRow}>
              <StatusIndicator />
              <span className={styles.statusText}>{t("about.status")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
