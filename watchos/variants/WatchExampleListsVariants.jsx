// Named exports for every Figma variant of WatchExampleLists
import { WatchExampleLists } from '../../watchos/examples/WatchExampleLists.jsx';
// figma: Type=Workout
export function WatchExampleListsTypeWorkout(p = {}) { return <WatchExampleLists {...{"type":"workout"}} {...p} />; }
// figma: Type=Menu
export function WatchExampleListsTypeMenu(p = {}) { return <WatchExampleLists {...{"type":"menu"}} {...p} />; }
// figma: Type=Colorful
export function WatchExampleListsTypeColorful(p = {}) { return <WatchExampleLists {...{"type":"colorful"}} {...p} />; }
// figma: Type=Grouped List Items
export function WatchExampleListsTypeGroupedListItems(p = {}) { return <WatchExampleLists {...{"type":"grouped list items"}} {...p} />; }
const __all = [WatchExampleListsTypeWorkout, WatchExampleListsTypeMenu, WatchExampleListsTypeColorful, WatchExampleListsTypeGroupedListItems];
export function WatchExampleListsVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchExampleListsVariants;
