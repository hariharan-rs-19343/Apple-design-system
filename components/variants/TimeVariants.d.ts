import * as React from 'react';
import type { TimeProps } from '../../components/notifications/Time';
export interface TimeVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Time side by side. */
export declare const TimeVariants: React.FC<TimeVariantsProps>;
export default TimeVariants;
/** Mode=Dark */
export declare const TimeModeDark: React.FC<Partial<TimeProps>>;
/** Mode=Light */
export declare const TimeModeLight: React.FC<Partial<TimeProps>>;
