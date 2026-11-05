import * as React from 'react';
import type { LabelSymbolPreferredProps } from '../../components/buttons/LabelSymbolPreferred';
export interface LabelSymbolPreferredVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of LabelSymbolPreferred side by side. */
export declare const LabelSymbolPreferredVariants: React.FC<LabelSymbolPreferredVariantsProps>;
export default LabelSymbolPreferredVariants;
/** Mode=Dark,State=Disabled */
export declare const LabelSymbolPreferredModeDarkStateDisabled: React.FC<Partial<LabelSymbolPreferredProps>>;
/** Mode=Dark,State=Default */
export declare const LabelSymbolPreferredModeDarkStateDefault: React.FC<Partial<LabelSymbolPreferredProps>>;
/** Mode=Light,State=Disabled */
export declare const LabelSymbolPreferredModeLightStateDisabled: React.FC<Partial<LabelSymbolPreferredProps>>;
/** Mode=Light,State=Default */
export declare const LabelSymbolPreferredModeLightStateDefault: React.FC<Partial<LabelSymbolPreferredProps>>;
