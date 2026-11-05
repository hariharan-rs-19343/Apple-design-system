// Named exports for every Figma variant of Decrement2
import { Decrement2 } from '../../components/sliders/Decrement2.jsx';
// figma: Style=Disabled
export function Decrement2StyleDisabled(p = {}) { return <Decrement2 {...{"style2":"disabled"}} {...p} />; }
// figma: Style=Pressed
export function Decrement2StylePressed(p = {}) { return <Decrement2 {...{"style2":"pressed"}} {...p} />; }
// figma: Style=Default
export function Decrement2StyleDefault(p = {}) { return <Decrement2 {...{"style2":"default"}} {...p} />; }
const __all = [Decrement2StyleDisabled, Decrement2StylePressed, Decrement2StyleDefault];
export function Decrement2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default Decrement2Variants;
