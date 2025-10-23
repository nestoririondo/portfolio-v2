import { Target, MessageSquare, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import styles from "../../styles/components/Approach.module.css";

const principles = [
  {
    icon: Target,
    titleKey: "approach.business.title",
    descriptionKey: "approach.business.description",
    number: "01",
  },
  {
    icon: MessageSquare,
    titleKey: "approach.communication.title",
    descriptionKey: "approach.communication.description",
    number: "02",
  },
  {
    icon: Award,
    titleKey: "approach.professional.title",
    descriptionKey: "approach.professional.description",
    number: "03",
  },
  {
    icon: ShieldCheck,
    titleKey: "approach.lasting.title",
    descriptionKey: "approach.lasting.description",
    number: "04",
  },
];

export function Approach() {
  const { t } = useLanguage();

  return (
    <section id="approach" className="section">
      <div className={styles.container}>
        <motion.div
          className={styles.titleSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>My Approach</h2>
        </motion.div>

        <motion.div
          className={styles.principlesGrid}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div key={index} className={styles.principleCard}>
                <div className={styles.principleNumber}>{principle.number}</div>
                <div className={styles.principleIcon}>
                  <Icon />
                </div>
                <h4 className={styles.principleTitle}>
                  {t(principle.titleKey)}
                </h4>
                <p className={styles.principleDescription}>
                  {t(principle.descriptionKey)}
                </p>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          className={styles.statement}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className={styles.statementText}>
            Professional development experience meets creative problem-solving
          </p>
        </motion.div>
      </div>
    </section>
  );
}