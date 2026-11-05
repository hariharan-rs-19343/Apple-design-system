import * as React from 'react';
import type { LabelTextPreferredProps } from '../../components/buttons/LabelTextPreferred';
export interface LabelTextPreferredVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of LabelTextPreferred side by side. */
export declare const LabelTextPreferredVariants: React.FC<LabelTextPreferredVariantsProps>;
export default LabelTextPreferredVariants;
/** Mode=Dark,State=Disabled */
export declare const LabelTextPreferredModeDarkStateDisabled: React.FC<Partial<LabelTextPreferredProps>>;
/** Mode=Dark,State=Default */
export declare const LabelTextPreferredModeDarkStateDefault: React.FC<Partial<LabelTextPreferredProps>>;
/** Mode=Light,State=Disabled */
export declare const LabelTextPreferredModeLightStateDisabled: React.FC<Partial<LabelTextPreferredProps>>;
/** Mode=Light,State=Default */
export declare const LabelTextPreferredModeLightStateDefault: React.FC<Partial<LabelTextPreferredProps>>;
