import * as React from 'react';
import type { DateAndTimeWheelsProps } from '../../components/pickers/DateAndTimeWheels';
export interface DateAndTimeWheelsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of DateAndTimeWheels side by side. */
export declare const DateAndTimeWheelsVariants: React.FC<DateAndTimeWheelsVariantsProps>;
export default DateAndTimeWheelsVariants;
/** Type=Date */
export declare const DateAndTimeWheelsTypeDate: React.FC<Partial<DateAndTimeWheelsProps>>;
/** Type=Time */
export declare const DateAndTimeWheelsTypeTime: React.FC<Partial<DateAndTimeWheelsProps>>;
