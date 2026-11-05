import * as React from 'react';
export interface TimeProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  time?: string;
}
export declare const Time: React.FC<TimeProps>;
export default Time;
