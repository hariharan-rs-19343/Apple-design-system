import { KeysIPadCommand } from './KeysIPadCommand.jsx';
import { KeysIPadLowercase } from './KeysIPadLowercase.jsx';
import { KeysIPadReturn } from './KeysIPadReturn.jsx';

// figma node: 128:80224 _Keyboard - iPad Layouts (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "type=" + __venc(p.type);

export function KeyboardIPadLayouts(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", type: _p.type ?? "lowercase" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1210,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 92,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          mode={"dark"}
          align={"left"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 14,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
          />
        </div>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 105,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀆛"}
          mode={"dark"}
          align={"right"}
        />
      </div>
      <div style={{
        position: "relative",
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 138,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀆡"}
          mode={"dark"}
          align={"left"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 13.5,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
          />
        </div>
        <KeysIPadReturn
          style={{
            position: "relative",
            width: 167,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀅇"}
          mode={"dark"}
          prominent={false}
        />
      </div>
      <div style={{
        position: "relative",
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 182,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀆞"}
          mode={"dark"}
          align={"left"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 13.5,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
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
            mode={"dark"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            punctuationTop={"!"}
            punctuationBottom={","}
            mode={"dark"}
            type={"2 storey punctuation"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"dark"}
            type={"2 storey punctuation"}
          />
        </div>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 125,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀆞"}
          mode={"dark"}
          align={"right"}
        />
      </div>
      <div style={{
        position: "relative",
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 182,
          display: "flex",
          flexDirection: "row",
          gap: 14,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <KeysIPadCommand
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            label={"􀎸"}
            mode={"dark"}
            align={"left"}
          />
          <KeysIPadCommand
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            label={".?123"}
            mode={"dark"}
            align={"left"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <KeysIPadCommand
            style={{
              position: "relative",
              width: 84,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"􀊰"}
            mode={"dark"}
            align={"left"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "0px 13.500px 0px 13.500px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <KeysIPadLowercase
              style={{
                position: "relative",
                flexGrow: 1,
                alignSelf: "stretch",
                width: "auto",
                height: "auto",
              }}
              alt={" "}
              key={" "}
              mode={"dark"}
              type={"2 storey lower"}
            />
          </div>
          <KeysIPadCommand
            style={{
              position: "relative",
              width: 82.25,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={" .?123"}
            mode={"dark"}
            align={"right"}
          />
        </div>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 125,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀓖"}
          mode={"dark"}
          align={"right"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1210,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 92,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          mode={"dark"}
          align={"left"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 14,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
            type={"2 storey lower"}
          />
        </div>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 105,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀆛"}
          mode={"dark"}
          align={"right"}
        />
      </div>
      <div style={{
        position: "relative",
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 138,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀆡"}
          mode={"dark"}
          align={"left"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 13.5,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
            type={"2 storey lower"}
          />
        </div>
        <KeysIPadReturn
          style={{
            position: "relative",
            width: 167,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀅇"}
          mode={"dark"}
          prominent={false}
        />
      </div>
      <div style={{
        position: "relative",
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 182,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀆝"}
          mode={"dark"}
          align={"left"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 13.5,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            mode={"dark"}
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
            punctuationTop={"!"}
            punctuationBottom={","}
            mode={"dark"}
            type={"2 storey punctuation"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"dark"}
            type={"2 storey punctuation"}
          />
        </div>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 125,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀆝"}
          mode={"dark"}
          align={"right"}
        />
      </div>
      <div style={{
        position: "relative",
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 182,
          display: "flex",
          flexDirection: "row",
          gap: 14,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <KeysIPadCommand
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            label={"􀎸"}
            mode={"dark"}
            align={"left"}
          />
          <KeysIPadCommand
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            label={".?123"}
            mode={"dark"}
            align={"left"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <KeysIPadCommand
            style={{
              position: "relative",
              width: 84,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"􀊰"}
            mode={"dark"}
            align={"left"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "0px 13.500px 0px 13.500px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <KeysIPadLowercase
              style={{
                position: "relative",
                flexGrow: 1,
                alignSelf: "stretch",
                width: "auto",
                height: "auto",
              }}
              alt={" "}
              key={" "}
              mode={"dark"}
              type={"2 storey lower"}
            />
          </div>
          <KeysIPadCommand
            style={{
              position: "relative",
              width: 82.25,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={" .?123"}
            mode={"dark"}
            align={"right"}
          />
        </div>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 125,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀓖"}
          mode={"dark"}
          align={"right"}
        />
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 1210,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 92,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀅂"}
          mode={"light"}
          align={"left"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 14,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
        </div>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 105,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀆛"}
          mode={"light"}
          align={"right"}
        />
      </div>
      <div style={{
        position: "relative",
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 138,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀆡"}
          mode={"light"}
          align={"left"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 13.5,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
        </div>
        <KeysIPadReturn
          style={{
            position: "relative",
            width: 167,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀅇"}
          mode={"light"}
          prominent={false}
        />
      </div>
      <div style={{
        position: "relative",
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 182,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀆞"}
          mode={"light"}
          align={"left"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 13.5,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey upper"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey punctuation"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey punctuation"}
          />
        </div>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 125,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀆞"}
          mode={"light"}
          align={"right"}
        />
      </div>
      <div style={{
        position: "relative",
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 182,
          display: "flex",
          flexDirection: "row",
          gap: 14,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <KeysIPadCommand
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            label={"􀎸"}
            mode={"light"}
            align={"left"}
          />
          <KeysIPadCommand
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            label={".?123"}
            mode={"light"}
            align={"left"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <KeysIPadCommand
            style={{
              position: "relative",
              width: 82,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"􀊰"}
            mode={"light"}
            align={"left"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "0px 13.500px 0px 13.500px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <KeysIPadLowercase
              style={{
                position: "relative",
                flexGrow: 1,
                alignSelf: "stretch",
                width: "auto",
                height: "auto",
              }}
              alt={" "}
              key={" "}
              mode={"light"}
              type={"2 storey lower"}
            />
          </div>
          <KeysIPadCommand
            style={{
              position: "relative",
              width: 82.25,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={" .?123"}
            mode={"light"}
            align={"right"}
          />
        </div>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 125,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀓖"}
          mode={"light"}
          align={"right"}
        />
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 1210,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 92,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀅂"}
          mode={"light"}
          align={"left"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 13.75,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            mode={"light"}
            type={"2 storey lower"}
          />
        </div>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 105,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀆛"}
          mode={"light"}
          align={"right"}
        />
      </div>
      <div style={{
        position: "relative",
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 138,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀆡"}
          mode={"light"}
          align={"left"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 13.5,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            mode={"light"}
            type={"2 storey lower"}
          />
        </div>
        <KeysIPadReturn
          style={{
            position: "relative",
            width: 167,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀅇"}
          mode={"light"}
          prominent={false}
        />
      </div>
      <div style={{
        position: "relative",
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 182,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀆝"}
          mode={"light"}
          align={"left"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 13.5,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            mode={"light"}
            type={"2 storey punctuation"}
          />
          <KeysIPadLowercase
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            mode={"light"}
            type={"2 storey punctuation"}
          />
        </div>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 125,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀆝"}
          mode={"light"}
          align={"right"}
        />
      </div>
      <div style={{
        position: "relative",
        height: 74,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 182,
          display: "flex",
          flexDirection: "row",
          gap: 14,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <KeysIPadCommand
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            label={"􀎸"}
            mode={"light"}
            align={"left"}
          />
          <KeysIPadCommand
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            label={".?123"}
            mode={"light"}
            align={"left"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <KeysIPadCommand
            style={{
              position: "relative",
              width: 84,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={"􀊰"}
            mode={"light"}
            align={"left"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "0px 13.500px 0px 13.500px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <KeysIPadLowercase
              style={{
                position: "relative",
                flexGrow: 1,
                alignSelf: "stretch",
                width: "auto",
                height: "auto",
              }}
              alt={" "}
              key={" "}
              mode={"light"}
              type={"2 storey lower"}
            />
          </div>
          <KeysIPadCommand
            style={{
              position: "relative",
              width: 82.25,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            label={" .?123"}
            mode={"light"}
            align={"right"}
          />
        </div>
        <KeysIPadCommand
          style={{
            position: "relative",
            width: 125,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"􀓖"}
          mode={"light"}
          align={"right"}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, Type=Uppercase
    "mode=dark|type=uppercase": __body0,
    // figma: Mode=Dark, Type=Lowercase
    "mode=dark|type=lowercase": __body1,
    // figma: Mode=Light, Type=Uppercase
    "mode=light|type=uppercase": __body2,
    // figma: Mode=Light, Type=Lowercase
    "mode=light|type=lowercase": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default KeyboardIPadLayouts;
