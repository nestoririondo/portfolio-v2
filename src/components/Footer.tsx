import styles from '../styles/components/Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copyright}>
            <p>
              © {new Date().getFullYear()} Professional Web Development Services
            </p>
          </div>

          <nav className={styles.nav}>
            <a href="#problems" className={styles.navLink}>
              Services
            </a>
            <a href="#case-study" className={styles.navLink}>
              Portfolio
            </a>
            <a href="#about" className={styles.navLink}>
              About
            </a>
            <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
