import * as React from 'react';
export interface DayProps {
  className?: string;
  style?: React.CSSProperties;
  date?: string;
  state?: "default" | "current" | "selected" | "current and selected" | "null";
}
export declare const Day: React.FC<DayProps>;
export default Day;
