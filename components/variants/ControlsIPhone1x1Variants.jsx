// Named exports for every Figma variant of ControlsIPhone1x1
import { ControlsIPhone1x1 } from '../../components/home-screen/ControlsIPhone1x1.jsx';
// figma: On=True
export function ControlsIPhone1x1OnTrue(p = {}) { return <ControlsIPhone1x1 {...{"on":true}} {...p} />; }
// figma: On=False
export function ControlsIPhone1x1OnFalse(p = {}) { return <ControlsIPhone1x1 {...{"on":false}} {...p} />; }
const __all = [ControlsIPhone1x1OnTrue, ControlsIPhone1x1OnFalse];
export function ControlsIPhone1x1Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ControlsIPhone1x1Variants;
