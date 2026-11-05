import * as React from 'react';
export interface WatchExampleNotificationsProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "banner" | "short look" | "long look";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const WatchExampleNotifications: React.FC<WatchExampleNotificationsProps>;
export default WatchExampleNotifications;
