// Named exports for every Figma variant of ToolbarButtonText
import { ToolbarButtonText } from '../../components/sidebar-items/ToolbarButtonText.jsx';
// figma: Mode=Dark
export function ToolbarButtonTextModeDark(p = {}) { return <ToolbarButtonText {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function ToolbarButtonTextModeLight(p = {}) { return <ToolbarButtonText {...{"mode":"light"}} {...p} />; }
const __all = [ToolbarButtonTextModeDark, ToolbarButtonTextModeLight];
export function ToolbarButtonTextVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ToolbarButtonTextVariants;
