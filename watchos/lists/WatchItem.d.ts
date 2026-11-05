import * as React from 'react';
export interface WatchItemProps {
  className?: string;
  style?: React.CSSProperties;
  symbol?: string;
  subtitle?: string;
  symbolLeading?: boolean;
  symbolTrailing?: boolean;
  boldText?: string;
  label?: string;
  text?: "default" | "subtitle + title" | "label + subtitle" | "label + symbol" | "3-line label + symbol";
  /** Text content; defaults to "􀂓". */
  text1?: string;
  /** Text content; defaults to "􀂓". */
  text2?: string;
}
export declare const WatchItem: React.FC<WatchItemProps>;
export default WatchItem;
