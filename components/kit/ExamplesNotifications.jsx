import { IPhone17Pro } from '../kit/IPhone17Pro.jsx';
import { LiquidGlassClearLight } from '../notifications/LiquidGlassClearLight.jsx';
import { NotificationExpanded } from '../notifications/NotificationExpanded.jsx';
import { Overlay } from '../navigation/Overlay.jsx';
import { Time } from '../notifications/Time.jsx';
import { WallpapersIPhone } from '../home-screen/WallpapersIPhone.jsx';

// figma node: 770:21905 Examples/Notifications (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "expanded=" + __venc(p.expanded);

export function ExamplesNotifications(_p = {}) {
  const props = { ..._p, expanded: _p.expanded ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      borderRadius: 32,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 874,
        overflow: "hidden",
        borderRadius: 48,
      }}>
        <WallpapersIPhone
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 874,
          }}
          mode={"light"}
        />
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 874,
          }}>
          <Overlay
            style={{ transform: "scale(4.020, 8.740)", transformOrigin: "0 0" }}
            mode={"light"}
          />
        </div>
        <svg width={171.210} height={72.898} viewBox="0 0 171.210 72.898" fill="none" style={{
          position: "absolute",
          left: 107,
          top: 119.334,
          width: 171.21,
          height: 72.898,
          backdropFilter: "blur(40px)",
        }}>
          <path d={"M 41.479 68.446 C 37.198 71.414 32.058 72.898 26.058 72.898 C 19.796 72.898 14.537 71.383 10.279 68.354 C 6.022 65.325 3.169 61.286 1.72 56.237 C 1.473 55.484 1.522 54.877 1.867 54.416 C 2.211 53.954 2.77 53.723 3.545 53.723 L 11.302 53.723 C 12.079 53.723 12.691 53.875 13.14 54.178 C 13.588 54.481 13.989 54.969 14.342 55.64 C 15.409 57.865 16.927 59.605 18.896 60.86 C 20.865 62.116 23.295 62.743 26.186 62.743 C 30.053 62.743 33.187 61.592 35.59 59.289 C 37.992 56.986 39.77 53.867 40.922 49.933 C 42.042 46.108 42.638 41.823 42.711 37.076 C 42.084 38.24 41.328 39.334 40.446 40.359 C 38.514 42.601 36.104 44.355 33.215 45.62 C 30.326 46.886 27.061 47.519 23.42 47.519 C 18.857 47.519 14.812 46.525 11.285 44.538 C 7.758 42.551 4.996 39.826 2.998 36.362 C 0.999 32.899 0 28.97 0 24.574 C 0 19.805 1.142 15.57 3.426 11.867 C 5.709 8.164 8.843 5.26 12.826 3.156 C 16.809 1.052 21.339 0 26.415 0 C 31.715 0 36.324 1.18 40.242 3.541 C 44.16 5.902 47.254 9.039 49.523 12.951 C 51.365 16.099 52.705 19.549 53.543 23.299 C 54.38 27.049 54.799 31.157 54.799 35.625 C 54.799 43.411 53.649 50.085 51.35 55.649 C 49.051 61.212 45.761 65.478 41.479 68.446 Z M 19.213 35.867 C 21.333 37.043 23.749 37.631 26.462 37.631 C 29.096 37.631 31.47 37.043 33.585 35.867 C 35.699 34.691 37.379 33.09 38.624 31.062 C 39.87 29.035 40.492 26.744 40.492 24.188 C 40.492 21.522 39.87 19.119 38.624 16.981 C 37.379 14.843 35.705 13.158 33.601 11.927 C 31.498 10.696 29.14 10.08 26.529 10.08 C 23.905 10.08 21.527 10.69 19.396 11.91 C 17.266 13.13 15.567 14.787 14.299 16.881 C 13.032 18.975 12.398 21.333 12.398 23.955 C 12.398 26.599 13.004 28.952 14.216 31.012 C 15.428 33.073 17.094 34.691 19.213 35.867 Z"} fill="currentColor" fillRule="evenodd" />
          <path d={"M 73.913 24.055 C 72.546 25.422 70.886 26.105 68.933 26.105 C 66.947 26.105 65.271 25.422 63.903 24.055 C 62.536 22.688 61.853 21.011 61.853 19.025 C 61.853 17.072 62.536 15.412 63.903 14.045 C 65.271 12.678 66.947 11.994 68.933 11.994 C 70.886 11.994 72.546 12.678 73.913 14.045 C 75.28 15.412 75.964 17.072 75.964 19.025 C 75.964 21.011 75.28 22.688 73.913 24.055 Z M 73.913 59.309 C 72.546 60.676 70.886 61.359 68.933 61.359 C 66.947 61.359 65.271 60.676 63.903 59.309 C 62.536 57.941 61.853 56.281 61.853 54.328 C 61.853 52.375 62.536 50.715 63.903 49.348 C 65.271 47.98 66.947 47.297 68.933 47.297 C 70.886 47.297 72.546 47.98 73.913 49.348 C 75.28 50.715 75.964 52.375 75.964 54.328 C 75.964 56.281 75.28 57.941 73.913 59.309 Z"} fill="currentColor" fillRule="evenodd" />
          <path d={"M 127.151 71.662 L 120.041 71.662 C 118.41 71.662 117.594 70.846 117.594 69.215 L 117.594 58.116 L 84.875 58.116 C 83.242 58.116 82.426 57.3 82.426 55.669 L 82.426 49.268 C 82.426 48.549 82.494 47.934 82.628 47.423 C 82.763 46.912 83.035 46.313 83.443 45.627 C 85.574 41.934 87.898 37.995 90.417 33.81 C 92.935 29.626 95.81 25.031 99.041 20.025 C 102.272 15.019 106.016 9.427 110.273 3.249 C 111.199 1.885 112.36 1.203 113.755 1.203 L 127.151 1.203 C 128.783 1.203 129.599 2.019 129.599 3.651 L 129.599 47.886 L 136.616 47.886 C 138.247 47.886 139.063 48.702 139.063 50.333 L 139.063 55.669 C 139.063 57.3 138.269 58.116 136.682 58.116 L 129.599 58.116 L 129.599 69.215 C 129.599 70.846 128.783 71.662 127.151 71.662 Z M 100.505 36.531 C 98.149 40.353 95.934 44.138 93.862 47.886 L 117.78 47.886 L 117.78 10.178 C 114.271 15.299 111.104 20.016 108.279 24.329 C 105.453 28.641 102.862 32.709 100.505 36.531 Z"} fill="currentColor" fillRule="evenodd" />
          <path d={"M 161.295 71.662 L 168.762 71.662 C 170.394 71.662 171.21 70.846 171.21 69.214 L 171.21 3.65 C 171.21 2.019 170.394 1.203 168.762 1.203 L 161.043 1.203 C 160.106 1.203 159.35 1.302 158.774 1.501 C 158.199 1.7 157.572 2.031 156.895 2.494 C 154.557 4.127 152.084 5.859 149.474 7.69 C 146.865 9.522 144.38 11.265 142.02 12.92 C 141.352 13.373 140.911 13.844 140.696 14.333 C 140.48 14.823 140.373 15.498 140.373 16.359 L 140.373 22.789 C 140.373 23.541 140.682 24.039 141.301 24.282 C 141.921 24.524 142.531 24.419 143.134 23.967 C 145.832 22.104 148.515 20.235 151.182 18.361 C 153.848 16.487 156.403 14.707 158.848 13.022 L 158.848 69.214 C 158.848 70.846 159.664 71.662 161.295 71.662 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "absolute",
          left: 93,
          top: 76,
          width: 215,
          height: 26,
          backdropFilter: "blur(40px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 22,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgba(153,153,153,0.8)",
        }}>{props.text1 ?? "Monday, June 6"}</span>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 62,
          backgroundColor: "rgb(0,0,0)",
          backdropFilter: "blur(0px)",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            display: "flex",
            flexDirection: "row",
            gap: 154,
            padding: "21px 24px 19px 24px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
          }}>
            <div style={{
              position: "relative",
              height: 22,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "1.500px 0px 1.500px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 590,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "rgb(255,255,255)",
                flexShrink: 0,
              }}>9:41</span>
            </div>
            <div style={{
              position: "relative",
              height: 22,
              display: "flex",
              flexDirection: "row",
              gap: 7,
              padding: "1px 1px 1px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <svg width={19.200} height={12.226} viewBox="0 0 19.200 12.226" fill="none" style={{
                position: "relative",
                width: 19.2,
                height: 12.226,
                flexShrink: 0,
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 19.2 1.146 C 19.2 0.513 18.722 0 18.133 0 L 17.067 0 C 16.478 0 16 0.513 16 1.146 L 16 11.08 C 16 11.713 16.478 12.226 17.067 12.226 L 18.133 12.226 C 18.722 12.226 19.2 11.713 19.2 11.08 L 19.2 1.146 Z M 11.766 2.445 L 12.833 2.445 C 13.422 2.445 13.899 2.971 13.899 3.619 L 13.899 11.053 C 13.899 11.701 13.422 12.226 12.833 12.226 L 11.766 12.226 C 11.177 12.226 10.699 11.701 10.699 11.053 L 10.699 3.619 C 10.699 2.971 11.177 2.445 11.766 2.445 Z M 7.434 5.094 L 6.367 5.094 C 5.778 5.094 5.301 5.627 5.301 6.283 L 5.301 11.038 C 5.301 11.694 5.778 12.226 6.367 12.226 L 7.434 12.226 C 8.023 12.226 8.501 11.694 8.501 11.038 L 8.501 6.283 C 8.501 5.627 8.023 5.094 7.434 5.094 Z M 2.133 7.54 L 1.067 7.54 C 0.478 7.54 0 8.064 0 8.711 L 0 11.055 C 0 11.702 0.478 12.226 1.067 12.226 L 2.133 12.226 C 2.722 12.226 3.2 11.702 3.2 11.055 L 3.2 8.711 C 3.2 8.064 2.722 7.54 2.133 7.54 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <svg width={17.142} height={12.328} viewBox="0 0 17.142 12.328" fill="none" style={{
                position: "relative",
                width: 17.142,
                height: 12.328,
                flexShrink: 0,
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 8.571 2.466 C 11.058 2.466 13.45 3.388 15.253 5.042 C 15.389 5.17 15.606 5.168 15.739 5.038 L 17.037 3.775 C 17.104 3.709 17.142 3.62 17.142 3.527 C 17.141 3.435 17.102 3.346 17.034 3.281 C 12.303 -1.094 4.839 -1.094 0.108 3.281 C 0.04 3.346 0.001 3.435 0 3.527 C -0.001 3.62 0.037 3.709 0.105 3.775 L 1.403 5.038 C 1.536 5.168 1.753 5.17 1.889 5.042 C 3.692 3.388 6.084 2.466 8.571 2.466 Z M 8.568 6.687 C 9.925 6.686 11.234 7.198 12.24 8.122 C 12.376 8.253 12.591 8.251 12.723 8.116 L 14.011 6.797 C 14.078 6.727 14.116 6.634 14.115 6.536 C 14.114 6.438 14.075 6.345 14.005 6.278 C 10.942 3.387 6.197 3.387 3.133 6.278 C 3.064 6.345 3.024 6.438 3.023 6.536 C 3.023 6.634 3.06 6.728 3.128 6.797 L 4.415 8.116 C 4.548 8.251 4.762 8.253 4.898 8.122 C 5.904 7.199 7.212 6.687 8.568 6.687 Z M 11.092 9.48 C 11.094 9.585 11.057 9.687 10.99 9.761 L 8.813 12.216 C 8.749 12.288 8.662 12.328 8.572 12.328 C 8.481 12.328 8.394 12.288 8.33 12.216 L 6.153 9.761 C 6.086 9.687 6.049 9.585 6.051 9.48 C 6.053 9.375 6.094 9.275 6.164 9.204 C 7.554 7.89 9.59 7.89 10.98 9.204 C 11.05 9.275 11.09 9.375 11.092 9.48 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <div style={{
                position: "relative",
                width: 27.328,
                height: 13,
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 25,
                  height: 13,
                  opacity: 0.35,
                  borderRadius: 4.300000190734863,
                  boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
                }} />
                <svg width={1.328} height={4.075} viewBox="0 0 1.328 4.075" fill="none" style={{
                  position: "absolute",
                  left: 26,
                  top: 4.5,
                  width: 1.328,
                  height: 4.075,
                  opacity: 0.4,
                  color: "rgb(255,255,255)",
                }}>
                  <path d={"M 0 0 L 0 4.075 C 0.805 3.73 1.328 2.927 1.328 2.038 C 1.328 1.148 0.805 0.345 0 0"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <div style={{
                  position: "absolute",
                  left: 2,
                  top: 2,
                  width: 21,
                  height: 9,
                  borderRadius: 2.5,
                  backgroundColor: "rgb(255,255,255)",
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NotificationExpanded style={{
          position: "absolute",
          left: 4.5,
          top: 377,
          width: 393,
          height: 443,
        }} />
      <IPhone17Pro
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }}
        color={"silver"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      borderRadius: 32,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 874,
        overflow: "hidden",
        borderRadius: 48,
      }}>
        <WallpapersIPhone
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 874,
          }}
          mode={"light"}
        />
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 874,
          }}>
          <Overlay
            style={{ transform: "scale(4.020, 8.740)", transformOrigin: "0 0" }}
            mode={"light"}
          />
        </div>
        <svg width={171.210} height={72.898} viewBox="0 0 171.210 72.898" fill="none" style={{
          position: "absolute",
          left: 107,
          top: 119.334,
          width: 171.21,
          height: 72.898,
          backdropFilter: "blur(40px)",
        }}>
          <path d={"M 41.479 68.446 C 37.198 71.414 32.058 72.898 26.058 72.898 C 19.796 72.898 14.537 71.383 10.279 68.354 C 6.022 65.325 3.169 61.286 1.72 56.237 C 1.473 55.484 1.522 54.877 1.867 54.416 C 2.211 53.954 2.77 53.723 3.545 53.723 L 11.302 53.723 C 12.079 53.723 12.691 53.875 13.14 54.178 C 13.588 54.481 13.989 54.969 14.342 55.64 C 15.409 57.865 16.927 59.605 18.896 60.86 C 20.865 62.116 23.295 62.743 26.186 62.743 C 30.053 62.743 33.187 61.592 35.59 59.289 C 37.992 56.986 39.77 53.867 40.922 49.933 C 42.042 46.108 42.638 41.823 42.711 37.076 C 42.084 38.24 41.328 39.334 40.446 40.359 C 38.514 42.601 36.104 44.355 33.215 45.62 C 30.326 46.886 27.061 47.519 23.42 47.519 C 18.857 47.519 14.812 46.525 11.285 44.538 C 7.758 42.551 4.996 39.826 2.998 36.362 C 0.999 32.899 0 28.97 0 24.574 C 0 19.805 1.142 15.57 3.426 11.867 C 5.709 8.164 8.843 5.26 12.826 3.156 C 16.809 1.052 21.339 0 26.415 0 C 31.715 0 36.324 1.18 40.242 3.541 C 44.16 5.902 47.254 9.039 49.523 12.951 C 51.365 16.099 52.705 19.549 53.543 23.299 C 54.38 27.049 54.799 31.157 54.799 35.625 C 54.799 43.411 53.649 50.085 51.35 55.649 C 49.051 61.212 45.761 65.478 41.479 68.446 Z M 19.213 35.867 C 21.333 37.043 23.749 37.631 26.462 37.631 C 29.096 37.631 31.47 37.043 33.585 35.867 C 35.699 34.691 37.379 33.09 38.624 31.062 C 39.87 29.035 40.492 26.744 40.492 24.188 C 40.492 21.522 39.87 19.119 38.624 16.981 C 37.379 14.843 35.705 13.158 33.601 11.927 C 31.498 10.696 29.14 10.08 26.529 10.08 C 23.905 10.08 21.527 10.69 19.396 11.91 C 17.266 13.13 15.567 14.787 14.299 16.881 C 13.032 18.975 12.398 21.333 12.398 23.955 C 12.398 26.599 13.004 28.952 14.216 31.012 C 15.428 33.073 17.094 34.691 19.213 35.867 Z"} fill="currentColor" fillRule="evenodd" />
          <path d={"M 73.913 24.055 C 72.546 25.422 70.886 26.105 68.933 26.105 C 66.947 26.105 65.271 25.422 63.903 24.055 C 62.536 22.688 61.853 21.011 61.853 19.025 C 61.853 17.072 62.536 15.412 63.903 14.045 C 65.271 12.678 66.947 11.994 68.933 11.994 C 70.886 11.994 72.546 12.678 73.913 14.045 C 75.28 15.412 75.964 17.072 75.964 19.025 C 75.964 21.011 75.28 22.688 73.913 24.055 Z M 73.913 59.309 C 72.546 60.676 70.886 61.359 68.933 61.359 C 66.947 61.359 65.271 60.676 63.903 59.309 C 62.536 57.941 61.853 56.281 61.853 54.328 C 61.853 52.375 62.536 50.715 63.903 49.348 C 65.271 47.98 66.947 47.297 68.933 47.297 C 70.886 47.297 72.546 47.98 73.913 49.348 C 75.28 50.715 75.964 52.375 75.964 54.328 C 75.964 56.281 75.28 57.941 73.913 59.309 Z"} fill="currentColor" fillRule="evenodd" />
          <path d={"M 127.151 71.662 L 120.041 71.662 C 118.41 71.662 117.594 70.846 117.594 69.215 L 117.594 58.116 L 84.875 58.116 C 83.242 58.116 82.426 57.3 82.426 55.669 L 82.426 49.268 C 82.426 48.549 82.494 47.934 82.628 47.423 C 82.763 46.912 83.035 46.313 83.443 45.627 C 85.574 41.934 87.898 37.995 90.417 33.81 C 92.935 29.626 95.81 25.031 99.041 20.025 C 102.272 15.019 106.016 9.427 110.273 3.249 C 111.199 1.885 112.36 1.203 113.755 1.203 L 127.151 1.203 C 128.783 1.203 129.599 2.019 129.599 3.651 L 129.599 47.886 L 136.616 47.886 C 138.247 47.886 139.063 48.702 139.063 50.333 L 139.063 55.669 C 139.063 57.3 138.269 58.116 136.682 58.116 L 129.599 58.116 L 129.599 69.215 C 129.599 70.846 128.783 71.662 127.151 71.662 Z M 100.505 36.531 C 98.149 40.353 95.934 44.138 93.862 47.886 L 117.78 47.886 L 117.78 10.178 C 114.271 15.299 111.104 20.016 108.279 24.329 C 105.453 28.641 102.862 32.709 100.505 36.531 Z"} fill="currentColor" fillRule="evenodd" />
          <path d={"M 161.295 71.662 L 168.762 71.662 C 170.394 71.662 171.21 70.846 171.21 69.214 L 171.21 3.65 C 171.21 2.019 170.394 1.203 168.762 1.203 L 161.043 1.203 C 160.106 1.203 159.35 1.302 158.774 1.501 C 158.199 1.7 157.572 2.031 156.895 2.494 C 154.557 4.127 152.084 5.859 149.474 7.69 C 146.865 9.522 144.38 11.265 142.02 12.92 C 141.352 13.373 140.911 13.844 140.696 14.333 C 140.48 14.823 140.373 15.498 140.373 16.359 L 140.373 22.789 C 140.373 23.541 140.682 24.039 141.301 24.282 C 141.921 24.524 142.531 24.419 143.134 23.967 C 145.832 22.104 148.515 20.235 151.182 18.361 C 153.848 16.487 156.403 14.707 158.848 13.022 L 158.848 69.214 C 158.848 70.846 159.664 71.662 161.295 71.662 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "absolute",
          left: 93,
          top: 76,
          width: 215,
          height: 26,
          backdropFilter: "blur(40px)",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 22,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgba(153,153,153,0.8)",
        }}>{props.text1 ?? "Monday, June 6"}</span>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 62,
          backgroundColor: "rgb(0,0,0)",
          backdropFilter: "blur(0px)",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            display: "flex",
            flexDirection: "row",
            gap: 154,
            padding: "21px 24px 19px 24px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
          }}>
            <div style={{
              position: "relative",
              height: 22,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "1.500px 0px 1.500px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 590,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "rgb(255,255,255)",
                flexShrink: 0,
              }}>9:41</span>
            </div>
            <div style={{
              position: "relative",
              height: 22,
              display: "flex",
              flexDirection: "row",
              gap: 7,
              padding: "1px 1px 1px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <svg width={19.200} height={12.226} viewBox="0 0 19.200 12.226" fill="none" style={{
                position: "relative",
                width: 19.2,
                height: 12.226,
                flexShrink: 0,
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 19.2 1.146 C 19.2 0.513 18.722 0 18.133 0 L 17.067 0 C 16.478 0 16 0.513 16 1.146 L 16 11.08 C 16 11.713 16.478 12.226 17.067 12.226 L 18.133 12.226 C 18.722 12.226 19.2 11.713 19.2 11.08 L 19.2 1.146 Z M 11.766 2.445 L 12.833 2.445 C 13.422 2.445 13.899 2.971 13.899 3.619 L 13.899 11.053 C 13.899 11.701 13.422 12.226 12.833 12.226 L 11.766 12.226 C 11.177 12.226 10.699 11.701 10.699 11.053 L 10.699 3.619 C 10.699 2.971 11.177 2.445 11.766 2.445 Z M 7.434 5.094 L 6.367 5.094 C 5.778 5.094 5.301 5.627 5.301 6.283 L 5.301 11.038 C 5.301 11.694 5.778 12.226 6.367 12.226 L 7.434 12.226 C 8.023 12.226 8.501 11.694 8.501 11.038 L 8.501 6.283 C 8.501 5.627 8.023 5.094 7.434 5.094 Z M 2.133 7.54 L 1.067 7.54 C 0.478 7.54 0 8.064 0 8.711 L 0 11.055 C 0 11.702 0.478 12.226 1.067 12.226 L 2.133 12.226 C 2.722 12.226 3.2 11.702 3.2 11.055 L 3.2 8.711 C 3.2 8.064 2.722 7.54 2.133 7.54 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <svg width={17.142} height={12.328} viewBox="0 0 17.142 12.328" fill="none" style={{
                position: "relative",
                width: 17.142,
                height: 12.328,
                flexShrink: 0,
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 8.571 2.466 C 11.058 2.466 13.45 3.388 15.253 5.042 C 15.389 5.17 15.606 5.168 15.739 5.038 L 17.037 3.775 C 17.104 3.709 17.142 3.62 17.142 3.527 C 17.141 3.435 17.102 3.346 17.034 3.281 C 12.303 -1.094 4.839 -1.094 0.108 3.281 C 0.04 3.346 0.001 3.435 0 3.527 C -0.001 3.62 0.037 3.709 0.105 3.775 L 1.403 5.038 C 1.536 5.168 1.753 5.17 1.889 5.042 C 3.692 3.388 6.084 2.466 8.571 2.466 Z M 8.568 6.687 C 9.925 6.686 11.234 7.198 12.24 8.122 C 12.376 8.253 12.591 8.251 12.723 8.116 L 14.011 6.797 C 14.078 6.727 14.116 6.634 14.115 6.536 C 14.114 6.438 14.075 6.345 14.005 6.278 C 10.942 3.387 6.197 3.387 3.133 6.278 C 3.064 6.345 3.024 6.438 3.023 6.536 C 3.023 6.634 3.06 6.728 3.128 6.797 L 4.415 8.116 C 4.548 8.251 4.762 8.253 4.898 8.122 C 5.904 7.199 7.212 6.687 8.568 6.687 Z M 11.092 9.48 C 11.094 9.585 11.057 9.687 10.99 9.761 L 8.813 12.216 C 8.749 12.288 8.662 12.328 8.572 12.328 C 8.481 12.328 8.394 12.288 8.33 12.216 L 6.153 9.761 C 6.086 9.687 6.049 9.585 6.051 9.48 C 6.053 9.375 6.094 9.275 6.164 9.204 C 7.554 7.89 9.59 7.89 10.98 9.204 C 11.05 9.275 11.09 9.375 11.092 9.48 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <div style={{
                position: "relative",
                width: 27.328,
                height: 13,
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 25,
                  height: 13,
                  opacity: 0.35,
                  borderRadius: 4.300000190734863,
                  boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
                }} />
                <svg width={1.328} height={4.075} viewBox="0 0 1.328 4.075" fill="none" style={{
                  position: "absolute",
                  left: 26,
                  top: 4.5,
                  width: 1.328,
                  height: 4.075,
                  opacity: 0.4,
                  color: "rgb(255,255,255)",
                }}>
                  <path d={"M 0 0 L 0 4.075 C 0.805 3.73 1.328 2.927 1.328 2.038 C 1.328 1.148 0.805 0.345 0 0"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <div style={{
                  position: "absolute",
                  left: 2,
                  top: 2,
                  width: 21,
                  height: 9,
                  borderRadius: 2.5,
                  backgroundColor: "rgb(255,255,255)",
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 375.334,
        width: 402,
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: "20px 20px 20px 20px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: -10,
          width: 402,
          height: 404,
          backgroundColor: "rgba(0,0,0,0.05)",
        }} />
        <div style={{
          position: "relative",
          width: 362,
          minHeight: 64,
          borderRadius: 24,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "12px 14px 12px 14px",
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
            width: 362,
            height: 64,
          }}>
            <svg width={362} height={64} viewBox="0 0 362 64" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 362,
              height: 64,
              borderRadius: 296,
              filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.2))",
              color: "rgba(255,255,255,0.07)",
            }}>
              <path d={"M 0 32 C 0 24.56 0 20.84 0.818 17.788 C 3.037 9.506 9.506 3.037 17.788 0.818 C 20.84 0 24.56 0 32 0 L 330 0 C 337.44 0 341.16 0 344.212 0.818 C 352.494 3.037 358.963 9.506 361.182 17.788 C 362 20.84 362 24.56 362 32 L 362 32 C 362 39.44 362 43.16 361.182 46.212 C 358.963 54.494 352.494 60.963 344.212 63.182 C 341.16 64 337.44 64 330 64 L 32 64 C 24.56 64 20.84 64 17.788 63.182 C 9.506 60.963 3.037 54.494 0.818 46.212 C 0 43.16 0 39.44 0 32 L 0 32 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            width: 38.333,
            height: 38.333,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div className="fig-asset-9ee404c0ae57001e" style={{
              position: "absolute",
              left: -0.167,
              top: 0,
              width: 38.333,
              height: 38.333,
            }} />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 590,
                fontSize: 15,
                whiteSpace: "nowrap",
                lineHeight: "17px",
                letterSpacing: "-0.230px",
                color: "var(--grays-white)",
                flexShrink: 0,
              }}>Title</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 15,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                letterSpacing: "-0.230px",
                color: "var(--grays-white)",
                flexShrink: 0,
              }}>Description</span>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5.5,
              alignItems: "flex-end",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Time
                style={{
                  position: "relative",
                  width: 58,
                  height: 17,
                  flexShrink: 0,
                }}
                mode={"dark"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          minHeight: 64,
          borderRadius: 24,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "12px 14px 12px 14px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 362,
            height: 64,
          }}>
            <svg width={362} height={64} viewBox="0 0 362 64" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 362,
              height: 64,
              borderRadius: 296,
              filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.2))",
              color: "rgba(255,255,255,0.07)",
            }}>
              <path d={"M 0 32 C 0 24.56 0 20.84 0.818 17.788 C 3.037 9.506 9.506 3.037 17.788 0.818 C 20.84 0 24.56 0 32 0 L 330 0 C 337.44 0 341.16 0 344.212 0.818 C 352.494 3.037 358.963 9.506 361.182 17.788 C 362 20.84 362 24.56 362 32 L 362 32 C 362 39.44 362 43.16 361.182 46.212 C 358.963 54.494 352.494 60.963 344.212 63.182 C 341.16 64 337.44 64 330 64 L 32 64 C 24.56 64 20.84 64 17.788 63.182 C 9.506 60.963 3.037 54.494 0.818 46.212 C 0 43.16 0 39.44 0 32 L 0 32 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            width: 38.333,
            height: 38.333,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div className="fig-asset-9ee404c0ae57001e" style={{
              position: "absolute",
              left: -0.167,
              top: 0,
              width: 38.333,
              height: 38.333,
            }} />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 590,
                fontSize: 15,
                whiteSpace: "nowrap",
                lineHeight: "17px",
                letterSpacing: "-0.230px",
                color: "var(--grays-white)",
                flexShrink: 0,
              }}>Title</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 15,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                letterSpacing: "-0.230px",
                color: "var(--grays-white)",
                flexShrink: 0,
              }}>Description</span>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5.5,
              alignItems: "flex-end",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Time
                style={{
                  position: "relative",
                  width: 58,
                  height: 17,
                  flexShrink: 0,
                }}
                mode={"dark"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 362,
          borderRadius: 24,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "12px 14px 21px 14px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 63,
            width: 362,
            height: 8,
            opacity: 0.9,
            overflow: "hidden",
            borderRadius: 24,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "0px 20px 0px 20px",
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
          }}>
            <LiquidGlassClearLight style={{
                position: "relative",
                height: 64,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }} />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 362,
            height: 63,
          }}>
            <svg width={362} height={63} viewBox="0 0 362 63" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 362,
              height: 63,
              borderRadius: 296,
              filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.2))",
              color: "rgba(255,255,255,0.07)",
            }}>
              <path d={"M 0 31.5 C 0 24.527 0 21.04 0.719 18.168 C 2.871 9.578 9.578 2.871 18.168 0.719 C 21.04 0 24.527 0 31.5 0 L 330.5 0 C 337.473 0 340.96 0 343.832 0.719 C 352.422 2.871 359.129 9.578 361.281 18.168 C 362 21.04 362 24.527 362 31.5 L 362 31.5 C 362 38.473 362 41.96 361.281 44.832 C 359.129 53.422 352.422 60.129 343.832 62.281 C 340.96 63 337.473 63 330.5 63 L 31.5 63 C 24.527 63 21.04 63 18.168 62.281 C 9.578 60.129 2.871 53.422 0.719 44.832 C 0 41.96 0 38.473 0 31.5 L 0 31.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            width: 38.333,
            height: 38.333,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div className="fig-asset-9ee404c0ae57001e" style={{
              position: "absolute",
              left: -0.167,
              top: 0,
              width: 38.333,
              height: 38.333,
            }} />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                width: 235.667,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 590,
                fontSize: 15,
                lineHeight: "17px",
                letterSpacing: "-0.230px",
                color: "var(--grays-white)",
                flexShrink: 0,
              }}>Title</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 15,
                lineHeight: "18px",
                letterSpacing: "-0.230px",
                color: "var(--grays-white)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Description</span>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5.5,
              alignItems: "flex-end",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Time
                style={{
                  position: "relative",
                  height: 17,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                mode={"dark"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 24,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "12px 14px 27px 14px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 71,
            width: 362,
            height: 8,
            opacity: 0.8,
            overflow: "hidden",
            borderRadius: 24,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "0px 40px 0px 40px",
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
          }}>
            <LiquidGlassClearLight style={{
                position: "relative",
                height: 64,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }} />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 63,
            width: 362,
            height: 8,
            opacity: 0.9,
            overflow: "hidden",
            borderRadius: 24,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "0px 20px 0px 20px",
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
          }}>
            <LiquidGlassClearLight style={{
                position: "relative",
                height: 64,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }} />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 362,
            height: 63,
          }}>
            <svg width={362} height={63} viewBox="0 0 362 63" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 362,
              height: 63,
              borderRadius: 296,
              filter: "drop-shadow(0px 8px 40px rgba(0,0,0,0.2))",
              color: "rgba(255,255,255,0.07)",
            }}>
              <path d={"M 0 31.5 C 0 24.527 0 21.04 0.719 18.168 C 2.871 9.578 9.578 2.871 18.168 0.719 C 21.04 0 24.527 0 31.5 0 L 330.5 0 C 337.473 0 340.96 0 343.832 0.719 C 352.422 2.871 359.129 9.578 361.281 18.168 C 362 21.04 362 24.527 362 31.5 L 362 31.5 C 362 38.473 362 41.96 361.281 44.832 C 359.129 53.422 352.422 60.129 343.832 62.281 C 340.96 63 337.473 63 330.5 63 L 31.5 63 C 24.527 63 21.04 63 18.168 62.281 C 9.578 60.129 2.871 53.422 0.719 44.832 C 0 41.96 0 38.473 0 31.5 L 0 31.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            width: 38.333,
            height: 38.333,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div className="fig-asset-9ee404c0ae57001e" style={{
              position: "absolute",
              left: -0.167,
              top: 0,
              width: 38.333,
              height: 38.333,
            }} />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                width: 235.667,
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 590,
                fontSize: 15,
                lineHeight: "17px",
                letterSpacing: "-0.230px",
                color: "var(--grays-white)",
                flexShrink: 0,
              }}>Title</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 15,
                lineHeight: "18px",
                letterSpacing: "-0.230px",
                color: "var(--grays-white)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Description</span>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5.5,
              alignItems: "flex-end",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Time
                style={{
                  position: "relative",
                  width: 58,
                  height: 17,
                  flexShrink: 0,
                }}
                mode={"dark"}
              />
            </div>
          </div>
        </div>
      </div>
      <IPhone17Pro
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }}
        color={"silver"}
      />
    </div>
  );
  const __impls = {
    // figma: Expanded=True
    "expanded=true": __body0,
    // figma: Expanded=False
    "expanded=false": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ExamplesNotifications;
