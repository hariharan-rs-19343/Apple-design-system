// Named exports for every Figma variant of IOSMiniTipButtons
import { IOSMiniTipButtons } from '../../components/tips/IOSMiniTipButtons.jsx';
// figma: Layout=Stacked, Mode=Light
export function IOSMiniTipButtonsLayoutStackedModeLight(p = {}) { return <IOSMiniTipButtons {...{"layout":"stacked","mode":"light"}} {...p} />; }
// figma: Layout=Stacked, Mode=Dark
export function IOSMiniTipButtonsLayoutStackedModeDark(p = {}) { return <IOSMiniTipButtons {...{"layout":"stacked","mode":"dark"}} {...p} />; }
// figma: Layout=Side-by-side, Mode=Light
export function IOSMiniTipButtonsLayoutSideBySideModeLight(p = {}) { return <IOSMiniTipButtons {...{"layout":"side-by-side","mode":"light"}} {...p} />; }
// figma: Layout=Side-by-side, Mode=Dark
export function IOSMiniTipButtonsLayoutSideBySideModeDark(p = {}) { return <IOSMiniTipButtons {...{"layout":"side-by-side","mode":"dark"}} {...p} />; }
const __all = [IOSMiniTipButtonsLayoutStackedModeLight, IOSMiniTipButtonsLayoutStackedModeDark, IOSMiniTipButtonsLayoutSideBySideModeLight, IOSMiniTipButtonsLayoutSideBySideModeDark];
export function IOSMiniTipButtonsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default IOSMiniTipButtonsVariants;
