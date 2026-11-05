import { WatchBackground } from './WatchBackground.jsx';

// figma node: 6503:6616 Widgets (60 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "size=" + __venc(p.size);

export function WatchWidgets(_p = {}) {
  const props = { ..._p, type: _p.type ?? "accessory widget group", size: _p.size ?? "40mm", line1: _p.line1 ?? "Line 1", column5Low: _p.column5Low ?? "C5L", column1Low: _p.column1Low ?? "C1L", column3Low: _p.column3Low ?? "C3L", column2Low: _p.column2Low ?? "C2L", symbol: _p.symbol ?? "􀓔", column4Low: _p.column4Low ?? "C4L", line2: _p.line2 ?? "Line 2", line3: _p.line3 ?? "Line 3", line4: _p.line4 ?? "Line 4", line5: _p.line5 ?? "Line 5", line6: _p.line6 ?? "Line 6", metric: _p.metric ?? "Metric", column1High: _p.column1High ?? "C1H", column2High: _p.column2High ?? "C2H", column3High: _p.column3High ?? "C3H", column4High: _p.column4High ?? "C4H", column5High: _p.column5High ?? "C5H" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 191,
      height: 81.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 191,
          height: 82,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 125.5,
        top: 15.5,
        width: 50,
        height: 50,
        fontFamily: "\"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 18,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,59,48,0.5)",
      }}>{props.symbol}</span>
      <span style={{
        position: "absolute",
        left: 16,
        top: 41,
        width: 99.5,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 26,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 16,
        top: 15.5,
        width: 99.5,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 15,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line1}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 194,
      height: 80.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 194,
          height: 81,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 129,
        top: 16,
        width: 49,
        height: 49,
        fontFamily: "\"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,59,48,0.5)",
      }}>{props.symbol}</span>
      <span style={{
        position: "absolute",
        left: 16,
        top: 40.5,
        width: 103,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 26,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 16,
        top: 15,
        width: 103,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 15,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line1}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 173,
      height: 76.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 173,
          height: 77,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 110.5,
        top: 15,
        width: 48,
        height: 48,
        fontFamily: "\"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,59,48,0.5)",
      }}>{props.symbol}</span>
      <span style={{
        position: "absolute",
        left: 14,
        top: 38.5,
        width: 86.5,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 26,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 14,
        top: 13,
        width: 86.5,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 15,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line1}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 176,
      height: 72.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 176,
          height: 73,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 117,
        top: 13.5,
        width: 45,
        height: 45,
        fontFamily: "\"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,59,48,0.5)",
      }}>{props.symbol}</span>
      <span style={{
        position: "absolute",
        left: 14,
        top: 35,
        width: 93,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 24,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 14,
        top: 12.5,
        width: 93,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line1}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 152,
      height: 69.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 69.5,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 96,
        top: 14,
        width: 41,
        height: 41,
        fontFamily: "\"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,59,48,0.5)",
      }}>{props.symbol}</span>
      <span style={{
        position: "absolute",
        left: 12,
        top: 34,
        width: 72.5,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 24,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 12,
        top: 11.5,
        width: 72.5,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line1}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 191,
      height: 81.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 191,
          height: 82,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 125.5,
        top: 15.5,
        width: 50,
        height: 50,
        opacity: 0.2,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <div style={{
        position: "absolute",
        left: 125.5,
        top: 15.5,
        width: 50,
        height: 50,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <span style={{
        position: "absolute",
        left: 125.5,
        top: 15.5,
        width: 50,
        height: 50,
        fontFamily: "\"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 18,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,59,48,0.5)",
      }}>{props.symbol}</span>
      <span style={{
        position: "absolute",
        left: 16,
        top: 50,
        width: 99.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 16,
        top: 31,
        width: 99.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 16,
        top: 12,
        width: 99.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line1}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 194,
      height: 80.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 194,
          height: 81,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 129,
        top: 16,
        width: 49,
        height: 49,
        opacity: 0.2,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <div style={{
        position: "absolute",
        left: 129,
        top: 16,
        width: 49,
        height: 49,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <span style={{
        position: "absolute",
        left: 129,
        top: 16,
        width: 49,
        height: 49,
        fontFamily: "\"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,59,48,0.5)",
      }}>{props.symbol}</span>
      <span style={{
        position: "absolute",
        left: 16,
        top: 49.5,
        width: 103,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 16,
        top: 30.5,
        width: 103,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 16,
        top: 11.5,
        width: 103,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line1}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 173,
      height: 76.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 173,
          height: 77,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 110.5,
        top: 14,
        width: 49,
        height: 49,
        opacity: 0.2,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <div style={{
        position: "absolute",
        left: 110.5,
        top: 14,
        width: 49,
        height: 49,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <span style={{
        position: "absolute",
        left: 110.5,
        top: 14,
        width: 49,
        height: 49,
        fontFamily: "\"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,59,48,0.5)",
      }}>{props.symbol}</span>
      <span style={{
        position: "absolute",
        left: 14,
        top: 47.5,
        width: 86.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 14,
        top: 29,
        width: 86.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 14,
        top: 9.5,
        width: 86.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line1}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 176,
      height: 72.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 176,
          height: 73,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 117,
        top: 13.5,
        width: 45.5,
        height: 45.5,
        opacity: 0.2,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <div style={{
        position: "absolute",
        left: 117,
        top: 13.5,
        width: 45.5,
        height: 45.5,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <span style={{
        position: "absolute",
        left: 117,
        top: 13.5,
        width: 45.5,
        height: 45.5,
        fontFamily: "\"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,59,48,0.5)",
      }}>{props.symbol}</span>
      <span style={{
        position: "absolute",
        left: 14,
        top: 45,
        width: 93,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 14,
        top: 27.5,
        width: 93,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 14,
        top: 10,
        width: 93,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line1}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 152,
      height: 69.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 69.5,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 94.5,
        top: 12,
        width: 45.5,
        height: 45.5,
        opacity: 0.2,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <div style={{
        position: "absolute",
        left: 94.5,
        top: 12,
        width: 45.5,
        height: 45.5,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <span style={{
        position: "absolute",
        left: 94.5,
        top: 12,
        width: 45.5,
        height: 45.5,
        fontFamily: "\"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,59,48,0.5)",
      }}>{props.symbol}</span>
      <span style={{
        position: "absolute",
        left: 12,
        top: 43,
        width: 72.5,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 12,
        top: 26,
        width: 72.5,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 12,
        top: 8,
        width: 72.5,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgba(32,148,250,0.5)",
      }}>{props.line1}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 191,
      height: 81.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 191,
          height: 82,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 10,
        top: 54,
        width: 171,
        height: 12,
        opacity: 0.2,
        borderRadius: 100,
        backgroundColor: "rgb(32,148,250)",
      }} />
      <div style={{
        position: "absolute",
        left: 10,
        top: 54,
        width: 114,
        height: 12,
        borderRadius: 100,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <span style={{
        position: "absolute",
        left: 10,
        top: 30,
        width: 171,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 10,
        top: 10.5,
        width: 171,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 194,
      height: 80.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 194,
          height: 81,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 9.5,
        top: 54,
        width: 175,
        height: 12,
        opacity: 0.2,
        borderRadius: 100,
        backgroundColor: "rgb(32,148,250)",
      }} />
      <div style={{
        position: "absolute",
        left: 9.5,
        top: 54,
        width: 117,
        height: 12,
        borderRadius: 100,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <span style={{
        position: "absolute",
        left: 9.5,
        top: 30,
        width: 175,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 9.5,
        top: 10.5,
        width: 175,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 173,
      height: 76.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 173,
          height: 77,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 7.5,
        top: 51.5,
        width: 158,
        height: 12,
        opacity: 0.2,
        borderRadius: 100,
        backgroundColor: "rgb(32,148,250)",
      }} />
      <div style={{
        position: "absolute",
        left: 7.5,
        top: 51.5,
        width: 106,
        height: 12,
        borderRadius: 100,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <span style={{
        position: "absolute",
        left: 7.5,
        top: 28,
        width: 158,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 7.5,
        top: 8.5,
        width: 158,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 176,
      height: 72.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 176,
          height: 73,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 7,
        top: 47.5,
        width: 162,
        height: 11,
        opacity: 0.2,
        borderRadius: 100,
        backgroundColor: "rgb(32,148,250)",
      }} />
      <div style={{
        position: "absolute",
        left: 7,
        top: 47.5,
        width: 92,
        height: 11,
        borderRadius: 100,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <span style={{
        position: "absolute",
        left: 7,
        top: 26.5,
        width: 162,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 7,
        top: 8,
        width: 162,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 152,
      height: 69.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 69.5,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 7,
        top: 47.5,
        width: 138,
        height: 11,
        opacity: 0.2,
        borderRadius: 100,
        backgroundColor: "rgb(32,148,250)",
      }} />
      <div style={{
        position: "absolute",
        left: 7,
        top: 47.5,
        width: 92,
        height: 11,
        borderRadius: 100,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <span style={{
        position: "absolute",
        left: 7,
        top: 25,
        width: 138,
        height: 18,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 7,
        top: 6.5,
        width: 138,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 191,
      height: 81.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 191,
          height: 82,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 10,
        top: 13.5,
        width: 5,
        height: 55,
        borderRadius: 100,
        backgroundColor: "rgb(32,148,250)",
      }} />
      <span style={{
        position: "absolute",
        left: 20,
        top: 49.5,
        width: 161,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 20,
        top: 30,
        width: 161,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 20,
        top: 10.5,
        width: 161,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 194,
      height: 80.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 194,
          height: 81,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 9.5,
        top: 13,
        width: 5,
        height: 55,
        borderRadius: 100,
        backgroundColor: "rgb(32,148,250)",
      }} />
      <span style={{
        position: "absolute",
        left: 19.5,
        top: 49.5,
        width: 165,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 19.5,
        top: 30,
        width: 165,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 19.5,
        top: 10.5,
        width: 165,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 173,
      height: 76.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 173,
          height: 77,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 7.5,
        top: 11,
        width: 5,
        height: 55,
        borderRadius: 100,
        backgroundColor: "rgb(32,148,250)",
      }} />
      <span style={{
        position: "absolute",
        left: 18,
        top: 47.5,
        width: 147.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 18,
        top: 28,
        width: 147.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 18,
        top: 8.5,
        width: 147.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 176,
      height: 72.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 176,
          height: 73,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 7,
        top: 9,
        width: 5,
        height: 55,
        borderRadius: 100,
        backgroundColor: "rgb(32,148,250)",
      }} />
      <span style={{
        position: "absolute",
        left: 17,
        top: 45,
        width: 152,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 17,
        top: 26.5,
        width: 152,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 17,
        top: 8,
        width: 152,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 152,
      height: 69.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 69.5,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 7,
        top: 9,
        width: 5,
        height: 51.5,
        borderRadius: 100,
        backgroundColor: "rgb(32,148,250)",
      }} />
      <span style={{
        position: "absolute",
        left: 17,
        top: 43.5,
        width: 128,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 17,
        top: 25,
        width: 128,
        height: 18,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 17,
        top: 6.5,
        width: 128,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 191,
      height: 81.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 191,
          height: 82,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 10,
        top: 14.5,
        width: 52,
        height: 52,
        opacity: 0.2,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <div style={{
        position: "absolute",
        left: 10,
        top: 14.5,
        width: 52,
        height: 52,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <span style={{
        position: "absolute",
        left: 10,
        top: 14.5,
        width: 52,
        height: 52,
        fontFamily: "\"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,59,48,0.5)",
      }}>{props.symbol}</span>
      <span style={{
        position: "absolute",
        left: 72,
        top: 49.5,
        width: 109,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 72,
        top: 30,
        width: 109,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 72,
        top: 10.5,
        width: 109,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 194,
      height: 80.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 194,
          height: 81,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 9.5,
        top: 15,
        width: 50,
        height: 50,
        opacity: 0.2,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <div style={{
        position: "absolute",
        left: 9.5,
        top: 15,
        width: 50,
        height: 50,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <span style={{
        position: "absolute",
        left: 9.5,
        top: 15,
        width: 50,
        height: 50,
        fontFamily: "\"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,59,48,0.5)",
      }}>{props.symbol}</span>
      <span style={{
        position: "absolute",
        left: 69,
        top: 49.5,
        width: 115.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 69,
        top: 30,
        width: 115.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 69,
        top: 10.5,
        width: 115.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 173,
      height: 76.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 173,
          height: 77,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 7.5,
        top: 14,
        width: 48,
        height: 48,
        opacity: 0.2,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <div style={{
        position: "absolute",
        left: 7.5,
        top: 14,
        width: 48,
        height: 48,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <span style={{
        position: "absolute",
        left: 7.5,
        top: 14,
        width: 48,
        height: 48,
        fontFamily: "\"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,59,48,0.5)",
      }}>{props.symbol}</span>
      <span style={{
        position: "absolute",
        left: 63,
        top: 47.5,
        width: 102.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 63,
        top: 28,
        width: 102.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 63,
        top: 8.5,
        width: 102.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 176,
      height: 72.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 176,
          height: 73,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 7,
        top: 13.5,
        width: 45,
        height: 45,
        opacity: 0.2,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <div style={{
        position: "absolute",
        left: 7,
        top: 13.5,
        width: 45,
        height: 45,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <span style={{
        position: "absolute",
        left: 7,
        top: 13.5,
        width: 45,
        height: 45,
        fontFamily: "\"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,59,48,0.5)",
      }}>{props.symbol}</span>
      <span style={{
        position: "absolute",
        left: 59,
        top: 45,
        width: 110,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 59,
        top: 26.5,
        width: 110,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 59,
        top: 8,
        width: 110,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 152,
      height: 69.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 69.5,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 7,
        top: 14,
        width: 41,
        height: 41,
        opacity: 0.2,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <div style={{
        position: "absolute",
        left: 7,
        top: 14,
        width: 41,
        height: 41,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4.500px rgb(32,148,250)",
      }} />
      <span style={{
        position: "absolute",
        left: 7,
        top: 14,
        width: 41,
        height: 41,
        fontFamily: "\"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(255,59,48,0.5)",
      }}>{props.symbol}</span>
      <span style={{
        position: "absolute",
        left: 55,
        top: 43.5,
        width: 90,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 55,
        top: 25,
        width: 90,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 55,
        top: 6.5,
        width: 90,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 191,
      height: 81.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 191,
          height: 82,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 100.5,
        top: 49.5,
        width: 80.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line6}</span>
      <span style={{
        position: "absolute",
        left: 100.5,
        top: 30,
        width: 80.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line5}</span>
      <span style={{
        position: "absolute",
        left: 100.5,
        top: 10.5,
        width: 80.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line4}</span>
      <span style={{
        position: "absolute",
        left: 10,
        top: 49.5,
        width: 80.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 10,
        top: 30,
        width: 80.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 10,
        top: 10.5,
        width: 80.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 194,
      height: 80.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 194,
          height: 81,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 101.75,
        top: 49.5,
        width: 82.75,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line6}</span>
      <span style={{
        position: "absolute",
        left: 101.75,
        top: 30,
        width: 82.75,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line5}</span>
      <span style={{
        position: "absolute",
        left: 101.75,
        top: 10.5,
        width: 82.75,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line4}</span>
      <span style={{
        position: "absolute",
        left: 9.5,
        top: 49.5,
        width: 82.75,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 9.5,
        top: 30,
        width: 82.75,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 9.5,
        top: 10.5,
        width: 82.75,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 173,
      height: 76.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 173,
          height: 77,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 90.5,
        top: 47.5,
        width: 75.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line6}</span>
      <span style={{
        position: "absolute",
        left: 90.5,
        top: 28,
        width: 75.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line5}</span>
      <span style={{
        position: "absolute",
        left: 90.5,
        top: 8.5,
        width: 75.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line4}</span>
      <span style={{
        position: "absolute",
        left: 7.5,
        top: 47.5,
        width: 75.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 7.5,
        top: 28,
        width: 75.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 7.5,
        top: 8.5,
        width: 75.5,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: 176,
      height: 72.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 176,
          height: 73,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 91.5,
        top: 45,
        width: 77.5,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line6}</span>
      <span style={{
        position: "absolute",
        left: 91.5,
        top: 26.5,
        width: 77.5,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line5}</span>
      <span style={{
        position: "absolute",
        left: 91.5,
        top: 8,
        width: 77.5,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line4}</span>
      <span style={{
        position: "absolute",
        left: 7,
        top: 45,
        width: 77.5,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 7,
        top: 26.5,
        width: 77.5,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 7,
        top: 8,
        width: 77.5,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 152,
      height: 69.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 69.5,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 79.5,
        top: 43.5,
        width: 65.5,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line6}</span>
      <span style={{
        position: "absolute",
        left: 79.5,
        top: 25,
        width: 65.5,
        height: 18,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
      }}>{props.line5}</span>
      <span style={{
        position: "absolute",
        left: 79.5,
        top: 6.5,
        width: 65.5,
        height: 18,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
      }}>{props.line4}</span>
      <span style={{
        position: "absolute",
        left: 7,
        top: 43.5,
        width: 65.5,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 7,
        top: 25,
        width: 65.5,
        height: 18,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 7,
        top: 6.5,
        width: 65.5,
        height: 18,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: 191,
      height: 81.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 191,
          height: 82,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 10,
        top: 49.5,
        width: 171,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 10,
        top: 30,
        width: 171,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 10,
        top: 10.5,
        width: 171,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: 194,
      height: 80.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 194,
          height: 81,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 9.5,
        top: 49.5,
        width: 175,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 9.5,
        top: 30,
        width: 175,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 9.5,
        top: 10.5,
        width: 175,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: 173,
      height: 76.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 173,
          height: 77,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 7.5,
        top: 47.5,
        width: 158,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 7.5,
        top: 28,
        width: 158,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 7.5,
        top: 8.5,
        width: 158,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: 176,
      height: 72.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 176,
          height: 73,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 7,
        top: 45,
        width: 162,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 7,
        top: 26.5,
        width: 162,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 7,
        top: 8,
        width: 162,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: 152,
      height: 69.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 69.5,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 7,
        top: 43.5,
        width: 138,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 7,
        top: 25,
        width: 138,
        height: 18,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
      }}>{props.line2}</span>
      <span style={{
        position: "absolute",
        left: 7,
        top: 6.5,
        width: 138,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: 191,
      height: 81.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 191,
          height: 82,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 10,
        top: 25,
        width: 171,
        height: 50,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 41.5,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
      }}>{props.metric}</span>
      <span style={{
        position: "absolute",
        left: 10,
        top: 10.5,
        width: 171,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: 194,
      height: 80.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 194,
          height: 81,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 9.5,
        top: 25,
        width: 175,
        height: 50,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 41.5,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
      }}>{props.metric}</span>
      <span style={{
        position: "absolute",
        left: 9.5,
        top: 10.5,
        width: 175,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: 173,
      height: 76.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 173,
          height: 77,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 7.5,
        top: 23.5,
        width: 158,
        height: 50,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 41.5,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
      }}>{props.metric}</span>
      <span style={{
        position: "absolute",
        left: 7.5,
        top: 8.5,
        width: 158,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: 176,
      height: 72.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 176,
          height: 73,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 7,
        top: 22,
        width: 162,
        height: 48,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 40.5,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
      }}>{props.metric}</span>
      <span style={{
        position: "absolute",
        left: 7,
        top: 8,
        width: 162,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: 152,
      height: 69.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 69.5,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 7,
        top: 22,
        width: 138,
        height: 45,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 38,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
      }}>{props.metric}</span>
      <span style={{
        position: "absolute",
        left: 7,
        top: 6.5,
        width: 138,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: 191,
      height: 81.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 191,
          height: 82,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 142.5,
        top: 52.5,
        width: 38.5,
        height: 19.5,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 142.5,
        top: 34.5,
        width: 38.5,
        height: 19.5,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
      <span style={{
        position: "absolute",
        left: 10,
        top: 29,
        width: 122.5,
        height: 52.5,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 41.5,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
      }}>{props.metric}</span>
      <span style={{
        position: "absolute",
        left: 10,
        top: 10,
        width: 171,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: 194,
      height: 80.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 194,
          height: 81,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 146,
        top: 52,
        width: 38.5,
        height: 19.5,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 146,
        top: 34,
        width: 38.5,
        height: 19.5,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
      <span style={{
        position: "absolute",
        left: 9.5,
        top: 28.5,
        width: 127,
        height: 52,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 41.5,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
      }}>{props.metric}</span>
      <span style={{
        position: "absolute",
        left: 9.5,
        top: 9.5,
        width: 175,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: 173,
      height: 76.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 173,
          height: 77,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 127,
        top: 49.5,
        width: 38.5,
        height: 19.5,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 127,
        top: 31.5,
        width: 38.5,
        height: 19.5,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
      <span style={{
        position: "absolute",
        left: 7.5,
        top: 26.5,
        width: 112,
        height: 50,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 41.5,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
      }}>{props.metric}</span>
      <span style={{
        position: "absolute",
        left: 7.5,
        top: 7.5,
        width: 158,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 17,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: 176,
      height: 72.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 176,
          height: 73,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 132.5,
        top: 47.5,
        width: 36.5,
        height: 18.5,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 132.5,
        top: 30.5,
        width: 36.5,
        height: 18.5,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
      <span style={{
        position: "absolute",
        left: 7,
        top: 25.5,
        width: 118.5,
        height: 47,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 40.5,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
      }}>{props.metric}</span>
      <span style={{
        position: "absolute",
        left: 7,
        top: 6.5,
        width: 162,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: 152,
      height: 69.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 69.5,
        }}
        style2={"over dark background"}
      />
      <span style={{
        position: "absolute",
        left: 108.5,
        top: 45,
        width: 36.5,
        height: 18.5,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line3}</span>
      <span style={{
        position: "absolute",
        left: 108.5,
        top: 28,
        width: 36.5,
        height: 18.5,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
      <span style={{
        position: "absolute",
        left: 7,
        top: 24.5,
        width: 94.5,
        height: 45,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 38,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
      }}>{props.metric}</span>
      <span style={{
        position: "absolute",
        left: 7,
        top: 6,
        width: 138,
        height: 19,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "18.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: 191,
      height: 81.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 191,
          height: 82,
        }}
        style2={"over dark background"}
      />
      <div className="fig-asset-7f12ea1300756f14" style={{
        position: "absolute",
        left: 129,
        top: 15,
        width: 52,
        height: 52,
        borderRadius: "50%",
      }} />
      <div className="fig-asset-7f12ea1300756f14" style={{
        position: "absolute",
        left: 69.5,
        top: 15,
        width: 52,
        height: 52,
        borderRadius: "50%",
      }} />
      <div className="fig-asset-7f12ea1300756f14" style={{
        position: "absolute",
        left: 10,
        top: 15,
        width: 52,
        height: 52,
        borderRadius: "50%",
      }} />
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: 194,
      height: 80.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 194,
          height: 81,
        }}
        style2={"over dark background"}
      />
      <div className="fig-asset-7f12ea1300756f14" style={{
        position: "absolute",
        left: 134.5,
        top: 15,
        width: 50,
        height: 50,
        borderRadius: "50%",
      }} />
      <div className="fig-asset-7f12ea1300756f14" style={{
        position: "absolute",
        left: 72,
        top: 15,
        width: 50,
        height: 50,
        borderRadius: "50%",
      }} />
      <div className="fig-asset-7f12ea1300756f14" style={{
        position: "absolute",
        left: 9.5,
        top: 15,
        width: 50,
        height: 50,
        borderRadius: "50%",
      }} />
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: 173,
      height: 76.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 173,
          height: 77,
        }}
        style2={"over dark background"}
      />
      <div className="fig-asset-7f12ea1300756f14" style={{
        position: "absolute",
        left: 117.5,
        top: 14,
        width: 48,
        height: 48,
        borderRadius: "50%",
      }} />
      <div className="fig-asset-7f12ea1300756f14" style={{
        position: "absolute",
        left: 62.5,
        top: 14,
        width: 48,
        height: 48,
        borderRadius: "50%",
      }} />
      <div className="fig-asset-7f12ea1300756f14" style={{
        position: "absolute",
        left: 7.5,
        top: 14,
        width: 48,
        height: 48,
        borderRadius: "50%",
      }} />
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: 176,
      height: 72.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 176,
          height: 73,
        }}
        style2={"over dark background"}
      />
      <div className="fig-asset-7f12ea1300756f14" style={{
        position: "absolute",
        left: 124,
        top: 14,
        width: 45,
        height: 45,
        borderRadius: "50%",
      }} />
      <div className="fig-asset-7f12ea1300756f14" style={{
        position: "absolute",
        left: 65.5,
        top: 14,
        width: 45,
        height: 45,
        borderRadius: "50%",
      }} />
      <div className="fig-asset-7f12ea1300756f14" style={{
        position: "absolute",
        left: 7,
        top: 14,
        width: 45,
        height: 45,
        borderRadius: "50%",
      }} />
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: 152,
      height: 69.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 69.5,
        }}
        style2={"over dark background"}
      />
      <div className="fig-asset-7f12ea1300756f14" style={{
        position: "absolute",
        left: 104,
        top: 14,
        width: 41,
        height: 41,
        borderRadius: "50%",
      }} />
      <div className="fig-asset-7f12ea1300756f14" style={{
        position: "absolute",
        left: 55.5,
        top: 14,
        width: 41,
        height: 41,
        borderRadius: "50%",
      }} />
      <div className="fig-asset-7f12ea1300756f14" style={{
        position: "absolute",
        left: 7,
        top: 14,
        width: 41,
        height: 41,
        borderRadius: "50%",
      }} />
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: 191,
      height: 81.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 191,
          height: 82,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 17,
        top: 24,
        width: 156.5,
        height: 50,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 129.5,
          top: 0,
          width: 0.5,
          height: 46.5,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <div style={{
          position: "absolute",
          left: 95,
          top: 0,
          width: 0.5,
          height: 46.5,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <div style={{
          position: "absolute",
          left: 60.5,
          top: 0,
          width: 0.5,
          height: 46.5,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <div style={{
          position: "absolute",
          left: 26.5,
          top: 0,
          width: 0.5,
          height: 46.5,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <span style={{
          position: "absolute",
          left: 137.5,
          top: 36,
          width: 18,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column5Low}</span>
        <span style={{
          position: "absolute",
          left: 103,
          top: 36,
          width: 18,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column4Low}</span>
        <span style={{
          position: "absolute",
          left: 68.5,
          top: 36,
          width: 18,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column3Low}</span>
        <span style={{
          position: "absolute",
          left: 34,
          top: 36,
          width: 18,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column2Low}</span>
        <span style={{
          position: "absolute",
          left: 1,
          top: 36,
          width: 16,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column1Low}</span>
        <span style={{
          position: "absolute",
          left: 136.5,
          top: 0.5,
          width: 20,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column5High}</span>
        <span style={{
          position: "absolute",
          left: 102,
          top: 0.5,
          width: 20,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column4High}</span>
        <span style={{
          position: "absolute",
          left: 67.5,
          top: 0.5,
          width: 20,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column3High}</span>
        <span style={{
          position: "absolute",
          left: 33,
          top: 0.5,
          width: 20,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column2High}</span>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0.5,
          width: 18,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column1High}</span>
      </div>
      <span style={{
        position: "absolute",
        left: 11,
        top: 8.5,
        width: 35,
        height: 16,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "15.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: 194,
      height: 80.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 194,
          height: 81,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 16,
        top: 20,
        width: 162,
        height: 56,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 134.5,
          top: 0.5,
          width: 0.5,
          height: 52.5,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <div style={{
          position: "absolute",
          left: 98.5,
          top: 0.5,
          width: 0.5,
          height: 52.5,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <div style={{
          position: "absolute",
          left: 62.5,
          top: 0.5,
          width: 0.5,
          height: 52.5,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <div style={{
          position: "absolute",
          left: 27,
          top: 0.5,
          width: 0.5,
          height: 52.5,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <span style={{
          position: "absolute",
          left: 143,
          top: 42,
          width: 18,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column5Low}</span>
        <span style={{
          position: "absolute",
          left: 107,
          top: 42,
          width: 18,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column4Low}</span>
        <span style={{
          position: "absolute",
          left: 72,
          top: 42,
          width: 18,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column3Low}</span>
        <span style={{
          position: "absolute",
          left: 35,
          top: 42,
          width: 18,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column2Low}</span>
        <span style={{
          position: "absolute",
          left: 1,
          top: 42,
          width: 16,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column1Low}</span>
        <span style={{
          position: "absolute",
          left: 142,
          top: 0,
          width: 20,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column5High}</span>
        <span style={{
          position: "absolute",
          left: 106,
          top: 0,
          width: 20,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column4High}</span>
        <span style={{
          position: "absolute",
          left: 71,
          top: 0,
          width: 20,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column3High}</span>
        <span style={{
          position: "absolute",
          left: 34,
          top: 0,
          width: 20,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column2High}</span>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 18,
          height: 14,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column1High}</span>
      </div>
      <span style={{
        position: "absolute",
        left: 8,
        top: 5,
        width: 35,
        height: 16,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "15.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: 173,
      height: 76.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 173,
          height: 77,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 15,
        top: 20,
        width: 145,
        height: 52,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 119,
          top: 0,
          width: 0.5,
          height: 49.5,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <div style={{
          position: "absolute",
          left: 87,
          top: 0,
          width: 0.5,
          height: 49.5,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <div style={{
          position: "absolute",
          left: 55,
          top: 0,
          width: 0.5,
          height: 49.5,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <div style={{
          position: "absolute",
          left: 23.5,
          top: 0,
          width: 0.5,
          height: 49.5,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <span style={{
          position: "absolute",
          left: 127,
          top: 39,
          width: 17,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column5Low}</span>
        <span style={{
          position: "absolute",
          left: 95,
          top: 39,
          width: 17,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column4Low}</span>
        <span style={{
          position: "absolute",
          left: 64,
          top: 39,
          width: 17,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column3Low}</span>
        <span style={{
          position: "absolute",
          left: 32,
          top: 39,
          width: 17,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column2Low}</span>
        <span style={{
          position: "absolute",
          left: 0,
          top: 39,
          width: 16,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column1Low}</span>
        <span style={{
          position: "absolute",
          left: 126,
          top: 0,
          width: 19,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column5High}</span>
        <span style={{
          position: "absolute",
          left: 94,
          top: 0,
          width: 19,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column4High}</span>
        <span style={{
          position: "absolute",
          left: 63,
          top: 0,
          width: 19,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column3High}</span>
        <span style={{
          position: "absolute",
          left: 31,
          top: 0,
          width: 19,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column2High}</span>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 17,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column1High}</span>
      </div>
      <span style={{
        position: "absolute",
        left: 7.5,
        top: 4.5,
        width: 35,
        height: 16,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "15.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: 176,
      height: 72.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 176,
          height: 73,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 15,
        top: 18,
        width: 148,
        height: 51,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 121.5,
          top: 0.5,
          width: 0.5,
          height: 47.5,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <div style={{
          position: "absolute",
          left: 89,
          top: 0.5,
          width: 0.5,
          height: 47.5,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <div style={{
          position: "absolute",
          left: 56.5,
          top: 0.5,
          width: 0.5,
          height: 47.5,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <div style={{
          position: "absolute",
          left: 24,
          top: 0.5,
          width: 0.5,
          height: 47.5,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <span style={{
          position: "absolute",
          left: 131,
          top: 38,
          width: 17,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 9.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "12.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column5Low}</span>
        <span style={{
          position: "absolute",
          left: 98,
          top: 38,
          width: 17,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 9.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "12.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column4Low}</span>
        <span style={{
          position: "absolute",
          left: 65,
          top: 38,
          width: 16,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 9.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "12.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column3Low}</span>
        <span style={{
          position: "absolute",
          left: 33,
          top: 38,
          width: 16,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 9.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "12.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column2Low}</span>
        <span style={{
          position: "absolute",
          left: 1,
          top: 38,
          width: 15,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 9.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "12.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column1Low}</span>
        <span style={{
          position: "absolute",
          left: 130,
          top: 0,
          width: 18,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 9.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "12.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column5High}</span>
        <span style={{
          position: "absolute",
          left: 97,
          top: 0,
          width: 18,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 9.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "12.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column4High}</span>
        <span style={{
          position: "absolute",
          left: 64,
          top: 0,
          width: 18,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 9.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "12.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column3High}</span>
        <span style={{
          position: "absolute",
          left: 32,
          top: 0,
          width: 18,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 9.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "12.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column2High}</span>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 17,
          height: 13,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 9.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "12.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column1High}</span>
      </div>
      <span style={{
        position: "absolute",
        left: 7,
        top: 4,
        width: 33,
        height: 15,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "14.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: 152,
      height: 69.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 69.5,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 13,
        top: 18,
        width: 126,
        height: 47,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 105,
          top: 1,
          width: 0.5,
          height: 44,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <div style={{
          position: "absolute",
          left: 77,
          top: 1,
          width: 0.5,
          height: 44,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <div style={{
          position: "absolute",
          left: 49,
          top: 1,
          width: 0.5,
          height: 44,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <div style={{
          position: "absolute",
          left: 21,
          top: 1,
          width: 0.5,
          height: 44,
          backgroundColor: "rgba(255,59,48,0.3)",
        }} />
        <span style={{
          position: "absolute",
          left: 111,
          top: 35,
          width: 15,
          height: 12,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 8.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "11.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column5Low}</span>
        <span style={{
          position: "absolute",
          left: 84,
          top: 35,
          width: 15,
          height: 12,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 8.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "11.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column4Low}</span>
        <span style={{
          position: "absolute",
          left: 56,
          top: 35,
          width: 15,
          height: 12,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 8.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "11.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column3Low}</span>
        <span style={{
          position: "absolute",
          left: 28,
          top: 35,
          width: 15,
          height: 12,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 8.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "11.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column2Low}</span>
        <span style={{
          position: "absolute",
          left: 1,
          top: 35,
          width: 13,
          height: 12,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 8.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "11.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column1Low}</span>
        <span style={{
          position: "absolute",
          left: 110,
          top: 0,
          width: 16,
          height: 12,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 8.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "11.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column5High}</span>
        <span style={{
          position: "absolute",
          left: 83,
          top: 0,
          width: 16,
          height: 12,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 8.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "11.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column4High}</span>
        <span style={{
          position: "absolute",
          left: 55,
          top: 0,
          width: 16,
          height: 12,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 8.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "11.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column3High}</span>
        <span style={{
          position: "absolute",
          left: 27,
          top: 0,
          width: 16,
          height: 12,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 8.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "11.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column2High}</span>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 15,
          height: 12,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 8.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "11.500px",
          color: "rgb(255,255,255)",
          textTransform: "uppercase",
        }}>{props.column1High}</span>
      </div>
      <span style={{
        position: "absolute",
        left: 7,
        top: 4,
        width: 33,
        height: 15,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "14.500px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: 191,
      height: 81.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 191,
          height: 82,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 133,
        top: 23.5,
        width: 46,
        height: 46,
      }}>
        <div className="fig-asset-7f12ea1300756f14" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 46,
          height: 46,
          borderRadius: 4,
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 46,
          height: 46,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: 72.5,
        top: 23.5,
        width: 46,
        height: 46,
      }}>
        <div className="fig-asset-7f12ea1300756f14" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 46,
          height: 46,
          borderRadius: 4,
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 46,
          height: 46,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: 12,
        top: 23.5,
        width: 46,
        height: 46,
      }}>
        <div className="fig-asset-7f12ea1300756f14" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 46,
          height: 46,
          borderRadius: 4,
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 46,
          height: 46,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
      </div>
      <span style={{
        position: "absolute",
        left: 12,
        top: 4.5,
        width: 37,
        height: 18,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: 194,
      height: 80.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 194,
          height: 81,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 137.5,
        top: 24,
        width: 45,
        height: 45,
      }}>
        <div className="fig-asset-7f12ea1300756f14" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 45,
          height: 45,
          borderRadius: 4,
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 45,
          height: 45,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: 74.5,
        top: 24,
        width: 45,
        height: 45,
      }}>
        <div className="fig-asset-7f12ea1300756f14" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 45,
          height: 45,
          borderRadius: 4,
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 45,
          height: 45,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: 11.5,
        top: 24,
        width: 45,
        height: 45,
      }}>
        <div className="fig-asset-7f12ea1300756f14" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 45,
          height: 45,
          borderRadius: 4,
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 45,
          height: 45,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
      </div>
      <span style={{
        position: "absolute",
        left: 11,
        top: 4,
        width: 37,
        height: 18,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: 173,
      height: 76.5,
      borderRadius: 14.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 173,
          height: 77,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 119.5,
        top: 23,
        width: 42,
        height: 42,
      }}>
        <div className="fig-asset-7f12ea1300756f14" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 42,
          height: 42,
          borderRadius: 4,
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 42,
          height: 42,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: 65.5,
        top: 23,
        width: 42,
        height: 42,
      }}>
        <div className="fig-asset-7f12ea1300756f14" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 42,
          height: 42,
          borderRadius: 4,
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 42,
          height: 42,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: 11.5,
        top: 23,
        width: 42,
        height: 42,
      }}>
        <div className="fig-asset-7f12ea1300756f14" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 42,
          height: 42,
          borderRadius: 4,
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 42,
          height: 42,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
      </div>
      <span style={{
        position: "absolute",
        left: 11,
        top: 3,
        width: 37,
        height: 18,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: 176,
      height: 72.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 176,
          height: 73,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 125,
        top: 21.5,
        width: 41,
        height: 41,
      }}>
        <div className="fig-asset-7f12ea1300756f14" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 41,
          height: 41,
          borderRadius: 4,
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 41,
          height: 41,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: 67.5,
        top: 21.5,
        width: 41,
        height: 41,
      }}>
        <div className="fig-asset-7f12ea1300756f14" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 41,
          height: 41,
          borderRadius: 4,
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 41,
          height: 41,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: 10,
        top: 21.5,
        width: 41,
        height: 41,
      }}>
        <div className="fig-asset-7f12ea1300756f14" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 41,
          height: 41,
          borderRadius: 4,
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 41,
          height: 41,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
      </div>
      <span style={{
        position: "absolute",
        left: 10,
        top: 3,
        width: 35,
        height: 16,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: 152,
      height: 69.5,
      borderRadius: 12.5,
      position: "relative",
      ...props.style,
    }}>
      <WatchBackground
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 152,
          height: 69.5,
        }}
        style2={"over dark background"}
      />
      <div style={{
        position: "absolute",
        left: 105,
        top: 22.5,
        width: 37,
        height: 37,
      }}>
        <div className="fig-asset-7f12ea1300756f14" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 37,
          height: 37,
          borderRadius: 4,
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 37,
          height: 37,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: 57.5,
        top: 22.5,
        width: 37,
        height: 37,
      }}>
        <div className="fig-asset-7f12ea1300756f14" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 37,
          height: 37,
          borderRadius: 4,
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 37,
          height: 37,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: 10,
        top: 22.5,
        width: 37,
        height: 37,
      }}>
        <div className="fig-asset-7f12ea1300756f14" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 37,
          height: 37,
          borderRadius: 4,
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 37,
          height: 37,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 0.500px rgba(255,59,48,0.5)",
        }} />
      </div>
      <span style={{
        position: "absolute",
        left: 10,
        top: 2.5,
        width: 35,
        height: 16,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(255,255,255)",
      }}>{props.line1}</span>
    </div>
  );
  const __impls = {
    // figma: Type=Progress View - Control without Current Value, Size=49mm
    "type=progress view - control without current value|size=49mm": __body0,
    // figma: Type=Progress View - Control without Current Value, Size=46mm
    "type=progress view - control without current value|size=46mm": __body1,
    // figma: Type=Progress View - Control without Current Value, Size=44mm
    "type=progress view - control without current value|size=44mm": __body2,
    // figma: Type=Progress View - Control without Current Value, Size=42mm
    "type=progress view - control without current value|size=42mm": __body3,
    // figma: Type=Progress View - Control without Current Value, Size=40mm
    "type=progress view - control without current value|size=40mm": __body4,
    // figma: Type=Progress View - Control with Current Value, Size=49mm
    "type=progress view - control with current value|size=49mm": __body5,
    // figma: Type=Progress View - Control with Current Value, Size=46mm
    "type=progress view - control with current value|size=46mm": __body6,
    // figma: Type=Progress View - Control with Current Value, Size=44mm
    "type=progress view - control with current value|size=44mm": __body7,
    // figma: Type=Progress View - Control with Current Value, Size=42mm
    "type=progress view - control with current value|size=42mm": __body8,
    // figma: Type=Progress View - Control with Current Value, Size=40mm
    "type=progress view - control with current value|size=40mm": __body9,
    // figma: Type=Progress View, Size=49mm
    "type=progress view|size=49mm": __body10,
    // figma: Type=Progress View, Size=46mm
    "type=progress view|size=46mm": __body11,
    // figma: Type=Progress View, Size=44mm
    "type=progress view|size=44mm": __body12,
    // figma: Type=Progress View, Size=42mm
    "type=progress view|size=42mm": __body13,
    // figma: Type=Progress View, Size=40mm
    "type=progress view|size=40mm": __body14,
    // figma: Type=Label Group with Bar, Size=49mm
    "type=label group with bar|size=49mm": __body15,
    // figma: Type=Label Group with Bar, Size=46mm
    "type=label group with bar|size=46mm": __body16,
    // figma: Type=Label Group with Bar, Size=44mm
    "type=label group with bar|size=44mm": __body17,
    // figma: Type=Label Group with Bar, Size=42mm
    "type=label group with bar|size=42mm": __body18,
    // figma: Type=Label Group with Bar, Size=40mm
    "type=label group with bar|size=40mm": __body19,
    // figma: Type=Label Group with Icon, Size=49mm
    "type=label group with icon|size=49mm": __body20,
    // figma: Type=Label Group with Icon, Size=46mm
    "type=label group with icon|size=46mm": __body21,
    // figma: Type=Label Group with Icon, Size=44mm
    "type=label group with icon|size=44mm": __body22,
    // figma: Type=Label Group with Icon, Size=42mm
    "type=label group with icon|size=42mm": __body23,
    // figma: Type=Label Group with Icon, Size=40mm
    "type=label group with icon|size=40mm": __body24,
    // figma: Type=Label Group Double, Size=49mm
    "type=label group double|size=49mm": __body25,
    // figma: Type=Label Group Double, Size=46mm
    "type=label group double|size=46mm": __body26,
    // figma: Type=Label Group Double, Size=44mm
    "type=label group double|size=44mm": __body27,
    // figma: Type=Label Group Double, Size=42mm
    "type=label group double|size=42mm": __body28,
    // figma: Type=Label Group Double, Size=40mm
    "type=label group double|size=40mm": __body29,
    // figma: Type=Label Group, Size=49mm
    "type=label group|size=49mm": __body30,
    // figma: Type=Label Group, Size=46mm
    "type=label group|size=46mm": __body31,
    // figma: Type=Label Group, Size=44mm
    "type=label group|size=44mm": __body32,
    // figma: Type=Label Group, Size=42mm
    "type=label group|size=42mm": __body33,
    // figma: Type=Label Group, Size=40mm
    "type=label group|size=40mm": __body34,
    // figma: Type=Labeled Content, Size=49mm
    "type=labeled content|size=49mm": __body35,
    // figma: Type=Labeled Content, Size=46mm
    "type=labeled content|size=46mm": __body36,
    // figma: Type=Labeled Content, Size=44mm
    "type=labeled content|size=44mm": __body37,
    // figma: Type=Labeled Content, Size=42mm
    "type=labeled content|size=42mm": __body38,
    // figma: Type=Labeled Content, Size=40mm
    "type=labeled content|size=40mm": __body39,
    // figma: Type=Gauge, Size=49mm
    "type=gauge|size=49mm": __body40,
    // figma: Type=Gauge, Size=46mm
    "type=gauge|size=46mm": __body41,
    // figma: Type=Gauge, Size=44mm
    "type=gauge|size=44mm": __body42,
    // figma: Type=Gauge, Size=42mm
    "type=gauge|size=42mm": __body43,
    // figma: Type=Gauge, Size=40mm
    "type=gauge|size=40mm": __body44,
    // figma: Type=Combo, Size=49mm
    "type=combo|size=49mm": __body45,
    // figma: Type=Combo, Size=46mm
    "type=combo|size=46mm": __body46,
    // figma: Type=Combo, Size=44mm
    "type=combo|size=44mm": __body47,
    // figma: Type=Combo, Size=42mm
    "type=combo|size=42mm": __body48,
    // figma: Type=Combo, Size=40mm
    "type=combo|size=40mm": __body49,
    // figma: Type=Chart, Size=49mm
    "type=chart|size=49mm": __body50,
    // figma: Type=Chart, Size=46mm
    "type=chart|size=46mm": __body51,
    // figma: Type=Chart, Size=44mm
    "type=chart|size=44mm": __body52,
    // figma: Type=Chart, Size=42mm
    "type=chart|size=42mm": __body53,
    // figma: Type=Chart, Size=40mm
    "type=chart|size=40mm": __body54,
    // figma: Type=Accessory Widget Group, Size=49mm
    "type=accessory widget group|size=49mm": __body55,
    // figma: Type=Accessory Widget Group, Size=46mm
    "type=accessory widget group|size=46mm": __body56,
    // figma: Type=Accessory Widget Group, Size=44mm
    "type=accessory widget group|size=44mm": __body57,
    // figma: Type=Accessory Widget Group, Size=42mm
    "type=accessory widget group|size=42mm": __body58,
    // figma: Type=Accessory Widget Group, Size=40mm
    "type=accessory widget group|size=40mm": __body59,
  };
  return (__impls[__vkey(props)] ?? __body59)();
}
export default WatchWidgets;
