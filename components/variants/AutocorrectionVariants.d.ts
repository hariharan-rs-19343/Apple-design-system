import * as React from 'react';
import type { AutocorrectionProps } from '../../components/accessory-bars/Autocorrection';
export interface AutocorrectionVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Autocorrection side by side. */
export declare const AutocorrectionVariants: React.FC<AutocorrectionVariantsProps>;
export default AutocorrectionVariants;
/** Mode=Dark */
export declare const AutocorrectionModeDark: React.FC<Partial<AutocorrectionProps>>;
/** Mode=Light */
export declare const AutocorrectionModeLight: React.FC<Partial<AutocorrectionProps>>;
