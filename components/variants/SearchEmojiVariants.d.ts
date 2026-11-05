import * as React from 'react';
import type { SearchEmojiProps } from '../../components/pickers/SearchEmoji';
export interface SearchEmojiVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SearchEmoji side by side. */
export declare const SearchEmojiVariants: React.FC<SearchEmojiVariantsProps>;
export default SearchEmojiVariants;
/** Mode=Dark */
export declare const SearchEmojiModeDark: React.FC<Partial<SearchEmojiProps>>;
/** Mode=Light */
export declare const SearchEmojiModeLight: React.FC<Partial<SearchEmojiProps>>;
