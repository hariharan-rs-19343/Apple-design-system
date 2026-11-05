// Named exports for every Figma variant of HSQAActions
import { HSQAActions } from '../../components/home-screen/HSQAActions.jsx';
// figma: Mode=Dark, State=Destructive
export function HSQAActionsModeDarkStateDestructive(p = {}) { return <HSQAActions {...{"mode":"dark","state":"destructive"}} {...p} />; }
// figma: Mode=Dark, State=Default
export function HSQAActionsModeDarkStateDefault(p = {}) { return <HSQAActions {...{"mode":"dark","state":"default"}} {...p} />; }
// figma: Mode=Light, State=Destructive
export function HSQAActionsModeLightStateDestructive(p = {}) { return <HSQAActions {...{"mode":"light","state":"destructive"}} {...p} />; }
// figma: Mode=Light, State=Default
export function HSQAActionsModeLightStateDefault(p = {}) { return <HSQAActions {...{"mode":"light","state":"default"}} {...p} />; }
const __all = [HSQAActionsModeDarkStateDestructive, HSQAActionsModeDarkStateDefault, HSQAActionsModeLightStateDestructive, HSQAActionsModeLightStateDefault];
export function HSQAActionsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default HSQAActionsVariants;
