import * as React from 'react';
import type { WatchExamplePickersProps } from '../../watchos/examples/WatchExamplePickers';
export interface WatchExamplePickersVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchExamplePickers side by side. */
export declare const WatchExamplePickersVariants: React.FC<WatchExamplePickersVariantsProps>;
export default WatchExamplePickersVariants;
/** Wheels=3 (Mixed Widths) */
export declare const WatchExamplePickersWheels3MixedWidths: React.FC<Partial<WatchExamplePickersProps>>;
/** Wheels=3 */
export declare const WatchExamplePickersWheels3: React.FC<Partial<WatchExamplePickersProps>>;
/** Wheels=2 */
export declare const WatchExamplePickersWheels2: React.FC<Partial<WatchExamplePickersProps>>;
/** Wheels=1 */
export declare const WatchExamplePickersWheels1: React.FC<Partial<WatchExamplePickersProps>>;
