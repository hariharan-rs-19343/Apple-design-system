import { ButtonBottom48PtBack } from '../kit/ButtonBottom48PtBack.jsx';
import { MaterialsModeOptions } from '../materials/MaterialsModeOptions.jsx';
import { Prompt } from '../fields/Prompt.jsx';
import { SearchField } from '../fields/SearchField.jsx';

// figma node: 149:62906 Navigation Bar - iPad - Multitasking (Compact Size Class) (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2);

export function NavigationBarIPadMultitaskingCompact(_p = {}) {
  const props = { ..._p, showBackground: _p.showBackground ?? true, title: _p.title ?? "Title", style2: _p.style2 ?? "default", showPrompt: _p.showPrompt ?? false, showLeading: _p.showLeading ?? true, showTrailing: _p.showTrailing ?? true, showSearch: _p.showSearch ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showBackground && (
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 175,
        overflow: "hidden",
        borderTop: "1px solid rgba(0,0,0,0.3)",
        borderRight: "1px solid rgba(0,0,0,0.3)",
        borderBottom: "0.333px solid rgba(0,0,0,0.3)",
        borderLeft: "1px solid rgba(0,0,0,0.3)",
      }}>
        <MaterialsModeOptions
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 175,
          }}
          mode={"light"}
          style2={"chrome"}
        />
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        padding: "11px 9.500px 11px 9.500px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }} />
      </div>
      {props.showPrompt && (
      <Prompt style={{
          position: "relative",
          height: 38,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
      )}
      <div style={{
        position: "relative",
        height: 44,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: 48,
          }}>{props.icon1 ?? <ButtonBottom48PtBack />}</div>
        {props.showTrailing && (
        <div style={{
          position: "absolute",
          left: 361,
          top: 0,
          boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          padding: "11px 16px 11px 0px",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>􀓔</span>
          </div>
        </div>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "3px 16px 8px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 34,
          whiteSpace: "nowrap",
          lineHeight: "41px",
          letterSpacing: "0.400px",
          color: "var(--labels-primary)",
          flexShrink: 0,
        }}>{props.title}</span>
      </div>
      {props.showSearch && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "1px 16px 15px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SearchField
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          searchText={"Search"}
          state={"placeholder"}
        />
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showBackground && (
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 123,
        overflow: "hidden",
        borderTop: "1px solid rgba(0,0,0,0.3)",
        borderRight: "1px solid rgba(0,0,0,0.3)",
        borderBottom: "0.333px solid rgba(0,0,0,0.3)",
        borderLeft: "1px solid rgba(0,0,0,0.3)",
      }}>
        <MaterialsModeOptions
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 123,
          }}
          mode={"light"}
          style2={"chrome"}
        />
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        padding: "11px 9.500px 11px 9.500px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }} />
      </div>
      {props.showPrompt && (
      <Prompt style={{
          position: "relative",
          height: 38,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
      )}
      <div style={{
        position: "relative",
        height: 44,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: 48,
          }}>{props.icon1 ?? <ButtonBottom48PtBack />}</div>
        <span style={{
          position: "absolute",
          left: 183.099,
          top: 11,
          width: 36.824,
          height: 22,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "var(--labels-primary)",
        }}>{props.title}</span>
        {props.showTrailing && (
        <div style={{
          position: "absolute",
          left: 361,
          top: 0,
          boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          padding: "11px 16px 11px 0px",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,105,105)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "var(--accents-blue)",
              flexShrink: 0,
            }}>􀓔</span>
          </div>
        </div>
        )}
      </div>
      {props.showSearch && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "1px 16px 15px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SearchField
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          searchText={"Search"}
          state={"placeholder"}
        />
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: Style=Large
    "style2=large": __body0,
    // figma: Style=Default
    "style2=default": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default NavigationBarIPadMultitaskingCompact;
