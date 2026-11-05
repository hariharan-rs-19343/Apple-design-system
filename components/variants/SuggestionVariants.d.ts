import * as React from 'react';
import type { SuggestionProps } from '../../components/accessory-bars/Suggestion';
export interface SuggestionVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Suggestion side by side. */
export declare const SuggestionVariants: React.FC<SuggestionVariantsProps>;
export default SuggestionVariants;
/** Mode=Dark */
export declare const SuggestionModeDark: React.FC<Partial<SuggestionProps>>;
/** Mode=Light */
export declare const SuggestionModeLight: React.FC<Partial<SuggestionProps>>;
