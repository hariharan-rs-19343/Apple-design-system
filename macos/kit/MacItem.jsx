// figma node: 121:11514 Item (18 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "type=" + __venc(p.type) + '|' + "state=" + __venc(p.state);

export function MacItem(_p = {}) {
  const props = { ..._p, detail: _p.detail ?? "Detail", label: _p.label ?? "Label", showDetail: _p.showDetail ?? true, leadingSymbol: _p.leadingSymbol ?? "􀓔", size: _p.size ?? "sm", type: _p.type ?? "symbol", state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 270,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        opacity: 0.5,
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 5,
        padding: "10px 10px 10px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 24,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={20} viewBox="0 0 20 20" fill="none" style={{
            position: "relative",
            width: 20,
            borderRadius: 3,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 15.2 0 C 16.88 0 17.72 0 18.362 0.327 C 18.926 0.615 19.385 1.074 19.673 1.638 C 20 2.28 20 3.12 20 4.8 L 20 15.2 C 20 16.88 20 17.72 19.673 18.362 C 19.385 18.926 18.926 19.385 18.362 19.673 C 17.72 20 16.88 20 15.2 20 L 4.8 20 C 3.12 20 2.28 20 1.638 19.673 C 1.074 19.385 0.615 18.926 0.327 18.362 C 0 17.72 0 16.88 0 15.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 270,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "rgba(0,0,0,0.11)",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        padding: "10px 10px 10px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 24,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={20} viewBox="0 0 20 20" fill="none" style={{
            position: "relative",
            width: 20,
            borderRadius: 3,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 15.2 0 C 16.88 0 17.72 0 18.362 0.327 C 18.926 0.615 19.385 1.074 19.673 1.638 C 20 2.28 20 3.12 20 4.8 L 20 15.2 C 20 16.88 20 17.72 19.673 18.362 C 19.385 18.926 18.926 19.385 18.362 19.673 C 17.72 20 16.88 20 15.2 20 L 4.8 20 C 3.12 20 2.28 20 1.638 19.673 C 1.074 19.385 0.615 18.926 0.327 18.362 C 0 17.72 0 16.88 0 15.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 270,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 5,
        padding: "10px 10px 10px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 24,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={20} viewBox="0 0 20 20" fill="none" style={{
            position: "relative",
            width: 20,
            borderRadius: 3,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 15.2 0 C 16.88 0 17.72 0 18.362 0.327 C 18.926 0.615 19.385 1.074 19.673 1.638 C 20 2.28 20 3.12 20 4.8 L 20 15.2 C 20 16.88 20 17.72 19.673 18.362 C 19.385 18.926 18.926 19.385 18.362 19.673 C 17.72 20 16.88 20 15.2 20 L 4.8 20 C 3.12 20 2.28 20 1.638 19.673 C 1.074 19.385 0.615 18.926 0.327 18.362 C 0 17.72 0 16.88 0 15.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 270,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        opacity: 0.5,
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "10px 10px 10px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 24,
          height: 16,
          flexShrink: 0,
        }}>
          <span style={{
            position: "absolute",
            left: 2,
            top: 0,
            width: 20,
            height: 16,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
          }}>{props.leadingSymbol}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 270,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "rgba(0,0,0,0.11)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "10px 10px 10px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 24,
          height: 16,
          flexShrink: 0,
        }}>
          <span style={{
            position: "absolute",
            left: 2,
            top: 0,
            width: 20,
            height: 16,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(0,122,255)",
          }}>{props.leadingSymbol}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 270,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "10px 10px 10px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 24,
          height: 16,
          flexShrink: 0,
        }}>
          <span style={{
            position: "absolute",
            left: 2,
            top: 0,
            width: 20,
            height: 16,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 15,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgba(0,0,0,0.85)",
          }}>{props.leadingSymbol}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 15,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 270,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        opacity: 0.5,
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "8px 10px 8px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 22,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18} viewBox="0 0 18 18" fill="none" style={{
            position: "relative",
            width: 18,
            borderRadius: 3,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 270,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "rgba(0,0,0,0.11)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "8px 10px 8px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 22,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18} viewBox="0 0 18 18" fill="none" style={{
            position: "relative",
            width: 18,
            borderRadius: 3,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 270,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "8px 10px 8px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 22,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18} viewBox="0 0 18 18" fill="none" style={{
            position: "relative",
            width: 18,
            borderRadius: 3,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 13.2 0 C 14.88 0 15.72 0 16.362 0.327 C 16.926 0.615 17.385 1.074 17.673 1.638 C 18 2.28 18 3.12 18 4.8 L 18 13.2 C 18 14.88 18 15.72 17.673 16.362 C 17.385 16.926 16.926 17.385 16.362 17.673 C 15.72 18 14.88 18 13.2 18 L 4.8 18 C 3.12 18 2.28 18 1.638 17.673 C 1.074 17.385 0.615 16.926 0.327 16.362 C 0 15.72 0 14.88 0 13.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 270,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        opacity: 0.5,
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "8px 10px 8px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 22,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 1,
            top: 0,
            width: 20,
            height: 16,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
          }}>{props.leadingSymbol}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 270,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "rgba(0,0,0,0.11)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "8px 10px 8px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 22,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 1,
            top: 0,
            width: 20,
            height: 16,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgb(0,122,255)",
          }}>{props.leadingSymbol}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 270,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "8px 10px 8px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 22,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 1,
            top: 0,
            width: 20,
            height: 16,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 13,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.85)",
          }}>{props.leadingSymbol}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 270,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        opacity: 0.5,
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "4px 10px 4px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            borderRadius: 3,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 9.2 0 C 10.88 0 11.72 0 12.362 0.327 C 12.926 0.615 13.385 1.074 13.673 1.638 C 14 2.28 14 3.12 14 4.8 L 14 9.2 C 14 10.88 14 11.72 13.673 12.362 C 13.385 12.926 12.926 13.385 12.362 13.673 C 11.72 14 10.88 14 9.2 14 L 4.8 14 C 3.12 14 2.28 14 1.638 13.673 C 1.074 13.385 0.615 12.926 0.327 12.362 C 0 11.72 0 10.88 0 9.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 270,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "rgba(0,0,0,0.11)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "4px 10px 4px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            borderRadius: 3,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 9.2 0 C 10.88 0 11.72 0 12.362 0.327 C 12.926 0.615 13.385 1.074 13.673 1.638 C 14 2.28 14 3.12 14 4.8 L 14 9.2 C 14 10.88 14 11.72 13.673 12.362 C 13.385 12.926 12.926 13.385 12.362 13.673 C 11.72 14 10.88 14 9.2 14 L 4.8 14 C 3.12 14 2.28 14 1.638 13.673 C 1.074 13.385 0.615 12.926 0.327 12.362 C 0 11.72 0 10.88 0 9.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 270,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "4px 10px 4px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            borderRadius: 3,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 0 4.8 C 0 3.12 0 2.28 0.327 1.638 C 0.615 1.074 1.074 0.615 1.638 0.327 C 2.28 0 3.12 0 4.8 0 L 9.2 0 C 10.88 0 11.72 0 12.362 0.327 C 12.926 0.615 13.385 1.074 13.673 1.638 C 14 2.28 14 3.12 14 4.8 L 14 9.2 C 14 10.88 14 11.72 13.673 12.362 C 13.385 12.926 12.926 13.385 12.362 13.673 C 11.72 14 10.88 14 9.2 14 L 4.8 14 C 3.12 14 2.28 14 1.638 13.673 C 1.074 13.385 0.615 12.926 0.327 12.362 C 0 11.72 0 10.88 0 9.2 L 0 4.8 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 270,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        opacity: 0.5,
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: -2,
            top: 0,
            width: 20,
            height: 16,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 11,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
          }}>{props.leadingSymbol}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 270,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "rgba(0,0,0,0.11)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: -2,
            top: 0,
            width: 20,
            height: 16,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 11,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgb(0,122,255)",
          }}>{props.leadingSymbol}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 270,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px 0px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: -2,
            top: 0,
            width: 20,
            height: 16,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 11,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.85)",
          }}>{props.leadingSymbol}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.showDetail && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 11,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.detail}</span>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: Size=Large, Type=Image, State=Disabled
    "size=lg|type=image|state=disabled": __body0,
    // figma: Size=Large, Type=Image, State=Selected
    "size=lg|type=image|state=selected": __body1,
    // figma: Size=Large, Type=Image, State=Default
    "size=lg|type=image|state=default": __body2,
    // figma: Size=Large, Type=Symbol, State=Disabled
    "size=lg|type=symbol|state=disabled": __body3,
    // figma: Size=Large, Type=Symbol, State=Selected
    "size=lg|type=symbol|state=selected": __body4,
    // figma: Size=Large, Type=Symbol, State=Default
    "size=lg|type=symbol|state=default": __body5,
    // figma: Size=Medium, Type=Image, State=Disabled
    "size=md|type=image|state=disabled": __body6,
    // figma: Size=Medium, Type=Image, State=Selected
    "size=md|type=image|state=selected": __body7,
    // figma: Size=Medium, Type=Image, State=Default
    "size=md|type=image|state=default": __body8,
    // figma: Size=Medium, Type=Symbol, State=Disabled
    "size=md|type=symbol|state=disabled": __body9,
    // figma: Size=Medium, Type=Symbol, State=Selected
    "size=md|type=symbol|state=selected": __body10,
    // figma: Size=Medium, Type=Symbol, State=Default
    "size=md|type=symbol|state=default": __body11,
    // figma: Size=Small, Type=Image, State=Disabled
    "size=sm|type=image|state=disabled": __body12,
    // figma: Size=Small, Type=Image, State=Selected
    "size=sm|type=image|state=selected": __body13,
    // figma: Size=Small, Type=Image, State=Default
    "size=sm|type=image|state=default": __body14,
    // figma: Size=Small, Type=Symbol, State=Disabled
    "size=sm|type=symbol|state=disabled": __body15,
    // figma: Size=Small, Type=Symbol, State=Selected
    "size=sm|type=symbol|state=selected": __body16,
    // figma: Size=Small, Type=Symbol, State=Default
    "size=sm|type=symbol|state=default": __body17,
  };
  return (__impls[__vkey(props)] ?? __body17)();
}
export default MacItem;
