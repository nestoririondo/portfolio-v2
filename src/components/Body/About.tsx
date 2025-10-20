import { useLanguage } from "../../contexts/LanguageContext";
import { motion } from "framer-motion";
import styles from "../../styles/components/About.module.css";

const skills = [
  "React", "TypeScript", "Node.js", "API Design", 
  "Database Architecture", "System Integration", "Performance Optimization"
];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.titleSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>About</h2>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.imageSection}>
            <div className={styles.profileImage}>
              NI
            </div>
            <div className={styles.profileLabel}>
              Software Developer<br/>
              Berlin, Germany
            </div>
          </div>

          <div className={styles.textSection}>
            <p className={styles.description}>
              {t("about.description1")}
            </p>
            
            <div className={styles.skillsContainer}>
              {skills.map((skill, index) => (
                <span key={index} className={styles.skillBadge}>
                  {skill}
                </span>
              ))}
            </div>

            <div className={styles.statusRow}>
              <div className={styles.statusDot}></div>
              <span className={styles.statusText}>
                Currently accepting select projects
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}