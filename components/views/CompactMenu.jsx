import { Arrows } from '../controls/Arrows.jsx';
import { MenuCompactBackground } from './MenuCompactBackground.jsx';
import { Separators } from '../segmented-controls/Separators.jsx';

// figma node: 492:46323 Compact Menu (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "actions=" + __venc(p.actions);

export function CompactMenu(_p = {}) {
  const props = { ..._p, actions: _p.actions ?? "2", action6: _p.action6 ?? "Action 6", action1: _p.action1 ?? "Action 1", showArrows: _p.showArrows ?? true, action5: _p.action5 ?? "Action 5", action2: _p.action2 ?? "Action 2", action4: _p.action4 ?? "Action 4", action3: _p.action3 ?? "Action 3" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 603,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 603,
          height: 40,
        }}>
        <MenuCompactBackground style={{ transform: "scale(4.943, 0.800)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showArrows && (
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          padding: "0px 0.500px 0px 0.500px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              transform: "matrix(-1,0,0,1,0,0)",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Arrows state={"enabled"} />}</div>
          <div style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <Separators mode={"light"} />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.400px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action1}</span>
          <div style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon3 ?? <Separators mode={"light"} />}</div>
        </div>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.400px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action2}</span>
          <div style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon4 ?? <Separators mode={"light"} />}</div>
        </div>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.400px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action3}</span>
          <Separators
            style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.400px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action4}</span>
          <Separators
            style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.400px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action5}</span>
          <Separators
            style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.400px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action6}</span>
        </div>
        {props.showArrows && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "0px 0.500px 0px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Separators
            style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            mode={"light"}
          />
          <Arrows
            style={{ position: "relative", height: 40, flexShrink: 0 }}
            state={"enabled"}
          />
        </div>
        )}
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 514,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 514,
          height: 40,
        }}>
        <MenuCompactBackground style={{ transform: "scale(4.213, 0.800)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showArrows && (
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          padding: "0px 0.500px 0px 0.500px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              transform: "matrix(-1,0,0,1,0,0)",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Arrows state={"enabled"} />}</div>
          <div style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <Separators mode={"light"} />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action1}</span>
          <div style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon3 ?? <Separators mode={"light"} />}</div>
        </div>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action2}</span>
          <div style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon4 ?? <Separators mode={"light"} />}</div>
        </div>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action3}</span>
          <Separators
            style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action4}</span>
          <Separators
            style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action5}</span>
        </div>
        {props.showArrows && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "0px 0.500px 0px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Separators
            style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            mode={"light"}
          />
          <Arrows
            style={{ position: "relative", height: 40, flexShrink: 0 }}
            state={"enabled"}
          />
        </div>
        )}
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 425,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 425,
          height: 40,
        }}>
        <MenuCompactBackground style={{ transform: "scale(3.484, 0.800)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showArrows && (
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          padding: "0px 0.500px 0px 0.500px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              transform: "matrix(-1,0,0,1,0,0)",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Arrows state={"enabled"} />}</div>
          <div style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <Separators mode={"light"} />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action1}</span>
          <div style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon3 ?? <Separators mode={"light"} />}</div>
        </div>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action2}</span>
          <div style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon4 ?? <Separators mode={"light"} />}</div>
        </div>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action3}</span>
          <Separators
            style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            mode={"light"}
          />
        </div>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action4}</span>
        </div>
        {props.showArrows && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "0px 0.500px 0px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Separators
            style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            mode={"light"}
          />
          <Arrows
            style={{ position: "relative", height: 40, flexShrink: 0 }}
            state={"enabled"}
          />
        </div>
        )}
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 336,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 336,
          height: 40,
        }}>
        <MenuCompactBackground style={{ transform: "scale(2.754, 0.800)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showArrows && (
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          padding: "0px 0.500px 0px 0.500px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              transform: "matrix(-1,0,0,1,0,0)",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Arrows state={"enabled"} />}</div>
          <div style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <Separators mode={"light"} />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action1}</span>
          <div style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon3 ?? <Separators mode={"light"} />}</div>
        </div>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action2}</span>
          <div style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon4 ?? <Separators mode={"light"} />}</div>
        </div>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action3}</span>
        </div>
        {props.showArrows && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "0px 0.500px 0px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <Separators
            style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            mode={"light"}
          />
          <Arrows
            style={{ position: "relative", height: 40, flexShrink: 0 }}
            state={"enabled"}
          />
        </div>
        )}
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 177,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 177,
          height: 40,
        }}>
        <MenuCompactBackground style={{ transform: "scale(1.451, 0.800)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action1}</span>
          <div style={{
              position: "relative",
              width: 0.5,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <Separators mode={"light"} />}</div>
        </div>
        <div style={{
          position: "relative",
          height: 40,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.230px",
            color: "var(--labels-primary)",
            flexGrow: 1,
          }}>{props.action2}</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Actions=6
    "actions=6": __body0,
    // figma: Actions=5
    "actions=5": __body1,
    // figma: Actions=4
    "actions=4": __body2,
    // figma: Actions=3
    "actions=3": __body3,
    // figma: Actions=2
    "actions=2": __body4,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default CompactMenu;
