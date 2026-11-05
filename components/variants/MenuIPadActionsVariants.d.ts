import * as React from 'react';
import type { MenuIPadActionsProps } from '../../components/kit/MenuIPadActions';
export interface MenuIPadActionsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of MenuIPadActions side by side. */
export declare const MenuIPadActionsVariants: React.FC<MenuIPadActionsVariantsProps>;
export default MenuIPadActionsVariants;
/** Mode=Dark */
export declare const MenuIPadActionsModeDark: React.FC<Partial<MenuIPadActionsProps>>;
/** Mode=Light */
export declare const MenuIPadActionsModeLight: React.FC<Partial<MenuIPadActionsProps>>;
