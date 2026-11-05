import * as React from 'react';
import type { KeysIPhoneNumericProps } from '../../components/keyboards-dark/KeysIPhoneNumeric';
export interface KeysIPhoneNumericVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of KeysIPhoneNumeric side by side. */
export declare const KeysIPhoneNumericVariants: React.FC<KeysIPhoneNumericVariantsProps>;
export default KeysIPhoneNumericVariants;
/** Mode=Dark, Type=Math */
export declare const KeysIPhoneNumericModeDarkTypeMath: React.FC<Partial<KeysIPhoneNumericProps>>;
/** Mode=Light, Type=Math */
export declare const KeysIPhoneNumericModeLightTypeMath: React.FC<Partial<KeysIPhoneNumericProps>>;
/** Mode=Dark, Type=Number */
export declare const KeysIPhoneNumericModeDarkTypeNumber: React.FC<Partial<KeysIPhoneNumericProps>>;
/** Mode=Light, Type=Number */
export declare const KeysIPhoneNumericModeLightTypeNumber: React.FC<Partial<KeysIPhoneNumericProps>>;
/** Mode=Dark, Type=Number + ABC */
export declare const KeysIPhoneNumericModeDarkTypeNumberABC: React.FC<Partial<KeysIPhoneNumericProps>>;
/** Mode=Light, Type=Number + ABC */
export declare const KeysIPhoneNumericModeLightTypeNumberABC: React.FC<Partial<KeysIPhoneNumericProps>>;
