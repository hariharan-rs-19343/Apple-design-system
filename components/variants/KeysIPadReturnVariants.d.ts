import * as React from 'react';
import type { KeysIPadReturnProps } from '../../components/keyboards/KeysIPadReturn';
export interface KeysIPadReturnVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of KeysIPadReturn side by side. */
export declare const KeysIPadReturnVariants: React.FC<KeysIPadReturnVariantsProps>;
export default KeysIPadReturnVariants;
/** Mode=Dark, Prominent=True */
export declare const KeysIPadReturnModeDarkProminentTrue: React.FC<Partial<KeysIPadReturnProps>>;
/** Mode=Dark, Prominent=False */
export declare const KeysIPadReturnModeDarkProminentFalse: React.FC<Partial<KeysIPadReturnProps>>;
/** Mode=Light, Prominent=True */
export declare const KeysIPadReturnModeLightProminentTrue: React.FC<Partial<KeysIPadReturnProps>>;
/** Mode=Light, Prominent=False */
export declare const KeysIPadReturnModeLightProminentFalse: React.FC<Partial<KeysIPadReturnProps>>;
