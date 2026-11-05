import * as React from 'react';
import type { DateAndTimePickersProps } from '../../components/surfaces/DateAndTimePickers';
export interface DateAndTimePickersVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of DateAndTimePickers side by side. */
export declare const DateAndTimePickersVariants: React.FC<DateAndTimePickersVariantsProps>;
export default DateAndTimePickersVariants;
/** Style=Inline */
export declare const DateAndTimePickersStyleInline: React.FC<Partial<DateAndTimePickersProps>>;
/** Style=Compact */
export declare const DateAndTimePickersStyleCompact: React.FC<Partial<DateAndTimePickersProps>>;
