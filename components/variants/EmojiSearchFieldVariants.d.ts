import * as React from 'react';
import type { EmojiSearchFieldProps } from '../../components/accessory-bars/EmojiSearchField';
export interface EmojiSearchFieldVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of EmojiSearchField side by side. */
export declare const EmojiSearchFieldVariants: React.FC<EmojiSearchFieldVariantsProps>;
export default EmojiSearchFieldVariants;
/** Mode=Dark */
export declare const EmojiSearchFieldModeDark: React.FC<Partial<EmojiSearchFieldProps>>;
/** Mode=Light */
export declare const EmojiSearchFieldModeLight: React.FC<Partial<EmojiSearchFieldProps>>;
