import * as React from 'react';
export interface AdditionalNotificationsProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark" | "dark elevated";
  text?: string;
}
export declare const AdditionalNotifications: React.FC<AdditionalNotificationsProps>;
export default AdditionalNotifications;
