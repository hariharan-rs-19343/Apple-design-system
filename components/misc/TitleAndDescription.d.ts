import * as React from 'react';
export interface TitleAndDescriptionProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark" | "dark elevated";
  title?: string;
  description?: string;
  showDescription?: boolean;
}
export declare const TitleAndDescription: React.FC<TitleAndDescriptionProps>;
export default TitleAndDescription;
