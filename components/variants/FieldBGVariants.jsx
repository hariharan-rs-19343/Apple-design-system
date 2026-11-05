// Named exports for every Figma variant of FieldBG
import { FieldBG } from '../../components/fields/FieldBG.jsx';
// figma: Mode=Dark
export function FieldBGModeDark(p = {}) { return <FieldBG {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function FieldBGModeLight(p = {}) { return <FieldBG {...{"mode":"light"}} {...p} />; }
const __all = [FieldBGModeDark, FieldBGModeLight];
export function FieldBGVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default FieldBGVariants;
