// Named exports for every Figma variant of Swatch
import { Swatch } from '../../components/page-controls/Swatch.jsx';
// figma: Type=Label, Mode=Dark
export function SwatchTypeLabelModeDark(p = {}) { return <Swatch {...{"type":"label","mode":"dark"}} {...p} />; }
// figma: Type=Color, Mode=Dark
export function SwatchTypeColorModeDark(p = {}) { return <Swatch {...{"type":"color","mode":"dark"}} {...p} />; }
// figma: Type=Label, Mode=Light
export function SwatchTypeLabelModeLight(p = {}) { return <Swatch {...{"type":"label","mode":"light"}} {...p} />; }
// figma: Type=Color, Mode=Light
export function SwatchTypeColorModeLight(p = {}) { return <Swatch {...{"type":"color","mode":"light"}} {...p} />; }
const __all = [SwatchTypeLabelModeDark, SwatchTypeColorModeDark, SwatchTypeLabelModeLight, SwatchTypeColorModeLight];
export function SwatchVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SwatchVariants;
