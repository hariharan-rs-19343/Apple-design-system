// figma node: 2524:949 _Tab Buttons/Sidebar (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state);

export function TabButtonsSidebar(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "dark", state: _p.state ?? "selected", symbol: _p.symbol ?? "􀰱" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 32.5,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 56,
        height: 32.5,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.230px",
        color: "var(--miscellaneous-floating-tab-pill-fill)",
      }}>{props.symbol}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, State=Selected
    "mode=dark|state=selected": __body0,
    // figma: Mode=Dark Elevated, State=Selected
    "mode=dark elevated|state=selected": __body0,
    // figma: Mode=Light, State=Selected
    "mode=light|state=selected": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TabButtonsSidebar;
