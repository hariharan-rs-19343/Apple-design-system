import * as React from 'react';
export interface WatchActionSheetProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Title". */
  text1?: string;
  /** Text content; defaults to "The content of the notification goes here. ". */
  text2?: string;
}
export declare const WatchActionSheet: React.FC<WatchActionSheetProps>;
export default WatchActionSheet;
