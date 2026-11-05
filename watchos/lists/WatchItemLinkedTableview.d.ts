import * as React from 'react';
export interface WatchItemLinkedTableviewProps {
  className?: string;
  style?: React.CSSProperties;
  showCheckmark?: boolean;
  label?: string;
  /** Text content; defaults to "􀆅". */
  text1?: string;
}
export declare const WatchItemLinkedTableview: React.FC<WatchItemLinkedTableviewProps>;
export default WatchItemLinkedTableview;
