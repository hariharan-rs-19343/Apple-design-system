// figma node: 6:57374 Segmented control (14 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "segments=" + __venc(p.segments) + '|' + "selected=" + __venc(p.selected);

export function SegmentedControl(_p = {}) {
  const props = { ..._p, label1: _p.label1 ?? "Label", segments: _p.segments ?? "2", selected: _p.selected ?? "1", label5: _p.label5 ?? "Label", label2: _p.label2 ?? "Label", label4: _p.label4 ?? "Label", label3: _p.label3 ?? "Label" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 370,
      height: 32,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
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
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label1}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label2}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label3}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label4}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 20,
        backgroundColor: "var(--miscellaneous-segmented-control-selected-fill)",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label5}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 370,
      height: 32,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
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
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label1}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label2}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label3}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 20,
        backgroundColor: "var(--miscellaneous-segmented-control-selected-fill)",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label4}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label5}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 370,
      height: 32,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
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
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label1}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label2}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 20,
        backgroundColor: "var(--miscellaneous-segmented-control-selected-fill)",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label3}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label4}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label5}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 370,
      height: 32,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
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
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label1}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 20,
        backgroundColor: "var(--miscellaneous-segmented-control-selected-fill)",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label2}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label3}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label4}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label5}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 370,
      height: 32,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 20,
        backgroundColor: "var(--miscellaneous-segmented-control-selected-fill)",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label1}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label2}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label3}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label4}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label5}</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 370,
      height: 32,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
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
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label1}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label2}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label3}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 20,
        backgroundColor: "var(--miscellaneous-segmented-control-selected-fill)",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label4}</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 370,
      height: 32,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
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
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label1}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label2}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 20,
        backgroundColor: "var(--miscellaneous-segmented-control-selected-fill)",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label3}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label4}</span>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 370,
      height: 32,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
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
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label1}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 20,
        backgroundColor: "var(--miscellaneous-segmented-control-selected-fill)",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label2}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label3}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label4}</span>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 370,
      height: 32,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 20,
        backgroundColor: "var(--miscellaneous-segmented-control-selected-fill)",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label1}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label2}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label3}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label4}</span>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 370,
      height: 32,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
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
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label1}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label2}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 20,
        backgroundColor: "var(--miscellaneous-segmented-control-selected-fill)",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label3}</span>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 370,
      height: 32,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
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
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label1}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 20,
        backgroundColor: "var(--miscellaneous-segmented-control-selected-fill)",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label2}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label3}</span>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 370,
      height: 32,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 20,
        backgroundColor: "var(--miscellaneous-segmented-control-selected-fill)",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label1}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label2}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label3}</span>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 370,
      height: 32,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
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
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label1}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 20,
        backgroundColor: "var(--miscellaneous-segmented-control-selected-fill)",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label2}</span>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 370,
      height: 32,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgba(118,118,128,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 20,
        backgroundColor: "var(--miscellaneous-segmented-control-selected-fill)",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label1}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 13.333000183105469,
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "18px",
          letterSpacing: "-0.080px",
          color: "var(--labels-primary)",
          flexGrow: 1,
        }}>{props.label2}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Segments=5, Selected=5
    "segments=5|selected=5": __body0,
    // figma: Segments=5, Selected=4
    "segments=5|selected=4": __body1,
    // figma: Segments=5, Selected=3
    "segments=5|selected=3": __body2,
    // figma: Segments=5, Selected=2
    "segments=5|selected=2": __body3,
    // figma: Segments=5, Selected=1
    "segments=5|selected=1": __body4,
    // figma: Segments=4, Selected=4
    "segments=4|selected=4": __body5,
    // figma: Segments=4, Selected=3
    "segments=4|selected=3": __body6,
    // figma: Segments=4, Selected=2
    "segments=4|selected=2": __body7,
    // figma: Segments=4, Selected=1
    "segments=4|selected=1": __body8,
    // figma: Segments=3, Selected=3
    "segments=3|selected=3": __body9,
    // figma: Segments=3, Selected=2
    "segments=3|selected=2": __body10,
    // figma: Segments=3, Selected=1
    "segments=3|selected=1": __body11,
    // figma: Segments=2, Selected=2
    "segments=2|selected=2": __body12,
    // figma: Segments=2, Selected=1
    "segments=2|selected=1": __body13,
  };
  return (__impls[__vkey(props)] ?? __body13)();
}
export default SegmentedControl;
