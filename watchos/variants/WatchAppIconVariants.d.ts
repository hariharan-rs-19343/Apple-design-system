import * as React from 'react';
import type { WatchAppIconProps } from '../../watchos/app-icons/WatchAppIcon';
export interface WatchAppIconVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchAppIcon side by side. */
export declare const WatchAppIconVariants: React.FC<WatchAppIconVariantsProps>;
export default WatchAppIconVariants;
/** Type=Custom */
export declare const WatchAppIconTypeCustom: React.FC<Partial<WatchAppIconProps>>;
/** Type=System */
export declare const WatchAppIconTypeSystem: React.FC<Partial<WatchAppIconProps>>;
