// Named exports for every Figma variant of IndexBar
import { IndexBar } from '../../components/lists/IndexBar.jsx';
// figma: Device=iPad
export function IndexBarDeviceIPad(p = {}) { return <IndexBar {...{"device":"iPad"}} {...p} />; }
// figma: Device=iPhone
export function IndexBarDeviceIPhone(p = {}) { return <IndexBar {...{"device":"iPhone"}} {...p} />; }
const __all = [IndexBarDeviceIPad, IndexBarDeviceIPhone];
export function IndexBarVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default IndexBarVariants;
