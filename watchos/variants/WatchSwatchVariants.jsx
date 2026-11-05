// Named exports for every Figma variant of WatchSwatch
import { WatchSwatch } from '../../watchos/colors/WatchSwatch.jsx';
// figma: Type=Label, Mode=Light
export function WatchSwatchTypeLabelModeLight(p = {}) { return <WatchSwatch {...{"type":"label","mode":"light"}} {...p} />; }
// figma: Type=Color, Mode=Light
export function WatchSwatchTypeColorModeLight(p = {}) { return <WatchSwatch {...{"type":"color","mode":"light"}} {...p} />; }
// figma: Type=Label, Mode=Dark
export function WatchSwatchTypeLabelModeDark(p = {}) { return <WatchSwatch {...{"type":"label","mode":"dark"}} {...p} />; }
// figma: Type=Color, Mode=Dark
export function WatchSwatchTypeColorModeDark(p = {}) { return <WatchSwatch {...{"type":"color","mode":"dark"}} {...p} />; }
const __all = [WatchSwatchTypeLabelModeLight, WatchSwatchTypeColorModeLight, WatchSwatchTypeLabelModeDark, WatchSwatchTypeColorModeDark];
export function WatchSwatchVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchSwatchVariants;
