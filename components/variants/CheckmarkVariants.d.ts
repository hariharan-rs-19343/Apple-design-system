import * as React from 'react';
import type { CheckmarkProps } from '../../components/controls/Checkmark';
export interface CheckmarkVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Checkmark side by side. */
export declare const CheckmarkVariants: React.FC<CheckmarkVariantsProps>;
export default CheckmarkVariants;
/** State=Disabled, Mode=Light */
export declare const CheckmarkStateDisabledModeLight: React.FC<Partial<CheckmarkProps>>;
/** State=Default, Mode=Light */
export declare const CheckmarkStateDefaultModeLight: React.FC<Partial<CheckmarkProps>>;
