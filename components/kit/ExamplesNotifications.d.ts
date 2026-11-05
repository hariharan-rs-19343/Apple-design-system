import * as React from 'react';
export interface ExamplesNotificationsProps {
  className?: string;
  style?: React.CSSProperties;
  expanded?: boolean;
  /** Text content; defaults to "Monday, June 6". */
  text1?: string;
}
export declare const ExamplesNotifications: React.FC<ExamplesNotificationsProps>;
export default ExamplesNotifications;
