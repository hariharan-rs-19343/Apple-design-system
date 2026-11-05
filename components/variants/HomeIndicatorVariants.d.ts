import * as React from 'react';
import type { HomeIndicatorProps } from '../../components/bezels/HomeIndicator';
export interface HomeIndicatorVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of HomeIndicator side by side. */
export declare const HomeIndicatorVariants: React.FC<HomeIndicatorVariantsProps>;
export default HomeIndicatorVariants;
/** Device=iPhone, Orientation=Portrait */
export declare const HomeIndicatorDeviceIPhoneOrientationPortrait: React.FC<Partial<HomeIndicatorProps>>;
/** Device=iPhone, Orientation=Landscape */
export declare const HomeIndicatorDeviceIPhoneOrientationLandscape: React.FC<Partial<HomeIndicatorProps>>;
/** Device=iPad, Orientation=Portrait */
export declare const HomeIndicatorDeviceIPadOrientationPortrait: React.FC<Partial<HomeIndicatorProps>>;
/** Device=iPad, Orientation=Landscape */
export declare const HomeIndicatorDeviceIPadOrientationLandscape: React.FC<Partial<HomeIndicatorProps>>;
