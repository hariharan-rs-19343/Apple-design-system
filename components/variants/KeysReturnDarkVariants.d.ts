import * as React from 'react';
import type { KeysReturnDarkProps } from '../../components/keyboards-dark/KeysReturnDark';
export interface KeysReturnDarkVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of KeysReturnDark side by side. */
export declare const KeysReturnDarkVariants: React.FC<KeysReturnDarkVariantsProps>;
export default KeysReturnDarkVariants;
/** Blue Color=On */
export declare const KeysReturnDarkBlueColorOn: React.FC<Partial<KeysReturnDarkProps>>;
/** Blue Color=Off */
export declare const KeysReturnDarkBlueColorOff: React.FC<Partial<KeysReturnDarkProps>>;
