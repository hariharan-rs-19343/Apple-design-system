// Named exports for every Figma variant of Buttons
import { Buttons } from '../../components/misc/Buttons.jsx';
// figma: Type=Destructive
export function ButtonsTypeDestructive(p = {}) { return <Buttons {...{"type":"destructive"}} {...p} />; }
// figma: Type=Disabled
export function ButtonsTypeDisabled(p = {}) { return <Buttons {...{"type":"disabled"}} {...p} />; }
// figma: Type=Default
export function ButtonsTypeDefault(p = {}) { return <Buttons {...{"type":"default"}} {...p} />; }
const __all = [ButtonsTypeDestructive, ButtonsTypeDisabled, ButtonsTypeDefault];
export function ButtonsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonsVariants;
