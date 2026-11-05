import { KeysIPadLowercaseDark } from './KeysIPadLowercaseDark.jsx';
import { KeysIPadSpecialDark } from './KeysIPadSpecialDark.jsx';
import { KeysIPadUppercaseDark } from './KeysIPadUppercaseDark.jsx';

// figma node: 515:65967 _Keyboard - iPad Layouts/Dark (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function KeyboardIPadLayoutsDark(_p = {}) {
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
        top: 283,
        width: 136,
        display: "flex",
        flexDirection: "row",
        padding: "0px 14px 0px 14px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialDark
          style={{
            position: "relative",
            height: 49,
            flexGrow: 1,
            width: "auto",
          }}
          align={"left"}
          type={"text"}
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
            height: 39,
          }}>{props.icon1 ?? <KeysIPadSpecialDark label={" .?123"} />}</div>
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
          <KeysIPadLowercaseDark
            style={{
              position: "relative",
              height: 74,
              flexGrow: 1,
              width: "auto",
            }}
            alt={" "}
            key={" "}
            type={"default"}
          />
        </div>
        <div style={{
            position: "absolute",
            left: 21.5,
            top: 33,
            width: 38,
            height: 41,
          }}>{props.icon2 ?? <KeysIPadSpecialDark />}</div>
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
        <KeysIPadSpecialDark style={{
            position: "relative",
            height: 41,
            flexGrow: 1,
            width: "auto",
          }} />
        <KeysIPadSpecialDark
          style={{
            position: "relative",
            height: 39,
            flexGrow: 1,
            width: "auto",
          }}
          label={".?123"}
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
        <KeysIPadSpecialDark
          style={{
            position: "relative",
            height: 39,
            flexGrow: 1,
            width: "auto",
          }}
          label={"shift"}
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadSpecialDark
          style={{
            position: "relative",
            height: 39,
            flexGrow: 1,
            width: "auto",
          }}
          label={"shift"}
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadSpecialDark
          style={{
            position: "relative",
            height: 39,
            flexGrow: 1,
            width: "auto",
          }}
          label={"caps lock"}
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
        <KeysIPadSpecialDark
          style={{
            position: "relative",
            height: 39,
            flexGrow: 1,
            width: "auto",
          }}
          label={"delete"}
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
        <KeysIPadLowercaseDark
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          type={"default"}
        />
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadSpecialDark
          style={{
            position: "relative",
            height: 39,
            flexGrow: 1,
            width: "auto",
          }}
          label={"tab"}
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
        top: 283,
        width: 136,
        display: "flex",
        flexDirection: "column",
        padding: "0px 14px 0px 14px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialDark
          style={{
            position: "relative",
            height: 49,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          align={"left"}
          type={"text"}
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
            height: 39,
          }}>{props.icon1 ?? <KeysIPadSpecialDark label={" .?123"} />}</div>
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
          <KeysIPadLowercaseDark
            style={{
              position: "relative",
              height: 74,
              flexGrow: 1,
              width: "auto",
            }}
            alt={" "}
            key={" "}
            type={"default"}
          />
        </div>
        <div style={{
            position: "absolute",
            left: 21.5,
            top: 33,
            width: 38,
            height: 41,
          }}>{props.icon2 ?? <KeysIPadSpecialDark />}</div>
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
        <KeysIPadSpecialDark style={{
            position: "relative",
            height: 41,
            flexGrow: 1,
            width: "auto",
          }} />
        <KeysIPadSpecialDark
          style={{
            position: "relative",
            height: 39,
            flexGrow: 1,
            width: "auto",
          }}
          label={".?123"}
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
        <KeysIPadSpecialDark
          style={{
            position: "relative",
            height: 39,
            flexGrow: 1,
            width: "auto",
          }}
          label={"shift"}
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadLowercaseDark
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
        <KeysIPadSpecialDark
          style={{
            position: "relative",
            height: 39,
            flexGrow: 1,
            width: "auto",
          }}
          label={"shift"}
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadSpecialDark
          style={{
            position: "relative",
            height: 39,
            flexGrow: 1,
            width: "auto",
          }}
          label={"caps lock"}
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
        <KeysIPadSpecialDark
          style={{
            position: "relative",
            height: 39,
            flexGrow: 1,
            width: "auto",
          }}
          label={"delete"}
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
        <KeysIPadUppercaseDark
          style={{
            position: "relative",
            height: 74,
            flexGrow: 1,
            width: "auto",
          }}
          type={"default"}
        />
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadUppercaseDark
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
        <KeysIPadSpecialDark
          style={{
            position: "relative",
            height: 39,
            flexGrow: 1,
            width: "auto",
          }}
          label={"tab"}
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
export default KeyboardIPadLayoutsDark;
