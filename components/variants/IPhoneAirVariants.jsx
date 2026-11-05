// Named exports for every Figma variant of IPhoneAir
import { IPhoneAir } from '../../components/kit/IPhoneAir.jsx';
// figma: Color=Cloud White
export function IPhoneAirColorCloudWhite(p = {}) { return <IPhoneAir {...{"color":"cloud white"}} {...p} />; }
// figma: Color=Light Gold
export function IPhoneAirColorLightGold(p = {}) { return <IPhoneAir {...{"color":"light gold"}} {...p} />; }
// figma: Color=Sky Blue
export function IPhoneAirColorSkyBlue(p = {}) { return <IPhoneAir {...{"color":"sky blue"}} {...p} />; }
// figma: Color=Space Black
export function IPhoneAirColorSpaceBlack(p = {}) { return <IPhoneAir {...{"color":"space black"}} {...p} />; }
const __all = [IPhoneAirColorCloudWhite, IPhoneAirColorLightGold, IPhoneAirColorSkyBlue, IPhoneAirColorSpaceBlack];
export function IPhoneAirVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default IPhoneAirVariants;
