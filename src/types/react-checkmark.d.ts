declare module 'react-checkmark' {
  interface CheckmarkProps {
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    color?: string;
    style?: React.CSSProperties;
    className?: string;
  }
  
  export const Checkmark: React.FC<CheckmarkProps>;
}