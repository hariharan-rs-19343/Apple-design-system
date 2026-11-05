// Named exports for every Figma variant of BackgroundIPad
import { BackgroundIPad } from '../../components/backgrounds/BackgroundIPad.jsx';
// figma: Mode=Dark
export function BackgroundIPadModeDark(p = {}) { return <BackgroundIPad {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function BackgroundIPadModeLight(p = {}) { return <BackgroundIPad {...{"mode":"light"}} {...p} />; }
const __all = [BackgroundIPadModeDark, BackgroundIPadModeLight];
export function BackgroundIPadVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default BackgroundIPadVariants;
