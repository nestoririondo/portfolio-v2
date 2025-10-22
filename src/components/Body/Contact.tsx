import { useState, useRef, useEffect, useMemo } from "react";
import { toast } from "sonner";
import { Checkmark } from "react-checkmark";
import { useLanguage } from "../../contexts/LanguageContext";
import { motion } from "framer-motion";
import styles from "../../styles/components/Contact.module.css";

const DEFAULT_STATE = {
  name: "",
  email: "",
  company: "",
  message: "",
  price: "",
};

export function Contact() {
  const [formData, setFormData] = useState(DEFAULT_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [timeouts, setTimeouts] = useState<Record<string, NodeJS.Timeout>>({});
  const { t } = useLanguage();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToHome = () => {
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" });
    }
    window.history.pushState(null, "", window.location.pathname);
  };

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {};

    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.message.trim()) newErrors.message = true;

    // Clear any existing timeouts before setting new ones
    Object.values(timeouts).forEach(clearTimeout);
    setTimeouts({});

    setErrors(newErrors);

    // Auto-clear errors after 3 seconds
    if (Object.keys(newErrors).length > 0) {
      const newTimeouts: Record<string, NodeJS.Timeout> = {};

      Object.keys(newErrors).forEach((fieldName) => {
        const timeoutId = setTimeout(() => {
          setErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors[fieldName];
            return newErrors;
          });
        }, 3000);

        newTimeouts[fieldName] = timeoutId;
      });

      setTimeouts(newTimeouts);
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);

    if (!validateForm()) {
      console.log("Validation failed");
      toast.error(t("contact.form.validation"));
      return;
    }

    console.log("Validation passed");

    setIsSubmitting(true);

    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID;
      if (!formspreeId) {
        throw new Error("Formspree form ID not configured");
      }

      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          budget: formData.price ? t(formData.price) : "",
          _subject: `New contact form submission from ${formData.name}`,
        }),
      });

      if (response.ok) {
        toast.custom(() => (
          <div className={styles.toastSuccess}>
            <div className={styles.checkmarkContainer}>
              <Checkmark size="medium" color="#10b981" />
            </div>
            <span>{t("contact.form.success")}</span>
          </div>
        ));
        setFormData(DEFAULT_STATE);
        setErrors({});
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error(t("contact.form.error"));
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const autoResizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "60px";
      const scrollHeight = textareaRef.current.scrollHeight;
      const minHeight = 60;
      const maxHeight = 300;
      const newHeight = Math.max(Math.min(scrollHeight, maxHeight), minHeight);
      textareaRef.current.style.height = `${newHeight}px`;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      // Clear any existing timeouts for this field
      if (timeouts[name]) {
        clearTimeout(timeouts[name]);
        setTimeouts((prev) => {
          const newTimeouts = { ...prev };
          delete newTimeouts[name];
          return newTimeouts;
        });
      }

      // Immediately clear error state
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    if (name === "message") {
      setTimeout(autoResizeTextarea, 0);
    }
  };

  useEffect(() => {
    if (formData.message) {
      autoResizeTextarea();
    }
  }, []);

  const PRICE_OPTIONS = useMemo(
    () => [
      "contact.form.price.option1",
      "contact.form.price.option2",
      "contact.form.price.option3",
      "contact.form.price.option4",
    ],
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-200px" }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <motion.div
            className={styles.titleSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>{t("contact.title")}</h2>
            <p className={styles.subtitle}>{t("contact.subtitle")}</p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className={styles.form}
            noValidate
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className={`${styles.formGroup} ${
                errors.name ? styles.error : ""
              }`}
            >
              <label htmlFor="name" className={styles.label}>
                {t("contact.form.name")}
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`${styles.input} ${
                  errors.name ? styles.inputError : ""
                }`}
              />
            </div>

            <div
              className={`${styles.formGroup} ${
                errors.email ? styles.error : ""
              }`}
            >
              <label htmlFor="email" className={styles.label}>
                {t("contact.form.email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`${styles.input} ${
                  errors.email ? styles.inputError : ""
                }`}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company" className={styles.label}>
                {t("contact.form.company")}
              </label>
              <input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div
              className={`${styles.formGroup} ${
                errors.message ? styles.error : ""
              }`}
            >
              <label htmlFor="message" className={styles.label}>
                {t("contact.form.message")}
              </label>
              <textarea
                ref={textareaRef}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={`${styles.textarea} ${
                  errors.message ? styles.inputError : ""
                }`}
                placeholder={t("contact.form.placeholder")}
              />
            </div>

            <div className={styles.formGroup}>
              {/* chips selector for prices */}
              <label className={styles.label}>{t("contact.form.price")}</label>
              <div className={styles.chipsContainer}>
                {PRICE_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`${styles.chip} ${
                      formData.price === option ? styles.selected : ""
                    }`}
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, price: option }))
                    }
                  >
                    {t(option)}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className={styles.ctaButton}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? t("contact.form.sending")
                : t("contact.form.submit")}
            </button>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.footer
          className={styles.footer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
              <div className={styles.footerText}>
                © {new Date().getFullYear()} {t("footer.copyright")}
              </div>

              <div className={styles.footerLinks}>
                <button
                  onClick={scrollToHome}
                  className={styles.footerLink}
                  style={{ background: "none", border: "2px solid white" }}
                >
                  {t("nav.home")}
                </button>
                <a href="#services" className={styles.footerLink}>
                  {t("footer.nav.services")}
                </a>
                <a href="#approach" className={styles.footerLink}>
                  {t("nav.approach")}
                </a>
                <a href="#about" className={styles.footerLink}>
                  {t("footer.nav.about")}
                </a>
              </div>
            </div>
          </div>
        </motion.footer>
      </section>
    </motion.div>
  );
}
