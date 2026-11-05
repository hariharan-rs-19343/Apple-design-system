import * as React from 'react';
import type { PickerButtonProps } from '../../components/kit/PickerButton';
export interface PickerButtonVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of PickerButton side by side. */
export declare const PickerButtonVariants: React.FC<PickerButtonVariantsProps>;
export default PickerButtonVariants;
/** Size=Large, Selected=True */
export declare const PickerButtonSizeLargeSelectedTrue: React.FC<Partial<PickerButtonProps>>;
/** Size=Large, Selected=False */
export declare const PickerButtonSizeLargeSelectedFalse: React.FC<Partial<PickerButtonProps>>;
/** Size=Small, Selected=True */
export declare const PickerButtonSizeSmallSelectedTrue: React.FC<Partial<PickerButtonProps>>;
/** Size=Small, Selected=False */
export declare const PickerButtonSizeSmallSelectedFalse: React.FC<Partial<PickerButtonProps>>;
