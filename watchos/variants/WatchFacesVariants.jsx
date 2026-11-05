// Named exports for every Figma variant of WatchFaces
import { WatchFaces } from '../../watchos/bezels/WatchFaces.jsx';
// figma: Face=Modular, Size=49mm
export function WatchFacesFaceModularSize49mm(p = {}) { return <WatchFaces {...{"face":"modular","size":"49mm"}} {...p} />; }
// figma: Face=Modular, Size=46mm
export function WatchFacesFaceModularSize46mm(p = {}) { return <WatchFaces {...{"face":"modular","size":"46mm"}} {...p} />; }
// figma: Face=Modular, Size=44mm
export function WatchFacesFaceModularSize44mm(p = {}) { return <WatchFaces {...{"face":"modular","size":"44mm"}} {...p} />; }
// figma: Face=Modular, Size=42mm
export function WatchFacesFaceModularSize42mm(p = {}) { return <WatchFaces {...{"face":"modular","size":"42mm"}} {...p} />; }
// figma: Face=Modular, Size=40mm
export function WatchFacesFaceModularSize40mm(p = {}) { return <WatchFaces {...{"face":"modular","size":"40mm"}} {...p} />; }
// figma: Face=Flux, Size=49mm
export function WatchFacesFaceFluxSize49mm(p = {}) { return <WatchFaces {...{"face":"flux","size":"49mm"}} {...p} />; }
// figma: Face=Flux, Size=46mm
export function WatchFacesFaceFluxSize46mm(p = {}) { return <WatchFaces {...{"face":"flux","size":"46mm"}} {...p} />; }
// figma: Face=Flux, Size=44mm
export function WatchFacesFaceFluxSize44mm(p = {}) { return <WatchFaces {...{"face":"flux","size":"44mm"}} {...p} />; }
// figma: Face=Flux, Size=42mm
export function WatchFacesFaceFluxSize42mm(p = {}) { return <WatchFaces {...{"face":"flux","size":"42mm"}} {...p} />; }
// figma: Face=Flux, Size=40mm
export function WatchFacesFaceFluxSize40mm(p = {}) { return <WatchFaces {...{"face":"flux","size":"40mm"}} {...p} />; }
// figma: Face=Activity Analog, Size=49mm
export function WatchFacesFaceActivityAnalogSize49mm(p = {}) { return <WatchFaces {...{"face":"activity analog","size":"49mm"}} {...p} />; }
// figma: Face=Activity Analog, Size=46mm
export function WatchFacesFaceActivityAnalogSize46mm(p = {}) { return <WatchFaces {...{"face":"activity analog","size":"46mm"}} {...p} />; }
// figma: Face=Activity Analog, Size=44mm
export function WatchFacesFaceActivityAnalogSize44mm(p = {}) { return <WatchFaces {...{"face":"activity analog","size":"44mm"}} {...p} />; }
// figma: Face=Activity Analog, Size=42mm
export function WatchFacesFaceActivityAnalogSize42mm(p = {}) { return <WatchFaces {...{"face":"activity analog","size":"42mm"}} {...p} />; }
// figma: Face=Activity Analog, Size=40mm
export function WatchFacesFaceActivityAnalogSize40mm(p = {}) { return <WatchFaces {...{"face":"activity analog","size":"40mm"}} {...p} />; }
const __all = [WatchFacesFaceModularSize49mm, WatchFacesFaceModularSize46mm, WatchFacesFaceModularSize44mm, WatchFacesFaceModularSize42mm, WatchFacesFaceModularSize40mm, WatchFacesFaceFluxSize49mm, WatchFacesFaceFluxSize46mm, WatchFacesFaceFluxSize44mm, WatchFacesFaceFluxSize42mm, WatchFacesFaceFluxSize40mm, WatchFacesFaceActivityAnalogSize49mm, WatchFacesFaceActivityAnalogSize46mm, WatchFacesFaceActivityAnalogSize44mm, WatchFacesFaceActivityAnalogSize42mm, WatchFacesFaceActivityAnalogSize40mm];
export function WatchFacesVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default WatchFacesVariants;
