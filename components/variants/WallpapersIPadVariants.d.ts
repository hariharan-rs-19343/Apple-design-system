import * as React from 'react';
import type { WallpapersIPadProps } from '../../components/home-screen/WallpapersIPad';
export interface WallpapersIPadVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WallpapersIPad side by side. */
export declare const WallpapersIPadVariants: React.FC<WallpapersIPadVariantsProps>;
export default WallpapersIPadVariants;
/** Mode=Light */
export declare const WallpapersIPadModeLight: React.FC<Partial<WallpapersIPadProps>>;
/** Mode=Dark */
export declare const WallpapersIPadModeDark: React.FC<Partial<WallpapersIPadProps>>;
