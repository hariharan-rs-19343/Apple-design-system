// Named exports for every Figma variant of IPhone17Pro
import { IPhone17Pro } from '../../components/kit/IPhone17Pro.jsx';
// figma: Color=Cosmic Orange
export function IPhone17ProColorCosmicOrange(p = {}) { return <IPhone17Pro {...{"color":"cosmic orange"}} {...p} />; }
// figma: Color=Deep Blue
export function IPhone17ProColorDeepBlue(p = {}) { return <IPhone17Pro {...{"color":"deep blue"}} {...p} />; }
// figma: Color=Silver
export function IPhone17ProColorSilver(p = {}) { return <IPhone17Pro {...{"color":"silver"}} {...p} />; }
const __all = [IPhone17ProColorCosmicOrange, IPhone17ProColorDeepBlue, IPhone17ProColorSilver];
export function IPhone17ProVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default IPhone17ProVariants;
