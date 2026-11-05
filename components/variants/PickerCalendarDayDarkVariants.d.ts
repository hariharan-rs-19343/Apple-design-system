import * as React from 'react';
import type { PickerCalendarDayDarkProps } from '../../components/kit/PickerCalendarDayDark';
export interface PickerCalendarDayDarkVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of PickerCalendarDayDark side by side. */
export declare const PickerCalendarDayDarkVariants: React.FC<PickerCalendarDayDarkVariantsProps>;
export default PickerCalendarDayDarkVariants;
/** State=Selected */
export declare const PickerCalendarDayDarkStateSelected: React.FC<Partial<PickerCalendarDayDarkProps>>;
/** State=Current and Selected */
export declare const PickerCalendarDayDarkStateCurrentAndSelected: React.FC<Partial<PickerCalendarDayDarkProps>>;
/** State=Current */
export declare const PickerCalendarDayDarkStateCurrent: React.FC<Partial<PickerCalendarDayDarkProps>>;
/** State=Default */
export declare const PickerCalendarDayDarkStateDefault: React.FC<Partial<PickerCalendarDayDarkProps>>;
/** State=Null */
export declare const PickerCalendarDayDarkStateNull: React.FC<Partial<PickerCalendarDayDarkProps>>;
