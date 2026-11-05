// Named exports for every Figma variant of KeysIPadLowercaseDarkVibrant
import { KeysIPadLowercaseDarkVibrant } from '../../components/keyboards-dark/KeysIPadLowercaseDarkVibrant.jsx';
// figma: Type=Default
export function KeysIPadLowercaseDarkVibrantTypeDefault(p = {}) { return <KeysIPadLowercaseDarkVibrant {...{"type":"default"}} {...p} />; }
// figma: Type=Space|comma|period
export function KeysIPadLowercaseDarkVibrantTypeSpaceCommaPeriod(p = {}) { return <KeysIPadLowercaseDarkVibrant {...{"type":"space|comma|period"}} {...p} />; }
const __all = [KeysIPadLowercaseDarkVibrantTypeDefault, KeysIPadLowercaseDarkVibrantTypeSpaceCommaPeriod];
export function KeysIPadLowercaseDarkVibrantVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeysIPadLowercaseDarkVibrantVariants;
