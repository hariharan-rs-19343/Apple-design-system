import { ButtonLiquidGlass } from '../buttons/ButtonLiquidGlass.jsx';
import { CloseButton2 } from './CloseButton2.jsx';

// figma node: 127:59083 _Header (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function Header(_p = {}) {
  const props = { ..._p, showSubtitle: _p.showSubtitle ?? true, showClose: _p.showClose ?? true, showMenu: _p.showMenu ?? true, title: _p.title ?? "Title", subtitle: _p.subtitle ?? "Subtitle", secondaryMenu: _p.secondaryMenu ?? "Only invited people can edit.", mode: _p.mode ?? "light" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        alignSelf: "stretch",
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
          }}>{props.title}</span>
          {props.showSubtitle && (
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
          }}>{props.subtitle}</span>
          )}
        </div>
        {props.showMenu && (
        <ButtonLiquidGlass
          style={{ position: "relative", height: 34, flexShrink: 0 }}
          mode={"dark"}
        />
        )}
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
          }}>{props.secondaryMenu}</span>
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
          }}>{props.text1 ?? "􀆊"}</span>
        </div>
      </div>
      {props.showClose && (
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
              color: "rgb(64,64,64)",
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
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        alignSelf: "stretch",
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
          }}>{props.title}</span>
          {props.showSubtitle && (
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
          }}>{props.subtitle}</span>
          )}
        </div>
        {props.showMenu && (
        <ButtonLiquidGlass
          style={{ position: "relative", height: 34, flexShrink: 0 }}
          symbol={"􀉬"}
          mode={"light"}
        />
        )}
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
          }}>{props.secondaryMenu}</span>
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
          }}>{props.text1 ?? "􀆊"}</span>
        </div>
      </div>
      {props.showClose && (
      <div style={{
          position: "relative",
          width: 44,
          height: 44,
          flexShrink: 0,
        }}>{props.icon1 ?? <CloseButton2 mode={"light"} />}</div>
      )}
    </div>
  );
  const __impls = {
    // figma: Mode=Dark
    "mode=dark": __body0,
    // figma: Mode=Light
    "mode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Header;
