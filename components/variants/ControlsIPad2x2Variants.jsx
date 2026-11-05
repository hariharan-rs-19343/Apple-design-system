// Named exports for every Figma variant of ControlsIPad2x2
import { ControlsIPad2x2 } from '../../components/home-screen/ControlsIPad2x2.jsx';
// figma: On=False
export function ControlsIPad2x2OnFalse(p = {}) { return <ControlsIPad2x2 {...{"on":false}} {...p} />; }
// figma: On=True
export function ControlsIPad2x2OnTrue(p = {}) { return <ControlsIPad2x2 {...{"on":true}} {...p} />; }
const __all = [ControlsIPad2x2OnFalse, ControlsIPad2x2OnTrue];
export function ControlsIPad2x2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ControlsIPad2x2Variants;
