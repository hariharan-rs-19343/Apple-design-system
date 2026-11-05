import * as React from 'react';
import type { SearchField2Props } from '../../components/surfaces/SearchField2';
export interface SearchField2VariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SearchField2 side by side. */
export declare const SearchField2Variants: React.FC<SearchField2VariantsProps>;
export default SearchField2Variants;
/** Mode=Dark, State=Typing */
export declare const SearchField2ModeDarkStateTyping: React.FC<Partial<SearchField2Props>>;
/** Mode=Dark, State=Value */
export declare const SearchField2ModeDarkStateValue: React.FC<Partial<SearchField2Props>>;
/** Mode=Dark, State=Placeholder */
export declare const SearchField2ModeDarkStatePlaceholder: React.FC<Partial<SearchField2Props>>;
/** Mode=Light, State=Typing */
export declare const SearchField2ModeLightStateTyping: React.FC<Partial<SearchField2Props>>;
/** Mode=Light, State=Value */
export declare const SearchField2ModeLightStateValue: React.FC<Partial<SearchField2Props>>;
/** Mode=Light, State=Placeholder */
export declare const SearchField2ModeLightStatePlaceholder: React.FC<Partial<SearchField2Props>>;
