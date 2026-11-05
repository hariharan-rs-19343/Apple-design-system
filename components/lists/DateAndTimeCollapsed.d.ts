import * as React from 'react';
export interface DateAndTimeCollapsedProps {
  className?: string;
  style?: React.CSSProperties;
  showDate?: boolean;
  showTime?: boolean;
  month?: string;
  year?: string;
  state?: "default" | "selected";
  time?: string;
}
export declare const DateAndTimeCollapsed: React.FC<DateAndTimeCollapsedProps>;
export default DateAndTimeCollapsed;
