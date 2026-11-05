import * as React from 'react';
import type { ButtonVerticalStackProps } from '../../components/tab-bars/ButtonVerticalStack';
export interface ButtonVerticalStackVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ButtonVerticalStack side by side. */
export declare const ButtonVerticalStackVariants: React.FC<ButtonVerticalStackVariantsProps>;
export default ButtonVerticalStackVariants;
/** Selected=False */
export declare const ButtonVerticalStackSelectedFalse: React.FC<Partial<ButtonVerticalStackProps>>;
/** Selected=True */
export declare const ButtonVerticalStackSelectedTrue: React.FC<Partial<ButtonVerticalStackProps>>;
