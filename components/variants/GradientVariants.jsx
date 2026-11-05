// Named exports for every Figma variant of Gradient
import { Gradient } from '../../components/backgrounds/Gradient.jsx';
// figma: Mode=Dark, Position=Top
export function GradientModeDarkPositionTop(p = {}) { return <Gradient {...{"mode":"dark","position":"top"}} {...p} />; }
// figma: Mode=Dark, Position=Bottom
export function GradientModeDarkPositionBottom(p = {}) { return <Gradient {...{"mode":"dark","position":"bottom"}} {...p} />; }
// figma: Mode=Light, Position=Top
export function GradientModeLightPositionTop(p = {}) { return <Gradient {...{"mode":"light","position":"top"}} {...p} />; }
// figma: Mode=Light, Position=Bottom
export function GradientModeLightPositionBottom(p = {}) { return <Gradient {...{"mode":"light","position":"bottom"}} {...p} />; }
const __all = [GradientModeDarkPositionTop, GradientModeDarkPositionBottom, GradientModeLightPositionTop, GradientModeLightPositionBottom];
export function GradientVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default GradientVariants;
