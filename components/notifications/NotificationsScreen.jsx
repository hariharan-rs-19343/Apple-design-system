import { CustomIcon } from '../app-icons/CustomIcon.jsx';
import { LiquidGlassClearLight } from './LiquidGlassClearLight.jsx';
import { LiquidGlassRegularMedium } from '../alerts/LiquidGlassRegularMedium.jsx';
import { NotificationCollapsed } from './NotificationCollapsed.jsx';
import { Time } from './Time.jsx';

// figma node: 544:199441 
export function NotificationsScreen(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1540,
      height: 1100,
      borderRadius: 22,
      backgroundColor: "var(--section-fill)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 560,
        top: 100,
        width: 402,
        borderRadius: 5,
        backgroundColor: "var(--component-fill)",
        outline: "1px dashed var(--component-stroke)",
        outlineOffset: "-1px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: "20px 20px 20px 20px",
        alignItems: "flex-start",
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
        <NotificationCollapsed
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          stack={"1"}
        />
        <NotificationCollapsed
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          stack={"1"}
        />
        <NotificationCollapsed
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          stack={"2"}
        />
        <NotificationCollapsed
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          stack={"3"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 100,
        top: 100,
        width: 430,
        height: 310,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--component-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 210,
          width: 386,
          borderRadius: 24,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "12px 14px 27px 14px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 71,
            width: 386,
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
            width: 386,
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
              width: 386,
              height: 63,
            }}>
            <LiquidGlassClearLight style={{ transform: "scale(2.413, 0.394)", transformOrigin: "0 0" }} />
          </div>
          <div style={{
              position: "relative",
              width: 38.333,
              height: 38.333,
              flexShrink: 0,
            }}>
            <CustomIcon
              style={{ transform: "scale(0.581, 0.581)", transformOrigin: "0 0" }}
              mode={"default"}
            />
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
        <div style={{
          position: "absolute",
          left: 20,
          top: 110,
          width: 386,
          borderRadius: 24,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "12px 14px 21px 14px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 63,
            width: 386,
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
              width: 386,
              height: 63,
            }}>
            <LiquidGlassClearLight style={{ transform: "scale(2.413, 0.394)", transformOrigin: "0 0" }} />
          </div>
          <div style={{
              position: "relative",
              width: 38.333,
              height: 38.333,
              flexShrink: 0,
            }}>
            <CustomIcon
              style={{ transform: "scale(0.581, 0.581)", transformOrigin: "0 0" }}
              mode={"default"}
            />
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
          position: "absolute",
          left: 20,
          top: 20,
          width: 386,
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
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 386,
              height: 64,
            }}>
            <LiquidGlassClearLight style={{ transform: "scale(2.413, 0.400)", transformOrigin: "0 0" }} />
          </div>
          <div style={{
              position: "relative",
              width: 38.333,
              height: 38.333,
              flexShrink: 0,
            }}>
            <CustomIcon
              style={{ transform: "scale(0.581, 0.581)", transformOrigin: "0 0" }}
              mode={"default"}
            />
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
      </div>
      <div style={{
        position: "absolute",
        left: 1060,
        top: 100,
        width: 393,
        height: 443,
        display: "flex",
        flexDirection: "column",
        gap: 15,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        isolation: "isolate",
        boxSizing: "border-box",
      }}>
        <svg viewBox="0 0 377 324" fill="none" style={{
          position: "relative",
          borderRadius: 32,
          zIndex: 2,
          flexGrow: 1,
          alignSelf: "stretch",
          color: "var(--backgrounds-primary-elevated-2)",
        }}>
          <path d={"M 0 51.2 C 0 33.278 0 24.317 3.488 17.472 C 6.556 11.451 11.451 6.556 17.472 3.488 C 24.317 0 33.278 0 51.2 0 L 325.8 0 C 343.722 0 352.683 0 359.528 3.488 C 365.549 6.556 370.444 11.451 373.512 17.472 C 377 24.317 377 33.278 377 51.2 L 377 272.8 C 377 290.722 377 299.683 373.512 306.528 C 370.444 312.549 365.549 317.444 359.528 320.512 C 352.683 324 343.722 324 325.8 324 L 51.2 324 C 33.278 324 24.317 324 17.472 320.512 C 11.451 317.444 6.556 312.549 3.488 306.528 C 0 299.683 0 290.722 0 272.8 L 0 51.2 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          width: 250,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          padding: "20px 26px 20px 26px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          zIndex: 1,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 0.5,
              top: 0,
              width: 250,
              height: 104,
            }}>
            <LiquidGlassRegularMedium
              style={{ transform: "scale(1.563, 0.650)", transformOrigin: "0 0" }}
              mode={"light"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 14,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              width: 20,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "center",
              lineHeight: "22px",
              color: "var(--labels-primary)",
              flexShrink: 0,
            }}>􀓔</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-primary)",
              flexGrow: 1,
            }}>Action</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 14,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              width: 20,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "center",
              lineHeight: "22px",
              color: "var(--labels-primary)",
              flexShrink: 0,
            }}>􀓔</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "22px",
              letterSpacing: "-0.430px",
              color: "var(--labels-primary)",
              flexGrow: 1,
            }}>Action</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 100,
        top: 450,
        width: 140,
        height: 260,
        overflow: "hidden",
        borderRadius: 5,
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 140,
          width: 100,
          height: 100,
          background: "linear-gradient(rgba(0,0,0,0.05),rgba(0,0,0,0.05)), linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.25))",
        }} />
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 100,
          height: 100,
          background: "linear-gradient(rgba(0,0,0,0.05),rgba(0,0,0,0.05)), linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.25))",
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: 100,
        top: 790,
        width: 100,
        height: 100,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 60,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(77,77,77)",
            flexShrink: 0,
          }}>9:41 AM</span>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(77,77,77)",
            flexShrink: 0,
          }}>9:41 AM</span>
        </div>
      </div>
    </div>
  );
}
export default NotificationsScreen;
