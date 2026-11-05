// Named exports for every Figma variant of WatchBackground
import { WatchBackground } from '../../watchos/widgets/WatchBackground.jsx';
// figma: Style=Over Dark Background
export function WatchBackgroundStyleOverDarkBackground(p = {}) { return <WatchBackground {...{"style2":"over dark background"}} {...p} />; }
// figma: Style=Solid Color
export function WatchBackgroundStyleSolidColor(p = {}) { return <WatchBackground {...{"style2":"solid color"}} {...p} />; }
// figma: Style=Gradient
export function WatchBackgroundStyleGradient(p = {}) { return <WatchBackground {...{"style2":"gradient"}} {...p} />; }
const __all = [WatchBackgroundStyleOverDarkBackground, WatchBackgroundStyleSolidColor, WatchBackgroundStyleGradient];
export function WatchBackgroundVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchBackgroundVariants;
