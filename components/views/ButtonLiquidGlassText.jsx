import { LabelTextDefault } from '../buttons/LabelTextDefault.jsx';
import { LabelTextPreferred } from '../buttons/LabelTextPreferred.jsx';
import { LiquidGlassRegularSmall } from '../buttons/LiquidGlassRegularSmall.jsx';

// figma node: 5473:21667 Button - Liquid Glass - Text (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "tinted=" + __venc(p.tinted);

export function ButtonLiquidGlassText(_p = {}) {
  const props = { ..._p, tinted: _p.tinted ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 20px 6px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 85,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(1.771, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"primary"}
        />
      </div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <LabelTextPreferred mode={"light"} state={"default"} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 20px 6px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 85,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(1.771, 1)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <LabelTextDefault mode={"light"} state={"default"} />}</div>
    </div>
  );
  const __impls = {
    // figma: Tinted=True
    "tinted=true": __body0,
    // figma: Tinted=False
    "tinted=false": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ButtonLiquidGlassText;
