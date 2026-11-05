import * as React from 'react';
import type { WatchItemSourceListProps } from '../../watchos/lists/WatchItemSourceList';
export interface WatchItemSourceListVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchItemSourceList side by side. */
export declare const WatchItemSourceListVariants: React.FC<WatchItemSourceListVariantsProps>;
export default WatchItemSourceListVariants;
/** Scroll State=Partially Clipped */
export declare const WatchItemSourceListScrollStatePartiallyClipped: React.FC<Partial<WatchItemSourceListProps>>;
/** Scroll State=Full View */
export declare const WatchItemSourceListScrollStateFullView: React.FC<Partial<WatchItemSourceListProps>>;
