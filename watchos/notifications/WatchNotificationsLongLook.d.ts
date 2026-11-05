import * as React from 'react';
export interface WatchNotificationsLongLookProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  details?: string;
  showButton2?: boolean;
  showButton3?: boolean;
  /** Text content; defaults to "now". */
  text1?: string;
  /** Text content; defaults to "10:09". */
  text2?: string;
}
export declare const WatchNotificationsLongLook: React.FC<WatchNotificationsLongLookProps>;
export default WatchNotificationsLongLook;
