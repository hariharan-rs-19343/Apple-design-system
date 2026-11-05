import * as React from 'react';
import type { SearchFieldDarkProps } from '../../components/pickers/SearchFieldDark';
export interface SearchFieldDarkVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SearchFieldDark side by side. */
export declare const SearchFieldDarkVariants: React.FC<SearchFieldDarkVariantsProps>;
export default SearchFieldDarkVariants;
/** State=Typing */
export declare const SearchFieldDarkStateTyping: React.FC<Partial<SearchFieldDarkProps>>;
/** State=Focused */
export declare const SearchFieldDarkStateFocused: React.FC<Partial<SearchFieldDarkProps>>;
/** State=Placeholder */
export declare const SearchFieldDarkStatePlaceholder: React.FC<Partial<SearchFieldDarkProps>>;
