// Named exports for every Figma variant of AccessoryBarAutocorrectionDark
import { AccessoryBarAutocorrectionDark } from '../../components/accessory-bars-dark/AccessoryBarAutocorrectionDark.jsx';
// figma: Selection=3
export function AccessoryBarAutocorrectionDarkSelection3(p = {}) { return <AccessoryBarAutocorrectionDark {...{"selection":"3"}} {...p} />; }
// figma: Selection=2
export function AccessoryBarAutocorrectionDarkSelection2(p = {}) { return <AccessoryBarAutocorrectionDark {...{"selection":"2"}} {...p} />; }
// figma: Selection=1
export function AccessoryBarAutocorrectionDarkSelection1(p = {}) { return <AccessoryBarAutocorrectionDark {...{"selection":"1"}} {...p} />; }
// figma: Selection=None
export function AccessoryBarAutocorrectionDarkSelectionNone(p = {}) { return <AccessoryBarAutocorrectionDark {...{"selection":"none"}} {...p} />; }
const __all = [AccessoryBarAutocorrectionDarkSelection3, AccessoryBarAutocorrectionDarkSelection2, AccessoryBarAutocorrectionDarkSelection1, AccessoryBarAutocorrectionDarkSelectionNone];
export function AccessoryBarAutocorrectionDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarAutocorrectionDarkVariants;
