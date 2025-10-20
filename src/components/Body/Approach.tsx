import { Target, MessageSquare, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import styles from "../../styles/components/Approach.module.css";

const principles = [
  {
    icon: Target,
    titleKey: "approach.business.title",
    descriptionKey: "approach.business.description",
  },
  {
    icon: MessageSquare,
    titleKey: "approach.communication.title",
    descriptionKey: "approach.communication.description",
  },
  {
    icon: Award,
    titleKey: "approach.professional.title",
    descriptionKey: "approach.professional.description",
  },
  {
    icon: ShieldCheck,
    titleKey: "approach.lasting.title",
    descriptionKey: "approach.lasting.description",
  },
];

export function Approach() {
  const { t } = useLanguage();

  return (
      <section id="approach" className={styles.section}>
        {/* Background decoration */}

        <div className={styles.container}>
          <motion.div
            className={styles.titleSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>{t("approach.title")}</h2>
            <div className={styles.titleUnderline}></div>
          </motion.div>

          <div className={styles.principlesGrid}>
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  className={styles.principleCard}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={styles.principleIcon}>
                    <Icon />
                  </div>
                  <h4 className={styles.principleTitle}>
                    {t(principle.titleKey)}
                  </h4>
                  <p className={styles.principleDescription}>
                    {t(principle.descriptionKey)}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Visual separator */}
          <motion.div
            className={styles.separator}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className={styles.separatorLine}></div>
          </motion.div>
        </div>
      </section>
  );
}
