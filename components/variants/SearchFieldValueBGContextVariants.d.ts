import * as React from 'react';
import type { SearchFieldValueBGContextProps } from '../../components/pickers/SearchFieldValueBGContext';
export interface SearchFieldValueBGContextVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SearchFieldValueBGContext side by side. */
export declare const SearchFieldValueBGContextVariants: React.FC<SearchFieldValueBGContextVariantsProps>;
export default SearchFieldValueBGContextVariants;
/** State=Typing */
export declare const SearchFieldValueBGContextStateTyping: React.FC<Partial<SearchFieldValueBGContextProps>>;
/** State=Value */
export declare const SearchFieldValueBGContextStateValue: React.FC<Partial<SearchFieldValueBGContextProps>>;
/** State=Placeholder */
export declare const SearchFieldValueBGContextStatePlaceholder: React.FC<Partial<SearchFieldValueBGContextProps>>;
