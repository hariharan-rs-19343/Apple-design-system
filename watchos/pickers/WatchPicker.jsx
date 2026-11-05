import { WatchEditLabel } from './WatchEditLabel.jsx';
import { WatchWheels } from './WatchWheels.jsx';

// figma node: 6445:5801 Picker (13 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "values=" + __venc(p.values) + '|' + "selected=" + __venc(p.selected);

export function WatchPicker(_p = {}) {
  const props = { ..._p, values: _p.values ?? "1", selected: _p.selected ?? "1", showLabel: _p.showLabel ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-width-safe-area) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        minWidth: 43,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "0px 1px 0px 1px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        minWidth: 43,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "0px 1px 0px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          before={"20"}
          current={"21"}
          next={"22"}
          state={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-end",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <WatchEditLabel />}</div>
        )}
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          before={"2024"}
          current={"2025"}
          next={"2026"}
          state={"focused"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-width-safe-area) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        minWidth: 43,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "0px 1px 0px 1px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        minWidth: 43,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "0px 1px 0px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <WatchEditLabel />}</div>
        )}
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          before={"20"}
          current={"21"}
          next={"22"}
          state={"focused"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-end",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          before={"2024"}
          current={"2025"}
          next={"2026"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-width-safe-area) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        minWidth: 43,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "0px 1px 0px 1px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <WatchEditLabel />}</div>
        )}
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"focused"}
        />
      </div>
      <div style={{
        position: "relative",
        minWidth: 43,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "0px 1px 0px 1px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          before={"20"}
          current={"21"}
          next={"22"}
          state={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-end",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          before={"2024"}
          current={"2025"}
          next={"2026"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-width-safe-area) * 1px)",
      height: "calc(var(--watch-picker-height) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <WatchWheels
        style={{
          position: "relative",
          width: 43,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
      />
      <WatchWheels
        style={{
          position: "relative",
          width: 43,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        before={"20"}
        current={"21"}
        next={"22"}
        state={"default"}
      />
      <WatchWheels
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        before={"2024"}
        current={"2025"}
        next={"2026"}
        state={"default"}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-width-safe-area) * 1px)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "0px 1px 0px 1px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: "calc(var(--watch-picker-font-size-wheel) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.080px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? ":"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <WatchEditLabel />}</div>
        )}
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"focused"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: "calc(var(--watch-picker-font-size-wheel) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.080px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? ":"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "0px 1px 0px 1px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-width-safe-area) * 1px)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "0px 1px 0px 1px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <WatchEditLabel />}</div>
        )}
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"focused"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: "calc(var(--watch-picker-font-size-wheel) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.080px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? ":"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: "calc(var(--watch-picker-font-size-wheel) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.080px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? ":"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "0px 1px 0px 1px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-width-safe-area) * 1px)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "0px 1px 0px 1px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: "calc(var(--watch-picker-font-size-wheel) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.080px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? ":"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: "calc(var(--watch-picker-font-size-wheel) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.080px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? ":"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "0px 1px 0px 1px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <WatchEditLabel />}</div>
        )}
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"focused"}
        />
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-width-safe-area) * 1px)",
      height: "calc(var(--watch-picker-height) * 1px)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <WatchWheels
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        state={"default"}
      />
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: "calc(var(--watch-picker-font-size-wheel) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.080px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? ":"}</span>
      <WatchWheels
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        state={"default"}
      />
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: "calc(var(--watch-picker-font-size-wheel) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.080px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? ":"}</span>
      <WatchWheels
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        state={"default"}
      />
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-width-copy-safe-area) * 1px)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: "calc(var(--watch-picker-font-size-wheel) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.080px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? ":"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-end",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <WatchEditLabel />}</div>
        )}
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"focused"}
        />
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-width-copy-safe-area) * 1px)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <WatchEditLabel />}</div>
        )}
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"focused"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: "calc(var(--watch-picker-font-size-wheel) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.080px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? ":"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-end",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <WatchWheels
          style={{
            position: "relative",
            height: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-width-copy-safe-area) * 1px)",
      height: "calc(var(--watch-picker-height) * 1px)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <WatchWheels
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        state={"default"}
      />
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: "calc(var(--watch-picker-font-size-wheel) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.080px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? ":"}</span>
      <WatchWheels
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        state={"default"}
      />
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-width-copy-safe-area) * 1px)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showLabel && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <WatchEditLabel />}</div>
      )}
      <WatchWheels
        style={{
          position: "relative",
          height: 75,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        state={"focused"}
      />
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "calc(var(--watch-width-copy-safe-area) * 1px)",
      height: "calc(var(--watch-picker-height) * 1px)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <WatchWheels
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          height: "auto",
          width: "auto",
        }}
        state={"default"}
      />
    </div>
  );
  const __impls = {
    // figma: Values=3 (mixed widths), Selected=3
    "values=3 (mixed widths)|selected=3": __body0,
    // figma: Values=3 (mixed widths), Selected=2
    "values=3 (mixed widths)|selected=2": __body1,
    // figma: Values=3 (mixed widths), Selected=1
    "values=3 (mixed widths)|selected=1": __body2,
    // figma: Values=3 (mixed widths), Selected=None
    "values=3 (mixed widths)|selected=none": __body3,
    // figma: Values=3, Selected=2
    "values=3|selected=2": __body4,
    // figma: Values=3, Selected=1
    "values=3|selected=1": __body5,
    // figma: Values=3, Selected=3
    "values=3|selected=3": __body6,
    // figma: Values=3, Selected=None
    "values=3|selected=none": __body7,
    // figma: Values=2, Selected=2
    "values=2|selected=2": __body8,
    // figma: Values=2, Selected=1
    "values=2|selected=1": __body9,
    // figma: Values=2, Selected=None
    "values=2|selected=none": __body10,
    // figma: Values=1, Selected=1
    "values=1|selected=1": __body11,
    // figma: Values=1, Selected=None
    "values=1|selected=none": __body12,
  };
  return (__impls[__vkey(props)] ?? __body11)();
}
export default WatchPicker;
