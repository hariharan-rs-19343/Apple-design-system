// Named exports for every Figma variant of WatchButtonCircular
import { WatchButtonCircular } from '../../watchos/buttons/WatchButtonCircular.jsx';
// figma: Type=Primary Floating
export function WatchButtonCircularTypePrimaryFloating(p = {}) { return <WatchButtonCircular {...{"type":"primary floating"}} {...p} />; }
// figma: Type=Primary
export function WatchButtonCircularTypePrimary(p = {}) { return <WatchButtonCircular {...{"type":"primary"}} {...p} />; }
// figma: Type=Default Floating
export function WatchButtonCircularTypeDefaultFloating(p = {}) { return <WatchButtonCircular {...{"type":"default floating"}} {...p} />; }
// figma: Type=Default
export function WatchButtonCircularTypeDefault(p = {}) { return <WatchButtonCircular {...{"type":"default"}} {...p} />; }
const __all = [WatchButtonCircularTypePrimaryFloating, WatchButtonCircularTypePrimary, WatchButtonCircularTypeDefaultFloating, WatchButtonCircularTypeDefault];
export function WatchButtonCircularVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchButtonCircularVariants;
