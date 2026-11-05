// figma node: 122:58238 _Document Header
export function DocumentHeader(_p = {}) {
  const props = { ..._p, showThumbnail: _p.showThumbnail ?? true, documentTitle: _p.documentTitle ?? "Document Title", showActionButton: _p.showActionButton ?? true };
  return (
    <div className={props.className} style={{
      width: 250,
      height: 72,
      borderTop: "8px solid rgba(0,0,0,0.08)",
      borderRight: "8px solid rgba(0,0,0,0.08)",
      borderBottom: "8px solid rgba(0,0,0,0.08)",
      borderLeft: "8px solid rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 250,
        height: 64,
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "0px 12px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        {props.showThumbnail && (
        <div className="fig-asset-efe98099a0aa97c1" style={{
          position: "relative",
          width: 44,
          height: 44,
          borderRadius: 4,
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.2)",
          flexShrink: 0,
        }} />
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--labels-primary)",
          flexShrink: 0,
        }}>{props.documentTitle}</span>
        {props.showActionButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 28,
            height: 28,
            borderRadius: "50%",
            backgroundColor: "rgba(60,60,67,0.18)",
          }} />
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 28,
            height: 28,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--labels-primary)",
          }}>{props.text1 ?? "􀈂"}</span>
        </div>
        )}
      </div>
    </div>
  );
}
export default DocumentHeader;
