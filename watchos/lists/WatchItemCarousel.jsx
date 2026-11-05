// figma node: 6442:4340 Item - Carousel (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "scrollState=" + __venc(p.scrollState) + '|' + "tinted=" + __venc(p.tinted);

export function WatchItemCarousel(_p = {}) {
  const props = { ..._p, scrollState: _p.scrollState ?? "full view", tinted: _p.tinted ?? true, symbol: _p.symbol ?? "􁌉", label: _p.label ?? "Label", subtitle: _p.subtitle ?? "Subtitle" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      opacity: 0.6,
      display: "flex",
      flexDirection: "column",
      padding: "4px 19.500px 4.500px 15px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-list-carousel-dimmed-left-margin) * 1px)",
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
        height: 92,
        borderRadius: 15.5,
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 457,
          fontSize: 39,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "100%",
          color: "rgb(166,255,0)",
          flexGrow: 1,
        }}>{props.symbol}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "3.500px 0px 3.500px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 18,
            height: 18,
            borderRadius: 30,
            backgroundColor: "rgba(166,255,0,0.2)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0.5,
              width: 18,
              height: 16,
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 556,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "100%",
              color: "rgb(166,255,0)",
            }}>{props.text1 ?? "􀍠"}</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 4.500px 0px 4.500px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
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
          color: "rgba(188,188,188,0.6)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.subtitle}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 9.500px 4.500px 5.500px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-list-carousel-default-left-margin) * 1px)",
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
        height: 92,
        borderRadius: 15.5,
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 457,
          fontSize: 39,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "100%",
          color: "rgb(166,255,0)",
          flexGrow: 1,
        }}>{props.symbol}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "3.500px 0px 3.500px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 18,
            height: 18,
            borderRadius: 30,
            backgroundColor: "rgba(166,255,0,0.2)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0.5,
              width: 18,
              height: 16,
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 556,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "100%",
              color: "rgb(166,255,0)",
            }}>{props.text1 ?? "􀍠"}</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 4px 0px 4px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "var(--watch-text-colors-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
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
          color: "rgba(188,188,188,0.6)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.subtitle}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      opacity: 0.6,
      display: "flex",
      flexDirection: "column",
      padding: "4px 19.500px 4.500px 15px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-list-carousel-dimmed-left-margin) * 1px)",
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
        height: 92,
        borderRadius: 15.5,
        backgroundColor: "rgba(166,255,0,0.2)",
        paddingLeft: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
        paddingTop: "calc(var(--watch-list-margin-top) * 1px)",
        paddingRight: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
        paddingBottom: "calc(var(--watch-list-margin-bottom) * 1px)",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 457,
          fontSize: 39,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "100%",
          color: "rgb(166,255,0)",
          flexGrow: 1,
        }}>{props.symbol}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "3.500px 0px 3.500px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 18,
            height: 18,
            borderRadius: 30,
            backgroundColor: "rgba(166,255,0,0.2)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0.5,
              width: 18,
              height: 16,
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 556,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "100%",
              color: "rgb(166,255,0)",
            }}>{props.text1 ?? "􀍠"}</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 4px 0px 4px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "rgb(242,244,252)",
          flexShrink: 0,
          alignSelf: "stretch",
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
          color: "rgb(166,255,0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.subtitle}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 9.500px 4.500px 5.500px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-list-carousel-default-left-margin) * 1px)",
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
        height: 92,
        borderRadius: 15.5,
        backgroundColor: "rgba(166,255,0,0.2)",
        paddingLeft: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
        paddingTop: "calc(var(--watch-list-margin-top) * 1px)",
        paddingRight: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
        paddingBottom: "calc(var(--watch-list-margin-bottom) * 1px)",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 457,
          fontSize: 39,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "100%",
          color: "rgb(166,255,0)",
          flexGrow: 1,
        }}>{props.symbol}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "3.500px 0px 3.500px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 18,
            height: 18,
            borderRadius: 30,
            backgroundColor: "rgba(166,255,0,0.2)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0.5,
              width: 18,
              height: 16,
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 556,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "100%",
              color: "rgb(166,255,0)",
            }}>{props.text1 ?? "􀍠"}</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 4px 0px 4px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: "calc(var(--watch-list-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          color: "rgb(242,244,252)",
          flexShrink: 0,
          alignSelf: "stretch",
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
          color: "rgb(166,255,0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.subtitle}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Scroll State=Partially Clipped, Tinted=False
    "scrollState=partially clipped|tinted=false": __body0,
    // figma: Scroll State=Full View, Tinted=False
    "scrollState=full view|tinted=false": __body1,
    // figma: Scroll State=Partially Clipped, Tinted=True
    "scrollState=partially clipped|tinted=true": __body2,
    // figma: Scroll State=Full View, Tinted=True
    "scrollState=full view|tinted=true": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default WatchItemCarousel;
