import { ButtonBackgroundOverDarkBackground } from './ButtonBackgroundOverDarkBackground.jsx';
import { LabelSymbolDefault2 } from './LabelSymbolDefault2.jsx';
import { LiquidGlassRegularSmall } from './LiquidGlassRegularSmall.jsx';

// figma node: 5522:14848 _Button - Done (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "bGContext=" + __venc(p.bGContext);

export function ButtonDone(_p = {}) {
  const props = { ..._p, bGContext: _p.bGContext ?? "bright", label: _p.label ?? "Label" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 48,
          height: 48,
        }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"dark"} state={"default"} />}</div>
      <div style={{ position: "relative", height: 36, flexShrink: 0 }}>{props.icon2 ?? <LabelSymbolDefault2 state={"default"} bGContext={"dim"} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 48,
          height: 48,
        }}>{props.icon1 ?? <ButtonBackgroundOverDarkBackground />}</div>
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 19,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(77,77,77)",
          flexShrink: 0,
        }}>􀆅</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: BG Context=Dim
    "bGContext=dim": __body0,
    // figma: BG Context=Bright
    "bGContext=bright": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ButtonDone;
