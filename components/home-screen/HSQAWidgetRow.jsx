import { HSQAAppIconDark } from './HSQAAppIconDark.jsx';
import { HSQAAppIconLight } from './HSQAAppIconLight.jsx';
import { HSQAWidgetDark } from './HSQAWidgetDark.jsx';
import { HSQAWidgetLight } from './HSQAWidgetLight.jsx';

// figma node: 5622:50366 _HSQA - Widget Row (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function HSQAWidgetRow(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 250,
      display: "flex",
      flexDirection: "row",
      padding: "0px 17px 0px 17px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 38,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <HSQAAppIconDark state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 38,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <HSQAWidgetDark symbol={"􂘬"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 38,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <HSQAWidgetDark symbol={"􂘭"} state={"selected"} />}</div>
      <div style={{
          position: "relative",
          width: 38,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <HSQAWidgetDark symbol={"􂘮"} state={"default"} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 250,
      display: "flex",
      flexDirection: "row",
      padding: "0px 17px 0px 17px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 38,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <HSQAAppIconLight state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 38,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <HSQAWidgetLight symbol={"􂘬"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 38,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <HSQAWidgetLight symbol={"􂘭"} state={"selected"} />}</div>
      <div style={{
          position: "relative",
          width: 38,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <HSQAWidgetLight symbol={"􂘮"} state={"default"} />}</div>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default HSQAWidgetRow;
