import * as React from 'react';
import type { KeysIPadCommandProps } from '../../components/keyboards/KeysIPadCommand';
export interface KeysIPadCommandVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of KeysIPadCommand side by side. */
export declare const KeysIPadCommandVariants: React.FC<KeysIPadCommandVariantsProps>;
export default KeysIPadCommandVariants;
/** Mode=Dark, Align=Right */
export declare const KeysIPadCommandModeDarkAlignRight: React.FC<Partial<KeysIPadCommandProps>>;
/** Mode=Dark, Align=Left */
export declare const KeysIPadCommandModeDarkAlignLeft: React.FC<Partial<KeysIPadCommandProps>>;
/** Mode=Light, Align=Right */
export declare const KeysIPadCommandModeLightAlignRight: React.FC<Partial<KeysIPadCommandProps>>;
/** Mode=Light, Align=Left */
export declare const KeysIPadCommandModeLightAlignLeft: React.FC<Partial<KeysIPadCommandProps>>;
