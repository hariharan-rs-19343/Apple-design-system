import { DateAndTimeCompactCollapsed } from './DateAndTimeCompactCollapsed.jsx';
import { DateAndTimeCompactCollapsed2 } from '../page-controls/DateAndTimeCompactCollapsed2.jsx';
import { SegmentedControl } from '../segmented-controls/SegmentedControl.jsx';
import { Stepper } from '../lists/Stepper.jsx';
import { ToggleSwitch } from '../toggles/ToggleSwitch.jsx';

// figma node: 553:22827 _Trailing/Light (9 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function TrailingLight(_p = {}) {
  const props = { ..._p, type: _p.type ?? "button", showInfo: _p.showInfo ?? true, showDetail: _p.showDetail ?? true, detailText: _p.detailText ?? "Detail", buttonLabel: _p.buttonLabel ?? "Button", showDrillIn: _p.showDrillIn ?? true, showSymbol: _p.showSymbol ?? false, showCheckmark: _p.showCheckmark ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 0px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 44,
        display: "flex",
        flexDirection: "row",
        gap: 9,
        padding: "0px 16px 0px 16px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
        }}>{props.text1 ?? "Pop-up"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
        }}>{props.text2 ?? "􀆏"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 16,
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.430px",
        color: "var(--accents-blue)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.buttonLabel}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <Stepper
        style={{
          position: "relative",
          width: 92,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        mode={"light"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <DateAndTimeCompactCollapsed
        style={{
          position: "relative",
          width: 106,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        month={"June"}
        year={"2024"}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 16px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <DateAndTimeCompactCollapsed2
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        time={"8:00 AM"}
      />
      <SegmentedControl
        style={{
          position: "relative",
          width: 118,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        label1={"AM"}
        label2={"PM"}
        segments={"2"}
        selected={"1"}
      />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 16px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <DateAndTimeCompactCollapsed
        style={{
          position: "relative",
          width: 106,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        month={"June"}
        year={"2024"}
      />
      <DateAndTimeCompactCollapsed2 style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }} />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ToggleSwitch state={"on"} />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "0px 16px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showDetail && (
      <div style={{
        position: "relative",
        width: 45,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 2,
          top: 8,
          width: 45,
          height: 16,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "rgba(60,60,67,0.6)",
        }}>{props.text1 ?? "Detail"}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        width: 9,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: -2,
          top: 7.273,
          width: 11,
          height: 18.182,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "25px",
          color: "var(--accents-blue)",
        }}>{props.text2 ?? "􀆊"}</span>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "0px 16px 0px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showDetail && (
      <div style={{
        position: "relative",
        width: 45,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 2,
          top: 8,
          width: 45,
          height: 16,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.430px",
          color: "rgba(60,60,67,0.6)",
        }}>{props.detailText}</span>
      </div>
      )}
      {props.showSymbol && (
      <div style={{
        position: "relative",
        width: 16,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: -1,
          top: 5,
          width: 18,
          height: 22,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(0,122,255)",
        }}>{props.text1 ?? "􀋂"}</span>
      </div>
      )}
      {props.showInfo && (
      <div style={{
        position: "relative",
        width: 16,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: -1,
          top: 5,
          width: 18,
          height: 22,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--accents-blue)",
        }}>{props.text2 ?? "􀅴"}</span>
      </div>
      )}
      {props.showCheckmark && (
      <div style={{
        position: "relative",
        width: 12,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: -2,
          top: 5,
          width: 18,
          height: 22,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "var(--accents-blue)",
        }}>{props.text3 ?? "􀆅"}</span>
      </div>
      )}
      {props.showDrillIn && (
      <div style={{
        position: "relative",
        width: 8,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: -2,
          top: 5,
          width: 11,
          height: 22,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 590,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(60,60,67,0.3)",
        }}>{props.text4 ?? "􀆊"}</span>
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: Type=Pop-up
    "type=pop-up": __body0,
    // figma: Type=Button
    "type=button": __body1,
    // figma: Type=Stepper
    "type=stepper": __body2,
    // figma: Type=Picker - Date
    "type=picker - date": __body3,
    // figma: Type=Picker - Time
    "type=picker - time": __body4,
    // figma: Type=Picker - Date and Time
    "type=picker - date and time": __body5,
    // figma: Type=Toggle
    "type=toggle": __body6,
    // figma: Type=Disclosure
    "type=disclosure": __body7,
    // figma: Type=Default
    "type=default": __body8,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default TrailingLight;
