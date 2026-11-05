import * as React from 'react';
import type { MenuBarItemProps } from '../../components/fields/MenuBarItem';
export interface MenuBarItemVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of MenuBarItem side by side. */
export declare const MenuBarItemVariants: React.FC<MenuBarItemVariantsProps>;
export default MenuBarItemVariants;
/** State=Deselected */
export declare const MenuBarItemStateDeselected: React.FC<Partial<MenuBarItemProps>>;
/** State=Selected */
export declare const MenuBarItemStateSelected: React.FC<Partial<MenuBarItemProps>>;
