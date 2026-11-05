import { AccessoryBarIPhoneNextDark } from './AccessoryBarIPhoneNextDark.jsx';
import { AccessoryBarIPhonePreviousDark } from './AccessoryBarIPhonePreviousDark.jsx';

// figma node: 515:62805 _Accessory Bar/iPhone/Find/Dark (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function AccessoryBarIPhoneFindDark(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", searchText: _p.searchText ?? "Find text", resultCount: _p.resultCount ?? "1 of 6" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 48,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 75,
        top: 6,
        width: 225,
        height: 36,
        borderRadius: 10,
        backgroundColor: "rgba(118,118,128,0.24)",
      }} />
      <span style={{
        position: "absolute",
        left: 221.5,
        top: 13,
        width: 45,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(60,60,67,0.6)",
      }}>{props.resultCount}</span>
      <div style={{
        position: "absolute",
        left: 113.5,
        top: 12.5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.searchText}</span>
      </div>
      <span style={{
        position: "absolute",
        left: 273,
        top: 13,
        width: 20,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(235,235,245,0.6)",
      }}>{props.text1 ?? "􀁡"}</span>
      <svg width={22.980} height={16.370} viewBox="0 0 22.980 16.370" fill="none" style={{
        position: "absolute",
        left: 83,
        top: 16,
        width: 22.98,
        height: 16.37,
      }}>
        <path d={"M 1.42 6.62 C 1.42 5.9 1.55 5.23 1.82 4.6 C 2.09 3.97 2.46 3.42 2.94 2.94 C 3.42 2.46 3.97 2.09 4.6 1.82 C 5.23 1.55 5.9 1.42 6.62 1.42 C 7.34 1.42 8.01 1.55 8.64 1.82 C 9.27 2.09 9.82 2.46 10.3 2.94 C 10.78 3.42 11.15 3.97 11.42 4.6 C 11.69 5.23 11.83 5.9 11.83 6.62 C 11.83 7.34 11.69 8.01 11.42 8.64 C 11.15 9.27 10.78 9.82 10.3 10.3 C 9.82 10.78 9.27 11.15 8.64 11.42 C 8.01 11.69 7.34 11.83 6.62 11.83 C 5.9 11.83 5.23 11.69 4.6 11.42 C 3.97 11.15 3.42 10.78 2.94 10.3 C 2.46 9.82 2.09 9.27 1.82 8.64 C 1.55 8.01 1.42 7.34 1.42 6.62 Z M 0 6.62 C 0 7.53 0.17 8.39 0.51 9.19 C 0.85 9.99 1.33 10.69 1.94 11.3 C 2.55 11.91 3.25 12.38 4.05 12.73 C 4.85 13.07 5.71 13.24 6.62 13.24 C 7.34 13.24 8.03 13.13 8.68 12.91 C 9.33 12.69 9.93 12.38 10.47 12 L 14.55 16.09 C 14.65 16.18 14.76 16.25 14.88 16.3 C 15 16.35 15.12 16.37 15.26 16.37 C 15.45 16.37 15.61 16.33 15.76 16.24 C 15.9 16.15 16.02 16.04 16.1 15.89 C 16.18 15.74 16.22 15.57 16.22 15.39 C 16.22 15.26 16.2 15.13 16.15 15.02 C 16.1 14.9 16.04 14.8 15.95 14.71 L 11.89 10.63 C 12.32 10.08 12.65 9.46 12.89 8.78 C 13.13 8.1 13.25 7.38 13.25 6.62 C 13.25 5.71 13.08 4.85 12.74 4.05 C 12.4 3.25 11.92 2.55 11.31 1.94 C 10.7 1.33 10 0.86 9.2 0.51 C 8.4 0.17 7.54 0 6.63 0 C 5.72 0 4.86 0.17 4.06 0.51 C 3.26 0.85 2.56 1.33 1.95 1.94 C 1.34 2.55 0.87 3.25 0.52 4.05 C 0.18 4.85 0.01 5.71 0.01 6.62 L 0 6.62 Z M 18.99 10.54 C 19.1 10.54 19.2 10.52 19.29 10.48 C 19.39 10.44 19.47 10.38 19.55 10.29 L 22.76 7.08 C 22.91 6.93 22.98 6.75 22.98 6.54 C 22.98 6.4 22.95 6.27 22.88 6.15 C 22.81 6.03 22.72 5.94 22.61 5.88 C 22.5 5.81 22.37 5.78 22.22 5.78 C 22 5.78 21.82 5.85 21.68 6 L 18.53 9.14 L 19.42 9.14 L 16.27 6 C 16.12 5.85 15.94 5.78 15.73 5.78 C 15.59 5.78 15.46 5.81 15.34 5.88 C 15.22 5.95 15.13 6.04 15.07 6.15 C 15 6.26 14.97 6.39 14.97 6.54 C 14.97 6.76 15.05 6.94 15.2 7.09 L 18.41 10.31 C 18.49 10.39 18.58 10.45 18.67 10.49 C 18.76 10.53 18.86 10.55 18.96 10.55 L 18.99 10.54 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 12,
        top: 12.5,
        width: 43,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "rgb(255,255,255)",
      }}>{props.text2 ?? "Done"}</span>
      <div style={{
          position: "absolute",
          left: 360,
          top: 6,
          width: 22,
          height: 36,
        }}>{props.icon1 ?? <AccessoryBarIPhoneNextDark enabled={true} />}</div>
      <div style={{
          position: "absolute",
          left: 326,
          top: 6,
          width: 22,
          height: 36,
        }}>{props.icon2 ?? <AccessoryBarIPhonePreviousDark enabled={true} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 48,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 75,
        top: 6,
        width: 225,
        height: 36,
        borderRadius: 10,
        backgroundColor: "rgba(118,118,128,0.24)",
      }} />
      <span style={{
        position: "absolute",
        left: 221.5,
        top: 13,
        width: 45,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(60,60,67,0.6)",
      }}>{props.resultCount}</span>
      <div style={{
        position: "absolute",
        left: 113.5,
        top: 12,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.searchText}</span>
        <div style={{
          position: "relative",
          width: 2,
          height: 23,
          borderRadius: 2,
          backgroundColor: "rgb(10,132,255)",
          flexShrink: 0,
        }} />
      </div>
      <span style={{
        position: "absolute",
        left: 273,
        top: 13,
        width: 20,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(235,235,245,0.6)",
      }}>{props.text1 ?? "􀁡"}</span>
      <svg width={22.980} height={16.370} viewBox="0 0 22.980 16.370" fill="none" style={{
        position: "absolute",
        left: 83,
        top: 16,
        width: 22.98,
        height: 16.37,
      }}>
        <path d={"M 1.42 6.62 C 1.42 5.9 1.55 5.23 1.82 4.6 C 2.09 3.97 2.46 3.42 2.94 2.94 C 3.42 2.46 3.97 2.09 4.6 1.82 C 5.23 1.55 5.9 1.42 6.62 1.42 C 7.34 1.42 8.01 1.55 8.64 1.82 C 9.27 2.09 9.82 2.46 10.3 2.94 C 10.78 3.42 11.15 3.97 11.42 4.6 C 11.69 5.23 11.83 5.9 11.83 6.62 C 11.83 7.34 11.69 8.01 11.42 8.64 C 11.15 9.27 10.78 9.82 10.3 10.3 C 9.82 10.78 9.27 11.15 8.64 11.42 C 8.01 11.69 7.34 11.83 6.62 11.83 C 5.9 11.83 5.23 11.69 4.6 11.42 C 3.97 11.15 3.42 10.78 2.94 10.3 C 2.46 9.82 2.09 9.27 1.82 8.64 C 1.55 8.01 1.42 7.34 1.42 6.62 Z M 0 6.62 C 0 7.53 0.17 8.39 0.51 9.19 C 0.85 9.99 1.33 10.69 1.94 11.3 C 2.55 11.91 3.25 12.38 4.05 12.73 C 4.85 13.07 5.71 13.24 6.62 13.24 C 7.34 13.24 8.03 13.13 8.68 12.91 C 9.33 12.69 9.93 12.38 10.47 12 L 14.55 16.09 C 14.65 16.18 14.76 16.25 14.88 16.3 C 15 16.35 15.12 16.37 15.26 16.37 C 15.45 16.37 15.61 16.33 15.76 16.24 C 15.9 16.15 16.02 16.04 16.1 15.89 C 16.18 15.74 16.22 15.57 16.22 15.39 C 16.22 15.26 16.2 15.13 16.15 15.02 C 16.1 14.9 16.04 14.8 15.95 14.71 L 11.89 10.63 C 12.32 10.08 12.65 9.46 12.89 8.78 C 13.13 8.1 13.25 7.38 13.25 6.62 C 13.25 5.71 13.08 4.85 12.74 4.05 C 12.4 3.25 11.92 2.55 11.31 1.94 C 10.7 1.33 10 0.86 9.2 0.51 C 8.4 0.17 7.54 0 6.63 0 C 5.72 0 4.86 0.17 4.06 0.51 C 3.26 0.85 2.56 1.33 1.95 1.94 C 1.34 2.55 0.87 3.25 0.52 4.05 C 0.18 4.85 0.01 5.71 0.01 6.62 L 0 6.62 Z M 18.99 10.54 C 19.1 10.54 19.2 10.52 19.29 10.48 C 19.39 10.44 19.47 10.38 19.55 10.29 L 22.76 7.08 C 22.91 6.93 22.98 6.75 22.98 6.54 C 22.98 6.4 22.95 6.27 22.88 6.15 C 22.81 6.03 22.72 5.94 22.61 5.88 C 22.5 5.81 22.37 5.78 22.22 5.78 C 22 5.78 21.82 5.85 21.68 6 L 18.53 9.14 L 19.42 9.14 L 16.27 6 C 16.12 5.85 15.94 5.78 15.73 5.78 C 15.59 5.78 15.46 5.81 15.34 5.88 C 15.22 5.95 15.13 6.04 15.07 6.15 C 15 6.26 14.97 6.39 14.97 6.54 C 14.97 6.76 15.05 6.94 15.2 7.09 L 18.41 10.31 C 18.49 10.39 18.58 10.45 18.67 10.49 C 18.76 10.53 18.86 10.55 18.96 10.55 L 18.99 10.54 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 12,
        top: 12.5,
        width: 43,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "rgb(255,255,255)",
      }}>{props.text2 ?? "Done"}</span>
      <div style={{
          position: "absolute",
          left: 360,
          top: 6,
          width: 22,
          height: 36,
        }}>{props.icon1 ?? <AccessoryBarIPhoneNextDark enabled={true} />}</div>
      <div style={{
          position: "absolute",
          left: 326,
          top: 6,
          width: 22,
          height: 36,
        }}>{props.icon2 ?? <AccessoryBarIPhonePreviousDark enabled={true} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 48,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 75,
        top: 6,
        width: 225,
        height: 36,
        borderRadius: 10,
        backgroundColor: "rgba(118,118,128,0.24)",
      }} />
      <span style={{
        position: "absolute",
        left: 273,
        top: 13,
        width: 20,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(235,235,245,0.6)",
      }}>{props.text1 ?? "􀁡"}</span>
      <div style={{
        position: "absolute",
        left: 113,
        top: 12,
        width: 2,
        height: 23,
        borderRadius: 2,
        backgroundColor: "rgb(10,132,255)",
      }} />
      <svg width={22.980} height={16.370} viewBox="0 0 22.980 16.370" fill="none" style={{
        position: "absolute",
        left: 83,
        top: 16,
        width: 22.98,
        height: 16.37,
      }}>
        <path d={"M 1.42 6.62 C 1.42 5.9 1.55 5.23 1.82 4.6 C 2.09 3.97 2.46 3.42 2.94 2.94 C 3.42 2.46 3.97 2.09 4.6 1.82 C 5.23 1.55 5.9 1.42 6.62 1.42 C 7.34 1.42 8.01 1.55 8.64 1.82 C 9.27 2.09 9.82 2.46 10.3 2.94 C 10.78 3.42 11.15 3.97 11.42 4.6 C 11.69 5.23 11.83 5.9 11.83 6.62 C 11.83 7.34 11.69 8.01 11.42 8.64 C 11.15 9.27 10.78 9.82 10.3 10.3 C 9.82 10.78 9.27 11.15 8.64 11.42 C 8.01 11.69 7.34 11.83 6.62 11.83 C 5.9 11.83 5.23 11.69 4.6 11.42 C 3.97 11.15 3.42 10.78 2.94 10.3 C 2.46 9.82 2.09 9.27 1.82 8.64 C 1.55 8.01 1.42 7.34 1.42 6.62 Z M 0 6.62 C 0 7.53 0.17 8.39 0.51 9.19 C 0.85 9.99 1.33 10.69 1.94 11.3 C 2.55 11.91 3.25 12.38 4.05 12.73 C 4.85 13.07 5.71 13.24 6.62 13.24 C 7.34 13.24 8.03 13.13 8.68 12.91 C 9.33 12.69 9.93 12.38 10.47 12 L 14.55 16.09 C 14.65 16.18 14.76 16.25 14.88 16.3 C 15 16.35 15.12 16.37 15.26 16.37 C 15.45 16.37 15.61 16.33 15.76 16.24 C 15.9 16.15 16.02 16.04 16.1 15.89 C 16.18 15.74 16.22 15.57 16.22 15.39 C 16.22 15.26 16.2 15.13 16.15 15.02 C 16.1 14.9 16.04 14.8 15.95 14.71 L 11.89 10.63 C 12.32 10.08 12.65 9.46 12.89 8.78 C 13.13 8.1 13.25 7.38 13.25 6.62 C 13.25 5.71 13.08 4.85 12.74 4.05 C 12.4 3.25 11.92 2.55 11.31 1.94 C 10.7 1.33 10 0.86 9.2 0.51 C 8.4 0.17 7.54 0 6.63 0 C 5.72 0 4.86 0.17 4.06 0.51 C 3.26 0.85 2.56 1.33 1.95 1.94 C 1.34 2.55 0.87 3.25 0.52 4.05 C 0.18 4.85 0.01 5.71 0.01 6.62 L 0 6.62 Z M 18.99 10.54 C 19.1 10.54 19.2 10.52 19.29 10.48 C 19.39 10.44 19.47 10.38 19.55 10.29 L 22.76 7.08 C 22.91 6.93 22.98 6.75 22.98 6.54 C 22.98 6.4 22.95 6.27 22.88 6.15 C 22.81 6.03 22.72 5.94 22.61 5.88 C 22.5 5.81 22.37 5.78 22.22 5.78 C 22 5.78 21.82 5.85 21.68 6 L 18.53 9.14 L 19.42 9.14 L 16.27 6 C 16.12 5.85 15.94 5.78 15.73 5.78 C 15.59 5.78 15.46 5.81 15.34 5.88 C 15.22 5.95 15.13 6.04 15.07 6.15 C 15 6.26 14.97 6.39 14.97 6.54 C 14.97 6.76 15.05 6.94 15.2 7.09 L 18.41 10.31 C 18.49 10.39 18.58 10.45 18.67 10.49 C 18.76 10.53 18.86 10.55 18.96 10.55 L 18.99 10.54 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 12,
        top: 12.5,
        width: 43,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "rgb(255,255,255)",
      }}>{props.text2 ?? "Done"}</span>
      <div style={{
          position: "absolute",
          left: 360,
          top: 6,
          width: 22,
          height: 36,
        }}>{props.icon1 ?? <AccessoryBarIPhoneNextDark enabled={true} />}</div>
      <div style={{
          position: "absolute",
          left: 326,
          top: 6,
          width: 22,
          height: 36,
        }}>{props.icon2 ?? <AccessoryBarIPhonePreviousDark enabled={true} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 48,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 75,
        top: 6,
        width: 225,
        height: 36,
        borderRadius: 10,
        backgroundColor: "rgba(118,118,128,0.24)",
      }} />
      <svg width={22.980} height={16.370} viewBox="0 0 22.980 16.370" fill="none" style={{
        position: "absolute",
        left: 83,
        top: 16,
        width: 22.98,
        height: 16.37,
      }}>
        <path d={"M 1.42 6.62 C 1.42 5.9 1.55 5.23 1.82 4.6 C 2.09 3.97 2.46 3.42 2.94 2.94 C 3.42 2.46 3.97 2.09 4.6 1.82 C 5.23 1.55 5.9 1.42 6.62 1.42 C 7.34 1.42 8.01 1.55 8.64 1.82 C 9.27 2.09 9.82 2.46 10.3 2.94 C 10.78 3.42 11.15 3.97 11.42 4.6 C 11.69 5.23 11.83 5.9 11.83 6.62 C 11.83 7.34 11.69 8.01 11.42 8.64 C 11.15 9.27 10.78 9.82 10.3 10.3 C 9.82 10.78 9.27 11.15 8.64 11.42 C 8.01 11.69 7.34 11.83 6.62 11.83 C 5.9 11.83 5.23 11.69 4.6 11.42 C 3.97 11.15 3.42 10.78 2.94 10.3 C 2.46 9.82 2.09 9.27 1.82 8.64 C 1.55 8.01 1.42 7.34 1.42 6.62 Z M 0 6.62 C 0 7.53 0.17 8.39 0.51 9.19 C 0.85 9.99 1.33 10.69 1.94 11.3 C 2.55 11.91 3.25 12.38 4.05 12.73 C 4.85 13.07 5.71 13.24 6.62 13.24 C 7.34 13.24 8.03 13.13 8.68 12.91 C 9.33 12.69 9.93 12.38 10.47 12 L 14.55 16.09 C 14.65 16.18 14.76 16.25 14.88 16.3 C 15 16.35 15.12 16.37 15.26 16.37 C 15.45 16.37 15.61 16.33 15.76 16.24 C 15.9 16.15 16.02 16.04 16.1 15.89 C 16.18 15.74 16.22 15.57 16.22 15.39 C 16.22 15.26 16.2 15.13 16.15 15.02 C 16.1 14.9 16.04 14.8 15.95 14.71 L 11.89 10.63 C 12.32 10.08 12.65 9.46 12.89 8.78 C 13.13 8.1 13.25 7.38 13.25 6.62 C 13.25 5.71 13.08 4.85 12.74 4.05 C 12.4 3.25 11.92 2.55 11.31 1.94 C 10.7 1.33 10 0.86 9.2 0.51 C 8.4 0.17 7.54 0 6.63 0 C 5.72 0 4.86 0.17 4.06 0.51 C 3.26 0.85 2.56 1.33 1.95 1.94 C 1.34 2.55 0.87 3.25 0.52 4.05 C 0.18 4.85 0.01 5.71 0.01 6.62 L 0 6.62 Z M 18.99 10.54 C 19.1 10.54 19.2 10.52 19.29 10.48 C 19.39 10.44 19.47 10.38 19.55 10.29 L 22.76 7.08 C 22.91 6.93 22.98 6.75 22.98 6.54 C 22.98 6.4 22.95 6.27 22.88 6.15 C 22.81 6.03 22.72 5.94 22.61 5.88 C 22.5 5.81 22.37 5.78 22.22 5.78 C 22 5.78 21.82 5.85 21.68 6 L 18.53 9.14 L 19.42 9.14 L 16.27 6 C 16.12 5.85 15.94 5.78 15.73 5.78 C 15.59 5.78 15.46 5.81 15.34 5.88 C 15.22 5.95 15.13 6.04 15.07 6.15 C 15 6.26 14.97 6.39 14.97 6.54 C 14.97 6.76 15.05 6.94 15.2 7.09 L 18.41 10.31 C 18.49 10.39 18.58 10.45 18.67 10.49 C 18.76 10.53 18.86 10.55 18.96 10.55 L 18.99 10.54 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 12,
        top: 12.5,
        width: 43,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "Done"}</span>
      <div style={{
          position: "absolute",
          left: 360,
          top: 6,
          width: 22,
          height: 36,
        }}>{props.icon1 ?? <AccessoryBarIPhoneNextDark enabled={true} />}</div>
      <div style={{
          position: "absolute",
          left: 326,
          top: 6,
          width: 22,
          height: 36,
        }}>{props.icon2 ?? <AccessoryBarIPhonePreviousDark enabled={true} />}</div>
    </div>
  );
  const __impls = {
    // figma: State=Text Entered
    "state=text entered": __body0,
    // figma: State=Typing
    "state=typing": __body1,
    // figma: State=Focused
    "state=focused": __body2,
    // figma: State=Default
    "state=default": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default AccessoryBarIPhoneFindDark;
