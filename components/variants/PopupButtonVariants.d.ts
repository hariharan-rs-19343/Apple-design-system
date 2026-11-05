import * as React from 'react';
import type { PopupButtonProps } from '../../components/views/PopupButton';
export interface PopupButtonVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of PopupButton side by side. */
export declare const PopupButtonVariants: React.FC<PopupButtonVariantsProps>;
export default PopupButtonVariants;
/** State=Enabled */
export declare const PopupButtonStateEnabled: React.FC<Partial<PopupButtonProps>>;
/** State=Disabled */
export declare const PopupButtonStateDisabled: React.FC<Partial<PopupButtonProps>>;
