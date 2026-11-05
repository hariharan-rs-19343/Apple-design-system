// Named exports for every Figma variant of BackgroundIPhone
import { BackgroundIPhone } from '../../components/backgrounds/BackgroundIPhone.jsx';
// figma: Mode=Dark
export function BackgroundIPhoneModeDark(p = {}) { return <BackgroundIPhone {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function BackgroundIPhoneModeLight(p = {}) { return <BackgroundIPhone {...{"mode":"light"}} {...p} />; }
const __all = [BackgroundIPhoneModeDark, BackgroundIPhoneModeLight];
export function BackgroundIPhoneVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default BackgroundIPhoneVariants;
