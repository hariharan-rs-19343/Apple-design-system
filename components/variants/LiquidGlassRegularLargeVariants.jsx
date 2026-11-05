// Named exports for every Figma variant of LiquidGlassRegularLarge
import { LiquidGlassRegularLarge } from '../../components/surfaces/LiquidGlassRegularLarge.jsx';
// figma: Mode=Dark
export function LiquidGlassRegularLargeModeDark(p = {}) { return <LiquidGlassRegularLarge {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function LiquidGlassRegularLargeModeLight(p = {}) { return <LiquidGlassRegularLarge {...{"mode":"light"}} {...p} />; }
const __all = [LiquidGlassRegularLargeModeDark, LiquidGlassRegularLargeModeLight];
export function LiquidGlassRegularLargeVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default LiquidGlassRegularLargeVariants;
