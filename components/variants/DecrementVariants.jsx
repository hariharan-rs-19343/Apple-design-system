// Named exports for every Figma variant of Decrement
import { Decrement } from '../../components/lists/Decrement.jsx';
// figma: Style=Disabled
export function DecrementStyleDisabled(p = {}) { return <Decrement {...{"style2":"disabled"}} {...p} />; }
// figma: Style=Pressed
export function DecrementStylePressed(p = {}) { return <Decrement {...{"style2":"pressed"}} {...p} />; }
// figma: Style=Default
export function DecrementStyleDefault(p = {}) { return <Decrement {...{"style2":"default"}} {...p} />; }
const __all = [DecrementStyleDisabled, DecrementStylePressed, DecrementStyleDefault];
export function DecrementVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default DecrementVariants;
