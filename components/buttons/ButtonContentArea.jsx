// figma node: 40:58696 Button - Content Area (144 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "destructive=" + __venc(p.destructive) + '|' + "style2=" + __venc(p.style2) + '|' + "enabled=" + __venc(p.enabled) + '|' + "labelType=" + __venc(p.labelType);

export function ButtonContentArea(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Play", size: _p.size ?? "sm", destructive: _p.destructive ?? true, symbol: _p.symbol ?? "􀊄", style2: _p.style2 ?? "bordered - prominent", enabled: _p.enabled ?? true, labelType: _p.labelType ?? "symbol + text" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 50,
      borderRadius: 500,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgba(60,60,67,0.3)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 34,
      height: 34,
      borderRadius: 500,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 34,
        height: 34,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(60,60,67,0.3)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 28,
      borderRadius: 500,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 28,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(60,60,67,0.3)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 50,
      borderRadius: 500,
      backgroundColor: "rgba(118,118,128,0.12)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgba(60,60,67,0.3)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 34,
      height: 34,
      borderRadius: 500,
      backgroundColor: "rgba(118,118,128,0.12)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 34,
        height: 34,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(60,60,67,0.3)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 28,
      borderRadius: 500,
      backgroundColor: "rgba(118,118,128,0.12)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 28,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(60,60,67,0.3)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 50,
      borderRadius: 500,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--accents-red)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 34,
      height: 34,
      borderRadius: 500,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 34,
        height: 34,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--accents-red)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 28,
      borderRadius: 500,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 28,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--accents-red)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 50,
      borderRadius: 500,
      backgroundColor: "rgba(255,56,60,0.14)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--accents-red)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 34,
      height: 34,
      borderRadius: 500,
      backgroundColor: "rgba(255,56,60,0.14)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 34,
        height: 34,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--accents-red)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 28,
      borderRadius: 500,
      backgroundColor: "rgba(255,56,60,0.14)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 28,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--accents-red)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 50,
      borderRadius: 500,
      backgroundColor: "var(--accents-red)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--grays-white)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 34,
      height: 34,
      borderRadius: 500,
      backgroundColor: "var(--accents-red)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 34,
        height: 34,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--grays-white)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 28,
      borderRadius: 500,
      backgroundColor: "var(--accents-red)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 28,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--grays-white)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 12,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 40,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 40,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 12,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 40,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 40,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(255,56,60,0.14)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(255,56,60,0.14)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(255,56,60,0.14)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "var(--accents-red)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
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
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "var(--accents-red)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "var(--accents-red)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 12,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 40,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 40,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 12,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 40,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 40,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(255,56,60,0.14)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(255,56,60,0.14)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(255,56,60,0.14)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "var(--accents-red)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
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
  const __body43 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "var(--accents-red)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "var(--accents-red)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 50,
      borderRadius: 500,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: 34,
      height: 34,
      borderRadius: 500,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 34,
        height: 34,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 28,
      borderRadius: 500,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 28,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 50,
      borderRadius: 500,
      backgroundColor: "rgba(118,118,128,0.12)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: 34,
      height: 34,
      borderRadius: 500,
      backgroundColor: "rgba(118,118,128,0.12)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 34,
        height: 34,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 28,
      borderRadius: 500,
      backgroundColor: "rgba(118,118,128,0.12)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 28,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 50,
      borderRadius: 500,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: 34,
      height: 34,
      borderRadius: 500,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 34,
        height: 34,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 28,
      borderRadius: 500,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 28,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 50,
      borderRadius: 500,
      backgroundColor: "rgba(118,118,128,0.12)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--labels-primary)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: 34,
      height: 34,
      borderRadius: 500,
      backgroundColor: "rgba(118,118,128,0.12)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 34,
        height: 34,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--labels-primary)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 28,
      borderRadius: 500,
      backgroundColor: "rgba(118,118,128,0.12)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 28,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--labels-primary)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 50,
      borderRadius: 500,
      backgroundColor: "rgba(118,118,128,0.12)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: 34,
      height: 34,
      borderRadius: 500,
      backgroundColor: "rgba(118,118,128,0.12)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 34,
        height: 34,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 28,
      borderRadius: 500,
      backgroundColor: "rgba(118,118,128,0.12)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 28,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 50,
      borderRadius: 500,
      backgroundColor: "var(--accents-blue)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--grays-white)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: 34,
      height: 34,
      borderRadius: 500,
      backgroundColor: "var(--accents-blue)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 34,
        height: 34,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--grays-white)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 28,
      borderRadius: 500,
      backgroundColor: "var(--accents-blue)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 28,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--grays-white)",
      }}>{props.symbol}</span>
    </div>
  );
  const __body63 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 12,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body64 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 40,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.400px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body65 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 40,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.400px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body66 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body67 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.400px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body68 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.400px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body69 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 12,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body70 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 40,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.400px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body71 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 40,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.400px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body72 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body73 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body74 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body75 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body76 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.400px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body77 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.400px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body78 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "var(--accents-blue)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body79 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "var(--accents-blue)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.400px",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body80 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "var(--accents-blue)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.400px",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body81 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 12,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body82 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 40,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body83 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 40,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body84 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body85 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body86 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body87 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgba(60,60,67,0.3)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body88 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 12,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body89 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 40,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body90 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 40,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body91 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--labels-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--labels-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body92 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--labels-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--labels-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body93 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--labels-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--labels-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body94 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body95 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body96 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body97 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "var(--accents-blue)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "14px 20px 14px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body98 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "var(--accents-blue)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "7px 14px 7px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body99 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 1000,
      backgroundColor: "var(--accents-blue)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.symbol}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--grays-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Size=Large, Style=Borderless, Label Type=Symbol, Enabled=False, Destructive=True
    "size=lg|destructive=true|style2=borderless|enabled=false|labelType=symbol": __body0,
    // figma: Size=Medium, Style=Borderless, Label Type=Symbol, Enabled=False, Destructive=True
    "size=md|destructive=true|style2=borderless|enabled=false|labelType=symbol": __body1,
    // figma: Size=Small, Style=Borderless, Label Type=Symbol, Enabled=False, Destructive=True
    "size=sm|destructive=true|style2=borderless|enabled=false|labelType=symbol": __body2,
    // figma: Size=Large, Style=Bordered - Secondary, Label Type=Symbol, Enabled=False, Destructive=True
    "size=lg|destructive=true|style2=bordered - secondary|enabled=false|labelType=symbol": __body3,
    // figma: Size=Medium, Style=Bordered - Secondary, Label Type=Symbol, Enabled=False, Destructive=True
    "size=md|destructive=true|style2=bordered - secondary|enabled=false|labelType=symbol": __body4,
    // figma: Size=Small, Style=Bordered - Secondary, Label Type=Symbol, Enabled=False, Destructive=True
    "size=sm|destructive=true|style2=bordered - secondary|enabled=false|labelType=symbol": __body5,
    // figma: Size=Large, Style=Bordered, Label Type=Symbol, Enabled=False, Destructive=True
    "size=lg|destructive=true|style2=bordered|enabled=false|labelType=symbol": __body3,
    // figma: Size=Medium, Style=Bordered, Label Type=Symbol, Enabled=False, Destructive=True
    "size=md|destructive=true|style2=bordered|enabled=false|labelType=symbol": __body4,
    // figma: Size=Small, Style=Bordered, Label Type=Symbol, Enabled=False, Destructive=True
    "size=sm|destructive=true|style2=bordered|enabled=false|labelType=symbol": __body5,
    // figma: Size=Large, Style=Bordered - Prominent, Label Type=Symbol, Enabled=False, Destructive=True
    "size=lg|destructive=true|style2=bordered - prominent|enabled=false|labelType=symbol": __body3,
    // figma: Size=Medium, Style=Bordered - Prominent, Label Type=Symbol, Enabled=False, Destructive=True
    "size=md|destructive=true|style2=bordered - prominent|enabled=false|labelType=symbol": __body4,
    // figma: Size=Small, Style=Bordered - Prominent, Label Type=Symbol, Enabled=False, Destructive=True
    "size=sm|destructive=true|style2=bordered - prominent|enabled=false|labelType=symbol": __body5,
    // figma: Size=Large, Style=Borderless, Label Type=Symbol, Enabled=True, Destructive=True
    "size=lg|destructive=true|style2=borderless|enabled=true|labelType=symbol": __body6,
    // figma: Size=Medium, Style=Borderless, Label Type=Symbol, Enabled=True, Destructive=True
    "size=md|destructive=true|style2=borderless|enabled=true|labelType=symbol": __body7,
    // figma: Size=Small, Style=Borderless, Label Type=Symbol, Enabled=True, Destructive=True
    "size=sm|destructive=true|style2=borderless|enabled=true|labelType=symbol": __body8,
    // figma: Size=Large, Style=Bordered - Secondary, Label Type=Symbol, Enabled=True, Destructive=True
    "size=lg|destructive=true|style2=bordered - secondary|enabled=true|labelType=symbol": __body9,
    // figma: Size=Medium, Style=Bordered - Secondary, Label Type=Symbol, Enabled=True, Destructive=True
    "size=md|destructive=true|style2=bordered - secondary|enabled=true|labelType=symbol": __body10,
    // figma: Size=Small, Style=Bordered - Secondary, Label Type=Symbol, Enabled=True, Destructive=True
    "size=sm|destructive=true|style2=bordered - secondary|enabled=true|labelType=symbol": __body11,
    // figma: Size=Large, Style=Bordered, Label Type=Symbol, Enabled=True, Destructive=True
    "size=lg|destructive=true|style2=bordered|enabled=true|labelType=symbol": __body9,
    // figma: Size=Medium, Style=Bordered, Label Type=Symbol, Enabled=True, Destructive=True
    "size=md|destructive=true|style2=bordered|enabled=true|labelType=symbol": __body10,
    // figma: Size=Small, Style=Bordered, Label Type=Symbol, Enabled=True, Destructive=True
    "size=sm|destructive=true|style2=bordered|enabled=true|labelType=symbol": __body11,
    // figma: Size=Large, Style=Bordered - Prominent, Label Type=Symbol, Enabled=True, Destructive=True
    "size=lg|destructive=true|style2=bordered - prominent|enabled=true|labelType=symbol": __body12,
    // figma: Size=Medium, Style=Bordered - Prominent, Label Type=Symbol, Enabled=True, Destructive=True
    "size=md|destructive=true|style2=bordered - prominent|enabled=true|labelType=symbol": __body13,
    // figma: Size=Small, Style=Bordered - Prominent, Label Type=Symbol, Enabled=True, Destructive=True
    "size=sm|destructive=true|style2=bordered - prominent|enabled=true|labelType=symbol": __body14,
    // figma: Size=Large, Style=Borderless, Label Type=Text, Enabled=False, Destructive=True
    "size=lg|destructive=true|style2=borderless|enabled=false|labelType=text": __body15,
    // figma: Size=Medium, Style=Borderless, Label Type=Text, Enabled=False, Destructive=True
    "size=md|destructive=true|style2=borderless|enabled=false|labelType=text": __body16,
    // figma: Size=Small, Style=Borderless, Label Type=Text, Enabled=False, Destructive=True
    "size=sm|destructive=true|style2=borderless|enabled=false|labelType=text": __body17,
    // figma: Size=Large, Style=Bordered - Secondary, Label Type=Text, Enabled=False, Destructive=True
    "size=lg|destructive=true|style2=bordered - secondary|enabled=false|labelType=text": __body18,
    // figma: Size=Medium, Style=Bordered - Secondary, Label Type=Text, Enabled=False, Destructive=True
    "size=md|destructive=true|style2=bordered - secondary|enabled=false|labelType=text": __body19,
    // figma: Size=Small, Style=Bordered - Secondary, Label Type=Text, Enabled=False, Destructive=True
    "size=sm|destructive=true|style2=bordered - secondary|enabled=false|labelType=text": __body20,
    // figma: Size=Large, Style=Bordered, Label Type=Text, Enabled=False, Destructive=True
    "size=lg|destructive=true|style2=bordered|enabled=false|labelType=text": __body18,
    // figma: Size=Medium, Style=Bordered, Label Type=Text, Enabled=False, Destructive=True
    "size=md|destructive=true|style2=bordered|enabled=false|labelType=text": __body19,
    // figma: Size=Small, Style=Bordered, Label Type=Text, Enabled=False, Destructive=True
    "size=sm|destructive=true|style2=bordered|enabled=false|labelType=text": __body20,
    // figma: Size=Large, Style=Bordered - Prominent, Label Type=Text, Enabled=False, Destructive=True
    "size=lg|destructive=true|style2=bordered - prominent|enabled=false|labelType=text": __body18,
    // figma: Size=Medium, Style=Bordered - Prominent, Label Type=Text, Enabled=False, Destructive=True
    "size=md|destructive=true|style2=bordered - prominent|enabled=false|labelType=text": __body19,
    // figma: Size=Small, Style=Bordered - Prominent, Label Type=Text, Enabled=False, Destructive=True
    "size=sm|destructive=true|style2=bordered - prominent|enabled=false|labelType=text": __body20,
    // figma: Size=Large, Style=Borderless, Label Type=Text, Enabled=True, Destructive=True
    "size=lg|destructive=true|style2=borderless|enabled=true|labelType=text": __body21,
    // figma: Size=Medium, Style=Borderless, Label Type=Text, Enabled=True, Destructive=True
    "size=md|destructive=true|style2=borderless|enabled=true|labelType=text": __body22,
    // figma: Size=Small, Style=Borderless, Label Type=Text, Enabled=True, Destructive=True
    "size=sm|destructive=true|style2=borderless|enabled=true|labelType=text": __body23,
    // figma: Size=Large, Style=Bordered - Secondary, Label Type=Text, Enabled=True, Destructive=True
    "size=lg|destructive=true|style2=bordered - secondary|enabled=true|labelType=text": __body24,
    // figma: Size=Medium, Style=Bordered - Secondary, Label Type=Text, Enabled=True, Destructive=True
    "size=md|destructive=true|style2=bordered - secondary|enabled=true|labelType=text": __body25,
    // figma: Size=Small, Style=Bordered - Secondary, Label Type=Text, Enabled=True, Destructive=True
    "size=sm|destructive=true|style2=bordered - secondary|enabled=true|labelType=text": __body26,
    // figma: Size=Large, Style=Bordered, Label Type=Text, Enabled=True, Destructive=True
    "size=lg|destructive=true|style2=bordered|enabled=true|labelType=text": __body24,
    // figma: Size=Medium, Style=Bordered, Label Type=Text, Enabled=True, Destructive=True
    "size=md|destructive=true|style2=bordered|enabled=true|labelType=text": __body25,
    // figma: Size=Small, Style=Bordered, Label Type=Text, Enabled=True, Destructive=True
    "size=sm|destructive=true|style2=bordered|enabled=true|labelType=text": __body26,
    // figma: Size=Large, Style=Bordered - Prominent, Label Type=Text, Enabled=True, Destructive=True
    "size=lg|destructive=true|style2=bordered - prominent|enabled=true|labelType=text": __body27,
    // figma: Size=Medium, Style=Bordered - Prominent, Label Type=Text, Enabled=True, Destructive=True
    "size=md|destructive=true|style2=bordered - prominent|enabled=true|labelType=text": __body28,
    // figma: Size=Small, Style=Bordered - Prominent, Label Type=Text, Enabled=True, Destructive=True
    "size=sm|destructive=true|style2=bordered - prominent|enabled=true|labelType=text": __body29,
    // figma: Size=Large, Style=Borderless, Label Type=Symbol + Text, Enabled=False, Destructive=True
    "size=lg|destructive=true|style2=borderless|enabled=false|labelType=symbol + text": __body30,
    // figma: Size=Medium, Style=Borderless, Label Type=Symbol + Text, Enabled=False, Destructive=True
    "size=md|destructive=true|style2=borderless|enabled=false|labelType=symbol + text": __body31,
    // figma: Size=Small, Style=Borderless, Label Type=Symbol + Text, Enabled=False, Destructive=True
    "size=sm|destructive=true|style2=borderless|enabled=false|labelType=symbol + text": __body32,
    // figma: Size=Large, Style=Bordered - Secondary, Label Type=Symbol + Text, Enabled=False, Destructive=True
    "size=lg|destructive=true|style2=bordered - secondary|enabled=false|labelType=symbol + text": __body33,
    // figma: Size=Medium, Style=Bordered - Secondary, Label Type=Symbol + Text, Enabled=False, Destructive=True
    "size=md|destructive=true|style2=bordered - secondary|enabled=false|labelType=symbol + text": __body34,
    // figma: Size=Small, Style=Bordered - Secondary, Label Type=Symbol + Text, Enabled=False, Destructive=True
    "size=sm|destructive=true|style2=bordered - secondary|enabled=false|labelType=symbol + text": __body35,
    // figma: Size=Large, Style=Bordered, Label Type=Symbol + Text, Enabled=False, Destructive=True
    "size=lg|destructive=true|style2=bordered|enabled=false|labelType=symbol + text": __body33,
    // figma: Size=Medium, Style=Bordered, Label Type=Symbol + Text, Enabled=False, Destructive=True
    "size=md|destructive=true|style2=bordered|enabled=false|labelType=symbol + text": __body34,
    // figma: Size=Small, Style=Bordered, Label Type=Symbol + Text, Enabled=False, Destructive=True
    "size=sm|destructive=true|style2=bordered|enabled=false|labelType=symbol + text": __body35,
    // figma: Size=Large, Style=Bordered - Prominent, Label Type=Symbol + Text, Enabled=False, Destructive=True
    "size=lg|destructive=true|style2=bordered - prominent|enabled=false|labelType=symbol + text": __body33,
    // figma: Size=Medium, Style=Bordered - Prominent, Label Type=Symbol + Text, Enabled=False, Destructive=True
    "size=md|destructive=true|style2=bordered - prominent|enabled=false|labelType=symbol + text": __body34,
    // figma: Size=Small, Style=Bordered - Prominent, Label Type=Symbol + Text, Enabled=False, Destructive=True
    "size=sm|destructive=true|style2=bordered - prominent|enabled=false|labelType=symbol + text": __body35,
    // figma: Size=Large, Style=Borderless, Label Type=Symbol + Text, Enabled=True, Destructive=True
    "size=lg|destructive=true|style2=borderless|enabled=true|labelType=symbol + text": __body36,
    // figma: Size=Medium, Style=Borderless, Label Type=Symbol + Text, Enabled=True, Destructive=True
    "size=md|destructive=true|style2=borderless|enabled=true|labelType=symbol + text": __body37,
    // figma: Size=Small, Style=Borderless, Label Type=Symbol + Text, Enabled=True, Destructive=True
    "size=sm|destructive=true|style2=borderless|enabled=true|labelType=symbol + text": __body38,
    // figma: Size=Large, Style=Bordered - Secondary, Label Type=Symbol + Text, Enabled=True, Destructive=True
    "size=lg|destructive=true|style2=bordered - secondary|enabled=true|labelType=symbol + text": __body39,
    // figma: Size=Medium, Style=Bordered - Secondary, Label Type=Symbol + Text, Enabled=True, Destructive=True
    "size=md|destructive=true|style2=bordered - secondary|enabled=true|labelType=symbol + text": __body40,
    // figma: Size=Small, Style=Bordered - Secondary, Label Type=Symbol + Text, Enabled=True, Destructive=True
    "size=sm|destructive=true|style2=bordered - secondary|enabled=true|labelType=symbol + text": __body41,
    // figma: Size=Large, Style=Bordered, Label Type=Symbol + Text, Enabled=True, Destructive=True
    "size=lg|destructive=true|style2=bordered|enabled=true|labelType=symbol + text": __body39,
    // figma: Size=Medium, Style=Bordered, Label Type=Symbol + Text, Enabled=True, Destructive=True
    "size=md|destructive=true|style2=bordered|enabled=true|labelType=symbol + text": __body40,
    // figma: Size=Small, Style=Bordered, Label Type=Symbol + Text, Enabled=True, Destructive=True
    "size=sm|destructive=true|style2=bordered|enabled=true|labelType=symbol + text": __body41,
    // figma: Size=Large, Style=Bordered - Prominent, Label Type=Symbol + Text, Enabled=True, Destructive=True
    "size=lg|destructive=true|style2=bordered - prominent|enabled=true|labelType=symbol + text": __body42,
    // figma: Size=Medium, Style=Bordered - Prominent, Label Type=Symbol + Text, Enabled=True, Destructive=True
    "size=md|destructive=true|style2=bordered - prominent|enabled=true|labelType=symbol + text": __body43,
    // figma: Size=Small, Style=Bordered - Prominent, Label Type=Symbol + Text, Enabled=True, Destructive=True
    "size=sm|destructive=true|style2=bordered - prominent|enabled=true|labelType=symbol + text": __body44,
    // figma: Size=Large, Style=Borderless, Label Type=Symbol, Enabled=False, Destructive=False
    "size=lg|destructive=false|style2=borderless|enabled=false|labelType=symbol": __body45,
    // figma: Size=Medium, Style=Borderless, Label Type=Symbol, Enabled=False, Destructive=False
    "size=md|destructive=false|style2=borderless|enabled=false|labelType=symbol": __body46,
    // figma: Size=Small, Style=Borderless, Label Type=Symbol, Enabled=False, Destructive=False
    "size=sm|destructive=false|style2=borderless|enabled=false|labelType=symbol": __body47,
    // figma: Size=Large, Style=Bordered - Secondary, Label Type=Symbol, Enabled=False, Destructive=False
    "size=lg|destructive=false|style2=bordered - secondary|enabled=false|labelType=symbol": __body48,
    // figma: Size=Medium, Style=Bordered - Secondary, Label Type=Symbol, Enabled=False, Destructive=False
    "size=md|destructive=false|style2=bordered - secondary|enabled=false|labelType=symbol": __body49,
    // figma: Size=Small, Style=Bordered - Secondary, Label Type=Symbol, Enabled=False, Destructive=False
    "size=sm|destructive=false|style2=bordered - secondary|enabled=false|labelType=symbol": __body50,
    // figma: Size=Large, Style=Bordered, Label Type=Symbol, Enabled=False, Destructive=False
    "size=lg|destructive=false|style2=bordered|enabled=false|labelType=symbol": __body48,
    // figma: Size=Medium, Style=Bordered, Label Type=Symbol, Enabled=False, Destructive=False
    "size=md|destructive=false|style2=bordered|enabled=false|labelType=symbol": __body49,
    // figma: Size=Small, Style=Bordered, Label Type=Symbol, Enabled=False, Destructive=False
    "size=sm|destructive=false|style2=bordered|enabled=false|labelType=symbol": __body50,
    // figma: Size=Large, Style=Bordered - Prominent, Label Type=Symbol, Enabled=False, Destructive=False
    "size=lg|destructive=false|style2=bordered - prominent|enabled=false|labelType=symbol": __body48,
    // figma: Size=Medium, Style=Bordered - Prominent, Label Type=Symbol, Enabled=False, Destructive=False
    "size=md|destructive=false|style2=bordered - prominent|enabled=false|labelType=symbol": __body49,
    // figma: Size=Small, Style=Bordered - Prominent, Label Type=Symbol, Enabled=False, Destructive=False
    "size=sm|destructive=false|style2=bordered - prominent|enabled=false|labelType=symbol": __body50,
    // figma: Size=Large, Style=Borderless, Label Type=Symbol, Enabled=True, Destructive=False
    "size=lg|destructive=false|style2=borderless|enabled=true|labelType=symbol": __body51,
    // figma: Size=Medium, Style=Borderless, Label Type=Symbol, Enabled=True, Destructive=False
    "size=md|destructive=false|style2=borderless|enabled=true|labelType=symbol": __body52,
    // figma: Size=Small, Style=Borderless, Label Type=Symbol, Enabled=True, Destructive=False
    "size=sm|destructive=false|style2=borderless|enabled=true|labelType=symbol": __body53,
    // figma: Size=Large, Style=Bordered - Secondary, Label Type=Symbol, Enabled=True, Destructive=False
    "size=lg|destructive=false|style2=bordered - secondary|enabled=true|labelType=symbol": __body54,
    // figma: Size=Medium, Style=Bordered - Secondary, Label Type=Symbol, Enabled=True, Destructive=False
    "size=md|destructive=false|style2=bordered - secondary|enabled=true|labelType=symbol": __body55,
    // figma: Size=Small, Style=Bordered - Secondary, Label Type=Symbol, Enabled=True, Destructive=False
    "size=sm|destructive=false|style2=bordered - secondary|enabled=true|labelType=symbol": __body56,
    // figma: Size=Large, Style=Bordered, Label Type=Symbol, Enabled=True, Destructive=False
    "size=lg|destructive=false|style2=bordered|enabled=true|labelType=symbol": __body57,
    // figma: Size=Medium, Style=Bordered, Label Type=Symbol, Enabled=True, Destructive=False
    "size=md|destructive=false|style2=bordered|enabled=true|labelType=symbol": __body58,
    // figma: Size=Small, Style=Bordered, Label Type=Symbol, Enabled=True, Destructive=False
    "size=sm|destructive=false|style2=bordered|enabled=true|labelType=symbol": __body59,
    // figma: Size=Large, Style=Bordered - Prominent, Label Type=Symbol, Enabled=True, Destructive=False
    "size=lg|destructive=false|style2=bordered - prominent|enabled=true|labelType=symbol": __body60,
    // figma: Size=Medium, Style=Bordered - Prominent, Label Type=Symbol, Enabled=True, Destructive=False
    "size=md|destructive=false|style2=bordered - prominent|enabled=true|labelType=symbol": __body61,
    // figma: Size=Small, Style=Bordered - Prominent, Label Type=Symbol, Enabled=True, Destructive=False
    "size=sm|destructive=false|style2=bordered - prominent|enabled=true|labelType=symbol": __body62,
    // figma: Size=Large, Style=Borderless, Label Type=Text, Enabled=False, Destructive=False
    "size=lg|destructive=false|style2=borderless|enabled=false|labelType=text": __body63,
    // figma: Size=Medium, Style=Borderless, Label Type=Text, Enabled=False, Destructive=False
    "size=md|destructive=false|style2=borderless|enabled=false|labelType=text": __body64,
    // figma: Size=Small, Style=Borderless, Label Type=Text, Enabled=False, Destructive=False
    "size=sm|destructive=false|style2=borderless|enabled=false|labelType=text": __body65,
    // figma: Size=Large, Style=Bordered - Secondary, Label Type=Text, Enabled=False, Destructive=False
    "size=lg|destructive=false|style2=bordered - secondary|enabled=false|labelType=text": __body66,
    // figma: Size=Medium, Style=Bordered - Secondary, Label Type=Text, Enabled=False, Destructive=False
    "size=md|destructive=false|style2=bordered - secondary|enabled=false|labelType=text": __body67,
    // figma: Size=Small, Style=Bordered - Secondary, Label Type=Text, Enabled=False, Destructive=False
    "size=sm|destructive=false|style2=bordered - secondary|enabled=false|labelType=text": __body68,
    // figma: Size=Large, Style=Bordered, Label Type=Text, Enabled=False, Destructive=False
    "size=lg|destructive=false|style2=bordered|enabled=false|labelType=text": __body66,
    // figma: Size=Medium, Style=Bordered, Label Type=Text, Enabled=False, Destructive=False
    "size=md|destructive=false|style2=bordered|enabled=false|labelType=text": __body67,
    // figma: Size=Small, Style=Bordered, Label Type=Text, Enabled=False, Destructive=False
    "size=sm|destructive=false|style2=bordered|enabled=false|labelType=text": __body68,
    // figma: Size=Large, Style=Bordered - Prominent, Label Type=Text, Enabled=False, Destructive=False
    "size=lg|destructive=false|style2=bordered - prominent|enabled=false|labelType=text": __body18,
    // figma: Size=Medium, Style=Bordered - Prominent, Label Type=Text, Enabled=False, Destructive=False
    "size=md|destructive=false|style2=bordered - prominent|enabled=false|labelType=text": __body67,
    // figma: Size=Small, Style=Bordered - Prominent, Label Type=Text, Enabled=False, Destructive=False
    "size=sm|destructive=false|style2=bordered - prominent|enabled=false|labelType=text": __body68,
    // figma: Size=Large, Style=Borderless, Label Type=Text, Enabled=True, Destructive=False
    "size=lg|destructive=false|style2=borderless|enabled=true|labelType=text": __body69,
    // figma: Size=Medium, Style=Borderless, Label Type=Text, Enabled=True, Destructive=False
    "size=md|destructive=false|style2=borderless|enabled=true|labelType=text": __body70,
    // figma: Size=Small, Style=Borderless, Label Type=Text, Enabled=True, Destructive=False
    "size=sm|destructive=false|style2=borderless|enabled=true|labelType=text": __body71,
    // figma: Size=Large, Style=Bordered - Secondary, Label Type=Text, Enabled=True, Destructive=False
    "size=lg|destructive=false|style2=bordered - secondary|enabled=true|labelType=text": __body72,
    // figma: Size=Medium, Style=Bordered - Secondary, Label Type=Text, Enabled=True, Destructive=False
    "size=md|destructive=false|style2=bordered - secondary|enabled=true|labelType=text": __body73,
    // figma: Size=Small, Style=Bordered - Secondary, Label Type=Text, Enabled=True, Destructive=False
    "size=sm|destructive=false|style2=bordered - secondary|enabled=true|labelType=text": __body74,
    // figma: Size=Large, Style=Bordered, Label Type=Text, Enabled=True, Destructive=False
    "size=lg|destructive=false|style2=bordered|enabled=true|labelType=text": __body75,
    // figma: Size=Medium, Style=Bordered, Label Type=Text, Enabled=True, Destructive=False
    "size=md|destructive=false|style2=bordered|enabled=true|labelType=text": __body76,
    // figma: Size=Small, Style=Bordered, Label Type=Text, Enabled=True, Destructive=False
    "size=sm|destructive=false|style2=bordered|enabled=true|labelType=text": __body77,
    // figma: Size=Large, Style=Bordered - Prominent, Label Type=Text, Enabled=True, Destructive=False
    "size=lg|destructive=false|style2=bordered - prominent|enabled=true|labelType=text": __body78,
    // figma: Size=Medium, Style=Bordered - Prominent, Label Type=Text, Enabled=True, Destructive=False
    "size=md|destructive=false|style2=bordered - prominent|enabled=true|labelType=text": __body79,
    // figma: Size=Small, Style=Bordered - Prominent, Label Type=Text, Enabled=True, Destructive=False
    "size=sm|destructive=false|style2=bordered - prominent|enabled=true|labelType=text": __body80,
    // figma: Size=Large, Style=Borderless, Label Type=Symbol + Text, Enabled=False, Destructive=False
    "size=lg|destructive=false|style2=borderless|enabled=false|labelType=symbol + text": __body81,
    // figma: Size=Medium, Style=Borderless, Label Type=Symbol + Text, Enabled=False, Destructive=False
    "size=md|destructive=false|style2=borderless|enabled=false|labelType=symbol + text": __body82,
    // figma: Size=Small, Style=Borderless, Label Type=Symbol + Text, Enabled=False, Destructive=False
    "size=sm|destructive=false|style2=borderless|enabled=false|labelType=symbol + text": __body83,
    // figma: Size=Large, Style=Bordered - Secondary, Label Type=Symbol + Text, Enabled=False, Destructive=False
    "size=lg|destructive=false|style2=bordered - secondary|enabled=false|labelType=symbol + text": __body84,
    // figma: Size=Medium, Style=Bordered - Secondary, Label Type=Symbol + Text, Enabled=False, Destructive=False
    "size=md|destructive=false|style2=bordered - secondary|enabled=false|labelType=symbol + text": __body85,
    // figma: Size=Small, Style=Bordered - Secondary, Label Type=Symbol + Text, Enabled=False, Destructive=False
    "size=sm|destructive=false|style2=bordered - secondary|enabled=false|labelType=symbol + text": __body86,
    // figma: Size=Large, Style=Bordered, Label Type=Symbol + Text, Enabled=False, Destructive=False
    "size=lg|destructive=false|style2=bordered|enabled=false|labelType=symbol + text": __body84,
    // figma: Size=Medium, Style=Bordered, Label Type=Symbol + Text, Enabled=False, Destructive=False
    "size=md|destructive=false|style2=bordered|enabled=false|labelType=symbol + text": __body85,
    // figma: Size=Small, Style=Bordered, Label Type=Symbol + Text, Enabled=False, Destructive=False
    "size=sm|destructive=false|style2=bordered|enabled=false|labelType=symbol + text": __body86,
    // figma: Size=Large, Style=Bordered - Prominent, Label Type=Symbol + Text, Enabled=False, Destructive=False
    "size=lg|destructive=false|style2=bordered - prominent|enabled=false|labelType=symbol + text": __body33,
    // figma: Size=Medium, Style=Bordered - Prominent, Label Type=Symbol + Text, Enabled=False, Destructive=False
    "size=md|destructive=false|style2=bordered - prominent|enabled=false|labelType=symbol + text": __body87,
    // figma: Size=Small, Style=Bordered - Prominent, Label Type=Symbol + Text, Enabled=False, Destructive=False
    "size=sm|destructive=false|style2=bordered - prominent|enabled=false|labelType=symbol + text": __body86,
    // figma: Size=Large, Style=Borderless, Label Type=Symbol + Text, Enabled=True, Destructive=False
    "size=lg|destructive=false|style2=borderless|enabled=true|labelType=symbol + text": __body88,
    // figma: Size=Medium, Style=Borderless, Label Type=Symbol + Text, Enabled=True, Destructive=False
    "size=md|destructive=false|style2=borderless|enabled=true|labelType=symbol + text": __body89,
    // figma: Size=Small, Style=Borderless, Label Type=Symbol + Text, Enabled=True, Destructive=False
    "size=sm|destructive=false|style2=borderless|enabled=true|labelType=symbol + text": __body90,
    // figma: Size=Large, Style=Bordered - Secondary, Label Type=Symbol + Text, Enabled=True, Destructive=False
    "size=lg|destructive=false|style2=bordered - secondary|enabled=true|labelType=symbol + text": __body91,
    // figma: Size=Medium, Style=Bordered - Secondary, Label Type=Symbol + Text, Enabled=True, Destructive=False
    "size=md|destructive=false|style2=bordered - secondary|enabled=true|labelType=symbol + text": __body92,
    // figma: Size=Small, Style=Bordered - Secondary, Label Type=Symbol + Text, Enabled=True, Destructive=False
    "size=sm|destructive=false|style2=bordered - secondary|enabled=true|labelType=symbol + text": __body93,
    // figma: Size=Large, Style=Bordered, Label Type=Symbol + Text, Enabled=True, Destructive=False
    "size=lg|destructive=false|style2=bordered|enabled=true|labelType=symbol + text": __body94,
    // figma: Size=Medium, Style=Bordered, Label Type=Symbol + Text, Enabled=True, Destructive=False
    "size=md|destructive=false|style2=bordered|enabled=true|labelType=symbol + text": __body95,
    // figma: Size=Small, Style=Bordered, Label Type=Symbol + Text, Enabled=True, Destructive=False
    "size=sm|destructive=false|style2=bordered|enabled=true|labelType=symbol + text": __body96,
    // figma: Size=Large, Style=Bordered - Prominent, Label Type=Symbol + Text, Enabled=True, Destructive=False
    "size=lg|destructive=false|style2=bordered - prominent|enabled=true|labelType=symbol + text": __body97,
    // figma: Size=Medium, Style=Bordered - Prominent, Label Type=Symbol + Text, Enabled=True, Destructive=False
    "size=md|destructive=false|style2=bordered - prominent|enabled=true|labelType=symbol + text": __body98,
    // figma: Size=Small, Style=Bordered - Prominent, Label Type=Symbol + Text, Enabled=True, Destructive=False
    "size=sm|destructive=false|style2=bordered - prominent|enabled=true|labelType=symbol + text": __body99,
  };
  return (__impls[__vkey(props)] ?? __body44)();
}
export default ButtonContentArea;
