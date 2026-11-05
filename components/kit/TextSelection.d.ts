import * as React from 'react';
export interface TextSelectionProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TextSelection: React.FC<TextSelectionProps>;
export default TextSelection;
