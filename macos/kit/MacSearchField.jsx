import { MacClear } from './MacClear.jsx';
import { MacMagnifyingGlass } from './MacMagnifyingGlass.jsx';
import { MacSearchFields } from './MacSearchFields.jsx';

// figma node: 480:760 Search Field (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "text=" + __venc(p.text) + '|' + "state=" + __venc(p.state);

export function MacSearchField(_p = {}) {
  const props = { ..._p, value: _p.value ?? "Search", text: _p.text ?? false, state: _p.state ?? "idle" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 120,
      height: "calc(var(--mac-global-height) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "0px 4px 0px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-fields-inset-left) * 1px)",
      paddingRight: "calc(var(--mac-fields-inset-right) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}>
        <MacSearchFields
          style={{ width: "100%", height: "100%" }}
          state={"disabled"}
          context={"content area"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 16,
          height: 15,
          flexShrink: 0,
        }}>{props.icon1 ?? <MacMagnifyingGlass />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexShrink: 0,
      }}>{props.value}</span>
      <div style={{
          position: "relative",
          width: 16,
          height: 15,
          flexShrink: 0,
        }}>{props.icon2 ?? <MacClear state={"idle"} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 120,
      height: "calc(var(--mac-global-height) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "0px 4px 0px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-fields-inset-left) * 1px)",
      paddingRight: "calc(var(--mac-fields-inset-right) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}>
        <MacSearchFields
          style={{ width: "100%", height: "100%" }}
          state={"focused"}
          context={"content area"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 16,
          height: 15,
          flexShrink: 0,
        }}>{props.icon1 ?? <MacMagnifyingGlass />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--mac-global-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
          flexShrink: 0,
        }}>{props.value}</span>
        <div style={{
          position: "relative",
          width: 2,
          height: "calc(var(--mac-cursor-height) * 1px)",
          borderRadius: 100,
          backgroundColor: "var(--mac-accents-blue)",
          flexShrink: 0,
        }} />
      </div>
      <div style={{
          position: "relative",
          width: 16,
          height: 15,
          flexShrink: 0,
        }}>{props.icon2 ?? <MacClear state={"idle"} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 120,
      height: "calc(var(--mac-global-height) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "0px 4px 0px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-fields-inset-left) * 1px)",
      paddingRight: "calc(var(--mac-fields-inset-right) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}>
        <MacSearchFields
          style={{ width: "100%", height: "100%" }}
          state={"idle"}
          context={"content area"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 16,
          height: 15,
          flexShrink: 0,
        }}>{props.icon1 ?? <MacMagnifyingGlass />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexGrow: 1,
      }}>{props.value}</span>
      <div style={{
          position: "relative",
          width: 16,
          height: 15,
          flexShrink: 0,
        }}>{props.icon2 ?? <MacClear state={"idle"} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 120,
      height: "calc(var(--mac-global-height) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "0px 4px 0px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-fields-inset-left) * 1px)",
      paddingRight: "calc(var(--mac-fields-inset-right) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}>
        <MacSearchFields
          style={{ width: "100%", height: "100%" }}
          state={"disabled"}
          context={"content area"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 16,
          height: 15,
          flexShrink: 0,
        }}>{props.icon1 ?? <MacMagnifyingGlass />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 510,
        fontSize: "calc(var(--mac-global-font-size) * 1px)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "16px",
        color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
        flexGrow: 1,
      }}>{props.value}</span>
      <div style={{
          position: "relative",
          width: 16,
          height: 15,
          flexShrink: 0,
        }}>{props.icon2 ?? <MacClear state={"idle"} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 120,
      height: "calc(var(--mac-global-height) * 1px)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "0px 4px 0px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--mac-fields-inset-left) * 1px)",
      paddingRight: "calc(var(--mac-fields-inset-right) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}>
        <MacSearchFields
          style={{ width: "100%", height: "100%" }}
          state={"focused"}
          context={"content area"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 16,
          height: 15,
          flexShrink: 0,
        }}>{props.icon1 ?? <MacMagnifyingGlass />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          width: 2,
          height: "calc(var(--mac-cursor-height) * 1px)",
          borderRadius: 100,
          backgroundColor: "var(--mac-accents-blue)",
          flexShrink: 0,
        }} />
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: "calc(var(--mac-global-font-size) * 1px)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          color: "var(--mac-labels-vibrant-use-plus-lighter-darker-primary)",
          flexShrink: 0,
        }}>{props.value}</span>
      </div>
      <div style={{
          position: "relative",
          width: 16,
          height: 15,
          flexShrink: 0,
        }}>{props.icon2 ?? <MacClear state={"idle"} />}</div>
    </div>
  );
  const __impls = {
    // figma: Text=True, State=Disabled
    "text=true|state=disabled": __body0,
    // figma: Text=True, State=Focused
    "text=true|state=focused": __body1,
    // figma: Text=True, State=Idle
    "text=true|state=idle": __body2,
    // figma: Text=False,State=Disabled
    "text=false|state=disabled": __body3,
    // figma: Text=False,State=Focused
    "text=false|state=focused": __body4,
    // figma: Text=False,State=Idle
    "text=false|state=idle": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default MacSearchField;
