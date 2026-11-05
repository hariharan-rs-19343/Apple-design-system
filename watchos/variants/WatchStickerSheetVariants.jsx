// Named exports for every Figma variant of WatchStickerSheet
import { WatchStickerSheet } from '../../watchos/bezels/WatchStickerSheet.jsx';
// figma: Mode=Light
export function WatchStickerSheetModeLight(p = {}) { return <WatchStickerSheet {...{"mode":"light"}} {...p} />; }
// figma: Mode=Dark
export function WatchStickerSheetModeDark(p = {}) { return <WatchStickerSheet {...{"mode":"dark"}} {...p} />; }
const __all = [WatchStickerSheetModeLight, WatchStickerSheetModeDark];
export function WatchStickerSheetVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchStickerSheetVariants;
