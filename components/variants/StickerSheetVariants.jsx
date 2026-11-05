// Named exports for every Figma variant of StickerSheet
import { StickerSheet } from '../../components/tab-bars/StickerSheet.jsx';
// figma: Mode=Light
export function StickerSheetModeLight(p = {}) { return <StickerSheet {...{"mode":"light"}} {...p} />; }
// figma: Mode=Dark
export function StickerSheetModeDark(p = {}) { return <StickerSheet {...{"mode":"dark"}} {...p} />; }
const __all = [StickerSheetModeLight, StickerSheetModeDark];
export function StickerSheetVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default StickerSheetVariants;
