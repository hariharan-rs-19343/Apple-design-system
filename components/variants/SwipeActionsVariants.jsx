// Named exports for every Figma variant of SwipeActions
import { SwipeActions } from '../../components/accessory-bars/SwipeActions.jsx';
// figma: Actions=3, Type=Symbol + Text
export function SwipeActionsActions3TypeSymbolText(p = {}) { return <SwipeActions {...{"actions":"3","type":"symbol + text"}} {...p} />; }
// figma: Actions=2, Type=Symbol + Text
export function SwipeActionsActions2TypeSymbolText(p = {}) { return <SwipeActions {...{"actions":"2","type":"symbol + text"}} {...p} />; }
// figma: Actions=1, Type=Symbol + Text
export function SwipeActionsActions1TypeSymbolText(p = {}) { return <SwipeActions {...{"actions":"1","type":"symbol + text"}} {...p} />; }
// figma: Actions=3, Type=Text
export function SwipeActionsActions3TypeText(p = {}) { return <SwipeActions {...{"actions":"3","type":"text"}} {...p} />; }
// figma: Actions=2, Type=Text
export function SwipeActionsActions2TypeText(p = {}) { return <SwipeActions {...{"actions":"2","type":"text"}} {...p} />; }
// figma: Actions=1, Type=Text
export function SwipeActionsActions1TypeText(p = {}) { return <SwipeActions {...{"actions":"1","type":"text"}} {...p} />; }
// figma: Actions=3, Type=Symbol
export function SwipeActionsActions3TypeSymbol(p = {}) { return <SwipeActions {...{"actions":"3","type":"symbol"}} {...p} />; }
// figma: Actions=2, Type=Symbol
export function SwipeActionsActions2TypeSymbol(p = {}) { return <SwipeActions {...{"actions":"2","type":"symbol"}} {...p} />; }
// figma: Actions=1, Type=Symbol
export function SwipeActionsActions1TypeSymbol(p = {}) { return <SwipeActions {...{"actions":"1","type":"symbol"}} {...p} />; }
const __all = [SwipeActionsActions3TypeSymbolText, SwipeActionsActions2TypeSymbolText, SwipeActionsActions1TypeSymbolText, SwipeActionsActions3TypeText, SwipeActionsActions2TypeText, SwipeActionsActions1TypeText, SwipeActionsActions3TypeSymbol, SwipeActionsActions2TypeSymbol, SwipeActionsActions1TypeSymbol];
export function SwipeActionsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SwipeActionsVariants;
