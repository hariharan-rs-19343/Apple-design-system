// figma node: 480:1029 _Magnifying Glass
export function MacMagnifyingGlass(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 16,
      height: 15,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 16,
        height: 15,
        fontFamily: "\"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: "calc(var(--mac-fields-font-size-search-glyph) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "15px",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "􀊫"}</span>
    </div>
  );
}
export default MacMagnifyingGlass;
