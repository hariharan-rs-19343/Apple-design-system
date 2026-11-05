// Named exports for every Figma variant of WatchExamplePickers
import { WatchExamplePickers } from '../../watchos/examples/WatchExamplePickers.jsx';
// figma: Wheels=3 (Mixed Widths)
export function WatchExamplePickersWheels3MixedWidths(p = {}) { return <WatchExamplePickers {...{"wheels":"3 (mixed widths)"}} {...p} />; }
// figma: Wheels=3
export function WatchExamplePickersWheels3(p = {}) { return <WatchExamplePickers {...{"wheels":"3"}} {...p} />; }
// figma: Wheels=2
export function WatchExamplePickersWheels2(p = {}) { return <WatchExamplePickers {...{"wheels":"2"}} {...p} />; }
// figma: Wheels=1
export function WatchExamplePickersWheels1(p = {}) { return <WatchExamplePickers {...{"wheels":"1"}} {...p} />; }
const __all = [WatchExamplePickersWheels3MixedWidths, WatchExamplePickersWheels3, WatchExamplePickersWheels2, WatchExamplePickersWheels1];
export function WatchExamplePickersVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchExamplePickersVariants;
