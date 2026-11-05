import * as React from 'react';
import type { ButtonDoneProps } from '../../components/buttons/ButtonDone';
export interface ButtonDoneVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ButtonDone side by side. */
export declare const ButtonDoneVariants: React.FC<ButtonDoneVariantsProps>;
export default ButtonDoneVariants;
/** BG Context=Dim */
export declare const ButtonDoneBGContextDim: React.FC<Partial<ButtonDoneProps>>;
/** BG Context=Bright */
export declare const ButtonDoneBGContextBright: React.FC<Partial<ButtonDoneProps>>;
