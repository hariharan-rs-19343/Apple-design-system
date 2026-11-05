import * as React from 'react';
export interface PickerCalendarDayDarkProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "current" | "current and selected" | "null" | "selected";
  date?: string;
}
export declare const PickerCalendarDayDark: React.FC<PickerCalendarDayDarkProps>;
export default PickerCalendarDayDark;
