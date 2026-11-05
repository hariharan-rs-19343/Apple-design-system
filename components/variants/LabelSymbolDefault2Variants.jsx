// Named exports for every Figma variant of LabelSymbolDefault2
import { LabelSymbolDefault2 } from '../../components/buttons/LabelSymbolDefault2.jsx';
// figma: State=Default, BG Context=Dim
export function LabelSymbolDefault2StateDefaultBGContextDim(p = {}) { return <LabelSymbolDefault2 {...{"state":"default","bGContext":"dim"}} {...p} />; }
// figma: State=Default, BG Context=Bright
export function LabelSymbolDefault2StateDefaultBGContextBright(p = {}) { return <LabelSymbolDefault2 {...{"state":"default","bGContext":"bright"}} {...p} />; }
const __all = [LabelSymbolDefault2StateDefaultBGContextDim, LabelSymbolDefault2StateDefaultBGContextBright];
export function LabelSymbolDefault2Variants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default LabelSymbolDefault2Variants;
