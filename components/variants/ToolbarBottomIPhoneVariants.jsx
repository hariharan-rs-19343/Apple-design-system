// Named exports for every Figma variant of ToolbarBottomIPhone
import { ToolbarBottomIPhone } from '../../components/toolbars/ToolbarBottomIPhone.jsx';
// figma: Type=Search with Focus
export function ToolbarBottomIPhoneTypeSearchWithFocus(p = {}) { return <ToolbarBottomIPhone {...{"type":"search with focus"}} {...p} />; }
// figma: Type=Search + Leading Item
export function ToolbarBottomIPhoneTypeSearchLeadingItem(p = {}) { return <ToolbarBottomIPhone {...{"type":"search + leading item"}} {...p} />; }
// figma: Type=Search + Trailing Item
export function ToolbarBottomIPhoneTypeSearchTrailingItem(p = {}) { return <ToolbarBottomIPhone {...{"type":"search + trailing item"}} {...p} />; }
// figma: Type=Search
export function ToolbarBottomIPhoneTypeSearch(p = {}) { return <ToolbarBottomIPhone {...{"type":"search"}} {...p} />; }
// figma: Type=Buttons
export function ToolbarBottomIPhoneTypeButtons(p = {}) { return <ToolbarBottomIPhone {...{"type":"buttons"}} {...p} />; }
// figma: Type=Buttons + Page Dots
export function ToolbarBottomIPhoneTypeButtonsPageDots(p = {}) { return <ToolbarBottomIPhone {...{"type":"buttons + page dots"}} {...p} />; }
const __all = [ToolbarBottomIPhoneTypeSearchWithFocus, ToolbarBottomIPhoneTypeSearchLeadingItem, ToolbarBottomIPhoneTypeSearchTrailingItem, ToolbarBottomIPhoneTypeSearch, ToolbarBottomIPhoneTypeButtons, ToolbarBottomIPhoneTypeButtonsPageDots];
export function ToolbarBottomIPhoneVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ToolbarBottomIPhoneVariants;
