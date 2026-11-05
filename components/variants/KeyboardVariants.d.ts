import * as React from 'react';
import type { KeyboardProps } from '../../components/kit/Keyboard';
export interface KeyboardVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Keyboard side by side. */
export declare const KeyboardVariants: React.FC<KeyboardVariantsProps>;
export default KeyboardVariants;
/** Type=Numbers and Punctuation */
export declare const KeyboardTypeNumbersAndPunctuation: React.FC<Partial<KeyboardProps>>;
/** Type=Emoji */
export declare const KeyboardTypeEmoji: React.FC<Partial<KeyboardProps>>;
/** Type=Web Form */
export declare const KeyboardTypeWebForm: React.FC<Partial<KeyboardProps>>;
/** Type=Web */
export declare const KeyboardTypeWeb: React.FC<Partial<KeyboardProps>>;
/** Type=Find and Replace */
export declare const KeyboardTypeFindAndReplace: React.FC<Partial<KeyboardProps>>;
/** Type=Find */
export declare const KeyboardTypeFind: React.FC<Partial<KeyboardProps>>;
/** Type=Default */
export declare const KeyboardTypeDefault: React.FC<Partial<KeyboardProps>>;
