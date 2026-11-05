import * as React from 'react';
export interface DateAndTimePickerCompactProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light";
  type?: "date" | "time" | "date and time";
  month?: string;
  year?: string;
  time?: string;
}
export declare const DateAndTimePickerCompact: React.FC<DateAndTimePickerCompactProps>;
export default DateAndTimePickerCompact;
