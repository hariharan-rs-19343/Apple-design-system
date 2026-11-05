// Named exports for every Figma variant of TitleBody
import { TitleBody } from '../../components/navigation/TitleBody.jsx';
// figma: Mode=Dark
export function TitleBodyModeDark(p = {}) { return <TitleBody {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function TitleBodyModeLight(p = {}) { return <TitleBody {...{"mode":"light"}} {...p} />; }
const __all = [TitleBodyModeDark, TitleBodyModeLight];
export function TitleBodyVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TitleBodyVariants;
