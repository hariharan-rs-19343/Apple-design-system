// Named exports for every Figma variant of Checkmark
import { Checkmark } from '../../components/controls/Checkmark.jsx';
// figma: State=Disabled, Mode=Light
export function CheckmarkStateDisabledModeLight(p = {}) { return <Checkmark {...{"state":"disabled","mode":"light"}} {...p} />; }
// figma: State=Default, Mode=Light
export function CheckmarkStateDefaultModeLight(p = {}) { return <Checkmark {...{"state":"default","mode":"light"}} {...p} />; }
const __all = [CheckmarkStateDisabledModeLight, CheckmarkStateDefaultModeLight];
export function CheckmarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default CheckmarkVariants;
