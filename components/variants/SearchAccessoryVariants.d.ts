import * as React from 'react';
import type { SearchAccessoryProps } from '../../components/toolbars/SearchAccessory';
export interface SearchAccessoryVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SearchAccessory side by side. */
export declare const SearchAccessoryVariants: React.FC<SearchAccessoryVariantsProps>;
export default SearchAccessoryVariants;
/** Show Filters=True */
export declare const SearchAccessoryShowFiltersTrue: React.FC<Partial<SearchAccessoryProps>>;
/** Show Filters=False */
export declare const SearchAccessoryShowFiltersFalse: React.FC<Partial<SearchAccessoryProps>>;
