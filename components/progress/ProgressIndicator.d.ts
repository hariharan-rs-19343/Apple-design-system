import * as React from 'react';
export interface ProgressIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
  label?: boolean;
  statusText?: string;
}
export declare const ProgressIndicator: React.FC<ProgressIndicatorProps>;
export default ProgressIndicator;
