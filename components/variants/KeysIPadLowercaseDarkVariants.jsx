// Named exports for every Figma variant of KeysIPadLowercaseDark
import { KeysIPadLowercaseDark } from '../../components/keyboards-dark/KeysIPadLowercaseDark.jsx';
// figma: Type=Default
export function KeysIPadLowercaseDarkTypeDefault(p = {}) { return <KeysIPadLowercaseDark {...{"type":"default"}} {...p} />; }
// figma: Type=Space|comma|period
export function KeysIPadLowercaseDarkTypeSpaceCommaPeriod(p = {}) { return <KeysIPadLowercaseDark {...{"type":"space|comma|period"}} {...p} />; }
const __all = [KeysIPadLowercaseDarkTypeDefault, KeysIPadLowercaseDarkTypeSpaceCommaPeriod];
export function KeysIPadLowercaseDarkVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeysIPadLowercaseDarkVariants;
