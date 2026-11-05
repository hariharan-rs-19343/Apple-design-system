// Named exports for every Figma variant of AccessoryBarIPhoneFindDark
import { AccessoryBarIPhoneFindDark } from '../../components/accessory-bars-dark/AccessoryBarIPhoneFindDark.jsx';
// figma: State=Text Entered
export function AccessoryBarIPhoneFindDarkStateTextEntered(p = {}) { return <AccessoryBarIPhoneFindDark {...{"state":"text entered"}} {...p} />; }
// figma: State=Typing
export function AccessoryBarIPhoneFindDarkStateTyping(p = {}) { return <AccessoryBarIPhoneFindDark {...{"state":"typing"}} {...p} />; }
// figma: State=Focused
export function AccessoryBarIPhoneFindDarkStateFocused(p = {}) { return <AccessoryBarIPhoneFindDark {...{"state":"focused"}} {...p} />; }
// figma: State=Default
export function AccessoryBarIPhoneFindDarkStateDefault(p = {}) { return <AccessoryBarIPhoneFindDark {...{"state":"default"}} {...p} />; }
const __all = [AccessoryBarIPhoneFindDarkStateTextEntered, AccessoryBarIPhoneFindDarkStateTyping, AccessoryBarIPhoneFindDarkStateFocused, AccessoryBarIPhoneFindDarkStateDefault];
export function AccessoryBarIPhoneFindDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AccessoryBarIPhoneFindDarkVariants;
