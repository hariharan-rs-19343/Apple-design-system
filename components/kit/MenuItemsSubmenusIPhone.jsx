import { DisclosureDisabledTrue } from '../misc/DisclosureDisabledTrue.jsx';

// figma node: 5848:33925 Menu Items - Submenus - iPhone (16 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state) + '|' + "open=" + __venc(p.open) + '|' + "menuHasSelection=" + __venc(p.menuHasSelection);

export function MenuItemsSubmenusIPhone(_p = {}) {
  const props = { ..._p, showSymbol: _p.showSymbol ?? true, showSubtitle: _p.showSubtitle ?? false, symbol: _p.symbol ?? "􀓔", mode: _p.mode ?? "light", state: _p.state ?? "default", open: _p.open ?? false, menuHasSelection: _p.menuHasSelection ?? false, label: _p.label ?? "Label", subtitle: _p.subtitle ?? "Subtitle" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 8px 0px 36px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbol && (
        <span style={{
          position: "relative",
          width: 28,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "rgb(64,64,64)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "10px 0px 10px 0px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "20px",
            letterSpacing: "-0.430px",
            color: "rgb(64,64,64)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "rgb(38,38,38)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "rgb(64,64,64)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀆈"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 8px 0px 36px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbol && (
        <span style={{
          position: "relative",
          width: 28,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "rgb(245,245,245)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "10px 0px 10px 0px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "20px",
            letterSpacing: "-0.430px",
            color: "rgb(245,245,245)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "rgb(138,138,138)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "rgb(245,245,245)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀆈"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 8px 0px 36px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbol && (
        <span style={{
          position: "relative",
          width: 28,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "rgb(64,64,64)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "10px 0px 10px 0px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "20px",
            letterSpacing: "-0.430px",
            color: "rgb(64,64,64)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "rgb(38,38,38)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "rgb(64,64,64)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀆊"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 8px 0px 36px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbol && (
        <span style={{
          position: "relative",
          width: 28,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "rgb(245,245,245)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "10px 0px 10px 0px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "20px",
            letterSpacing: "-0.430px",
            color: "rgb(245,245,245)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "rgb(138,138,138)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "rgb(245,245,245)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀆊"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 8px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbol && (
        <span style={{
          position: "relative",
          width: 28,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "rgb(64,64,64)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "10px 0px 10px 0px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "20px",
            letterSpacing: "-0.430px",
            color: "rgb(64,64,64)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "rgb(38,38,38)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "rgb(64,64,64)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀆈"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 8px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbol && (
        <span style={{
          position: "relative",
          width: 28,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "rgb(245,245,245)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "10px 0px 10px 0px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "20px",
            letterSpacing: "-0.430px",
            color: "rgb(245,245,245)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "rgb(138,138,138)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "rgb(245,245,245)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀆈"}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 8px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbol && (
        <span style={{
          position: "relative",
          width: 28,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "rgb(64,64,64)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "10px 0px 10px 0px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "20px",
            letterSpacing: "-0.430px",
            color: "rgb(64,64,64)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "rgb(38,38,38)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "rgb(64,64,64)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀆊"}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 8px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbol && (
        <span style={{
          position: "relative",
          width: 28,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "rgb(245,245,245)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "10px 0px 10px 0px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "20px",
            letterSpacing: "-0.430px",
            color: "rgb(245,245,245)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "rgb(138,138,138)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "rgb(245,245,245)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀆊"}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 8px 0px 36px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbol && (
        <span style={{
          position: "relative",
          width: 28,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "var(--labels-vibrant-tertiary)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "10px 0px 10px 0px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "20px",
            letterSpacing: "-0.430px",
            color: "var(--labels-vibrant-tertiary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "var(--labels-vibrant-quaternary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--labels-vibrant-tertiary)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀆈"}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 8px 0px 36px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbol && (
        <span style={{
          position: "relative",
          width: 28,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "var(--labels-vibrant-primary)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "10px 0px 10px 0px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "20px",
            letterSpacing: "-0.430px",
            color: "var(--labels-vibrant-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "var(--labels-vibrant-secondary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--labels-vibrant-primary)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀆈"}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 8px 0px 36px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbol && (
        <span style={{
          position: "relative",
          width: 28,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "var(--labels-vibrant-tertiary)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "10px 0px 10px 0px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "20px",
            letterSpacing: "-0.430px",
            color: "var(--labels-vibrant-tertiary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "var(--labels-vibrant-quaternary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--labels-vibrant-tertiary)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀆊"}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 8px 0px 36px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbol && (
        <span style={{
          position: "relative",
          width: 28,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "var(--labels-vibrant-primary)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "10px 0px 10px 0px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "20px",
            letterSpacing: "-0.430px",
            color: "var(--labels-vibrant-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "var(--labels-vibrant-secondary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--labels-vibrant-primary)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀆊"}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 8px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbol && (
        <span style={{
          position: "relative",
          width: 28,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "var(--labels-vibrant-tertiary)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "10px 0px 10px 0px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "20px",
            letterSpacing: "-0.430px",
            color: "var(--labels-vibrant-tertiary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "var(--labels-vibrant-quaternary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
      <div style={{
          position: "relative",
          width: 14,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <DisclosureDisabledTrue />}</div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 8px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbol && (
        <span style={{
          position: "relative",
          width: 28,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "var(--labels-vibrant-primary)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "10px 0px 10px 0px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "20px",
            letterSpacing: "-0.430px",
            color: "var(--labels-vibrant-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "var(--labels-vibrant-secondary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--labels-vibrant-primary)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀆈"}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 8px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbol && (
        <span style={{
          position: "relative",
          width: 28,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "var(--labels-vibrant-tertiary)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "10px 0px 10px 0px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "20px",
            letterSpacing: "-0.430px",
            color: "var(--labels-vibrant-tertiary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "var(--labels-vibrant-quaternary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--labels-vibrant-tertiary)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀆊"}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 8px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbol && (
        <span style={{
          position: "relative",
          width: 28,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "var(--labels-vibrant-primary)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "10px 0px 10px 0px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "20px",
            letterSpacing: "-0.430px",
            color: "var(--labels-vibrant-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "18px",
            color: "var(--labels-vibrant-secondary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 15,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--labels-vibrant-primary)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀆊"}</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, State=Disabled, Open=True, Menu has Selection=True
    "mode=dark|state=disabled|open=true|menuHasSelection=true": __body0,
    // figma: Mode=Dark, State=Default, Open=True, Menu has Selection=True
    "mode=dark|state=default|open=true|menuHasSelection=true": __body1,
    // figma: Mode=Dark, State=Disabled, Open=False, Menu has Selection=True
    "mode=dark|state=disabled|open=false|menuHasSelection=true": __body2,
    // figma: Mode=Dark, State=Default, Open=False, Menu has Selection=True
    "mode=dark|state=default|open=false|menuHasSelection=true": __body3,
    // figma: Mode=Dark, State=Disabled, Open=True, Menu has Selection=False
    "mode=dark|state=disabled|open=true|menuHasSelection=false": __body4,
    // figma: Mode=Dark, State=Default, Open=True, Menu has Selection=False
    "mode=dark|state=default|open=true|menuHasSelection=false": __body5,
    // figma: Mode=Dark, State=Disabled, Open=False, Menu has Selection=False
    "mode=dark|state=disabled|open=false|menuHasSelection=false": __body6,
    // figma: Mode=Dark, State=Default, Open=False, Menu has Selection=False
    "mode=dark|state=default|open=false|menuHasSelection=false": __body7,
    // figma: Mode=Light, State=Disabled, Open=True, Menu has Selection=True
    "mode=light|state=disabled|open=true|menuHasSelection=true": __body8,
    // figma: Mode=Light, State=Default, Open=True, Menu has Selection=True
    "mode=light|state=default|open=true|menuHasSelection=true": __body9,
    // figma: Mode=Light, State=Disabled, Open=False, Menu has Selection=True
    "mode=light|state=disabled|open=false|menuHasSelection=true": __body10,
    // figma: Mode=Light, State=Default, Open=False, Menu has Selection=True
    "mode=light|state=default|open=false|menuHasSelection=true": __body11,
    // figma: Mode=Light, State=Disabled, Open=True, Menu has Selection=False
    "mode=light|state=disabled|open=true|menuHasSelection=false": __body12,
    // figma: Mode=Light, State=Default, Open=True, Menu has Selection=False
    "mode=light|state=default|open=true|menuHasSelection=false": __body13,
    // figma: Mode=Light, State=Disabled, Open=False, Menu has Selection=False
    "mode=light|state=disabled|open=false|menuHasSelection=false": __body14,
    // figma: Mode=Light, State=Default, Open=False, Menu has Selection=False
    "mode=light|state=default|open=false|menuHasSelection=false": __body15,
  };
  return (__impls[__vkey(props)] ?? __body15)();
}
export default MenuItemsSubmenusIPhone;
