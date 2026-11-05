// figma node: 2:54889 _Title - Default (Compact) (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "titleType=" + __venc(p.titleType);

export function TitleDefaultCompact(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", titleType: _p.titleType ?? "default", titleValue: _p.titleValue ?? "Title" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 60,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "11px 0px 11px 0px",
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
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.titleValue}</span>
        <div style={{
          position: "relative",
          width: 13.696,
          height: 13.671,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={13.696} height={13.671} viewBox="0 0 13.696 13.671" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 13.696,
            height: 13.671,
            color: "rgba(60,60,67,0.18)",
          }}>
            <path d={"M 6.848 13.671 C 7.79 13.671 8.674 13.494 9.499 13.14 C 10.325 12.786 11.052 12.292 11.681 11.658 C 12.31 11.025 12.803 10.296 13.16 9.471 C 13.518 8.647 13.696 7.767 13.696 6.832 C 13.696 5.896 13.518 5.016 13.16 4.192 C 12.803 3.367 12.308 2.64 11.677 2.009 C 11.045 1.378 10.317 0.885 9.491 0.531 C 8.665 0.177 7.782 0 6.84 0 C 5.903 0 5.023 0.177 4.197 0.531 C 3.371 0.885 2.644 1.378 2.015 2.009 C 1.387 2.64 0.893 3.367 0.536 4.192 C 0.179 5.016 0 5.896 0 6.832 C 0 7.767 0.179 8.647 0.536 9.471 C 0.893 10.296 1.388 11.025 2.02 11.658 C 2.651 12.292 3.38 12.786 4.205 13.14 C 5.031 13.494 5.912 13.671 6.848 13.671 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={7.081} height={4.242} viewBox="0 0 7.081 4.242" fill="none" style={{
            position: "absolute",
            left: 3.312,
            top: 5.113,
            width: 7.081,
            height: 4.242,
            color: "rgba(60,60,67,0.6)",
          }}>
            <path d={"M 3.541 4.242 C 3.233 4.242 2.955 4.112 2.705 3.852 L 0.195 1.162 C 0.068 1.024 0.003 0.862 0 0.677 C -0.003 0.491 0.054 0.338 0.17 0.216 C 0.315 0.072 0.481 0 0.669 0 C 0.858 0 1.015 0.069 1.143 0.208 L 3.536 2.772 L 5.938 0.208 C 6.066 0.069 6.224 0.001 6.412 0.004 C 6.6 0.007 6.764 0.077 6.902 0.216 C 7.024 0.332 7.084 0.484 7.081 0.672 C 7.078 0.861 7.01 1.024 6.877 1.162 L 4.376 3.852 C 4.126 4.112 3.848 4.242 3.541 4.242 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 38,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 11,
        width: 38,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(0,0,0)",
      }}>{props.titleValue}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Light, Title Type=Document
    "mode=light|titleType=document": __body0,
    // figma: Mode=Light, Title Type=Default
    "mode=light|titleType=default": __body1,
    // figma: Mode=Dark, Title Type=Document
    "mode=dark|titleType=document": __body0,
    // figma: Mode=Dark, Title Type=Default
    "mode=dark|titleType=default": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default TitleDefaultCompact;
