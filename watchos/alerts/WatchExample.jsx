import { WatchButtonCorner } from '../buttons/WatchButtonCorner.jsx';
import { WatchButtonFloatingDefault } from './WatchButtonFloatingDefault.jsx';
import { WatchFaces } from '../bezels/WatchFaces.jsx';

// figma node: 6549:3790 Example (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function WatchExample(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Cannot Connect to server", desscription: _p.desscription ?? "Something went wrong. Please try again.", type: _p.type ?? "title", symbol: _p.symbol ?? "􀇾" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <WatchFaces
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
        face={"activity analog"}
        size={"40mm"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: "calc(var(--watch-screen-height) * 1px)",
        background: "rgba(28,28,30,0.6)", backdropFilter: "blur(32px) saturate(180%)", WebkitBackdropFilter: "blur(32px) saturate(180%)",
        backdropFilter: "blur(32px)",
        paddingBottom: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: "calc(var(--watch-screen-height) * 1px)",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--watch-error-content-t-title-with-close-button) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 47.5,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "6px 9.500px 6px 9.500px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 0px 4px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingTop: "calc(var(--watch-nav-bar-button-top-offset) * 1px)",
            paddingBottom: "calc(var(--watch-nav-bar-button-top-offset) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <WatchButtonCorner
              style={{
                position: "relative",
                width: 30,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              label={"􀆄"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "calc(var(--watch-nav-bar-gap) * 1px)",
            alignItems: "flex-end",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 556,
              fontSize: "calc(var(--watch-nav-bar-font-size) * 1px)",
              textAlign: "right",
              lineHeight: "18.500px",
              color: "var(--watch-colors-white-fff)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>10:09</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 556,
              fontSize: "calc(var(--watch-status-bar-time-font-size) * 1px)",
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "18.500px",
              color: "var(--watch-colors-blue)",
              flexShrink: 0,
            }}> </span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          padding: "0px 6.500px 0px 6.500px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
          paddingRight: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 656,
            fontSize: "calc(var(--watch-list-font-size) * 1px)",
            textAlign: "center",
            lineHeight: "18.500px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
        </div>
      </div>
      <WatchButtonFloatingDefault
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
          width: "auto",
        }}
        label={"Retry"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: "calc(var(--watch-screen-height) * 1px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--watch-error-content-t-symbol-description) * 1px)",
      }}>
        <div style={{
          position: "relative",
          height: 33,
          display: "flex",
          flexDirection: "column",
          padding: "6px 9.500px 6px 9.500px",
          alignItems: "flex-end",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: "calc(var(--watch-nav-bar-font-size) * 1px)",
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "18.500px",
            color: "var(--watch-colors-white-fff)",
            flexShrink: 0,
          }}>10:09</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "0px 6.500px 0px 6.500px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
          paddingRight: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 457,
            fontSize: 34,
            textAlign: "center",
            lineHeight: "100%",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.symbol}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 457,
            fontSize: "calc(var(--watch-list-font-size) * 1px)",
            textAlign: "center",
            lineHeight: "18.500px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.desscription}</span>
        </div>
      </div>
      <WatchButtonFloatingDefault
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
          width: "auto",
        }}
        label={"OK"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: "calc(var(--watch-screen-height) * 1px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 33,
          display: "flex",
          flexDirection: "column",
          padding: "6px 9.500px 6px 9.500px",
          alignItems: "flex-end",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: "calc(var(--watch-nav-bar-font-size) * 1px)",
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "18.500px",
            color: "var(--watch-colors-white-fff)",
            flexShrink: 0,
          }}>10:09</span>
        </div>
        <div style={{
          position: "relative",
          height: 88,
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          padding: "32px 6.500px 32px 6.500px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
          paddingTop: "calc(var(--watch-error-content-t-title) * 1px)",
          paddingRight: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 457,
            fontSize: "calc(var(--watch-list-font-size) * 1px)",
            textAlign: "center",
            lineHeight: "18.500px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.desscription}</span>
        </div>
      </div>
      <WatchButtonFloatingDefault
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
          width: "auto",
        }}
        label={"OK"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "calc(var(--watch-screen-width) * 1px)",
        height: "calc(var(--watch-screen-height) * 1px)",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--watch-error-content-t-title-description) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: "calc(var(--watch-nav-bar-height-status-bar) * 1px)",
          display: "flex",
          flexDirection: "column",
          padding: "6px 9.500px 6px 9.500px",
          alignItems: "flex-end",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
          paddingTop: "calc(var(--watch-nav-bar-margin-top) * 1px)",
          paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: "calc(var(--watch-nav-bar-font-size) * 1px)",
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "18.500px",
            color: "var(--watch-colors-white-fff)",
            flexShrink: 0,
          }}>10:09</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          padding: "0px 6.500px 0px 6.500px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
          paddingRight: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 656,
            fontSize: "calc(var(--watch-list-font-size) * 1px)",
            textAlign: "center",
            lineHeight: "18.500px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 457,
            fontSize: "calc(var(--watch-list-font-size) * 1px)",
            textAlign: "center",
            lineHeight: "18.500px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.desscription}</span>
        </div>
      </div>
      <WatchButtonFloatingDefault
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
          width: "auto",
        }}
        label={"OK"}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "calc(var(--watch-screen-width) * 1px)",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--watch-error-content-t-title) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: "calc(var(--watch-nav-bar-height-status-bar) * 1px)",
          display: "flex",
          flexDirection: "column",
          padding: "6px 9.500px 6px 9.500px",
          alignItems: "flex-end",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
          paddingTop: "calc(var(--watch-nav-bar-margin-top) * 1px)",
          paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: "calc(var(--watch-nav-bar-font-size) * 1px)",
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "18.500px",
            color: "var(--watch-colors-white-fff)",
            flexShrink: 0,
          }}>10:09</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          padding: "0px 6.500px 0px 6.500px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
          paddingRight: "calc(var(--watch-margin-lr-copy-minus-full-width) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 656,
            fontSize: "calc(var(--watch-list-font-size) * 1px)",
            textAlign: "center",
            lineHeight: "18.500px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
        </div>
      </div>
      <WatchButtonFloatingDefault
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
          width: "auto",
        }}
        label={"OK"}
      />
    </div>
  );
  const __impls = {
    // figma: Type=Title with Close Button
    "type=title with close button": __body0,
    // figma: Type=Symbol + Description
    "type=symbol + description": __body1,
    // figma: Type=Description Only
    "type=description only": __body2,
    // figma: Type=Title + Description
    "type=title + description": __body3,
    // figma: Type=Title
    "type=title": __body4,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default WatchExample;
