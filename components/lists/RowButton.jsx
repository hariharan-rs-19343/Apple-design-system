import { Separator } from './Separator.jsx';

// figma node: 550:49677 Row - Button (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "value=" + __venc(p.value);

export function RowButton(_p = {}) {
  const props = { ..._p, value: _p.value ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 52,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 1px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--grays-gray-2)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Action"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 52,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 1px 16px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--accents-red)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Action"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 52,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 1px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--accents-blue)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Action"}</span>
    </div>
  );
  const __impls = {
    // figma: Value=Disabled
    "value=disabled": __body0,
    // figma: Value=Destructive
    "value=destructive": __body1,
    // figma: Value=Default
    "value=default": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default RowButton;
