import * as React from 'react';
import type { TabBarButtonIPadTextProps } from '../../components/tab-bars/TabBarButtonIPadText';
export interface TabBarButtonIPadTextVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of TabBarButtonIPadText side by side. */
export declare const TabBarButtonIPadTextVariants: React.FC<TabBarButtonIPadTextVariantsProps>;
export default TabBarButtonIPadTextVariants;
/** Selected=False, Mode=Light */
export declare const TabBarButtonIPadTextSelectedFalseModeLight: React.FC<Partial<TabBarButtonIPadTextProps>>;
/** Selected=True, Mode=Light */
export declare const TabBarButtonIPadTextSelectedTrueModeLight: React.FC<Partial<TabBarButtonIPadTextProps>>;
/** Selected=False, Mode=Dark */
export declare const TabBarButtonIPadTextSelectedFalseModeDark: React.FC<Partial<TabBarButtonIPadTextProps>>;
/** Selected=True, Mode=Dark */
export declare const TabBarButtonIPadTextSelectedTrueModeDark: React.FC<Partial<TabBarButtonIPadTextProps>>;
