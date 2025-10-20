import { Code, Plug, Wrench } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { motion } from "framer-motion";
import styles from "../../styles/components/Services.module.css";

const services = [
  {
    icon: Code,
    titleKey: "services.custom.title",
    descriptionKey: "services.custom.description",
    number: "01",
  },
  {
    icon: Plug,
    titleKey: "services.api.title", 
    descriptionKey: "services.api.description",
    number: "02",
  },
  {
    icon: Wrench,
    titleKey: "services.consulting.title",
    descriptionKey: "services.consulting.description", 
    number: "03",
  },
];

const techStack = [
  "React", "TypeScript", "Node.js", "Next.js", "API Integration", 
  "Database Design", "Performance Optimization", "Testing"
];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.titleSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Services</h2>
        </motion.div>

        <motion.div
          className={styles.servicesGrid}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceNumber}>{service.number}</div>
                <div className={styles.serviceIcon}>
                  <Icon />
                </div>
                <h3 className={styles.serviceTitle}>{t(service.titleKey)}</h3>
                <p className={styles.serviceDescription}>
                  {t(service.descriptionKey)}
                </p>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          className={styles.techSpecs}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.techList}>
            {techStack.map((tech, index) => (
              <span key={index} className={styles.techItem}>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}