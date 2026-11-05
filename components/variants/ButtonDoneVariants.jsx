// Named exports for every Figma variant of ButtonDone
import { ButtonDone } from '../../components/buttons/ButtonDone.jsx';
// figma: BG Context=Dim
export function ButtonDoneBGContextDim(p = {}) { return <ButtonDone {...{"bGContext":"dim"}} {...p} />; }
// figma: BG Context=Bright
export function ButtonDoneBGContextBright(p = {}) { return <ButtonDone {...{"bGContext":"bright"}} {...p} />; }
const __all = [ButtonDoneBGContextDim, ButtonDoneBGContextBright];
export function ButtonDoneVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ButtonDoneVariants;
