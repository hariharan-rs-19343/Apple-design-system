// Named exports for every Figma variant of SheetFullScreenIPhone
import { SheetFullScreenIPhone } from '../../components/kit/SheetFullScreenIPhone.jsx';
// figma: Stacked=True
export function SheetFullScreenIPhoneStackedTrue(p = {}) { return <SheetFullScreenIPhone {...{"stacked":true}} {...p} />; }
// figma: Stacked=False
export function SheetFullScreenIPhoneStackedFalse(p = {}) { return <SheetFullScreenIPhone {...{"stacked":false}} {...p} />; }
const __all = [SheetFullScreenIPhoneStackedTrue, SheetFullScreenIPhoneStackedFalse];
export function SheetFullScreenIPhoneVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SheetFullScreenIPhoneVariants;
