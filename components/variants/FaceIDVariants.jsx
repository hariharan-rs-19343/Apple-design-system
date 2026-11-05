// Named exports for every Figma variant of FaceID
import { FaceID } from '../../components/views/FaceID.jsx';
// figma: State=Success
export function FaceIDStateSuccess(p = {}) { return <FaceID {...{"state":"success"}} {...p} />; }
// figma: State=Authenticating
export function FaceIDStateAuthenticating(p = {}) { return <FaceID {...{"state":"authenticating"}} {...p} />; }
const __all = [FaceIDStateSuccess, FaceIDStateAuthenticating];
export function FaceIDVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default FaceIDVariants;
