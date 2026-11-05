import * as React from 'react';
import type { MenuItemDarkProps } from '../../components/fields/MenuItemDark';
export interface MenuItemDarkVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of MenuItemDark side by side. */
export declare const MenuItemDarkVariants: React.FC<MenuItemDarkVariantsProps>;
export default MenuItemDarkVariants;
/** Type=Destructive */
export declare const MenuItemDarkTypeDestructive: React.FC<Partial<MenuItemDarkProps>>;
/** Type=Default */
export declare const MenuItemDarkTypeDefault: React.FC<Partial<MenuItemDarkProps>>;
