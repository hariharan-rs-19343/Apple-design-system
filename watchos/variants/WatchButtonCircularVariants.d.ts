import * as React from 'react';
import type { WatchButtonCircularProps } from '../../watchos/buttons/WatchButtonCircular';
export interface WatchButtonCircularVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchButtonCircular side by side. */
export declare const WatchButtonCircularVariants: React.FC<WatchButtonCircularVariantsProps>;
export default WatchButtonCircularVariants;
/** Type=Primary Floating */
export declare const WatchButtonCircularTypePrimaryFloating: React.FC<Partial<WatchButtonCircularProps>>;
/** Type=Primary */
export declare const WatchButtonCircularTypePrimary: React.FC<Partial<WatchButtonCircularProps>>;
/** Type=Default Floating */
export declare const WatchButtonCircularTypeDefaultFloating: React.FC<Partial<WatchButtonCircularProps>>;
/** Type=Default */
export declare const WatchButtonCircularTypeDefault: React.FC<Partial<WatchButtonCircularProps>>;
