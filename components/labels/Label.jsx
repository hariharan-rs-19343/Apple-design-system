// figma node: 5509:8722 _Label (9 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "mode=" + __venc(p.mode);

export function Label(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Label", state: _p.state ?? "default", mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 42,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 42,
        height: 20,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        lineHeight: "20px",
        letterSpacing: "-0.430px",
        color: "var(--accents-red)",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 42,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 42,
        height: 20,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        lineHeight: "20px",
        letterSpacing: "-0.430px",
        color: "rgb(255,66,69)",
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 42,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 42,
        height: 20,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        lineHeight: "20px",
        letterSpacing: "-0.430px",
        color: "rgba(60,60,67,0.3)",
      }}>{props.label}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 42,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 42,
        height: 20,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        lineHeight: "20px",
        letterSpacing: "-0.430px",
        color: "rgba(235,235,245,0.3)",
      }}>{props.label}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 42,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 42,
        height: 20,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        lineHeight: "20px",
        letterSpacing: "-0.430px",
        color: "var(--labels-vibrant-tertiary)",
      }}>{props.label}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 42,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 42,
        height: 20,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        lineHeight: "20px",
        letterSpacing: "-0.430px",
        color: "var(--labels-vibrant-primary)",
      }}>{props.label}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 42,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 42,
        height: 20,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        lineHeight: "20px",
        letterSpacing: "-0.430px",
        color: "rgb(245,245,245)",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: State=Destructive, Mode=Dark Elevated
    "state=destructive|mode=dark elevated": __body0,
    // figma: State=Destructive, Mode=Dark
    "state=destructive|mode=dark": __body1,
    // figma: State=Destructive, Mode=Light
    "state=destructive|mode=light": __body0,
    // figma: State=Disabled, Mode=Dark Elevated
    "state=disabled|mode=dark elevated": __body2,
    // figma: State=Disabled, Mode=Dark
    "state=disabled|mode=dark": __body3,
    // figma: State=Disabled, Mode=Light
    "state=disabled|mode=light": __body4,
    // figma: State=Default, Mode=Dark Elevated
    "state=default|mode=dark elevated": __body5,
    // figma: State=Default, Mode=Dark
    "state=default|mode=dark": __body6,
    // figma: State=Default, Mode=Light
    "state=default|mode=light": __body5,
  };
  return (__impls[__vkey(props)] ?? __body5)();
}
export default Label;
