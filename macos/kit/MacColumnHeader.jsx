// figma node: 121:12610 Column Header (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "column=" + __venc(p.column) + '|' + "selected=" + __venc(p.selected) + '|' + "sort=" + __venc(p.sort);

export function MacColumnHeader(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Label", column: _p.column ?? "first", selected: _p.selected ?? true, sort: _p.sort ?? "descending" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 150,
      height: 28,
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderRight: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      borderLeft: "1px solid rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 5px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 6px 0px 48px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 9,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "rgba(0,0,0,0.5)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "􀆈"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 150,
      height: 28,
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderRight: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      borderLeft: "1px solid rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 5px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 6px 0px 48px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 9,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "rgba(0,0,0,0.5)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "􀆇"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 150,
      height: 28,
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderRight: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      borderLeft: "1px solid rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 5px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 6px 0px 48px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "rgba(0,0,0,0.5)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 150,
      height: 28,
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderRight: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      borderLeft: "1px solid rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 5px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderTop: "1px solid rgba(0,0,0,0.1)",
        borderRight: "1px solid rgba(0,0,0,0.1)",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        borderLeft: "1px solid rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 6px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 9,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "rgba(0,0,0,0.5)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "􀆈"}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 150,
      height: 28,
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderRight: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      borderLeft: "1px solid rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 5px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderTop: "1px solid rgba(0,0,0,0.1)",
        borderRight: "1px solid rgba(0,0,0,0.1)",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        borderLeft: "1px solid rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 6px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 9,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "rgba(0,0,0,0.5)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "􀆇"}</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 150,
      height: 28,
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderRight: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      borderLeft: "1px solid rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 5px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderTop: "1px solid rgba(0,0,0,0.1)",
        borderRight: "1px solid rgba(0,0,0,0.1)",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        borderLeft: "1px solid rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 6px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "rgba(0,0,0,0.5)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Column=First, Selected=True, Sort=Descending
    "column=first|selected=true|sort=descending": __body0,
    // figma: Column=First, Selected=True, Sort=Ascending
    "column=first|selected=true|sort=ascending": __body1,
    // figma: Column=First, Selected=False, Sort=Ascending
    "column=first|selected=false|sort=ascending": __body2,
    // figma: Column=Middle, Selected=True, Sort=Descending
    "column=middle|selected=true|sort=descending": __body3,
    // figma: Column=Middle, Selected=True, Sort=Ascending
    "column=middle|selected=true|sort=ascending": __body4,
    // figma: Column=Middle, Selected=False, Sort=Ascending
    "column=middle|selected=false|sort=ascending": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default MacColumnHeader;
