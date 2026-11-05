// figma node: 540:189865 _Mode (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function WatchMode(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "dark" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 54,
      borderRadius: 4,
      backgroundColor: "rgba(120,120,128,0.24)",
      boxShadow: "inset 0 0 0 1px rgba(230,238,255,0.75)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3px 6px 3px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(230,238,255,0.75)",
      ...props.style,
    }}>
      <svg width={7.928} height={9.155} viewBox="0 0 7.928 9.155" fill="none" style={{
        position: "relative",
        width: 7.928,
        height: 9.155,
        flexShrink: 0,
      }}>
        <path d={"M 7.928 2.289 L 7.928 6.865 L 3.964 9.155 L 0 6.865 L 0 2.289 L 3.964 0 L 7.928 2.289 Z M 1 2.866 L 1 6.289 L 3.964 8 L 6.928 6.289 L 6.928 2.865 L 3.964 1.155 L 1 2.866 Z M 3.964 3.577 C 4.516 3.577 4.964 4.025 4.964 4.577 C 4.964 5.13 4.516 5.577 3.964 5.577 C 3.412 5.577 2.964 5.13 2.964 4.577 C 2.964 4.025 3.412 3.577 3.964 3.577 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: "calc(var(--watch-text-styles-caption2-font-size) * 1px)",
        lineHeight: "13px",
        letterSpacing: "-0.400px",
        color: "var(--watch-vibrant-text-colors-primary)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Light"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 54,
      borderRadius: 4,
      backgroundColor: "rgba(120,120,128,0.24)",
      boxShadow: "inset 0 0 0 1px rgba(230,238,255,0.75)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3px 6px 3px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(230,238,255,0.75)",
      ...props.style,
    }}>
      <svg width={7.928} height={9.155} viewBox="0 0 7.928 9.155" fill="none" style={{
        position: "relative",
        width: 7.928,
        height: 9.155,
        flexShrink: 0,
      }}>
        <path d={"M 7.928 2.289 L 7.928 6.865 L 3.964 9.155 L 0 6.865 L 0 2.289 L 3.964 0 L 7.928 2.289 Z M 1 2.866 L 1 6.289 L 3.964 8 L 6.928 6.289 L 6.928 2.865 L 3.964 1.155 L 1 2.866 Z M 3.964 3.577 C 4.516 3.577 4.964 4.025 4.964 4.577 C 4.964 5.13 4.516 5.577 3.964 5.577 C 3.412 5.577 2.964 5.13 2.964 4.577 C 2.964 4.025 3.412 3.577 3.964 3.577 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: "calc(var(--watch-text-styles-caption2-font-size) * 1px)",
        lineHeight: "13px",
        letterSpacing: "-0.400px",
        color: "var(--watch-vibrant-text-colors-primary)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Dark"}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Light
    "mode=light": __body0,
    // figma: Mode=Dark
    "mode=dark": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default WatchMode;
