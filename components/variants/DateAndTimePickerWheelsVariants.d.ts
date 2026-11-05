import * as React from 'react';
import type { DateAndTimePickerWheelsProps } from '../../components/pickers/DateAndTimePickerWheels';
export interface DateAndTimePickerWheelsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of DateAndTimePickerWheels side by side. */
export declare const DateAndTimePickerWheelsVariants: React.FC<DateAndTimePickerWheelsVariantsProps>;
export default DateAndTimePickerWheelsVariants;
/** Mode=Light, Type=Date */
export declare const DateAndTimePickerWheelsModeLightTypeDate: React.FC<Partial<DateAndTimePickerWheelsProps>>;
/** Mode=Light, Type=Time */
export declare const DateAndTimePickerWheelsModeLightTypeTime: React.FC<Partial<DateAndTimePickerWheelsProps>>;
