import { SidebarEditButton } from './SidebarEditButton.jsx';

// figma node: 147:62237 _Sidebar - Leading (16 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state) + '|' + "image=" + __venc(p.image);

export function SidebarLeading(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", state: _p.state ?? "default", image: _p.image ?? "symbol", showEditButton: _p.showEditButton ?? false, showSubtitle: _p.showSubtitle ?? false, symbol: _p.symbol ?? "􀓔", subtitle: _p.subtitle ?? "Subtitle", title: _p.title ?? "Title" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showEditButton && (
      <div style={{
          position: "relative",
          width: 21,
          height: 21,
          flexShrink: 0,
        }}>{props.icon1 ?? <SidebarEditButton mode={"dark"} type={"selectable"} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "rgb(0,145,255)",
          flexShrink: 0,
        }}>{props.title}</span>
        {props.showSubtitle && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "rgba(235,235,245,0.7)",
          flexShrink: 0,
        }}>{props.subtitle}</span>
        )}
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(18,18,18)",
      ...props.style,
    }}>
      {props.showEditButton && (
      <div style={{
          position: "relative",
          width: 21,
          height: 21,
          flexShrink: 0,
        }}>{props.icon1 ?? <SidebarEditButton mode={"dark"} type={"selectable"} />}</div>
      )}
      <div style={{
        position: "relative",
        minWidth: 85,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 34,
          height: 28,
          flexShrink: 0,
        }}>
          <svg width={28} height={28} viewBox="0 0 28 28" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 0,
            width: 28,
            height: 28,
          }}>
            <path d={"M 13 28 L 4.8 28 C 3.12 28 2.279 28 1.638 27.673 C 1.073 27.385 0.615 26.927 0.327 26.362 C 0 25.721 0 24.88 0 23.2 L 0 15 L 13 15 L 13 28 Z M 28 23.2 C 28 24.88 28 25.721 27.673 26.362 C 27.385 26.927 26.927 27.385 26.362 27.673 C 25.721 28 24.88 28 23.2 28 L 15 28 L 15 15 L 28 15 L 28 23.2 Z M 13 0 L 13 13 L 0 13 L 0 4.8 C 0 3.12 0 2.279 0.327 1.638 C 0.615 1.073 1.073 0.615 1.638 0.327 C 2.279 0 3.12 0 4.8 0 L 13 0 Z M 23.2 0 C 24.88 0 25.721 0 26.362 0.327 C 26.927 0.615 27.385 1.073 27.673 1.638 C 28 2.279 28 3.12 28 4.8 L 28 13 L 15 13 L 15 0 L 23.2 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "rgb(0,145,255)",
            flexShrink: 0,
          }}>{props.title}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.080px",
            color: "rgba(235,235,245,0.7)",
            flexShrink: 0,
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showEditButton && (
      <div style={{
          position: "relative",
          width: 21,
          height: 21,
          flexShrink: 0,
        }}>{props.icon1 ?? <SidebarEditButton mode={"dark"} type={"selectable"} />}</div>
      )}
      <div style={{
        position: "relative",
        minWidth: 85,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 34,
          borderRadius: 6,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div className="fig-asset-eae313a48883a46e" style={{
            position: "relative",
            width: 28,
            height: 28,
            borderRadius: 6,
            boxShadow: "0 0 0 0.500px rgba(0,0,0,0.06)",
            flexShrink: 0,
          }} />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "rgb(0,145,255)",
            flexShrink: 0,
          }}>{props.title}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.080px",
            color: "rgba(235,235,245,0.7)",
            flexShrink: 0,
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showEditButton && (
      <div style={{
          position: "relative",
          width: 21,
          height: 21,
          flexShrink: 0,
        }}>{props.icon1 ?? <SidebarEditButton mode={"dark"} type={"selectable"} />}</div>
      )}
      <div style={{
        position: "relative",
        minWidth: 85,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          width: 34,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(0,145,255)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "rgb(0,145,255)",
            flexShrink: 0,
          }}>{props.title}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.080px",
            color: "rgba(235,235,245,0.7)",
            flexShrink: 0,
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showEditButton && (
      <div style={{
          position: "relative",
          width: 21,
          height: 21,
          flexShrink: 0,
        }}>{props.icon1 ?? <SidebarEditButton mode={"dark"} type={"selectable"} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.title}</span>
        {props.showSubtitle && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "rgba(235,235,245,0.7)",
          flexShrink: 0,
        }}>{props.subtitle}</span>
        )}
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(18,18,18)",
      ...props.style,
    }}>
      {props.showEditButton && (
      <div style={{
          position: "relative",
          width: 21,
          height: 21,
          flexShrink: 0,
        }}>{props.icon1 ?? <SidebarEditButton mode={"dark"} type={"selectable"} />}</div>
      )}
      <div style={{
        position: "relative",
        minWidth: 85,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 34,
          height: 28,
          flexShrink: 0,
        }}>
          <svg width={28} height={28} viewBox="0 0 28 28" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 0,
            width: 28,
            height: 28,
          }}>
            <path d={"M 13 28 L 4.8 28 C 3.12 28 2.279 28 1.638 27.673 C 1.073 27.385 0.615 26.927 0.327 26.362 C 0 25.721 0 24.88 0 23.2 L 0 15 L 13 15 L 13 28 Z M 28 23.2 C 28 24.88 28 25.721 27.673 26.362 C 27.385 26.927 26.927 27.385 26.362 27.673 C 25.721 28 24.88 28 23.2 28 L 15 28 L 15 15 L 28 15 L 28 23.2 Z M 13 0 L 13 13 L 0 13 L 0 4.8 C 0 3.12 0 2.279 0.327 1.638 C 0.615 1.073 1.073 0.615 1.638 0.327 C 2.279 0 3.12 0 4.8 0 L 13 0 Z M 23.2 0 C 24.88 0 25.721 0 26.362 0.327 C 26.927 0.615 27.385 1.073 27.673 1.638 C 28 2.279 28 3.12 28 4.8 L 28 13 L 15 13 L 15 0 L 23.2 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.title}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.080px",
            color: "rgba(235,235,245,0.7)",
            flexShrink: 0,
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showEditButton && (
      <div style={{
          position: "relative",
          width: 21,
          height: 21,
          flexShrink: 0,
        }}>{props.icon1 ?? <SidebarEditButton mode={"dark"} type={"selectable"} />}</div>
      )}
      <div style={{
        position: "relative",
        minWidth: 85,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 34,
          borderRadius: 6,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div className="fig-asset-eae313a48883a46e" style={{
            position: "relative",
            width: 28,
            height: 28,
            borderRadius: 6,
            boxShadow: "0 0 0 0.500px rgba(0,0,0,0.06)",
            flexShrink: 0,
          }} />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.title}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.080px",
            color: "rgba(235,235,245,0.7)",
            flexShrink: 0,
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showEditButton && (
      <div style={{
          position: "relative",
          width: 21,
          height: 21,
          flexShrink: 0,
        }}>{props.icon1 ?? <SidebarEditButton mode={"dark"} type={"selectable"} />}</div>
      )}
      <div style={{
        position: "relative",
        minWidth: 85,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          width: 34,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(245,245,245)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.title}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.080px",
            color: "rgba(235,235,245,0.7)",
            flexShrink: 0,
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showEditButton && (
      <div style={{
          position: "relative",
          width: 21,
          height: 21,
          flexShrink: 0,
        }}>{props.icon1 ?? <SidebarEditButton mode={"light"} type={"selectable"} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "var(--accents-blue)",
          flexShrink: 0,
        }}>{props.title}</span>
        {props.showSubtitle && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
        }}>{props.subtitle}</span>
        )}
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--fills-vibrant-tertiary)",
      ...props.style,
    }}>
      {props.showEditButton && (
      <div style={{
          position: "relative",
          width: 21,
          height: 21,
          flexShrink: 0,
        }}>{props.icon1 ?? <SidebarEditButton mode={"light"} type={"selectable"} />}</div>
      )}
      <div style={{
        position: "relative",
        minWidth: 85,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 34,
          height: 28,
          flexShrink: 0,
        }}>
          <svg width={28} height={28} viewBox="0 0 28 28" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 0,
            width: 28,
            height: 28,
          }}>
            <path d={"M 13 28 L 4.8 28 C 3.12 28 2.279 28 1.638 27.673 C 1.073 27.385 0.615 26.927 0.327 26.362 C 0 25.721 0 24.88 0 23.2 L 0 15 L 13 15 L 13 28 Z M 28 23.2 C 28 24.88 28 25.721 27.673 26.362 C 27.385 26.927 26.927 27.385 26.362 27.673 C 25.721 28 24.88 28 23.2 28 L 15 28 L 15 15 L 28 15 L 28 23.2 Z M 13 0 L 13 13 L 0 13 L 0 4.8 C 0 3.12 0 2.279 0.327 1.638 C 0.615 1.073 1.073 0.615 1.638 0.327 C 2.279 0 3.12 0 4.8 0 L 13 0 Z M 23.2 0 C 24.88 0 25.721 0 26.362 0.327 C 26.927 0.615 27.385 1.073 27.673 1.638 C 28 2.279 28 3.12 28 4.8 L 28 13 L 15 13 L 15 0 L 23.2 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "var(--accents-blue)",
            flexShrink: 0,
          }}>{props.title}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.080px",
            color: "rgba(60,60,67,0.6)",
            flexShrink: 0,
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showEditButton && (
      <div style={{
          position: "relative",
          width: 21,
          height: 21,
          flexShrink: 0,
        }}>{props.icon1 ?? <SidebarEditButton mode={"light"} type={"selectable"} />}</div>
      )}
      <div style={{
        position: "relative",
        minWidth: 85,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 34,
          borderRadius: 6,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div className="fig-asset-eae313a48883a46e" style={{
            position: "relative",
            width: 28,
            height: 28,
            borderRadius: 6,
            boxShadow: "0 0 0 0.500px rgba(0,0,0,0.06)",
            flexShrink: 0,
          }} />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "var(--accents-blue)",
            flexShrink: 0,
          }}>{props.title}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.080px",
            color: "rgba(60,60,67,0.6)",
            flexShrink: 0,
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showEditButton && (
      <div style={{
          position: "relative",
          width: 21,
          height: 21,
          flexShrink: 0,
        }}>{props.icon1 ?? <SidebarEditButton mode={"light"} type={"selectable"} />}</div>
      )}
      <div style={{
        position: "relative",
        minWidth: 85,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          width: 34,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--accents-blue)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "var(--accents-blue)",
            flexShrink: 0,
          }}>{props.title}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.080px",
            color: "rgba(60,60,67,0.6)",
            flexShrink: 0,
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showEditButton && (
      <div style={{
          position: "relative",
          width: 21,
          height: 21,
          flexShrink: 0,
        }}>{props.icon1 ?? <SidebarEditButton mode={"light"} type={"selectable"} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "var(--labels-primary)",
          flexShrink: 0,
        }}>{props.title}</span>
        {props.showSubtitle && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
        }}>{props.subtitle}</span>
        )}
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--fills-vibrant-tertiary)",
      ...props.style,
    }}>
      {props.showEditButton && (
      <div style={{
          position: "relative",
          width: 21,
          height: 21,
          flexShrink: 0,
        }}>{props.icon1 ?? <SidebarEditButton mode={"light"} type={"selectable"} />}</div>
      )}
      <div style={{
        position: "relative",
        minWidth: 85,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 34,
          height: 28,
          flexShrink: 0,
        }}>
          <svg width={28} height={28} viewBox="0 0 28 28" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 0,
            width: 28,
            height: 28,
          }}>
            <path d={"M 13 28 L 4.8 28 C 3.12 28 2.279 28 1.638 27.673 C 1.073 27.385 0.615 26.927 0.327 26.362 C 0 25.721 0 24.88 0 23.2 L 0 15 L 13 15 L 13 28 Z M 28 23.2 C 28 24.88 28 25.721 27.673 26.362 C 27.385 26.927 26.927 27.385 26.362 27.673 C 25.721 28 24.88 28 23.2 28 L 15 28 L 15 15 L 28 15 L 28 23.2 Z M 13 0 L 13 13 L 0 13 L 0 4.8 C 0 3.12 0 2.279 0.327 1.638 C 0.615 1.073 1.073 0.615 1.638 0.327 C 2.279 0 3.12 0 4.8 0 L 13 0 Z M 23.2 0 C 24.88 0 25.721 0 26.362 0.327 C 26.927 0.615 27.385 1.073 27.673 1.638 C 28 2.279 28 3.12 28 4.8 L 28 13 L 15 13 L 15 0 L 23.2 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.title}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.080px",
            color: "rgba(60,60,67,0.6)",
            flexShrink: 0,
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showEditButton && (
      <div style={{
          position: "relative",
          width: 21,
          height: 21,
          flexShrink: 0,
        }}>{props.icon1 ?? <SidebarEditButton mode={"light"} type={"selectable"} />}</div>
      )}
      <div style={{
        position: "relative",
        minWidth: 85,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 34,
          borderRadius: 6,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div className="fig-asset-eae313a48883a46e" style={{
            position: "relative",
            width: 28,
            height: 28,
            borderRadius: 6,
            boxShadow: "0 0 0 0.500px rgba(0,0,0,0.06)",
            flexShrink: 0,
          }} />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.title}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.080px",
            color: "rgba(60,60,67,0.6)",
            flexShrink: 0,
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showEditButton && (
      <div style={{
          position: "relative",
          width: 21,
          height: 21,
          flexShrink: 0,
        }}>{props.icon1 ?? <SidebarEditButton mode={"light"} type={"selectable"} />}</div>
      )}
      <div style={{
        position: "relative",
        minWidth: 85,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          width: 34,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--labels-vibrant-primary)",
          flexShrink: 0,
        }}>{props.symbol}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "var(--labels-primary)",
            flexShrink: 0,
          }}>{props.title}</span>
          {props.showSubtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.080px",
            color: "rgba(60,60,67,0.6)",
            flexShrink: 0,
          }}>{props.subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, State=Selected, Image=Hidden
    "mode=dark|state=selected|image=hidden": __body0,
    // figma: Mode=Dark, State=Selected, Image=Collection
    "mode=dark|state=selected|image=collection": __body1,
    // figma: Mode=Dark, State=Selected, Image=Bitmap
    "mode=dark|state=selected|image=bitmap": __body2,
    // figma: Mode=Dark, State=Selected, Image=Symbol
    "mode=dark|state=selected|image=symbol": __body3,
    // figma: Mode=Dark, State=Default, Image=Hidden
    "mode=dark|state=default|image=hidden": __body4,
    // figma: Mode=Dark, State=Default, Image=Collection
    "mode=dark|state=default|image=collection": __body5,
    // figma: Mode=Dark, State=Default, Image=Bitmap
    "mode=dark|state=default|image=bitmap": __body6,
    // figma: Mode=Dark, State=Default, Image=Symbol
    "mode=dark|state=default|image=symbol": __body7,
    // figma: Mode=Light, State=Selected, Image=Hidden
    "mode=light|state=selected|image=hidden": __body8,
    // figma: Mode=Light, State=Selected, Image=Collection
    "mode=light|state=selected|image=collection": __body9,
    // figma: Mode=Light, State=Selected, Image=Bitmap
    "mode=light|state=selected|image=bitmap": __body10,
    // figma: Mode=Light, State=Selected, Image=Symbol
    "mode=light|state=selected|image=symbol": __body11,
    // figma: Mode=Light, State=Default, Image=Hidden
    "mode=light|state=default|image=hidden": __body12,
    // figma: Mode=Light, State=Default, Image=Collection
    "mode=light|state=default|image=collection": __body13,
    // figma: Mode=Light, State=Default, Image=Bitmap
    "mode=light|state=default|image=bitmap": __body14,
    // figma: Mode=Light, State=Default, Image=Symbol
    "mode=light|state=default|image=symbol": __body15,
  };
  return (__impls[__vkey(props)] ?? __body15)();
}
export default SidebarLeading;
