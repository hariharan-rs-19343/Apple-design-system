import * as React from 'react';
import type { ButtonHorizontalStackProps } from '../../components/tab-bars/ButtonHorizontalStack';
export interface ButtonHorizontalStackVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ButtonHorizontalStack side by side. */
export declare const ButtonHorizontalStackVariants: React.FC<ButtonHorizontalStackVariantsProps>;
export default ButtonHorizontalStackVariants;
/** Selected=False */
export declare const ButtonHorizontalStackSelectedFalse: React.FC<Partial<ButtonHorizontalStackProps>>;
/** Selected=True */
export declare const ButtonHorizontalStackSelectedTrue: React.FC<Partial<ButtonHorizontalStackProps>>;
