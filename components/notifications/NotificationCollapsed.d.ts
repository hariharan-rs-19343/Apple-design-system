import * as React from 'react';
export interface NotificationCollapsedProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  stack?: "1" | "2" | "3";
  description?: string;
  showImage?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const NotificationCollapsed: React.FC<NotificationCollapsedProps>;
export default NotificationCollapsed;
