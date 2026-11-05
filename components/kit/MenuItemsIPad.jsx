// figma node: 5503:3165 Menu Items - iPad (12 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state) + '|' + "menuHasSelection=" + __venc(p.menuHasSelection);

export function MenuItemsIPad(_p = {}) {
  const props = { ..._p, showSymbol: _p.showSymbol ?? true, showCheckmark: _p.showCheckmark ?? true, label: _p.label ?? "Label", subtitle: _p.subtitle ?? "Subtitle", symbol: _p.symbol ?? "􀓔", showShortcut: _p.showShortcut ?? true, showControl: _p.showControl ?? false, showOption: _p.showOption ?? false, showShift: _p.showShift ?? false, showCommand: _p.showCommand ?? true, letter: _p.letter ?? "A", mode: _p.mode ?? "light", state: _p.state ?? "default", menuHasSelection: _p.menuHasSelection ?? false };
  const __body0 = () => (
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
        width: 24,
        height: 22,
        flexShrink: 0,
      }}>
        {props.showCheckmark && (
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 22,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "rgb(245,245,245)",
        }}>{props.text1 ?? "􀆅"}</span>
        )}
      </div>
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
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(255,66,69)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "11px 4px 11px 4px",
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
            fontSize: 15,
            lineHeight: "18px",
            letterSpacing: "0.200px",
            color: "rgb(255,66,69)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
        </div>
      </div>
      {props.showShortcut && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showControl && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "􀆍"}</span>
        )}
        {props.showOption && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "􀆕"}</span>
        )}
        {props.showShift && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "􀆝"}</span>
        )}
        {props.showCommand && (
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
        }}>􀆔</span>
        )}
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
        }}>{props.letter}</span>
      </div>
      )}
    </div>
  );
  const __body1 = () => (
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
        width: 24,
        height: 22,
        flexShrink: 0,
      }}>
        {props.showCheckmark && (
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 22,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "rgb(64,64,64)",
        }}>{props.text1 ?? "􀆅"}</span>
        )}
      </div>
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
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(64,64,64)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "11px 4px 11px 4px",
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
            fontSize: 15,
            lineHeight: "18px",
            letterSpacing: "0.200px",
            color: "rgb(64,64,64)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
        </div>
      </div>
      {props.showShortcut && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showControl && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(38,38,38)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "􀆍"}</span>
        )}
        {props.showOption && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(38,38,38)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "􀆕"}</span>
        )}
        {props.showShift && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(38,38,38)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "􀆝"}</span>
        )}
        {props.showCommand && (
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(38,38,38)",
          flexShrink: 0,
        }}>􀆔</span>
        )}
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(38,38,38)",
          flexShrink: 0,
        }}>{props.letter}</span>
      </div>
      )}
    </div>
  );
  const __body2 = () => (
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
        width: 24,
        height: 22,
        flexShrink: 0,
      }}>
        {props.showCheckmark && (
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 22,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "rgb(245,245,245)",
        }}>{props.text1 ?? "􀆅"}</span>
        )}
      </div>
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
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(245,245,245)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "11px 4px 11px 4px",
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
            fontSize: 15,
            lineHeight: "18px",
            letterSpacing: "0.200px",
            color: "rgb(245,245,245)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
        </div>
      </div>
      {props.showShortcut && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showControl && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "􀆍"}</span>
        )}
        {props.showOption && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "􀆕"}</span>
        )}
        {props.showShift && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "􀆝"}</span>
        )}
        {props.showCommand && (
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
        }}>􀆔</span>
        )}
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
        }}>{props.letter}</span>
      </div>
      )}
    </div>
  );
  const __body3 = () => (
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
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(255,66,69)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "11px 4px 11px 4px",
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
            fontSize: 15,
            lineHeight: "18px",
            letterSpacing: "0.200px",
            color: "rgb(255,66,69)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
        </div>
      </div>
      {props.showShortcut && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showControl && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "􀆍"}</span>
        )}
        {props.showOption && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "􀆕"}</span>
        )}
        {props.showShift && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "􀆝"}</span>
        )}
        {props.showCommand && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "􀆔"}</span>
        )}
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
        }}>{props.letter}</span>
      </div>
      )}
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
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(64,64,64)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "11px 4px 11px 4px",
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
            fontSize: 15,
            lineHeight: "18px",
            letterSpacing: "0.200px",
            color: "rgb(64,64,64)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
        </div>
      </div>
      {props.showShortcut && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showControl && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(38,38,38)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "􀆍"}</span>
        )}
        {props.showOption && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(38,38,38)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "􀆕"}</span>
        )}
        {props.showShift && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(38,38,38)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "􀆝"}</span>
        )}
        {props.showCommand && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(38,38,38)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "􀆔"}</span>
        )}
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(38,38,38)",
          flexShrink: 0,
        }}>{props.letter}</span>
      </div>
      )}
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
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(245,245,245)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "11px 4px 11px 4px",
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
            fontSize: 15,
            lineHeight: "18px",
            letterSpacing: "0.200px",
            color: "rgb(245,245,245)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
        </div>
      </div>
      {props.showShortcut && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showControl && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "􀆍"}</span>
        )}
        {props.showOption && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "􀆕"}</span>
        )}
        {props.showShift && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "􀆝"}</span>
        )}
        {props.showCommand && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "􀆔"}</span>
        )}
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(138,138,138)",
          flexShrink: 0,
        }}>{props.letter}</span>
      </div>
      )}
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
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--accents-red)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "11px 4px 11px 4px",
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
            fontSize: 15,
            lineHeight: "18px",
            letterSpacing: "0.200px",
            color: "var(--accents-red)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
        </div>
      </div>
      {props.showShortcut && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showControl && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "􀆍"}</span>
        )}
        {props.showOption && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "􀆕"}</span>
        )}
        {props.showShift && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "􀆝"}</span>
        )}
        {props.showCommand && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "􀆔"}</span>
        )}
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
        }}>{props.letter}</span>
      </div>
      )}
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
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-tertiary)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "11px 4px 11px 4px",
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
            fontSize: 15,
            lineHeight: "18px",
            letterSpacing: "0.200px",
            color: "var(--labels-vibrant-tertiary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
        </div>
      </div>
      {props.showShortcut && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showControl && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-quaternary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "􀆍"}</span>
        )}
        {props.showOption && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-quaternary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "􀆕"}</span>
        )}
        {props.showShift && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-quaternary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "􀆝"}</span>
        )}
        {props.showCommand && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-quaternary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "􀆔"}</span>
        )}
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-quaternary)",
          flexShrink: 0,
        }}>{props.letter}</span>
      </div>
      )}
    </div>
  );
  const __body8 = () => (
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
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-primary)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "11px 4px 11px 4px",
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
            fontSize: 15,
            lineHeight: "18px",
            letterSpacing: "0.200px",
            color: "var(--labels-vibrant-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
        </div>
      </div>
      {props.showShortcut && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showControl && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "􀆍"}</span>
        )}
        {props.showOption && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "􀆕"}</span>
        )}
        {props.showShift && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "􀆝"}</span>
        )}
        {props.showCommand && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "􀆔"}</span>
        )}
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
        }}>{props.letter}</span>
      </div>
      )}
    </div>
  );
  const __body9 = () => (
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
        width: 24,
        height: 22,
        flexShrink: 0,
      }}>
        {props.showCheckmark && (
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 22,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "var(--labels-vibrant-primary)",
        }}>{props.text1 ?? "􀆅"}</span>
        )}
      </div>
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
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--accents-red)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "11px 4px 11px 4px",
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
            fontSize: 15,
            lineHeight: "18px",
            letterSpacing: "0.200px",
            color: "var(--accents-red)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
        </div>
      </div>
      {props.showShortcut && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showControl && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "􀆍"}</span>
        )}
        {props.showOption && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "􀆕"}</span>
        )}
        {props.showShift && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "􀆝"}</span>
        )}
        {props.showCommand && (
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
        }}>􀆔</span>
        )}
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
        }}>{props.letter}</span>
      </div>
      )}
    </div>
  );
  const __body10 = () => (
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
        width: 24,
        height: 22,
        flexShrink: 0,
      }}>
        {props.showCheckmark && (
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 22,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "var(--labels-vibrant-primary)",
        }}>{props.text1 ?? "􀆅"}</span>
        )}
      </div>
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
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-tertiary)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "11px 4px 11px 4px",
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
            fontSize: 15,
            lineHeight: "18px",
            letterSpacing: "0.200px",
            color: "var(--labels-vibrant-tertiary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
        </div>
      </div>
      {props.showShortcut && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showControl && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-quaternary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "􀆍"}</span>
        )}
        {props.showOption && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-quaternary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "􀆕"}</span>
        )}
        {props.showShift && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-quaternary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "􀆝"}</span>
        )}
        {props.showCommand && (
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-quaternary)",
          flexShrink: 0,
        }}>􀆔</span>
        )}
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-quaternary)",
          flexShrink: 0,
        }}>{props.letter}</span>
      </div>
      )}
    </div>
  );
  const __body11 = () => (
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
        width: 24,
        height: 22,
        flexShrink: 0,
      }}>
        {props.showCheckmark && (
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 22,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "var(--labels-vibrant-primary)",
        }}>{props.text1 ?? "􀆅"}</span>
        )}
      </div>
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
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-primary)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "11px 4px 11px 4px",
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
            fontSize: 15,
            lineHeight: "18px",
            letterSpacing: "0.200px",
            color: "var(--labels-vibrant-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.label}</span>
        </div>
      </div>
      {props.showShortcut && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showControl && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "􀆍"}</span>
        )}
        {props.showOption && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "􀆕"}</span>
        )}
        {props.showShift && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "􀆝"}</span>
        )}
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
        }}>􀆔</span>
        <span style={{
          position: "relative",
          width: 14,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          lineHeight: "20px",
          color: "var(--labels-vibrant-secondary)",
          flexShrink: 0,
        }}>A</span>
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, State=Destructive, Menu has selection=True
    "mode=dark|state=destructive|menuHasSelection=true": __body0,
    // figma: Mode=Dark, State=Disabled, Menu has selection=True
    "mode=dark|state=disabled|menuHasSelection=true": __body1,
    // figma: Mode=Dark, State=Default, Menu has selection=True
    "mode=dark|state=default|menuHasSelection=true": __body2,
    // figma: Mode=Dark, State=Destructive, Menu has selection=False
    "mode=dark|state=destructive|menuHasSelection=false": __body3,
    // figma: Mode=Dark, State=Disabled, Menu has selection=False
    "mode=dark|state=disabled|menuHasSelection=false": __body4,
    // figma: Mode=Dark, State=Default, Menu has selection=False
    "mode=dark|state=default|menuHasSelection=false": __body5,
    // figma: Mode=Light, State=Destructive, Menu has selection=False
    "mode=light|state=destructive|menuHasSelection=false": __body6,
    // figma: Mode=Light, State=Disabled, Menu has selection=False
    "mode=light|state=disabled|menuHasSelection=false": __body7,
    // figma: Mode=Light, State=Default, Menu has selection=False
    "mode=light|state=default|menuHasSelection=false": __body8,
    // figma: Mode=Light, State=Destructive, Menu has selection=True
    "mode=light|state=destructive|menuHasSelection=true": __body9,
    // figma: Mode=Light, State=Disabled, Menu has selection=True
    "mode=light|state=disabled|menuHasSelection=true": __body10,
    // figma: Mode=Light, State=Default, Menu has selection=True
    "mode=light|state=default|menuHasSelection=true": __body11,
  };
  return (__impls[__vkey(props)] ?? __body8)();
}
export default MenuItemsIPad;
