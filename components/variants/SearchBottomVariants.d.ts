import * as React from 'react';
import type { SearchBottomProps } from '../../components/toolbars/SearchBottom';
export interface SearchBottomVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SearchBottom side by side. */
export declare const SearchBottomVariants: React.FC<SearchBottomVariantsProps>;
export default SearchBottomVariants;
/** Mode=Dark, State=Typing */
export declare const SearchBottomModeDarkStateTyping: React.FC<Partial<SearchBottomProps>>;
/** Mode=Dark, State=Value */
export declare const SearchBottomModeDarkStateValue: React.FC<Partial<SearchBottomProps>>;
/** Mode=Dark, State=Placeholder */
export declare const SearchBottomModeDarkStatePlaceholder: React.FC<Partial<SearchBottomProps>>;
/** Mode=Light, State=Typing */
export declare const SearchBottomModeLightStateTyping: React.FC<Partial<SearchBottomProps>>;
/** Mode=Light, State=Placeholder */
export declare const SearchBottomModeLightStatePlaceholder: React.FC<Partial<SearchBottomProps>>;
/** Mode=Light, State=Value */
export declare const SearchBottomModeLightStateValue: React.FC<Partial<SearchBottomProps>>;
