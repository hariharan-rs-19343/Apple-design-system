import * as React from 'react';
export interface KeyboardIPadFindAndReplaceProps {
  className?: string;
  style?: React.CSSProperties;
  showBar?: boolean;
  showReplace?: boolean;
  email2?: string;
  email1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const KeyboardIPadFindAndReplace: React.FC<KeyboardIPadFindAndReplaceProps>;
export default KeyboardIPadFindAndReplace;
