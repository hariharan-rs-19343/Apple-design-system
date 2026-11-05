// Named exports for every Figma variant of AccessoryBarIPadFindDark
import { AccessoryBarIPadFindDark } from '../../components/accessory-bars-dark/AccessoryBarIPadFindDark.jsx';
// figma: State=Text Entered
export function AccessoryBarIPadFindDarkStateTextEntered(p = {}) { return <AccessoryBarIPadFindDark {...{"state":"text entered"}} {...p} />; }
// figma: State=Typing
export function AccessoryBarIPadFindDarkStateTyping(p = {}) { return <AccessoryBarIPadFindDark {...{"state":"typing"}} {...p} />; }
// figma: State=Focused
export function AccessoryBarIPadFindDarkStateFocused(p = {}) { return <AccessoryBarIPadFindDark {...{"state":"focused"}} {...p} />; }
// figma: State=Default
export function AccessoryBarIPadFindDarkStateDefault(p = {}) { return <AccessoryBarIPadFindDark {...{"state":"default"}} {...p} />; }
const __all = [AccessoryBarIPadFindDarkStateTextEntered, AccessoryBarIPadFindDarkStateTyping, AccessoryBarIPadFindDarkStateFocused, AccessoryBarIPadFindDarkStateDefault];
export function AccessoryBarIPadFindDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarIPadFindDarkVariants;
