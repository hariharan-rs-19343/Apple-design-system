import * as React from 'react';
export interface NotificationBGComposedProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  count?: "1" | "2" | "3";
}
export declare const NotificationBGComposed: React.FC<NotificationBGComposedProps>;
export default NotificationBGComposed;
