// Named exports for every Figma variant of ToolbarButtonSymbol
import { ToolbarButtonSymbol } from '../../components/sidebar-items/ToolbarButtonSymbol.jsx';
// figma: Mode=Dark
export function ToolbarButtonSymbolModeDark(p = {}) { return <ToolbarButtonSymbol {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function ToolbarButtonSymbolModeLight(p = {}) { return <ToolbarButtonSymbol {...{"mode":"light"}} {...p} />; }
const __all = [ToolbarButtonSymbolModeDark, ToolbarButtonSymbolModeLight];
export function ToolbarButtonSymbolVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ToolbarButtonSymbolVariants;
