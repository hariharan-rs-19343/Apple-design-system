import * as React from 'react';
import type { WatchItemCarouselProps } from '../../watchos/lists/WatchItemCarousel';
export interface WatchItemCarouselVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchItemCarousel side by side. */
export declare const WatchItemCarouselVariants: React.FC<WatchItemCarouselVariantsProps>;
export default WatchItemCarouselVariants;
/** Scroll State=Partially Clipped, Tinted=False */
export declare const WatchItemCarouselScrollStatePartiallyClippedTintedFalse: React.FC<Partial<WatchItemCarouselProps>>;
/** Scroll State=Full View, Tinted=False */
export declare const WatchItemCarouselScrollStateFullViewTintedFalse: React.FC<Partial<WatchItemCarouselProps>>;
/** Scroll State=Partially Clipped, Tinted=True */
export declare const WatchItemCarouselScrollStatePartiallyClippedTintedTrue: React.FC<Partial<WatchItemCarouselProps>>;
/** Scroll State=Full View, Tinted=True */
export declare const WatchItemCarouselScrollStateFullViewTintedTrue: React.FC<Partial<WatchItemCarouselProps>>;
