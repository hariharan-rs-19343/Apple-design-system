import { WatchBackground } from './WatchBackground.jsx';
import { WatchWidgets } from './WatchWidgets.jsx';

// figma node: 6482:7427 Smart-Stack (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function WatchSmartStack(_p = {}) {
  const props = { ..._p, size: _p.size ?? "40mm" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 162,
      height: 197,
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 28,
        top: 163,
        width: 106,
        height: 28,
        borderRadius: 100,
        backgroundColor: "rgba(155,160,170,0.1)",
        boxShadow: "inset 0 0 0 1.500px rgba(255,255,255,0.03), 0px 10px 10px 0px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          opacity: 0.8,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text1 ?? "􀋲"}</span>
        <span style={{
          position: "relative",
          opacity: 0.8,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text2 ?? "All Apps"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 5,
        top: 103.5,
        width: 152,
        height: 69.5,
        borderRadius: 12.5,
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
        <div className="fig-asset-15d93d469c7acffb" style={{
          position: "absolute",
          left: 104,
          top: 14,
          width: 41,
          height: 41,
          borderRadius: "50%",
        }} />
        <div className="fig-asset-1ecae749c6d348de" style={{
          position: "absolute",
          left: 55.5,
          top: 14,
          width: 41,
          height: 41,
          borderRadius: "50%",
        }} />
        <div className="fig-asset-8bff2a4b5654a410" style={{
          position: "absolute",
          left: 7,
          top: 14,
          width: 41,
          height: 41,
          borderRadius: "50%",
        }} />
      </div>
      <WatchWidgets
        style={{
          position: "absolute",
          left: 5,
          top: 31,
          width: 152,
          height: 69.5,
        }}
        line1={"June 2024"}
        metric={"10"}
        type={"labeled content"}
        size={"40mm"}
      />
      <span style={{
        position: "absolute",
        left: 14,
        top: 5,
        width: 48,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "19.500px",
        color: "rgb(176,176,176)",
      }}>{props.text3 ?? "JUN 16"}</span>
      <span style={{
        position: "absolute",
        left: 119,
        top: 5,
        width: 29,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.text4 ?? "9:41"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 187,
      height: 223,
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 36,
        top: 179.5,
        width: 115,
        height: 32,
        borderRadius: 100,
        backgroundColor: "rgba(155,160,170,0.1)",
        boxShadow: "inset 0 0 0 1.500px rgba(255,255,255,0.03), 0px 10px 10px 0px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          opacity: 0.8,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text1 ?? "􀋲"}</span>
        <span style={{
          position: "relative",
          opacity: 0.8,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text2 ?? "All Apps"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 5.5,
        top: 118.5,
        width: 176,
        height: 72.5,
        borderRadius: 12.5,
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
        <div className="fig-asset-0ccca269275be4e6" style={{
          position: "absolute",
          left: 124,
          top: 14,
          width: 45,
          height: 45,
          borderRadius: "50%",
        }} />
        <div className="fig-asset-f15031921def0aaf" style={{
          position: "absolute",
          left: 65.5,
          top: 14,
          width: 45,
          height: 45,
          borderRadius: "50%",
        }} />
        <div className="fig-asset-f4f455239d180b3e" style={{
          position: "absolute",
          left: 7,
          top: 14,
          width: 45,
          height: 45,
          borderRadius: "50%",
        }} />
      </div>
      <WatchWidgets
        style={{
          position: "absolute",
          left: 6,
          top: 40.5,
          width: 176,
          height: 72.5,
        }}
        line1={"June 2024"}
        metric={"10"}
        type={"labeled content"}
        size={"42mm"}
      />
      <span style={{
        position: "absolute",
        left: 17.5,
        top: 12.5,
        width: 48,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "19.500px",
        color: "rgb(176,176,176)",
      }}>{props.text3 ?? "JUN 16"}</span>
      <span style={{
        position: "absolute",
        left: 140.5,
        top: 12.5,
        width: 29,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.text4 ?? "9:41"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 184,
      height: 224,
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 32,
        top: 183,
        width: 120,
        height: 32,
        borderRadius: 100,
        backgroundColor: "rgba(155,160,170,0.1)",
        boxShadow: "inset 0 0 0 1.500px rgba(255,255,255,0.03), 0px 10px 10px 0px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          opacity: 0.8,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text1 ?? "􀋲"}</span>
        <span style={{
          position: "relative",
          opacity: 0.8,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text2 ?? "All Apps"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 5.5,
        top: 119.5,
        width: 173,
        height: 76.5,
        borderRadius: 14.5,
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
        <div className="fig-asset-6ffc24a662fbd662" style={{
          position: "absolute",
          left: 117.5,
          top: 14,
          width: 48,
          height: 48,
          borderRadius: "50%",
        }} />
        <div className="fig-asset-4ccc6e292f28da1b" style={{
          position: "absolute",
          left: 62.5,
          top: 14,
          width: 48,
          height: 48,
          borderRadius: "50%",
        }} />
        <div className="fig-asset-34287c88f4a6902f" style={{
          position: "absolute",
          left: 7.5,
          top: 14,
          width: 48,
          height: 48,
          borderRadius: "50%",
        }} />
      </div>
      <WatchWidgets
        style={{
          position: "absolute",
          left: 6,
          top: 38,
          width: 173,
          height: 76.5,
        }}
        line1={"June 2024"}
        metric={"10"}
        type={"labeled content"}
        size={"44mm"}
      />
      <span style={{
        position: "absolute",
        left: 15,
        top: 9,
        width: 51,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "19.500px",
        color: "rgb(176,176,176)",
      }}>{props.text3 ?? "JUN 16"}</span>
      <span style={{
        position: "absolute",
        left: 138,
        top: 9,
        width: 31,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.text4 ?? "9:41"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 208,
      height: 248,
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 36,
        top: 197,
        width: 136,
        height: 37,
        borderRadius: 100,
        backgroundColor: "rgba(155,160,170,0.1)",
        boxShadow: "inset 0 0 0 1.500px rgba(255,255,255,0.03), 0px 10px 10px 0px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          opacity: 0.8,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text1 ?? "􀋲"}</span>
        <span style={{
          position: "relative",
          opacity: 0.8,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text2 ?? "All Apps"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 7,
        top: 129.5,
        width: 194,
        height: 80.5,
        borderRadius: 14.5,
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
        <div className="fig-asset-0c329ea55c4430ad" style={{
          position: "absolute",
          left: 134.5,
          top: 15,
          width: 50,
          height: 50,
          borderRadius: "50%",
        }} />
        <div className="fig-asset-7303d834cbce73df" style={{
          position: "absolute",
          left: 72,
          top: 15,
          width: 50,
          height: 50,
          borderRadius: "50%",
        }} />
        <div className="fig-asset-2fb32273fe31e0f8" style={{
          position: "absolute",
          left: 9.5,
          top: 15,
          width: 50,
          height: 50,
          borderRadius: "50%",
        }} />
      </div>
      <WatchWidgets
        style={{
          position: "absolute",
          left: 7,
          top: 44,
          width: 194,
          height: 80.5,
        }}
        line1={"June 2024"}
        metric={"10"}
        type={"labeled content"}
        size={"46mm"}
      />
      <span style={{
        position: "absolute",
        left: 19.5,
        top: 15,
        width: 51,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "19.500px",
        color: "rgb(176,176,176)",
      }}>{props.text3 ?? "JUN 16"}</span>
      <span style={{
        position: "absolute",
        left: 157.5,
        top: 15,
        width: 31,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.text4 ?? "9:41"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 205,
      height: 251,
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 19.5,
        top: 16,
        width: 51,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "19.500px",
        color: "rgb(176,176,176)",
      }}>{props.text1 ?? "JUN 16"}</span>
      <span style={{
        position: "absolute",
        left: 154.5,
        top: 16,
        width: 31,
        height: 20,
        fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "19.500px",
        color: "rgb(255,255,255)",
      }}>{props.text2 ?? "9:41"}</span>
      <div style={{
        position: "absolute",
        left: 35,
        top: 203,
        width: 135,
        height: 37,
        borderRadius: 100,
        backgroundColor: "rgba(155,160,170,0.1)",
        boxShadow: "inset 0 0 0 1.500px rgba(255,255,255,0.03), 0px 10px 10px 0px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          opacity: 0.8,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(242,244,252)",
          flexShrink: 0,
        }}>{props.text3 ?? "􀋲"}</span>
        <span style={{
          position: "relative",
          opacity: 0.8,
          fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14.5,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(242,244,252)",
          flexShrink: 0,
        }}>{props.text4 ?? "All Apps"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 7,
        top: 131.5,
        width: 191,
        height: 81.5,
        borderRadius: 14.5,
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
        <div className="fig-asset-4e54aa3adc5e4df9" style={{
          position: "absolute",
          left: 129,
          top: 15,
          width: 52,
          height: 52,
          borderRadius: "50%",
        }} />
        <div className="fig-asset-27552a3b7be7ab23" style={{
          position: "absolute",
          left: 69.5,
          top: 15,
          width: 52,
          height: 52,
          borderRadius: "50%",
        }} />
        <div className="fig-asset-c0d05c69f32f695d" style={{
          position: "absolute",
          left: 10,
          top: 15,
          width: 52,
          height: 52,
          borderRadius: "50%",
        }} />
      </div>
      <WatchWidgets
        style={{
          position: "absolute",
          left: 7,
          top: 45,
          width: 191,
          height: 81.5,
        }}
        line1={"June 2024"}
        metric={"10"}
        type={"labeled content"}
        size={"49mm"}
      />
    </div>
  );
  const __impls = {
    // figma: Size=40mm
    "size=40mm": __body0,
    // figma: Size=42mm
    "size=42mm": __body1,
    // figma: Size=44mm
    "size=44mm": __body2,
    // figma: Size=46mm
    "size=46mm": __body3,
    // figma: Size=49mm
    "size=49mm": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default WatchSmartStack;
