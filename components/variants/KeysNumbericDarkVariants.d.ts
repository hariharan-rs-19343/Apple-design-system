import * as React from 'react';
import type { KeysNumbericDarkProps } from '../../components/keyboards-dark/KeysNumbericDark';
export interface KeysNumbericDarkVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of KeysNumbericDark side by side. */
export declare const KeysNumbericDarkVariants: React.FC<KeysNumbericDarkVariantsProps>;
export default KeysNumbericDarkVariants;
/** Type=Delete */
export declare const KeysNumbericDarkTypeDelete: React.FC<Partial<KeysNumbericDarkProps>>;
/** Type=2 Lines */
export declare const KeysNumbericDarkType2Lines: React.FC<Partial<KeysNumbericDarkProps>>;
/** Type=1 Line */
export declare const KeysNumbericDarkType1Line: React.FC<Partial<KeysNumbericDarkProps>>;
