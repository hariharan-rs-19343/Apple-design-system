// Named exports for every Figma variant of Buttons2
import { Buttons2 } from '../../components/alerts/Buttons2.jsx';
// figma: Mode=Dark, Type=Destructive
export function Buttons2ModeDarkTypeDestructive(p = {}) { return <Buttons2 {...{"mode":"dark","type":"destructive"}} {...p} />; }
// figma: Mode=Dark, Type=Secondary
export function Buttons2ModeDarkTypeSecondary(p = {}) { return <Buttons2 {...{"mode":"dark","type":"secondary"}} {...p} />; }
// figma: Mode=Dark, Type=Primary
export function Buttons2ModeDarkTypePrimary(p = {}) { return <Buttons2 {...{"mode":"dark","type":"primary"}} {...p} />; }
// figma: Mode=Light, Type=Destructive
export function Buttons2ModeLightTypeDestructive(p = {}) { return <Buttons2 {...{"mode":"light","type":"destructive"}} {...p} />; }
// figma: Mode=Light, Type=Secondary
export function Buttons2ModeLightTypeSecondary(p = {}) { return <Buttons2 {...{"mode":"light","type":"secondary"}} {...p} />; }
// figma: Mode=Light, Type=Primary
export function Buttons2ModeLightTypePrimary(p = {}) { return <Buttons2 {...{"mode":"light","type":"primary"}} {...p} />; }
const __all = [Buttons2ModeDarkTypeDestructive, Buttons2ModeDarkTypeSecondary, Buttons2ModeDarkTypePrimary, Buttons2ModeLightTypeDestructive, Buttons2ModeLightTypeSecondary, Buttons2ModeLightTypePrimary];
export function Buttons2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default Buttons2Variants;
