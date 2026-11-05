import { MacControlBackgrounds } from './MacControlBackgrounds.jsx';

// figma node: 121:11923 Push Button (84 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2) + '|' + "on=" + __venc(p.on) + '|' + "state=" + __venc(p.state) + '|' + "activeWindow=" + __venc(p.activeWindow);

export function MacPushButton(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Label", style2: _p.style2 ?? "bordered neutral", on: _p.on ?? false, state: _p.state ?? "idle", activeWindow: _p.activeWindow ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"disabled"} style2={"borderless"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"disabled"} style2={"primary / default"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"disabled"} style2={"bordered colored secondary"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"disabled"} style2={"bordered colored"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"disabled"} style2={"bordered neutral"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"clicked"} style2={"borderless"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"clicked"} style2={"primary / default"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"clicked"} style2={"bordered colored secondary"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"clicked"} style2={"bordered colored"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"clicked"} style2={"bordered neutral"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"idle"} style2={"borderless"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"idle"} style2={"primary / default"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"idle"} style2={"bordered colored secondary"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"idle"} style2={"bordered colored"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"idle"} style2={"bordered neutral"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={false} state={"disabled"} style2={"borderless"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={false} state={"disabled"} style2={"primary / default"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={false} state={"disabled"} style2={"bordered destructive"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        opacity: 0.35,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={false} state={"disabled"} style2={"bordered colored secondary"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={false} state={"disabled"} style2={"bordered neutral"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={false} state={"clicked"} style2={"borderless"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={false} state={"clicked"} style2={"bordered destructive"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={false} state={"clicked"} style2={"primary / default"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={false} state={"clicked"} style2={"bordered colored secondary"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={false} state={"clicked"} style2={"bordered neutral"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={false} state={"idle"} style2={"bordered destructive"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={false} state={"idle"} style2={"borderless"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={false} state={"idle"} style2={"primary / default"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={false} state={"idle"} style2={"bordered colored secondary"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={false} state={"idle"} style2={"bordered neutral"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        opacity: 0.35,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"disabled"} style2={"borderless"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        opacity: 0.35,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"disabled"} style2={"primary / default"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        opacity: 0.5,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"disabled"} style2={"bordered colored secondary"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        opacity: 0.35,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"disabled"} style2={"bordered colored"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        opacity: 0.5,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"disabled"} style2={"bordered neutral"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"clicked"} style2={"borderless"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"clicked"} style2={"primary / default"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"clicked"} style2={"bordered colored secondary"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"clicked"} style2={"bordered colored"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"clicked"} style2={"bordered neutral"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"idle"} style2={"borderless"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"idle"} style2={"primary / default"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"idle"} style2={"bordered colored secondary"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"idle"} style2={"bordered colored"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"idle"} style2={"bordered neutral"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={false} state={"disabled"} style2={"borderless"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        opacity: 0.35,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={false} state={"disabled"} style2={"primary / default"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        opacity: 0.5,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={false} state={"disabled"} style2={"bordered destructive"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        opacity: 0.35,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={false} state={"disabled"} style2={"bordered colored secondary"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        opacity: 0.35,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={false} state={"disabled"} style2={"bordered neutral"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={false} state={"clicked"} style2={"borderless"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={false} state={"clicked"} style2={"bordered destructive"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={false} state={"clicked"} style2={"primary / default"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={false} state={"clicked"} style2={"bordered colored secondary"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={false} state={"clicked"} style2={"bordered neutral"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={false} state={"idle"} style2={"bordered destructive"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-red)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={false} state={"idle"} style2={"borderless"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={false} state={"idle"} style2={"primary / default"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body63 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={false} state={"idle"} style2={"bordered colored secondary"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body64 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--mac-global-height) * 1px)",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-button-padding-horizontal) * 1px)",
      paddingRight: "calc(var(--mac-button-padding-horizontal) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 67,
          height: 24,
        }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={false} state={"idle"} style2={"bordered neutral"} context={"content area"} style={{ transform: "scale(3.350, 1.200)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Style=Borderless, On=True, State=Disabled, Active Window=False
    "style2=borderless|on=true|state=disabled|activeWindow=false": __body0,
    // figma: Style=Borderless (Bezel shows On), On=True, State=Disabled, Active Window=False
    "style2=borderless (bezel shows on)|on=true|state=disabled|activeWindow=false": __body1,
    // figma: Style=Default / Preferred, On=True, State=Disabled, Active Window=False
    "style2=default / preferred|on=true|state=disabled|activeWindow=false": __body2,
    // figma: Style=Bordered Secondary, On=True, State=Disabled, Active Window=False
    "style2=bordered secondary|on=true|state=disabled|activeWindow=false": __body3,
    // figma: Style=Bordered Colored, On=True, State=Disabled, Active Window=False
    "style2=bordered colored|on=true|state=disabled|activeWindow=false": __body4,
    // figma: Style=Bordered Neutral, On=True, State=Disabled, Active Window=False
    "style2=bordered neutral|on=true|state=disabled|activeWindow=false": __body5,
    // figma: Style=Borderless, On=True, State=Clicked, Active Window=False
    "style2=borderless|on=true|state=clicked|activeWindow=false": __body6,
    // figma: Style=Borderless (Bezel shows On), On=True, State=Clicked, Active Window=False
    "style2=borderless (bezel shows on)|on=true|state=clicked|activeWindow=false": __body7,
    // figma: Style=Default / Preferred, On=True, State=Clicked, Active Window=False
    "style2=default / preferred|on=true|state=clicked|activeWindow=false": __body8,
    // figma: Style=Bordered Secondary, On=True, State=Clicked, Active Window=False
    "style2=bordered secondary|on=true|state=clicked|activeWindow=false": __body9,
    // figma: Style=Bordered Colored, On=True, State=Clicked, Active Window=False
    "style2=bordered colored|on=true|state=clicked|activeWindow=false": __body10,
    // figma: Style=Bordered Neutral, On=True, State=Clicked, Active Window=False
    "style2=bordered neutral|on=true|state=clicked|activeWindow=false": __body11,
    // figma: Style=Borderless, On=True, State=Idle, Active Window=False
    "style2=borderless|on=true|state=idle|activeWindow=false": __body12,
    // figma: Style=Borderless (Bezel shows On), On=True, State=Idle, Active Window=False
    "style2=borderless (bezel shows on)|on=true|state=idle|activeWindow=false": __body13,
    // figma: Style=Default / Preferred, On=True, State=Idle, Active Window=False
    "style2=default / preferred|on=true|state=idle|activeWindow=false": __body14,
    // figma: Style=Bordered Secondary, On=True, State=Idle, Active Window=False
    "style2=bordered secondary|on=true|state=idle|activeWindow=false": __body15,
    // figma: Style=Bordered Colored, On=True, State=Idle, Active Window=False
    "style2=bordered colored|on=true|state=idle|activeWindow=false": __body16,
    // figma: Style=Bordered Neutral, On=True, State=Idle, Active Window=False
    "style2=bordered neutral|on=true|state=idle|activeWindow=false": __body17,
    // figma: Style=Borderless, On=False, State=Disabled, Active Window=False
    "style2=borderless|on=false|state=disabled|activeWindow=false": __body0,
    // figma: Style=Borderless (Bezel shows On), On=False, State=Disabled, Active Window=False
    "style2=borderless (bezel shows on)|on=false|state=disabled|activeWindow=false": __body18,
    // figma: Style=Default / Preferred, On=False, State=Disabled, Active Window=False
    "style2=default / preferred|on=false|state=disabled|activeWindow=false": __body19,
    // figma: Style=Bordered Destructive, On=False, State=Disabled, Active Window=False
    "style2=bordered destructive|on=false|state=disabled|activeWindow=false": __body20,
    // figma: Style=Bordered Destructive, On=True, State=Disabled, Active Window=False
    "style2=bordered destructive|on=true|state=disabled|activeWindow=false": __body20,
    // figma: Style=Bordered Secondary, On=False, State=Disabled, Active Window=False
    "style2=bordered secondary|on=false|state=disabled|activeWindow=false": __body21,
    // figma: Style=Bordered Colored, On=False, State=Disabled, Active Window=False
    "style2=bordered colored|on=false|state=disabled|activeWindow=false": __body4,
    // figma: Style=Bordered Neutral, On=False, State=Disabled, Active Window=False
    "style2=bordered neutral|on=false|state=disabled|activeWindow=false": __body22,
    // figma: Style=Borderless, On=False, State=Clicked, Active Window=False
    "style2=borderless|on=false|state=clicked|activeWindow=false": __body6,
    // figma: Style=Borderless (Bezel shows On), On=False, State=Clicked, Active Window=False
    "style2=borderless (bezel shows on)|on=false|state=clicked|activeWindow=false": __body23,
    // figma: Style=Bordered Destructive, On=False, State=Clicked, Active Window=False
    "style2=bordered destructive|on=false|state=clicked|activeWindow=false": __body24,
    // figma: Style=Default / Preferred, On=False, State=Clicked, Active Window=False
    "style2=default / preferred|on=false|state=clicked|activeWindow=false": __body25,
    // figma: Style=Bordered Destructive, On=True, State=Clicked, Active Window=False
    "style2=bordered destructive|on=true|state=clicked|activeWindow=false": __body24,
    // figma: Style=Bordered Secondary, On=False, State=Clicked, Active Window=False
    "style2=bordered secondary|on=false|state=clicked|activeWindow=false": __body26,
    // figma: Style=Bordered Colored, On=False, State=Clicked, Active Window=False
    "style2=bordered colored|on=false|state=clicked|activeWindow=false": __body10,
    // figma: Style=Bordered Neutral, On=False, State=Clicked, Active Window=False
    "style2=bordered neutral|on=false|state=clicked|activeWindow=false": __body27,
    // figma: Style=Borderless, On=False, State=Idle, Active Window=False
    "style2=borderless|on=false|state=idle|activeWindow=false": __body12,
    // figma: Style=Bordered Destructive, On=False, State=Idle, Active Window=False
    "style2=bordered destructive|on=false|state=idle|activeWindow=false": __body28,
    // figma: Style=Borderless (Bezel shows On), On=False, State=Idle, Active Window=False
    "style2=borderless (bezel shows on)|on=false|state=idle|activeWindow=false": __body29,
    // figma: Style=Default / Preferred, On=False, State=Idle, Active Window=False
    "style2=default / preferred|on=false|state=idle|activeWindow=false": __body30,
    // figma: Style=Bordered Destructive, On=True, State=Idle, Active Window=False
    "style2=bordered destructive|on=true|state=idle|activeWindow=false": __body28,
    // figma: Style=Bordered Secondary, On=False, State=Idle, Active Window=False
    "style2=bordered secondary|on=false|state=idle|activeWindow=false": __body31,
    // figma: Style=Bordered Colored, On=False, State=Idle, Active Window=False
    "style2=bordered colored|on=false|state=idle|activeWindow=false": __body16,
    // figma: Style=Bordered Neutral, On=False, State=Idle, Active Window=False
    "style2=bordered neutral|on=false|state=idle|activeWindow=false": __body32,
    // figma: Style=Borderless, On=True, State=Disabled, Active Window=True
    "style2=borderless|on=true|state=disabled|activeWindow=true": __body33,
    // figma: Style=Borderless (Bezel shows On), On=True, State=Disabled, Active Window=True
    "style2=borderless (bezel shows on)|on=true|state=disabled|activeWindow=true": __body34,
    // figma: Style=Default / Preferred, On=True, State=Disabled, Active Window=True
    "style2=default / preferred|on=true|state=disabled|activeWindow=true": __body35,
    // figma: Style=Bordered Secondary, On=True, State=Disabled, Active Window=True
    "style2=bordered secondary|on=true|state=disabled|activeWindow=true": __body36,
    // figma: Style=Bordered Colored, On=True, State=Disabled, Active Window=True
    "style2=bordered colored|on=true|state=disabled|activeWindow=true": __body37,
    // figma: Style=Bordered Neutral, On=True, State=Disabled, Active Window=True
    "style2=bordered neutral|on=true|state=disabled|activeWindow=true": __body38,
    // figma: Style=Borderless, On=True, State=Clicked, Active Window=True
    "style2=borderless|on=true|state=clicked|activeWindow=true": __body39,
    // figma: Style=Borderless (Bezel shows On), On=True, State=Clicked, Active Window=True
    "style2=borderless (bezel shows on)|on=true|state=clicked|activeWindow=true": __body40,
    // figma: Style=Default / Preferred, On=True, State=Clicked, Active Window=True
    "style2=default / preferred|on=true|state=clicked|activeWindow=true": __body41,
    // figma: Style=Bordered Secondary, On=True, State=Clicked, Active Window=True
    "style2=bordered secondary|on=true|state=clicked|activeWindow=true": __body42,
    // figma: Style=Bordered Colored, On=True, State=Clicked, Active Window=True
    "style2=bordered colored|on=true|state=clicked|activeWindow=true": __body43,
    // figma: Style=Bordered Neutral, On=True, State=Clicked, Active Window=True
    "style2=bordered neutral|on=true|state=clicked|activeWindow=true": __body44,
    // figma: Style=Borderless, On=True, State=Idle, Active Window=True
    "style2=borderless|on=true|state=idle|activeWindow=true": __body39,
    // figma: Style=Borderless (Bezel shows On), On=True, State=Idle, Active Window=True
    "style2=borderless (bezel shows on)|on=true|state=idle|activeWindow=true": __body45,
    // figma: Style=Default / Preferred, On=True, State=Idle, Active Window=True
    "style2=default / preferred|on=true|state=idle|activeWindow=true": __body46,
    // figma: Style=Bordered Secondary, On=True, State=Idle, Active Window=True
    "style2=bordered secondary|on=true|state=idle|activeWindow=true": __body47,
    // figma: Style=Bordered Colored, On=True, State=Idle, Active Window=True
    "style2=bordered colored|on=true|state=idle|activeWindow=true": __body48,
    // figma: Style=Bordered Neutral, On=True, State=Idle, Active Window=True
    "style2=bordered neutral|on=true|state=idle|activeWindow=true": __body49,
    // figma: Style=Borderless, On=False, State=Disabled, Active Window=True
    "style2=borderless|on=false|state=disabled|activeWindow=true": __body33,
    // figma: Style=Borderless (Bezel shows On), On=False, State=Disabled, Active Window=True
    "style2=borderless (bezel shows on)|on=false|state=disabled|activeWindow=true": __body50,
    // figma: Style=Default / Preferred, On=False, State=Disabled, Active Window=True
    "style2=default / preferred|on=false|state=disabled|activeWindow=true": __body51,
    // figma: Style=Bordered Destructive, On=False, State=Disabled, Active Window=True
    "style2=bordered destructive|on=false|state=disabled|activeWindow=true": __body52,
    // figma: Style=Bordered Destructive, On=True, State=Disabled, Active Window=True
    "style2=bordered destructive|on=true|state=disabled|activeWindow=true": __body52,
    // figma: Style=Bordered Secondary, On=False, State=Disabled, Active Window=True
    "style2=bordered secondary|on=false|state=disabled|activeWindow=true": __body53,
    // figma: Style=Bordered Colored, On=False, State=Disabled, Active Window=True
    "style2=bordered colored|on=false|state=disabled|activeWindow=true": __body37,
    // figma: Style=Bordered Neutral, On=False, State=Disabled, Active Window=True
    "style2=bordered neutral|on=false|state=disabled|activeWindow=true": __body54,
    // figma: Style=Borderless, On=False, State=Clicked, Active Window=True
    "style2=borderless|on=false|state=clicked|activeWindow=true": __body39,
    // figma: Style=Borderless (Bezel shows On), On=False, State=Clicked, Active Window=True
    "style2=borderless (bezel shows on)|on=false|state=clicked|activeWindow=true": __body55,
    // figma: Style=Bordered Destructive, On=False, State=Clicked, Active Window=True
    "style2=bordered destructive|on=false|state=clicked|activeWindow=true": __body56,
    // figma: Style=Default / Preferred, On=False, State=Clicked, Active Window=True
    "style2=default / preferred|on=false|state=clicked|activeWindow=true": __body57,
    // figma: Style=Bordered Destructive, On=True, State=Clicked, Active Window=True
    "style2=bordered destructive|on=true|state=clicked|activeWindow=true": __body56,
    // figma: Style=Bordered Secondary, On=False, State=Clicked, Active Window=True
    "style2=bordered secondary|on=false|state=clicked|activeWindow=true": __body58,
    // figma: Style=Bordered Colored, On=False, State=Clicked, Active Window=True
    "style2=bordered colored|on=false|state=clicked|activeWindow=true": __body43,
    // figma: Style=Bordered Neutral, On=False, State=Clicked, Active Window=True
    "style2=bordered neutral|on=false|state=clicked|activeWindow=true": __body59,
    // figma: Style=Borderless, On=False, State=Idle, Active Window=True
    "style2=borderless|on=false|state=idle|activeWindow=true": __body39,
    // figma: Style=Bordered Destructive, On=False, State=Idle, Active Window=True
    "style2=bordered destructive|on=false|state=idle|activeWindow=true": __body60,
    // figma: Style=Borderless (Bezel shows On), On=False, State=Idle, Active Window=True
    "style2=borderless (bezel shows on)|on=false|state=idle|activeWindow=true": __body61,
    // figma: Style=Default / Preferred, On=False, State=Idle, Active Window=True
    "style2=default / preferred|on=false|state=idle|activeWindow=true": __body62,
    // figma: Style=Bordered Destructive, On=True, State=Idle, Active Window=True
    "style2=bordered destructive|on=true|state=idle|activeWindow=true": __body60,
    // figma: Style=Bordered Secondary, On=False, State=Idle, Active Window=True
    "style2=bordered secondary|on=false|state=idle|activeWindow=true": __body63,
    // figma: Style=Bordered Colored, On=False, State=Idle, Active Window=True
    "style2=bordered colored|on=false|state=idle|activeWindow=true": __body48,
    // figma: Style=Bordered Neutral, On=False, State=Idle, Active Window=True
    "style2=bordered neutral|on=false|state=idle|activeWindow=true": __body64,
  };
  return (__impls[__vkey(props)] ?? __body64)();
}
export default MacPushButton;
