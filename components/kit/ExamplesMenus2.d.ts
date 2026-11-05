import * as React from 'react';
export interface ExamplesMenus2Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "edit menu" | "menu and submenu";
  /** Text content; defaults to "Hello World". */
  text1?: string;
}
export declare const ExamplesMenus2: React.FC<ExamplesMenus2Props>;
export default ExamplesMenus2;
