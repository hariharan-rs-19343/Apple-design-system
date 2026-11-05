// Named exports for every Figma variant of IPhone17ProMax
import { IPhone17ProMax } from '../../components/kit/IPhone17ProMax.jsx';
// figma: Color=Cosmic Orange
export function IPhone17ProMaxColorCosmicOrange(p = {}) { return <IPhone17ProMax {...{"color":"cosmic orange"}} {...p} />; }
// figma: Color=Deep Blue
export function IPhone17ProMaxColorDeepBlue(p = {}) { return <IPhone17ProMax {...{"color":"deep blue"}} {...p} />; }
// figma: Color=Silver
export function IPhone17ProMaxColorSilver(p = {}) { return <IPhone17ProMax {...{"color":"silver"}} {...p} />; }
const __all = [IPhone17ProMaxColorCosmicOrange, IPhone17ProMaxColorDeepBlue, IPhone17ProMaxColorSilver];
export function IPhone17ProMaxVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default IPhone17ProMaxVariants;
