import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import { Checkmark } from "react-checkmark";
import { useLanguage } from "../../contexts/LanguageContext";
import { MotionSection } from "../MotionSection";
import { motion } from "framer-motion";
import styles from "../../styles/components/Contact.module.css";

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
    window.history.pushState(null, "", window.location.pathname);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.custom(() => (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px', 
        padding: '16px', 
        background: 'white', 
        border: '1px solid #e5e7eb', 
        borderRadius: '8px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <Checkmark size="medium" color="#10b981" />
        <span>{t("contact.form.success")}</span>
      </div>
    ));
    setFormData({ name: "", email: "", company: "", message: "" });
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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (e.target.name === "message") {
      setTimeout(autoResizeTextarea, 0);
    }
  };

  useEffect(() => {
    if (formData.message) {
      autoResizeTextarea();
    }
  }, []);

  return (
    <MotionSection>
      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <motion.div
            className={styles.titleSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>Let's Talk</h2>
            <p className={styles.subtitle}>Response within 24 hours</p>
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
                Name
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
                Email
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
                Company
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
                What do you want to build?
              </label>
              <textarea
                ref={textareaRef}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.ctaButton}>
              Send Message
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
                © {new Date().getFullYear()} Professional Web Development
              </div>

              <div className={styles.footerLinks}>
                <button
                  onClick={scrollToHome}
                  className={styles.footerLink}
                  style={{ background: "none", border: "2px solid white" }}
                >
                  Home
                </button>
                <a href="#services" className={styles.footerLink}>
                  Services
                </a>
                <a href="#approach" className={styles.footerLink}>
                  Approach
                </a>
                <a href="#about" className={styles.footerLink}>
                  About
                </a>
              </div>
            </div>
          </div>
        </motion.footer>
      </section>
    </MotionSection>
  );
}