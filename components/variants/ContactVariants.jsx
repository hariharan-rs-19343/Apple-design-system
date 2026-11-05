// Named exports for every Figma variant of Contact
import { Contact } from '../../components/fields/Contact.jsx';
// figma: People=2
export function ContactPeople2(p = {}) { return <Contact {...{"people":"2"}} {...p} />; }
// figma: People=1
export function ContactPeople1(p = {}) { return <Contact {...{"people":"1"}} {...p} />; }
const __all = [ContactPeople2, ContactPeople1];
export function ContactVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default ContactVariants;
