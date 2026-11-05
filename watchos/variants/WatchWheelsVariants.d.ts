import * as React from 'react';
import type { WatchWheelsProps } from '../../watchos/pickers/WatchWheels';
export interface WatchWheelsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchWheels side by side. */
export declare const WatchWheelsVariants: React.FC<WatchWheelsVariantsProps>;
export default WatchWheelsVariants;
/** State=Default */
export declare const WatchWheelsStateDefault: React.FC<Partial<WatchWheelsProps>>;
/** State=Focused */
export declare const WatchWheelsStateFocused: React.FC<Partial<WatchWheelsProps>>;
