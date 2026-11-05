import * as React from 'react';
import type { MenuIndicatorProps } from '../../components/menus/MenuIndicator';
export interface MenuIndicatorVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of MenuIndicator side by side. */
export declare const MenuIndicatorVariants: React.FC<MenuIndicatorVariantsProps>;
export default MenuIndicatorVariants;
/** Mode=Dark */
export declare const MenuIndicatorModeDark: React.FC<Partial<MenuIndicatorProps>>;
/** Mode=Light */
export declare const MenuIndicatorModeLight: React.FC<Partial<MenuIndicatorProps>>;
