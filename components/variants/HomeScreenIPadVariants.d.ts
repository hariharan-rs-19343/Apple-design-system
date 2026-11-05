import * as React from 'react';
import type { HomeScreenIPadProps } from '../../components/home-screen/HomeScreenIPad';
export interface HomeScreenIPadVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of HomeScreenIPad side by side. */
export declare const HomeScreenIPadVariants: React.FC<HomeScreenIPadVariantsProps>;
export default HomeScreenIPadVariants;
/** Widgets=Small */
export declare const HomeScreenIPadWidgetsSmall: React.FC<Partial<HomeScreenIPadProps>>;
/** Widgets=Medium */
export declare const HomeScreenIPadWidgetsMedium: React.FC<Partial<HomeScreenIPadProps>>;
/** Widgets=Large */
export declare const HomeScreenIPadWidgetsLarge: React.FC<Partial<HomeScreenIPadProps>>;
/** Widgets=Extra Large */
export declare const HomeScreenIPadWidgetsExtraLarge: React.FC<Partial<HomeScreenIPadProps>>;
/** Widgets=None */
export declare const HomeScreenIPadWidgetsNone: React.FC<Partial<HomeScreenIPadProps>>;
