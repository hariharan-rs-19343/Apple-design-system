// Named exports for every Figma variant of AccessoryBarIPadFind
import { AccessoryBarIPadFind } from '../../components/accessory-bars-dark/AccessoryBarIPadFind.jsx';
// figma: State=Text Entered
export function AccessoryBarIPadFindStateTextEntered(p = {}) { return <AccessoryBarIPadFind {...{"state":"text entered"}} {...p} />; }
// figma: State=Typing
export function AccessoryBarIPadFindStateTyping(p = {}) { return <AccessoryBarIPadFind {...{"state":"typing"}} {...p} />; }
// figma: State=Focused
export function AccessoryBarIPadFindStateFocused(p = {}) { return <AccessoryBarIPadFind {...{"state":"focused"}} {...p} />; }
// figma: State=Default
export function AccessoryBarIPadFindStateDefault(p = {}) { return <AccessoryBarIPadFind {...{"state":"default"}} {...p} />; }
const __all = [AccessoryBarIPadFindStateTextEntered, AccessoryBarIPadFindStateTyping, AccessoryBarIPadFindStateFocused, AccessoryBarIPadFindStateDefault];
export function AccessoryBarIPadFindVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarIPadFindVariants;
