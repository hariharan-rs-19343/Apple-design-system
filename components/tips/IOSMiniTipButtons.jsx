// figma node: 118:3898 iOS Mini Tip/_Buttons (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "layout=" + __venc(p.layout) + '|' + "mode=" + __venc(p.mode);

export function IOSMiniTipButtons(_p = {}) {
  const props = { ..._p, actionLabel1: _p.actionLabel1 ?? "Action", layout: _p.layout ?? "stacked", mode: _p.mode ?? "dark" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        background: "linear-gradient(rgba(0,145,255,0.08),rgba(0,145,255,0.08)), linear-gradient(rgba(116,116,128,0.08),rgba(116,116,128,0.08))",
        display: "flex",
        flexDirection: "row",
        padding: "16px 20px 16px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--accents-blue-2)",
          flexShrink: 0,
        }}>{props.actionLabel1}</span>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        backgroundColor: "rgba(118,118,128,0.12)",
        display: "flex",
        flexDirection: "row",
        padding: "16px 20px 16px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--labels-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "Action"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        background: "linear-gradient(rgba(0,145,255,0.08),rgba(0,145,255,0.08)), linear-gradient(rgba(116,116,128,0.18),rgba(116,116,128,0.18))",
        display: "flex",
        flexDirection: "row",
        padding: "16px 20px 16px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(0,145,255)",
          flexShrink: 0,
        }}>{props.actionLabel1}</span>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        backgroundColor: "rgba(118,118,128,0.24)",
        display: "flex",
        flexDirection: "row",
        padding: "16px 20px 16px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text1 ?? "Action"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 200,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        background: "linear-gradient(rgba(0,145,255,0.08),rgba(0,145,255,0.08)), linear-gradient(rgba(116,116,128,0.08),rgba(116,116,128,0.08))",
        display: "flex",
        flexDirection: "row",
        padding: "16px 20px 16px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--accents-blue-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.actionLabel1}</span>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        backgroundColor: "rgba(118,118,128,0.12)",
        display: "flex",
        flexDirection: "row",
        padding: "16px 20px 16px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--labels-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Action"}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 200,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        background: "linear-gradient(rgba(0,145,255,0.08),rgba(0,145,255,0.08)), linear-gradient(rgba(116,116,128,0.18),rgba(116,116,128,0.18))",
        display: "flex",
        flexDirection: "row",
        padding: "16px 20px 16px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(0,145,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.actionLabel1}</span>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 100,
        backgroundColor: "rgba(118,118,128,0.24)",
        display: "flex",
        flexDirection: "row",
        padding: "16px 20px 16px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Action"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Layout=Stacked, Mode=Light
    "layout=stacked|mode=light": __body0,
    // figma: Layout=Stacked, Mode=Dark
    "layout=stacked|mode=dark": __body1,
    // figma: Layout=Side-by-side, Mode=Light
    "layout=side-by-side|mode=light": __body2,
    // figma: Layout=Side-by-side, Mode=Dark
    "layout=side-by-side|mode=dark": __body3,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default IOSMiniTipButtons;
