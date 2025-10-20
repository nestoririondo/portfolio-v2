import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import { useLanguage } from "../contexts/LanguageContext";
import { MotionSection } from "./MotionSection";
import { motion } from "framer-motion";
import styles from "../styles/components/Contact.module.css";

export function Contact() {
  const { t } = useLanguage();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const scrollToHome = () => {
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" });
    }
    // Update URL to remove hash
    window.history.pushState(null, "", window.location.pathname);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    toast.success(t("contact.form.success"));
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const autoResizeTextarea = () => {
    if (textareaRef.current) {
      // Reset height to get accurate scrollHeight
      textareaRef.current.style.height = "80px";

      // Calculate new height based on content
      const scrollHeight = textareaRef.current.scrollHeight;
      const minHeight = 80;
      const newHeight = Math.max(scrollHeight, minHeight);

      // Apply the new height
      textareaRef.current.style.height = `${newHeight}px`;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // Auto-resize textarea when message changes
    if (e.target.name === "message") {
      setTimeout(autoResizeTextarea, 0);
    }
  };

  // Only auto-resize when component mounts (if there's initial content)
  useEffect(() => {
    if (formData.message) {
      autoResizeTextarea();
    }
  }, []);

  return (
    <MotionSection>
      <section id="contact" className={styles.section}>
        {/* Background decoration */}
        <div className={styles.backgroundDecoration}></div>

        <div className={styles.container}>
          <motion.div
            className={styles.titleSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>{t("contact.title")}</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.subtitle}>{t("contact.subtitle")}</p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className={styles.form}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                {t("contact.form.name")}
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
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
                className={styles.input}
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

            <div className={styles.formGroup}>
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
                rows={3}
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              {t("contact.form.submit")}
            </button>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.footer
          className={styles.footer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
              <div className={styles.footerText}>
                <p className={styles.footerCopyright}>
                  © {new Date().getFullYear()} Professional Web Development
                  Services
                </p>
              </div>

              <div className={styles.footerLinks}>
                <button
                  onClick={scrollToHome}
                  className={styles.footerLink}
                  style={{ background: "none", border: "none" }}
                >
                  {t("nav.home")}
                </button>
                <a href="#problems" className={styles.footerLink}>
                  Services
                </a>
                <a href="#case-study" className={styles.footerLink}>
                  Portfolio
                </a>
                <a href="#about" className={styles.footerLink}>
                  About
                </a>
                <a href="#contact" className={styles.footerLink}>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </motion.footer>
      </section>
    </MotionSection>
  );
}
