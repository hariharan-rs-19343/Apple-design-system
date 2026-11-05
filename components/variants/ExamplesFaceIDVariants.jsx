// Named exports for every Figma variant of ExamplesFaceID
import { ExamplesFaceID } from '../../components/kit/ExamplesFaceID.jsx';
// figma: State=Success
export function ExamplesFaceIDStateSuccess(p = {}) { return <ExamplesFaceID {...{"state":"success"}} {...p} />; }
// figma: State=Authenticating
export function ExamplesFaceIDStateAuthenticating(p = {}) { return <ExamplesFaceID {...{"state":"authenticating"}} {...p} />; }
const __all = [ExamplesFaceIDStateSuccess, ExamplesFaceIDStateAuthenticating];
export function ExamplesFaceIDVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ExamplesFaceIDVariants;
