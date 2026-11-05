import { Action } from './Action.jsx';
import { Actions } from './Actions.jsx';
import { Separator } from '../lists/Separator.jsx';
import { SystemIcons } from '../app-icons/SystemIcons.jsx';

// figma node: 5908:2105 Activity View - iPhone (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function ActivityViewIPhone(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "dark" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 992,
      position: "relative",
      ...props.style,
    }}>
      <svg width={402} height={992} viewBox="0 0 402 992" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 992,
        borderRadius: "38px 38px 0px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
        filter: "drop-shadow(0px 15px 75px rgba(0,0,0,0.18))",
        color: "rgb(28,28,30)",
      }}>
        <path d={"M 0 38 C 0 17.013 17.013 0 38 0 L 364 0 C 384.987 0 402 17.013 402 38 L 402 992 L 0 992 L 0 38 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          padding: "16px 16px 16px 16px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "14px 12px 14px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={64} height={64} viewBox="0 0 64 64" fill="none" style={{
              position: "relative",
              width: 64,
              height: 64,
              borderRadius: 16,
              flexShrink: 0,
              filter: "drop-shadow(0px 2px 16px rgba(0,0,0,0.15))",
              color: "rgba(0,0,0,0.15)",
            }}>
              <path d={"M 0 25.6 C 0 16.639 0 12.159 1.744 8.736 C 3.278 5.726 5.726 3.278 8.736 1.744 C 12.159 0 16.639 0 25.6 0 L 38.4 0 C 47.361 0 51.841 0 55.264 1.744 C 58.274 3.278 60.722 5.726 62.256 8.736 C 64 12.159 64 16.639 64 25.6 L 64 38.4 C 64 47.361 64 51.841 62.256 55.264 C 60.722 58.274 58.274 60.722 55.264 62.256 C 51.841 64 47.361 64 38.4 64 L 25.6 64 C 16.639 64 12.159 64 8.736 62.256 C 5.726 60.722 3.278 58.274 1.744 55.264 C 0 51.841 0 47.361 0 38.4 L 0 25.6 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.736 62.256 L 8.963 61.811 L 8.736 62.256 Z M 62.256 55.264 L 62.702 55.491 L 62.256 55.264 Z M 55.264 62.256 L 55.491 62.702 L 55.264 62.256 Z M 55.264 1.744 L 55.037 2.189 L 55.264 1.744 Z M 62.256 8.736 L 61.811 8.963 L 62.256 8.736 Z M 8.736 1.744 L 8.509 1.298 L 8.736 1.744 Z M 1.744 8.736 L 1.298 8.509 L 1.744 8.736 Z M 25.6 0 L 25.6 0.5 L 38.4 0.5 L 38.4 0 L 38.4 -0.5 L 25.6 -0.5 L 25.6 0 Z M 64 25.6 L 63.5 25.6 L 63.5 38.4 L 64 38.4 L 64.5 38.4 L 64.5 25.6 L 64 25.6 Z M 38.4 64 L 38.4 63.5 L 25.6 63.5 L 25.6 64 L 25.6 64.5 L 38.4 64.5 L 38.4 64 Z M 0 38.4 L 0.5 38.4 L 0.5 25.6 L 0 25.6 L -0.5 25.6 L -0.5 38.4 L 0 38.4 Z M 25.6 64 L 25.6 63.5 C 21.111 63.5 17.775 63.5 15.132 63.284 C 12.495 63.068 10.592 62.641 8.963 61.811 L 8.736 62.256 L 8.509 62.702 C 10.303 63.615 12.352 64.06 15.051 64.28 C 17.744 64.5 21.128 64.5 25.6 64.5 L 25.6 64 Z M 0 38.4 L -0.5 38.4 C -0.5 42.872 -0.5 46.256 -0.28 48.949 C -0.06 51.648 0.385 53.697 1.298 55.491 L 1.744 55.264 L 2.189 55.037 C 1.359 53.408 0.932 51.505 0.716 48.868 C 0.5 46.225 0.5 42.889 0.5 38.4 L 0 38.4 Z M 8.736 62.256 L 8.963 61.811 C 6.047 60.325 3.675 57.953 2.189 55.037 L 1.744 55.264 L 1.298 55.491 C 2.88 58.596 5.404 61.12 8.509 62.702 L 8.736 62.256 Z M 64 38.4 L 63.5 38.4 C 63.5 42.889 63.5 46.225 63.284 48.868 C 63.068 51.505 62.641 53.408 61.811 55.037 L 62.256 55.264 L 62.702 55.491 C 63.615 53.697 64.06 51.648 64.28 48.949 C 64.5 46.256 64.5 42.872 64.5 38.4 L 64 38.4 Z M 38.4 64 L 38.4 64.5 C 42.872 64.5 46.256 64.5 48.949 64.28 C 51.648 64.06 53.697 63.615 55.491 62.702 L 55.264 62.256 L 55.037 61.811 C 53.408 62.641 51.505 63.068 48.868 63.284 C 46.225 63.5 42.889 63.5 38.4 63.5 L 38.4 64 Z M 62.256 55.264 L 61.811 55.037 C 60.325 57.953 57.953 60.325 55.037 61.811 L 55.264 62.256 L 55.491 62.702 C 58.596 61.12 61.12 58.596 62.702 55.491 L 62.256 55.264 Z M 38.4 0 L 38.4 0.5 C 42.889 0.5 46.225 0.5 48.868 0.716 C 51.505 0.932 53.408 1.359 55.037 2.189 L 55.264 1.744 L 55.491 1.298 C 53.697 0.385 51.648 -0.06 48.949 -0.28 C 46.256 -0.5 42.872 -0.5 38.4 -0.5 L 38.4 0 Z M 64 25.6 L 64.5 25.6 C 64.5 21.128 64.5 17.744 64.28 15.051 C 64.06 12.352 63.615 10.303 62.702 8.509 L 62.256 8.736 L 61.811 8.963 C 62.641 10.592 63.068 12.495 63.284 15.132 C 63.5 17.775 63.5 21.111 63.5 25.6 L 64 25.6 Z M 55.264 1.744 L 55.037 2.189 C 57.953 3.675 60.325 6.047 61.811 8.963 L 62.256 8.736 L 62.702 8.509 C 61.12 5.404 58.596 2.88 55.491 1.298 L 55.264 1.744 Z M 25.6 0 L 25.6 -0.5 C 21.128 -0.5 17.744 -0.5 15.051 -0.28 C 12.352 -0.06 10.303 0.385 8.509 1.298 L 8.736 1.744 L 8.963 2.189 C 10.592 1.359 12.495 0.932 15.132 0.716 C 17.775 0.5 21.111 0.5 25.6 0.5 L 25.6 0 Z M 0 25.6 L 0.5 25.6 C 0.5 21.111 0.5 17.775 0.716 15.132 C 0.932 12.495 1.359 10.592 2.189 8.963 L 1.744 8.736 L 1.298 8.509 C 0.385 10.303 -0.06 12.352 -0.28 15.051 C -0.5 17.744 -0.5 21.128 -0.5 25.6 L 0 25.6 Z M 8.736 1.744 L 8.509 1.298 C 5.404 2.88 2.88 5.404 1.298 8.509 L 1.744 8.736 L 2.189 8.963 C 3.675 6.047 6.047 3.675 8.963 2.189 L 8.736 1.744 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "12px 0px 2px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.230px",
                color: "rgb(245,245,245)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Title</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                letterSpacing: "-0.080px",
                color: "rgb(138,138,138)",
                flexShrink: 0,
              }}>Subtitle</span>
            </div>
            <div style={{
              position: "relative",
              height: 34,
              borderRadius: 1000,
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "6px 10px 6px 14px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 152,
                height: 34,
              }}>
                <svg width={152} height={34} viewBox="0 0 152 34" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 152,
                  height: 34,
                  opacity: 0.67,
                  borderRadius: 1000,
                  filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
                }}>
                  <path d={"M 0 17 C 0 7.611 7.611 0 17 0 L 135 0 C 144.389 0 152 7.611 152 17 L 152 17 C 152 26.389 144.389 34 135 34 L 17 34 C 7.611 34 0 26.389 0 17 L 0 17 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={152} height={34} viewBox="0 0 152 34" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 152,
                  height: 34,
                  borderRadius: 296,
                  color: "rgba(0,0,0,0.2)",
                }}>
                  <path d={"M 0 17 C 0 7.611 7.611 0 17 0 L 135 0 C 144.389 0 152 7.611 152 17 L 152 17 C 152 26.389 144.389 34 135 34 L 17 34 C 7.611 34 0 26.389 0 17 L 0 17 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgb(245,245,245)",
                flexShrink: 0,
              }}>􀉬</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgb(245,245,245)",
                flexShrink: 0,
              }}>Collaborate</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 590,
                fontSize: 15,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgb(138,138,138)",
                flexShrink: 0,
              }}>􀆊</span>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 15,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "18px",
                letterSpacing: "-0.080px",
                color: "rgb(138,138,138)",
                flexShrink: 0,
              }}>Only invited people can edit.</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 15,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "18px",
                letterSpacing: "-0.080px",
                color: "rgb(64,64,64)",
                flexShrink: 0,
              }}>􀆊</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            height: 44,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 16px 10px 16px",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              height: 44,
              borderRadius: 296,
              backgroundColor: "rgb(255,255,255)",
              display: "flex",
              flexDirection: "row",
              gap: 20,
              padding: "0px 4px 0px 4px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
              }}>
                <svg width={44} height={44} viewBox="0 0 44 44" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 44,
                  height: 44,
                  overflow: "hidden",
                  borderRadius: 296,
                  filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
                }}>
                  <path d={"M 0 22 C 0 9.85 9.85 0 22 0 L 22 0 C 34.15 0 44 9.85 44 22 L 44 22 C 44 34.15 34.15 44 22 44 L 22 44 C 9.85 44 0 34.15 0 22 L 0 22 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 36,
                height: 36,
                borderRadius: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 510,
                  fontSize: 17,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "var(--labels-vibrant-controls-primary)",
                  flexGrow: 1,
                  alignSelf: "stretch",
                }}>􀆄</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 24px 0px 24px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Separator
            style={{
              position: "relative",
              height: 1,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"dark"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 14,
          padding: "14px 24px 16px 24px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 78,
            height: 104,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 75,
              width: 78,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
              flexWrap: "nowrap",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "15px",
                letterSpacing: "0.060px",
                color: "var(--labels-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Herland</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "15px",
                letterSpacing: "0.060px",
                color: "var(--labels-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Antezana</span>
            </div>
            <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
              position: "absolute",
              left: 4,
              top: 0,
              width: 70,
              height: 70,
              overflow: "hidden",
              borderRadius: 100,
            }}>
              <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 35 0 C 54.33 0 70 15.67 70 35 L 70 35 C 70 54.33 54.33 70 35 70 L 35 70 C 15.67 70 0 54.33 0 35 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 54,
                top: 50,
                width: 20,
                height: 20,
              }}>
              <SystemIcons
                style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }}
                icon={"messages"}
                mode={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 104,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 75,
              width: 78,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
              flexWrap: "nowrap",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "15px",
                letterSpacing: "0.060px",
                color: "var(--labels-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Rigo</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "15px",
                letterSpacing: "0.060px",
                color: "var(--labels-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Rangel</span>
            </div>
            <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
              position: "absolute",
              left: 4,
              top: 0,
              width: 70,
              height: 70,
              overflow: "hidden",
              borderRadius: 100,
            }}>
              <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 35 0 C 54.33 0 70 15.67 70 35 L 70 35 C 70 54.33 54.33 70 35 70 L 35 70 C 15.67 70 0 54.33 0 35 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 54,
                top: 50,
                width: 20,
                height: 20,
              }}>
              <SystemIcons
                style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }}
                icon={"messages"}
                mode={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 104,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 75,
              width: 78,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 10,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "13px",
                letterSpacing: "0.060px",
                color: "var(--labels-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Magico and El...</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "15px",
                letterSpacing: "0.060px",
                color: "rgba(60,60,67,0.6)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>2 People</span>
            </div>
            <div style={{
              position: "absolute",
              left: 4,
              top: -1,
              width: 70,
              height: 70,
              borderRadius: 100,
              backgroundColor: "rgba(120,120,128,0.16)",
            }}>
              <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
                position: "absolute",
                left: 39,
                top: 39,
                width: 22,
                height: 22,
                overflow: "hidden",
                borderRadius: 100,
              }}>
                <path d={"M 0 11 C 0 4.925 4.925 0 11 0 L 11 0 C 17.075 0 22 4.925 22 11 L 22 11 C 22 17.075 17.075 22 11 22 L 11 22 C 4.925 22 0 17.075 0 11 L 0 11 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={37.333} height={37.333} viewBox="0 0 37.333 37.333" fill="none" style={{
                position: "absolute",
                left: 9,
                top: 9,
                width: 37.333,
                height: 37.333,
                overflow: "hidden",
                borderRadius: 100,
              }}>
                <path d={"M 0 18.667 C 0 8.357 8.357 0 18.667 0 L 18.667 0 C 28.976 0 37.333 8.357 37.333 18.667 L 37.333 18.667 C 37.333 28.976 28.976 37.333 18.667 37.333 L 18.667 37.333 C 8.357 37.333 0 28.976 0 18.667 L 0 18.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
                position: "absolute",
                left: 54,
                top: 49,
                width: 20,
                height: 20,
              }}>
              <SystemIcons
                style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }}
                icon={"messages"}
                mode={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 104,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 75,
              width: 78,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
              flexWrap: "nowrap",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "15px",
                letterSpacing: "0.060px",
                color: "var(--labels-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Jenny</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "15px",
                letterSpacing: "0.060px",
                color: "var(--labels-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Court</span>
            </div>
            <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
              position: "absolute",
              left: 4,
              top: 0,
              width: 70,
              height: 70,
              overflow: "hidden",
              borderRadius: 100,
            }}>
              <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 35 0 C 54.33 0 70 15.67 70 35 L 70 35 C 70 54.33 54.33 70 35 70 L 35 70 C 15.67 70 0 54.33 0 35 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 54,
                top: 50,
                width: 20,
                height: 20,
              }}>
              <SystemIcons
                style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }}
                icon={"messages"}
                mode={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 104,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 75,
              width: 78,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
              flexWrap: "nowrap",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "15px",
                letterSpacing: "0.060px",
                color: "var(--labels-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Alejandra</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "15px",
                letterSpacing: "0.060px",
                color: "var(--labels-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Delgado</span>
            </div>
            <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
              position: "absolute",
              left: 4,
              top: 0,
              width: 70,
              height: 70,
              overflow: "hidden",
              borderRadius: 100,
            }}>
              <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 35 0 C 54.33 0 70 15.67 70 35 L 70 35 C 70 54.33 54.33 70 35 70 L 35 70 C 15.67 70 0 54.33 0 35 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 54,
                top: 50,
                width: 20,
                height: 20,
              }}>
              <SystemIcons
                style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }}
                icon={"messages"}
                mode={"default"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 24px 0px 24px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Separator
            style={{
              position: "relative",
              height: 1,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"dark"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 14,
          padding: "18px 24px 20px 24px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 78,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: "0px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 70,
                height: 70,
                flexShrink: 0,
              }}>{props.icon1 ?? <SystemIcons icon={"airdrop"} mode={"dark"} style={{ transform: "scale(1.061, 1.061)", transformOrigin: "0 0" }} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "13px",
              letterSpacing: "0.060px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text1 ?? "AirDrop"}</span>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: "0px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 70,
                height: 70,
                flexShrink: 0,
              }}>{props.icon2 ?? <SystemIcons icon={"messages"} mode={"dark"} style={{ transform: "scale(1.061, 1.061)", transformOrigin: "0 0" }} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "13px",
              letterSpacing: "0.060px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text2 ?? "Messages"}</span>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: "0px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 70,
                height: 70,
                flexShrink: 0,
              }}>{props.icon3 ?? <SystemIcons icon={"mail"} mode={"dark"} style={{ transform: "scale(1.061, 1.061)", transformOrigin: "0 0" }} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "13px",
              letterSpacing: "0.060px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "Mail"}</span>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: "0px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 70,
                height: 70,
                flexShrink: 0,
              }}>{props.icon4 ?? <SystemIcons icon={"notes"} mode={"dark"} style={{ transform: "scale(1.061, 1.061)", transformOrigin: "0 0" }} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "13px",
              letterSpacing: "0.060px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text4 ?? "Notes"}</span>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: "0px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 70,
                height: 70,
                flexShrink: 0,
              }}>
              <SystemIcons
                style={{ transform: "scale(1.061, 1.061)", transformOrigin: "0 0" }}
                icon={"reminders"}
                mode={"dark"}
              />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "13px",
              letterSpacing: "0.060px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Reminders</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 24px 0px 24px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Separator
            style={{
              position: "relative",
              height: 1,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"dark"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 14,
          padding: "14px 24px 20px 24px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Action
            style={{ position: "relative", width: 78, flexShrink: 0 }}
            action={"Copy"}
            symbol={"􀉁"}
            mode={"dark"}
          />
          <Action
            style={{ position: "relative", width: 78, flexShrink: 0 }}
            action={"Add to Favorites"}
            symbol={"􀋂"}
            mode={"dark"}
          />
          <Action
            style={{ position: "relative", width: 78, flexShrink: 0 }}
            action={"Add to Reading List"}
            symbol={"􀖆"}
            mode={"dark"}
          />
          <Action
            style={{ position: "relative", width: 78, flexShrink: 0 }}
            action={"Add Bookmark"}
            symbol={"􀉚"}
            mode={"dark"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          padding: "2px 16px 20px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 26,
            backgroundColor: "rgba(120,120,128,0.32)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <Actions
              style={{
                position: "relative",
                height: 52,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              action={"Add to Reading List"}
              symbol={"􀖆"}
              mode={"dark"}
            />
            <Actions
              style={{
                position: "relative",
                height: 52,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              action={"Add Bookmark"}
              symbol={"􀉚"}
              mode={"dark"}
            />
            <Actions
              style={{
                position: "relative",
                height: 52,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              action={"Add to Favorites"}
              mode={"dark"}
            />
            <Actions
              style={{
                position: "relative",
                height: 52,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              action={"Add to Home Screen"}
              symbol={"􀑍"}
              mode={"dark"}
            />
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 26,
            backgroundColor: "rgba(120,120,128,0.32)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <Actions
              style={{
                position: "relative",
                height: 52,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              action={"Markup"}
              symbol={"􀉥"}
              mode={"dark"}
            />
            <Actions
              style={{
                position: "relative",
                height: 52,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              action={"Print"}
              symbol={"􀎚"}
              mode={"dark"}
            />
          </div>
          <div style={{
            position: "relative",
            borderRadius: 1000,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "6px 20px 6px 20px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 139,
              height: 48,
            }}>
              <svg width={85} height={48} viewBox="0 0 85 48" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 85,
                height: 48,
                overflow: "hidden",
                borderRadius: 296,
                filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
              }}>
                <path d={"M 0 24 C 0 10.745 10.745 0 24 0 L 61 0 C 74.255 0 85 10.745 85 24 L 85 24 C 85 37.255 74.255 48 61 48 L 24 48 C 10.745 48 0 37.255 0 24 L 0 24 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              width: 99,
              height: 36,
              borderRadius: 100,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--labels-vibrant-controls-primary)",
                flexShrink: 0,
              }}>Label</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 182,
          top: 5,
          width: 36,
          height: 5,
          borderRadius: 2.5,
          backgroundColor: "rgba(235,235,245,0.3)",
        }} />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 992,
      position: "relative",
      ...props.style,
    }}>
      <svg width={402} height={992} viewBox="0 0 402 992" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 992,
        borderRadius: "38px 38px 0px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
        filter: "drop-shadow(0px 15px 75px rgba(0,0,0,0.18))",
        color: "var(--backgrounds-primary-elevated-2)",
      }}>
        <path d={"M 0 38 C 0 17.013 17.013 0 38 0 L 364 0 C 384.987 0 402 17.013 402 38 L 402 992 L 0 992 L 0 38 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          padding: "16px 16px 16px 16px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "14px 12px 14px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={64} height={64} viewBox="0 0 64 64" fill="none" style={{
              position: "relative",
              width: 64,
              height: 64,
              borderRadius: 16,
              flexShrink: 0,
              filter: "drop-shadow(0px 2px 16px rgba(0,0,0,0.15))",
              color: "rgba(0,0,0,0.15)",
            }}>
              <path d={"M 0 25.6 C 0 16.639 0 12.159 1.744 8.736 C 3.278 5.726 5.726 3.278 8.736 1.744 C 12.159 0 16.639 0 25.6 0 L 38.4 0 C 47.361 0 51.841 0 55.264 1.744 C 58.274 3.278 60.722 5.726 62.256 8.736 C 64 12.159 64 16.639 64 25.6 L 64 38.4 C 64 47.361 64 51.841 62.256 55.264 C 60.722 58.274 58.274 60.722 55.264 62.256 C 51.841 64 47.361 64 38.4 64 L 25.6 64 C 16.639 64 12.159 64 8.736 62.256 C 5.726 60.722 3.278 58.274 1.744 55.264 C 0 51.841 0 47.361 0 38.4 L 0 25.6 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.736 62.256 L 8.963 61.811 L 8.736 62.256 Z M 62.256 55.264 L 62.702 55.491 L 62.256 55.264 Z M 55.264 62.256 L 55.491 62.702 L 55.264 62.256 Z M 55.264 1.744 L 55.037 2.189 L 55.264 1.744 Z M 62.256 8.736 L 61.811 8.963 L 62.256 8.736 Z M 8.736 1.744 L 8.509 1.298 L 8.736 1.744 Z M 1.744 8.736 L 1.298 8.509 L 1.744 8.736 Z M 25.6 0 L 25.6 0.5 L 38.4 0.5 L 38.4 0 L 38.4 -0.5 L 25.6 -0.5 L 25.6 0 Z M 64 25.6 L 63.5 25.6 L 63.5 38.4 L 64 38.4 L 64.5 38.4 L 64.5 25.6 L 64 25.6 Z M 38.4 64 L 38.4 63.5 L 25.6 63.5 L 25.6 64 L 25.6 64.5 L 38.4 64.5 L 38.4 64 Z M 0 38.4 L 0.5 38.4 L 0.5 25.6 L 0 25.6 L -0.5 25.6 L -0.5 38.4 L 0 38.4 Z M 25.6 64 L 25.6 63.5 C 21.111 63.5 17.775 63.5 15.132 63.284 C 12.495 63.068 10.592 62.641 8.963 61.811 L 8.736 62.256 L 8.509 62.702 C 10.303 63.615 12.352 64.06 15.051 64.28 C 17.744 64.5 21.128 64.5 25.6 64.5 L 25.6 64 Z M 0 38.4 L -0.5 38.4 C -0.5 42.872 -0.5 46.256 -0.28 48.949 C -0.06 51.648 0.385 53.697 1.298 55.491 L 1.744 55.264 L 2.189 55.037 C 1.359 53.408 0.932 51.505 0.716 48.868 C 0.5 46.225 0.5 42.889 0.5 38.4 L 0 38.4 Z M 8.736 62.256 L 8.963 61.811 C 6.047 60.325 3.675 57.953 2.189 55.037 L 1.744 55.264 L 1.298 55.491 C 2.88 58.596 5.404 61.12 8.509 62.702 L 8.736 62.256 Z M 64 38.4 L 63.5 38.4 C 63.5 42.889 63.5 46.225 63.284 48.868 C 63.068 51.505 62.641 53.408 61.811 55.037 L 62.256 55.264 L 62.702 55.491 C 63.615 53.697 64.06 51.648 64.28 48.949 C 64.5 46.256 64.5 42.872 64.5 38.4 L 64 38.4 Z M 38.4 64 L 38.4 64.5 C 42.872 64.5 46.256 64.5 48.949 64.28 C 51.648 64.06 53.697 63.615 55.491 62.702 L 55.264 62.256 L 55.037 61.811 C 53.408 62.641 51.505 63.068 48.868 63.284 C 46.225 63.5 42.889 63.5 38.4 63.5 L 38.4 64 Z M 62.256 55.264 L 61.811 55.037 C 60.325 57.953 57.953 60.325 55.037 61.811 L 55.264 62.256 L 55.491 62.702 C 58.596 61.12 61.12 58.596 62.702 55.491 L 62.256 55.264 Z M 38.4 0 L 38.4 0.5 C 42.889 0.5 46.225 0.5 48.868 0.716 C 51.505 0.932 53.408 1.359 55.037 2.189 L 55.264 1.744 L 55.491 1.298 C 53.697 0.385 51.648 -0.06 48.949 -0.28 C 46.256 -0.5 42.872 -0.5 38.4 -0.5 L 38.4 0 Z M 64 25.6 L 64.5 25.6 C 64.5 21.128 64.5 17.744 64.28 15.051 C 64.06 12.352 63.615 10.303 62.702 8.509 L 62.256 8.736 L 61.811 8.963 C 62.641 10.592 63.068 12.495 63.284 15.132 C 63.5 17.775 63.5 21.111 63.5 25.6 L 64 25.6 Z M 55.264 1.744 L 55.037 2.189 C 57.953 3.675 60.325 6.047 61.811 8.963 L 62.256 8.736 L 62.702 8.509 C 61.12 5.404 58.596 2.88 55.491 1.298 L 55.264 1.744 Z M 25.6 0 L 25.6 -0.5 C 21.128 -0.5 17.744 -0.5 15.051 -0.28 C 12.352 -0.06 10.303 0.385 8.509 1.298 L 8.736 1.744 L 8.963 2.189 C 10.592 1.359 12.495 0.932 15.132 0.716 C 17.775 0.5 21.111 0.5 25.6 0.5 L 25.6 0 Z M 0 25.6 L 0.5 25.6 C 0.5 21.111 0.5 17.775 0.716 15.132 C 0.932 12.495 1.359 10.592 2.189 8.963 L 1.744 8.736 L 1.298 8.509 C 0.385 10.303 -0.06 12.352 -0.28 15.051 C -0.5 17.744 -0.5 21.128 -0.5 25.6 L 0 25.6 Z M 8.736 1.744 L 8.509 1.298 C 5.404 2.88 2.88 5.404 1.298 8.509 L 1.744 8.736 L 2.189 8.963 C 3.675 6.047 6.047 3.675 8.963 2.189 L 8.736 1.744 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "12px 0px 2px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.230px",
                color: "var(--labels-vibrant-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Title</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                letterSpacing: "-0.080px",
                color: "var(--labels-vibrant-secondary)",
                flexShrink: 0,
              }}>Subtitle</span>
            </div>
            <div style={{
              position: "relative",
              height: 34,
              borderRadius: 1000,
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "6px 10px 6px 14px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 152,
                height: 34,
              }}>
                <svg width={152} height={34} viewBox="0 0 152 34" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 152,
                  height: 34,
                  overflow: "hidden",
                  borderRadius: 296,
                  filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
                }}>
                  <path d={"M 0 17 C 0 7.611 7.611 0 17 0 L 135 0 C 144.389 0 152 7.611 152 17 L 152 17 C 152 26.389 144.389 34 135 34 L 17 34 C 7.611 34 0 26.389 0 17 L 0 17 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "var(--labels-vibrant-controls-primary)",
                flexShrink: 0,
              }}>􀉬</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 15,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "var(--labels-vibrant-controls-primary)",
                flexShrink: 0,
              }}>Collaborate</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 590,
                fontSize: 15,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "var(--labels-vibrant-controls-secondary)",
                flexShrink: 0,
              }}>􀆊</span>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 15,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "18px",
                letterSpacing: "-0.080px",
                color: "var(--labels-vibrant-secondary)",
                flexShrink: 0,
              }}>Only invited people can edit.</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 15,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "18px",
                letterSpacing: "-0.080px",
                color: "var(--labels-vibrant-tertiary)",
                flexShrink: 0,
              }}>􀆊</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 44,
            height: 44,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 16px 10px 16px",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              height: 44,
              borderRadius: 296,
              backgroundColor: "rgb(255,255,255)",
              display: "flex",
              flexDirection: "row",
              gap: 20,
              padding: "0px 4px 0px 4px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 44,
                height: 44,
              }}>
                <svg width={44} height={44} viewBox="0 0 44 44" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 44,
                  height: 44,
                  overflow: "hidden",
                  borderRadius: 296,
                  filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
                }}>
                  <path d={"M 0 22 C 0 9.85 9.85 0 22 0 L 22 0 C 34.15 0 44 9.85 44 22 L 44 22 C 44 34.15 34.15 44 22 44 L 22 44 C 9.85 44 0 34.15 0 22 L 0 22 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 36,
                height: 36,
                borderRadius: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 510,
                  fontSize: 17,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "var(--labels-vibrant-controls-primary)",
                  flexGrow: 1,
                  alignSelf: "stretch",
                }}>􀆄</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 24px 0px 24px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Separator
            style={{
              position: "relative",
              height: 1,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 14,
          padding: "14px 24px 16px 24px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 78,
            height: 104,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 75,
              width: 78,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
              flexWrap: "nowrap",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "15px",
                letterSpacing: "0.060px",
                color: "var(--labels-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Herland</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "15px",
                letterSpacing: "0.060px",
                color: "var(--labels-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Antezana</span>
            </div>
            <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
              position: "absolute",
              left: 4,
              top: 0,
              width: 70,
              height: 70,
              overflow: "hidden",
              borderRadius: 100,
            }}>
              <path d={"M 0 35 C 0 15.67 15.67 0 35 0 C 54.33 0 70 15.67 70 35 C 70 54.33 54.33 70 35 70 C 15.67 70 0 54.33 0 35 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 54,
                top: 50,
                width: 20,
                height: 20,
              }}>
              <SystemIcons
                style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }}
                icon={"messages"}
                mode={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 104,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 75,
              width: 78,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
              flexWrap: "nowrap",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "15px",
                letterSpacing: "0.060px",
                color: "var(--labels-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Rigo</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "15px",
                letterSpacing: "0.060px",
                color: "var(--labels-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Rangel</span>
            </div>
            <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
              position: "absolute",
              left: 4,
              top: 0,
              width: 70,
              height: 70,
              overflow: "hidden",
              borderRadius: 100,
            }}>
              <path d={"M 0 35 C 0 15.67 15.67 0 35 0 C 54.33 0 70 15.67 70 35 C 70 54.33 54.33 70 35 70 C 15.67 70 0 54.33 0 35 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 54,
                top: 50,
                width: 20,
                height: 20,
              }}>
              <SystemIcons
                style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }}
                icon={"messages"}
                mode={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 104,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 75,
              width: 78,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 10,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "13px",
                letterSpacing: "0.060px",
                color: "var(--labels-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Magico and El...</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "15px",
                letterSpacing: "0.060px",
                color: "rgba(60,60,67,0.6)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>2 People</span>
            </div>
            <div style={{
              position: "absolute",
              left: 4,
              top: -1,
              width: 70,
              height: 70,
              borderRadius: 100,
              backgroundColor: "rgba(120,120,128,0.16)",
            }}>
              <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
                position: "absolute",
                left: 39,
                top: 39,
                width: 22,
                height: 22,
                overflow: "hidden",
                borderRadius: 100,
              }}>
                <path d={"M 0 11 C 0 4.925 4.925 0 11 0 C 17.075 0 22 4.925 22 11 C 22 17.075 17.075 22 11 22 C 4.925 22 0 17.075 0 11 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={37.333} height={37.333} viewBox="0 0 37.333 37.333" fill="none" style={{
                position: "absolute",
                left: 9,
                top: 9,
                width: 37.333,
                height: 37.333,
                overflow: "hidden",
                borderRadius: 100,
              }}>
                <path d={"M 0 18.667 C 0 8.357 8.357 0 18.667 0 C 28.976 0 37.333 8.357 37.333 18.667 C 37.333 28.976 28.976 37.333 18.667 37.333 C 8.357 37.333 0 28.976 0 18.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
                position: "absolute",
                left: 54,
                top: 49,
                width: 20,
                height: 20,
              }}>
              <SystemIcons
                style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }}
                icon={"messages"}
                mode={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 104,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 75,
              width: 78,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
              flexWrap: "nowrap",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "15px",
                letterSpacing: "0.060px",
                color: "var(--labels-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Jenny</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "15px",
                letterSpacing: "0.060px",
                color: "var(--labels-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Court</span>
            </div>
            <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
              position: "absolute",
              left: 4,
              top: 0,
              width: 70,
              height: 70,
              overflow: "hidden",
              borderRadius: 100,
            }}>
              <path d={"M 0 35 C 0 15.67 15.67 0 35 0 C 54.33 0 70 15.67 70 35 C 70 54.33 54.33 70 35 70 C 15.67 70 0 54.33 0 35 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 54,
                top: 50,
                width: 20,
                height: 20,
              }}>
              <SystemIcons
                style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }}
                icon={"messages"}
                mode={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 104,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 75,
              width: 78,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
              flexWrap: "nowrap",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "15px",
                letterSpacing: "0.060px",
                color: "var(--labels-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Alejandra</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "15px",
                letterSpacing: "0.060px",
                color: "var(--labels-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Delgado</span>
            </div>
            <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
              position: "absolute",
              left: 4,
              top: 0,
              width: 70,
              height: 70,
              overflow: "hidden",
              borderRadius: 100,
            }}>
              <path d={"M 0 35 C 0 15.67 15.67 0 35 0 C 54.33 0 70 15.67 70 35 C 70 54.33 54.33 70 35 70 C 15.67 70 0 54.33 0 35 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 54,
                top: 50,
                width: 20,
                height: 20,
              }}>
              <SystemIcons
                style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }}
                icon={"messages"}
                mode={"default"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 24px 0px 24px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Separator
            style={{
              position: "relative",
              height: 1,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 14,
          padding: "18px 24px 20px 24px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 78,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: "0px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 70,
                height: 70,
                flexShrink: 0,
              }}>{props.icon1 ?? <SystemIcons icon={"airdrop"} mode={"default"} style={{ transform: "scale(1.061, 1.061)", transformOrigin: "0 0" }} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "13px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text1 ?? "AirDrop"}</span>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: "0px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 70,
                height: 70,
                flexShrink: 0,
              }}>{props.icon2 ?? <SystemIcons icon={"messages"} mode={"default"} style={{ transform: "scale(1.061, 1.061)", transformOrigin: "0 0" }} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "13px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text2 ?? "Messages"}</span>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: "0px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 70,
                height: 70,
                flexShrink: 0,
              }}>{props.icon3 ?? <SystemIcons icon={"mail"} mode={"default"} style={{ transform: "scale(1.061, 1.061)", transformOrigin: "0 0" }} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "13px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "Mail"}</span>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: "0px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 70,
                height: 70,
                flexShrink: 0,
              }}>{props.icon4 ?? <SystemIcons icon={"notes"} mode={"default"} style={{ transform: "scale(1.061, 1.061)", transformOrigin: "0 0" }} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "13px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text4 ?? "Notes"}</span>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: "0px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 70,
                height: 70,
                flexShrink: 0,
              }}>
              <SystemIcons
                style={{ transform: "scale(1.061, 1.061)", transformOrigin: "0 0" }}
                icon={"reminders"}
                mode={"default"}
              />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 11,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "13px",
              letterSpacing: "0.060px",
              color: "var(--labels-primary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Reminders</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 24px 0px 24px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Separator
            style={{
              position: "relative",
              height: 1,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 14,
          padding: "14px 24px 20px 24px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Action
            style={{ position: "relative", width: 78, flexShrink: 0 }}
            action={"Copy"}
            symbol={"􀉁"}
            mode={"light"}
          />
          <Action
            style={{ position: "relative", width: 78, flexShrink: 0 }}
            action={"Add to Favorites"}
            symbol={"􀋂"}
            mode={"light"}
          />
          <Action
            style={{ position: "relative", width: 78, flexShrink: 0 }}
            action={"Add to Reading List"}
            symbol={"􀖆"}
            mode={"light"}
          />
          <Action
            style={{ position: "relative", width: 78, flexShrink: 0 }}
            action={"Add Bookmark"}
            symbol={"􀉚"}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          padding: "2px 16px 20px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 26,
            backgroundColor: "rgba(120,120,128,0.16)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <Actions
              style={{
                position: "relative",
                height: 52,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              action={"Add to Reading List"}
              symbol={"􀖆"}
              mode={"light"}
            />
            <Actions
              style={{
                position: "relative",
                height: 52,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              action={"Add Bookmark"}
              symbol={"􀉚"}
              mode={"light"}
            />
            <Actions
              style={{
                position: "relative",
                height: 52,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              action={"Add to Favorites"}
              mode={"light"}
            />
            <Actions
              style={{
                position: "relative",
                height: 52,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              action={"Add to Home Screen"}
              symbol={"􀑍"}
              mode={"light"}
            />
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 26,
            backgroundColor: "rgba(120,120,128,0.16)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <Actions
              style={{
                position: "relative",
                height: 52,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              action={"Markup"}
              symbol={"􀉥"}
              mode={"light"}
            />
            <Actions
              style={{
                position: "relative",
                height: 52,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              action={"Print"}
              symbol={"􀎚"}
              mode={"light"}
            />
          </div>
          <div style={{
            position: "relative",
            borderRadius: 1000,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "6px 20px 6px 20px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 139,
              height: 48,
            }}>
              <svg width={139} height={48} viewBox="0 0 139 48" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 139,
                height: 48,
                overflow: "hidden",
                borderRadius: 296,
                filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.12))",
              }}>
                <path d={"M 0 24 C 0 10.745 10.745 0 24 0 L 115 0 C 128.255 0 139 10.745 139 24 L 139 24 C 139 37.255 128.255 48 115 48 L 24 48 C 10.745 48 0 37.255 0 24 L 0 24 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              height: 36,
              borderRadius: 100,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(64,64,64)",
                flexShrink: 0,
              }}>Edit Actions</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 182,
          top: 5,
          width: 36,
          height: 5,
          borderRadius: 2.5,
          backgroundColor: "rgba(60,60,67,0.3)",
        }} />
      </div>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ActivityViewIPhone;
