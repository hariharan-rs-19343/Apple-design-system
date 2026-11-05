// Named exports for every Figma variant of CustomIcon
import { CustomIcon } from '../../components/app-icons/CustomIcon.jsx';
// figma: Mode=Clear Light
export function CustomIconModeClearLight(p = {}) { return <CustomIcon {...{"mode":"clear light"}} {...p} />; }
// figma: Mode=Dark
export function CustomIconModeDark(p = {}) { return <CustomIcon {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Default
export function CustomIconModeDefault(p = {}) { return <CustomIcon {...{"mode":"default"}} {...p} />; }
const __all = [CustomIconModeClearLight, CustomIconModeDark, CustomIconModeDefault];
export function CustomIconVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default CustomIconVariants;
