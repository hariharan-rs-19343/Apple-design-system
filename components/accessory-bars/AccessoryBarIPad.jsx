// figma node: 5915:33970 _Accessory Bar - iPad (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function AccessoryBarIPad(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", showButton2: _p.showButton2 ?? true, showButton3: _p.showButton3 ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: -8,
          top: -8,
          width: 44,
          height: 44,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 21,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(153,153,153)",
        }}>􀱍</span>
      </div>
      {props.showButton2 && (
      <div style={{
        position: "relative",
        width: 28,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: -8,
          top: -8,
          width: 44,
          height: 44,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 22,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(153,153,153)",
        }}>􀱓</span>
      </div>
      )}
      {props.showButton3 && (
      <div style={{
        position: "relative",
        width: 28,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: -8,
          top: -8,
          width: 44,
          height: 44,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 22,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(153,153,153)",
        }}>􀉃</span>
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default AccessoryBarIPad;
