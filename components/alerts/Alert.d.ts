import * as React from 'react';
export interface AlertProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "side-by-side" | "stacked";
  showFields?: boolean;
  showField2?: boolean;
  /** Text content; defaults to "A Short Title Is Best". */
  text1?: string;
  /** Text content; defaults to "A description should be a short, complete sentence.". */
  text2?: string;
}
export declare const Alert: React.FC<AlertProps>;
export default Alert;
