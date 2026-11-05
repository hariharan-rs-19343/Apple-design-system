// Named exports for every Figma variant of RowWithSwipeActions
import { RowWithSwipeActions } from '../../components/lists/RowWithSwipeActions.jsx';
// figma: Height=Tall, Swipe=Right
export function RowWithSwipeActionsHeightTallSwipeRight(p = {}) { return <RowWithSwipeActions {...{"height":"tall","swipe":"right"}} {...p} />; }
// figma: Height=Regular, Swipe=Right
export function RowWithSwipeActionsHeightRegularSwipeRight(p = {}) { return <RowWithSwipeActions {...{"height":"regular","swipe":"right"}} {...p} />; }
// figma: Height=Tall, Swipe=Left
export function RowWithSwipeActionsHeightTallSwipeLeft(p = {}) { return <RowWithSwipeActions {...{"height":"tall","swipe":"left"}} {...p} />; }
// figma: Height=Regular, Swipe=Left
export function RowWithSwipeActionsHeightRegularSwipeLeft(p = {}) { return <RowWithSwipeActions {...{"height":"regular","swipe":"left"}} {...p} />; }
const __all = [RowWithSwipeActionsHeightTallSwipeRight, RowWithSwipeActionsHeightRegularSwipeRight, RowWithSwipeActionsHeightTallSwipeLeft, RowWithSwipeActionsHeightRegularSwipeLeft];
export function RowWithSwipeActionsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default RowWithSwipeActionsVariants;
