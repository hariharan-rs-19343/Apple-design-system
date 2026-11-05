import * as React from 'react';
export interface DateAndTimePickerCompactCollapsedProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light";
  type?: "date" | "time" | "date and time";
  month?: string;
  year?: string;
  time?: string;
}
export declare const DateAndTimePickerCompactCollapsed: React.FC<DateAndTimePickerCompactCollapsedProps>;
export default DateAndTimePickerCompactCollapsed;
