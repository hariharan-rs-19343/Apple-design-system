// Named exports for every Figma variant of Button
import { Button } from '../../components/views/Button.jsx';
// figma: Mode=Dark
export function ButtonModeDark(p = {}) { return <Button {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function ButtonModeLight(p = {}) { return <Button {...{"mode":"light"}} {...p} />; }
const __all = [ButtonModeDark, ButtonModeLight];
export function ButtonVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonVariants;
