// figma node: 544:192373 Progress Indicator (1 variants)
export function ProgressIndicator(_p = {}) {
  const props = { ..._p, label: _p.label ?? true, statusText: _p.statusText ?? "Status..." };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 30,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(-0.707,0.707,-0.707,-0.707,12.879,10.050)",
          transformOrigin: "0 0",
          width: 4,
          height: 10,
          opacity: 0.87,
          borderRadius: 4,
          backgroundColor: "rgba(60,60,67,0.6)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,1,-1,0,10,13)",
          transformOrigin: "0 0",
          width: 4,
          height: 10,
          opacity: 0.75,
          borderRadius: 4,
          backgroundColor: "rgba(60,60,67,0.6)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,-0.707,0.707,10.051,17.121)",
          transformOrigin: "0 0",
          width: 4,
          height: 10,
          opacity: 0.63,
          borderRadius: 4,
          backgroundColor: "rgba(60,60,67,0.6)",
        }} />
        <div style={{
          position: "absolute",
          left: 13,
          top: 20,
          width: 4,
          height: 10,
          opacity: 0.51,
          borderRadius: 4,
          backgroundColor: "rgba(60,60,67,0.6)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(-0.707,0.707,-0.707,-0.707,27.023,24.192)",
          transformOrigin: "0 0",
          width: 4,
          height: 10,
          opacity: 0.39,
          borderRadius: 4,
          backgroundColor: "rgba(60,60,67,0.6)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,1,-1,0,30,13)",
          transformOrigin: "0 0",
          width: 4,
          height: 10,
          opacity: 0.27,
          borderRadius: 4,
          backgroundColor: "rgba(60,60,67,0.6)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,-0.707,0.707,24.195,2.979)",
          transformOrigin: "0 0",
          width: 4,
          height: 10,
          opacity: 0.15,
          borderRadius: 4,
          backgroundColor: "rgba(60,60,67,0.6)",
        }} />
        <div style={{
          position: "absolute",
          left: 13,
          top: 0,
          width: 4,
          height: 10,
          borderRadius: 4,
          backgroundColor: "rgba(60,60,67,0.6)",
        }} />
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "rgba(60,60,67,0.6)",
        flexShrink: 0,
      }}>{props.statusText}</span>
      )}
    </div>
  );
}
export default ProgressIndicator;
