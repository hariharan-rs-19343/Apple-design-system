import * as React from 'react';
import type { HomeScreenWidgetIPadProps } from '../../components/home-screen/HomeScreenWidgetIPad';
export interface HomeScreenWidgetIPadVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of HomeScreenWidgetIPad side by side. */
export declare const HomeScreenWidgetIPadVariants: React.FC<HomeScreenWidgetIPadVariantsProps>;
export default HomeScreenWidgetIPadVariants;
/** Size=Small */
export declare const HomeScreenWidgetIPadSizeSmall: React.FC<Partial<HomeScreenWidgetIPadProps>>;
/** Size=Medium */
export declare const HomeScreenWidgetIPadSizeMedium: React.FC<Partial<HomeScreenWidgetIPadProps>>;
/** Size=Large */
export declare const HomeScreenWidgetIPadSizeLarge: React.FC<Partial<HomeScreenWidgetIPadProps>>;
/** Size=Extra Large */
export declare const HomeScreenWidgetIPadSizeExtraLarge: React.FC<Partial<HomeScreenWidgetIPadProps>>;
