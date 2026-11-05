// figma node: 6414:732 Slider (36 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "stops=" + __venc(p.stops) + '|' + "value=" + __venc(p.value);

export function WatchSlider(_p = {}) {
  const props = { ..._p, symbolTrailing: _p.symbolTrailing ?? "􀊩", type: _p.type ?? "continuous", stops: _p.stops ?? "3", value: _p.value ?? "1", symbolLeading: _p.symbolLeading ?? "􀊥" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "var(--watch-colors-green)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "var(--watch-colors-green)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "var(--watch-colors-green)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "var(--watch-colors-green)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "var(--watch-colors-green)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "var(--watch-colors-green)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "var(--watch-colors-green)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "var(--watch-colors-green)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "var(--watch-colors-green)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "var(--watch-colors-green)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "var(--watch-colors-green)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "var(--watch-colors-green)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "var(--watch-colors-green)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(rgba(0,0,0,0.77),rgba(0,0,0,0.77)), linear-gradient(rgb(4,222,113),rgb(4,222,113))",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 3px 0px 3px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "8.500px 0px 0px 8.500px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolLeading}</span>
      </div>
      <div style={{
        position: "relative",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "0px 5px 0px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        paddingRight: "calc(var(--watch-slider-margin-track-lr) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 3,
          overflow: "hidden",
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "var(--watch-colors-green)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
          <div style={{
            position: "relative",
            backgroundColor: "rgb(4,222,113)",
            flexGrow: 1,
            alignSelf: "stretch",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--watch-slider-button-width) * 1px)",
        borderRadius: "0px 8.500px 8.500px 0px",
        background: "rgba(242,244,252,0.16)", backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)", boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.24), inset 0 -0.5px 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.1)",
        backdropFilter: "blur(25px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
        }}>{props.symbolTrailing}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Type=Continuous, Stops=6, Value=6
    "type=continuous|stops=6|value=6": __body0,
    // figma: Type=Continuous, Stops=6, Value=5
    "type=continuous|stops=6|value=5": __body1,
    // figma: Type=Continuous, Stops=6, Value=4
    "type=continuous|stops=6|value=4": __body2,
    // figma: Type=Continuous, Stops=6, Value=3
    "type=continuous|stops=6|value=3": __body3,
    // figma: Type=Continuous, Stops=6, Value=2
    "type=continuous|stops=6|value=2": __body4,
    // figma: Type=Continuous, Stops=6, Value=1
    "type=continuous|stops=6|value=1": __body5,
    // figma: Type=Continuous, Stops=5, Value=5
    "type=continuous|stops=5|value=5": __body6,
    // figma: Type=Continuous, Stops=5, Value=4
    "type=continuous|stops=5|value=4": __body7,
    // figma: Type=Continuous, Stops=5, Value=3
    "type=continuous|stops=5|value=3": __body8,
    // figma: Type=Continuous, Stops=5, Value=2
    "type=continuous|stops=5|value=2": __body9,
    // figma: Type=Continuous, Stops=5, Value=1
    "type=continuous|stops=5|value=1": __body10,
    // figma: Type=Continuous, Stops=4, Value=4
    "type=continuous|stops=4|value=4": __body11,
    // figma: Type=Continuous, Stops=4, Value=3
    "type=continuous|stops=4|value=3": __body12,
    // figma: Type=Continuous, Stops=4, Value=2
    "type=continuous|stops=4|value=2": __body13,
    // figma: Type=Continuous, Stops=4, Value=1
    "type=continuous|stops=4|value=1": __body14,
    // figma: Type=Continuous, Stops=3, Value=3
    "type=continuous|stops=3|value=3": __body15,
    // figma: Type=Continuous, Stops=3, Value=2
    "type=continuous|stops=3|value=2": __body16,
    // figma: Type=Continuous, Stops=3, Value=1
    "type=continuous|stops=3|value=1": __body17,
    // figma: Type=Segmented, Stops=6, Value=6
    "type=segmented|stops=6|value=6": __body0,
    // figma: Type=Segmented, Stops=6, Value=5
    "type=segmented|stops=6|value=5": __body1,
    // figma: Type=Segmented, Stops=6, Value=4
    "type=segmented|stops=6|value=4": __body2,
    // figma: Type=Segmented, Stops=6, Value=3
    "type=segmented|stops=6|value=3": __body3,
    // figma: Type=Segmented, Stops=6, Value=2
    "type=segmented|stops=6|value=2": __body4,
    // figma: Type=Segmented, Stops=6, Value=1
    "type=segmented|stops=6|value=1": __body5,
    // figma: Type=Segmented, Stops=5, Value=5
    "type=segmented|stops=5|value=5": __body18,
    // figma: Type=Segmented, Stops=5, Value=4
    "type=segmented|stops=5|value=4": __body7,
    // figma: Type=Segmented, Stops=5, Value=3
    "type=segmented|stops=5|value=3": __body8,
    // figma: Type=Segmented, Stops=5, Value=2
    "type=segmented|stops=5|value=2": __body9,
    // figma: Type=Segmented, Stops=5, Value=1
    "type=segmented|stops=5|value=1": __body10,
    // figma: Type=Segmented, Stops=4, Value=4
    "type=segmented|stops=4|value=4": __body19,
    // figma: Type=Segmented, Stops=4, Value=3
    "type=segmented|stops=4|value=3": __body12,
    // figma: Type=Segmented, Stops=4, Value=2
    "type=segmented|stops=4|value=2": __body13,
    // figma: Type=Segmented, Stops=4, Value=1
    "type=segmented|stops=4|value=1": __body14,
    // figma: Type=Segmented, Stops=3, Value=3
    "type=segmented|stops=3|value=3": __body15,
    // figma: Type=Segmented, Stops=3, Value=2
    "type=segmented|stops=3|value=2": __body16,
    // figma: Type=Segmented, Stops=3, Value=1
    "type=segmented|stops=3|value=1": __body17,
  };
  return (__impls[__vkey(props)] ?? __body17)();
}
export default WatchSlider;
