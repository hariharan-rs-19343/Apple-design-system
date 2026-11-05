// Named exports for every Figma variant of TitleAndDescription
import { TitleAndDescription } from '../../components/misc/TitleAndDescription.jsx';
// figma: Mode=Dark Elevated
export function TitleAndDescriptionModeDarkElevated(p = {}) { return <TitleAndDescription {...{"mode":"dark elevated"}} {...p} />; }
// figma: Mode=Dark
export function TitleAndDescriptionModeDark(p = {}) { return <TitleAndDescription {...{"mode":"dark"}} {...p} />; }
// figma: Mode=Light
export function TitleAndDescriptionModeLight(p = {}) { return <TitleAndDescription {...{"mode":"light"}} {...p} />; }
const __all = [TitleAndDescriptionModeDarkElevated, TitleAndDescriptionModeDark, TitleAndDescriptionModeLight];
export function TitleAndDescriptionVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default TitleAndDescriptionVariants;
