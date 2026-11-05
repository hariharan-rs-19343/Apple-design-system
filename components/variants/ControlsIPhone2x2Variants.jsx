// Named exports for every Figma variant of ControlsIPhone2x2
import { ControlsIPhone2x2 } from '../../components/home-screen/ControlsIPhone2x2.jsx';
// figma: On=False
export function ControlsIPhone2x2OnFalse(p = {}) { return <ControlsIPhone2x2 {...{"on":false}} {...p} />; }
// figma: On=True
export function ControlsIPhone2x2OnTrue(p = {}) { return <ControlsIPhone2x2 {...{"on":true}} {...p} />; }
const __all = [ControlsIPhone2x2OnFalse, ControlsIPhone2x2OnTrue];
export function ControlsIPhone2x2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ControlsIPhone2x2Variants;
