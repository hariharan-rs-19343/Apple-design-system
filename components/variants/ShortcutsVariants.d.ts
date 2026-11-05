import * as React from 'react';
import type { ShortcutsProps } from '../../components/segmented-controls/Shortcuts';
export interface ShortcutsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Shortcuts side by side. */
export declare const ShortcutsVariants: React.FC<ShortcutsVariantsProps>;
export default ShortcutsVariants;
/** Mode=Dark Elevated */
export declare const ShortcutsModeDarkElevated: React.FC<Partial<ShortcutsProps>>;
/** Mode=Dark */
export declare const ShortcutsModeDark: React.FC<Partial<ShortcutsProps>>;
/** Mode=Light */
export declare const ShortcutsModeLight: React.FC<Partial<ShortcutsProps>>;
