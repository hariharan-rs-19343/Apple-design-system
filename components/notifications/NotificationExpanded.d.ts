import * as React from 'react';
export interface NotificationExpandedProps {
  className?: string;
  style?: React.CSSProperties;
  showMenu?: boolean;
  /** Text content; defaults to "􀓔". */
  text1?: string;
  /** Text content; defaults to "Action". */
  text2?: string;
  /** Text content; defaults to "􀓔". */
  text3?: string;
  /** Text content; defaults to "Action". */
  text4?: string;
}
export declare const NotificationExpanded: React.FC<NotificationExpandedProps>;
export default NotificationExpanded;
