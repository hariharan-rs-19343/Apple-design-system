// Named exports for every Figma variant of AppIconIPad
import { AppIconIPad } from '../../components/app-icons/AppIconIPad.jsx';
// figma: Type=Custom
export function AppIconIPadTypeCustom(p = {}) { return <AppIconIPad {...{"type":"custom"}} {...p} />; }
// figma: Type=System
export function AppIconIPadTypeSystem(p = {}) { return <AppIconIPad {...{"type":"system"}} {...p} />; }
const __all = [AppIconIPadTypeCustom, AppIconIPadTypeSystem];
export function AppIconIPadVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AppIconIPadVariants;
