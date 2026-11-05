import { ButtonBackgroundOverDarkBackground2 } from './ButtonBackgroundOverDarkBackground2.jsx';
import { LiquidGlassRegularSmall } from './LiquidGlassRegularSmall.jsx';

// figma node: 5473:22013 _Button - Liquid Glass - Tinted (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function ButtonLiquidGlassTinted(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Label", mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "13px 22px 13px 22px",
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
          width: 86,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(1.792, 1)", transformOrigin: "0 0" }}
          mode={"dark"}
          state={"primary"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "13px 22px 13px 22px",
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
          width: 86,
          height: 48,
        }}>
        <ButtonBackgroundOverDarkBackground2 style={{ transform: "scale(1.792, 1)", transformOrigin: "0 0" }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Dark Elevated
    "mode=dark elevated": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ButtonLiquidGlassTinted;
