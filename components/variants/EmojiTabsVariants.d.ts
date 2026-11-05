import * as React from 'react';
import type { EmojiTabsProps } from '../../components/accessory-bars/EmojiTabs';
export interface EmojiTabsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of EmojiTabs side by side. */
export declare const EmojiTabsVariants: React.FC<EmojiTabsVariantsProps>;
export default EmojiTabsVariants;
/** Mode=Dark */
export declare const EmojiTabsModeDark: React.FC<Partial<EmojiTabsProps>>;
/** Mode=Light */
export declare const EmojiTabsModeLight: React.FC<Partial<EmojiTabsProps>>;
