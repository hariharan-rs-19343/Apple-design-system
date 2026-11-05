import * as React from 'react';
export interface TitleBodyProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  title?: string;
}
export declare const TitleBody: React.FC<TitleBodyProps>;
export default TitleBody;
