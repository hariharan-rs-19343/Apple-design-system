// figma node: 147:61367 _Trailing (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "disclosable=" + __venc(p.disclosable);

export function Trailing(_p = {}) {
  const props = { ..._p, disclosable: _p.disclosable ?? true, hasChildren: _p.hasChildren ?? true, showDetail: _p.showDetail ?? true, detail: _p.detail ?? "Detail", showSymbol: _p.showSymbol ?? true, trailingSymbol: _p.trailingSymbol ?? "􀓔" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "11px 0px 11px 0px",
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
        lineHeight: "19px",
        letterSpacing: "-0.400px",
        color: "rgba(60,60,67,0.6)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.detail}</span>
      )}
      {props.showSymbol && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.trailingSymbol}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 0px 10px 0px",
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
        lineHeight: "19px",
        letterSpacing: "-0.400px",
        color: "rgba(60,60,67,0.6)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.detail}</span>
      )}
      <div style={{
        position: "relative",
        width: 14,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.hasChildren && (
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 14,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 0px 2px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>􀆈</span>
        </div>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: Disclosable=False
    "disclosable=false": __body0,
    // figma: Disclosable=True
    "disclosable=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Trailing;
