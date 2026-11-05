// Named exports for every Figma variant of PopupButton
import { PopupButton } from '../../components/views/PopupButton.jsx';
// figma: State=Enabled
export function PopupButtonStateEnabled(p = {}) { return <PopupButton {...{"state":"enabled"}} {...p} />; }
// figma: State=Disabled
export function PopupButtonStateDisabled(p = {}) { return <PopupButton {...{"state":"disabled"}} {...p} />; }
const __all = [PopupButtonStateEnabled, PopupButtonStateDisabled];
export function PopupButtonVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default PopupButtonVariants;
