import * as React from 'react';
export interface TitleLargeTitleProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  title?: string;
}
export declare const TitleLargeTitle: React.FC<TitleLargeTitleProps>;
export default TitleLargeTitle;
