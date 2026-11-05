import { Buttons2 } from './Buttons2.jsx';
import { LiquidGlassRegularMedium } from './LiquidGlassRegularMedium.jsx';
import { TextField2 } from '../text-fields/TextField2.jsx';
import { TextFieldBackground } from './TextFieldBackground.jsx';

// figma node: 63:57121 Alert (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function Alert(_p = {}) {
  const props = { ..._p, type: _p.type ?? "side-by-side", showFields: _p.showFields ?? true, showField2: _p.showField2 ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 300,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "14px 14px 14px 14px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 300,
          height: 327,
        }}>
        <LiquidGlassRegularMedium
          style={{ transform: "scale(1.875, 2.044)", transformOrigin: "0 0" }}
          mode={"light"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "8px 8px 24px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "var(--labels-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "A Short Title Is Best"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "var(--labels-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "A description should be a short, complete sentence."}</span>
      </div>
      {props.showFields && (
      <div style={{
        position: "relative",
        borderRadius: 26,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 0px 19px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <TextFieldBackground
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 272,
              height: 104,
            }}
            mode={"light"}
          />
          <TextField2
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            state={"value entered"}
          />
          {props.showField2 && (
          <TextField2
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            state={"placeholder"}
          />
          )}
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Buttons2
          style={{
            position: "relative",
            height: 48,
            flexGrow: 1,
            width: "auto",
          }}
          text={"Secondary"}
          mode={"light"}
          type={"secondary"}
        />
        <Buttons2
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          text={"Primary"}
          mode={"light"}
          type={"primary"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 300,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 300,
          height: 443,
        }}>
        <LiquidGlassRegularMedium
          style={{ transform: "scale(1.875, 2.769)", transformOrigin: "0 0" }}
          mode={"light"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "8px 8px 24px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "var(--labels-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "A Short Title Is Best"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "var(--labels-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "A description should be a short, complete sentence."}</span>
      </div>
      {props.showFields && (
      <div style={{
        position: "relative",
        borderRadius: 26,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 0px 19px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <TextFieldBackground
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 272,
              height: 104,
            }}
            mode={"light"}
          />
          <TextField2
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            state={"value entered"}
          />
          {props.showField2 && (
          <TextField2
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            state={"placeholder"}
          />
          )}
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Buttons2
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text={"Primary"}
          mode={"light"}
          type={"primary"}
        />
        <Buttons2
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text={"Destructive"}
          mode={"light"}
          type={"destructive"}
        />
        <Buttons2
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text={"Secondary"}
          mode={"light"}
          type={"secondary"}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: Type=Side-by-Side
    "type=side-by-side": __body0,
    // figma: Type=Stacked
    "type=stacked": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Alert;
