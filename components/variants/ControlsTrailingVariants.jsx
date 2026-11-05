// Named exports for every Figma variant of ControlsTrailing
import { ControlsTrailing } from '../../components/fields/ControlsTrailing.jsx';
// figma: Config=Text - 3
export function ControlsTrailingConfigText3(p = {}) { return <ControlsTrailing {...{"config":"text - 3"}} {...p} />; }
// figma: Config=Text - 2
export function ControlsTrailingConfigText2(p = {}) { return <ControlsTrailing {...{"config":"text - 2"}} {...p} />; }
// figma: Config=Text - 1
export function ControlsTrailingConfigText1(p = {}) { return <ControlsTrailing {...{"config":"text - 1"}} {...p} />; }
// figma: Config=Symbols - 6 (iPad only)
export function ControlsTrailingConfigSymbols6IPadOnly(p = {}) { return <ControlsTrailing {...{"config":"symbols - 6 (ipad only)"}} {...p} />; }
// figma: Config=Symbols - 5 (iPad only)
export function ControlsTrailingConfigSymbols5IPadOnly(p = {}) { return <ControlsTrailing {...{"config":"symbols - 5 (ipad only)"}} {...p} />; }
// figma: Config=Symbols - 4 (iPad only)
export function ControlsTrailingConfigSymbols4IPadOnly(p = {}) { return <ControlsTrailing {...{"config":"symbols - 4 (ipad only)"}} {...p} />; }
// figma: Config=Symbols - 3
export function ControlsTrailingConfigSymbols3(p = {}) { return <ControlsTrailing {...{"config":"symbols - 3"}} {...p} />; }
// figma: Config=Symbols - 2
export function ControlsTrailingConfigSymbols2(p = {}) { return <ControlsTrailing {...{"config":"symbols - 2"}} {...p} />; }
// figma: Config=Symbols - 1
export function ControlsTrailingConfigSymbols1(p = {}) { return <ControlsTrailing {...{"config":"symbols - 1"}} {...p} />; }
const __all = [ControlsTrailingConfigText3, ControlsTrailingConfigText2, ControlsTrailingConfigText1, ControlsTrailingConfigSymbols6IPadOnly, ControlsTrailingConfigSymbols5IPadOnly, ControlsTrailingConfigSymbols4IPadOnly, ControlsTrailingConfigSymbols3, ControlsTrailingConfigSymbols2, ControlsTrailingConfigSymbols1];
export function ControlsTrailingVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ControlsTrailingVariants;
