import * as React from 'react';
import type { WatchSwatchProps } from '../../watchos/colors/WatchSwatch';
export interface WatchSwatchVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchSwatch side by side. */
export declare const WatchSwatchVariants: React.FC<WatchSwatchVariantsProps>;
export default WatchSwatchVariants;
/** Type=Label, Mode=Light */
export declare const WatchSwatchTypeLabelModeLight: React.FC<Partial<WatchSwatchProps>>;
/** Type=Color, Mode=Light */
export declare const WatchSwatchTypeColorModeLight: React.FC<Partial<WatchSwatchProps>>;
/** Type=Label, Mode=Dark */
export declare const WatchSwatchTypeLabelModeDark: React.FC<Partial<WatchSwatchProps>>;
/** Type=Color, Mode=Dark */
export declare const WatchSwatchTypeColorModeDark: React.FC<Partial<WatchSwatchProps>>;
