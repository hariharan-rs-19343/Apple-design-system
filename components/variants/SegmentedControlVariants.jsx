// Named exports for every Figma variant of SegmentedControl
import { SegmentedControl } from '../../components/segmented-controls/SegmentedControl.jsx';
// figma: Segments=5, Selected=5
export function SegmentedControlSegments5Selected5(p = {}) { return <SegmentedControl {...{"segments":"5","selected":"5"}} {...p} />; }
// figma: Segments=5, Selected=4
export function SegmentedControlSegments5Selected4(p = {}) { return <SegmentedControl {...{"segments":"5","selected":"4"}} {...p} />; }
// figma: Segments=5, Selected=3
export function SegmentedControlSegments5Selected3(p = {}) { return <SegmentedControl {...{"segments":"5","selected":"3"}} {...p} />; }
// figma: Segments=5, Selected=2
export function SegmentedControlSegments5Selected2(p = {}) { return <SegmentedControl {...{"segments":"5","selected":"2"}} {...p} />; }
// figma: Segments=5, Selected=1
export function SegmentedControlSegments5Selected1(p = {}) { return <SegmentedControl {...{"segments":"5","selected":"1"}} {...p} />; }
// figma: Segments=4, Selected=4
export function SegmentedControlSegments4Selected4(p = {}) { return <SegmentedControl {...{"segments":"4","selected":"4"}} {...p} />; }
// figma: Segments=4, Selected=3
export function SegmentedControlSegments4Selected3(p = {}) { return <SegmentedControl {...{"segments":"4","selected":"3"}} {...p} />; }
// figma: Segments=4, Selected=2
export function SegmentedControlSegments4Selected2(p = {}) { return <SegmentedControl {...{"segments":"4","selected":"2"}} {...p} />; }
// figma: Segments=4, Selected=1
export function SegmentedControlSegments4Selected1(p = {}) { return <SegmentedControl {...{"segments":"4","selected":"1"}} {...p} />; }
// figma: Segments=3, Selected=3
export function SegmentedControlSegments3Selected3(p = {}) { return <SegmentedControl {...{"segments":"3","selected":"3"}} {...p} />; }
// figma: Segments=3, Selected=2
export function SegmentedControlSegments3Selected2(p = {}) { return <SegmentedControl {...{"segments":"3","selected":"2"}} {...p} />; }
// figma: Segments=3, Selected=1
export function SegmentedControlSegments3Selected1(p = {}) { return <SegmentedControl {...{"segments":"3","selected":"1"}} {...p} />; }
// figma: Segments=2, Selected=2
export function SegmentedControlSegments2Selected2(p = {}) { return <SegmentedControl {...{"segments":"2","selected":"2"}} {...p} />; }
// figma: Segments=2, Selected=1
export function SegmentedControlSegments2Selected1(p = {}) { return <SegmentedControl {...{"segments":"2","selected":"1"}} {...p} />; }
const __all = [SegmentedControlSegments5Selected5, SegmentedControlSegments5Selected4, SegmentedControlSegments5Selected3, SegmentedControlSegments5Selected2, SegmentedControlSegments5Selected1, SegmentedControlSegments4Selected4, SegmentedControlSegments4Selected3, SegmentedControlSegments4Selected2, SegmentedControlSegments4Selected1, SegmentedControlSegments3Selected3, SegmentedControlSegments3Selected2, SegmentedControlSegments3Selected1, SegmentedControlSegments2Selected2, SegmentedControlSegments2Selected1];
export function SegmentedControlVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SegmentedControlVariants;
