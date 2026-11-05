// Named exports for every Figma variant of CloseButton2
import { CloseButton2 } from '../../components/labels/CloseButton2.jsx';
// figma: Mode=Light
export function CloseButton2ModeLight(p = {}) { return <CloseButton2 {...{"mode":"light"}} {...p} />; }
// figma: Mode=Dark
export function CloseButton2ModeDark(p = {}) { return <CloseButton2 {...{"mode":"dark"}} {...p} />; }
const __all = [CloseButton2ModeLight, CloseButton2ModeDark];
export function CloseButton2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default CloseButton2Variants;
