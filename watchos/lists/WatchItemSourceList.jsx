// figma node: 6442:4330 Item - Source List (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "scrollState=" + __venc(p.scrollState);

export function WatchItemSourceList(_p = {}) {
  const props = { ..._p, scrollState: _p.scrollState ?? "full view", showSymbol: _p.showSymbol ?? true, symbol: _p.symbol ?? "􀋒", label: _p.label ?? "Label", showSubtitle: _p.showSubtitle ?? true, largeText: _p.largeText ?? "67º", subtitle: _p.subtitle ?? "Subtitle" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      opacity: 0.6,
      display: "flex",
      flexDirection: "row",
      padding: "4px 19.500px 4.500px 19.500px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-list-margin-scrolled) * 1px)",
      paddingTop: "calc(var(--watch-list-margin-top) * 1px)",
      paddingRight: "calc(var(--watch-list-margin-scrolled) * 1px)",
      paddingBottom: "calc(var(--watch-list-margin-bottom) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 12,
        top: 0,
        width: 138,
        height: 75,
        borderRadius: 8.5,
        background: "linear-gradient(180deg, rgb(49,90,212) 0.00%, rgb(90,179,235) 100.00%)",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: "calc(var(--watch-list-font-size) * 1px)",
            lineHeight: "18px",
            color: "var(--watch-text-colors-primary)",
            flexGrow: 1,
          }}>{props.label}</span>
          {props.showSymbol && (
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: "calc(var(--watch-list-font-size) * 1px)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "var(--watch-vibrant-text-colors-primary)",
            flexShrink: 0,
          }}>{props.symbol}</span>
          )}
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 274,
          fontSize: "calc(var(--watch-list-font-size-source-list-large) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "32px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.largeText}</span>
        {props.showSubtitle && (
        <div style={{
          position: "relative",
          height: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 0.5,
            top: -1.5,
            width: 122,
            height: 18,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: "calc(var(--watch-list-font-size) * 1px)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "rgba(188,188,188,0.6)",
          }}>{props.subtitle}</span>
        </div>
        )}
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 9.500px 4.500px 9.500px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      paddingTop: "calc(var(--watch-list-margin-top) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      paddingBottom: "calc(var(--watch-list-margin-bottom) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 0,
        width: 158,
        height: 75,
        borderRadius: 8.5,
        background: "linear-gradient(180deg, rgb(49,90,212) 0.00%, rgb(90,179,235) 100.00%)",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: "calc(var(--watch-list-font-size) * 1px)",
            lineHeight: "18px",
            color: "var(--watch-text-colors-primary)",
            flexGrow: 1,
          }}>{props.label}</span>
          {props.showSymbol && (
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: "calc(var(--watch-list-font-size) * 1px)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "var(--watch-vibrant-text-colors-primary)",
            flexShrink: 0,
          }}>{props.symbol}</span>
          )}
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 274,
          fontSize: "calc(var(--watch-list-font-size-source-list-large) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "32px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.largeText}</span>
        {props.showSubtitle && (
        <div style={{
          position: "relative",
          height: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: -2,
            width: 144,
            height: 18,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: "calc(var(--watch-list-font-size) * 1px)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "rgba(188,188,188,0.6)",
          }}>{props.subtitle}</span>
        </div>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: Scroll State=Partially Clipped
    "scrollState=partially clipped": __body0,
    // figma: Scroll State=Full View
    "scrollState=full view": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default WatchItemSourceList;
