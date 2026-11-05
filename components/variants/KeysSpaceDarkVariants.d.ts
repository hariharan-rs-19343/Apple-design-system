import * as React from 'react';
import type { KeysSpaceDarkProps } from '../../components/keyboards-dark/KeysSpaceDark';
export interface KeysSpaceDarkVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of KeysSpaceDark side by side. */
export declare const KeysSpaceDarkVariants: React.FC<KeysSpaceDarkVariantsProps>;
export default KeysSpaceDarkVariants;
/** Config=URL */
export declare const KeysSpaceDarkConfigURL: React.FC<Partial<KeysSpaceDarkProps>>;
/** Config=Email */
export declare const KeysSpaceDarkConfigEmail: React.FC<Partial<KeysSpaceDarkProps>>;
/** Config=Default */
export declare const KeysSpaceDarkConfigDefault: React.FC<Partial<KeysSpaceDarkProps>>;
