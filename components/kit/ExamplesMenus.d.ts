import * as React from 'react';
export interface ExamplesMenusProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "edit medium" | "menu";
  /** Text content; defaults to "Hello World". */
  text1?: string;
}
export declare const ExamplesMenus: React.FC<ExamplesMenusProps>;
export default ExamplesMenus;
