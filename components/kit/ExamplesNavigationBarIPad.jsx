import { ButtonBottom48PtBack } from '../kit/ButtonBottom48PtBack.jsx';
import { ButtonSymbol } from '../buttons/ButtonSymbol.jsx';
import { HomeIndicator } from '../bezels/HomeIndicator.jsx';
import { IPadProM411 } from '../examples-sidebar/IPadProM411.jsx';
import { MaterialsModeOptions } from '../materials/MaterialsModeOptions.jsx';
import { StatusBarAndMenuBar } from '../home-screen/StatusBarAndMenuBar.jsx';
import { ToolbarTopRegularSizeClass } from './ToolbarTopRegularSizeClass.jsx';

// figma node: 770:21904 Examples/Navigation Bar - iPad (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ExamplesNavigationBarIPad(_p = {}) {
  const props = { ..._p, type: _p.type ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      backgroundColor: "var(--backgrounds-grouped-primary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1210,
        height: 834,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ToolbarTopRegularSizeClass
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showSearch={false}
          style2={"document browser"}
        />
        <svg height={476} viewBox="0 0 1210 476" fill="none" style={{
          position: "relative",
          height: 476,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "0px 265px 0px 265px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
          color: "var(--backgrounds-grouped-primary)",
        }}>
          <path d={"M 0 0 L 1210 0 L 1210 476 L 0 476 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
          position: "absolute",
          left: 0,
          top: 814,
          width: 1210,
          height: 20,
        }}>
        <HomeIndicator
          style={{ transform: "scale(3.025, 1.026)", transformOrigin: "0 0" }}
          device={"iPad"}
          orientation={"landscape"}
        />
      </div>
      <StatusBarAndMenuBar
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
          height: 24,
        }}
        time={"9:41"}
        date={"Tue Apr 1"}
        type={"status bar only"}
      />
      <IPadProM411
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }}
        color={"silver"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      backgroundColor: "var(--backgrounds-grouped-primary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1210,
        height: 834,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: "0px 4px 0px 4px",
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
            width: 1210,
            height: 71,
            overflow: "hidden",
            borderTop: "1px solid rgba(0,0,0,0.3)",
            borderRight: "1px solid rgba(0,0,0,0.3)",
            borderBottom: "0.333px solid rgba(0,0,0,0.3)",
            borderLeft: "1px solid rgba(0,0,0,0.3)",
          }}>
            <MaterialsModeOptions
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 1210,
                height: 71,
              }}
              mode={"light"}
              style2={"chrome"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "9.500px 9.500px 9.500px 9.500px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.4)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.4)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.4)",
              flexShrink: 0,
            }} />
          </div>
          <div style={{
            position: "relative",
            height: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 964,
              top: 0,
              boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              padding: "11px 16px 11px 0px",
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
            }}>
              <div style={{
                position: "relative",
                backgroundColor: "rgb(255,105,105)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--accents-blue)",
                  flexShrink: 0,
                }}>􀈂</span>
              </div>
              <div style={{
                position: "relative",
                backgroundColor: "rgb(255,105,105)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--accents-blue)",
                  flexShrink: 0,
                }}>􀊫</span>
              </div>
              <div style={{
                position: "relative",
                backgroundColor: "rgb(255,105,105)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--accents-blue)",
                  flexShrink: 0,
                }}>􀈏</span>
              </div>
              <div style={{
                position: "relative",
                backgroundColor: "rgb(255,105,105)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--accents-blue)",
                  flexShrink: 0,
                }}>􀉥</span>
              </div>
              <div style={{
                position: "relative",
                backgroundColor: "rgb(255,105,105)",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 590,
                  fontSize: 17,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  letterSpacing: "-0.400px",
                  color: "var(--accents-blue)",
                  flexShrink: 0,
                }}>Done</span>
              </div>
            </div>
            <div style={{
              position: "absolute",
              left: 547.5,
              top: 0,
              boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              padding: "11px 0px 11px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
            }}>
              <ButtonSymbol
                style={{ position: "relative", flexShrink: 0 }}
                enabled={true}
              />
              <ButtonSymbol
                style={{ position: "relative", flexShrink: 0 }}
                enabled={true}
              />
              <ButtonSymbol
                style={{ position: "relative", flexShrink: 0 }}
                enabled={true}
              />
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              display: "flex",
              flexDirection: "row",
              gap: 19,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                width: 43,
                boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
                display: "flex",
                flexDirection: "row",
                gap: 16,
                padding: "11px 16px 11px 16px",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  backgroundColor: "rgb(255,105,105)",
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 17,
                    textAlign: "right",
                    whiteSpace: "nowrap",
                    lineHeight: "22px",
                    color: "var(--accents-blue)",
                    flexShrink: 0,
                  }}>􀋲</span>
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                padding: "11px 0px 11px 0px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 590,
                  fontSize: 17,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--labels-primary)",
                  flexShrink: 0,
                }}>Document Title</span>
                <div style={{
                  position: "relative",
                  width: 13.696,
                  height: 13.671,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={13.696} height={13.671} viewBox="0 0 13.696 13.671" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 13.696,
                    height: 13.671,
                    color: "rgba(60,60,67,0.18)",
                  }}>
                    <path d={"M 6.848 13.671 C 7.79 13.671 8.674 13.494 9.499 13.14 C 10.325 12.786 11.052 12.292 11.681 11.658 C 12.31 11.025 12.803 10.296 13.16 9.471 C 13.518 8.647 13.696 7.767 13.696 6.832 C 13.696 5.896 13.518 5.016 13.16 4.192 C 12.803 3.367 12.308 2.64 11.677 2.009 C 11.045 1.378 10.317 0.885 9.491 0.531 C 8.665 0.177 7.782 0 6.84 0 C 5.903 0 5.023 0.177 4.197 0.531 C 3.371 0.885 2.644 1.378 2.015 2.009 C 1.387 2.64 0.893 3.367 0.536 4.192 C 0.179 5.016 0 5.896 0 6.832 C 0 7.767 0.179 8.647 0.536 9.471 C 0.893 10.296 1.388 11.025 2.02 11.658 C 2.651 12.292 3.38 12.786 4.205 13.14 C 5.031 13.494 5.912 13.671 6.848 13.671 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <svg width={7.081} height={4.242} viewBox="0 0 7.081 4.242" fill="none" style={{
                    position: "absolute",
                    left: 3.312,
                    top: 5.113,
                    width: 7.081,
                    height: 4.242,
                    color: "rgba(60,60,67,0.6)",
                  }}>
                    <path d={"M 3.541 4.242 C 3.233 4.242 2.955 4.112 2.705 3.852 L 0.195 1.162 C 0.068 1.024 0.003 0.862 0 0.677 C -0.003 0.491 0.054 0.338 0.17 0.216 C 0.315 0.072 0.481 0 0.669 0 C 0.858 0 1.015 0.069 1.143 0.208 L 3.536 2.772 L 5.938 0.208 C 6.066 0.069 6.224 0.001 6.412 0.004 C 6.6 0.007 6.764 0.077 6.902 0.216 C 7.024 0.332 7.084 0.484 7.081 0.672 C 7.078 0.861 7.01 1.024 6.877 1.162 L 4.376 3.852 C 4.126 4.112 3.848 4.242 3.541 4.242 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg height={476} viewBox="0 0 1210 476" fill="none" style={{
          position: "relative",
          height: 476,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "0px 265px 0px 265px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
          color: "var(--backgrounds-grouped-primary)",
        }}>
          <path d={"M 0 0 L 1210 0 L 1210 476 L 0 476 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
          position: "absolute",
          left: 0,
          top: 814,
          width: 1210,
          height: 20,
        }}>
        <HomeIndicator
          style={{ transform: "scale(3.025, 1.026)", transformOrigin: "0 0" }}
          device={"iPad"}
          orientation={"landscape"}
        />
      </div>
      <StatusBarAndMenuBar
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
          height: 24,
        }}
        time={"9:41"}
        date={"Tue Apr 1"}
        type={"status bar only"}
      />
      <IPadProM411
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }}
        color={"silver"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      backgroundColor: "var(--backgrounds-grouped-primary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1210,
        height: 834,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ToolbarTopRegularSizeClass
          style={{
            position: "relative",
            height: 123,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showSearch={false}
          style2={"large title"}
        />
        <svg height={476} viewBox="0 0 1210 476" fill="none" style={{
          position: "relative",
          height: 476,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "0px 265px 0px 265px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
          color: "var(--backgrounds-grouped-primary)",
        }}>
          <path d={"M 0 0 L 1210 0 L 1210 476 L 0 476 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
          position: "absolute",
          left: 0,
          top: 814,
          width: 1210,
          height: 20,
        }}>
        <HomeIndicator
          style={{ transform: "scale(3.025, 1.026)", transformOrigin: "0 0" }}
          device={"iPad"}
          orientation={"landscape"}
        />
      </div>
      <StatusBarAndMenuBar
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
          height: 24,
        }}
        time={"9:41"}
        date={"Tue Apr 1"}
        type={"status bar only"}
      />
      <IPadProM411
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }}
        color={"silver"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      backgroundColor: "var(--backgrounds-grouped-primary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1210,
        height: 834,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 71,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: "0px 4px 0px 4px",
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
            width: 1210,
            height: 71,
            overflow: "hidden",
            borderTop: "1px solid rgba(0,0,0,0.3)",
            borderRight: "1px solid rgba(0,0,0,0.3)",
            borderBottom: "0.333px solid rgba(0,0,0,0.3)",
            borderLeft: "1px solid rgba(0,0,0,0.3)",
          }}>
            <MaterialsModeOptions
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 1210,
                height: 71,
              }}
              mode={"light"}
              style2={"chrome"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            padding: "9.500px 9.500px 9.500px 9.500px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.4)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.4)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.4)",
              flexShrink: 0,
            }} />
          </div>
          <div style={{
            position: "relative",
            height: 38,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "absolute",
              left: 16,
              top: 7,
              width: 361,
              height: 30,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "18px",
              color: "rgba(255,45,85,0.2)",
            }}>This is a prompt message.</span>
          </div>
          <div style={{
            position: "relative",
            height: 44,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <ButtonBottom48PtBack style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: 48,
              }} />
            <span style={{
              position: "absolute",
              left: 583,
              top: 11,
              width: 36,
              height: 22,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 17,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-primary)",
            }}>Title</span>
            <div style={{
              position: "absolute",
              left: 1038,
              top: 0,
              boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              padding: "11px 16px 11px 0px",
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
            }}>
              <div style={{
                position: "relative",
                backgroundColor: "rgb(255,105,105)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "rgba(60,60,67,0.18)",
                  flexShrink: 0,
                }}>􀓔</span>
              </div>
              <div style={{
                position: "relative",
                backgroundColor: "rgb(255,105,105)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--accents-blue)",
                  flexShrink: 0,
                }}>􀓔</span>
              </div>
              <div style={{
                position: "relative",
                backgroundColor: "rgb(255,105,105)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--accents-blue)",
                  flexShrink: 0,
                }}>􀓔</span>
              </div>
              <div style={{
                position: "relative",
                backgroundColor: "rgb(255,105,105)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  lineHeight: "22px",
                  color: "var(--accents-blue)",
                  flexShrink: 0,
                }}>􀓔</span>
              </div>
            </div>
          </div>
        </div>
        <svg height={476} viewBox="0 0 1210 476" fill="none" style={{
          position: "relative",
          height: 476,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "0px 265px 0px 265px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
          color: "var(--backgrounds-grouped-primary)",
        }}>
          <path d={"M 0 0 L 1210 0 L 1210 476 L 0 476 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
          position: "absolute",
          left: 0,
          top: 814,
          width: 1210,
          height: 20,
        }}>
        <HomeIndicator
          style={{ transform: "scale(3.025, 1.026)", transformOrigin: "0 0" }}
          device={"iPad"}
          orientation={"landscape"}
        />
      </div>
      <StatusBarAndMenuBar
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1208,
          height: 24,
        }}
        time={"9:41"}
        date={"Tue Apr 1"}
        type={"status bar only"}
      />
      <IPadProM411
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }}
        color={"silver"}
      />
    </div>
  );
  const __impls = {
    // figma: Type=Document Browser
    "type=document browser": __body0,
    // figma: Type=Document
    "type=document": __body1,
    // figma: Type=Large Title
    "type=large title": __body2,
    // figma: Type=Default
    "type=default": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default ExamplesNavigationBarIPad;
