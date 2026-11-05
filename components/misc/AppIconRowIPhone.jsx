import { AppStore } from './AppStore.jsx';

// figma node: 558:36965 _App Icon Row - iPhone (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "icons=" + __venc(p.icons);

export function AppIconRowIPhone(_p = {}) {
  const props = { ..._p, appName1: _p.appName1 ?? "Name", icons: _p.icons ?? "1", showBadge1: _p.showBadge1 ?? false, appName4: _p.appName4 ?? "Name", appName2: _p.appName2 ?? "Name", showBadge4: _p.showBadge4 ?? false, showBadge2: _p.showBadge2 ?? false, appName3: _p.appName3 ?? "Name", showBadge3: _p.showBadge3 ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 393,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 60,
          height: 60,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 60,
              height: 60,
            }}>{props.icon1 ?? <AppStore />}</div>
          {props.showBadge1 && (
          <div style={{
            position: "absolute",
            left: 47,
            top: -10,
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: "var(--accents-red)",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 2.5,
              width: 24,
              height: 19,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              textAlign: "center",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>{props.text1 ?? "2"}</span>
          </div>
          )}
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
        }}>{props.appName1}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 60,
          height: 60,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 60,
              height: 60,
            }}>{props.icon2 ?? <AppStore />}</div>
          {props.showBadge2 && (
          <div style={{
            position: "absolute",
            left: 47,
            top: -10,
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: "var(--accents-red)",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 2.5,
              width: 24,
              height: 19,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              textAlign: "center",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>{props.text2 ?? "2"}</span>
          </div>
          )}
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
        }}>{props.appName2}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 60,
          height: 60,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 60,
              height: 60,
            }}>{props.icon3 ?? <AppStore />}</div>
          {props.showBadge3 && (
          <div style={{
            position: "absolute",
            left: 47,
            top: -10,
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: "var(--accents-red)",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 2.5,
              width: 24,
              height: 19,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              textAlign: "center",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>{props.text3 ?? "2"}</span>
          </div>
          )}
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
        }}>{props.appName3}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 60,
          height: 60,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 60,
              height: 60,
            }}>{props.icon4 ?? <AppStore />}</div>
          {props.showBadge4 && (
          <div style={{
            position: "absolute",
            left: 47,
            top: -10,
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: "var(--accents-red)",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 2.5,
              width: 24,
              height: 19,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              textAlign: "center",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>{props.text4 ?? "2"}</span>
          </div>
          )}
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
        }}>{props.appName4}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 393,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 60,
          height: 60,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 60,
              height: 60,
            }}>{props.icon1 ?? <AppStore />}</div>
          {props.showBadge1 && (
          <div style={{
            position: "absolute",
            left: 47,
            top: -10,
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: "var(--accents-red)",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 2.5,
              width: 24,
              height: 19,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              textAlign: "center",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>{props.text1 ?? "2"}</span>
          </div>
          )}
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
        }}>{props.appName1}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 60,
          height: 60,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 60,
              height: 60,
            }}>{props.icon2 ?? <AppStore />}</div>
          {props.showBadge2 && (
          <div style={{
            position: "absolute",
            left: 47,
            top: -10,
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: "var(--accents-red)",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 2.5,
              width: 24,
              height: 19,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              textAlign: "center",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>{props.text2 ?? "2"}</span>
          </div>
          )}
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
        }}>{props.appName2}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 60,
          height: 60,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 60,
              height: 60,
            }}>{props.icon3 ?? <AppStore />}</div>
          {props.showBadge3 && (
          <div style={{
            position: "absolute",
            left: 47,
            top: -10,
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: "var(--accents-red)",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 2.5,
              width: 24,
              height: 19,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              textAlign: "center",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>{props.text3 ?? "2"}</span>
          </div>
          )}
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
        }}>{props.appName3}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 393,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 60,
          height: 60,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 60,
              height: 60,
            }}>{props.icon1 ?? <AppStore />}</div>
          {props.showBadge1 && (
          <div style={{
            position: "absolute",
            left: 47,
            top: -10,
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: "var(--accents-red)",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 2.5,
              width: 24,
              height: 19,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              textAlign: "center",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>{props.text1 ?? "2"}</span>
          </div>
          )}
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
        }}>{props.appName1}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 60,
          height: 60,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 60,
              height: 60,
            }}>{props.icon2 ?? <AppStore />}</div>
          {props.showBadge2 && (
          <div style={{
            position: "absolute",
            left: 47,
            top: -10,
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: "var(--accents-red)",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 2.5,
              width: 24,
              height: 19,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              textAlign: "center",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>{props.text2 ?? "2"}</span>
          </div>
          )}
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
        }}>{props.appName2}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 393,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 60,
          height: 60,
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 60,
              height: 60,
            }}>{props.icon1 ?? <AppStore />}</div>
          {props.showBadge1 && (
          <div style={{
            position: "absolute",
            left: 47,
            top: -10,
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: "var(--accents-red)",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 2.5,
              width: 24,
              height: 19,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              textAlign: "center",
              lineHeight: "100%",
              color: "rgb(255,255,255)",
            }}>{props.text1 ?? "2"}</span>
          </div>
          )}
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
        }}>{props.appName1}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __impls = {
    // figma: Icons=4
    "icons=4": __body0,
    // figma: Icons=3
    "icons=3": __body1,
    // figma: Icons=2
    "icons=2": __body2,
    // figma: Icons=1
    "icons=1": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default AppIconRowIPhone;
