import { ToolbarTopSheet } from '../navigation/ToolbarTopSheet.jsx';

// figma node: 5584:48163 Sheet - Full Screen - iPhone (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "stacked=" + __venc(p.stacked);

export function SheetFullScreenIPhone(_p = {}) {
  const props = { ..._p, stacked: _p.stacked ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 852,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 16,
        top: 0,
        width: 370,
        height: 852,
        overflow: "hidden",
        borderRadius: "38px 38px 9.500px 9.500px",
        backgroundColor: "var(--backgrounds-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg viewBox="0 0 370 852" fill="none" style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          color: "rgba(0,0,0,0.1)",
        }}>
          <path d={"M 0 0 L 370 0 L 370 852 L 0 852 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 10,
        width: 402,
        height: 842,
        overflow: "hidden",
        borderRadius: "38px 38px 9.500px 9.500px",
        backgroundColor: "var(--backgrounds-primary-elevated-2)",
        boxShadow: "0px 15px 75px 0px rgba(0,0,0,0.18)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <ToolbarTopSheet
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
          style2={"default"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 852,
      borderRadius: "38px 38px 0px 0px",
      backgroundColor: "var(--backgrounds-primary-elevated-2)",
      boxShadow: "0px 15px 75px 0px rgba(0,0,0,0.18)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <ToolbarTopSheet
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
        style2={"default"}
      />
    </div>
  );
  const __impls = {
    // figma: Stacked=True
    "stacked=true": __body0,
    // figma: Stacked=False
    "stacked=false": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default SheetFullScreenIPhone;
