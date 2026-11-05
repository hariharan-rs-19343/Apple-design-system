import { KeysIPadLowercase } from '../keyboards/KeysIPadLowercase.jsx';
import { KeysIPadLowercaseDefaultVibrant } from './KeysIPadLowercaseDefaultVibrant.jsx';
import { KeysIPadLowercaseSpaceComma } from './KeysIPadLowercaseSpaceComma.jsx';
import { KeysIPadSpecialVibrantLeft } from './KeysIPadSpecialVibrantLeft.jsx';
import { KeysIPadSpecialVibrantLeft3 } from './KeysIPadSpecialVibrantLeft3.jsx';
import { KeysIPadSpecialVibrantRight } from './KeysIPadSpecialVibrantRight.jsx';
import { KeysIPadSpecialVibrantRight3 } from './KeysIPadSpecialVibrantRight3.jsx';

// figma node: 515:64405 _Keyboard - iPad Layouts/Lowercase/Vibrant
export function KeyboardIPadLayoutsLowercaseVibrant(_p = {}) {
  const props = _p;
  return (
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
        height: 74,
        display: "flex",
        flexDirection: "column",
        padding: "0px 14px 0px 14px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialVibrantRight style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            height: "auto",
            width: "auto",
          }} />
      </div>
      <div style={{
        position: "absolute",
        left: 195,
        top: 258,
        width: 835,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        flexWrap: "nowrap",
      }}>
        <KeysIPadSpecialVibrantLeft style={{
            position: "relative",
            width: 78,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "0px 14px 0px 14px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <KeysIPadLowercaseDefaultVibrant
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            alt={" "}
            key={" "}
          />
        </div>
        <KeysIPadSpecialVibrantRight3
          style={{
            position: "relative",
            width: 78,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={" .?123"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 258,
        width: 193,
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        padding: "0px 14px 0px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialVibrantLeft3 style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }} />
        <KeysIPadSpecialVibrantLeft3
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          label={".?123"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 1031,
        top: 171,
        width: 135,
        height: 74,
        display: "flex",
        flexDirection: "row",
        padding: "0px 14px 0px 14px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialVibrantLeft3
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          label={"shift"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 193,
        top: 171,
        width: 838,
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"%"}
          key={"z"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"-"}
          key={"x"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"+"}
          key={"c"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"="}
          key={"v"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"/"}
          key={"b"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={";"}
          key={"n"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={":"}
          key={"m"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercaseSpaceComma
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"!"}
          key={","}
        />
        <KeysIPadLowercaseSpaceComma
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"?"}
          key={"."}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 171,
        width: 193,
        height: 74,
        display: "flex",
        flexDirection: "row",
        padding: "0px 14px 0px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialVibrantLeft3
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          label={"shift"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 150,
        top: 85,
        width: 837,
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"@"}
          key={"a"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"#"}
          key={"s"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"$"}
          key={"d"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"&"}
          key={"f"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"*"}
          key={"g"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"("}
          key={"h"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={")"}
          key={"j"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"’"}
          key={"k"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"”"}
          key={"l"}
          mode={"light"}
          type={"2 storey lower"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 86,
        width: 150,
        height: 74,
        display: "flex",
        flexDirection: "row",
        padding: "0px 14px 0px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialVibrantLeft3
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          label={"caps lock"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 1050,
        top: 0,
        width: 116,
        height: 74,
        display: "flex",
        flexDirection: "row",
        padding: "0px 14px 0px 14px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialVibrantRight3
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          label={"delete"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 117,
        top: 0,
        width: 933,
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"2"}
          key={"w"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"3"}
          key={"e"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"4"}
          key={"r"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"5"}
          key={"t"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"6"}
          key={"y"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"7"}
          key={"u"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"8"}
          key={"i"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"9"}
          key={"o"}
          mode={"light"}
          type={"2 storey lower"}
        />
        <KeysIPadLowercase
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          alt={"0"}
          key={"p"}
          mode={"light"}
          type={"2 storey lower"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 116,
        height: 74,
        display: "flex",
        flexDirection: "row",
        padding: "0px 13px 0px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <KeysIPadSpecialVibrantLeft3
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          label={"tab"}
        />
      </div>
    </div>
  );
}
export default KeyboardIPadLayoutsLowercaseVibrant;
