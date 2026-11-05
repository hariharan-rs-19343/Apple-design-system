import * as React from 'react';
export interface MacItemProps {
  className?: string;
  style?: React.CSSProperties;
  detail?: string;
  label?: string;
  showDetail?: boolean;
  leadingSymbol?: string;
  size?: "sm" | "md" | "lg";
  type?: "symbol" | "image";
  state?: "default" | "disabled" | "selected";
}
export declare const MacItem: React.FC<MacItemProps>;
export default MacItem;
