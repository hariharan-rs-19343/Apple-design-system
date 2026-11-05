// Named exports for every Figma variant of WallpapersIPad
import { WallpapersIPad } from '../../components/home-screen/WallpapersIPad.jsx';
// figma: Mode=Light
export function WallpapersIPadModeLight(p = {}) { return <WallpapersIPad {...{"mode":"light"}} {...p} />; }
// figma: Mode=Dark
export function WallpapersIPadModeDark(p = {}) { return <WallpapersIPad {...{"mode":"dark"}} {...p} />; }
const __all = [WallpapersIPadModeLight, WallpapersIPadModeDark];
export function WallpapersIPadVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WallpapersIPadVariants;
