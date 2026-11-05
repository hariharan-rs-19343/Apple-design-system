// Named exports for every Figma variant of ToggleSwitch
import { ToggleSwitch } from '../../components/toggles/ToggleSwitch.jsx';
// figma: State=Off
export function ToggleSwitchStateOff(p = {}) { return <ToggleSwitch {...{"state":"off"}} {...p} />; }
// figma: State=On
export function ToggleSwitchStateOn(p = {}) { return <ToggleSwitch {...{"state":"on"}} {...p} />; }
const __all = [ToggleSwitchStateOff, ToggleSwitchStateOn];
export function ToggleSwitchVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ToggleSwitchVariants;
