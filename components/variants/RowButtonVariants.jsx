// Named exports for every Figma variant of RowButton
import { RowButton } from '../../components/lists/RowButton.jsx';
// figma: Value=Disabled
export function RowButtonValueDisabled(p = {}) { return <RowButton {...{"value":"disabled"}} {...p} />; }
// figma: Value=Destructive
export function RowButtonValueDestructive(p = {}) { return <RowButton {...{"value":"destructive"}} {...p} />; }
// figma: Value=Default
export function RowButtonValueDefault(p = {}) { return <RowButton {...{"value":"default"}} {...p} />; }
const __all = [RowButtonValueDisabled, RowButtonValueDestructive, RowButtonValueDefault];
export function RowButtonVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default RowButtonVariants;
