// Named exports for every Figma variant of SubmenuIndicator
import { SubmenuIndicator } from '../../components/accessory-bars/SubmenuIndicator.jsx';
// figma: Open=True
export function SubmenuIndicatorOpenTrue(p = {}) { return <SubmenuIndicator {...{"open":true}} {...p} />; }
// figma: Open=False
export function SubmenuIndicatorOpenFalse(p = {}) { return <SubmenuIndicator {...{"open":false}} {...p} />; }
const __all = [SubmenuIndicatorOpenTrue, SubmenuIndicatorOpenFalse];
export function SubmenuIndicatorVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SubmenuIndicatorVariants;
