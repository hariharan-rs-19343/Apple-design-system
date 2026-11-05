// Named exports for every Figma variant of WindowControls
import { WindowControls } from '../../components/surfaces/WindowControls.jsx';
// figma: State=Inactive
export function WindowControlsStateInactive(p = {}) { return <WindowControls {...{"state":"inactive"}} {...p} />; }
// figma: State=Active
export function WindowControlsStateActive(p = {}) { return <WindowControls {...{"state":"active"}} {...p} />; }
const __all = [WindowControlsStateInactive, WindowControlsStateActive];
export function WindowControlsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WindowControlsVariants;
