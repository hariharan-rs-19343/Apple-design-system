// figma node: 127:60051 _Header/Dark/Title + Subtitle
export function HeaderDarkTitleSubtitle(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Title", subtitle1: _p.subtitle1 ?? "Subtitle 1", subtitle2: _p.subtitle2 ?? "Subtitle 2" };
  return (
    <div className={props.className} style={{
      width: 393,
      height: 92,
      borderTop: "1px solid rgb(0,0,0)",
      borderRight: "1px solid rgb(0,0,0)",
      borderBottom: "0.333px solid rgb(0,0,0)",
      borderLeft: "1px solid rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 347,
        top: 15,
        width: 30,
        height: 30,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 30,
          height: 30,
          borderRadius: "50%",
          backgroundColor: "rgba(118,118,128,0.24)",
        }} />
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 30,
          height: 30,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "21px",
          color: "rgba(235,235,245,0.6)",
        }}>{props.text1 ?? "􀅾"}</span>
      </div>
      <span style={{
        position: "absolute",
        left: 92,
        top: 41,
        width: 241,
        height: 20,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(0,0,0)",
      }}>{props.title}</span>
      <div className="fig-asset-63f9f677c21872ea" style={{
        position: "absolute",
        left: 16,
        top: 21,
        width: 60,
        height: 60,
        borderRadius: 7.5,
        boxShadow: "inset 0 0 0 0.500px rgba(0,0,0,0.15), 0px 1px 4px 0px rgba(0,0,0,0.15)",
      }} />
    </div>
  );
}
export default HeaderDarkTitleSubtitle;
