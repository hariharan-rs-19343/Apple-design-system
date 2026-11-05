import { Materials } from '../materials/Materials.jsx';

// figma node: 9:56392 Progress Bar - Toolbar (11 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "value=" + __venc(p.value);

export function ProgressBarToolbar(_p = {}) {
  const props = { ..._p, statusText: _p.statusText ?? "Status...", value: _p.value ?? "0%" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 83,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 83,
        }}>
        <Materials
          style={{ transform: "scale(4.020, 0.830)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <svg width={402} height={4} viewBox="0 0 402 4" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 4,
        color: "var(--accents-blue)",
      }}>
        <path d={"M 0 0 L 402 0 L 402 4 L 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 178,
        top: 16,
        width: 44,
        height: 13,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
      }}>{props.statusText}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 83,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 83,
        }}>
        <Materials
          style={{ transform: "scale(4.020, 0.830)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <svg width={361.800} height={4} viewBox="0 0 361.800 4" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 361.8,
        height: 4,
        color: "var(--accents-blue)",
      }}>
        <path d={"M 0 0 L 361.8 0 L 361.8 4 L 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 178,
        top: 16,
        width: 44,
        height: 13,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
      }}>{props.statusText}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 83,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 83,
        }}>
        <Materials
          style={{ transform: "scale(4.020, 0.830)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <svg width={321.600} height={4} viewBox="0 0 321.600 4" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 321.6,
        height: 4,
        color: "var(--accents-blue)",
      }}>
        <path d={"M 0 0 L 321.6 0 L 321.6 4 L 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 178,
        top: 16,
        width: 44,
        height: 13,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
      }}>{props.statusText}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 83,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 83,
        }}>
        <Materials
          style={{ transform: "scale(4.020, 0.830)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <svg width={281.400} height={4} viewBox="0 0 281.400 4" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 281.4,
        height: 4,
        color: "var(--accents-blue)",
      }}>
        <path d={"M 0 0 L 281.4 0 L 281.4 4 L 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 178,
        top: 16,
        width: 44,
        height: 13,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
      }}>{props.statusText}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 83,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 83,
        }}>
        <Materials
          style={{ transform: "scale(4.020, 0.830)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <svg width={241.200} height={4} viewBox="0 0 241.200 4" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 241.2,
        height: 4,
        color: "var(--accents-blue)",
      }}>
        <path d={"M 0 0 L 241.2 0 L 241.2 4 L 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 178,
        top: 16,
        width: 44,
        height: 13,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
      }}>{props.statusText}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 83,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 83,
        }}>
        <Materials
          style={{ transform: "scale(4.020, 0.830)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <svg width={201} height={4} viewBox="0 0 201 4" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 201,
        height: 4,
        color: "var(--accents-blue)",
      }}>
        <path d={"M 0 0 L 201 0 L 201 4 L 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 178,
        top: 16,
        width: 44,
        height: 13,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
      }}>{props.statusText}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 83,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 83,
        }}>
        <Materials
          style={{ transform: "scale(4.020, 0.830)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <svg width={160.800} height={4} viewBox="0 0 160.800 4" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 160.8,
        height: 4,
        color: "var(--accents-blue)",
      }}>
        <path d={"M 0 0 L 160.8 0 L 160.8 4 L 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 178,
        top: 16,
        width: 44,
        height: 13,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
      }}>{props.statusText}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 83,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 83,
        }}>
        <Materials
          style={{ transform: "scale(4.020, 0.830)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <svg width={120.600} height={4} viewBox="0 0 120.600 4" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 120.6,
        height: 4,
        color: "var(--accents-blue)",
      }}>
        <path d={"M 0 0 L 120.6 0 L 120.6 4 L 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 178,
        top: 16,
        width: 44,
        height: 13,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
      }}>{props.statusText}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 83,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 83,
        }}>
        <Materials
          style={{ transform: "scale(4.020, 0.830)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <svg width={80.400} height={4} viewBox="0 0 80.400 4" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 80.4,
        height: 4,
        color: "var(--accents-blue)",
      }}>
        <path d={"M 0 0 L 80.4 0 L 80.4 4 L 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 178,
        top: 16,
        width: 44,
        height: 13,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
      }}>{props.statusText}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 83,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 83,
        }}>
        <Materials
          style={{ transform: "scale(4.020, 0.830)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <svg width={40.200} height={4} viewBox="0 0 40.200 4" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 40.2,
        height: 4,
        color: "var(--accents-blue)",
      }}>
        <path d={"M 0 0 L 40.2 0 L 40.2 4 L 0 4 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 178,
        top: 16,
        width: 44,
        height: 13,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
      }}>{props.statusText}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 83,
      borderTop: "0.333px solid rgba(0,0,0,0.3)",
      borderRight: "0.333px solid rgba(0,0,0,0.3)",
      borderBottom: "0.333px solid rgba(0,0,0,0.3)",
      borderLeft: "0.333px solid rgba(0,0,0,0.3)",
      backdropFilter: "blur(20px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 83,
        }}>
        <Materials
          style={{ transform: "scale(4.020, 0.830)", transformOrigin: "0 0" }}
          style2={"chrome"}
        />
      </div>
      <span style={{
        position: "absolute",
        left: 178,
        top: 16,
        width: 44,
        height: 13,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        letterSpacing: "-0.400px",
        color: "var(--labels-primary)",
      }}>{props.statusText}</span>
    </div>
  );
  const __impls = {
    // figma: Value=100%
    "value=100%25": __body0,
    // figma: Value=90%
    "value=90%25": __body1,
    // figma: Value=80%
    "value=80%25": __body2,
    // figma: Value=70%
    "value=70%25": __body3,
    // figma: Value=60%
    "value=60%25": __body4,
    // figma: Value=50%
    "value=50%25": __body5,
    // figma: Value=40%
    "value=40%25": __body6,
    // figma: Value=30%
    "value=30%25": __body7,
    // figma: Value=20%
    "value=20%25": __body8,
    // figma: Value=10%
    "value=10%25": __body9,
    // figma: Value=0%
    "value=0%25": __body10,
  };
  return (__impls[__vkey(props)] ?? __body10)();
}
export default ProgressBarToolbar;
