// figma node: 550:50430 Item (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "text=" + __venc(p.text);

export function WatchItem(_p = {}) {
  const props = { ..._p, symbol: _p.symbol ?? "􀋒", subtitle: _p.subtitle ?? "Subtitle", symbolLeading: _p.symbolLeading ?? false, symbolTrailing: _p.symbolTrailing ?? false, boldText: _p.boldText ?? "Bold Text", label: _p.label ?? "Label", text: _p.text ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      minHeight: 43.5,
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
        height: 63,
        borderRadius: 8.5,
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        paddingLeft: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
        paddingTop: "calc(var(--watch-list-margin-top) * 1px)",
        paddingRight: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
        paddingBottom: "calc(var(--watch-list-margin-bottom) * 1px)",
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
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.boldText}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.label}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 274,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.subtitle}</span>
      </div>
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
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      minHeight: 43.5,
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
        height: 44,
        borderRadius: 8.5,
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        paddingLeft: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
        paddingTop: "calc(var(--watch-list-margin-top) * 1px)",
        paddingRight: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
        paddingBottom: "calc(var(--watch-list-margin-bottom) * 1px)",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--watch-list-font-size) * 1px)",
        lineHeight: "18px",
        color: "var(--watch-text-colors-primary)",
        flexGrow: 1,
      }}>{props.label}</span>
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
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      minHeight: 43.5,
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
        height: 45,
        borderRadius: 8.5,
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        paddingLeft: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
        paddingTop: "calc(var(--watch-list-margin-top) * 1px)",
        paddingRight: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
        paddingBottom: "calc(var(--watch-list-margin-bottom) * 1px)",
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
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 274,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.subtitle}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.label}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      minHeight: 43.5,
      display: "flex",
      flexDirection: "row",
      gap: 6,
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
        height: 45,
        borderRadius: 8.5,
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        paddingLeft: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
        paddingTop: "calc(var(--watch-list-margin-top) * 1px)",
        paddingRight: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
        paddingBottom: "calc(var(--watch-list-margin-bottom) * 1px)",
      }} />
      {props.symbolLeading && (
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
      }}>{props.text1 ?? "􀂓"}</span>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.label}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 274,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.subtitle}</span>
      </div>
      {props.symbolTrailing && (
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
      }}>{props.text2 ?? "􀂓"}</span>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      minHeight: 43.5,
      display: "flex",
      flexDirection: "row",
      gap: 6,
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
        height: 44,
        borderRadius: 8.5,
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        paddingLeft: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
        paddingTop: "calc(var(--watch-list-margin-top) * 1px)",
        paddingRight: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
        paddingBottom: "calc(var(--watch-list-margin-bottom) * 1px)",
      }} />
      {props.symbolLeading && (
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
      }}>{props.text1 ?? "􀂓"}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--watch-list-font-size) * 1px)",
        lineHeight: "18px",
        color: "var(--watch-text-colors-primary)",
        flexGrow: 1,
      }}>{props.label}</span>
      {props.symbolTrailing && (
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
      }}>{props.text2 ?? "􀂓"}</span>
      )}
    </div>
  );
  const __impls = {
    // figma: Text=3-Line Label + Symbol
    "text=3-line label + symbol": __body0,
    // figma: Text=Label + Symbol
    "text=label + symbol": __body1,
    // figma: Text=Subtitle + Title
    "text=subtitle + title": __body2,
    // figma: Text=Label + Subtitle
    "text=label + subtitle": __body3,
    // figma: Text=Default
    "text=default": __body4,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default WatchItem;
