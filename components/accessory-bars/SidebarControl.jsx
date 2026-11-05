import { ButtonSymbol } from '../buttons/ButtonSymbol.jsx';

// figma node: 2608:29226 _Sidebar Control (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "toggle=" + __venc(p.toggle);

export function SidebarControl(_p = {}) {
  const props = { ..._p, toggle: _p.toggle ?? "tab bar" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", width: 31, flexShrink: 0 }}>{props.icon1 ?? <ButtonSymbol symbol={"􀏚"} enabled={true} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--accents-blue)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 25.15,
        height: 19.52,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <svg width={25.150} height={19.520} viewBox="0 0 25.150 19.520" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 25.15,
          height: 19.52,
        }}>
          <path d={"M 3.26 18.05 C 2.68 18.05 2.23 17.9 1.93 17.59 C 1.63 17.28 1.47 16.83 1.47 16.24 L 1.47 3.28 C 1.47 2.68 1.62 2.23 1.93 1.93 C 2.24 1.63 2.68 1.47 3.26 1.47 L 21.89 1.47 C 22.46 1.47 22.9 1.62 23.21 1.93 C 23.52 2.23 23.67 2.69 23.67 3.28 L 23.67 16.24 C 23.67 16.84 23.52 17.29 23.21 17.59 C 22.9 17.89 22.46 18.05 21.89 18.05 L 3.26 18.05 Z M 3.23 19.52 L 21.92 19.52 C 22.99 19.52 23.8 19.25 24.34 18.71 C 24.88 18.17 25.15 17.38 25.15 16.32 L 25.15 3.2 C 25.15 2.14 24.88 1.34 24.34 0.81 C 23.8 0.28 22.99 0 21.92 0 L 3.23 0 C 2.16 0 1.36 0.27 0.81 0.81 C 0.27 1.35 0 2.15 0 3.21 L 0 16.33 C 0 17.39 0.27 18.19 0.81 18.72 C 1.35 19.25 2.16 19.52 3.23 19.52 Z M 7.92 4.39 L 17.23 4.39 C 17.42 4.39 17.57 4.33 17.69 4.21 C 17.81 4.09 17.87 3.94 17.87 3.75 C 17.87 3.56 17.81 3.42 17.69 3.29 C 17.57 3.17 17.42 3.11 17.23 3.11 L 7.92 3.11 C 7.74 3.11 7.59 3.17 7.47 3.29 C 7.35 3.41 7.29 3.56 7.29 3.75 C 7.29 3.94 7.35 4.08 7.47 4.21 C 7.59 4.33 7.74 4.39 7.92 4.39 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: Toggle=Sidebar
    "toggle=sidebar": __body0,
    // figma: Toggle=Tab Bar
    "toggle=tab bar": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default SidebarControl;
