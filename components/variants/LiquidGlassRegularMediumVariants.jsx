// Named exports for every Figma variant of LiquidGlassRegularMedium
import { LiquidGlassRegularMedium } from '../../components/alerts/LiquidGlassRegularMedium.jsx';
// figma: Mode=Dark
export function LiquidGlassRegularMediumModeDark(p = {}) { return <LiquidGlassRegularMedium {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function LiquidGlassRegularMediumModeLight(p = {}) { return <LiquidGlassRegularMedium {...{"mode":"light"}} {...p} />; }
const __all = [LiquidGlassRegularMediumModeDark, LiquidGlassRegularMediumModeLight];
export function LiquidGlassRegularMediumVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default LiquidGlassRegularMediumVariants;
