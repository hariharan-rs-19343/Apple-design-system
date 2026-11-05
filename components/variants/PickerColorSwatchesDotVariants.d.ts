import * as React from 'react';
import type { PickerColorSwatchesDotProps } from '../../components/pickers/PickerColorSwatchesDot';
export interface PickerColorSwatchesDotVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of PickerColorSwatchesDot side by side. */
export declare const PickerColorSwatchesDotVariants: React.FC<PickerColorSwatchesDotVariantsProps>;
export default PickerColorSwatchesDotVariants;
/** State=Selected */
export declare const PickerColorSwatchesDotStateSelected: React.FC<Partial<PickerColorSwatchesDotProps>>;
/** State=Unselected */
export declare const PickerColorSwatchesDotStateUnselected: React.FC<Partial<PickerColorSwatchesDotProps>>;
