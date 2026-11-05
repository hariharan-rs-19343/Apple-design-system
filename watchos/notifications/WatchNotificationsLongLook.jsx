import { WatchButtonPill } from '../buttons/WatchButtonPill.jsx';

// figma node: 4416:1523 Notifications - Long Look
export function WatchNotificationsLongLook(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Title", details: _p.details ?? "The content of the notification goes here. ", showButton2: _p.showButton2 ?? true, showButton3: _p.showButton3 ?? true };
  return (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: "calc(var(--watch-screen-height) * 1px)",
      overflow: "hidden",
      backgroundColor: "rgba(0,0,0,0.45)",
      backdropFilter: "blur(32px)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "29.500px 0px 9.500px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--watch-notification-long-look-margin-t-platter) * 1px)",
      paddingBottom: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 3px 0px 3px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 21,
          backgroundColor: "rgba(255,255,255,0.1)",
          display: "flex",
          flexDirection: "column",
          padding: "7px 7.500px 9.500px 7.500px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--watch-notification-long-look-margin-left-right) * 1px)",
          paddingRight: "calc(var(--watch-notification-long-look-margin-left-right) * 1px)",
          paddingBottom: "calc(var(--watch-notification-long-look-margin-bottom) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 3px 0px 3px",
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 457,
              fontSize: 12,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "14.500px",
              color: "rgba(255,255,255,0.5)",
              flexShrink: 0,
            }}>{props.text1 ?? "now"}</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 656,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "18.500px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.title}</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 457,
              fontSize: 16,
              lineHeight: "18.500px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.details}</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "2px 0px 2px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <WatchButtonPill
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default floating"}
        />
        {props.showButton2 && (
        <WatchButtonPill
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default floating"}
        />
        )}
        {props.showButton3 && (
        <WatchButtonPill
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default floating"}
        />
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 39.5,
        display: "flex",
        flexDirection: "row",
        padding: "9.500px 9.500px 9.500px 9.500px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
        paddingTop: "calc(var(--watch-margin-tb-safe-area) * 1px)",
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--watch-button-height-corner) * 1px)",
          height: "calc(var(--watch-button-height-corner) * 1px)",
          boxShadow: "0px 16px 48px 0px rgba(0,0,0,0.32)",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 30,
            height: 30,
            overflow: "hidden",
            borderRadius: 1000,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 30,
              height: 30,
              backgroundColor: "rgb(32,148,250)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 30,
              height: 30,
              opacity: 0.5,
              overflow: "hidden",
              borderRadius: 512,
            }}>
              <svg width={60} height={1} viewBox="0 -0.500 60 1" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 30,
                width: 60,
                height: 1,
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 0 0.5 L 60 0.5 L 60 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={1} height={60} viewBox="-0.500 0 1 60" fill="none" style={{
                position: "absolute",
                left: 30,
                top: 0,
                width: 1,
                height: 60,
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 0.5 60 L 0.5 0 L -0.5 0 L -0.5 60 L 0.5 60 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <div style={{
                position: "absolute",
                left: 7.5,
                top: 7.5,
                width: 45,
                height: 45,
                borderRadius: "50%",
                boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
              }} />
              <div style={{
                position: "absolute",
                left: 14.063,
                top: 14.063,
                width: 31.875,
                height: 31.875,
                borderRadius: "50%",
                boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
              }} />
              <div style={{
                position: "absolute",
                left: 22.5,
                top: 22.5,
                width: 15,
                height: 15,
                borderRadius: "50%",
                boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
              }} />
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 30,
              height: 30,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 30,
                height: 30,
                opacity: 0.5,
                overflow: "hidden",
                borderRadius: 512,
                boxShadow: "inset 0 0 0 1px rgb(255,59,48)",
              }}>
                <svg width={60} height={1} viewBox="0 -0.500 60 1" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 30,
                  width: 60,
                  height: 1,
                  color: "rgb(0,122,255)",
                }}>
                  <path d={"M 0 0.5 L 60 0.5 L 60 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={1} height={60} viewBox="-0.500 0 1 60" fill="none" style={{
                  position: "absolute",
                  left: 30,
                  top: 0,
                  width: 1,
                  height: 60,
                  color: "rgb(0,122,255)",
                }}>
                  <path d={"M 0.5 60 L 0.5 0 L -0.5 0 L -0.5 60 L 0.5 60 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <div style={{
                  position: "absolute",
                  left: 7.5,
                  top: 7.5,
                  width: 45,
                  height: 45,
                  borderRadius: "50%",
                  boxShadow: "inset 0 0 0 1px rgb(0,122,255)",
                }} />
                <div style={{
                  position: "absolute",
                  left: 14.063,
                  top: 14.063,
                  width: 31.875,
                  height: 31.875,
                  borderRadius: "50%",
                  boxShadow: "inset 0 0 0 1px rgb(0,122,255)",
                }} />
                <div style={{
                  position: "absolute",
                  left: 22.5,
                  top: 22.5,
                  width: 15,
                  height: 15,
                  borderRadius: "50%",
                  boxShadow: "inset 0 0 0 1px rgb(0,122,255)",
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "calc(var(--watch-screen-width) * 1px)",
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
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 556,
          fontSize: "calc(var(--watch-nav-bar-font-size) * 1px)",
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "18.500px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text2 ?? "10:09"}</span>
      </div>
    </div>
  );
}
export default WatchNotificationsLongLook;
