// Named exports for every Figma variant of ControlsIPad1x1
import { ControlsIPad1x1 } from '../../components/home-screen/ControlsIPad1x1.jsx';
// figma: On=True
export function ControlsIPad1x1OnTrue(p = {}) { return <ControlsIPad1x1 {...{"on":true}} {...p} />; }
// figma: On=False
export function ControlsIPad1x1OnFalse(p = {}) { return <ControlsIPad1x1 {...{"on":false}} {...p} />; }
const __all = [ControlsIPad1x1OnTrue, ControlsIPad1x1OnFalse];
export function ControlsIPad1x1Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ControlsIPad1x1Variants;
