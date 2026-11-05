// Named exports for every Figma variant of AppIconIPhone
import { AppIconIPhone } from '../../components/app-icons/AppIconIPhone.jsx';
// figma: Type=Custom
export function AppIconIPhoneTypeCustom(p = {}) { return <AppIconIPhone {...{"type":"custom"}} {...p} />; }
// figma: Type=System
export function AppIconIPhoneTypeSystem(p = {}) { return <AppIconIPhone {...{"type":"system"}} {...p} />; }
const __all = [AppIconIPhoneTypeCustom, AppIconIPhoneTypeSystem];
export function AppIconIPhoneVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AppIconIPhoneVariants;
