import * as React from 'react';
import type { FieldReplaceProps } from '../../components/fields/FieldReplace';
export interface FieldReplaceVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of FieldReplace side by side. */
export declare const FieldReplaceVariants: React.FC<FieldReplaceVariantsProps>;
export default FieldReplaceVariants;
/** Mode=Light, State=Text Entered */
export declare const FieldReplaceModeLightStateTextEntered: React.FC<Partial<FieldReplaceProps>>;
/** Mode=Dark, State=Text Entered */
export declare const FieldReplaceModeDarkStateTextEntered: React.FC<Partial<FieldReplaceProps>>;
/** Mode=Light, State=Typing */
export declare const FieldReplaceModeLightStateTyping: React.FC<Partial<FieldReplaceProps>>;
/** Mode=Dark, State=Typing */
export declare const FieldReplaceModeDarkStateTyping: React.FC<Partial<FieldReplaceProps>>;
/** Mode=Light, State=Focused */
export declare const FieldReplaceModeLightStateFocused: React.FC<Partial<FieldReplaceProps>>;
/** Mode=Dark, State=Focused */
export declare const FieldReplaceModeDarkStateFocused: React.FC<Partial<FieldReplaceProps>>;
/** Mode=Light, State=Default */
export declare const FieldReplaceModeLightStateDefault: React.FC<Partial<FieldReplaceProps>>;
/** Mode=Dark, State=Default */
export declare const FieldReplaceModeDarkStateDefault: React.FC<Partial<FieldReplaceProps>>;
