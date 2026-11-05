// Named exports for every Figma variant of AccessoryBarIPhoneReplaceDark
import { AccessoryBarIPhoneReplaceDark } from '../../components/accessory-bars-dark/AccessoryBarIPhoneReplaceDark.jsx';
// figma: State=Typing
export function AccessoryBarIPhoneReplaceDarkStateTyping(p = {}) { return <AccessoryBarIPhoneReplaceDark {...{"state":"typing"}} {...p} />; }
// figma: State=Focused
export function AccessoryBarIPhoneReplaceDarkStateFocused(p = {}) { return <AccessoryBarIPhoneReplaceDark {...{"state":"focused"}} {...p} />; }
// figma: State=Empty
export function AccessoryBarIPhoneReplaceDarkStateEmpty(p = {}) { return <AccessoryBarIPhoneReplaceDark {...{"state":"empty"}} {...p} />; }
const __all = [AccessoryBarIPhoneReplaceDarkStateTyping, AccessoryBarIPhoneReplaceDarkStateFocused, AccessoryBarIPhoneReplaceDarkStateEmpty];
export function AccessoryBarIPhoneReplaceDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarIPhoneReplaceDarkVariants;
