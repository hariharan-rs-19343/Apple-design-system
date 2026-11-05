import * as React from 'react';
import type { HomeScreenWidgetIPhoneProps } from '../../components/surfaces/HomeScreenWidgetIPhone';
export interface HomeScreenWidgetIPhoneVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of HomeScreenWidgetIPhone side by side. */
export declare const HomeScreenWidgetIPhoneVariants: React.FC<HomeScreenWidgetIPhoneVariantsProps>;
export default HomeScreenWidgetIPhoneVariants;
/** Size=Small */
export declare const HomeScreenWidgetIPhoneSizeSmall: React.FC<Partial<HomeScreenWidgetIPhoneProps>>;
/** Size=Medium */
export declare const HomeScreenWidgetIPhoneSizeMedium: React.FC<Partial<HomeScreenWidgetIPhoneProps>>;
/** Size=Large */
export declare const HomeScreenWidgetIPhoneSizeLarge: React.FC<Partial<HomeScreenWidgetIPhoneProps>>;
