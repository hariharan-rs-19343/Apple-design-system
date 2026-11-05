import { MacDesktopWallpaper } from './MacDesktopWallpaper.jsx';
import { MacDockIcon } from './MacDockIcon.jsx';
import { MacMenuBarAppNameDark } from './MacMenuBarAppNameDark.jsx';
import { MacMenuBarAppNameLight } from './MacMenuBarAppNameLight.jsx';
import { MacMenuBarAppleLogoDark } from './MacMenuBarAppleLogoDark.jsx';
import { MacMenuBarAppleLogoLight } from './MacMenuBarAppleLogoLight.jsx';
import { MacMenuBarMenuItemDark } from './MacMenuBarMenuItemDark.jsx';
import { MacMenuBarMenuItemLight } from './MacMenuBarMenuItemLight.jsx';
import { MacSystemAppIcon } from './MacSystemAppIcon.jsx';

// figma node: 121:13042 Desktop Templates
export function MacDesktopTemplates(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 4180,
      height: 3280,
      borderRadius: 2,
      backgroundColor: "var(--mac-section-fill)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 50,
        top: 2210,
        width: 3100,
        height: 1020,
        overflow: "hidden",
        borderRadius: 5,
      }}>
        <div style={{
          position: "absolute",
          left: 1570,
          top: 20,
          width: 1512,
          height: 982,
        }} />
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 1512,
          height: 982,
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: 680,
        top: 2040,
        width: 90,
        height: 108,
        overflow: "hidden",
        borderRadius: 5,
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "4px 11px 4px 11px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <svg width={59} height={25} viewBox="0 0 59 25" fill="none" style={{
            position: "absolute",
            left: -4,
            top: -1,
            width: 59,
            height: 25,
            overflow: "hidden",
            borderRadius: 100,
            backdropFilter: "blur(60px)",
            color: "rgba(255,255,255,0.08)",
          }}>
            <path d={"M 0 12.5 C 0 5.596 5.596 0 12.5 0 L 46.5 0 C 53.404 0 59 5.596 59 12.5 L 59 12.5 C 59 19.404 53.404 25 46.5 25 L 12.5 25 C 5.596 25 0 19.404 0 12.5 L 0 12.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            filter: "drop-shadow(0px 1px 6px rgb(204,204,204))",
          }}>Item</span>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 64,
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "4px 11px 4px 11px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            filter: "drop-shadow(0px 1px 6px rgb(204,204,204))",
          }}>Item</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 570,
        top: 2040,
        width: 90,
        height: 108,
        overflow: "hidden",
        borderRadius: 5,
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "4px 11px 4px 11px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <svg width={59} height={25} viewBox="0 0 59 25" fill="none" style={{
            position: "absolute",
            left: -4,
            top: -1,
            width: 59,
            height: 25,
            overflow: "hidden",
            borderRadius: 100,
            backdropFilter: "blur(60px)",
            color: "rgba(0,0,0,0.08)",
          }}>
            <path d={"M 0 12.5 C 0 5.596 5.596 0 12.5 0 L 46.5 0 C 53.404 0 59 5.596 59 12.5 L 59 12.5 C 59 19.404 53.404 25 46.5 25 L 12.5 25 C 5.596 25 0 19.404 0 12.5 L 0 12.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Item</span>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 64,
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "4px 11px 4px 11px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Item</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 420,
        top: 2040,
        width: 114,
        height: 108,
        overflow: "hidden",
        borderRadius: 5,
      }}>
        <div style={{
          position: "absolute",
          left: 12,
          top: 20,
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "4px 11px 4px 11px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <svg width={98} height={25} viewBox="0 0 98 25" fill="none" style={{
            position: "absolute",
            left: -4,
            top: -1,
            width: 98,
            height: 25,
            overflow: "hidden",
            borderRadius: 100,
            backdropFilter: "blur(60px)",
            color: "rgba(255,255,255,0.08)",
          }}>
            <path d={"M 0 12.5 C 0 5.596 5.596 0 12.5 0 L 85.5 0 C 92.404 0 98 5.596 98 12.5 L 98 12.5 C 98 19.404 92.404 25 85.5 25 L 12.5 25 C 5.596 25 0 19.404 0 12.5 L 0 12.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            filter: "drop-shadow(0px 1px 6px rgb(204,204,204))",
          }}>App Name</span>
        </div>
        <div style={{
          position: "absolute",
          left: 12,
          top: 64,
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "4px 11px 4px 11px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            filter: "drop-shadow(0px 1px 6px rgb(204,204,204))",
          }}>App Name</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 290,
        top: 2040,
        width: 114,
        height: 108,
        overflow: "hidden",
        borderRadius: 5,
      }}>
        <div style={{
          position: "absolute",
          left: 12,
          top: 20,
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "4px 11px 4px 11px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <svg width={98} height={25} viewBox="0 0 98 25" fill="none" style={{
            position: "absolute",
            left: -4,
            top: -1,
            width: 98,
            height: 25,
            overflow: "hidden",
            borderRadius: 100,
            backdropFilter: "blur(60px)",
            color: "rgba(0,0,0,0.08)",
          }}>
            <path d={"M 0 12.5 C 0 5.596 5.596 0 12.5 0 L 85.5 0 C 92.404 0 98 5.596 98 12.5 L 98 12.5 C 98 19.404 92.404 25 85.5 25 L 12.5 25 C 5.596 25 0 19.404 0 12.5 L 0 12.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>App Name</span>
        </div>
        <div style={{
          position: "absolute",
          left: 12,
          top: 64,
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "4px 11px 4px 11px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>App Name</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 50,
        top: 2040,
        width: 80,
        height: 110,
        borderRadius: 5,
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 33,
          height: 24,
          borderRadius: 4,
        }}>
          <svg width={41} height={25} viewBox="0 0 41 25" fill="none" style={{
            position: "absolute",
            left: -4,
            top: -1,
            width: 41,
            height: 25,
            overflow: "hidden",
            borderRadius: 100,
            backdropFilter: "blur(60px)",
            color: "rgba(0,0,0,0.08)",
          }}>
            <path d={"M 0 12.5 C 0 5.596 5.596 0 12.5 0 L 28.5 0 C 35.404 0 41 5.596 41 12.5 L 41 12.5 C 41 19.404 35.404 25 28.5 25 L 12.5 25 C 5.596 25 0 19.404 0 12.5 L 0 12.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "absolute",
            left: 9,
            top: 0.5,
            width: 15,
            height: 20,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16.299999237060547,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(0,0,0)",
          }}>􀣺</span>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 64,
          width: 33,
          height: 24,
          borderRadius: 4,
        }}>
          <span style={{
            position: "absolute",
            left: 9,
            top: 0.5,
            width: 15,
            height: 20,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16.299999237060547,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(0,0,0)",
          }}>􀣺</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 50,
        top: 1710,
        width: 1040,
        height: 208,
        overflow: "hidden",
        borderRadius: 5,
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 1008,
          display: "flex",
          flexDirection: "row",
          padding: "5px 10px 5px 10px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <MacMenuBarAppleLogoDark
              style={{
                position: "relative",
                width: 33,
                height: 24,
                flexShrink: 0,
              }}
              property1={"apple logo"}
              property2={"off"}
              property3={"dark"}
            />
            <MacMenuBarAppNameDark
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemDark
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemDark
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemDark
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemDark
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemDark
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemDark
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemDark
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemDark
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemDark
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemDark
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 4,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "4px 11px 4px 11px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 590,
                fontSize: 13.5,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgba(255,255,255,0.85)",
                flexShrink: 0,
              }}>􀙇</span>
            </div>
            <div style={{
              position: "relative",
              borderRadius: 4,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "4px 11px 4px 11px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 590,
                fontSize: 13.5,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgba(255,255,255,0.85)",
                flexShrink: 0,
              }}>􀊫</span>
            </div>
            <div style={{
              position: "relative",
              borderRadius: 4,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "4px 11px 4px 11px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 590,
                fontSize: 13.5,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgba(255,255,255,0.85)",
                flexShrink: 0,
              }}>􀉭</span>
            </div>
            <div style={{
              position: "relative",
              borderRadius: 4,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "4px 11px 4px 11px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 590,
                fontSize: 13.5,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgba(255,255,255,0.85)",
                flexShrink: 0,
              }}>􀜊</span>
            </div>
            <MacMenuBarMenuItemDark
              style={{ position: "relative", width: 155, flexShrink: 0 }}
              menuItem={"Mon Jun 10  9:41 AM"}
              selected={false}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1008,
            height: 72,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 1008,
              height: 72,
              clipPath: "inset(0px 0px 0px 0px)",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 1008,
                height: 72,
                backdropFilter: "blur(60px)",
              }} />
              <svg width={1008} height={72} viewBox="0 0 1008 72" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 1008,
                height: 72,
                color: "rgba(0,0,0,0.12)",
              }}>
                <path d={"M 0 0 L 1008 0 L 1008 72 L 0 72 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 120,
          width: 1008,
          display: "flex",
          flexDirection: "row",
          padding: "5px 10px 5px 10px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <MacMenuBarAppleLogoLight
              style={{
                position: "relative",
                width: 33,
                height: 24,
                flexShrink: 0,
              }}
              selected={"off"}
              mode={"light"}
            />
            <MacMenuBarAppNameLight
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemLight
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemLight
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemLight
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemLight
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemLight
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemLight
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemLight
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemLight
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemLight
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
            <MacMenuBarMenuItemLight
              style={{ position: "relative", flexShrink: 0 }}
              selected={false}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <MacMenuBarMenuItemLight
              style={{ position: "relative", width: 40, flexShrink: 0 }}
              menuItem={"􀙇"}
              selected={false}
            />
            <MacMenuBarMenuItemLight
              style={{ position: "relative", width: 38, flexShrink: 0 }}
              menuItem={"􀊫"}
              selected={false}
            />
            <MacMenuBarMenuItemLight
              style={{ position: "relative", width: 38, flexShrink: 0 }}
              menuItem={"􀉭"}
              selected={false}
            />
            <MacMenuBarMenuItemLight
              style={{ position: "relative", width: 38, flexShrink: 0 }}
              menuItem={"􀜊"}
              selected={false}
            />
            <MacMenuBarMenuItemLight
              style={{ position: "relative", width: 155, flexShrink: 0 }}
              menuItem={"Mon Jun 10  9:41 AM"}
              selected={false}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1008,
            height: 72,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 1008,
              height: 72,
              clipPath: "inset(0px 0px 0px 0px)",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 1008,
                height: 72,
                backdropFilter: "blur(60px)",
              }} />
              <svg width={1008} height={72} viewBox="0 0 1008 72" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 1008,
                height: 72,
                color: "rgba(255,255,255,0.15)",
              }}>
                <path d={"M 0 0 L 1008 0 L 1008 72 L 0 72 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 50,
        top: 1180,
        width: 36,
        height: 36,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <MacSystemAppIcon
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          appIcon={"messages"}
          appIconMode={"default"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 50,
        top: 50,
        width: 3110,
        height: 1030,
        borderRadius: 2,
      }}>
        <div style={{
          position: "absolute",
          left: 1570,
          top: 20,
          width: 1512,
          height: 982,
        }}>
          <MacDesktopWallpaper
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 1512,
              height: 982,
            }}
            colorMode={"dark"}
          />
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1512,
            display: "flex",
            flexDirection: "row",
            padding: "5px 10px 5px 10px",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <MacMenuBarAppleLogoDark
                style={{
                  position: "relative",
                  width: 33,
                  height: 24,
                  flexShrink: 0,
                }}
                property1={"apple logo"}
                property2={"off"}
                property3={"dark"}
              />
              <div style={{
                position: "relative",
                borderRadius: 4,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "4px 11px 4px 11px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                  filter: "drop-shadow(0px 1px 6px rgb(204,204,204))",
                }}>Finder</span>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 4,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "4px 11px 4px 11px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 590,
                  fontSize: 13,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                  filter: "drop-shadow(0px 1px 6px rgb(204,204,204))",
                }}>File</span>
              </div>
              <MacMenuBarMenuItemDark
                style={{ position: "relative", flexShrink: 0 }}
                selected={false}
              />
              <MacMenuBarMenuItemDark
                style={{ position: "relative", flexShrink: 0 }}
                selected={false}
              />
              <MacMenuBarMenuItemDark
                style={{ position: "relative", flexShrink: 0 }}
                selected={false}
              />
              <MacMenuBarMenuItemDark
                style={{ position: "relative", flexShrink: 0 }}
                selected={false}
              />
              <MacMenuBarMenuItemDark
                style={{ position: "relative", flexShrink: 0 }}
                selected={false}
              />
              <MacMenuBarMenuItemDark
                style={{ position: "relative", flexShrink: 0 }}
                selected={false}
              />
              <MacMenuBarMenuItemDark
                style={{ position: "relative", flexShrink: 0 }}
                selected={false}
              />
              <MacMenuBarMenuItemDark
                style={{ position: "relative", flexShrink: 0 }}
                selected={false}
              />
              <MacMenuBarMenuItemDark
                style={{ position: "relative", flexShrink: 0 }}
                selected={false}
              />
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                borderRadius: 4,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "4px 11px 4px 11px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 590,
                  fontSize: 13.5,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgba(255,255,255,0.85)",
                  flexShrink: 0,
                }}>􀙇</span>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 4,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "4px 11px 4px 11px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 590,
                  fontSize: 13.5,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgba(255,255,255,0.85)",
                  flexShrink: 0,
                }}>􀊫</span>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 4,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "4px 11px 4px 11px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 590,
                  fontSize: 13.5,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgba(255,255,255,0.85)",
                  flexShrink: 0,
                }}>􀉭</span>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 4,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "4px 11px 4px 11px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 590,
                  fontSize: 13.5,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgba(255,255,255,0.85)",
                  flexShrink: 0,
                }}>􀜊</span>
              </div>
              <MacMenuBarMenuItemDark
                style={{ position: "relative", width: 155, flexShrink: 0 }}
                menuItem={"Mon Jun 10  9:41 AM"}
                selected={false}
              />
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 1512,
              height: 72,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 1512,
                height: 72,
                clipPath: "inset(0px 0px 0px 0px)",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 1512,
                  height: 72,
                  backdropFilter: "blur(60px)",
                }} />
                <svg width={1512} height={72} viewBox="0 0 1512 72" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 1512,
                  height: 72,
                  color: "rgba(0,0,0,0.12)",
                }}>
                  <path d={"M 0 0 L 1512 0 L 1512 72 L 0 72 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 315,
            top: 915,
            display: "flex",
            flexDirection: "row",
            gap: 9,
            padding: "10px 8px 11px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
          }}>
            <svg width={882} height={62} viewBox="0 0 882 62" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 882,
              height: 62,
              borderRadius: 15,
              backdropFilter: "blur(30px)",
              filter: "drop-shadow(0px 0px 1px rgba(0,0,0,0.2))",
              color: "rgba(74,74,74,0.39)",
            }}>
              <path d={"M 0 24 C 0 15.599 0 11.399 1.635 8.19 C 3.073 5.368 5.368 3.073 8.19 1.635 C 11.399 0 15.599 0 24 0 L 858 0 C 866.401 0 870.601 0 873.81 1.635 C 876.632 3.073 878.927 5.368 880.365 8.19 C 882 11.399 882 15.599 882 24 L 882 38 C 882 46.401 882 50.601 880.365 53.81 C 878.927 56.632 876.632 58.927 873.81 60.365 C 870.601 62 866.401 62 858 62 L 24 62 C 15.599 62 11.399 62 8.19 60.365 C 5.368 58.927 3.073 56.632 1.635 53.81 C 0 50.601 0 46.401 0 38 L 0 24 Z"} fill="rgba(74,74,74,0.39)" fillRule="nonzero" />
              <path d={"M 8.19 60.365 L 8.644 59.474 L 8.19 60.365 Z M 1.635 53.81 L 0.744 54.264 L 1.635 53.81 Z M 880.365 53.81 L 881.256 54.264 L 880.365 53.81 Z M 873.81 60.365 L 873.356 59.474 L 873.81 60.365 Z M 873.81 1.635 L 874.264 0.744 L 873.81 1.635 Z M 880.365 8.19 L 879.474 8.644 L 880.365 8.19 Z M 24 0 L 24 1 L 858 1 L 858 0 L 858 -1 L 24 -1 L 24 0 Z M 882 24 L 881 24 L 881 38 L 882 38 L 883 38 L 883 24 L 882 24 Z M 858 62 L 858 61 L 24 61 L 24 62 L 24 63 L 858 63 L 858 62 Z M 0 38 L 1 38 L 1 24 L 0 24 L -1 24 L -1 38 L 0 38 Z M 24 62 L 24 61 C 19.783 61 16.681 60.999 14.229 60.799 C 11.79 60.6 10.084 60.208 8.644 59.474 L 8.19 60.365 L 7.736 61.256 C 9.505 62.157 11.503 62.583 14.067 62.792 C 16.618 63.001 19.816 63 24 63 L 24 62 Z M 0 38 L -1 38 C -1 42.184 -1.001 45.382 -0.792 47.933 C -0.583 50.497 -0.157 52.495 0.744 54.264 L 1.635 53.81 L 2.526 53.356 C 1.792 51.916 1.4 50.21 1.201 47.771 C 1.001 45.319 1 42.217 1 38 L 0 38 Z M 8.19 60.365 L 8.644 59.474 C 6.01 58.132 3.868 55.99 2.526 53.356 L 1.635 53.81 L 0.744 54.264 C 2.278 57.274 4.726 59.722 7.736 61.256 L 8.19 60.365 Z M 882 38 L 881 38 C 881 42.217 880.999 45.319 880.799 47.771 C 880.6 50.21 880.208 51.916 879.474 53.356 L 880.365 53.81 L 881.256 54.264 C 882.157 52.495 882.583 50.497 882.792 47.933 C 883.001 45.382 883 42.184 883 38 L 882 38 Z M 858 62 L 858 63 C 862.184 63 865.382 63.001 867.933 62.792 C 870.497 62.583 872.495 62.157 874.264 61.256 L 873.81 60.365 L 873.356 59.474 C 871.916 60.208 870.21 60.6 867.771 60.799 C 865.319 60.999 862.217 61 858 61 L 858 62 Z M 880.365 53.81 L 879.474 53.356 C 878.132 55.99 875.99 58.132 873.356 59.474 L 873.81 60.365 L 874.264 61.256 C 877.274 59.722 879.722 57.274 881.256 54.264 L 880.365 53.81 Z M 858 0 L 858 1 C 862.217 1 865.319 1.001 867.771 1.201 C 870.21 1.4 871.916 1.792 873.356 2.526 L 873.81 1.635 L 874.264 0.744 C 872.495 -0.157 870.497 -0.583 867.933 -0.792 C 865.382 -1.001 862.184 -1 858 -1 L 858 0 Z M 882 24 L 883 24 C 883 19.816 883.001 16.618 882.792 14.067 C 882.583 11.503 882.157 9.505 881.256 7.736 L 880.365 8.19 L 879.474 8.644 C 880.208 10.084 880.6 11.79 880.799 14.229 C 880.999 16.681 881 19.783 881 24 L 882 24 Z M 873.81 1.635 L 873.356 2.526 C 875.99 3.868 878.132 6.01 879.474 8.644 L 880.365 8.19 L 881.256 7.736 C 879.722 4.726 877.274 2.278 874.264 0.744 L 873.81 1.635 Z M 24 0 L 24 -1 C 19.816 -1 16.618 -1.001 14.067 -0.792 C 11.503 -0.583 9.505 -0.157 7.736 0.744 L 8.19 1.635 L 8.644 2.526 C 10.084 1.792 11.79 1.4 14.229 1.201 C 16.681 1.001 19.783 1 24 1 L 24 0 Z M 0 24 L 1 24 C 1 19.783 1.001 16.681 1.201 14.229 C 1.4 11.79 1.792 10.084 2.526 8.644 L 1.635 8.19 L 0.744 7.736 C -0.157 9.505 -0.583 11.503 -0.792 14.067 C -1.001 16.618 -1 19.816 -1 24 L 0 24 Z M 8.19 1.635 L 7.736 0.744 C 4.726 2.278 2.278 4.726 0.744 7.736 L 1.635 8.19 L 2.526 8.644 C 3.868 6.01 6.01 3.868 8.644 2.526 L 8.19 1.635 Z"} fill="rgb(26,26,26)" fillRule="nonzero" />
            </svg>
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"finder"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"launch pad"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"safari"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"messages"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"mail"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"maps"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"photos"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"facetime"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"calendar"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"contacts"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"reminders"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"notes"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"freeform"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"apple tv"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"music"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"news"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"app store"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              padding: "0px 5px 0px 5px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 1,
                height: 41,
                backgroundColor: "rgb(64,64,66)",
                flexShrink: 0,
              }} />
            </div>
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"folder icon"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"trash empty"} appIconMode={"dark"} style={{ width: 36, height: 36 }} />}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 1512,
          height: 982,
        }}>
          <MacDesktopWallpaper
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 1512,
              height: 982,
            }}
            colorMode={"light"}
          />
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1512,
            display: "flex",
            flexDirection: "row",
            padding: "5px 10px 5px 10px",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <MacMenuBarAppleLogoLight
                style={{
                  position: "relative",
                  width: 33,
                  height: 24,
                  flexShrink: 0,
                }}
                selected={"off"}
                mode={"light"}
              />
              <div style={{
                position: "relative",
                borderRadius: 4,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "4px 11px 4px 11px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "rgb(0,0,0)",
                  flexShrink: 0,
                }}>Finder</span>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 4,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "4px 11px 4px 11px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 590,
                  fontSize: 13,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "rgb(0,0,0)",
                  flexShrink: 0,
                }}>File</span>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 4,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "4px 11px 4px 11px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 590,
                  fontSize: 13,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "rgb(0,0,0)",
                  flexShrink: 0,
                }}>Edit</span>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 4,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "4px 11px 4px 11px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 590,
                  fontSize: 13,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "rgb(0,0,0)",
                  flexShrink: 0,
                }}>View</span>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 4,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "4px 11px 4px 11px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 590,
                  fontSize: 13,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "rgb(0,0,0)",
                  flexShrink: 0,
                }}>Go</span>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 4,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "4px 11px 4px 11px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 590,
                  fontSize: 13,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "rgb(0,0,0)",
                  flexShrink: 0,
                }}>Window</span>
              </div>
              <div style={{
                position: "relative",
                borderRadius: 4,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "4px 11px 4px 11px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 590,
                  fontSize: 13,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "rgb(0,0,0)",
                  flexShrink: 0,
                }}>Help</span>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <MacMenuBarMenuItemLight
                style={{ position: "relative", width: 40, flexShrink: 0 }}
                menuItem={"􀙇"}
                selected={false}
              />
              <MacMenuBarMenuItemLight
                style={{ position: "relative", width: 38, flexShrink: 0 }}
                menuItem={"􀊫"}
                selected={false}
              />
              <MacMenuBarMenuItemLight
                style={{ position: "relative", width: 38, flexShrink: 0 }}
                menuItem={"􀉭"}
                selected={false}
              />
              <MacMenuBarMenuItemLight
                style={{ position: "relative", width: 38, flexShrink: 0 }}
                menuItem={"􀜊"}
                selected={false}
              />
              <MacMenuBarMenuItemLight
                style={{ position: "relative", width: 155, flexShrink: 0 }}
                menuItem={"Mon Jun 10  9:41 AM"}
                selected={false}
              />
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 1512,
              height: 72,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 1512,
                height: 72,
                clipPath: "inset(0px 0px 0px 0px)",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 1512,
                  height: 72,
                  backdropFilter: "blur(60px)",
                }} />
                <svg width={1512} height={72} viewBox="0 0 1512 72" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 1512,
                  height: 72,
                  color: "rgba(255,255,255,0.15)",
                }}>
                  <path d={"M 0 0 L 1512 0 L 1512 72 L 0 72 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 315,
            top: 915,
            display: "flex",
            flexDirection: "row",
            gap: 9,
            padding: "10px 8px 11px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
          }}>
            <svg width={882} height={62} viewBox="0 0 882 62" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 882,
              height: 62,
              borderRadius: 15,
              backdropFilter: "blur(135.914px)",
              filter: "drop-shadow(0px 0px 6px rgba(0,0,0,0.15))",
              color: "rgba(246,246,246,0.36)",
            }}>
              <path d={"M 0 24 C 0 15.599 0 11.399 1.635 8.19 C 3.073 5.368 5.368 3.073 8.19 1.635 C 11.399 0 15.599 0 24 0 L 858 0 C 866.401 0 870.601 0 873.81 1.635 C 876.632 3.073 878.927 5.368 880.365 8.19 C 882 11.399 882 15.599 882 24 L 882 38 C 882 46.401 882 50.601 880.365 53.81 C 878.927 56.632 876.632 58.927 873.81 60.365 C 870.601 62 866.401 62 858 62 L 24 62 C 15.599 62 11.399 62 8.19 60.365 C 5.368 58.927 3.073 56.632 1.635 53.81 C 0 50.601 0 46.401 0 38 L 0 24 Z"} fill="rgba(246,246,246,0.36)" fillRule="nonzero" />
              <path d={"M 8.19 60.365 L 8.644 59.474 L 8.19 60.365 Z M 1.635 53.81 L 0.744 54.264 L 1.635 53.81 Z M 880.365 53.81 L 881.256 54.264 L 880.365 53.81 Z M 873.81 60.365 L 873.356 59.474 L 873.81 60.365 Z M 873.81 1.635 L 874.264 0.744 L 873.81 1.635 Z M 880.365 8.19 L 879.474 8.644 L 880.365 8.19 Z M 24 0 L 24 1 L 858 1 L 858 0 L 858 -1 L 24 -1 L 24 0 Z M 882 24 L 881 24 L 881 38 L 882 38 L 883 38 L 883 24 L 882 24 Z M 858 62 L 858 61 L 24 61 L 24 62 L 24 63 L 858 63 L 858 62 Z M 0 38 L 1 38 L 1 24 L 0 24 L -1 24 L -1 38 L 0 38 Z M 24 62 L 24 61 C 19.783 61 16.681 60.999 14.229 60.799 C 11.79 60.6 10.084 60.208 8.644 59.474 L 8.19 60.365 L 7.736 61.256 C 9.505 62.157 11.503 62.583 14.067 62.792 C 16.618 63.001 19.816 63 24 63 L 24 62 Z M 0 38 L -1 38 C -1 42.184 -1.001 45.382 -0.792 47.933 C -0.583 50.497 -0.157 52.495 0.744 54.264 L 1.635 53.81 L 2.526 53.356 C 1.792 51.916 1.4 50.21 1.201 47.771 C 1.001 45.319 1 42.217 1 38 L 0 38 Z M 8.19 60.365 L 8.644 59.474 C 6.01 58.132 3.868 55.99 2.526 53.356 L 1.635 53.81 L 0.744 54.264 C 2.278 57.274 4.726 59.722 7.736 61.256 L 8.19 60.365 Z M 882 38 L 881 38 C 881 42.217 880.999 45.319 880.799 47.771 C 880.6 50.21 880.208 51.916 879.474 53.356 L 880.365 53.81 L 881.256 54.264 C 882.157 52.495 882.583 50.497 882.792 47.933 C 883.001 45.382 883 42.184 883 38 L 882 38 Z M 858 62 L 858 63 C 862.184 63 865.382 63.001 867.933 62.792 C 870.497 62.583 872.495 62.157 874.264 61.256 L 873.81 60.365 L 873.356 59.474 C 871.916 60.208 870.21 60.6 867.771 60.799 C 865.319 60.999 862.217 61 858 61 L 858 62 Z M 880.365 53.81 L 879.474 53.356 C 878.132 55.99 875.99 58.132 873.356 59.474 L 873.81 60.365 L 874.264 61.256 C 877.274 59.722 879.722 57.274 881.256 54.264 L 880.365 53.81 Z M 858 0 L 858 1 C 862.217 1 865.319 1.001 867.771 1.201 C 870.21 1.4 871.916 1.792 873.356 2.526 L 873.81 1.635 L 874.264 0.744 C 872.495 -0.157 870.497 -0.583 867.933 -0.792 C 865.382 -1.001 862.184 -1 858 -1 L 858 0 Z M 882 24 L 883 24 C 883 19.816 883.001 16.618 882.792 14.067 C 882.583 11.503 882.157 9.505 881.256 7.736 L 880.365 8.19 L 879.474 8.644 C 880.208 10.084 880.6 11.79 880.799 14.229 C 880.999 16.681 881 19.783 881 24 L 882 24 Z M 873.81 1.635 L 873.356 2.526 C 875.99 3.868 878.132 6.01 879.474 8.644 L 880.365 8.19 L 881.256 7.736 C 879.722 4.726 877.274 2.278 874.264 0.744 L 873.81 1.635 Z M 24 0 L 24 -1 C 19.816 -1 16.618 -1.001 14.067 -0.792 C 11.503 -0.583 9.505 -0.157 7.736 0.744 L 8.19 1.635 L 8.644 2.526 C 10.084 1.792 11.79 1.4 14.229 1.201 C 16.681 1.001 19.783 1 24 1 L 24 0 Z M 0 24 L 1 24 C 1 19.783 1.001 16.681 1.201 14.229 C 1.4 11.79 1.792 10.084 2.526 8.644 L 1.635 8.19 L 0.744 7.736 C -0.157 9.505 -0.583 11.503 -0.792 14.067 C -1.001 16.618 -1 19.816 -1 24 L 0 24 Z M 8.19 1.635 L 7.736 0.744 C 4.726 2.278 2.278 4.726 0.744 7.736 L 1.635 8.19 L 2.526 8.644 C 3.868 6.01 6.01 3.868 8.644 2.526 L 8.19 1.635 Z"} fill="rgba(26,26,26,0.46)" fillRule="nonzero" />
            </svg>
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"finder"} appIconMode={"default"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"launch pad"} appIconMode={"default"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"safari"} appIconMode={"default"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }} />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"mail"} appIconMode={"default"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"maps"} appIconMode={"default"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"photos"} appIconMode={"default"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"facetime"} appIconMode={"default"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"calendar"} appIconMode={"default"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"contacts"} appIconMode={"default"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"reminders"} appIconMode={"default"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"notes"} appIconMode={"default"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"freeform"} appIconMode={"default"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"apple tv"} appIconMode={"default"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"music"} appIconMode={"default"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"news"} appIconMode={"default"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"app store"} appIconMode={"default"} style={{ width: 36, height: 36 }} />}
            />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              padding: "0px 5px 0px 5px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 1,
                height: 41,
                backgroundColor: "rgba(60,60,67,0.29)",
                flexShrink: 0,
              }} />
            </div>
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"folder icon"} appIconMode={"default"} style={{ width: 36, height: 36 }} />}
            />
            <MacDockIcon
              style={{
                position: "relative",
                width: 36,
                height: 36,
                flexShrink: 0,
              }}
              icon1={<MacSystemAppIcon appIcon={"trash empty"} appIconMode={"default"} style={{ width: 36, height: 36 }} />}
            />
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 50,
        top: 1285,
        width: 4080,
        height: 300,
        overflow: "hidden",
        borderRadius: 5,
      }}>
        <div className="fig-asset-74432c48ed8857e7" style={{
          position: "absolute",
          left: 3980,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-929717e4b5904b26" style={{
          position: "absolute",
          left: 3980,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-c08e547f0d4ba65a" style={{
          position: "absolute",
          left: 3890,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-97a7a52175b51d1c" style={{
          position: "absolute",
          left: 3890,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-caae28c810b26848" style={{
          position: "absolute",
          left: 3800,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-5166c709f7c387be" style={{
          position: "absolute",
          left: 3800,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-33491741d89a81ca" style={{
          position: "absolute",
          left: 3710,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-895ce1e4d2e8bf9b" style={{
          position: "absolute",
          left: 3710,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-eca3fd11d1ba5c0f" style={{
          position: "absolute",
          left: 3620,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-a2c8ff861312b687" style={{
          position: "absolute",
          left: 3620,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-0d21448402c02cf4" style={{
          position: "absolute",
          left: 3530,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-1d203d485553e265" style={{
          position: "absolute",
          left: 3530,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-8db0f4b1d4fbc586" style={{
          position: "absolute",
          left: 3440,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-250021762a203b1e" style={{
          position: "absolute",
          left: 3440,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-77d1cfb1b8b7793d" style={{
          position: "absolute",
          left: 3350,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-68b048489a6aae16" style={{
          position: "absolute",
          left: 3350,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-d7a3de009cfdb57b" style={{
          position: "absolute",
          left: 3260,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-48b0cc303aeac324" style={{
          position: "absolute",
          left: 3260,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-27ea22257bc7f2c0" style={{
          position: "absolute",
          left: 3170,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-26071006aff38525" style={{
          position: "absolute",
          left: 3170,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-7c87a231143d3ffc" style={{
          position: "absolute",
          left: 3080,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-2d5834ece4d7544d" style={{
          position: "absolute",
          left: 3080,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-af5cad3b8c5bee7f" style={{
          position: "absolute",
          left: 2990,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-7145ae589121119d" style={{
          position: "absolute",
          left: 2990,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-d39fedeeda852a2e" style={{
          position: "absolute",
          left: 2900,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-c2ef1e5a7930f962" style={{
          position: "absolute",
          left: 2900,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-3cdea7800e9f6452" style={{
          position: "absolute",
          left: 2810,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-9c8146ad917f4f35" style={{
          position: "absolute",
          left: 2810,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-576048c6139513d7" style={{
          position: "absolute",
          left: 2720,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-dbba28abb122c262" style={{
          position: "absolute",
          left: 2720,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-caed04e507d27a3f" style={{
          position: "absolute",
          left: 2630,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-4c5b29f5e66b3f2e" style={{
          position: "absolute",
          left: 2630,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-c6768aa1155a4e85" style={{
          position: "absolute",
          left: 2540,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-fadbb908eee36bf2" style={{
          position: "absolute",
          left: 2540,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-2ce6910e15150598" style={{
          position: "absolute",
          left: 2450,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-92db8ba4e1593e7d" style={{
          position: "absolute",
          left: 2450,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-f4a5ca93c7746f9f" style={{
          position: "absolute",
          left: 2360,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-9e11efdf1a74e907" style={{
          position: "absolute",
          left: 2360,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-9a6c56bfb2035dee" style={{
          position: "absolute",
          left: 2270,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-dc782324a389a787" style={{
          position: "absolute",
          left: 2270,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-acd3160e2548c9ab" style={{
          position: "absolute",
          left: 2180,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-52ae5c227a1f8fa4" style={{
          position: "absolute",
          left: 2180,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-44f5513f562b55b6" style={{
          position: "absolute",
          left: 2090,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-8e372e58b2b93114" style={{
          position: "absolute",
          left: 2090,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-1bf5ae24c364f017" style={{
          position: "absolute",
          left: 2000,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-7ff53a11e82ed29c" style={{
          position: "absolute",
          left: 2000,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-3420844ab9aba977" style={{
          position: "absolute",
          left: 1910,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-1ff1079355cfd41d" style={{
          position: "absolute",
          left: 1910,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-8f14e6617bc07451" style={{
          position: "absolute",
          left: 1820,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-be778fedf7cbc689" style={{
          position: "absolute",
          left: 1820,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-4e3b2ccbc6c27f1b" style={{
          position: "absolute",
          left: 1730,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-bbf92207b0a899ca" style={{
          position: "absolute",
          left: 1730,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-3bdf00634c2ad445" style={{
          position: "absolute",
          left: 1640,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-cfe6f82785558a9d" style={{
          position: "absolute",
          left: 1640,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-01c92986ce7e09a9" style={{
          position: "absolute",
          left: 1550,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-2d9232afc7540010" style={{
          position: "absolute",
          left: 1550,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-9ab8c1a6e13c89ae" style={{
          position: "absolute",
          left: 1460,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-f6ecd69f92aa61ca" style={{
          position: "absolute",
          left: 1460,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-55ab6308b5e15668" style={{
          position: "absolute",
          left: 1370,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-43e46e6ba8e5449d" style={{
          position: "absolute",
          left: 1370,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-71a0c7686c98e910" style={{
          position: "absolute",
          left: 1280,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-6d8828ab49f3978e" style={{
          position: "absolute",
          left: 1280,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-1605fee8a0046574" style={{
          position: "absolute",
          left: 1190,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-dec235d50ca70ffa" style={{
          position: "absolute",
          left: 1190,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-d0bd8a6a309492a2" style={{
          position: "absolute",
          left: 1100,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-c3d0236ebf726bf3" style={{
          position: "absolute",
          left: 1100,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-04283fd85fcb487f" style={{
          position: "absolute",
          left: 1010,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-5318316133010661" style={{
          position: "absolute",
          left: 1010,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-b32521b8aae644eb" style={{
          position: "absolute",
          left: 920,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-79a99b188cf6ad90" style={{
          position: "absolute",
          left: 920,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-e3a104f0215d64e5" style={{
          position: "absolute",
          left: 830,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-f7710833762c1404" style={{
          position: "absolute",
          left: 830,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-e21c402a67a4793f" style={{
          position: "absolute",
          left: 740,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-58c857e92ee3b087" style={{
          position: "absolute",
          left: 740,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-3d37ed1c00daf65c" style={{
          position: "absolute",
          left: 650,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-757d2ce72fc8c47b" style={{
          position: "absolute",
          left: 650,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-10a816b2170d07f7" style={{
          position: "absolute",
          left: 560,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-e30651c320e0f850" style={{
          position: "absolute",
          left: 560,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-d4ad9626f633763d" style={{
          position: "absolute",
          left: 470,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-648a97d807a46fee" style={{
          position: "absolute",
          left: 470,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-39e2e1525d1994fe" style={{
          position: "absolute",
          left: 290,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-39e2e1525d1994fe" style={{
          position: "absolute",
          left: 290,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-06f45210fb39612b" style={{
          position: "absolute",
          left: 200,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-a04dbae1261b80c0" style={{
          position: "absolute",
          left: 200,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-e35cfc3d7f6f1598" style={{
          position: "absolute",
          left: 110,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-0a352c577b554e5c" style={{
          position: "absolute",
          left: 110,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-94a903938bb7b2db" style={{
          position: "absolute",
          left: 20,
          top: 110,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
        <div className="fig-asset-6c8f755bbc023c13" style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 72,
          height: 72,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: 140,
        top: 2040,
        width: 80,
        height: 108,
        overflow: "hidden",
        borderRadius: 5,
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 33,
          height: 24,
          borderRadius: 4,
        }}>
          <svg width={41} height={25} viewBox="0 0 41 25" fill="none" style={{
            position: "absolute",
            left: -4,
            top: -1,
            width: 41,
            height: 25,
            overflow: "hidden",
            borderRadius: 100,
            backdropFilter: "blur(60px)",
            color: "rgba(255,255,255,0.08)",
          }}>
            <path d={"M 0 12.5 C 0 5.596 5.596 0 12.5 0 L 28.5 0 C 35.404 0 41 5.596 41 12.5 L 41 12.5 C 41 19.404 35.404 25 28.5 25 L 12.5 25 C 5.596 25 0 19.404 0 12.5 L 0 12.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "absolute",
            left: 9,
            top: 0.5,
            width: 15,
            height: 20,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16.299999237060547,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(255,255,255)",
            filter: "drop-shadow(0px 1px 6px rgb(204,204,204))",
          }}>􀣺</span>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 64,
          width: 33,
          height: 24,
          borderRadius: 4,
        }}>
          <span style={{
            position: "absolute",
            left: 9,
            top: 0.5,
            width: 15,
            height: 20,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16.299999237060547,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(255,255,255)",
            filter: "drop-shadow(0px 1px 6px rgb(204,204,204))",
          }}>􀣺</span>
        </div>
      </div>
    </div>
  );
}
export default MacDesktopTemplates;
