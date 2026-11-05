// Named exports for every Figma variant of Action
import { Action } from '../../components/views/Action.jsx';
// figma: Mode=Dark
export function ActionModeDark(p = {}) { return <Action {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function ActionModeLight(p = {}) { return <Action {...{"mode":"light"}} {...p} />; }
const __all = [ActionModeDark, ActionModeLight];
export function ActionVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ActionVariants;
