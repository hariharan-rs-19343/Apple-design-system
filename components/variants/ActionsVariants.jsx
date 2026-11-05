// Named exports for every Figma variant of Actions
import { Actions } from '../../components/views/Actions.jsx';
// figma: Mode=Dark
export function ActionsModeDark(p = {}) { return <Actions {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function ActionsModeLight(p = {}) { return <Actions {...{"mode":"light"}} {...p} />; }
const __all = [ActionsModeDark, ActionsModeLight];
export function ActionsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ActionsVariants;
