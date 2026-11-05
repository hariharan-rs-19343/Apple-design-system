// Named exports for every Figma variant of ControlsIPhone2x1
import { ControlsIPhone2x1 } from '../../components/home-screen/ControlsIPhone2x1.jsx';
// figma: On=False, Type=Menu
export function ControlsIPhone2x1OnFalseTypeMenu(p = {}) { return <ControlsIPhone2x1 {...{"on":false,"type":"menu"}} {...p} />; }
// figma: On=True, Type=Menu
export function ControlsIPhone2x1OnTrueTypeMenu(p = {}) { return <ControlsIPhone2x1 {...{"on":true,"type":"menu"}} {...p} />; }
// figma: On=False, Type=Toggle
export function ControlsIPhone2x1OnFalseTypeToggle(p = {}) { return <ControlsIPhone2x1 {...{"on":false,"type":"toggle"}} {...p} />; }
// figma: On=True, Type=Toggle
export function ControlsIPhone2x1OnTrueTypeToggle(p = {}) { return <ControlsIPhone2x1 {...{"on":true,"type":"toggle"}} {...p} />; }
const __all = [ControlsIPhone2x1OnFalseTypeMenu, ControlsIPhone2x1OnTrueTypeMenu, ControlsIPhone2x1OnFalseTypeToggle, ControlsIPhone2x1OnTrueTypeToggle];
export function ControlsIPhone2x1Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ControlsIPhone2x1Variants;
