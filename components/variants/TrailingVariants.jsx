// Named exports for every Figma variant of Trailing
import { Trailing } from '../../components/misc/Trailing.jsx';
// figma: Disclosable=False
export function TrailingDisclosableFalse(p = {}) { return <Trailing {...{"disclosable":false}} {...p} />; }
// figma: Disclosable=True
export function TrailingDisclosableTrue(p = {}) { return <Trailing {...{"disclosable":true}} {...p} />; }
const __all = [TrailingDisclosableFalse, TrailingDisclosableTrue];
export function TrailingVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TrailingVariants;
