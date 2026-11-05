// Named exports for every Figma variant of ImagesTall
import { ImagesTall } from '../../components/lists/ImagesTall.jsx';
// figma: Type=Symbol
export function ImagesTallTypeSymbol(p = {}) { return <ImagesTall {...{"type":"symbol"}} {...p} />; }
// figma: Type=Rounded
export function ImagesTallTypeRounded(p = {}) { return <ImagesTall {...{"type":"rounded"}} {...p} />; }
// figma: Type=Circular
export function ImagesTallTypeCircular(p = {}) { return <ImagesTall {...{"type":"circular"}} {...p} />; }
// figma: Type=Fill
export function ImagesTallTypeFill(p = {}) { return <ImagesTall {...{"type":"fill"}} {...p} />; }
const __all = [ImagesTallTypeSymbol, ImagesTallTypeRounded, ImagesTallTypeCircular, ImagesTallTypeFill];
export function ImagesTallVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ImagesTallVariants;
