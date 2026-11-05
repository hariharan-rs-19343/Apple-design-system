import * as React from 'react';
import type { WatchModeProps } from '../../watchos/bezels/WatchMode';
export interface WatchModeVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchMode side by side. */
export declare const WatchModeVariants: React.FC<WatchModeVariantsProps>;
export default WatchModeVariants;
/** Mode=Light */
export declare const WatchModeModeLight: React.FC<Partial<WatchModeProps>>;
/** Mode=Dark */
export declare const WatchModeModeDark: React.FC<Partial<WatchModeProps>>;
