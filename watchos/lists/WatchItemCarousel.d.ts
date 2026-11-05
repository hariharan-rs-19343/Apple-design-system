import * as React from 'react';
export interface WatchItemCarouselProps {
  className?: string;
  style?: React.CSSProperties;
  scrollState?: "full view" | "partially clipped";
  tinted?: boolean;
  symbol?: string;
  label?: string;
  subtitle?: string;
  /** Text content; defaults to "􀍠". */
  text1?: string;
}
export declare const WatchItemCarousel: React.FC<WatchItemCarouselProps>;
export default WatchItemCarousel;
