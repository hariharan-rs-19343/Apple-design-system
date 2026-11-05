import * as React from 'react';
import type { SearchTopProps } from '../../components/toolbars/SearchTop';
export interface SearchTopVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SearchTop side by side. */
export declare const SearchTopVariants: React.FC<SearchTopVariantsProps>;
export default SearchTopVariants;
/** Mode=Dark, State=Value */
export declare const SearchTopModeDarkStateValue: React.FC<Partial<SearchTopProps>>;
/** Mode=Dark, State=Typing */
export declare const SearchTopModeDarkStateTyping: React.FC<Partial<SearchTopProps>>;
/** Mode=Dark, State=Placeholder */
export declare const SearchTopModeDarkStatePlaceholder: React.FC<Partial<SearchTopProps>>;
/** Mode=Light, State=Value */
export declare const SearchTopModeLightStateValue: React.FC<Partial<SearchTopProps>>;
/** Mode=Light, State=Typing */
export declare const SearchTopModeLightStateTyping: React.FC<Partial<SearchTopProps>>;
/** Mode=Light, State=Placeholder */
export declare const SearchTopModeLightStatePlaceholder: React.FC<Partial<SearchTopProps>>;
