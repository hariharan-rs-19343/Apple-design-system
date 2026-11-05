import { Fill } from './Fill.jsx';
import { Knob } from './Knob.jsx';
import { Separator } from '../lists/Separator.jsx';
import { Ticks } from './Ticks.jsx';
import { Track } from './Track.jsx';

// figma node: 7:53847 Sliders (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "value=" + __venc(p.value);

export function Sliders(_p = {}) {
  const props = { ..._p, showSymbols: _p.showSymbols ?? true, showTicks: _p.showTicks ?? true, symbolMin: _p.symbolMin ?? "􀓑", symbolMax: _p.symbolMax ?? "􀓏", value: _p.value ?? "0%" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 52,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 1px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <Separator
        style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbols && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.symbolMin}</span>
        )}
        <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
          <Track style={{
              position: "absolute",
              left: 0,
              top: 22,
              width: 280,
              height: 6,
            }} />
          <Fill style={{
              position: "absolute",
              left: 0,
              top: 22,
              width: 280,
              height: 6,
            }} />
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            width: 248,
            height: 24,
          }}>
            {props.showTicks && (
            <Ticks style={{
                position: "absolute",
                left: 0,
                top: 19,
                width: 248,
              }} />
            )}
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 1.112,
                height: 24,
                transform: "matrix(-1,0,0,1,246,0)",
                transformOrigin: "0 0",
              }}>{props.icon1 ?? <Knob style={{ transform: "scale(0.556, 1)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
        {props.showSymbols && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.symbolMax}</span>
        )}
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 52,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 1px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <Separator
        style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbols && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.symbolMin}</span>
        )}
        <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
          <Track style={{
              position: "absolute",
              left: 0,
              top: 22,
              width: 280,
              height: 6,
            }} />
          <div style={{
              position: "absolute",
              left: 0,
              top: 22,
              width: 211.12,
              height: 6,
            }}>
            <Fill style={{ transform: "scale(0.749, 1)", transformOrigin: "0 0" }} />
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            width: 248,
            height: 24,
          }}>
            {props.showTicks && (
            <Ticks style={{
                position: "absolute",
                left: 0,
                top: 19,
                width: 248,
              }} />
            )}
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 1.104,
                height: 24,
                transform: "matrix(-1,0,0,1,185.615,0)",
                transformOrigin: "0 0",
              }}>{props.icon1 ?? <Knob style={{ transform: "scale(0.552, 1)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
        {props.showSymbols && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.symbolMax}</span>
        )}
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 52,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 1px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <Separator
        style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbols && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.symbolMin}</span>
        )}
        <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
          <Track style={{
              position: "absolute",
              left: 0,
              top: 22,
              width: 280,
              height: 6,
            }} />
          <div style={{
              position: "absolute",
              left: 0,
              top: 22,
              width: 142.24,
              height: 6,
            }}>
            <Fill style={{ transform: "scale(0.504, 1)", transformOrigin: "0 0" }} />
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            width: 248,
            height: 24,
          }}>
            {props.showTicks && (
            <Ticks style={{
                position: "absolute",
                left: 0,
                top: 19,
                width: 248,
              }} />
            )}
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 1.112,
                height: 24,
                transform: "matrix(-1,0,0,1,124.556,0)",
                transformOrigin: "0 0",
              }}>{props.icon1 ?? <Knob style={{ transform: "scale(0.556, 1)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
        {props.showSymbols && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.symbolMax}</span>
        )}
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 52,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 1px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <Separator
        style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbols && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.symbolMin}</span>
        )}
        <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
          <Track style={{
              position: "absolute",
              left: 0,
              top: 22,
              width: 280,
              height: 6,
            }} />
          <div style={{
              position: "absolute",
              left: 0,
              top: 22,
              width: 73.92,
              height: 6,
            }}>
            <Fill style={{ transform: "scale(0.262, 1)", transformOrigin: "0 0" }} />
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            width: 248,
            height: 24,
          }}>
            {props.showTicks && (
            <Ticks style={{
                position: "absolute",
                left: 0,
                top: 19,
                width: 248,
              }} />
            )}
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 1.104,
                height: 24,
                transform: "matrix(-1,0,0,1,63.599,0)",
                transformOrigin: "0 0",
              }}>{props.icon1 ?? <Knob style={{ transform: "scale(0.552, 1)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
        {props.showSymbols && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.symbolMax}</span>
        )}
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 52,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 1px 16px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <Separator
        style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
      />
      <div style={{
        position: "relative",
        borderRadius: "0px 0px 1px 0px",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showSymbols && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.symbolMin}</span>
        )}
        <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
          <Track style={{
              position: "absolute",
              left: 0,
              top: 22,
              width: 280,
              height: 6,
            }} />
          <div style={{
            position: "absolute",
            left: 16,
            top: 13,
            width: 248,
            height: 24,
          }}>
            {props.showTicks && (
            <Ticks style={{
                position: "absolute",
                left: 0,
                top: 19,
                width: 248,
              }} />
            )}
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 1.112,
                height: 24,
                transform: "matrix(-1,0,0,1,4,0)",
                transformOrigin: "0 0",
              }}>{props.icon1 ?? <Knob style={{ transform: "scale(0.556, 1)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
        {props.showSymbols && (
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.symbolMax}</span>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: Value=100%
    "value=100%25": __body0,
    // figma: Value=75%
    "value=75%25": __body1,
    // figma: Value=50%
    "value=50%25": __body2,
    // figma: Value=25%
    "value=25%25": __body3,
    // figma: Value=0%
    "value=0%25": __body4,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default Sliders;
