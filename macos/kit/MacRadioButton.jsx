import { MacControlBackgrounds } from './MacControlBackgrounds.jsx';

// figma node: 121:12141 Radio Button (18 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "selection=" + __venc(p.selection) + '|' + "state=" + __venc(p.state) + '|' + "activeWindow=" + __venc(p.activeWindow);

export function MacRadioButton(_p = {}) {
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
        width: "calc(var(--mac-radio-button-width) * 1px)",
        overflow: "hidden",
        borderRadius: 8,
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
        width: "calc(var(--mac-radio-button-width) * 1px)",
        overflow: "hidden",
        borderRadius: 8,
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
        width: "calc(var(--mac-radio-button-width) * 1px)",
        overflow: "hidden",
        borderRadius: 8,
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
        width: "calc(var(--mac-radio-button-width) * 1px)",
        overflow: "hidden",
        borderRadius: 100,
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
        width: "calc(var(--mac-radio-button-width) * 1px)",
        overflow: "hidden",
        borderRadius: 100,
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
        width: "calc(var(--mac-radio-button-width) * 1px)",
        overflow: "hidden",
        borderRadius: 100,
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
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-radio-button-width) * 1px)",
        overflow: "hidden",
        borderRadius: 100,
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
        <div style={{
          position: "relative",
          width: "calc(var(--mac-radio-button-width-dot) * 1px)",
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
  const __body7 = () => (
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
        width: "calc(var(--mac-radio-button-width) * 1px)",
        overflow: "hidden",
        borderRadius: 100,
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
        <div style={{
          position: "relative",
          width: "calc(var(--mac-radio-button-width-dot) * 1px)",
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
  const __body8 = () => (
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
        width: "calc(var(--mac-radio-button-width) * 1px)",
        overflow: "hidden",
        borderRadius: 100,
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
        <div style={{
          position: "relative",
          width: "calc(var(--mac-radio-button-width-dot) * 1px)",
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
        width: "calc(var(--mac-radio-button-width) * 1px)",
        overflow: "hidden",
        borderRadius: 8,
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
        width: "calc(var(--mac-radio-button-width) * 1px)",
        overflow: "hidden",
        borderRadius: 8,
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
        width: "calc(var(--mac-radio-button-width) * 1px)",
        overflow: "hidden",
        borderRadius: 8,
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
        width: "calc(var(--mac-radio-button-width) * 1px)",
        overflow: "hidden",
        borderRadius: 100,
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
        width: "calc(var(--mac-radio-button-width) * 1px)",
        overflow: "hidden",
        borderRadius: 100,
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
        width: "calc(var(--mac-radio-button-width) * 1px)",
        overflow: "hidden",
        borderRadius: 100,
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
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--mac-radio-button-width) * 1px)",
        overflow: "hidden",
        borderRadius: 100,
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
        <div style={{
          position: "relative",
          width: "calc(var(--mac-radio-button-width-dot) * 1px)",
          height: "calc(var(--mac-radio-button-width-dot) * 1px)",
          borderRadius: 100,
          backgroundColor: "var(--mac-glyphs-primary-idle)",
          flexShrink: 0,
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
  const __body16 = () => (
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
        width: "calc(var(--mac-radio-button-width) * 1px)",
        overflow: "hidden",
        borderRadius: 100,
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
        <div style={{
          position: "relative",
          width: "calc(var(--mac-radio-button-width-dot) * 1px)",
          height: "calc(var(--mac-radio-button-width-dot) * 1px)",
          borderRadius: 100,
          backgroundColor: "var(--mac-glyphs-primary-idle)",
          flexShrink: 0,
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
  const __body17 = () => (
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
        width: "calc(var(--mac-radio-button-width) * 1px)",
        overflow: "hidden",
        borderRadius: 100,
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
        <div style={{
          position: "relative",
          width: "calc(var(--mac-radio-button-width-dot) * 1px)",
          height: "calc(var(--mac-radio-button-width-dot) * 1px)",
          borderRadius: 100,
          backgroundColor: "rgba(255,255,255,0.5)",
          flexShrink: 0,
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
export default MacRadioButton;
