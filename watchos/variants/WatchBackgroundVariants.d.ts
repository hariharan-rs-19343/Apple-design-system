import * as React from 'react';
import type { WatchBackgroundProps } from '../../watchos/widgets/WatchBackground';
export interface WatchBackgroundVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchBackground side by side. */
export declare const WatchBackgroundVariants: React.FC<WatchBackgroundVariantsProps>;
export default WatchBackgroundVariants;
/** Style=Over Dark Background */
export declare const WatchBackgroundStyleOverDarkBackground: React.FC<Partial<WatchBackgroundProps>>;
/** Style=Solid Color */
export declare const WatchBackgroundStyleSolidColor: React.FC<Partial<WatchBackgroundProps>>;
/** Style=Gradient */
export declare const WatchBackgroundStyleGradient: React.FC<Partial<WatchBackgroundProps>>;
