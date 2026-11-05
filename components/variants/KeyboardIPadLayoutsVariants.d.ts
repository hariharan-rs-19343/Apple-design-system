import * as React from 'react';
import type { KeyboardIPadLayoutsProps } from '../../components/keyboards/KeyboardIPadLayouts';
export interface KeyboardIPadLayoutsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of KeyboardIPadLayouts side by side. */
export declare const KeyboardIPadLayoutsVariants: React.FC<KeyboardIPadLayoutsVariantsProps>;
export default KeyboardIPadLayoutsVariants;
/** Mode=Dark, Type=Uppercase */
export declare const KeyboardIPadLayoutsModeDarkTypeUppercase: React.FC<Partial<KeyboardIPadLayoutsProps>>;
/** Mode=Dark, Type=Lowercase */
export declare const KeyboardIPadLayoutsModeDarkTypeLowercase: React.FC<Partial<KeyboardIPadLayoutsProps>>;
/** Mode=Light, Type=Uppercase */
export declare const KeyboardIPadLayoutsModeLightTypeUppercase: React.FC<Partial<KeyboardIPadLayoutsProps>>;
/** Mode=Light, Type=Lowercase */
export declare const KeyboardIPadLayoutsModeLightTypeLowercase: React.FC<Partial<KeyboardIPadLayoutsProps>>;
