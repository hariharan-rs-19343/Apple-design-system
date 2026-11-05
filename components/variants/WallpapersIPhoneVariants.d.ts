import * as React from 'react';
import type { WallpapersIPhoneProps } from '../../components/home-screen/WallpapersIPhone';
export interface WallpapersIPhoneVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WallpapersIPhone side by side. */
export declare const WallpapersIPhoneVariants: React.FC<WallpapersIPhoneVariantsProps>;
export default WallpapersIPhoneVariants;
/** Mode=Light */
export declare const WallpapersIPhoneModeLight: React.FC<Partial<WallpapersIPhoneProps>>;
/** Mode=Dark */
export declare const WallpapersIPhoneModeDark: React.FC<Partial<WallpapersIPhoneProps>>;
