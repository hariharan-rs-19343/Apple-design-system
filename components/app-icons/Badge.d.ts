import * as React from 'react';
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  count?: string;
}
export declare const Badge: React.FC<BadgeProps>;
export default Badge;
