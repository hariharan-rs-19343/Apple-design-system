// Named exports for every Figma variant of SwatchesAddButton
import { SwatchesAddButton } from '../../components/accessory-bars/SwatchesAddButton.jsx';
// figma: Mode=Light
export function SwatchesAddButtonModeLight(p = {}) { return <SwatchesAddButton {...{"mode":"light"}} {...p} />; }
// figma: Mode=Dark
export function SwatchesAddButtonModeDark(p = {}) { return <SwatchesAddButton {...{"mode":"dark"}} {...p} />; }
const __all = [SwatchesAddButtonModeLight, SwatchesAddButtonModeDark];
export function SwatchesAddButtonVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SwatchesAddButtonVariants;
