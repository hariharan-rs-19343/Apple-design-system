// Named exports for every Figma variant of ControlsIPad2x1
import { ControlsIPad2x1 } from '../../components/home-screen/ControlsIPad2x1.jsx';
// figma: On=False, Type=Menu
export function ControlsIPad2x1OnFalseTypeMenu(p = {}) { return <ControlsIPad2x1 {...{"on":false,"type":"menu"}} {...p} />; }
// figma: On=True, Type=Menu
export function ControlsIPad2x1OnTrueTypeMenu(p = {}) { return <ControlsIPad2x1 {...{"on":true,"type":"menu"}} {...p} />; }
// figma: On=False, Type=Toggle
export function ControlsIPad2x1OnFalseTypeToggle(p = {}) { return <ControlsIPad2x1 {...{"on":false,"type":"toggle"}} {...p} />; }
// figma: On=True, Type=Toggle
export function ControlsIPad2x1OnTrueTypeToggle(p = {}) { return <ControlsIPad2x1 {...{"on":true,"type":"toggle"}} {...p} />; }
const __all = [ControlsIPad2x1OnFalseTypeMenu, ControlsIPad2x1OnTrueTypeMenu, ControlsIPad2x1OnFalseTypeToggle, ControlsIPad2x1OnTrueTypeToggle];
export function ControlsIPad2x1Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ControlsIPad2x1Variants;
