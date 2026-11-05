import * as React from 'react';
import type { WatchProgressIndicatorProps } from '../../watchos/controls/WatchProgressIndicator';
export interface WatchProgressIndicatorVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchProgressIndicator side by side. */
export declare const WatchProgressIndicatorVariants: React.FC<WatchProgressIndicatorVariantsProps>;
export default WatchProgressIndicatorVariants;
/** Size=Small (Status Bar) */
export declare const WatchProgressIndicatorSizeSmallStatusBar: React.FC<Partial<WatchProgressIndicatorProps>>;
/** Size=Medium (Table Row) */
export declare const WatchProgressIndicatorSizeMediumTableRow: React.FC<Partial<WatchProgressIndicatorProps>>;
/** Size=Large (Content Area) */
export declare const WatchProgressIndicatorSizeLargeContentArea: React.FC<Partial<WatchProgressIndicatorProps>>;
