import * as React from 'react';
export interface LightProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "􀋃". */
  text1?: string;
  /** Text content; defaults to "Label". */
  text2?: string;
}
export declare const Light: React.FC<LightProps>;
export default Light;
