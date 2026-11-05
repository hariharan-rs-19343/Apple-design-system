import * as React from 'react';
import type { WatchButtonPayProps } from '../../watchos/buttons/WatchButtonPay';
export interface WatchButtonPayVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchButtonPay side by side. */
export declare const WatchButtonPayVariants: React.FC<WatchButtonPayVariantsProps>;
export default WatchButtonPayVariants;
/** Size=Small */
export declare const WatchButtonPaySizeSmall: React.FC<Partial<WatchButtonPayProps>>;
/** Size=Full width */
export declare const WatchButtonPaySizeFullWidth: React.FC<Partial<WatchButtonPayProps>>;
