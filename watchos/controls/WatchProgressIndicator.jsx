import { WatchSpinner } from './WatchSpinner.jsx';

// figma node: 544:192373 Progress Indicator (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function WatchProgressIndicator(_p = {}) {
  const props = { ..._p, size: _p.size ?? "small (status bar)" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-progress-indicator-height-small) * 1px)",
      height: "calc(var(--watch-progress-indicator-height-small) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}>{props.icon1 ?? <WatchSpinner />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-progress-indicator-height-medium) * 1px)",
      height: "calc(var(--watch-progress-indicator-height-medium) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}>{props.icon1 ?? <WatchSpinner />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-progress-indicator-height-large) * 1px)",
      height: "calc(var(--watch-progress-indicator-height-large) * 1px)",
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
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}>{props.icon1 ?? <WatchSpinner />}</div>
    </div>
  );
  const __impls = {
    // figma: Size=Small (Status Bar)
    "size=small (status bar)": __body0,
    // figma: Size=Medium (Table Row)
    "size=medium (table row)": __body1,
    // figma: Size=Large (Content Area)
    "size=large (content area)": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default WatchProgressIndicator;
