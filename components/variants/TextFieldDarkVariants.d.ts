import * as React from 'react';
import type { TextFieldDarkProps } from '../../components/misc/TextFieldDark';
export interface TextFieldDarkVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of TextFieldDark side by side. */
export declare const TextFieldDarkVariants: React.FC<TextFieldDarkVariantsProps>;
export default TextFieldDarkVariants;
/** State=Text Entered */
export declare const TextFieldDarkStateTextEntered: React.FC<Partial<TextFieldDarkProps>>;
/** State=Focused */
export declare const TextFieldDarkStateFocused: React.FC<Partial<TextFieldDarkProps>>;
