import { Separator } from '../lists/Separator.jsx';

// figma node: 5591:68347 _Actions (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function Actions(_p = {}) {
  const props = { ..._p, action: _p.action ?? "Action", mode: _p.mode ?? "dark", symbol: _p.symbol ?? "􀋂" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 52,
      display: "flex",
      flexDirection: "row",
      padding: "0px 11px 0px 16px",
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
        color: "rgb(255,255,255)",
        flexShrink: 0,
      }}>{props.symbol}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 0px 1px 0px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <Separator
          style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"dark"}
        />
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "rgb(255,255,255)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.action}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 52,
      display: "flex",
      flexDirection: "row",
      padding: "0px 11px 0px 16px",
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
        color: "var(--labels-primary)",
        flexShrink: 0,
      }}>{props.symbol}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 0px 1px 0px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <Separator
          style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
        />
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "var(--labels-primary)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.action}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Actions;
