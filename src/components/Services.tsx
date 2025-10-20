import { Code, Plug, Wrench } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { MotionSection } from "./MotionSection";
import { motion } from "framer-motion";
import styles from "../styles/components/Services.module.css";

const services = [
  {
    icon: Code,
    titleKey: "services.custom.title",
    descriptionKey: "services.custom.description"
  },
  {
    icon: Plug,
    titleKey: "services.api.title",
    descriptionKey: "services.api.description"
  },
  {
    icon: Wrench,
    titleKey: "services.consulting.title",
    descriptionKey: "services.consulting.description"
  }
];

export function Services() {
  const { t } = useLanguage();

  return (
    <MotionSection>
      <section id="services" className={styles.section}>
        {/* Background with subtle pattern */}
        <div className={styles.backgroundDecoration}></div>
        <div className={styles.backgroundPattern}></div>
        
        <div className={styles.container}>
          <motion.div 
            className={styles.titleSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>
              {t('services.title')}
            </h2>
            <div className={styles.titleUnderline}></div>
          </motion.div>
          
          <div className={styles.servicesGrid}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={styles.serviceCard}
                >
                  <div className={styles.serviceIcon}>
                    <Icon />
                  </div>
                  <h3 className={styles.serviceTitle}>
                    {t(service.titleKey)}
                  </h3>
                  <p className={styles.serviceDescription}>
                    {t(service.descriptionKey)}
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
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className={styles.separatorLine}></div>
          </motion.div>
        </div>
      </section>
    </MotionSection>
  );
}
