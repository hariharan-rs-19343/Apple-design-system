// Named exports for every Figma variant of AccessoryBarIPhoneReplace
import { AccessoryBarIPhoneReplace } from '../../components/accessory-bars-dark/AccessoryBarIPhoneReplace.jsx';
// figma: State=Typing
export function AccessoryBarIPhoneReplaceStateTyping(p = {}) { return <AccessoryBarIPhoneReplace {...{"state":"typing"}} {...p} />; }
// figma: State=Focused
export function AccessoryBarIPhoneReplaceStateFocused(p = {}) { return <AccessoryBarIPhoneReplace {...{"state":"focused"}} {...p} />; }
// figma: State=Empty
export function AccessoryBarIPhoneReplaceStateEmpty(p = {}) { return <AccessoryBarIPhoneReplace {...{"state":"empty"}} {...p} />; }
const __all = [AccessoryBarIPhoneReplaceStateTyping, AccessoryBarIPhoneReplaceStateFocused, AccessoryBarIPhoneReplaceStateEmpty];
export function AccessoryBarIPhoneReplaceVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarIPhoneReplaceVariants;
