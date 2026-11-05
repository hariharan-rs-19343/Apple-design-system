// Named exports for every Figma variant of Overlay
import { Overlay } from '../../components/navigation/Overlay.jsx';
// figma: Mode=Dark
export function OverlayModeDark(p = {}) { return <Overlay {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function OverlayModeLight(p = {}) { return <Overlay {...{"mode":"light"}} {...p} />; }
const __all = [OverlayModeDark, OverlayModeLight];
export function OverlayVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default OverlayVariants;
