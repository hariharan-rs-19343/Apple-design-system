import { Swatch } from './Swatch.jsx';

// figma node: 5532:7800 _Swatch Grid
export function SwatchGrid(_p = {}) {
  const props = { ..._p, group: _p.group ?? "Backgrounds" };
  return (
    <div className={props.className} style={{
      width: 659,
      height: 370,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 200,
        top: 270,
        width: 459,
        height: 100,
        display: "flex",
        flexDirection: "row",
        gap: 20,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <Swatch
          style={{
            position: "relative",
            width: 100,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          type={"color"}
          mode={"dark"}
        />
        <Swatch
          style={{
            position: "relative",
            width: 100,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          type={"color"}
          mode={"dark"}
        />
        <Swatch
          style={{
            position: "relative",
            width: 100,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          type={"color"}
          mode={"dark"}
        />
        <Swatch
          style={{
            position: "relative",
            width: 100,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          type={"color"}
          mode={"dark"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 200,
        top: 150,
        width: 459,
        height: 100,
        display: "flex",
        flexDirection: "row",
        gap: 20,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <Swatch
          style={{
            position: "relative",
            width: 100,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          type={"color"}
          mode={"dark"}
        />
        <Swatch
          style={{
            position: "relative",
            width: 100,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          type={"color"}
          mode={"dark"}
        />
        <Swatch
          style={{
            position: "relative",
            width: 100,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          type={"color"}
          mode={"dark"}
        />
        <Swatch
          style={{
            position: "relative",
            width: 100,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          type={"color"}
          mode={"dark"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 200,
        top: 30,
        width: 459,
        height: 100,
        display: "flex",
        flexDirection: "row",
        gap: 20,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <Swatch
          style={{
            position: "relative",
            width: 100,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          type={"color"}
          mode={"light"}
        />
        <Swatch
          style={{
            position: "relative",
            width: 100,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          type={"color"}
          mode={"light"}
        />
        <Swatch
          style={{
            position: "relative",
            width: 100,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          type={"color"}
          mode={"light"}
        />
        <Swatch
          style={{
            position: "relative",
            width: 100,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          type={"color"}
          mode={"light"}
        />
      </div>
      <span style={{
        position: "absolute",
        left: 0,
        top: 180,
        width: 94,
        height: 18,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.080px",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "Dark - Elevated"}</span>
      <span style={{
        position: "absolute",
        left: 0,
        top: 290,
        width: 72,
        height: 18,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.080px",
        color: "rgb(0,0,0)",
      }}>{props.text2 ?? "Dark - Base"}</span>
      <span style={{
        position: "absolute",
        left: 0,
        top: 70,
        width: 31,
        height: 18,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.080px",
        color: "rgb(0,0,0)",
      }}>{props.text3 ?? "Light"}</span>
      <span style={{
        position: "absolute",
        left: 560,
        top: 0,
        width: 69,
        height: 18,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.080px",
        color: "rgb(0,0,0)",
      }}>{props.text4 ?? "Quaternary"}</span>
      <span style={{
        position: "absolute",
        left: 440,
        top: 0,
        width: 47,
        height: 18,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.080px",
        color: "rgb(0,0,0)",
      }}>Tertiary</span>
      <span style={{
        position: "absolute",
        left: 320,
        top: 0,
        width: 65,
        height: 18,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.080px",
        color: "rgb(0,0,0)",
      }}>Secondary</span>
      <span style={{
        position: "absolute",
        left: 200,
        top: 0,
        width: 47,
        height: 18,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.080px",
        color: "rgb(0,0,0)",
      }}>Primary</span>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 83,
        height: 18,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.080px",
        color: "rgb(0,0,0)",
      }}>{props.group}</span>
    </div>
  );
}
export default SwatchGrid;
