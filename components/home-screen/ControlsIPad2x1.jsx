import { ControlsBGIPad } from './ControlsBGIPad.jsx';

// figma node: 2606:21954 _Controls - iPad - 2x1 (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "on=" + __venc(p.on) + '|' + "type=" + __venc(p.type);

export function ControlsIPad2x1(_p = {}) {
  const props = { ..._p, on: _p.on ?? true, type: _p.type ?? "toggle", showDetail: _p.showDetail ?? true, symbol: _p.symbol ?? "􀑚", detail: _p.detail ?? "Detail", title: _p.title ?? "Title" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 142,
      height: 66,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 14px 0px 14px",
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
          width: 142,
          height: 66,
        }}>
        <ControlsBGIPad
          style={{ transform: "scale(2.152, 1)", transformOrigin: "0 0" }}
          on={false}
        />
      </div>
      <div style={{
        position: "relative",
        width: 40,
        height: 40,
        borderRadius: 100,
        background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(128,128,128),rgb(128,128,128)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
        flexShrink: 0,
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 40,
          height: 40,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 15,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "-0.200px",
          color: "var(--grays-white)",
        }}>{props.symbol}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 1,
        padding: "1px 0px 1px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "100%",
          letterSpacing: "-0.200px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.title}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "rgba(255,255,255,0.33)",
          flexShrink: 0,
        }}>{props.text1 ?? "􀆏"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 142,
      height: 66,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 14px 0px 14px",
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
          width: 142,
          height: 66,
        }}>
        <ControlsBGIPad
          style={{ transform: "scale(2.152, 1)", transformOrigin: "0 0" }}
          on={false}
        />
      </div>
      <div style={{
        position: "relative",
        width: 40,
        height: 40,
        borderRadius: 100,
        background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
        flexShrink: 0,
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 40,
          height: 40,
          opacity: 0.9,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 15,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "-0.200px",
          color: "var(--accents-red)",
        }}>{props.symbol}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 1,
        padding: "1px 0px 1px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "100%",
          letterSpacing: "-0.200px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.title}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "rgba(255,255,255,0.33)",
          flexShrink: 0,
        }}>{props.text1 ?? "􀆏"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 142,
      height: 66,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 14px 0px 14px",
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
          width: 142,
          height: 66,
        }}>
        <ControlsBGIPad
          style={{ transform: "scale(2.152, 1)", transformOrigin: "0 0" }}
          on={false}
        />
      </div>
      <div style={{
        position: "relative",
        width: 40,
        height: 40,
        borderRadius: 100,
        background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
        flexShrink: 0,
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 40,
          height: 40,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 15,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "-0.200px",
          color: "var(--grays-white)",
        }}>{props.symbol}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          lineHeight: "100%",
          letterSpacing: "-0.200px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.title}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "rgba(255,255,255,0.33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 142,
      height: 66,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 14px 0px 14px",
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
          width: 142,
          height: 66,
        }}>
        <ControlsBGIPad
          style={{ transform: "scale(2.152, 1)", transformOrigin: "0 0" }}
          on={true}
        />
      </div>
      <div style={{
        position: "relative",
        width: 40,
        height: 40,
        borderRadius: 100,
        background: "linear-gradient(rgba(51,51,51,0.4),rgba(51,51,51,0.4)), linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3))",
        flexShrink: 0,
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 40,
          height: 40,
          opacity: 0.9,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 15,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "-0.200px",
          color: "var(--accents-red)",
        }}>{props.symbol}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          lineHeight: "100%",
          letterSpacing: "-0.200px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.title}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "rgba(0,0,0,0.4)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: On=False, Type=Menu
    "on=false|type=menu": __body0,
    // figma: On=True, Type=Menu
    "on=true|type=menu": __body1,
    // figma: On=False, Type=Toggle
    "on=false|type=toggle": __body2,
    // figma: On=True, Type=Toggle
    "on=true|type=toggle": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default ControlsIPad2x1;
