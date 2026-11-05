import * as React from 'react';
export interface TitleSubheadlineProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  mode?: "light" | "dark";
}
export declare const TitleSubheadline: React.FC<TitleSubheadlineProps>;
export default TitleSubheadline;
