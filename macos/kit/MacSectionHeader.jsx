import { MacDisclosureHeader } from './MacDisclosureHeader.jsx';

// figma node: 195:8503 Section Header (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function MacSectionHeader(_p = {}) {
  const props = { ..._p, size: _p.size ?? "sm", showDetail: _p.showDetail ?? true, showDisclosure: _p.showDisclosure ?? true, sectionTitle: _p.sectionTitle ?? "Section Title", detail: _p.detail ?? "Detail" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 270,
      display: "flex",
      flexDirection: "row",
      padding: "15px 12px 5px 18px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "rgba(0,0,0,0.5)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.sectionTitle}</span>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "rgba(0,0,0,0.5)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.detail}</span>
      )}
      {props.showDisclosure && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <MacDisclosureHeader expanded={true} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 270,
      display: "flex",
      flexDirection: "row",
      padding: "17px 12px 8px 18px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "rgba(0,0,0,0.5)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.sectionTitle}</span>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "rgba(0,0,0,0.5)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.detail}</span>
      )}
      {props.showDisclosure && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <MacDisclosureHeader expanded={true} />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 270,
      display: "flex",
      flexDirection: "row",
      padding: "18px 12px 9px 18px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgba(0,0,0,0.5)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.sectionTitle}</span>
      {props.showDetail && (
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgba(0,0,0,0.5)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.detail}</span>
      )}
      {props.showDisclosure && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <MacDisclosureHeader expanded={true} />}</div>
      )}
    </div>
  );
  const __impls = {
    // figma: Size=Small
    "size=sm": __body0,
    // figma: Size=Medium
    "size=md": __body1,
    // figma: Size=Large
    "size=lg": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default MacSectionHeader;
