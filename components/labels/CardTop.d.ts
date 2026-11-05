import * as React from 'react';
export interface CardTopProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark" | "dark elevated";
}
export declare const CardTop: React.FC<CardTopProps>;
export default CardTop;
