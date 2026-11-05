import * as React from 'react';
import type { LabelSymbolDefaultProps } from '../../components/buttons/LabelSymbolDefault';
export interface LabelSymbolDefaultVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of LabelSymbolDefault side by side. */
export declare const LabelSymbolDefaultVariants: React.FC<LabelSymbolDefaultVariantsProps>;
export default LabelSymbolDefaultVariants;
/** Mode=Dark,State=Disabled */
export declare const LabelSymbolDefaultModeDarkStateDisabled: React.FC<Partial<LabelSymbolDefaultProps>>;
/** Mode=Dark,State=Default */
export declare const LabelSymbolDefaultModeDarkStateDefault: React.FC<Partial<LabelSymbolDefaultProps>>;
/** Mode=Light,State=Disabled */
export declare const LabelSymbolDefaultModeLightStateDisabled: React.FC<Partial<LabelSymbolDefaultProps>>;
/** Mode=Light,State=Default */
export declare const LabelSymbolDefaultModeLightStateDefault: React.FC<Partial<LabelSymbolDefaultProps>>;
