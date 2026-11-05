import { ControlsLockScreen } from '../home-screen/ControlsLockScreen.jsx';
import { IPhone17Pro } from '../kit/IPhone17Pro.jsx';
import { LockScreenWidgetCircularOpen } from '../home-screen/LockScreenWidgetCircularOpen.jsx';
import { LockScreenWidgetCircularStack } from '../home-screen/LockScreenWidgetCircularStack.jsx';
import { LockScreenWidgetModularTable } from '../home-screen/LockScreenWidgetModularTable.jsx';
import { WallpapersIPhone } from '../home-screen/WallpapersIPhone.jsx';

// figma node: 2570:20912 Examples/Control Center
export function ExamplesControlCenter(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      borderRadius: 22,
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
        borderRadius: 32,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
          overflow: "hidden",
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
            top: 840,
            width: 402,
            height: 34,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(-1,0,0,1,273,21)",
              transformOrigin: "0 0",
              width: 144,
              height: 5,
              borderRadius: 100,
              backgroundColor: "var(--labels-primary)",
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 46,
            top: 766,
            width: 310,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <ControlsLockScreen style={{
                position: "relative",
                width: 58,
                height: 58,
                flexShrink: 0,
              }} />
            <ControlsLockScreen
              style={{
                position: "relative",
                width: 58,
                height: 58,
                flexShrink: 0,
              }}
              symbol={"􀌟"}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 214,
            width: 402,
            display: "flex",
            flexDirection: "row",
            padding: "0px 32px 0px 32px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
          }}>
            <LockScreenWidgetModularTable
              style={{
                position: "relative",
                height: 72,
                flexGrow: 1,
                width: "auto",
              }}
              symbol={"􀇕"}
              line1={"72º"}
              line2={"Partly Cloudy"}
              line3={"H:88º L:64º"}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <LockScreenWidgetCircularOpen style={{
                  position: "relative",
                  width: 72,
                  height: 72,
                  flexShrink: 0,
                }} />
              <LockScreenWidgetCircularStack style={{
                  position: "relative",
                  width: 72,
                  height: 72,
                  flexShrink: 0,
                }} />
            </div>
          </div>
          <svg width={205.060} height={87.400} viewBox="0 0 205.060 87.400" fill="none" style={{
            position: "absolute",
            left: 98,
            top: 115,
            width: 205.06,
            height: 87.4,
            backdropFilter: "blur(30px)",
          }}>
            <path d={"M 32.28 0 C 37.52 0 42.19 0.81 46.31 2.43 C 50.43 4.05 53.92 6.39 56.8 9.46 L 56.81 9.44 C 59.69 12.51 61.88 16.24 63.37 20.63 C 64.86 25.02 65.61 30 65.61 35.56 L 65.61 51.15 C 65.61 58.69 64.27 65.16 61.59 70.58 C 58.91 76 55.06 80.15 50.05 83.05 C 45.04 85.95 39 87.4 31.93 87.4 C 26.01 87.4 20.9 86.41 16.59 84.45 C 12.28 82.49 8.9 79.86 6.43 76.55 C 4.06 73.38 2.62 69.879 2.11 66.06 L 2.05 65.56 C 1.94 64.96 1.97 64.459 2.12 64.06 C 2.27 63.66 2.52 63.35 2.88 63.14 C 3.24 62.93 3.72 62.82 4.34 62.82 L 15.95 62.82 C 16.41 62.82 16.79 62.88 17.08 63 C 17.37 63.12 17.61 63.31 17.78 63.56 C 17.92 63.77 18.05 64.04 18.16 64.38 L 18.22 64.59 C 18.49 66.21 19.17 67.74 20.28 69.19 C 21.39 70.64 22.94 71.81 24.93 72.71 C 26.92 73.61 29.39 74.06 32.33 74.06 C 35.56 74.06 38.28 73.5 40.47 72.39 C 42.66 71.28 44.43 69.77 45.77 67.86 C 47.11 65.95 48.07 63.79 48.66 61.37 C 49.25 58.95 49.54 56.44 49.54 53.82 L 49.54 47.9 L 49.34 48.17 C 47.29 50.84 44.56 52.99 41.14 54.62 C 37.55 56.33 33.349 57.18 28.52 57.18 C 22.93 57.18 17.99 56.01 13.7 53.68 C 9.41 51.35 6.05 48.12 3.63 44 C 1.21 39.88 0 35.18 0 29.9 L 0 28.82 C 0 23.15 1.33 18.15 3.98 13.83 C 6.63 9.51 10.37 6.12 15.2 3.67 C 20.03 1.22 25.72 0 32.28 0 Z M 152.97 1.45 C 153.54 1.45 153.99 1.53 154.34 1.7 C 154.69 1.87 154.94 2.12 155.11 2.47 C 155.28 2.82 155.36 3.27 155.36 3.84 L 155.36 56.89 L 164.061 56.89 C 164.61 56.89 165.06 56.98 165.41 57.15 L 165.42 57.18 C 165.77 57.35 166.03 57.61 166.2 57.96 C 166.37 58.31 166.46 58.76 166.46 59.31 L 166.46 67.87 C 166.46 68.42 166.37 68.87 166.2 69.22 C 166.03 69.57 165.77 69.83 165.42 70 C 165.07 70.17 164.62 70.26 164.07 70.26 L 155.37 70.26 L 155.37 83.65 C 155.37 84.2 155.28 84.65 155.11 85 C 154.94 85.35 154.68 85.61 154.33 85.78 C 153.98 85.95 153.53 86.04 152.98 86.04 L 142 86.04 C 141.45 86.04 141.01 85.95 140.67 85.78 C 140.33 85.61 140.07 85.35 139.9 85.01 C 139.73 84.67 139.64 84.22 139.64 83.68 L 139.64 70.26 L 99.99 70.26 C 99.43 70.26 98.99 70.18 98.65 70 C 98.31 69.82 98.05 69.57 97.88 69.23 C 97.71 68.89 97.62 68.44 97.62 67.89 L 97.62 58.22 C 97.62 57.66 97.65 57.2 97.7 56.83 C 97.75 56.46 97.86 56.11 98.01 55.77 C 98.16 55.43 98.38 55.02 98.67 54.54 C 100.45 51.7 102.24 48.85 104.03 45.99 C 105.82 43.13 107.61 40.28 109.39 37.44 C 111.18 34.6 112.96 31.76 114.74 28.91 C 116.52 26.06 118.311 23.21 120.101 20.35 C 121.89 17.49 123.68 14.64 125.46 11.79 C 127.24 8.94 129.03 6.09 130.82 3.24 C 131.11 2.76 131.39 2.4 131.67 2.15 C 131.95 1.89 132.27 1.72 132.63 1.61 C 132.99 1.5 133.45 1.45 134.01 1.45 L 152.97 1.45 Z M 202.69 1.45 C 203.24 1.45 203.69 1.54 204.04 1.71 C 204.39 1.88 204.65 2.14 204.82 2.49 L 204.8 2.49 C 204.97 2.84 205.06 3.29 205.06 3.84 L 205.06 83.63 C 205.06 84.19 204.98 84.65 204.81 84.99 C 204.65 85.33 204.39 85.58 204.05 85.75 C 203.71 85.92 203.26 86 202.69 86 L 191.37 86.03 C 190.83 86.03 190.38 85.94 190.04 85.77 C 189.7 85.6 189.44 85.34 189.27 85 C 189.1 84.66 189.01 84.21 189.01 83.67 L 189.01 16.86 L 169.52 30.19 C 169.05 30.51 168.63 30.65 168.25 30.61 C 167.87 30.57 167.56 30.41 167.32 30.11 C 167.08 29.82 166.96 29.39 166.96 28.82 L 166.96 18.9 C 166.96 18.351 167.01 17.9 167.1 17.53 C 167.2 17.16 167.36 16.84 167.6 16.56 C 167.84 16.28 168.19 15.98 168.65 15.67 L 187.32 2.57 C 187.78 2.25 188.17 2.01 188.5 1.85 C 188.83 1.69 189.18 1.59 189.54 1.53 C 189.9 1.48 190.36 1.45 190.93 1.45 L 202.69 1.45 Z M 82.17 55.95 C 83.85 55.95 85.36 56.34 86.71 57.12 C 88.05 57.9 89.13 58.96 89.93 60.31 C 90.73 61.659 91.13 63.21 91.13 64.85 C 91.13 66.49 90.73 68 89.93 69.36 C 89.13 70.72 88.06 71.8 86.71 72.58 C 85.36 73.36 83.81 73.75 82.17 73.75 C 80.53 73.75 79.02 73.36 77.66 72.58 C 76.3 71.8 75.22 70.73 74.44 69.36 C 73.66 67.99 73.271 66.53 73.271 64.85 C 73.271 63.17 73.66 61.649 74.44 60.31 C 75.22 58.97 76.29 57.9 77.66 57.12 C 79.03 56.34 80.49 55.95 82.17 55.95 Z M 135.69 19.93 C 133.76 23.01 131.83 26.09 129.92 29.16 C 128.01 32.24 126.08 35.31 124.15 38.39 C 122.22 41.47 120.29 44.55 118.36 47.64 C 116.43 50.729 114.51 53.81 112.601 56.89 L 139.91 56.89 L 139.91 13.19 C 139.885 13.231 137.183 17.551 135.69 19.93 Z M 32.18 13.2 C 29 13.2 26.2 13.82 23.75 15.05 C 21.3 16.28 19.39 18.03 18.01 20.27 C 16.63 22.51 15.94 25.17 15.94 28.24 L 15.94 29.07 C 15.94 32.15 16.63 34.85 18.01 37.17 C 19.39 39.49 21.3 41.28 23.75 42.56 C 26.2 43.84 28.97 44.48 32.18 44.48 C 35.39 44.48 38.2 43.84 40.63 42.56 C 43.06 41.28 44.96 39.48 46.34 37.17 C 47.72 34.86 48.41 32.16 48.41 29.07 L 48.41 28.24 C 48.41 25.17 47.72 22.52 46.34 20.27 C 44.96 18.02 43.05 16.28 40.63 15.05 C 38.21 13.82 35.36 13.2 32.18 13.2 Z M 82.17 13.53 C 83.85 13.53 85.36 13.92 86.71 14.7 C 88.05 15.48 89.13 16.54 89.93 17.89 C 90.73 19.24 91.13 20.79 91.13 22.43 C 91.13 24.07 90.73 25.58 89.93 26.94 C 89.13 28.3 88.06 29.38 86.71 30.16 C 85.36 30.94 83.81 31.33 82.17 31.33 C 80.53 31.33 79.02 30.94 77.66 30.16 C 76.3 29.38 75.22 28.31 74.44 26.94 C 73.66 25.57 73.271 24.11 73.271 22.43 C 73.271 20.75 73.66 19.23 74.44 17.89 C 75.22 16.55 76.29 15.48 77.66 14.7 C 79.03 13.92 80.49 13.53 82.17 13.53 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 82,
            width: 402,
            height: 26,
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              backdropFilter: "blur(40px)",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 22,
              textAlign: "center",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Apr 1 􀆪 SFO 9:41 AM</span>
          </div>
          <div style={{
            position: "absolute",
            left: 306.2,
            top: 46.8,
            width: 48,
            height: 2.333,
            opacity: 0.35,
            borderRadius: 1.166664958000183,
            backgroundColor: "rgb(255,255,255)",
            backdropFilter: "blur(29.901px)",
          }} />
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 62,
          }}>
            <div style={{
              position: "absolute",
              left: 342.2,
              top: 26.6,
              width: 27.228,
              height: 13,
              overflow: "hidden",
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
              <svg width={1.328} height={4} viewBox="0 0 1.328 4" fill="none" style={{
                position: "absolute",
                left: 25.9,
                top: 4.667,
                width: 1.328,
                height: 4,
                opacity: 0.4,
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 0 0 L 0 4 C 0.805 3.661 1.328 2.873 1.328 2 C 1.328 1.127 0.805 0.339 0 0"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <div style={{
                position: "absolute",
                left: 1.8,
                top: 2,
                width: 21,
                height: 9,
                borderRadius: 2.5,
                backgroundColor: "rgb(255,255,255)",
              }} />
            </div>
            <svg width={17.142} height={12.100} viewBox="0 0 17.142 12.100" fill="none" style={{
              position: "absolute",
              left: 317.7,
              top: 27.2,
              width: 17.142,
              height: 12.1,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 6.163 9.034 C 7.553 7.745 9.589 7.745 10.979 9.034 C 11.049 9.104 11.09 9.201 11.092 9.305 C 11.094 9.408 11.057 9.508 10.989 9.58 L 8.813 11.989 C 8.749 12.06 8.662 12.1 8.571 12.1 C 8.481 12.1 8.393 12.06 8.329 11.989 L 6.152 9.58 C 6.085 9.508 6.048 9.408 6.05 9.305 C 6.052 9.201 6.093 9.103 6.163 9.034 Z M 3.135 6.161 C 6.199 3.324 10.943 3.324 14.007 6.161 C 14.076 6.228 14.115 6.319 14.116 6.415 C 14.117 6.511 14.08 6.603 14.013 6.671 L 12.725 7.966 C 12.592 8.098 12.378 8.1 12.242 7.972 C 11.236 7.065 9.927 6.562 8.569 6.563 C 7.213 6.563 5.905 7.065 4.899 7.972 C 4.763 8.1 4.55 8.098 4.417 7.966 L 3.13 6.671 C 3.062 6.603 3.024 6.511 3.025 6.415 C 3.026 6.319 3.066 6.228 3.135 6.161 Z M 0.108 3.221 C 4.839 -1.073 12.303 -1.073 17.034 3.221 C 17.102 3.284 17.141 3.371 17.142 3.462 C 17.142 3.553 17.105 3.641 17.037 3.705 L 15.739 4.945 C 15.606 5.072 15.389 5.073 15.253 4.948 C 13.45 3.325 11.058 2.421 8.571 2.421 C 6.084 2.421 3.691 3.325 1.889 4.948 C 1.753 5.074 1.536 5.073 1.402 4.945 L 0.104 3.705 C 0.037 3.64 -0.001 3.553 0 3.462 C 0.001 3.371 0.04 3.284 0.108 3.221 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={19.200} height={12} viewBox="0 0 19.200 12" fill="none" style={{
              position: "absolute",
              left: 291,
              top: 27.1,
              width: 19.2,
              height: 12,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 2.134 7.4 C 2.723 7.401 3.2 7.915 3.2 8.55 L 3.2 10.85 C 3.2 11.485 2.723 12 2.134 12 L 1.066 12 C 0.477 12 0 11.485 0 10.85 L 0 8.55 C 0 7.915 0.477 7.401 1.066 7.4 L 2.134 7.4 Z M 7.434 5 C 8.023 5 8.5 5.523 8.5 6.167 L 8.5 10.833 C 8.5 11.477 8.023 12 7.434 12 L 6.366 12 C 5.777 12 5.3 11.477 5.3 10.833 L 5.3 6.167 C 5.3 5.523 5.777 5 6.366 5 L 7.434 5 Z M 12.833 2.4 C 13.422 2.4 13.9 2.916 13.9 3.552 L 13.9 10.848 C 13.9 11.484 13.422 12 12.833 12 L 11.767 12 C 11.178 12 10.7 11.484 10.7 10.848 L 10.7 3.552 C 10.7 2.916 11.178 2.4 11.767 2.4 L 12.833 2.4 Z M 18.134 0 C 18.723 0 19.2 0.504 19.2 1.125 L 19.2 10.875 C 19.2 11.496 18.723 12 18.134 12 L 17.066 12 C 16.477 12 16 11.496 16 10.875 L 16 1.125 C 16 0.504 16.477 0 17.066 0 L 18.134 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
          backgroundColor: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(24px)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 840,
          width: 402,
          height: 34,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,1,273,21)",
            transformOrigin: "0 0",
            width: 144,
            height: 5,
            borderRadius: 100,
            backgroundColor: "var(--labels-primary)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 372,
          top: 290,
          width: 21.33,
          height: 240.55,
          overflow: "hidden",
        }}>
          <svg width={17.440} height={14.860} viewBox="0 0 17.440 14.860" fill="none" style={{
            position: "absolute",
            left: 2,
            top: 222,
            width: 17.44,
            height: 14.86,
            color: "var(--labels-vibrant-tertiary)",
          }}>
            <path d={"M 14.19 11.22 C 14.34 11.4 14.53 11.49 14.77 11.5 C 15 11.5 15.22 11.4 15.42 11.19 C 16.08 10.49 16.58 9.67 16.92 8.74 C 17.26 7.8 17.44 6.81 17.44 5.77 C 17.44 5.07 17.36 4.4 17.2 3.75 C 17.04 3.1 16.81 2.48 16.51 1.9 C 16.21 1.32 15.85 0.81 15.42 0.35 C 15.22 0.14 15.01 0.03 14.77 0.04 C 14.54 0.04 14.34 0.14 14.19 0.31 C 14.05 0.48 13.99 0.66 14.02 0.86 C 14.05 1.06 14.15 1.25 14.31 1.43 C 14.82 1.99 15.21 2.65 15.48 3.4 C 15.75 4.15 15.89 4.94 15.89 5.78 C 15.89 6.62 15.75 7.41 15.48 8.16 C 15.21 8.91 14.82 9.56 14.31 10.13 C 14.15 10.31 14.05 10.5 14.02 10.7 C 13.99 10.9 14.04 11.08 14.19 11.25 L 14.19 11.22 Z M 11.76 8.92 C 11.91 9.1 12.1 9.19 12.35 9.19 C 12.59 9.19 12.8 9.09 12.98 8.88 C 13.32 8.48 13.58 8.01 13.76 7.47 C 13.94 6.93 14.04 6.36 14.04 5.77 C 14.04 5.18 13.95 4.61 13.76 4.07 C 13.58 3.53 13.32 3.06 12.98 2.66 C 12.8 2.45 12.59 2.34 12.35 2.34 C 12.11 2.34 11.91 2.43 11.76 2.61 C 11.62 2.78 11.57 2.95 11.6 3.15 C 11.63 3.34 11.72 3.53 11.85 3.72 C 12.05 3.99 12.2 4.3 12.32 4.66 C 12.44 5.02 12.49 5.39 12.49 5.77 C 12.49 6.15 12.43 6.52 12.32 6.88 C 12.21 7.24 12.05 7.56 11.84 7.82 C 11.71 8.01 11.62 8.2 11.59 8.39 C 11.56 8.58 11.61 8.76 11.75 8.93 L 11.76 8.92 Z M 7.13 5.76 C 7.13 6.07 7.21 6.34 7.37 6.59 C 7.53 6.84 7.73 7.03 7.99 7.16 L 7.99 14.04 C 7.99 14.28 8.06 14.48 8.2 14.63 C 8.34 14.78 8.51 14.86 8.73 14.86 C 8.95 14.86 9.13 14.79 9.27 14.64 C 9.4 14.49 9.47 14.29 9.47 14.04 L 9.47 7.16 C 9.72 7.03 9.92 6.84 10.08 6.59 C 10.24 6.34 10.32 6.06 10.32 5.76 C 10.32 5.46 10.25 5.2 10.11 4.96 C 9.97 4.72 9.78 4.53 9.54 4.38 C 9.3 4.24 9.03 4.16 8.74 4.16 C 8.45 4.16 8.18 4.23 7.94 4.38 C 7.7 4.52 7.51 4.72 7.37 4.96 C 7.23 5.2 7.16 5.47 7.16 5.76 L 7.13 5.76 Z M 3.39 5.76 C 3.39 6.36 3.48 6.92 3.67 7.46 C 3.85 8 4.11 8.47 4.45 8.87 C 4.63 9.08 4.84 9.18 5.08 9.18 C 5.32 9.18 5.52 9.09 5.67 8.91 C 5.81 8.74 5.86 8.57 5.83 8.37 C 5.8 8.18 5.71 7.99 5.58 7.8 C 5.38 7.54 5.22 7.23 5.1 6.86 C 4.98 6.49 4.93 6.13 4.93 5.75 C 4.93 5.37 4.99 5 5.1 4.64 C 5.22 4.28 5.37 3.96 5.57 3.7 C 5.71 3.51 5.79 3.32 5.82 3.13 C 5.85 2.94 5.8 2.76 5.66 2.59 C 5.51 2.41 5.32 2.32 5.07 2.32 C 4.83 2.32 4.62 2.42 4.44 2.64 C 4.1 3.04 3.84 3.51 3.66 4.05 C 3.48 4.59 3.38 5.16 3.38 5.75 L 3.39 5.76 Z M 0 5.76 C 0 6.8 0.17 7.79 0.52 8.73 C 0.86 9.67 1.36 10.49 2.02 11.18 C 2.22 11.39 2.44 11.5 2.67 11.49 C 2.9 11.49 3.09 11.39 3.24 11.21 C 3.38 11.04 3.44 10.86 3.41 10.66 C 3.38 10.46 3.28 10.27 3.12 10.09 C 2.61 9.53 2.22 8.87 1.95 8.12 C 1.68 7.37 1.54 6.58 1.54 5.74 C 1.54 4.9 1.68 4.11 1.95 3.36 C 2.22 2.61 2.61 1.96 3.12 1.39 C 3.28 1.21 3.38 1.02 3.41 0.82 C 3.44 0.62 3.39 0.44 3.24 0.27 C 3.09 0.09 2.9 0 2.67 0 C 2.44 0 2.22 0.1 2.02 0.31 C 1.59 0.77 1.23 1.28 0.93 1.86 C 0.63 2.44 0.4 3.05 0.24 3.71 C 0.08 4.36 0 5.04 0 5.73 L 0 5.76 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={19.330} height={16.940} viewBox="0 0 19.330 16.940" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 166.33,
            width: 19.33,
            height: 16.94,
            color: "var(--labels-vibrant-tertiary)",
          }}>
            <path d={"M 14.61 4.27 L 17 6.37 L 17 2.16 C 17 1.98 16.95 1.84 16.84 1.73 C 16.73 1.62 16.59 1.57 16.41 1.57 L 15.19 1.57 C 15.02 1.57 14.87 1.62 14.76 1.73 C 14.65 1.84 14.6 1.98 14.6 2.16 L 14.6 4.27 L 14.61 4.27 Z M 0 7.99 C 0 8.19 0.07 8.36 0.2 8.48 C 0.33 8.6 0.5 8.67 0.71 8.67 C 0.82 8.67 0.92 8.65 1 8.62 C 1.08 8.59 1.16 8.54 1.24 8.48 L 9.38 1.66 C 9.47 1.58 9.56 1.54 9.66 1.54 C 9.76 1.54 9.86 1.58 9.95 1.66 L 18.09 8.48 C 18.16 8.54 18.24 8.59 18.33 8.62 C 18.42 8.65 18.51 8.67 18.62 8.67 C 18.82 8.67 18.99 8.61 19.13 8.48 C 19.26 8.36 19.33 8.19 19.33 7.99 C 19.33 7.75 19.22 7.55 19.01 7.37 L 10.72 0.41 C 10.4 0.14 10.05 0 9.67 0 C 9.29 0 8.94 0.14 8.62 0.41 L 0.33 7.37 C 0.12 7.54 0.01 7.75 0.01 7.99 L 0 7.99 Z M 8.97 10.18 L 8.97 8.86 L 9.5 8.42 C 9.61 8.33 9.72 8.33 9.83 8.42 L 10.36 8.86 L 10.36 10.18 C 10.36 10.29 10.3 10.35 10.19 10.35 L 9.14 10.35 C 9.03 10.35 8.97 10.29 8.97 10.18 Z M 7.56 10.91 C 7.56 11.18 7.64 11.38 7.79 11.53 C 7.94 11.67 8.16 11.74 8.44 11.74 L 10.9 11.74 C 11.18 11.74 11.4 11.67 11.55 11.53 C 11.7 11.39 11.78 11.18 11.78 10.91 L 11.78 8.21 L 10.18 6.87 C 10.02 6.73 9.85 6.67 9.67 6.66 C 9.49 6.66 9.32 6.73 9.16 6.87 L 7.56 8.21 L 7.56 10.91 Z M 6.39 12.45 L 6.39 7.64 L 9.4 5.11 C 9.48 5.05 9.57 5.02 9.67 5.01 C 9.77 5.01 9.86 5.04 9.94 5.11 L 12.95 7.64 L 12.95 12.45 C 12.95 12.76 12.79 12.92 12.48 12.92 L 6.85 12.92 C 6.54 12.92 6.39 12.76 6.39 12.45 Z M 4.95 13.22 C 4.95 13.59 5.05 13.87 5.25 14.06 C 5.45 14.25 5.76 14.34 6.16 14.34 L 13.18 14.34 C 13.58 14.34 13.88 14.25 14.08 14.06 C 14.29 13.87 14.39 13.59 14.39 13.22 L 14.39 6.94 L 10.23 3.45 C 10.05 3.31 9.86 3.23 9.66 3.23 C 9.46 3.23 9.27 3.3 9.1 3.45 L 4.94 6.94 L 4.94 13.22 L 4.95 13.22 Z M 2.33 15.03 C 2.33 15.63 2.5 16.1 2.85 16.43 C 3.2 16.77 3.68 16.94 4.31 16.94 L 15.03 16.94 C 15.65 16.94 16.14 16.77 16.48 16.43 C 16.83 16.09 17 15.63 17 15.03 L 17 6.17 L 15.56 6.12 L 15.56 14.66 C 15.56 14.94 15.49 15.16 15.35 15.3 C 15.21 15.44 15 15.51 14.71 15.51 L 4.63 15.51 C 4.34 15.51 4.13 15.44 3.99 15.3 C 3.85 15.16 3.78 14.95 3.78 14.66 L 3.78 6.05 L 2.34 6.1 L 2.34 15.03 L 2.33 15.03 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={13.780} height={16.891} viewBox="0 0 13.780 16.891" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 110.33,
            width: 13.78,
            height: 16.891,
            color: "var(--labels-vibrant-tertiary)",
          }}>
            <path d={"M 2.32 16.881 C 2.61 16.881 2.93 16.821 3.27 16.701 C 3.61 16.581 3.94 16.401 4.24 16.141 C 4.55 15.891 4.8 15.551 4.99 15.141 C 5.18 14.731 5.28 14.231 5.28 13.651 L 5.28 6.251 C 5.28 6.071 5.3 5.951 5.34 5.901 C 5.38 5.851 5.48 5.811 5.64 5.781 L 12.09 4.451 C 12.27 4.411 12.39 4.411 12.45 4.451 C 12.51 4.491 12.54 4.591 12.54 4.741 L 12.59 9.701 C 12.59 10.061 12.42 10.281 12.09 10.351 L 10.91 10.611 C 9.29 10.961 8.48 11.751 8.48 12.981 C 8.48 13.391 8.58 13.761 8.79 14.081 C 8.99 14.401 9.27 14.661 9.63 14.841 C 9.98 15.021 10.39 15.121 10.84 15.121 C 11.14 15.121 11.45 15.061 11.79 14.951 C 12.13 14.841 12.45 14.661 12.75 14.411 C 13.05 14.161 13.3 13.841 13.49 13.431 C 13.68 13.031 13.78 12.531 13.78 11.951 L 13.78 0.951 C 13.78 0.551 13.68 0.271 13.47 0.131 C 13.26 -0.009 12.93 -0.039 12.48 0.051 L 4.88 1.621 C 4.3 1.741 4.01 2.051 4.01 2.551 L 4.06 11.491 C 4.06 11.831 3.92 12.031 3.63 12.081 L 2.39 12.341 C 1.59 12.511 0.99 12.801 0.59 13.211 C 0.2 13.621 0 14.131 0 14.761 C 0 15.391 0.22 15.901 0.66 16.291 C 1.1 16.691 1.65 16.891 2.33 16.891 L 2.32 16.881 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 55,
            width: 16,
            height: 16,
            color: "var(--labels-vibrant-tertiary)",
          }}>
            <path d={"M 8 16 C 9.099 16 10.13 15.794 11.092 15.372 C 12.054 14.96 12.908 14.38 13.644 13.644 C 14.38 12.908 14.96 12.054 15.372 11.092 C 15.794 10.13 16 9.099 16 8 C 16 6.901 15.794 5.87 15.372 4.908 C 14.95 3.946 14.38 3.092 13.644 2.356 C 12.908 1.62 12.054 1.04 11.092 0.628 C 10.13 0.216 9.09 0 8 0 C 6.91 0 5.88 0.206 4.908 0.628 C 3.946 1.04 3.092 1.62 2.356 2.356 C 1.62 3.092 1.05 3.946 0.628 4.908 C 0.216 5.87 0 6.901 0 8 C 0 9.099 0.206 10.13 0.628 11.092 C 1.04 12.054 1.62 12.908 2.356 13.644 C 3.092 14.38 3.946 14.96 4.908 15.372 C 5.87 15.784 6.901 16 8 16 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={16} height={14.820} viewBox="0 0 16 14.820" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 1,
            width: 16,
            height: 14.82,
            color: "var(--labels-vibrant-primary)",
          }}>
            <path d={"M 8.005 14.82 C 8.115 14.82 8.255 14.78 8.405 14.71 C 8.555 14.63 8.705 14.55 8.856 14.46 C 10.306 13.52 11.557 12.54 12.628 11.5 C 13.699 10.46 14.529 9.4 15.119 8.3 C 15.71 7.2 16 6.1 16 4.98 C 16 4.24 15.88 3.56 15.64 2.96 C 15.4 2.35 15.069 1.83 14.659 1.38 C 14.239 0.94 13.759 0.6 13.208 0.36 C 12.658 0.12 12.068 0 11.437 0 C 10.657 0 9.976 0.2 9.396 0.59 C 8.816 0.98 8.355 1.5 8.005 2.14 C 7.665 1.5 7.205 0.99 6.624 0.59 C 6.044 0.19 5.363 0 4.573 0 C 3.942 0 3.352 0.12 2.802 0.36 C 2.251 0.6 1.771 0.94 1.351 1.38 C 0.931 1.82 0.6 2.35 0.36 2.96 C 0.12 3.57 0 4.24 0 4.98 C 0 6.09 0.29 7.2 0.881 8.3 C 1.471 9.4 2.301 10.46 3.372 11.5 C 4.443 12.54 5.704 13.52 7.154 14.46 C 7.295 14.55 7.445 14.64 7.605 14.71 C 7.755 14.79 7.895 14.82 8.005 14.82 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 209,
          top: 560,
          width: 70,
          height: 70,
          borderRadius: 296,
        }}>
          <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 70,
            overflow: "hidden",
            borderRadius: 100,
            color: "rgb(36,36,36)",
          }}>
            <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 35 0 C 54.33 0 70 15.67 70 35 L 70 35 C 70 54.33 54.33 70 35 70 L 35 70 C 15.67 70 0 54.33 0 35 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={37.475} height={17.744} viewBox="0 0 37.475 17.744" fill="none" style={{
            position: "absolute",
            left: 16.777,
            top: 26.438,
            width: 37.475,
            height: 17.744,
            color: "rgba(255,255,255,0.5)",
          }}>
            <path d={"M 6.943 17.744 C 6.128 17.744 5.393 17.7 4.737 17.611 C 4.081 17.528 3.492 17.372 2.97 17.143 C 2.448 16.92 1.974 16.598 1.547 16.178 C 1.133 15.764 0.815 15.299 0.592 14.784 C 0.369 14.262 0.213 13.673 0.124 13.017 C 0.041 12.361 0 11.626 0 10.811 L 0 6.905 C 0 5.695 0.102 4.661 0.306 3.801 C 0.509 2.935 0.926 2.19 1.557 1.566 C 2.181 0.942 2.929 0.525 3.801 0.315 C 4.673 0.105 5.708 0 6.905 0 L 26.158 0 C 26.973 0 27.708 0.045 28.364 0.134 C 29.02 0.216 29.609 0.372 30.131 0.602 C 30.653 0.825 31.127 1.146 31.554 1.566 C 31.968 1.98 32.286 2.448 32.509 2.97 C 32.732 3.486 32.885 4.072 32.967 4.727 C 33.056 5.383 33.101 6.118 33.101 6.933 L 33.101 10.811 C 33.101 11.626 33.056 12.361 32.967 13.017 C 32.885 13.666 32.732 14.252 32.509 14.774 C 32.286 15.296 31.968 15.764 31.554 16.178 C 31.134 16.598 30.659 16.92 30.131 17.143 C 29.609 17.372 29.02 17.528 28.364 17.611 C 27.708 17.7 26.973 17.744 26.158 17.744 L 6.943 17.744 Z M 6.599 14.917 L 26.502 14.917 C 27.164 14.917 27.75 14.86 28.259 14.746 C 28.768 14.631 29.176 14.418 29.481 14.106 C 29.781 13.8 29.988 13.399 30.102 12.902 C 30.217 12.406 30.274 11.823 30.274 11.155 L 30.274 6.599 C 30.274 5.924 30.217 5.339 30.102 4.842 C 29.994 4.345 29.787 3.941 29.481 3.629 C 29.17 3.323 28.759 3.113 28.25 2.999 C 27.747 2.884 27.164 2.827 26.502 2.827 L 6.628 2.827 C 5.953 2.827 5.358 2.884 4.842 2.999 C 4.333 3.107 3.925 3.317 3.62 3.629 C 3.314 3.941 3.104 4.349 2.989 4.852 C 2.881 5.354 2.827 5.947 2.827 6.628 L 2.827 11.155 C 2.827 11.823 2.881 12.406 2.989 12.902 C 3.104 13.399 3.314 13.8 3.62 14.106 C 3.932 14.418 4.339 14.631 4.842 14.746 C 5.345 14.86 5.931 14.917 6.599 14.917 Z M 34.973 12.358 L 34.973 5.386 C 35.329 5.412 35.699 5.571 36.081 5.864 C 36.469 6.157 36.797 6.561 37.064 7.077 C 37.338 7.586 37.475 8.185 37.475 8.872 C 37.475 9.56 37.338 10.161 37.064 10.677 C 36.797 11.186 36.469 11.591 36.081 11.89 C 35.699 12.183 35.329 12.339 34.973 12.358 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={18.107} height={8.786} viewBox="0 0 18.107 8.786" fill="none" style={{
            position: "absolute",
            left: 21.256,
            top: 30.918,
            width: 18.107,
            height: 8.786,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 0.993 8.7 C 1.229 8.758 1.528 8.786 1.891 8.786 L 16.216 8.786 C 16.586 8.786 16.885 8.758 17.114 8.7 C 17.343 8.637 17.534 8.528 17.687 8.376 C 17.84 8.223 17.948 8.032 18.012 7.803 C 18.075 7.567 18.107 7.268 18.107 6.905 L 18.107 1.881 C 18.107 1.518 18.075 1.222 18.012 0.993 C 17.948 0.758 17.84 0.563 17.687 0.411 C 17.541 0.264 17.35 0.159 17.114 0.096 C 16.878 0.032 16.579 0 16.216 0 L 1.92 0 C 1.544 0 1.235 0.032 0.993 0.096 C 0.758 0.153 0.567 0.255 0.42 0.401 C 0.267 0.554 0.159 0.751 0.096 0.993 C 0.032 1.229 0 1.534 0 1.91 L 0 6.905 C 0 7.268 0.032 7.567 0.096 7.803 C 0.159 8.032 0.267 8.223 0.42 8.376 C 0.573 8.528 0.764 8.637 0.993 8.7 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 294,
          top: 475,
          width: 70,
          height: 70,
          borderRadius: 296,
        }}>
          <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 70,
            overflow: "hidden",
            borderRadius: 100,
            color: "rgb(36,36,36)",
          }}>
            <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 35 0 C 54.33 0 70 15.67 70 35 L 70 35 C 70 54.33 54.33 70 35 70 L 35 70 C 15.67 70 0 54.33 0 35 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={25.260} height={20.170} viewBox="0 0 25.260 20.170" fill="none" style={{
            position: "absolute",
            left: 19.709,
            top: 22.246,
            width: 25.26,
            height: 20.17,
            color: "rgb(64,64,64)",
          }}>
            <path d={"M 4.202 20.17 C 2.833 20.17 1.789 19.813 1.07 19.1 C 0.357 18.387 0 17.353 0 15.997 L 0 4.164 C 0 2.808 0.357 1.776 1.07 1.07 C 1.789 0.357 2.833 0 4.202 0 L 21.068 0 C 22.43 0 23.468 0.357 24.181 1.07 C 24.901 1.783 25.26 2.814 25.26 4.164 L 25.26 7 L 22.443 7 L 22.443 4.489 C 22.443 3.922 22.3 3.502 22.013 3.228 C 21.727 2.954 21.316 2.817 20.781 2.817 L 4.479 2.817 C 3.944 2.817 3.534 2.954 3.247 3.228 C 2.967 3.502 2.827 3.922 2.827 4.489 L 2.827 15.672 C 2.827 16.239 2.967 16.659 3.247 16.933 C 3.534 17.206 3.944 17.343 4.479 17.343 L 7.612 17.343 L 7.612 20.17 L 4.202 20.17 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={25.260} height={20.170} viewBox="0 0 25.260 20.170" fill="none" style={{
            position: "absolute",
            left: 26.05,
            top: 28.205,
            width: 25.26,
            height: 20.17,
            color: "var(--grays-white)",
          }}>
            <path d={"M 4.193 20.17 C 2.83 20.17 1.789 19.813 1.07 19.1 C 0.357 18.387 0 17.356 0 16.006 L 0 4.164 C 0 2.814 0.357 1.783 1.07 1.07 C 1.789 0.357 2.83 0 4.193 0 L 21.058 0 C 22.421 0 23.462 0.357 24.181 1.07 C 24.901 1.783 25.26 2.814 25.26 4.164 L 25.26 16.006 C 25.26 17.356 24.901 18.387 24.181 19.1 C 23.462 19.813 22.421 20.17 21.058 20.17 L 4.193 20.17 Z M 4.479 17.343 L 20.781 17.343 C 21.316 17.343 21.724 17.206 22.004 16.933 C 22.29 16.659 22.433 16.242 22.433 15.681 L 22.433 4.498 C 22.433 3.932 22.29 3.511 22.004 3.238 C 21.724 2.964 21.316 2.827 20.781 2.827 L 4.479 2.827 C 3.938 2.827 3.527 2.964 3.247 3.238 C 2.967 3.511 2.827 3.932 2.827 4.498 L 2.827 15.681 C 2.827 16.242 2.967 16.659 3.247 16.933 C 3.527 17.206 3.938 17.343 4.479 17.343 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 209,
          top: 475,
          width: 70,
          height: 70,
          borderRadius: 296,
          background: "linear-gradient(rgba(26,26,26,0.2),rgba(26,26,26,0.2)), linear-gradient(rgba(255,0,0,0.1),rgba(255,0,0,0.1))",
        }}>
          <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 70,
            overflow: "hidden",
            borderRadius: 100,
            color: "rgb(36,36,36)",
          }}>
            <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 35 0 C 54.33 0 70 15.67 70 35 L 70 35 C 70 54.33 54.33 70 35 70 L 35 70 C 15.67 70 0 54.33 0 35 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 70,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "var(--grays-white)",
          }}>􀑚</span>
        </div>
        <div style={{
          position: "absolute",
          left: 37,
          top: 475,
          width: 155,
          height: 155,
          display: "flex",
          flexDirection: "column",
          padding: "14px 14px 14px 14px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 155,
            height: 155,
            borderRadius: 100,
          }}>
            <svg width={155} height={155} viewBox="0 0 155 155" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 155,
              height: 155,
              overflow: "hidden",
              borderRadius: 30,
              color: "rgb(36,36,36)",
            }}>
              <path d={"M 0 48 C 0 31.198 0 22.798 3.27 16.38 C 6.146 10.735 10.735 6.146 16.38 3.27 C 22.798 0 31.198 0 48 0 L 107 0 C 123.802 0 132.202 0 138.62 3.27 C 144.265 6.146 148.854 10.735 151.73 16.38 C 155 22.798 155 31.198 155 48 L 155 107 C 155 123.802 155 132.202 151.73 138.62 C 148.854 144.265 144.265 148.854 138.62 151.73 C 132.202 155 123.802 155 107 155 L 48 155 C 31.198 155 22.798 155 16.38 151.73 C 10.735 148.854 6.146 144.265 3.27 138.62 C 0 132.202 0 123.802 0 107 L 0 48 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            width: 40,
            height: 40,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(128,128,128),rgb(128,128,128)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀛮</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0px 2px 0px 2px",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "100%",
              letterSpacing: "-0.080px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Title</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              letterSpacing: "-0.080px",
              color: "rgba(255,255,255,0.33)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 37,
          top: 389,
          width: 155,
          height: 70,
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 14px 0px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 155,
            height: 70,
          }}>
            <svg width={155} height={70} viewBox="0 0 155 70" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 155,
              height: 70,
              overflow: "hidden",
              borderRadius: 100,
              color: "rgb(36,36,36)",
            }}>
              <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 120 0 C 139.33 0 155 15.67 155 35 L 155 35 C 155 54.33 139.33 70 120 70 L 35 70 C 15.67 70 0 54.33 0 35 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            width: 40,
            height: 40,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(128,128,128),rgb(128,128,128)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀆺</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Title</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              letterSpacing: "-0.080px",
              color: "rgba(255,255,255,0.33)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 294,
          top: 303,
          width: 70,
          height: 155,
          overflow: "hidden",
          borderRadius: 34,
        }}>
          <svg width={70} height={155} viewBox="0 0 70 155" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 155,
            overflow: "hidden",
            borderRadius: 100,
            color: "rgb(36,36,36)",
          }}>
            <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 35 0 C 54.33 0 70 15.67 70 35 L 70 120 C 70 139.33 54.33 155 35 155 L 35 155 C 15.67 155 0 139.33 0 120 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={70} height={55} viewBox="0 0 70 55" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 100,
            width: 70,
            height: 55,
            borderRadius: "100px 100px 24px 24px",
          }}>
            <path d={"M 0 0 L 70 0 L 70 20 C 70 30.245 70 35.367 68.462 39.454 C 66.027 45.922 60.922 51.027 54.454 53.462 C 50.367 55 45.245 55 35 55 L 35 55 C 24.755 55 19.633 55 15.546 53.462 C 9.078 51.027 3.973 45.922 1.538 39.454 C 0 35.367 0 30.245 0 20 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 20,
            top: 109,
            width: 29.4,
            height: 22.725,
          }}>
            <svg width={10} height={19} viewBox="0 0 10 19" fill="none" style={{
              position: "absolute",
              left: 20,
              top: 2,
              width: 10,
              height: 19,
              opacity: 0.5,
              color: "var(--accents-cyan)",
            }}>
              <path d={"M 0.552 15.305 C 0.244 15.096 0.065 14.817 0.013 14.469 C -0.03 14.12 0.069 13.758 0.308 13.384 C 0.659 12.861 0.933 12.269 1.13 11.607 C 1.327 10.936 1.425 10.234 1.425 9.503 C 1.425 8.771 1.327 8.069 1.13 7.398 C 0.942 6.728 0.668 6.135 0.308 5.621 C 0.06 5.255 -0.038 4.898 0.013 4.55 C 0.065 4.192 0.244 3.909 0.552 3.7 C 0.826 3.517 1.121 3.456 1.438 3.517 C 1.755 3.578 2.007 3.748 2.195 4.027 C 2.717 4.733 3.124 5.565 3.415 6.523 C 3.706 7.473 3.851 8.466 3.851 9.503 C 3.851 10.539 3.706 11.532 3.415 12.482 C 3.124 13.432 2.717 14.259 2.195 14.965 C 2.007 15.253 1.755 15.427 1.438 15.488 C 1.121 15.54 0.826 15.479 0.552 15.305 Z M 5.674 18.794 C 5.375 18.603 5.203 18.337 5.161 17.997 C 5.118 17.649 5.208 17.304 5.43 16.965 C 6.106 15.937 6.633 14.782 7.009 13.501 C 7.386 12.221 7.574 10.888 7.574 9.503 C 7.574 8.117 7.386 6.784 7.009 5.504 C 6.641 4.214 6.115 3.06 5.43 2.04 C 5.199 1.701 5.105 1.361 5.148 1.021 C 5.199 0.673 5.375 0.403 5.674 0.211 C 5.965 0.019 6.269 -0.042 6.585 0.028 C 6.911 0.089 7.172 0.267 7.369 0.564 C 8.207 1.757 8.853 3.134 9.307 4.693 C 9.769 6.244 10 7.847 10 9.503 C 10 11.158 9.769 12.761 9.307 14.312 C 8.845 15.854 8.199 17.23 7.369 18.441 C 7.172 18.738 6.911 18.916 6.585 18.977 C 6.269 19.038 5.965 18.977 5.674 18.794 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={15.500} height={23} viewBox="0 0 15.500 23" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 15.5,
              height: 23,
              color: "var(--accents-cyan)",
            }}>
              <path d={"M 13.865 23 C 13.544 23 13.24 22.927 12.953 22.782 C 12.665 22.645 12.365 22.426 12.053 22.126 L 6.755 17.038 C 6.671 16.969 6.573 16.935 6.464 16.935 L 2.864 16.935 C 1.943 16.935 1.234 16.678 0.735 16.164 C 0.245 15.65 0 14.892 0 13.89 L 0 9.123 C 0 8.129 0.245 7.375 0.735 6.861 C 1.234 6.347 1.943 6.091 2.864 6.091 L 6.464 6.091 C 6.573 6.091 6.671 6.052 6.755 5.975 L 12.053 0.951 C 12.408 0.617 12.716 0.377 12.978 0.231 C 13.24 0.077 13.527 0 13.84 0 C 14.33 0 14.727 0.167 15.031 0.501 C 15.344 0.835 15.5 1.242 15.5 1.722 L 15.5 21.342 C 15.5 21.814 15.348 22.208 15.044 22.525 C 14.74 22.842 14.347 23 13.865 23 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 209,
          top: 303,
          width: 70,
          height: 155,
          overflow: "hidden",
          borderRadius: 34,
        }}>
          <svg width={70} height={155} viewBox="0 0 70 155" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 155,
            overflow: "hidden",
            borderRadius: 100,
            color: "rgb(36,36,36)",
          }}>
            <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 35 0 C 54.33 0 70 15.67 70 35 L 70 120 C 70 139.33 54.33 155 35 155 L 35 155 C 15.67 155 0 139.33 0 120 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={70} height={112} viewBox="0 0 70 112" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 43,
            width: 70,
            height: 112,
            borderRadius: "100px 100px 24px 24px",
          }}>
            <path d={"M 0 0 L 70 0 L 70 77 C 70 87.245 70 92.367 68.462 96.454 C 66.027 102.922 60.922 108.027 54.454 110.462 C 50.367 112 45.245 112 35 112 L 35 112 C 24.755 112 19.633 112 15.546 110.462 C 9.078 108.027 3.973 102.922 1.538 96.454 C 0 92.367 0 87.245 0 77 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 21,
            top: 107,
            width: 27,
            height: 27,
            overflow: "hidden",
          }}>
            <svg width={27} height={27} viewBox="0 0 27 27" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 27,
              height: 27,
              opacity: 0.5,
              color: "var(--accents-yellow)",
            }}>
              <path d={"M 13.506 4.954 C 13.166 4.954 12.879 4.833 12.644 4.591 C 12.41 4.349 12.293 4.062 12.293 3.731 L 12.293 1.211 C 12.293 0.88 12.41 0.598 12.644 0.363 C 12.879 0.121 13.166 0 13.506 0 C 13.83 0 14.109 0.121 14.343 0.363 C 14.586 0.598 14.707 0.88 14.707 1.211 L 14.707 3.731 C 14.707 4.062 14.586 4.349 14.343 4.591 C 14.109 4.833 13.83 4.954 13.506 4.954 Z M 19.549 7.474 C 19.315 7.248 19.197 6.965 19.197 6.626 C 19.197 6.287 19.315 6 19.549 5.766 L 21.345 3.973 C 21.572 3.739 21.855 3.622 22.195 3.622 C 22.534 3.614 22.822 3.727 23.056 3.961 C 23.291 4.195 23.408 4.482 23.408 4.821 C 23.408 5.16 23.291 5.447 23.056 5.681 L 21.272 7.474 C 21.038 7.716 20.751 7.837 20.411 7.837 C 20.071 7.829 19.784 7.708 19.549 7.474 Z M 22.049 13.506 C 22.049 13.175 22.166 12.892 22.401 12.658 C 22.644 12.416 22.935 12.295 23.275 12.295 L 25.787 12.295 C 26.118 12.295 26.401 12.416 26.636 12.658 C 26.879 12.892 27 13.175 27 13.506 C 27 13.837 26.879 14.12 26.636 14.354 C 26.401 14.588 26.118 14.705 25.787 14.705 L 23.275 14.705 C 22.935 14.705 22.644 14.588 22.401 14.354 C 22.166 14.12 22.049 13.837 22.049 13.506 Z M 19.549 19.538 C 19.776 19.312 20.059 19.199 20.399 19.199 C 20.738 19.199 21.026 19.312 21.26 19.538 L 23.056 21.331 C 23.291 21.557 23.408 21.84 23.408 22.179 C 23.408 22.518 23.295 22.805 23.068 23.039 C 22.834 23.265 22.547 23.378 22.207 23.378 C 21.867 23.386 21.584 23.281 21.357 23.063 L 19.549 21.246 C 19.315 21.02 19.197 20.742 19.197 20.41 C 19.197 20.071 19.315 19.781 19.549 19.538 Z M 13.506 22.058 C 13.83 22.058 14.109 22.175 14.343 22.409 C 14.586 22.651 14.707 22.938 14.707 23.269 L 14.707 25.789 C 14.707 26.12 14.586 26.402 14.343 26.637 C 14.109 26.879 13.83 27 13.506 27 C 13.166 27 12.879 26.879 12.644 26.637 C 12.41 26.402 12.293 26.12 12.293 25.789 L 12.293 23.269 C 12.293 22.938 12.41 22.651 12.644 22.409 C 12.879 22.175 13.166 22.058 13.506 22.058 Z M 7.451 19.538 C 7.677 19.781 7.791 20.071 7.791 20.41 C 7.791 20.742 7.673 21.02 7.439 21.246 L 5.643 23.051 C 5.416 23.269 5.129 23.374 4.781 23.366 C 4.441 23.366 4.154 23.253 3.92 23.027 C 3.701 22.793 3.592 22.506 3.592 22.167 C 3.592 21.828 3.709 21.545 3.944 21.319 L 5.728 19.538 C 5.962 19.312 6.249 19.199 6.589 19.199 C 6.929 19.199 7.216 19.312 7.451 19.538 Z M 4.951 13.506 C 4.951 13.837 4.83 14.12 4.587 14.354 C 4.344 14.588 4.057 14.705 3.725 14.705 L 1.201 14.705 C 0.878 14.705 0.595 14.588 0.352 14.354 C 0.117 14.12 0 13.837 0 13.506 C 0 13.175 0.117 12.892 0.352 12.658 C 0.595 12.416 0.878 12.295 1.201 12.295 L 3.725 12.295 C 4.057 12.295 4.344 12.416 4.587 12.658 C 4.83 12.892 4.951 13.175 4.951 13.506 Z M 7.439 7.474 C 7.204 7.708 6.917 7.825 6.577 7.825 C 6.245 7.825 5.962 7.708 5.728 7.474 L 3.944 5.669 C 3.717 5.443 3.604 5.16 3.604 4.821 C 3.604 4.482 3.721 4.195 3.956 3.961 C 4.191 3.727 4.478 3.614 4.818 3.622 C 5.157 3.63 5.44 3.747 5.667 3.973 L 7.451 5.766 C 7.677 5.992 7.791 6.279 7.791 6.626 C 7.791 6.965 7.673 7.248 7.439 7.474 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={11} height={11} viewBox="0 0 11 11" fill="none" style={{
              position: "absolute",
              left: 8,
              top: 8,
              width: 11,
              height: 11,
              color: "var(--accents-yellow)",
            }}>
              <path d={"M 5.5 11 C 4.741 11 4.028 10.86 3.361 10.579 C 2.694 10.291 2.107 9.898 1.602 9.4 C 1.103 8.895 0.709 8.309 0.421 7.642 C 0.14 6.975 0 6.263 0 5.505 C 0 4.74 0.14 4.028 0.421 3.368 C 0.709 2.702 1.103 2.119 1.602 1.621 C 2.107 1.116 2.694 0.719 3.361 0.432 C 4.028 0.144 4.741 0 5.5 0 C 6.259 0 6.972 0.144 7.639 0.432 C 8.306 0.719 8.889 1.116 9.388 1.621 C 9.894 2.119 10.287 2.702 10.568 3.368 C 10.856 4.028 11 4.74 11 5.505 C 11 6.263 10.856 6.975 10.568 7.642 C 10.287 8.309 9.894 8.895 9.388 9.4 C 8.889 9.898 8.306 10.291 7.639 10.579 C 6.972 10.86 6.259 11 5.5 11 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 37,
          top: 303,
          width: 70,
          height: 70,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 70,
          }}>
            <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 70,
              height: 70,
              overflow: "hidden",
              borderRadius: 100,
              color: "rgb(36,36,36)",
            }}>
              <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 35 0 C 54.33 0 70 15.67 70 35 L 70 35 C 70 54.33 54.33 70 35 70 L 35 70 C 15.67 70 0 54.33 0 35 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 70,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 19,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "var(--grays-white)",
          }}>􀌟</span>
        </div>
        <div style={{
          position: "absolute",
          left: 122,
          top: 303,
          width: 70,
          height: 70,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 70,
          }}>
            <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 70,
              height: 70,
              overflow: "hidden",
              borderRadius: 100,
            }}>
              <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 35 0 C 54.33 0 70 15.67 70 35 L 70 35 C 70 54.33 54.33 70 35 70 L 35 70 C 15.67 70 0 54.33 0 35 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 70,
            opacity: 0.9,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 19,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "rgba(255,0,0,0.6)",
          }}>􀋞</span>
        </div>
        <div style={{
          position: "absolute",
          left: 209,
          top: 132,
          width: 155,
          height: 155,
          borderRadius: 30,
        }}>
          <svg width={155} height={155} viewBox="0 0 155 155" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 155,
            height: 155,
            overflow: "hidden",
            borderRadius: 30,
            color: "rgb(36,36,36)",
          }}>
            <path d={"M 0 48 C 0 31.198 0 22.798 3.27 16.38 C 6.146 10.735 10.735 6.146 16.38 3.27 C 22.798 0 31.198 0 48 0 L 107 0 C 123.802 0 132.202 0 138.62 3.27 C 144.265 6.146 148.854 10.735 151.73 16.38 C 155 22.798 155 31.198 155 48 L 155 107 C 155 123.802 155 132.202 151.73 138.62 C 148.854 144.265 144.265 148.854 138.62 151.73 C 132.202 155 123.802 155 107 155 L 48 155 C 31.198 155 22.798 155 16.38 151.73 C 10.735 148.854 6.146 144.265 3.27 138.62 C 0 132.202 0 123.802 0 107 L 0 48 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "absolute",
            left: 111,
            top: 124,
            width: 20,
            height: 14,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "rgb(255,255,255)",
          }}>􀊌</span>
          <span style={{
            position: "absolute",
            left: 65,
            top: 115,
            width: 24,
            height: 30,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 25,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "rgb(255,255,255)",
          }}>􀊄</span>
          <span style={{
            position: "absolute",
            left: 24,
            top: 124,
            width: 20,
            height: 14,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "rgb(255,255,255)",
          }}>􀊊</span>
          <span style={{
            position: "absolute",
            left: 14,
            top: 91,
            width: 124,
            height: 18,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 15,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "rgb(175,175,175)",
          }}>Artist</span>
          <span style={{
            position: "absolute",
            left: 14,
            top: 74,
            width: 124,
            height: 18,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 15,
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "rgb(175,175,175)",
          }}>Track</span>
          <div style={{
            position: "absolute",
            left: 100,
            top: 13,
            width: 40,
            height: 40,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
          }}>
            <span style={{
              position: "absolute",
              left: 8,
              top: 8,
              width: 24,
              height: 24,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "rgb(255,255,255)",
            }}>􀑢</span>
          </div>
          <div style={{
            position: "absolute",
            left: 12.666,
            top: 13.333,
            width: 53.666,
            height: 53.666,
            borderRadius: 14,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 37,
          top: 132,
          width: 155,
          height: 155,
          borderRadius: 30,
        }}>
          <svg width={155} height={155} viewBox="0 0 155 155" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 155,
            height: 155,
            overflow: "hidden",
            borderRadius: 30,
            color: "rgb(36,36,36)",
          }}>
            <path d={"M 0 48 C 0 31.198 0 22.798 3.27 16.38 C 6.146 10.735 10.735 6.146 16.38 3.27 C 22.798 0 31.198 0 48 0 L 107 0 C 123.802 0 132.202 0 138.62 3.27 C 144.265 6.146 148.854 10.735 151.73 16.38 C 155 22.798 155 31.198 155 48 L 155 107 C 155 123.802 155 132.202 151.73 138.62 C 148.854 144.265 144.265 148.854 138.62 151.73 C 132.202 155 123.802 155 107 155 L 48 155 C 31.198 155 22.798 155 16.38 151.73 C 10.735 148.854 6.146 144.265 3.27 138.62 C 0 132.202 0 123.802 0 107 L 0 48 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 116,
            top: 115.333,
            width: 25.666,
            height: 25.67,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 25.333,
              height: 25.333,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 9,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀤆</span>
          </div>
          <div style={{
            position: "absolute",
            left: 84.667,
            top: 115.333,
            width: 25.666,
            height: 25.67,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 25.333,
              height: 25.333,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀉤</span>
          </div>
          <div style={{
            position: "absolute",
            left: 116,
            top: 84,
            width: 25.666,
            height: 25.67,
            borderRadius: 100,
            backgroundColor: "var(--accents-blue)",
          }}>
            <svg width={8.794} height={13.936} viewBox="0 0 8.794 13.936" fill="none" style={{
              position: "absolute",
              left: 8.443,
              top: 6.08,
              width: 8.794,
              height: 13.936,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 5.029 5.319 L 5.029 2.238 L 6.925 3.791 L 5.029 5.319 Z M 5.029 11.705 L 5.029 8.623 L 6.925 10.151 L 5.029 11.705 Z M 3.436 13.034 C 3.436 13.903 4.529 14.233 5.24 13.627 L 8.373 10.967 C 8.662 10.73 8.794 10.414 8.794 10.098 C 8.794 9.782 8.649 9.466 8.36 9.242 L 5.529 6.964 L 8.36 4.687 C 8.649 4.45 8.781 4.134 8.794 3.831 C 8.794 3.528 8.662 3.212 8.373 2.962 L 5.24 0.315 C 4.516 -0.304 3.436 0.039 3.436 0.908 L 3.436 5.398 L 1.316 3.646 C 1.159 3.515 0.974 3.449 0.777 3.449 C 0.342 3.449 0 3.791 0 4.226 C 0 4.463 0.092 4.7 0.316 4.871 L 2.936 6.978 L 0.316 9.084 C 0.092 9.255 0 9.492 0 9.729 C 0 10.204 0.355 10.506 0.777 10.506 C 0.961 10.506 1.159 10.441 1.316 10.309 L 3.436 8.558 L 3.436 13.034 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
          <div style={{
            position: "absolute",
            left: 84.667,
            top: 84,
            width: 25.666,
            height: 25.666,
            borderRadius: 100,
            backgroundColor: "var(--accents-green)",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 25.333,
              height: 25.333,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 9,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀭧</span>
          </div>
          <div style={{
            position: "absolute",
            left: 14,
            top: 84,
            width: 57,
            height: 57,
            borderRadius: 100,
            backgroundColor: "var(--accents-blue)",
          }}>
            <span style={{
              position: "absolute",
              left: 14,
              top: 19,
              width: 29,
              height: 20,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀙇</span>
          </div>
          <div style={{
            position: "absolute",
            left: 84.667,
            top: 13,
            width: 57,
            height: 57,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
          }}>
            <svg width={22.666} height={21.354} viewBox="0 0 22.666 21.354" fill="none" style={{
              position: "absolute",
              left: 16.666,
              top: 18,
              width: 22.666,
              height: 21.354,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 11.333 0 C 17.592 0 22.666 5.074 22.666 11.334 C 22.666 15.681 20.218 19.453 16.627 21.354 L 15.674 19.721 C 18.705 18.148 20.777 14.984 20.777 11.334 C 20.777 6.118 16.549 1.889 11.333 1.889 C 6.117 1.889 1.889 6.118 1.889 11.334 C 1.889 14.984 3.961 18.149 6.991 19.722 L 6.038 21.354 C 2.448 19.453 0 15.68 0 11.334 C 0 5.075 5.074 0 11.333 0 Z M 11.333 3.148 C 15.853 3.149 19.518 6.813 19.518 11.334 C 19.518 14.52 17.696 17.278 15.038 18.631 L 14.085 16.996 C 16.183 15.975 17.629 13.824 17.629 11.334 C 17.629 7.857 14.81 5.037 11.333 5.037 C 7.856 5.037 5.037 7.857 5.037 11.334 C 5.037 13.824 6.483 15.976 8.58 16.997 L 7.627 18.631 C 4.97 17.278 3.148 14.52 3.147 11.334 C 3.147 6.813 6.813 3.149 11.333 3.148 Z M 11.333 6.611 C 13.941 6.611 16.055 8.726 16.055 11.334 C 16.055 13.244 14.92 14.888 13.289 15.632 L 12.327 13.983 C 13.401 13.58 14.166 12.548 14.166 11.334 C 14.166 9.769 12.898 8.5 11.333 8.5 C 9.768 8.5 8.5 9.769 8.5 11.334 C 8.5 12.548 9.265 13.58 10.338 13.983 L 9.377 15.632 C 7.746 14.888 6.611 13.244 6.611 11.334 C 6.611 8.726 8.725 6.612 11.333 6.611 Z M 11.333 9.76 C 12.202 9.76 12.907 10.464 12.907 11.333 C 12.907 12.202 12.202 12.907 11.333 12.907 C 10.464 12.907 9.759 12.202 9.759 11.333 C 9.759 10.464 10.464 9.76 11.333 9.76 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "absolute",
            left: 14,
            top: 13,
            width: 57,
            height: 57,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
          }}>
            <span style={{
              position: "absolute",
              left: 15,
              top: 19,
              width: 28,
              height: 20,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀑓</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 48,
          top: 89,
          width: 306.003,
          height: 13.666,
        }}>
          <div style={{
            position: "absolute",
            left: 276,
            top: 0,
            width: 30.003,
            height: 13.666,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 27.333,
              height: 13.666,
              opacity: 0.35,
              borderRadius: 4.665999889373779,
              boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
            }} />
            <svg width={1.670} height={5} viewBox="0 0 1.670 5" fill="none" style={{
              position: "absolute",
              left: 28.333,
              top: 4.333,
              width: 1.67,
              height: 5,
              opacity: 0.4,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 0 0 L 0 5 C 1.012 4.577 1.67 3.591 1.67 2.5 C 1.67 1.409 1.012 0.423 0 0"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
              position: "absolute",
              left: 2.33,
              top: 2.33,
              width: 22.666,
              height: 9,
              borderRadius: 2.5,
              backgroundColor: "rgb(255,255,255)",
            }} />
          </div>
          <span style={{
            position: "absolute",
            left: 230,
            top: -2,
            width: 42,
            height: 18,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 15,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(255,255,255)",
          }}>100%</span>
          <svg width={17.142} height={12.328} viewBox="0 0 17.142 12.328" fill="none" style={{
            position: "absolute",
            left: 25.199,
            top: 0.638,
            width: 17.142,
            height: 12.328,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 8.571 2.466 C 11.058 2.466 13.45 3.388 15.253 5.042 C 15.389 5.17 15.606 5.168 15.739 5.038 L 17.037 3.775 C 17.104 3.709 17.142 3.62 17.142 3.527 C 17.141 3.435 17.102 3.346 17.034 3.281 C 12.303 -1.094 4.839 -1.094 0.108 3.281 C 0.04 3.346 0.001 3.435 0 3.527 C -0.001 3.62 0.037 3.709 0.105 3.775 L 1.403 5.038 C 1.536 5.168 1.753 5.17 1.889 5.042 C 3.692 3.388 6.084 2.466 8.571 2.466 Z M 8.568 6.687 C 9.925 6.686 11.234 7.198 12.24 8.122 C 12.376 8.253 12.591 8.251 12.723 8.116 L 14.011 6.797 C 14.078 6.727 14.116 6.634 14.115 6.536 C 14.114 6.438 14.075 6.345 14.005 6.278 C 10.942 3.387 6.197 3.387 3.133 6.278 C 3.064 6.345 3.024 6.438 3.023 6.536 C 3.023 6.634 3.06 6.728 3.128 6.797 L 4.415 8.116 C 4.548 8.251 4.762 8.253 4.898 8.122 C 5.904 7.199 7.212 6.687 8.568 6.687 Z M 11.092 9.48 C 11.094 9.585 11.057 9.687 10.99 9.761 L 8.813 12.216 C 8.749 12.288 8.662 12.328 8.572 12.328 C 8.481 12.328 8.394 12.288 8.33 12.216 L 6.153 9.761 C 6.086 9.687 6.049 9.585 6.051 9.48 C 6.053 9.375 6.094 9.275 6.164 9.204 C 7.554 7.89 9.59 7.89 10.98 9.204 C 11.05 9.275 11.09 9.375 11.092 9.48 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <svg width={20.680} height={13} viewBox="0 0 20.680 13" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0.333,
            width: 20.68,
            height: 13,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 17.119 0.546 C 17.01 0.76 17.01 1.04 17.01 1.6 L 17.01 11.4 C 17.01 11.96 17.01 12.24 17.119 12.454 C 17.215 12.642 17.368 12.795 17.556 12.891 C 17.77 13 18.05 13 18.61 13 L 19.08 13 C 19.64 13 19.92 13 20.134 12.891 C 20.322 12.795 20.475 12.642 20.571 12.454 C 20.68 12.24 20.68 11.96 20.68 11.4 L 20.68 1.6 C 20.68 1.04 20.68 0.76 20.571 0.546 C 20.475 0.358 20.322 0.205 20.134 0.109 C 19.92 0 19.64 0 19.08 0 L 18.61 0 C 18.05 0 17.77 0 17.556 0.109 C 17.368 0.205 17.215 0.358 17.119 0.546 Z M 11.442 3.543 C 11.333 3.757 11.333 4.037 11.333 4.597 L 11.333 11.397 C 11.333 11.957 11.333 12.237 11.442 12.451 C 11.538 12.639 11.691 12.792 11.879 12.888 C 12.093 12.997 12.373 12.997 12.933 12.997 L 13.403 12.997 C 13.963 12.997 14.243 12.997 14.457 12.888 C 14.645 12.792 14.798 12.639 14.894 12.451 C 15.003 12.237 15.003 11.957 15.003 11.397 L 15.003 4.597 C 15.003 4.037 15.003 3.757 14.894 3.543 C 14.798 3.355 14.645 3.202 14.457 3.106 C 14.243 2.997 13.963 2.997 13.403 2.997 L 12.933 2.997 C 12.373 2.997 12.093 2.997 11.879 3.106 C 11.691 3.202 11.538 3.355 11.442 3.543 Z M 5.666 7.597 C 5.666 7.037 5.666 6.757 5.775 6.543 C 5.871 6.355 6.024 6.202 6.212 6.106 C 6.426 5.997 6.706 5.997 7.266 5.997 L 7.736 5.997 C 8.296 5.997 8.576 5.997 8.79 6.106 C 8.978 6.202 9.131 6.355 9.227 6.543 C 9.336 6.757 9.336 7.037 9.336 7.597 L 9.336 11.397 C 9.336 11.957 9.336 12.237 9.227 12.451 C 9.131 12.639 8.978 12.792 8.79 12.888 C 8.576 12.997 8.296 12.997 7.736 12.997 L 7.266 12.997 C 6.706 12.997 6.426 12.997 6.212 12.888 C 6.024 12.792 5.871 12.639 5.775 12.451 C 5.666 12.237 5.666 11.957 5.666 11.397 L 5.666 7.597 Z M 0.109 8.543 C 0 8.757 0 9.037 0 9.597 L 0 11.397 C 0 11.957 0 12.237 0.109 12.451 C 0.205 12.639 0.358 12.792 0.546 12.888 C 0.76 12.997 1.04 12.997 1.6 12.997 L 2.07 12.997 C 2.63 12.997 2.91 12.997 3.124 12.888 C 3.312 12.792 3.465 12.639 3.561 12.451 C 3.67 12.237 3.67 11.957 3.67 11.397 L 3.67 9.597 C 3.67 9.037 3.67 8.757 3.561 8.543 C 3.465 8.355 3.312 8.202 3.124 8.106 C 2.91 7.997 2.63 7.997 2.07 7.997 L 1.6 7.997 C 1.04 7.997 0.76 7.997 0.546 8.106 C 0.358 8.202 0.205 8.355 0.109 8.543 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 287,
          top: 560,
          width: 58,
          height: 58,
        }} />
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
}
export default ExamplesControlCenter;
