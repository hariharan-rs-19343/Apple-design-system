import * as React from 'react';
export interface ExamplesAlertProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "side-by-side" | "stacked";
}
export declare const ExamplesAlert: React.FC<ExamplesAlertProps>;
export default ExamplesAlert;
