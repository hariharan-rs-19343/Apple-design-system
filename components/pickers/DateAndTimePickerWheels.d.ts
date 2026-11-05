import * as React from 'react';
export interface DateAndTimePickerWheelsProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light";
  type?: "date" | "time";
}
export declare const DateAndTimePickerWheels: React.FC<DateAndTimePickerWheelsProps>;
export default DateAndTimePickerWheels;
