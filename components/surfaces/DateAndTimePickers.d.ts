import * as React from 'react';
export interface DateAndTimePickersProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "compact" | "inline";
  showDate?: boolean;
  showTime?: boolean;
  text?: string;
  /** Text content; defaults to "􀆉". */
  text1?: string;
  /** Text content; defaults to "􀆊". */
  text2?: string;
  /** Text content; defaults to "April 2025". */
  text3?: string;
  /** Text content; defaults to "􀆊". */
  text4?: string;
}
export declare const DateAndTimePickers: React.FC<DateAndTimePickersProps>;
export default DateAndTimePickers;
