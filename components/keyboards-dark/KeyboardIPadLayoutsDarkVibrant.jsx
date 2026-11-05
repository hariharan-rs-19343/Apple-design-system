import { KeysIPadLowercaseDarkVibrant } from './KeysIPadLowercaseDarkVibrant.jsx';
import { KeysIPadSpecialDarkVibrant } from './KeysIPadSpecialDarkVibrant.jsx';
import { KeysIPadUppercaseDarkVibrant } from './KeysIPadUppercaseDarkVibrant.jsx';

// figma node: 515:65454 _Keyboard - iPad Layouts/Dark - Vibrant (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function KeyboardIPadLayoutsDarkVibrant(_p = {}) {
  const props = { ..._p, type: _p.type ?? "letters - lowercase" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1166,
      height: 332,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1030,
        top: 258,
        width: 136,
        display: "flex",
        flexDirection: "row",
        padding: "0px 14px 0px 14px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          align={"right"}
          type={"keyboard close"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 193,
        top: 258,
        width: 838,
        height: 74,
      }}>
        <div style={{
            position: "absolute",
            left: 741,
            top: 35,
            width: 72,
          }}>{props.icon1 ?? <KeysIPadSpecialDarkVibrant label={" .?123"} align={"right"} type={"text"} />}</div>
        <div style={{
          position: "absolute",
          left: 81,
          top: 0,
          width: 635,
          display: "flex",
          flexDirection: "row",
          padding: "0px 14px 0px 14px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <KeysIPadLowercaseDarkVibrant
            style={{
              position: "relative",
              height: 74,
              flexGrow: 1,
              width: "auto",
            }}
            alt={" "}
            key={" "}
            type={"space|comma|period"}
          />
        </div>
        <div style={{ position: "absolute", left: 21.5, top: 33 }}>{props.icon2 ?? <KeysIPadSpecialDarkVibrant align={"left"} type={"dictation"} />}</div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 291,
        width: 193,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        padding: "0px 14px 0px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialDarkVibrant
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          align={"left"}
          type={"emoji"}
        />
        <KeysIPadSpecialDarkVibrant
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label={".?123"}
          align={"left"}
          type={"text"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 1031,
        top: 207,
        width: 135,
        display: "flex",
        flexDirection: "row",
        padding: "0px 14px 0px 14px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialDarkVibrant
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label={"shift"}
          align={"right"}
          type={"text"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 193,
        top: 172,
        width: 838,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"%"}
          key={"z"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"-"}
          key={"x"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"+"}
          key={"c"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"="}
          key={"v"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"/"}
          key={"b"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={";"}
          key={"n"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={":"}
          key={"m"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"!"}
          key={","}
          type={"space|comma|period"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"?"}
          key={"."}
          type={"space|comma|period"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 207,
        width: 193,
        display: "flex",
        flexDirection: "row",
        padding: "0px 14px 0px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialDarkVibrant
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label={"shift"}
          align={"left"}
          type={"text"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 150,
        top: 86,
        width: 837,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"@"}
          key={"a"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"#"}
          key={"s"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"$"}
          key={"d"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"&"}
          key={"f"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"*"}
          key={"g"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"("}
          key={"h"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={")"}
          key={"j"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"'"}
          key={"k"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"\""}
          key={"l"}
          type={"default"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 121,
        width: 150,
        display: "flex",
        flexDirection: "row",
        padding: "0px 14px 0px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialDarkVibrant
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label={"caps lock"}
          align={"left"}
          type={"text"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 1050,
        top: 35,
        width: 116,
        display: "flex",
        flexDirection: "row",
        padding: "0px 14px 0px 14px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialDarkVibrant
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label={"delete"}
          align={"right"}
          type={"text"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 117,
        top: 0,
        width: 933,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"2"}
          key={"w"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"3"}
          key={"e"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"4"}
          key={"r"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"5"}
          key={"t"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"6"}
          key={"y"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"7"}
          key={"u"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"8"}
          key={"i"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"9"}
          key={"o"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"0"}
          key={"p"}
          type={"default"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 35,
        width: 118,
        display: "flex",
        flexDirection: "row",
        padding: "0px 13px 0px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialDarkVibrant
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label={"tab"}
          align={"left"}
          type={"text"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1166,
      height: 332,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1030,
        top: 258,
        width: 136,
        display: "flex",
        flexDirection: "column",
        padding: "0px 14px 0px 14px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          align={"right"}
          type={"keyboard close"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 193,
        top: 258,
        width: 838,
        height: 74,
      }}>
        <div style={{
            position: "absolute",
            left: 741,
            top: 35,
            width: 72,
          }}>{props.icon1 ?? <KeysIPadSpecialDarkVibrant label={" .?123"} align={"right"} type={"text"} />}</div>
        <div style={{
          position: "absolute",
          left: 81,
          top: 0,
          width: 635,
          display: "flex",
          flexDirection: "row",
          padding: "0px 14px 0px 14px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <KeysIPadLowercaseDarkVibrant
            style={{
              position: "relative",
              height: 74,
              flexGrow: 1,
              width: "auto",
            }}
            alt={" "}
            key={" "}
            type={"space|comma|period"}
          />
        </div>
        <div style={{ position: "absolute", left: 21.5, top: 33 }}>{props.icon2 ?? <KeysIPadSpecialDarkVibrant align={"left"} type={"dictation"} />}</div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 291,
        width: 193,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        padding: "0px 14px 0px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialDarkVibrant
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          align={"left"}
          type={"emoji"}
        />
        <KeysIPadSpecialDarkVibrant
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label={".?123"}
          align={"left"}
          type={"text"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 1031,
        top: 207,
        width: 135,
        display: "flex",
        flexDirection: "row",
        padding: "0px 14px 0px 14px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialDarkVibrant
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label={"shift"}
          align={"right"}
          type={"text (selected)"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 193,
        top: 172,
        width: 838,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"%"}
          key={"z"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"-"}
          key={"x"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"+"}
          key={"c"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"="}
          key={"v"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"/"}
          key={"b"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={";"}
          key={"n"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={":"}
          key={"m"}
          type={"default"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"!"}
          key={","}
          type={"space|comma|period"}
        />
        <KeysIPadLowercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"?"}
          key={"."}
          type={"space|comma|period"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 207,
        width: 193,
        display: "flex",
        flexDirection: "row",
        padding: "0px 14px 0px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialDarkVibrant
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label={"shift"}
          align={"left"}
          type={"text (selected)"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 150,
        top: 86,
        width: 837,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"@"}
          key={"a"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"#"}
          key={"s"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"$"}
          key={"d"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"&"}
          key={"f"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"*"}
          key={"g"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"("}
          key={"h"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={")"}
          key={"j"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"'"}
          key={"k"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"\""}
          key={"l"}
          type={"default"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 121,
        width: 150,
        display: "flex",
        flexDirection: "row",
        padding: "0px 14px 0px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialDarkVibrant
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label={"caps lock"}
          align={"left"}
          type={"text"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 1050,
        top: 35,
        width: 116,
        display: "flex",
        flexDirection: "row",
        padding: "0px 14px 0px 14px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialDarkVibrant
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label={"delete"}
          align={"right"}
          type={"text"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 117,
        top: 0,
        width: 933,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"2"}
          key={"w"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"3"}
          key={"e"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"4"}
          key={"r"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"5"}
          key={"t"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"6"}
          key={"y"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"7"}
          key={"u"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"8"}
          key={"i"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"9"}
          key={"o"}
          type={"default"}
        />
        <KeysIPadUppercaseDarkVibrant
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          alt={"0"}
          key={"p"}
          type={"default"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 35,
        width: 118,
        display: "flex",
        flexDirection: "row",
        padding: "0px 13px 0px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialDarkVibrant
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label={"tab"}
          align={"left"}
          type={"text"}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: Type=Letters - Lowercase
    "type=letters - lowercase": __body0,
    // figma: Type=Letters - Uppercase
    "type=letters - uppercase": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default KeyboardIPadLayoutsDarkVibrant;
