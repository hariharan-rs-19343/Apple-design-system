// Named exports for every Figma variant of Increment2
import { Increment2 } from '../../components/steppers/Increment2.jsx';
// figma: Style=Disabled
export function Increment2StyleDisabled(p = {}) { return <Increment2 {...{"style2":"disabled"}} {...p} />; }
// figma: Style=Pressed
export function Increment2StylePressed(p = {}) { return <Increment2 {...{"style2":"pressed"}} {...p} />; }
// figma: Style=Default
export function Increment2StyleDefault(p = {}) { return <Increment2 {...{"style2":"default"}} {...p} />; }
const __all = [Increment2StyleDisabled, Increment2StylePressed, Increment2StyleDefault];
export function Increment2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default Increment2Variants;
