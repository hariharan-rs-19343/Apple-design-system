import { IOSMiniTipButtons } from './IOSMiniTipButtons.jsx';
import { IOSMiniTipClose } from './IOSMiniTipClose.jsx';
import { IOSTipBackgroundAnnotation } from './IOSTipBackgroundAnnotation.jsx';
import { IOSTipBackgroundPopover } from './IOSTipBackgroundPopover.jsx';

// figma node: 41:1351 iOS Mini Tip (9 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2) + '|' + "content=" + __venc(p.content);

export function IOSMiniTip(_p = {}) {
  const props = { ..._p, showCloseButton: _p.showCloseButton ?? true, symbol: _p.symbol ?? "􀉭", style2: _p.style2 ?? "popover", title: _p.title ?? "This Is The Title", content: _p.content ?? "symbol", description: _p.description ?? "Sed posuere consectetur est at lobortis. Nulla vit elit." };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 300,
      display: "flex",
      flexDirection: "column",
      gap: 22,
      padding: "22px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}>
        <IOSTipBackgroundAnnotation
          style={{ width: "100%", height: "100%" }}
          arrow={"none"}
          mode={"light"}
        />
      </div>
      {props.showCloseButton && (
      <div style={{
          position: "absolute",
          left: 251,
          top: 19,
          width: 30,
          height: 30,
        }}>{props.icon1 ?? <IOSMiniTipClose />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "0px 34px 0px 6px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div className="fig-asset-eae313a48883a46e" style={{
          position: "relative",
          width: 64,
          height: 64,
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            lineHeight: "20px",
            color: "rgba(60,60,67,0.6)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.description}</span>
        </div>
      </div>
      <IOSMiniTipButtons
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        layout={"side-by-side"}
        mode={"light"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 300,
      display: "flex",
      flexDirection: "column",
      gap: 22,
      padding: "22px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}>
        <IOSTipBackgroundAnnotation
          style={{ width: "100%", height: "100%" }}
          arrow={"up - center"}
          mode={"light"}
        />
      </div>
      {props.showCloseButton && (
      <div style={{
          position: "absolute",
          left: 251,
          top: 19,
          width: 30,
          height: 30,
        }}>{props.icon1 ?? <IOSMiniTipClose />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "0px 34px 0px 6px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div className="fig-asset-eae313a48883a46e" style={{
          position: "relative",
          width: 64,
          height: 64,
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            lineHeight: "20px",
            color: "rgba(60,60,67,0.6)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.description}</span>
        </div>
      </div>
      <IOSMiniTipButtons
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        layout={"side-by-side"}
        mode={"light"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 300,
      display: "flex",
      flexDirection: "column",
      gap: 22,
      padding: "22px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}>
        <IOSTipBackgroundPopover
          style={{ width: "100%", height: "100%" }}
          arrow={"up - center"}
          mode={"light"}
        />
      </div>
      {props.showCloseButton && (
      <div style={{
          position: "absolute",
          left: 251,
          top: 19,
          width: 30,
          height: 30,
        }}>{props.icon1 ?? <IOSMiniTipClose />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "0px 34px 0px 6px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div className="fig-asset-eae313a48883a46e" style={{
          position: "relative",
          width: 64,
          height: 64,
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            lineHeight: "20px",
            color: "rgba(60,60,67,0.6)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.description}</span>
        </div>
      </div>
      <IOSMiniTipButtons
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        layout={"side-by-side"}
        mode={"light"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 300,
      display: "flex",
      flexDirection: "column",
      gap: 22,
      padding: "22px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}>
        <IOSTipBackgroundAnnotation
          style={{ width: "100%", height: "100%" }}
          arrow={"none"}
          mode={"light"}
        />
      </div>
      {props.showCloseButton && (
      <div style={{
          position: "absolute",
          left: 251,
          top: 19,
          width: 30,
          height: 30,
        }}>{props.icon1 ?? <IOSMiniTipClose />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "0px 34px 0px 6px",
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
          fontWeight: 510,
          fontSize: 34,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "41px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            lineHeight: "20px",
            color: "rgba(60,60,67,0.6)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.description}</span>
        </div>
      </div>
      <IOSMiniTipButtons
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        layout={"side-by-side"}
        mode={"light"}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 300,
      display: "flex",
      flexDirection: "column",
      gap: 22,
      padding: "22px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}>
        <IOSTipBackgroundAnnotation
          style={{ width: "100%", height: "100%" }}
          arrow={"up - center"}
          mode={"light"}
        />
      </div>
      {props.showCloseButton && (
      <div style={{
          position: "absolute",
          left: 251,
          top: 19,
          width: 30,
          height: 30,
        }}>{props.icon1 ?? <IOSMiniTipClose />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "0px 34px 0px 6px",
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
          fontWeight: 510,
          fontSize: 34,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "41px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            lineHeight: "20px",
            color: "rgba(60,60,67,0.6)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.description}</span>
        </div>
      </div>
      <IOSMiniTipButtons
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        layout={"side-by-side"}
        mode={"light"}
      />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 300,
      display: "flex",
      flexDirection: "column",
      gap: 22,
      padding: "22px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}>
        <IOSTipBackgroundPopover
          style={{ width: "100%", height: "100%" }}
          arrow={"up - center"}
          mode={"light"}
        />
      </div>
      {props.showCloseButton && (
      <div style={{
          position: "absolute",
          left: 251,
          top: 19,
          width: 30,
          height: 30,
        }}>{props.icon1 ?? <IOSMiniTipClose />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "0px 34px 0px 6px",
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
          fontWeight: 510,
          fontSize: 34,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "41px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            lineHeight: "20px",
            color: "rgba(60,60,67,0.6)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.description}</span>
        </div>
      </div>
      <IOSMiniTipButtons
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        layout={"side-by-side"}
        mode={"light"}
      />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 300,
      display: "flex",
      flexDirection: "column",
      gap: 22,
      padding: "22px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}>
        <IOSTipBackgroundAnnotation
          style={{ width: "100%", height: "100%" }}
          arrow={"none"}
          mode={"light"}
        />
      </div>
      {props.showCloseButton && (
      <div style={{
          position: "absolute",
          left: 251,
          top: 19,
          width: 30,
          height: 30,
        }}>{props.icon1 ?? <IOSMiniTipClose />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            lineHeight: "20px",
            color: "rgba(60,60,67,0.6)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.description}</span>
        </div>
      </div>
      <IOSMiniTipButtons
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        layout={"side-by-side"}
        mode={"light"}
      />
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 300,
      display: "flex",
      flexDirection: "column",
      gap: 22,
      padding: "22px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}>
        <IOSTipBackgroundAnnotation
          style={{ width: "100%", height: "100%" }}
          arrow={"up - center"}
          mode={"light"}
        />
      </div>
      {props.showCloseButton && (
      <div style={{
          position: "absolute",
          left: 251,
          top: 19,
          width: 30,
          height: 30,
        }}>{props.icon1 ?? <IOSMiniTipClose />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            lineHeight: "20px",
            color: "rgba(60,60,67,0.6)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.description}</span>
        </div>
      </div>
      <IOSMiniTipButtons
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        layout={"side-by-side"}
        mode={"light"}
      />
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 300,
      display: "flex",
      flexDirection: "column",
      gap: 22,
      padding: "22px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}>
        <IOSTipBackgroundPopover
          style={{ width: "100%", height: "100%" }}
          arrow={"up - center"}
          mode={"light"}
        />
      </div>
      {props.showCloseButton && (
      <div style={{
          position: "absolute",
          left: 251,
          top: 19,
          width: 30,
          height: 30,
        }}>{props.icon1 ?? <IOSMiniTipClose />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            lineHeight: "20px",
            color: "rgba(60,60,67,0.6)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.description}</span>
        </div>
      </div>
      <IOSMiniTipButtons
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        layout={"side-by-side"}
        mode={"light"}
      />
    </div>
  );
  const __impls = {
    // figma: Style=Hint, Content=Image
    "style2=hint|content=image": __body0,
    // figma: Style=Annotation, Content=Image
    "style2=annotation|content=image": __body1,
    // figma: Style=Popover, Content=Image
    "style2=popover|content=image": __body2,
    // figma: Style=Hint, Content=Symbol
    "style2=hint|content=symbol": __body3,
    // figma: Style=Annotation, Content=Symbol
    "style2=annotation|content=symbol": __body4,
    // figma: Style=Popover, Content=Symbol
    "style2=popover|content=symbol": __body5,
    // figma: Style=Hint, Content=Text Only
    "style2=hint|content=text only": __body6,
    // figma: Style=Annotation, Content=Text Only
    "style2=annotation|content=text only": __body7,
    // figma: Style=Popover, Content=Text Only
    "style2=popover|content=text only": __body8,
  };
  return (__impls[__vkey(props)] ?? __body5)();
}
export default IOSMiniTip;
