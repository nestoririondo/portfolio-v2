import { Code, Plug, Wrench } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { motion } from "framer-motion";
import styles from "../../styles/components/Services.module.css";

const services = [
  {
    icon: Code,
    titleKey: "services.custom.title",
    descriptionKey: "services.custom.description",
  },
  {
    icon: Plug,
    titleKey: "services.api.title",
    descriptionKey: "services.api.description",
  },
  {
    icon: Wrench,
    titleKey: "services.consulting.title",
    descriptionKey: "services.consulting.description",
  },
];

export function Services() {
  const { t } = useLanguage();

  return (
      <section id="services" className={styles.section}>
        {/* Background with subtle pattern */}
        <div className={styles.backgroundDecoration}></div>
        <div className={styles.backgroundPattern}></div>

        <div className={styles.container}>
          <motion.div
            className={styles.titleSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>{t("services.title")}</h2>
            <div className={styles.titleUnderline}></div>
          </motion.div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={styles.serviceCard}
                >
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
          </div>

          {/* Visual separator */}
          <div className={styles.separator}>
            <div className={styles.separatorLine}></div>
          </div>
        </div>
      </section>
  );
}
