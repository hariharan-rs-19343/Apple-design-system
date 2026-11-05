import { ControlsBGIPad } from './ControlsBGIPad.jsx';

// figma node: 2606:21979 _Controls - iPad - 2x2 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "on=" + __venc(p.on);

export function ControlsIPad2x2(_p = {}) {
  const props = { ..._p, on: _p.on ?? true, symbol: _p.symbol ?? "􀑚", title: _p.title ?? "Title", detail: _p.detail ?? "Detail" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 142,
      height: 142,
      display: "flex",
      flexDirection: "column",
      padding: "14px 13px 17px 13px",
      justifyContent: "space-between",
      alignItems: "flex-start",
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
          height: 142,
        }}>
        <ControlsBGIPad
          style={{ transform: "scale(2.152, 2.152)", transformOrigin: "0 0" }}
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
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "100%",
          letterSpacing: "-0.080px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.title}</span>
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
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 142,
      height: 142,
      display: "flex",
      flexDirection: "column",
      padding: "14px 13px 17px 13px",
      justifyContent: "space-between",
      alignItems: "flex-start",
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
          height: 142,
        }}>
        <ControlsBGIPad
          style={{ transform: "scale(2.152, 2.152)", transformOrigin: "0 0" }}
          on={true}
        />
      </div>
      <div style={{
        position: "relative",
        width: 40,
        height: 40,
        borderRadius: 100,
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: "var(--accents-red)",
        }} />
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
          color: "rgb(255,255,255)",
        }}>{props.symbol}</span>
      </div>
      <div style={{
        position: "relative",
        width: 123,
        display: "flex",
        flexDirection: "column",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "100%",
          letterSpacing: "-0.080px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.title}</span>
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
      </div>
    </div>
  );
  const __impls = {
    // figma: On=False
    "on=false": __body0,
    // figma: On=True
    "on=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ControlsIPad2x2;
