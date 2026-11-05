import * as React from 'react';
import type { ButtonProps } from '../../components/views/Button';
export interface ButtonVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Button side by side. */
export declare const ButtonVariants: React.FC<ButtonVariantsProps>;
export default ButtonVariants;
/** Mode=Dark */
export declare const ButtonModeDark: React.FC<Partial<ButtonProps>>;
/** Mode=Light */
export declare const ButtonModeLight: React.FC<Partial<ButtonProps>>;
