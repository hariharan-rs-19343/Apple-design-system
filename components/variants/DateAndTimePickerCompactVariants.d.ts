import * as React from 'react';
import type { DateAndTimePickerCompactProps } from '../../components/pickers/DateAndTimePickerCompact';
export interface DateAndTimePickerCompactVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of DateAndTimePickerCompact side by side. */
export declare const DateAndTimePickerCompactVariants: React.FC<DateAndTimePickerCompactVariantsProps>;
export default DateAndTimePickerCompactVariants;
/** Mode=Light, Type=Time */
export declare const DateAndTimePickerCompactModeLightTypeTime: React.FC<Partial<DateAndTimePickerCompactProps>>;
/** Mode=Light, Type=Date */
export declare const DateAndTimePickerCompactModeLightTypeDate: React.FC<Partial<DateAndTimePickerCompactProps>>;
/** Mode=Light, Type=Date and Time */
export declare const DateAndTimePickerCompactModeLightTypeDateAndTime: React.FC<Partial<DateAndTimePickerCompactProps>>;
