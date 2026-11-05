// Named exports for every Figma variant of PageControl
import { PageControl } from '../../components/page-controls/PageControl.jsx';
// figma: Mode=Light, Dots=8+, Selection=Trailing
export function PageControlModeLightDots8SelectionTrailing(p = {}) { return <PageControl {...{"mode":"light","dots":"8+","selection":"trailing"}} {...p} />; }
// figma: Mode=Light, Dots=8+, Selection=Middle
export function PageControlModeLightDots8SelectionMiddle(p = {}) { return <PageControl {...{"mode":"light","dots":"8+","selection":"middle"}} {...p} />; }
// figma: Mode=Light, Dots=8+, Selection=Leading
export function PageControlModeLightDots8SelectionLeading(p = {}) { return <PageControl {...{"mode":"light","dots":"8+","selection":"leading"}} {...p} />; }
// figma: Mode=Light, Dots=7, Selection=Trailing
export function PageControlModeLightDots7SelectionTrailing(p = {}) { return <PageControl {...{"mode":"light","dots":"7","selection":"trailing"}} {...p} />; }
// figma: Mode=Light, Dots=7, Selection=Leading
export function PageControlModeLightDots7SelectionLeading(p = {}) { return <PageControl {...{"mode":"light","dots":"7","selection":"leading"}} {...p} />; }
// figma: Mode=Light, Dots=6, Selection=N/A ( <7 Dots )
export function PageControlModeLightDots6SelectionNA7Dots(p = {}) { return <PageControl {...{"mode":"light","dots":"6","selection":"n/a ( <7 dots )"}} {...p} />; }
// figma: Mode=Light, Dots=5, Selection=N/A ( <7 Dots )
export function PageControlModeLightDots5SelectionNA7Dots(p = {}) { return <PageControl {...{"mode":"light","dots":"5","selection":"n/a ( <7 dots )"}} {...p} />; }
// figma: Mode=Light, Dots=4, Selection=N/A ( <7 Dots )
export function PageControlModeLightDots4SelectionNA7Dots(p = {}) { return <PageControl {...{"mode":"light","dots":"4","selection":"n/a ( <7 dots )"}} {...p} />; }
// figma: Mode=Light, Dots=3, Selection=N/A ( <7 Dots )
export function PageControlModeLightDots3SelectionNA7Dots(p = {}) { return <PageControl {...{"mode":"light","dots":"3","selection":"n/a ( <7 dots )"}} {...p} />; }
// figma: Mode=Light, Dots=2, Selection=N/A ( <7 Dots )
export function PageControlModeLightDots2SelectionNA7Dots(p = {}) { return <PageControl {...{"mode":"light","dots":"2","selection":"n/a ( <7 dots )"}} {...p} />; }
// figma: Mode=Dark, Dots=8+, Selection=Trailing
export function PageControlModeDarkDots8SelectionTrailing(p = {}) { return <PageControl {...{"mode":"dark","dots":"8+","selection":"trailing"}} {...p} />; }
// figma: Mode=Dark, Dots=8+, Selection=Middle
export function PageControlModeDarkDots8SelectionMiddle(p = {}) { return <PageControl {...{"mode":"dark","dots":"8+","selection":"middle"}} {...p} />; }
// figma: Mode=Dark, Dots=8+, Selection=Leading
export function PageControlModeDarkDots8SelectionLeading(p = {}) { return <PageControl {...{"mode":"dark","dots":"8+","selection":"leading"}} {...p} />; }
// figma: Mode=Dark, Dots=7, Selection=Trailing
export function PageControlModeDarkDots7SelectionTrailing(p = {}) { return <PageControl {...{"mode":"dark","dots":"7","selection":"trailing"}} {...p} />; }
// figma: Mode=Dark, Dots=7, Selection=Leading
export function PageControlModeDarkDots7SelectionLeading(p = {}) { return <PageControl {...{"mode":"dark","dots":"7","selection":"leading"}} {...p} />; }
// figma: Mode=Dark, Dots=6, Selection=N/A ( <7 Dots )
export function PageControlModeDarkDots6SelectionNA7Dots(p = {}) { return <PageControl {...{"mode":"dark","dots":"6","selection":"n/a ( <7 dots )"}} {...p} />; }
// figma: Mode=Dark, Dots=5, Selection=N/A ( <7 Dots )
export function PageControlModeDarkDots5SelectionNA7Dots(p = {}) { return <PageControl {...{"mode":"dark","dots":"5","selection":"n/a ( <7 dots )"}} {...p} />; }
// figma: Mode=Dark, Dots=4, Selection=N/A ( <7 Dots )
export function PageControlModeDarkDots4SelectionNA7Dots(p = {}) { return <PageControl {...{"mode":"dark","dots":"4","selection":"n/a ( <7 dots )"}} {...p} />; }
// figma: Mode=Dark, Dots=3, Selection=N/A ( <7 Dots )
export function PageControlModeDarkDots3SelectionNA7Dots(p = {}) { return <PageControl {...{"mode":"dark","dots":"3","selection":"n/a ( <7 dots )"}} {...p} />; }
// figma: Mode=Dark, Dots=2, Selection=N/A ( <7 Dots )
export function PageControlModeDarkDots2SelectionNA7Dots(p = {}) { return <PageControl {...{"mode":"dark","dots":"2","selection":"n/a ( <7 dots )"}} {...p} />; }
const __all = [PageControlModeLightDots8SelectionTrailing, PageControlModeLightDots8SelectionMiddle, PageControlModeLightDots8SelectionLeading, PageControlModeLightDots7SelectionTrailing, PageControlModeLightDots7SelectionLeading, PageControlModeLightDots6SelectionNA7Dots, PageControlModeLightDots5SelectionNA7Dots, PageControlModeLightDots4SelectionNA7Dots, PageControlModeLightDots3SelectionNA7Dots, PageControlModeLightDots2SelectionNA7Dots, PageControlModeDarkDots8SelectionTrailing, PageControlModeDarkDots8SelectionMiddle, PageControlModeDarkDots8SelectionLeading, PageControlModeDarkDots7SelectionTrailing, PageControlModeDarkDots7SelectionLeading, PageControlModeDarkDots6SelectionNA7Dots, PageControlModeDarkDots5SelectionNA7Dots, PageControlModeDarkDots4SelectionNA7Dots, PageControlModeDarkDots3SelectionNA7Dots, PageControlModeDarkDots2SelectionNA7Dots];
export function PageControlVariants(p = {}) { return <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", ...p.style }}>{__all.map((C, i) => <C key={i} />)}</div>; }
export default PageControlVariants;
