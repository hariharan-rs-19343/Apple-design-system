import { MacControlBackgrounds } from './MacControlBackgrounds.jsx';

// figma node: 497:3757 Checkboxes (18 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "selection=" + __venc(p.selection) + '|' + "state=" + __venc(p.state) + '|' + "activeWindow=" + __venc(p.activeWindow);

export function MacCheckboxes(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Label", selection: _p.selection ?? "on", state: _p.state ?? "idle", activeWindow: _p.activeWindow ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mac-radio-button-spacing) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-checkboxes-width) * 1px)",
        overflow: "hidden",
        borderRadius: 5.5,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={false} state={"idle"} style2={"bordered neutral"} context={"content area"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mac-radio-button-spacing) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-checkboxes-width) * 1px)",
        overflow: "hidden",
        borderRadius: 5.5,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={false} state={"clicked"} style2={"bordered neutral"} context={"content area"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mac-radio-button-spacing) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-checkboxes-width) * 1px)",
        overflow: "hidden",
        borderRadius: 5.5,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={false} state={"disabled"} style2={"bordered neutral"} context={"content area"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
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
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mac-radio-button-spacing) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-checkboxes-width) * 1px)",
        overflow: "hidden",
        borderRadius: 5.5,
        display: "flex",
        flexDirection: "row",
        padding: "7px 5px 7px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"idle"} style2={"bordered colored"} context={"content area"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          width: "calc(var(--mac-radio-button-width-dash) * 1px)",
          borderRadius: 100,
          backgroundColor: "var(--mac-glyphs-neutral-idle)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mac-radio-button-spacing) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-checkboxes-width) * 1px)",
        overflow: "hidden",
        borderRadius: 5.5,
        display: "flex",
        flexDirection: "row",
        padding: "7px 5px 7px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"clicked"} style2={"bordered colored"} context={"content area"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          width: "calc(var(--mac-radio-button-width-dash) * 1px)",
          borderRadius: 100,
          backgroundColor: "var(--mac-glyphs-neutral-idle)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mac-radio-button-spacing) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-checkboxes-width) * 1px)",
        overflow: "hidden",
        borderRadius: 5.5,
        display: "flex",
        flexDirection: "row",
        padding: "7px 5px 7px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"disabled"} style2={"bordered colored"} context={"content area"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          width: "calc(var(--mac-radio-button-width-dash) * 1px)",
          borderRadius: 100,
          backgroundColor: "var(--mac-glyphs-neutral-disabled)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
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
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mac-radio-button-spacing) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--mac-glyphs-neutral-idle)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-checkboxes-width) * 1px)",
        overflow: "hidden",
        borderRadius: 5.5,
        display: "flex",
        flexDirection: "row",
        padding: "6px 6px 6px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"idle"} style2={"bordered colored"} context={"content area"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
        <svg width={9.310} height={8.930} viewBox="0 0 9.310 8.930" fill="none" style={{
          position: "relative",
          width: "calc(var(--mac-checkboxes-width-checkmark) * 1px)",
          height: "calc(var(--mac-checkboxes-height-checkmark) * 1px)",
          flexShrink: 0,
        }}>
          <path d={"M 3.676 8.93 C 4.046 8.93 4.325 8.79 4.515 8.5 L 9.11 1.462 C 9.25 1.241 9.31 1.051 9.31 0.861 C 9.31 0.36 8.93 0 8.411 0 C 8.061 0 7.852 0.13 7.632 0.461 L 3.646 6.778 L 1.608 4.225 C 1.408 3.984 1.199 3.874 0.899 3.874 C 0.38 3.874 0 4.245 0 4.755 C 0 4.976 0.07 5.176 0.26 5.396 L 2.837 8.54 C 3.057 8.81 3.316 8.93 3.666 8.93 L 3.676 8.93 Z"} fill="currentColor" fillRule="nonzero" />
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
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mac-radio-button-spacing) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--mac-glyphs-neutral-idle)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-checkboxes-width) * 1px)",
        overflow: "hidden",
        borderRadius: 5.5,
        display: "flex",
        flexDirection: "row",
        padding: "6px 6px 6px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"clicked"} style2={"bordered colored"} context={"content area"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
        <svg width={9.310} height={8.930} viewBox="0 0 9.310 8.930" fill="none" style={{
          position: "relative",
          width: "calc(var(--mac-checkboxes-width-checkmark) * 1px)",
          height: "calc(var(--mac-checkboxes-height-checkmark) * 1px)",
          flexShrink: 0,
        }}>
          <path d={"M 3.676 8.93 C 4.046 8.93 4.325 8.79 4.515 8.5 L 9.11 1.462 C 9.25 1.241 9.31 1.051 9.31 0.861 C 9.31 0.36 8.93 0 8.411 0 C 8.061 0 7.852 0.13 7.632 0.461 L 3.646 6.778 L 1.608 4.225 C 1.408 3.984 1.199 3.874 0.899 3.874 C 0.38 3.874 0 4.245 0 4.755 C 0 4.976 0.07 5.176 0.26 5.396 L 2.837 8.54 C 3.057 8.81 3.316 8.93 3.666 8.93 L 3.676 8.93 Z"} fill="currentColor" fillRule="nonzero" />
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
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mac-radio-button-spacing) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--mac-glyphs-neutral-disabled)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-checkboxes-width) * 1px)",
        overflow: "hidden",
        borderRadius: 5.5,
        display: "flex",
        flexDirection: "row",
        padding: "6px 6px 6px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>{props.icon1 ?? <MacControlBackgrounds active={false} on={true} state={"disabled"} style2={"bordered colored"} context={"content area"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
        <svg width={9.310} height={8.930} viewBox="0 0 9.310 8.930" fill="none" style={{
          position: "relative",
          width: "calc(var(--mac-checkboxes-width-checkmark) * 1px)",
          height: "calc(var(--mac-checkboxes-height-checkmark) * 1px)",
          flexShrink: 0,
        }}>
          <path d={"M 3.676 8.93 C 4.046 8.93 4.325 8.79 4.515 8.5 L 9.11 1.462 C 9.25 1.241 9.31 1.051 9.31 0.861 C 9.31 0.36 8.93 0 8.411 0 C 8.061 0 7.852 0.13 7.632 0.461 L 3.646 6.778 L 1.608 4.225 C 1.408 3.984 1.199 3.874 0.899 3.874 C 0.38 3.874 0 4.245 0 4.755 C 0 4.976 0.07 5.176 0.26 5.396 L 2.837 8.54 C 3.057 8.81 3.316 8.93 3.666 8.93 L 3.676 8.93 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mac-radio-button-spacing) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-checkboxes-width) * 1px)",
        overflow: "hidden",
        borderRadius: 5.5,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={false} state={"idle"} style2={"bordered neutral"} context={"content area"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
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
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mac-radio-button-spacing) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-checkboxes-width) * 1px)",
        overflow: "hidden",
        borderRadius: 5.5,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={false} state={"clicked"} style2={"bordered neutral"} context={"content area"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
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
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mac-radio-button-spacing) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-checkboxes-width) * 1px)",
        overflow: "hidden",
        borderRadius: 5.5,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={false} state={"disabled"} style2={"bordered neutral"} context={"content area"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mac-radio-button-spacing) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-checkboxes-width) * 1px)",
        overflow: "hidden",
        borderRadius: 5.5,
        display: "flex",
        flexDirection: "row",
        padding: "7px 5px 7px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"idle"} style2={"bordered colored"} context={"content area"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          width: "calc(var(--mac-radio-button-width-dash) * 1px)",
          borderRadius: 100,
          backgroundColor: "var(--mac-glyphs-primary-idle)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mac-radio-button-spacing) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-checkboxes-width) * 1px)",
        overflow: "hidden",
        borderRadius: 5.5,
        display: "flex",
        flexDirection: "row",
        padding: "7px 5px 7px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"clicked"} style2={"bordered colored"} context={"content area"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          width: "calc(var(--mac-radio-button-width-dash) * 1px)",
          borderRadius: 100,
          backgroundColor: "var(--mac-glyphs-primary-idle)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mac-radio-button-spacing) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-checkboxes-width) * 1px)",
        overflow: "hidden",
        borderRadius: 5.5,
        display: "flex",
        flexDirection: "row",
        padding: "7px 5px 7px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"disabled"} style2={"bordered colored"} context={"content area"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          width: "calc(var(--mac-radio-button-width-dash) * 1px)",
          borderRadius: 100,
          backgroundColor: "rgba(255,255,255,0.5)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mac-radio-button-spacing) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--mac-glyphs-primary-idle)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-checkboxes-width) * 1px)",
        overflow: "hidden",
        borderRadius: 5.5,
        display: "flex",
        flexDirection: "row",
        padding: "4px 5px 4px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"idle"} style2={"bordered colored"} context={"content area"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
        <svg width={9.310} viewBox="0 0 9.310 8.930" fill="none" style={{
          position: "relative",
          width: "calc(var(--mac-checkboxes-width-checkmark) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 3.676 8.93 C 4.046 8.93 4.325 8.79 4.515 8.5 L 9.11 1.462 C 9.25 1.241 9.31 1.051 9.31 0.861 C 9.31 0.36 8.93 0 8.411 0 C 8.061 0 7.852 0.13 7.632 0.461 L 3.646 6.778 L 1.608 4.225 C 1.408 3.984 1.199 3.874 0.899 3.874 C 0.38 3.874 0 4.245 0 4.755 C 0 4.976 0.07 5.176 0.26 5.396 L 2.837 8.54 C 3.057 8.81 3.316 8.93 3.666 8.93 L 3.676 8.93 Z"} fill="currentColor" fillRule="nonzero" />
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
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mac-radio-button-spacing) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--mac-glyphs-primary-idle)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-checkboxes-width) * 1px)",
        overflow: "hidden",
        borderRadius: 5.5,
        display: "flex",
        flexDirection: "row",
        padding: "4px 5px 4px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"clicked"} style2={"bordered colored"} context={"content area"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
        <svg width={9.310} viewBox="0 0 9.310 8.930" fill="none" style={{
          position: "relative",
          width: "calc(var(--mac-checkboxes-width-checkmark) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 3.676 8.93 C 4.046 8.93 4.325 8.79 4.515 8.5 L 9.11 1.462 C 9.25 1.241 9.31 1.051 9.31 0.861 C 9.31 0.36 8.93 0 8.411 0 C 8.061 0 7.852 0.13 7.632 0.461 L 3.646 6.778 L 1.608 4.225 C 1.408 3.984 1.199 3.874 0.899 3.874 C 0.38 3.874 0 4.245 0 4.755 C 0 4.976 0.07 5.176 0.26 5.396 L 2.837 8.54 C 3.057 8.81 3.316 8.93 3.666 8.93 L 3.676 8.93 Z"} fill="currentColor" fillRule="nonzero" />
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
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--mac-radio-button-spacing) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(255,255,255,0.5)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-checkboxes-width) * 1px)",
        overflow: "hidden",
        borderRadius: 5.5,
        display: "flex",
        flexDirection: "row",
        padding: "4px 5px 4px 5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
          }}>{props.icon1 ?? <MacControlBackgrounds active={true} on={true} state={"disabled"} style2={"bordered colored"} context={"content area"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
        <svg width={9.310} viewBox="0 0 9.310 8.930" fill="none" style={{
          position: "relative",
          width: "calc(var(--mac-checkboxes-width-checkmark) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 3.676 8.93 C 4.046 8.93 4.325 8.79 4.515 8.5 L 9.11 1.462 C 9.25 1.241 9.31 1.051 9.31 0.861 C 9.31 0.36 8.93 0 8.411 0 C 8.061 0 7.852 0.13 7.632 0.461 L 3.646 6.778 L 1.608 4.225 C 1.408 3.984 1.199 3.874 0.899 3.874 C 0.38 3.874 0 4.245 0 4.755 C 0 4.976 0.07 5.176 0.26 5.396 L 2.837 8.54 C 3.057 8.81 3.316 8.93 3.666 8.93 L 3.676 8.93 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Selection=Off, State=Idle, Active Window=False
    "selection=off|state=idle|activeWindow=false": __body0,
    // figma: Selection=Off, State=Clicked, Active Window=False
    "selection=off|state=clicked|activeWindow=false": __body1,
    // figma: Selection=Off, State=Disabled, Active Window=False
    "selection=off|state=disabled|activeWindow=false": __body2,
    // figma: Selection=Mixed, State=Idle, Active Window=False
    "selection=mixed|state=idle|activeWindow=false": __body3,
    // figma: Selection=Mixed, State=Clicked, Active Window=False
    "selection=mixed|state=clicked|activeWindow=false": __body4,
    // figma: Selection=Mixed, State=Disabled, Active Window=False
    "selection=mixed|state=disabled|activeWindow=false": __body5,
    // figma: Selection=On, State=Idle, Active Window=False
    "selection=on|state=idle|activeWindow=false": __body6,
    // figma: Selection=On, State=Clicked, Active Window=False
    "selection=on|state=clicked|activeWindow=false": __body7,
    // figma: Selection=On, State=Disabled, Active Window=False
    "selection=on|state=disabled|activeWindow=false": __body8,
    // figma: Selection=Off, State=Idle, Active Window=True
    "selection=off|state=idle|activeWindow=true": __body9,
    // figma: Selection=Off, State=Clicked, Active Window=True
    "selection=off|state=clicked|activeWindow=true": __body10,
    // figma: Selection=Off, State=Disabled, Active Window=True
    "selection=off|state=disabled|activeWindow=true": __body11,
    // figma: Selection=Mixed, State=Idle, Active Window=True
    "selection=mixed|state=idle|activeWindow=true": __body12,
    // figma: Selection=Mixed, State=Clicked, Active Window=True
    "selection=mixed|state=clicked|activeWindow=true": __body13,
    // figma: Selection=Mixed, State=Disabled, Active Window=True
    "selection=mixed|state=disabled|activeWindow=true": __body14,
    // figma: Selection=On, State=Idle, Active Window=True
    "selection=on|state=idle|activeWindow=true": __body15,
    // figma: Selection=On, State=Clicked, Active Window=True
    "selection=on|state=clicked|activeWindow=true": __body16,
    // figma: Selection=On, State=Disabled, Active Window=True
    "selection=on|state=disabled|activeWindow=true": __body17,
  };
  return (__impls[__vkey(props)] ?? __body15)();
}
export default MacCheckboxes;
