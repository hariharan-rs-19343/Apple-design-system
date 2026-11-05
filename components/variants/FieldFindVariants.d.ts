import * as React from 'react';
import type { FieldFindProps } from '../../components/fields/FieldFind';
export interface FieldFindVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of FieldFind side by side. */
export declare const FieldFindVariants: React.FC<FieldFindVariantsProps>;
export default FieldFindVariants;
/** Mode=Light, State=Text Entered */
export declare const FieldFindModeLightStateTextEntered: React.FC<Partial<FieldFindProps>>;
/** Mode=Dark, State=Text Entered */
export declare const FieldFindModeDarkStateTextEntered: React.FC<Partial<FieldFindProps>>;
/** Mode=Light, State=Typing */
export declare const FieldFindModeLightStateTyping: React.FC<Partial<FieldFindProps>>;
/** Mode=Dark, State=Typing */
export declare const FieldFindModeDarkStateTyping: React.FC<Partial<FieldFindProps>>;
/** Mode=Light, State=Focused */
export declare const FieldFindModeLightStateFocused: React.FC<Partial<FieldFindProps>>;
/** Mode=Dark, State=Focused */
export declare const FieldFindModeDarkStateFocused: React.FC<Partial<FieldFindProps>>;
/** Mode=Light, State=Default */
export declare const FieldFindModeLightStateDefault: React.FC<Partial<FieldFindProps>>;
/** Mode=Dark, State=Default */
export declare const FieldFindModeDarkStateDefault: React.FC<Partial<FieldFindProps>>;
