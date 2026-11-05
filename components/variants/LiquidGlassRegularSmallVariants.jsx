// Named exports for every Figma variant of LiquidGlassRegularSmall
import { LiquidGlassRegularSmall } from '../../components/buttons/LiquidGlassRegularSmall.jsx';
// figma: Mode=Dark, State=Primary
export function LiquidGlassRegularSmallModeDarkStatePrimary(p = {}) { return <LiquidGlassRegularSmall {...{"mode":"dark","state":"primary"}} {...p} />; }
// figma: Mode=Dark, State=Default
export function LiquidGlassRegularSmallModeDarkStateDefault(p = {}) { return <LiquidGlassRegularSmall {...{"mode":"dark","state":"default"}} {...p} />; }
// figma: Mode=Light, State=Primary
export function LiquidGlassRegularSmallModeLightStatePrimary(p = {}) { return <LiquidGlassRegularSmall {...{"mode":"light","state":"primary"}} {...p} />; }
// figma: Mode=Light, State=Default
export function LiquidGlassRegularSmallModeLightStateDefault(p = {}) { return <LiquidGlassRegularSmall {...{"mode":"light","state":"default"}} {...p} />; }
const __all = [LiquidGlassRegularSmallModeDarkStatePrimary, LiquidGlassRegularSmallModeDarkStateDefault, LiquidGlassRegularSmallModeLightStatePrimary, LiquidGlassRegularSmallModeLightStateDefault];
export function LiquidGlassRegularSmallVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default LiquidGlassRegularSmallVariants;
