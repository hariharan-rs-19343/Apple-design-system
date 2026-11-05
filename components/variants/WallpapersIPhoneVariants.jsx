// Named exports for every Figma variant of WallpapersIPhone
import { WallpapersIPhone } from '../../components/home-screen/WallpapersIPhone.jsx';
// figma: Mode=Light
export function WallpapersIPhoneModeLight(p = {}) { return <WallpapersIPhone {...{"mode":"light"}} {...p} />; }
// figma: Mode=Dark
export function WallpapersIPhoneModeDark(p = {}) { return <WallpapersIPhone {...{"mode":"dark"}} {...p} />; }
const __all = [WallpapersIPhoneModeLight, WallpapersIPhoneModeDark];
export function WallpapersIPhoneVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WallpapersIPhoneVariants;
