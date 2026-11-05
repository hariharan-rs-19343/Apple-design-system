// Named exports for every Figma variant of SidebarRow
import { SidebarRow } from '../../components/sidebar-items/SidebarRow.jsx';
// figma: State=Disabled, Indent Level=2
export function SidebarRowStateDisabledIndentLevel2(p = {}) { return <SidebarRow {...{"state":"disabled","indentLevel":"2"}} {...p} />; }
// figma: State=Disabled, Indent Level=1
export function SidebarRowStateDisabledIndentLevel1(p = {}) { return <SidebarRow {...{"state":"disabled","indentLevel":"1"}} {...p} />; }
// figma: State=Disabled, Indent Level=0
export function SidebarRowStateDisabledIndentLevel0(p = {}) { return <SidebarRow {...{"state":"disabled","indentLevel":"0"}} {...p} />; }
// figma: State=Selected, Indent Level=2
export function SidebarRowStateSelectedIndentLevel2(p = {}) { return <SidebarRow {...{"state":"selected","indentLevel":"2"}} {...p} />; }
// figma: State=Disclosable, Indent Level=2
export function SidebarRowStateDisclosableIndentLevel2(p = {}) { return <SidebarRow {...{"state":"disclosable","indentLevel":"2"}} {...p} />; }
// figma: State=Selected, Indent Level=1
export function SidebarRowStateSelectedIndentLevel1(p = {}) { return <SidebarRow {...{"state":"selected","indentLevel":"1"}} {...p} />; }
// figma: State=Disclosable, Indent Level=1
export function SidebarRowStateDisclosableIndentLevel1(p = {}) { return <SidebarRow {...{"state":"disclosable","indentLevel":"1"}} {...p} />; }
// figma: State=Selected, Indent Level=0
export function SidebarRowStateSelectedIndentLevel0(p = {}) { return <SidebarRow {...{"state":"selected","indentLevel":"0"}} {...p} />; }
// figma: State=Disclosable, Indent Level=0
export function SidebarRowStateDisclosableIndentLevel0(p = {}) { return <SidebarRow {...{"state":"disclosable","indentLevel":"0"}} {...p} />; }
// figma: State=Default, Indent Level=2
export function SidebarRowStateDefaultIndentLevel2(p = {}) { return <SidebarRow {...{"state":"default","indentLevel":"2"}} {...p} />; }
// figma: State=Default, Indent Level=1
export function SidebarRowStateDefaultIndentLevel1(p = {}) { return <SidebarRow {...{"state":"default","indentLevel":"1"}} {...p} />; }
// figma: State=Default, Indent Level=0
export function SidebarRowStateDefaultIndentLevel0(p = {}) { return <SidebarRow {...{"state":"default","indentLevel":"0"}} {...p} />; }
const __all = [SidebarRowStateDisabledIndentLevel2, SidebarRowStateDisabledIndentLevel1, SidebarRowStateDisabledIndentLevel0, SidebarRowStateSelectedIndentLevel2, SidebarRowStateDisclosableIndentLevel2, SidebarRowStateSelectedIndentLevel1, SidebarRowStateDisclosableIndentLevel1, SidebarRowStateSelectedIndentLevel0, SidebarRowStateDisclosableIndentLevel0, SidebarRowStateDefaultIndentLevel2, SidebarRowStateDefaultIndentLevel1, SidebarRowStateDefaultIndentLevel0];
export function SidebarRowVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default SidebarRowVariants;
