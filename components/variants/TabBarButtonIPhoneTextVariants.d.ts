import * as React from 'react';
import type { TabBarButtonIPhoneTextProps } from '../../components/tab-bars/TabBarButtonIPhoneText';
export interface TabBarButtonIPhoneTextVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of TabBarButtonIPhoneText side by side. */
export declare const TabBarButtonIPhoneTextVariants: React.FC<TabBarButtonIPhoneTextVariantsProps>;
export default TabBarButtonIPhoneTextVariants;
/** Selected=True, Mode=Light */
export declare const TabBarButtonIPhoneTextSelectedTrueModeLight: React.FC<Partial<TabBarButtonIPhoneTextProps>>;
/** Selected=False, Mode=Light */
export declare const TabBarButtonIPhoneTextSelectedFalseModeLight: React.FC<Partial<TabBarButtonIPhoneTextProps>>;
/** Selected=True, Mode=Dark */
export declare const TabBarButtonIPhoneTextSelectedTrueModeDark: React.FC<Partial<TabBarButtonIPhoneTextProps>>;
/** Selected=False, Mode=Dark */
export declare const TabBarButtonIPhoneTextSelectedFalseModeDark: React.FC<Partial<TabBarButtonIPhoneTextProps>>;
