import * as React from 'react';
export interface WatchModeProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light";
  /** Text content; defaults to "Light". */
  text1?: string;
}
export declare const WatchMode: React.FC<WatchModeProps>;
export default WatchMode;
