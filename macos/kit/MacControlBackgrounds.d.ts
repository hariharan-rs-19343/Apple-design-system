import * as React from 'react';
export interface MacControlBackgroundsProps {
  className?: string;
  style?: React.CSSProperties;
  active?: boolean;
  on?: boolean;
  state?: "idle" | "clicked" | "disabled";
  style2?: "bordered neutral" | "bordered colored" | "bordered colored secondary" | "bordered destructive" | "primary / default" | "borderless";
  context?: "content area" | "over-glass";
}
export declare const MacControlBackgrounds: React.FC<MacControlBackgroundsProps>;
export default MacControlBackgrounds;
