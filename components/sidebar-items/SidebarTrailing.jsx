import { ToggleSwitch } from '../toggles/ToggleSwitch.jsx';

// figma node: 5643:28168 _Sidebar - Trailing (24 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state) + '|' + "type=" + __venc(p.type);

export function SidebarTrailing(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "dark", state: _p.state ?? "default", type: _p.type ?? "checkmark", detail: _p.detail ?? "Detail", symbol: _p.symbol ?? "􀓔", showDetail: _p.showDetail ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgb(138,138,138)",
        flexShrink: 0,
      }}>{props.detail}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgb(138,138,138)",
        flexShrink: 0,
      }}>{props.detail}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(245,245,245)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀆅"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgb(138,138,138)",
        flexShrink: 0,
      }}>{props.detail}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(245,245,245)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀅴"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 4px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgb(138,138,138)",
        flexShrink: 0,
      }}>{props.detail}</span>
      )}
      <div style={{
        position: "relative",
        width: 18,
        height: 18,
        flexShrink: 0,
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 18,
          height: 18,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(153,153,153)",
        }}>􀆊</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 4px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgb(138,138,138)",
        flexShrink: 0,
      }}>{props.detail}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(138,138,138)",
        flexShrink: 0,
      }}>{props.symbol}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "11px 0px 11px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", width: 64, flexShrink: 0 }}>{props.icon1 ?? <ToggleSwitch state={"on"} />}</div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 0px",
      justifyContent: "flex-end",
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
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgb(138,138,138)",
        flexShrink: 0,
      }}>{props.detail}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgb(138,138,138)",
        flexShrink: 0,
      }}>{props.detail}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(245,245,245)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀆅"}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgb(138,138,138)",
        flexShrink: 0,
      }}>{props.detail}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(245,245,245)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀅳"}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 4px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgb(138,138,138)",
        flexShrink: 0,
      }}>{props.detail}</span>
      )}
      <div style={{
        position: "relative",
        width: 18,
        height: 18,
        flexShrink: 0,
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 2,
          width: 18,
          height: 18,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--labels-vibrant-primary)",
        }}>􀆈</span>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 4px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgb(138,138,138)",
        flexShrink: 0,
      }}>{props.detail}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(245,245,245)",
        flexShrink: 0,
      }}>{props.symbol}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
      }}>{props.detail}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
      }}>{props.detail}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--labels-vibrant-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀆅"}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
      }}>{props.detail}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--labels-vibrant-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀅴"}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 4px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
      }}>{props.detail}</span>
      )}
      <div style={{
        position: "relative",
        width: 18,
        height: 18,
        flexShrink: 0,
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 18,
          height: 18,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(153,153,153)",
        }}>􀆊</span>
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 4px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
      }}>{props.detail}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
      }}>{props.symbol}</span>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 0px",
      justifyContent: "flex-end",
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
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
      }}>{props.detail}</span>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
      }}>{props.detail}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--labels-vibrant-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀆅"}</span>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
      }}>{props.detail}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--labels-vibrant-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "􀅳"}</span>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 4px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
      }}>{props.detail}</span>
      )}
      <div style={{
        position: "relative",
        width: 18,
        height: 18,
        flexShrink: 0,
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 2,
          width: 18,
          height: 18,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(153,153,153)",
        }}>􀆈</span>
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 4px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--labels-vibrant-secondary)",
        flexShrink: 0,
      }}>{props.detail}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--labels-vibrant-primary)",
        flexShrink: 0,
      }}>{props.symbol}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, State=Selected, Type=Detail
    "mode=dark|state=selected|type=detail": __body0,
    // figma: Mode=Dark, State=Selected, Type=Checkmark
    "mode=dark|state=selected|type=checkmark": __body1,
    // figma: Mode=Dark, State=Selected, Type=Info
    "mode=dark|state=selected|type=info": __body2,
    // figma: Mode=Dark, State=Selected, Type=Disclosure
    "mode=dark|state=selected|type=disclosure": __body3,
    // figma: Mode=Dark, State=Selected, Type=Symbol
    "mode=dark|state=selected|type=symbol": __body4,
    // figma: Mode=Dark, State=Selected, Type=Toggle
    "mode=dark|state=selected|type=toggle": __body5,
    // figma: Mode=Dark, State=Default, Type=Detail
    "mode=dark|state=default|type=detail": __body6,
    // figma: Mode=Dark, State=Default, Type=Checkmark
    "mode=dark|state=default|type=checkmark": __body7,
    // figma: Mode=Dark, State=Default, Type=Info
    "mode=dark|state=default|type=info": __body8,
    // figma: Mode=Dark, State=Default, Type=Disclosure
    "mode=dark|state=default|type=disclosure": __body9,
    // figma: Mode=Dark, State=Default, Type=Symbol
    "mode=dark|state=default|type=symbol": __body10,
    // figma: Mode=Dark, State=Default, Type=Toggle
    "mode=dark|state=default|type=toggle": __body5,
    // figma: Mode=Light, State=Selected, Type=Detail
    "mode=light|state=selected|type=detail": __body11,
    // figma: Mode=Light, State=Selected, Type=Checkmark
    "mode=light|state=selected|type=checkmark": __body12,
    // figma: Mode=Light, State=Selected, Type=Info
    "mode=light|state=selected|type=info": __body13,
    // figma: Mode=Light, State=Selected, Type=Disclosure
    "mode=light|state=selected|type=disclosure": __body14,
    // figma: Mode=Light, State=Selected, Type=Symbol
    "mode=light|state=selected|type=symbol": __body15,
    // figma: Mode=Light, State=Selected, Type=Toggle
    "mode=light|state=selected|type=toggle": __body5,
    // figma: Mode=Light, State=Default, Type=Detail
    "mode=light|state=default|type=detail": __body16,
    // figma: Mode=Light, State=Default, Type=Checkmark
    "mode=light|state=default|type=checkmark": __body17,
    // figma: Mode=Light, State=Default, Type=Info
    "mode=light|state=default|type=info": __body18,
    // figma: Mode=Light, State=Default, Type=Disclosure
    "mode=light|state=default|type=disclosure": __body19,
    // figma: Mode=Light, State=Default, Type=Symbol
    "mode=light|state=default|type=symbol": __body20,
    // figma: Mode=Light, State=Default, Type=Toggle
    "mode=light|state=default|type=toggle": __body5,
  };
  return (__impls[__vkey(props)] ?? __body7)();
}
export default SidebarTrailing;
