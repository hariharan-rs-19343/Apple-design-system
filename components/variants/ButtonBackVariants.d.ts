import * as React from 'react';
import type { ButtonBackProps } from '../../components/buttons/ButtonBack';
export interface ButtonBackVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ButtonBack side by side. */
export declare const ButtonBackVariants: React.FC<ButtonBackVariantsProps>;
export default ButtonBackVariants;
/** Enabled=False */
export declare const ButtonBackEnabledFalse: React.FC<Partial<ButtonBackProps>>;
/** Enabled=True */
export declare const ButtonBackEnabledTrue: React.FC<Partial<ButtonBackProps>>;
