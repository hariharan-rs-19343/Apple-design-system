import * as React from 'react';
export interface TrailingDarkProps {
  className?: string;
  style?: React.CSSProperties;
  showDrillIn?: boolean;
  showSymbol?: boolean;
  showCheckmark?: boolean;
  type?: "button" | "default" | "disclosure" | "picker - date" | "picker - date and time" | "picker - time" | "pop-up" | "stepper" | "toggle";
  showInfo?: boolean;
  showDetail?: boolean;
  detailText?: string;
  buttonLabel?: string;
  /** Text content; defaults to "Pop-up". */
  text1?: string;
  /** Text content; defaults to "􀆏". */
  text2?: string;
  /** Text content; defaults to "PM". */
  text3?: string;
  /** Text content; defaults to "􀆊". */
  text4?: string;
}
export declare const TrailingDark: React.FC<TrailingDarkProps>;
export default TrailingDark;
