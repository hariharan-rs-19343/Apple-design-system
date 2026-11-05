// Named exports for every Figma variant of KeysIPadCommand
import { KeysIPadCommand } from '../../components/keyboards/KeysIPadCommand.jsx';
// figma: Mode=Dark, Align=Right
export function KeysIPadCommandModeDarkAlignRight(p = {}) { return <KeysIPadCommand {...{"mode":"dark","align":"right"}} {...p} />; }
// figma: Mode=Dark, Align=Left
export function KeysIPadCommandModeDarkAlignLeft(p = {}) { return <KeysIPadCommand {...{"mode":"dark","align":"left"}} {...p} />; }
// figma: Mode=Light, Align=Right
export function KeysIPadCommandModeLightAlignRight(p = {}) { return <KeysIPadCommand {...{"mode":"light","align":"right"}} {...p} />; }
// figma: Mode=Light, Align=Left
export function KeysIPadCommandModeLightAlignLeft(p = {}) { return <KeysIPadCommand {...{"mode":"light","align":"left"}} {...p} />; }
const __all = [KeysIPadCommandModeDarkAlignRight, KeysIPadCommandModeDarkAlignLeft, KeysIPadCommandModeLightAlignRight, KeysIPadCommandModeLightAlignLeft];
export function KeysIPadCommandVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default KeysIPadCommandVariants;
