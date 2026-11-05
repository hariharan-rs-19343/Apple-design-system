// Named exports for every Figma variant of AccessoryBarIPadReplaceDark
import { AccessoryBarIPadReplaceDark } from '../../components/accessory-bars-dark/AccessoryBarIPadReplaceDark.jsx';
// figma: State=Typing
export function AccessoryBarIPadReplaceDarkStateTyping(p = {}) { return <AccessoryBarIPadReplaceDark {...{"state":"typing"}} {...p} />; }
// figma: State=Focused
export function AccessoryBarIPadReplaceDarkStateFocused(p = {}) { return <AccessoryBarIPadReplaceDark {...{"state":"focused"}} {...p} />; }
// figma: State=Empty
export function AccessoryBarIPadReplaceDarkStateEmpty(p = {}) { return <AccessoryBarIPadReplaceDark {...{"state":"empty"}} {...p} />; }
const __all = [AccessoryBarIPadReplaceDarkStateTyping, AccessoryBarIPadReplaceDarkStateFocused, AccessoryBarIPadReplaceDarkStateEmpty];
export function AccessoryBarIPadReplaceDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarIPadReplaceDarkVariants;
