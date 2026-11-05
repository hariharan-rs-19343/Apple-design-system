import { Separator } from '../lists/Separator.jsx';

// figma node: 553:23047 Text Field (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function TextField2(_p = {}) {
  const props = { ..._p, state: _p.state ?? "placeholder", value: _p.value ?? "Value" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 52,
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.430px",
          color: "rgba(60,60,67,0.3)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.value}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 52,
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 2,
            height: 22,
            borderRadius: 10,
            backgroundColor: "var(--accents-blue)",
            flexShrink: 0,
          }} />
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 52,
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.430px",
          color: "var(--labels-primary)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.value}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 52,
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 17,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.430px",
              color: "var(--labels-primary)",
              flexShrink: 0,
            }}>{props.value}</span>
            <div style={{
              position: "relative",
              width: 2,
              height: 22,
              borderRadius: 10,
              backgroundColor: "var(--accents-blue)",
              flexShrink: 0,
            }} />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(60,60,67,0.3)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "􀁡"}</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Placeholder
    "state=placeholder": __body0,
    // figma: State=Focused
    "state=focused": __body1,
    // figma: State=Value Entered
    "state=value entered": __body2,
    // figma: State=Typing
    "state=typing": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TextField2;
