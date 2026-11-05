// Named exports for every Figma variant of CompactMenu
import { CompactMenu } from '../../components/views/CompactMenu.jsx';
// figma: Actions=6
export function CompactMenuActions6(p = {}) { return <CompactMenu {...{"actions":"6"}} {...p} />; }
// figma: Actions=5
export function CompactMenuActions5(p = {}) { return <CompactMenu {...{"actions":"5"}} {...p} />; }
// figma: Actions=4
export function CompactMenuActions4(p = {}) { return <CompactMenu {...{"actions":"4"}} {...p} />; }
// figma: Actions=3
export function CompactMenuActions3(p = {}) { return <CompactMenu {...{"actions":"3"}} {...p} />; }
// figma: Actions=2
export function CompactMenuActions2(p = {}) { return <CompactMenu {...{"actions":"2"}} {...p} />; }
const __all = [CompactMenuActions6, CompactMenuActions5, CompactMenuActions4, CompactMenuActions3, CompactMenuActions2];
export function CompactMenuVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default CompactMenuVariants;
