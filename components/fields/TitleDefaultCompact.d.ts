import * as React from 'react';
export interface TitleDefaultCompactProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  titleType?: "default" | "document";
  titleValue?: string;
}
export declare const TitleDefaultCompact: React.FC<TitleDefaultCompactProps>;
export default TitleDefaultCompact;
