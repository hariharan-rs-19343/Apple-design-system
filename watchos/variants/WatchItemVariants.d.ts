import * as React from 'react';
import type { WatchItemProps } from '../../watchos/lists/WatchItem';
export interface WatchItemVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchItem side by side. */
export declare const WatchItemVariants: React.FC<WatchItemVariantsProps>;
export default WatchItemVariants;
/** Text=3-Line Label + Symbol */
export declare const WatchItemText3LineLabelSymbol: React.FC<Partial<WatchItemProps>>;
/** Text=Label + Symbol */
export declare const WatchItemTextLabelSymbol: React.FC<Partial<WatchItemProps>>;
/** Text=Subtitle + Title */
export declare const WatchItemTextSubtitleTitle: React.FC<Partial<WatchItemProps>>;
/** Text=Label + Subtitle */
export declare const WatchItemTextLabelSubtitle: React.FC<Partial<WatchItemProps>>;
/** Text=Default */
export declare const WatchItemTextDefault: React.FC<Partial<WatchItemProps>>;
