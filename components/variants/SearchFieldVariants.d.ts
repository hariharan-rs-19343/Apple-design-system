import * as React from 'react';
import type { SearchFieldProps } from '../../components/fields/SearchField';
export interface SearchFieldVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SearchField side by side. */
export declare const SearchFieldVariants: React.FC<SearchFieldVariantsProps>;
export default SearchFieldVariants;
/** State=Typing */
export declare const SearchFieldStateTyping: React.FC<Partial<SearchFieldProps>>;
/** State=Focused */
export declare const SearchFieldStateFocused: React.FC<Partial<SearchFieldProps>>;
/** State=Placeholder */
export declare const SearchFieldStatePlaceholder: React.FC<Partial<SearchFieldProps>>;
