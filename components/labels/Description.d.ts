import * as React from 'react';
export interface DescriptionProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark" | "dark elevated";
  description2?: string;
  /** Text content; defaults to "Description 2". */
  text1?: string;
}
export declare const Description: React.FC<DescriptionProps>;
export default Description;
