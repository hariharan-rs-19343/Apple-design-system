// Named exports for every Figma variant of Alert
import { Alert } from '../../components/alerts/Alert.jsx';
// figma: Type=Side-by-Side
export function AlertTypeSideBySide(p = {}) { return <Alert {...{"type":"side-by-side"}} {...p} />; }
// figma: Type=Stacked
export function AlertTypeStacked(p = {}) { return <Alert {...{"type":"stacked"}} {...p} />; }
const __all = [AlertTypeSideBySide, AlertTypeStacked];
export function AlertVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default AlertVariants;
