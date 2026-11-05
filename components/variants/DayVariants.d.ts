import * as React from 'react';
import type { DayProps } from '../../components/kit/Day';
export interface DayVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Day side by side. */
export declare const DayVariants: React.FC<DayVariantsProps>;
export default DayVariants;
/** State=Current and Selected */
export declare const DayStateCurrentAndSelected: React.FC<Partial<DayProps>>;
/** State=Selected */
export declare const DayStateSelected: React.FC<Partial<DayProps>>;
/** State=Current */
export declare const DayStateCurrent: React.FC<Partial<DayProps>>;
/** State=Default */
export declare const DayStateDefault: React.FC<Partial<DayProps>>;
/** State=Null */
export declare const DayStateNull: React.FC<Partial<DayProps>>;
