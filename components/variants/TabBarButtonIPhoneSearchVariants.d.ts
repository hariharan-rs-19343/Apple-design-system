import * as React from 'react';
import type { TabBarButtonIPhoneSearchProps } from '../../components/tab-bars/TabBarButtonIPhoneSearch';
export interface TabBarButtonIPhoneSearchVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of TabBarButtonIPhoneSearch side by side. */
export declare const TabBarButtonIPhoneSearchVariants: React.FC<TabBarButtonIPhoneSearchVariantsProps>;
export default TabBarButtonIPhoneSearchVariants;
/** Selected=True, Mode=Light */
export declare const TabBarButtonIPhoneSearchSelectedTrueModeLight: React.FC<Partial<TabBarButtonIPhoneSearchProps>>;
/** Selected=False, Mode=Light */
export declare const TabBarButtonIPhoneSearchSelectedFalseModeLight: React.FC<Partial<TabBarButtonIPhoneSearchProps>>;
/** Selected=True, Mode=Dark */
export declare const TabBarButtonIPhoneSearchSelectedTrueModeDark: React.FC<Partial<TabBarButtonIPhoneSearchProps>>;
/** Selected=False, Mode=Dark */
export declare const TabBarButtonIPhoneSearchSelectedFalseModeDark: React.FC<Partial<TabBarButtonIPhoneSearchProps>>;
