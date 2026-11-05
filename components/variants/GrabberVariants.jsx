// Named exports for every Figma variant of Grabber
import { Grabber } from '../../components/materials/Grabber.jsx';
// figma: Mode=Light
export function GrabberModeLight(p = {}) { return <Grabber {...{"mode":"light"}} {...p} />; }
// figma: Mode=Dark
export function GrabberModeDark(p = {}) { return <Grabber {...{"mode":"dark"}} {...p} />; }
const __all = [GrabberModeLight, GrabberModeDark];
export function GrabberVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default GrabberVariants;
