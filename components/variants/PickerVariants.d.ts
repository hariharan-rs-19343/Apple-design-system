import * as React from 'react';
import type { PickerProps } from '../../components/page-controls/Picker';
export interface PickerVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Picker side by side. */
export declare const PickerVariants: React.FC<PickerVariantsProps>;
export default PickerVariants;
/** Position=Last */
export declare const PickerPositionLast: React.FC<Partial<PickerProps>>;
/** Position=Middle */
export declare const PickerPositionMiddle: React.FC<Partial<PickerProps>>;
