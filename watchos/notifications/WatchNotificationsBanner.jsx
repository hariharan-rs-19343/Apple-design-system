// figma node: 4416:828 Notifications - Banner
export function WatchNotificationsBanner(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Title", description: _p.description ?? "Description" };
  return (
    <div className={props.className} style={{
      width: "calc(var(--watch-screen-width) * 1px)",
      height: 45.5,
      backgroundColor: "rgba(0,0,0,0.45)",
      backdropFilter: "blur(32px)",
      display: "flex",
      flexDirection: "column",
      padding: "9.500px 9.500px 9.500px 9.500px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      paddingTop: "calc(var(--watch-margin-tb-safe-area) * 1px)",
      paddingRight: "calc(var(--watch-margin-lr-copy-safe-area) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        borderRadius: 100,
        backgroundColor: "rgba(255,255,255,0.1)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          boxShadow: "0px 16px 48px 0px rgba(0,0,0,0.32)",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 28,
            height: 28,
            overflow: "hidden",
            borderRadius: 1000,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 28,
              height: 28,
              backgroundColor: "rgb(32,148,250)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 28,
              height: 28,
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
              width: 28,
              height: 28,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 28,
                height: 28,
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
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: -2,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 656,
            fontSize: "calc(var(--watch-notification-banner-font-size) * 1px)",
            lineHeight: "14.500px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Compact\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 457,
            fontSize: "calc(var(--watch-notification-banner-font-size) * 1px)",
            lineHeight: "14.500px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.description}</span>
        </div>
      </div>
    </div>
  );
}
export default WatchNotificationsBanner;
