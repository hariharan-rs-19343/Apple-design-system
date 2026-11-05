import * as React from 'react';
import type { ExamplesKeyboardProps } from '../../components/kit/ExamplesKeyboard';
export interface ExamplesKeyboardVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ExamplesKeyboard side by side. */
export declare const ExamplesKeyboardVariants: React.FC<ExamplesKeyboardVariantsProps>;
export default ExamplesKeyboardVariants;
/** Type=Find and Replace */
export declare const ExamplesKeyboardTypeFindAndReplace: React.FC<Partial<ExamplesKeyboardProps>>;
/** Type=Find */
export declare const ExamplesKeyboardTypeFind: React.FC<Partial<ExamplesKeyboardProps>>;
/** Type=Emoji */
export declare const ExamplesKeyboardTypeEmoji: React.FC<Partial<ExamplesKeyboardProps>>;
/** Type=Numeric */
export declare const ExamplesKeyboardTypeNumeric: React.FC<Partial<ExamplesKeyboardProps>>;
/** Type=Text */
export declare const ExamplesKeyboardTypeText: React.FC<Partial<ExamplesKeyboardProps>>;
