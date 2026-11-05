// Named exports for every Figma variant of CloseButton
import { CloseButton } from '../../components/controls/CloseButton.jsx';
// figma: Mode=Dark Elevated
export function CloseButtonModeDarkElevated(p = {}) { return <CloseButton {...{"mode":"dark elevated"}} {...p} />; }
// figma: Mode=Dark
export function CloseButtonModeDark(p = {}) { return <CloseButton {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function CloseButtonModeLight(p = {}) { return <CloseButton {...{"mode":"light"}} {...p} />; }
const __all = [CloseButtonModeDarkElevated, CloseButtonModeDark, CloseButtonModeLight];
export function CloseButtonVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default CloseButtonVariants;
