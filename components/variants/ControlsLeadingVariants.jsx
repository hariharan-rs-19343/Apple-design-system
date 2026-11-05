// Named exports for every Figma variant of ControlsLeading
import { ControlsLeading } from '../../components/pickers/ControlsLeading.jsx';
// figma: Config=Back
export function ControlsLeadingConfigBack(p = {}) { return <ControlsLeading {...{"config":"back"}} {...p} />; }
// figma: Config=Text - 3
export function ControlsLeadingConfigText3(p = {}) { return <ControlsLeading {...{"config":"text - 3"}} {...p} />; }
// figma: Config=Text - 2
export function ControlsLeadingConfigText2(p = {}) { return <ControlsLeading {...{"config":"text - 2"}} {...p} />; }
// figma: Config=Text - 1
export function ControlsLeadingConfigText1(p = {}) { return <ControlsLeading {...{"config":"text - 1"}} {...p} />; }
// figma: Config=Symbols - 6 (iPad only)
export function ControlsLeadingConfigSymbols6IPadOnly(p = {}) { return <ControlsLeading {...{"config":"symbols - 6 (ipad only)"}} {...p} />; }
// figma: Config=Symbols - 5 (iPad only)
export function ControlsLeadingConfigSymbols5IPadOnly(p = {}) { return <ControlsLeading {...{"config":"symbols - 5 (ipad only)"}} {...p} />; }
// figma: Config=Symbols - 4 (iPad only)
export function ControlsLeadingConfigSymbols4IPadOnly(p = {}) { return <ControlsLeading {...{"config":"symbols - 4 (ipad only)"}} {...p} />; }
// figma: Config=Symbols - 3
export function ControlsLeadingConfigSymbols3(p = {}) { return <ControlsLeading {...{"config":"symbols - 3"}} {...p} />; }
// figma: Config=Symbols - 2
export function ControlsLeadingConfigSymbols2(p = {}) { return <ControlsLeading {...{"config":"symbols - 2"}} {...p} />; }
// figma: Config=Symbols - 1
export function ControlsLeadingConfigSymbols1(p = {}) { return <ControlsLeading {...{"config":"symbols - 1"}} {...p} />; }
const __all = [ControlsLeadingConfigBack, ControlsLeadingConfigText3, ControlsLeadingConfigText2, ControlsLeadingConfigText1, ControlsLeadingConfigSymbols6IPadOnly, ControlsLeadingConfigSymbols5IPadOnly, ControlsLeadingConfigSymbols4IPadOnly, ControlsLeadingConfigSymbols3, ControlsLeadingConfigSymbols2, ControlsLeadingConfigSymbols1];
export function ControlsLeadingVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ControlsLeadingVariants;
