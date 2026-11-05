// Named exports for every Figma variant of WatchItemCarousel
import { WatchItemCarousel } from '../../watchos/lists/WatchItemCarousel.jsx';
// figma: Scroll State=Partially Clipped, Tinted=False
export function WatchItemCarouselScrollStatePartiallyClippedTintedFalse(p = {}) { return <WatchItemCarousel {...{"scrollState":"partially clipped","tinted":false}} {...p} />; }
// figma: Scroll State=Full View, Tinted=False
export function WatchItemCarouselScrollStateFullViewTintedFalse(p = {}) { return <WatchItemCarousel {...{"scrollState":"full view","tinted":false}} {...p} />; }
// figma: Scroll State=Partially Clipped, Tinted=True
export function WatchItemCarouselScrollStatePartiallyClippedTintedTrue(p = {}) { return <WatchItemCarousel {...{"scrollState":"partially clipped","tinted":true}} {...p} />; }
// figma: Scroll State=Full View, Tinted=True
export function WatchItemCarouselScrollStateFullViewTintedTrue(p = {}) { return <WatchItemCarousel {...{"scrollState":"full view","tinted":true}} {...p} />; }
const __all = [WatchItemCarouselScrollStatePartiallyClippedTintedFalse, WatchItemCarouselScrollStateFullViewTintedFalse, WatchItemCarouselScrollStatePartiallyClippedTintedTrue, WatchItemCarouselScrollStateFullViewTintedTrue];
export function WatchItemCarouselVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchItemCarouselVariants;
