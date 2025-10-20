import { HTMLAttributes } from 'react';
import styles from "../styles/components/StatusIndicator.module.css";

export type StatusType = 'online' | 'offline' | 'maintenance' | 'degraded' | 'available';

export interface StatusIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  status: StatusType;
  label?: string;
  showLabel?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export function StatusIndicator({ 
  status = 'available', 
  label,
  showLabel = false,
  size = 'medium',
  className,
  ...props 
}: StatusIndicatorProps) {
  
  const getDefaultLabel = (status: StatusType) => {
    switch (status) {
      case 'online':
      case 'available':
        return 'Available';
      case 'offline':
        return 'Offline';
      case 'maintenance':
        return 'Maintenance';
      case 'degraded':
        return 'Degraded';
      default:
        return 'Unknown';
    }
  };

  return (
    <div 
      className={`${styles.status} ${styles[status]} ${styles[size]} ${className || ''}`}
      {...props}
    >
      <div className={styles.indicatorContainer}>
        <span className={styles.pingEffect}></span>
        <span className={styles.statusDot}></span>
      </div>
      {showLabel && (
        <span className={styles.statusLabel}>
          {label || getDefaultLabel(status)}
        </span>
      )}
    </div>
  );
}