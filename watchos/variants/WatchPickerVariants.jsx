// Named exports for every Figma variant of WatchPicker
import { WatchPicker } from '../../watchos/pickers/WatchPicker.jsx';
// figma: Values=3 (mixed widths), Selected=3
export function WatchPickerValues3MixedWidthsSelected3(p = {}) { return <WatchPicker {...{"values":"3 (mixed widths)","selected":"3"}} {...p} />; }
// figma: Values=3 (mixed widths), Selected=2
export function WatchPickerValues3MixedWidthsSelected2(p = {}) { return <WatchPicker {...{"values":"3 (mixed widths)","selected":"2"}} {...p} />; }
// figma: Values=3 (mixed widths), Selected=1
export function WatchPickerValues3MixedWidthsSelected1(p = {}) { return <WatchPicker {...{"values":"3 (mixed widths)","selected":"1"}} {...p} />; }
// figma: Values=3 (mixed widths), Selected=None
export function WatchPickerValues3MixedWidthsSelectedNone(p = {}) { return <WatchPicker {...{"values":"3 (mixed widths)","selected":"none"}} {...p} />; }
// figma: Values=3, Selected=2
export function WatchPickerValues3Selected2(p = {}) { return <WatchPicker {...{"values":"3","selected":"2"}} {...p} />; }
// figma: Values=3, Selected=1
export function WatchPickerValues3Selected1(p = {}) { return <WatchPicker {...{"values":"3","selected":"1"}} {...p} />; }
// figma: Values=3, Selected=3
export function WatchPickerValues3Selected3(p = {}) { return <WatchPicker {...{"values":"3","selected":"3"}} {...p} />; }
// figma: Values=3, Selected=None
export function WatchPickerValues3SelectedNone(p = {}) { return <WatchPicker {...{"values":"3","selected":"none"}} {...p} />; }
// figma: Values=2, Selected=2
export function WatchPickerValues2Selected2(p = {}) { return <WatchPicker {...{"values":"2","selected":"2"}} {...p} />; }
// figma: Values=2, Selected=1
export function WatchPickerValues2Selected1(p = {}) { return <WatchPicker {...{"values":"2","selected":"1"}} {...p} />; }
// figma: Values=2, Selected=None
export function WatchPickerValues2SelectedNone(p = {}) { return <WatchPicker {...{"values":"2","selected":"none"}} {...p} />; }
// figma: Values=1, Selected=1
export function WatchPickerValues1Selected1(p = {}) { return <WatchPicker {...{"values":"1","selected":"1"}} {...p} />; }
// figma: Values=1, Selected=None
export function WatchPickerValues1SelectedNone(p = {}) { return <WatchPicker {...{"values":"1","selected":"none"}} {...p} />; }
const __all = [WatchPickerValues3MixedWidthsSelected3, WatchPickerValues3MixedWidthsSelected2, WatchPickerValues3MixedWidthsSelected1, WatchPickerValues3MixedWidthsSelectedNone, WatchPickerValues3Selected2, WatchPickerValues3Selected1, WatchPickerValues3Selected3, WatchPickerValues3SelectedNone, WatchPickerValues2Selected2, WatchPickerValues2Selected1, WatchPickerValues2SelectedNone, WatchPickerValues1Selected1, WatchPickerValues1SelectedNone];
export function WatchPickerVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchPickerVariants;
