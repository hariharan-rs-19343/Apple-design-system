import * as React from 'react';
import type { MenuIPhoneProps } from '../../components/kit/MenuIPhone';
export interface MenuIPhoneVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of MenuIPhone side by side. */
export declare const MenuIPhoneVariants: React.FC<MenuIPhoneVariantsProps>;
export default MenuIPhoneVariants;
/** Mode=Dark */
export declare const MenuIPhoneModeDark: React.FC<Partial<MenuIPhoneProps>>;
/** Mode=Light */
export declare const MenuIPhoneModeLight: React.FC<Partial<MenuIPhoneProps>>;
