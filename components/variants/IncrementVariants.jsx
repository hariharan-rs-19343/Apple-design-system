// Named exports for every Figma variant of Increment
import { Increment } from '../../components/lists/Increment.jsx';
// figma: Style=Disabled
export function IncrementStyleDisabled(p = {}) { return <Increment {...{"style2":"disabled"}} {...p} />; }
// figma: Style=Pressed
export function IncrementStylePressed(p = {}) { return <Increment {...{"style2":"pressed"}} {...p} />; }
// figma: Style=Default
export function IncrementStyleDefault(p = {}) { return <Increment {...{"style2":"default"}} {...p} />; }
const __all = [IncrementStyleDisabled, IncrementStylePressed, IncrementStyleDefault];
export function IncrementVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default IncrementVariants;
