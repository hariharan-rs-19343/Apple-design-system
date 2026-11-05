import * as React from 'react';
import type { KeysIPhoneSpaceProps } from '../../components/keyboards/KeysIPhoneSpace';
export interface KeysIPhoneSpaceVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of KeysIPhoneSpace side by side. */
export declare const KeysIPhoneSpaceVariants: React.FC<KeysIPhoneSpaceVariantsProps>;
export default KeysIPhoneSpaceVariants;
/** Mode=Dark, Config=URL */
export declare const KeysIPhoneSpaceModeDarkConfigURL: React.FC<Partial<KeysIPhoneSpaceProps>>;
/** Mode=Dark, Config=Email */
export declare const KeysIPhoneSpaceModeDarkConfigEmail: React.FC<Partial<KeysIPhoneSpaceProps>>;
/** Mode=Dark, Config=Default */
export declare const KeysIPhoneSpaceModeDarkConfigDefault: React.FC<Partial<KeysIPhoneSpaceProps>>;
/** Mode=Light, Config=URL */
export declare const KeysIPhoneSpaceModeLightConfigURL: React.FC<Partial<KeysIPhoneSpaceProps>>;
/** Mode=Light, Config=Email */
export declare const KeysIPhoneSpaceModeLightConfigEmail: React.FC<Partial<KeysIPhoneSpaceProps>>;
/** Mode=Light, Config=Default */
export declare const KeysIPhoneSpaceModeLightConfigDefault: React.FC<Partial<KeysIPhoneSpaceProps>>;
