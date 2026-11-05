// Named exports for every Figma variant of HSQABG
import { HSQABG } from '../../components/home-screen/HSQABG.jsx';
// figma: Mode=Light
export function HSQABGModeLight(p = {}) { return <HSQABG {...{"mode":"light"}} {...p} />; }
// figma: Mode=Dark
export function HSQABGModeDark(p = {}) { return <HSQABG {...{"mode":"dark"}} {...p} />; }
const __all = [HSQABGModeLight, HSQABGModeDark];
export function HSQABGVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default HSQABGVariants;
