// Named exports for every Figma variant of ExamplesEmptyStates
import { ExamplesEmptyStates } from '../../components/kit/ExamplesEmptyStates.jsx';
// figma: Config=Large Symbol
export function ExamplesEmptyStatesConfigLargeSymbol(p = {}) { return <ExamplesEmptyStates {...{"config":"large symbol"}} {...p} />; }
// figma: Config=Symbol in Circle
export function ExamplesEmptyStatesConfigSymbolInCircle(p = {}) { return <ExamplesEmptyStates {...{"config":"symbol in circle"}} {...p} />; }
// figma: Config=Title and Subtitle
export function ExamplesEmptyStatesConfigTitleAndSubtitle(p = {}) { return <ExamplesEmptyStates {...{"config":"title and subtitle"}} {...p} />; }
const __all = [ExamplesEmptyStatesConfigLargeSymbol, ExamplesEmptyStatesConfigSymbolInCircle, ExamplesEmptyStatesConfigTitleAndSubtitle];
export function ExamplesEmptyStatesVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesEmptyStatesVariants;
