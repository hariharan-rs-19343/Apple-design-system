// Named exports for every Figma variant of IPhone15Pro
import { IPhone15Pro } from '../../components/kit/IPhone15Pro.jsx';
// figma: Style=Display only
export function IPhone15ProStyleDisplayOnly(p = {}) { return <IPhone15Pro {...{"style2":"display only"}} {...p} />; }
// figma: Style=Bezel
export function IPhone15ProStyleBezel(p = {}) { return <IPhone15Pro {...{"style2":"bezel"}} {...p} />; }
const __all = [IPhone15ProStyleDisplayOnly, IPhone15ProStyleBezel];
export function IPhone15ProVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default IPhone15ProVariants;
