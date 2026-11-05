// Named exports for every Figma variant of IPhone17
import { IPhone17 } from '../../components/kit/IPhone17.jsx';
// figma: Color=Black
export function IPhone17ColorBlack(p = {}) { return <IPhone17 {...{"color":"black"}} {...p} />; }
// figma: Color=Lavendar
export function IPhone17ColorLavendar(p = {}) { return <IPhone17 {...{"color":"lavendar"}} {...p} />; }
// figma: Color=Mist Blue
export function IPhone17ColorMistBlue(p = {}) { return <IPhone17 {...{"color":"mist blue"}} {...p} />; }
// figma: Color=Sage
export function IPhone17ColorSage(p = {}) { return <IPhone17 {...{"color":"sage"}} {...p} />; }
// figma: Color=White
export function IPhone17ColorWhite(p = {}) { return <IPhone17 {...{"color":"white"}} {...p} />; }
const __all = [IPhone17ColorBlack, IPhone17ColorLavendar, IPhone17ColorMistBlue, IPhone17ColorSage, IPhone17ColorWhite];
export function IPhone17Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default IPhone17Variants;
