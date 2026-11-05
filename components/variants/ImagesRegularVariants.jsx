// Named exports for every Figma variant of ImagesRegular
import { ImagesRegular } from '../../components/lists/ImagesRegular.jsx';
// figma: Type=Symbol
export function ImagesRegularTypeSymbol(p = {}) { return <ImagesRegular {...{"type":"symbol"}} {...p} />; }
// figma: Type=Rounded
export function ImagesRegularTypeRounded(p = {}) { return <ImagesRegular {...{"type":"rounded"}} {...p} />; }
// figma: Type=Circular
export function ImagesRegularTypeCircular(p = {}) { return <ImagesRegular {...{"type":"circular"}} {...p} />; }
// figma: Type=Fill
export function ImagesRegularTypeFill(p = {}) { return <ImagesRegular {...{"type":"fill"}} {...p} />; }
const __all = [ImagesRegularTypeSymbol, ImagesRegularTypeRounded, ImagesRegularTypeCircular, ImagesRegularTypeFill];
export function ImagesRegularVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ImagesRegularVariants;
