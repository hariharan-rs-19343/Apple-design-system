import { WatchButtonCorner } from '../buttons/WatchButtonCorner.jsx';
import { WatchButtonText } from './WatchButtonText.jsx';

// figma node: 4403:29987 Navigation Bar (9 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function WatchNavigationBar(_p = {}) {
  const props = { ..._p, type: _p.type ?? "status bar", time: _p.time ?? "10:09", title: _p.title ?? "Title" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-nav-bar-height) * 1px)",
      backdropFilter: "blur(30px)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 9.500px 6px 9.500px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      paddingTop: "calc(var(--watch-nav-bar-margin-top) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--watch-nav-bar-button-top-offset) * 1px)",
        paddingBottom: "calc(var(--watch-nav-bar-button-top-offset) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 63,
            height: 30,
            flexShrink: 0,
          }}>{props.icon1 ?? <WatchButtonText label={"Cancel"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--watch-nav-bar-button-top-offset) * 1px)",
        paddingBottom: "calc(var(--watch-nav-bar-button-top-offset) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: "calc(var(--watch-nav-bar-button-radius-symbol) * 1px)",
          borderRadius: 100,
          backgroundColor: "rgba(255,255,255,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "13px 6px 13px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: "calc(var(--watch-nav-bar-font-size) * 1px)",
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "19.500px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Done</span>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-nav-bar-height) * 1px)",
      backdropFilter: "blur(30px)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 9.500px 6px 9.500px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      paddingTop: "calc(var(--watch-nav-bar-margin-top) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 30,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <WatchButtonCorner label={"􀆄"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--watch-nav-bar-button-top-offset) * 1px)",
        paddingBottom: "calc(var(--watch-nav-bar-button-top-offset) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: "calc(var(--watch-nav-bar-button-radius-symbol) * 1px)",
          borderRadius: 100,
          backgroundColor: "rgba(255,255,255,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "13px 6px 13px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 556,
            fontSize: "calc(var(--watch-nav-bar-font-size) * 1px)",
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "19.500px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Done</span>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-nav-bar-height) * 1px)",
      backdropFilter: "blur(30px)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "6px 9.500px 6px 9.500px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      paddingTop: "calc(var(--watch-nav-bar-margin-top) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 30,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <WatchButtonCorner label={"􀆄"} />}</div>
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
        }}>{props.time}</span>
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
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-nav-bar-height) * 1px)",
      backdropFilter: "blur(30px)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "6px 9.500px 6px 9.500px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      paddingTop: "calc(var(--watch-nav-bar-margin-top) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 30,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <WatchButtonCorner label={"􀆄"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--watch-nav-bar-gap) * 1px)",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 556,
          fontSize: "calc(var(--watch-nav-bar-font-size) * 1px)",
          textAlign: "center",
          lineHeight: "18.500px",
          color: "var(--watch-colors-white-fff)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.time}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 556,
          fontSize: "calc(var(--watch-nav-bar-font-size) * 1px)",
          textAlign: "center",
          lineHeight: "18.500px",
          color: "var(--watch-colors-blue)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.title}</span>
      </div>
      <div style={{
        position: "relative",
        width: 30,
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
        <div style={{
            position: "relative",
            width: 30,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <WatchButtonCorner label={"􀆅"} />}</div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-nav-bar-height) * 1px)",
      backdropFilter: "blur(30px)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "6px 9.500px 6px 9.500px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      paddingTop: "calc(var(--watch-nav-bar-margin-top) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 30,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <WatchButtonCorner label={"􀆉"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--watch-nav-bar-gap) * 1px)",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        paddingTop: "calc(var(--watch-nav-bar-text-offset-center-aligned) * 1px)",
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
        }}>{props.time}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 556,
          fontSize: "calc(var(--watch-nav-bar-font-size) * 1px)",
          textAlign: "right",
          lineHeight: "18.500px",
          color: "var(--watch-colors-blue)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.title}</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-nav-bar-height) * 1px)",
      backdropFilter: "blur(30px)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "6px 9.500px 6px 9.500px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      paddingTop: "calc(var(--watch-nav-bar-margin-top) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 30,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <WatchButtonCorner label={"􀅳"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--watch-nav-bar-gap) * 1px)",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 556,
          fontSize: "calc(var(--watch-nav-bar-font-size) * 1px)",
          textAlign: "center",
          lineHeight: "18.500px",
          color: "var(--watch-colors-white-fff)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.time}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 556,
          fontSize: "calc(var(--watch-nav-bar-font-size) * 1px)",
          textAlign: "center",
          lineHeight: "18.500px",
          color: "var(--watch-colors-blue)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.title}</span>
      </div>
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
        <div style={{
            position: "relative",
            width: 30,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <WatchButtonCorner label={"􀅼"} />}</div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-nav-bar-height) * 1px)",
      backdropFilter: "blur(30px)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--watch-nav-bar-gap-large-title) * 1px)",
      padding: "3px 9.500px 3px 9.500px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      paddingTop: "calc(var(--watch-nav-bar-margin-top-large-title) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      position: "relative",
      ...props.style,
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
      }}>{props.time}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 556,
        fontSize: "calc(var(--watch-nav-bar-label-font-size) * 1px)",
        lineHeight: "26.500px",
        color: "var(--watch-colors-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-nav-bar-height) * 1px)",
      backdropFilter: "blur(30px)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--watch-nav-bar-gap) * 1px)",
      padding: "6px 9.500px 6px 9.500px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      paddingTop: "calc(var(--watch-nav-bar-margin-top) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      position: "relative",
      ...props.style,
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
      }}>{props.time}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 556,
        fontSize: "calc(var(--watch-nav-bar-font-size) * 1px)",
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "18.500px",
        color: "var(--watch-colors-blue)",
        flexShrink: 0,
      }}>{props.title}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-nav-bar-height-status-bar) * 1px)",
      backdropFilter: "blur(30px)",
      display: "flex",
      flexDirection: "column",
      padding: "6px 9.500px 6px 9.500px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      paddingTop: "calc(var(--watch-nav-bar-margin-top) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      position: "relative",
      ...props.style,
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
      }}>{props.time}</span>
    </div>
  );
  const __impls = {
    // figma: Type=Modal - Text Buttons
    "type=modal - text buttons": __body0,
    // figma: Type=Modal - Text Confirm Button
    "type=modal - text confirm button": __body1,
    // figma: Type=Modal - 1 Control
    "type=modal - 1 control": __body2,
    // figma: Type=Modal - Default
    "type=modal - default": __body3,
    // figma: Type=Child - Status + Title
    "type=child - status + title": __body4,
    // figma: Type=Center Aligned
    "type=center aligned": __body5,
    // figma: Type=Status + Large Title
    "type=status + large title": __body6,
    // figma: Type=Status + Title
    "type=status + title": __body7,
    // figma: Type=Status Bar
    "type=status bar": __body8,
  };
  return (__impls[__vkey(props)] ?? __body8)();
}
export default WatchNavigationBar;
