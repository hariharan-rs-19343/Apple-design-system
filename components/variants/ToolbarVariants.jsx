// Named exports for every Figma variant of Toolbar
import { Toolbar } from '../../components/accessory-bars/Toolbar.jsx';
// figma: State=Disabled
export function ToolbarStateDisabled(p = {}) { return <Toolbar {...{"state":"disabled"}} {...p} />; }
// figma: State=Default
export function ToolbarStateDefault(p = {}) { return <Toolbar {...{"state":"default"}} {...p} />; }
const __all = [ToolbarStateDisabled, ToolbarStateDefault];
export function ToolbarVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ToolbarVariants;
