import * as React from 'react';
export interface TitleProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light";
  /** Text content; defaults to "Colors". */
  text1?: string;
}
export declare const Title: React.FC<TitleProps>;
export default Title;
