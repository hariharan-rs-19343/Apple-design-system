// Named exports for every Figma variant of ActionSheetButtonsDark
import { ActionSheetButtonsDark } from '../../components/actions/ActionSheetButtonsDark.jsx';
// figma: Type=Destructive
export function ActionSheetButtonsDarkTypeDestructive(p = {}) { return <ActionSheetButtonsDark {...{"type":"destructive"}} {...p} />; }
// figma: Type=Disabled
export function ActionSheetButtonsDarkTypeDisabled(p = {}) { return <ActionSheetButtonsDark {...{"type":"disabled"}} {...p} />; }
// figma: Type=Default
export function ActionSheetButtonsDarkTypeDefault(p = {}) { return <ActionSheetButtonsDark {...{"type":"default"}} {...p} />; }
const __all = [ActionSheetButtonsDarkTypeDestructive, ActionSheetButtonsDarkTypeDisabled, ActionSheetButtonsDarkTypeDefault];
export function ActionSheetButtonsDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ActionSheetButtonsDarkVariants;
