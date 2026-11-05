import * as React from 'react';
import type { HomeScreenIPhoneProps } from '../../components/kit/HomeScreenIPhone';
export interface HomeScreenIPhoneVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of HomeScreenIPhone side by side. */
export declare const HomeScreenIPhoneVariants: React.FC<HomeScreenIPhoneVariantsProps>;
export default HomeScreenIPhoneVariants;
/** Widgets=Small */
export declare const HomeScreenIPhoneWidgetsSmall: React.FC<Partial<HomeScreenIPhoneProps>>;
/** Widgets=Medium */
export declare const HomeScreenIPhoneWidgetsMedium: React.FC<Partial<HomeScreenIPhoneProps>>;
/** Widgets=Large */
export declare const HomeScreenIPhoneWidgetsLarge: React.FC<Partial<HomeScreenIPhoneProps>>;
/** Widgets=None */
export declare const HomeScreenIPhoneWidgetsNone: React.FC<Partial<HomeScreenIPhoneProps>>;
