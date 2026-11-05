// Named exports for every Figma variant of AccessoryBarIPadReplace
import { AccessoryBarIPadReplace } from '../../components/accessory-bars-dark/AccessoryBarIPadReplace.jsx';
// figma: State=Typing
export function AccessoryBarIPadReplaceStateTyping(p = {}) { return <AccessoryBarIPadReplace {...{"state":"typing"}} {...p} />; }
// figma: State=Focused
export function AccessoryBarIPadReplaceStateFocused(p = {}) { return <AccessoryBarIPadReplace {...{"state":"focused"}} {...p} />; }
// figma: State=Empty
export function AccessoryBarIPadReplaceStateEmpty(p = {}) { return <AccessoryBarIPadReplace {...{"state":"empty"}} {...p} />; }
const __all = [AccessoryBarIPadReplaceStateTyping, AccessoryBarIPadReplaceStateFocused, AccessoryBarIPadReplaceStateEmpty];
export function AccessoryBarIPadReplaceVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarIPadReplaceVariants;
