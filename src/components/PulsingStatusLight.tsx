import { motion } from "framer-motion";
import styles from "../styles/components/PulsingStatusLight.module.css";

type StatusVariant = 'available' | 'busy' | 'away' | 'offline';
type AnimationType = 'pulse' | 'ripple' | 'breathe' | 'glow';

interface PulsingStatusLightProps {
  variant?: StatusVariant;
  animation?: AnimationType;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function PulsingStatusLight({ 
  variant = 'available', 
  animation = 'ripple',
  size = 'medium',
  className 
}: PulsingStatusLightProps) {
  
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <motion.div 
        className={`${styles.statusLight} ${styles[variant]} ${styles[size]} ${styles[animation]}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {animation === 'ripple' && (
          <>
            <div className={styles.ripple}></div>
            <div className={styles.ripple}></div>
            <div className={styles.ripple}></div>
          </>
        )}
        {animation === 'glow' && <div className={styles.glowEffect}></div>}
      </motion.div>
    </div>
  );
}