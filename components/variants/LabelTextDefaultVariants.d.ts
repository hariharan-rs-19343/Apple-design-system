import * as React from 'react';
import type { LabelTextDefaultProps } from '../../components/buttons/LabelTextDefault';
export interface LabelTextDefaultVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of LabelTextDefault side by side. */
export declare const LabelTextDefaultVariants: React.FC<LabelTextDefaultVariantsProps>;
export default LabelTextDefaultVariants;
/** Mode=Dark, State=Disabled */
export declare const LabelTextDefaultModeDarkStateDisabled: React.FC<Partial<LabelTextDefaultProps>>;
/** Mode=Dark, State=Default */
export declare const LabelTextDefaultModeDarkStateDefault: React.FC<Partial<LabelTextDefaultProps>>;
/** Mode=Light, State=Disabled */
export declare const LabelTextDefaultModeLightStateDisabled: React.FC<Partial<LabelTextDefaultProps>>;
/** Mode=Light, State=Default */
export declare const LabelTextDefaultModeLightStateDefault: React.FC<Partial<LabelTextDefaultProps>>;
