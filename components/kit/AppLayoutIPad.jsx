import { AppIconRowIPhone } from '../misc/AppIconRowIPhone.jsx';
import { AppStore } from '../misc/AppStore.jsx';
import { PageControl } from '../page-controls/PageControl.jsx';
import { StatusBarIPadDarkTrue } from './StatusBarIPadDarkTrue.jsx';

// figma node: 144:63637 _App Layout / iPad
export function AppLayoutIPad(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1194,
      height: 834,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: -855,
        top: 721,
        borderRadius: 31,
        background: "linear-gradient(rgb(13,13,13),rgb(13,13,13)), linear-gradient(rgba(191,191,191,0.44),rgba(191,191,191,0.44))",
        backdropFilter: "blur(50px)",
        display: "flex",
        flexDirection: "row",
        gap: 17,
        padding: "17px 26px 17px 26px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{ position: "relative", width: 393, flexShrink: 0 }}>{props.dockApp1 ?? <AppIconRowIPhone icons={"1"} />}</div>
        <div style={{ position: "relative", width: 393, flexShrink: 0 }}>{props.dockApp2 ?? <AppIconRowIPhone icons={"1"} />}</div>
        <div style={{ position: "relative", width: 393, flexShrink: 0 }}>{props.dockApp3 ?? <AppIconRowIPhone icons={"1"} />}</div>
        <div style={{ position: "relative", width: 393, flexShrink: 0 }}>{props.dockApp4 ?? <AppIconRowIPhone icons={"1"} />}</div>
        <div style={{ position: "relative", width: 393, flexShrink: 0 }}>{props.dockApp5 ?? <AppIconRowIPhone icons={"1"} />}</div>
        <div style={{ position: "relative", width: 393, flexShrink: 0 }}>{props.dockApp6 ?? <AppIconRowIPhone icons={"1"} />}</div>
        <div style={{ position: "relative", width: 393, flexShrink: 0 }}>{props.dockApp7 ?? <AppIconRowIPhone icons={"1"} />}</div>
      </div>
      <div style={{
        position: "absolute",
        left: 120,
        top: 74,
        display: "flex",
        flexDirection: "column",
        gap: 51,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 957,
          height: 79,
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 393,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}>
                <AppStore style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 60,
                    height: 60,
                  }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>FaceTime</span>
            </div>
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 179,
            top: 0,
            width: 393,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}>
                <AppStore style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 60,
                    height: 60,
                  }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Calendar</span>
            </div>
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 358,
            top: 0,
            width: 393,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}>
                <AppStore style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 60,
                    height: 60,
                  }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Clock</span>
            </div>
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 537,
            top: 0,
            width: 393,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}>
                <AppStore style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 60,
                    height: 60,
                  }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Home</span>
            </div>
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 717,
            top: 0,
            width: 393,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}>
                <AppStore style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 60,
                    height: 60,
                  }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Camera</span>
            </div>
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 897,
            top: 0,
            width: 393,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}>
                <AppStore style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 60,
                    height: 60,
                  }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Settings</span>
            </div>
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 957,
          height: 79,
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 393,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}>
                <AppStore style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 60,
                    height: 60,
                  }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Reminders</span>
            </div>
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 179,
            top: 0,
            width: 393,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}>
                <AppStore style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 60,
                    height: 60,
                  }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Podcasts</span>
            </div>
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 358,
            top: 0,
            width: 393,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}>
                <AppStore style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 60,
                    height: 60,
                  }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Health</span>
            </div>
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 537,
            top: 0,
            width: 393,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}>
                <AppStore style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 60,
                    height: 60,
                  }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Wallet</span>
            </div>
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 717,
            top: 0,
            width: 393,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}>
                <AppStore style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 60,
                    height: 60,
                  }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Maps</span>
            </div>
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 897,
            top: 0,
            width: 393,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}>
                <AppStore style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 60,
                    height: 60,
                  }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>App Store</span>
            </div>
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 957,
          height: 79,
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 393,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}>
                <AppStore style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 60,
                    height: 60,
                  }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Books</span>
            </div>
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 179,
            top: 0,
            width: 393,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}>
                <AppStore style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 60,
                    height: 60,
                  }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>TV</span>
            </div>
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 358,
            top: 0,
            width: 393,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}>
                <AppStore style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 60,
                    height: 60,
                  }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>News</span>
            </div>
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 537,
            top: 0,
            width: 393,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}>
                <AppStore style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 60,
                    height: 60,
                  }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>App Name</span>
            </div>
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 717,
            top: 0,
            width: 393,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}>
                <AppStore style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 60,
                    height: 60,
                  }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Name</span>
            </div>
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 897,
            top: 0,
            width: 393,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 60,
                height: 60,
                flexShrink: 0,
              }}>
                <AppStore style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 60,
                    height: 60,
                  }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Name</span>
            </div>
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
            <div style={{
              position: "relative",
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }} />
          </div>
        </div>
      </div>
      <StatusBarIPadDarkTrue style={{
          position: "absolute",
          left: -8.473,
          top: 0,
          width: 1210,
        }} />
      <PageControl
        style={{
          position: "absolute",
          left: 401,
          top: 676,
          width: 393,
          height: 44,
        }}
        platter={false}
        mode={"dark"}
        dots={"2"}
        selection={"n/a ( <7 dots )"}
      />
    </div>
  );
}
export default AppLayoutIPad;
