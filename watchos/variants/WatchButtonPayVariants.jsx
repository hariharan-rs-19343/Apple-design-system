// Named exports for every Figma variant of WatchButtonPay
import { WatchButtonPay } from '../../watchos/buttons/WatchButtonPay.jsx';
// figma: Size=Small
export function WatchButtonPaySizeSmall(p = {}) { return <WatchButtonPay {...{"size":"sm"}} {...p} />; }
// figma: Size=Full width
export function WatchButtonPaySizeFullWidth(p = {}) { return <WatchButtonPay {...{"size":"full width"}} {...p} />; }
const __all = [WatchButtonPaySizeSmall, WatchButtonPaySizeFullWidth];
export function WatchButtonPayVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchButtonPayVariants;
