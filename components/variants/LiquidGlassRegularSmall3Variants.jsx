// Named exports for every Figma variant of LiquidGlassRegularSmall3
import { LiquidGlassRegularSmall3 } from '../../components/accessory-bars/LiquidGlassRegularSmall3.jsx';
// figma: Mode=Dark, State=Primary
export function LiquidGlassRegularSmall3ModeDarkStatePrimary(p = {}) { return <LiquidGlassRegularSmall3 {...{"mode":"dark","state":"primary"}} {...p} />; }
// figma: Mode=Dark, State=Default
export function LiquidGlassRegularSmall3ModeDarkStateDefault(p = {}) { return <LiquidGlassRegularSmall3 {...{"mode":"dark","state":"default"}} {...p} />; }
// figma: Mode=Light, State=Primary
export function LiquidGlassRegularSmall3ModeLightStatePrimary(p = {}) { return <LiquidGlassRegularSmall3 {...{"mode":"light","state":"primary"}} {...p} />; }
// figma: Mode=Light, State=Default
export function LiquidGlassRegularSmall3ModeLightStateDefault(p = {}) { return <LiquidGlassRegularSmall3 {...{"mode":"light","state":"default"}} {...p} />; }
const __all = [LiquidGlassRegularSmall3ModeDarkStatePrimary, LiquidGlassRegularSmall3ModeDarkStateDefault, LiquidGlassRegularSmall3ModeLightStatePrimary, LiquidGlassRegularSmall3ModeLightStateDefault];
export function LiquidGlassRegularSmall3Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default LiquidGlassRegularSmall3Variants;
