import * as React from 'react';
export interface MacInputFieldsProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "idle" | "focused" | "disabled";
  context?: "content area" | "content area form" | "over-glass" | "over-glass form";
  children?: React.ReactNode;
}
/** Text-field background (6pt radius) with idle / focused ring / disabled looks. Default 120×24; pass style width/height (or 100%) to size it. */
export declare const MacInputFields: React.FC<MacInputFieldsProps>;
export default MacInputFields;
