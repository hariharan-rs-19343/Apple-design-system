import * as React from 'react';
import type { WatchToggleProps } from '../../watchos/controls/WatchToggle';
export interface WatchToggleVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchToggle side by side. */
export declare const WatchToggleVariants: React.FC<WatchToggleVariantsProps>;
export default WatchToggleVariants;
/** State=Off */
export declare const WatchToggleStateOff: React.FC<Partial<WatchToggleProps>>;
/** State=On */
export declare const WatchToggleStateOn: React.FC<Partial<WatchToggleProps>>;
