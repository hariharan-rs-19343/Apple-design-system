import { KeysIPhoneLowercaseDark } from './KeysIPhoneLowercaseDark.jsx';
import { KeysIPhoneSpecialDark } from './KeysIPhoneSpecialDark.jsx';
import { KeysIPhoneUppercaseDark } from './KeysIPhoneUppercaseDark.jsx';
import { KeysReturnDark } from './KeysReturnDark.jsx';
import { KeysSpaceDark } from './KeysSpaceDark.jsx';

// figma node: 515:67454 _Keyboard - iPhone Layouts/Dark (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function KeyboardIPhoneLayoutsDark(_p = {}) {
  const props = { ..._p, type: _p.type ?? "letters - lowercase" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 204,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 101,
        top: 162,
        width: 191,
        height: 42,
      }}>
        <KeysSpaceDark
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 191,
            height: 42,
          }}
          config={"default"}
        />
      </div>
      <KeysReturnDark
        style={{
          position: "absolute",
          left: 298,
          top: 162,
          width: 92,
          height: 42,
        }}
        blueColor={"off"}
      />
      <div style={{
          position: "absolute",
          left: 3,
          top: 162,
          width: 92,
          height: 42,
        }}>
        <KeysIPhoneSpecialDark
          style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
          key={"ABC"}
          type={"space"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 62,
        top: 108,
        width: 269,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhoneUppercaseDark key={"."} style2={"default"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhoneUppercaseDark key={","} style2={"default"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhoneUppercaseDark key={"?"} style2={"default"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhoneUppercaseDark key={"!"} style2={"default"} />}</div>
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"’"}
          style2={"default"}
        />
      </div>
      <KeysIPhoneSpecialDark
        style={{
          position: "absolute",
          left: 344,
          top: 108,
          width: 44,
          height: 42,
        }}
        key={"􀆛"}
        type={"delete"}
      />
      <KeysIPhoneSpecialDark
        style={{
          position: "absolute",
          left: 3,
          top: 108,
          width: 44,
          height: 42,
        }}
        key={"􀆞"}
        type={"numbers"}
      />
      <div style={{
        position: "absolute",
        left: 3,
        top: 54,
        width: 387,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"_"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"\\"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"|"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"~"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"<"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={">"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"􁑇"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"􁑂"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"􁑁"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"•"}
          style2={"default"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 3,
        top: 0,
        width: 387,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"["}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"]"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"{"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"}"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"#"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"%"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"^"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"*"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"+"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"="}
          style2={"default"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 204,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 101,
        top: 162,
        width: 191,
        height: 42,
      }}>
        <KeysSpaceDark
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 191,
            height: 42,
          }}
          config={"default"}
        />
      </div>
      <KeysReturnDark
        style={{
          position: "absolute",
          left: 298,
          top: 162,
          width: 92,
          height: 42,
        }}
        blueColor={"off"}
      />
      <div style={{
          position: "absolute",
          left: 3,
          top: 162,
          width: 92,
          height: 42,
        }}>
        <KeysIPhoneSpecialDark
          style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
          key={"ABC"}
          type={"space"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 62,
        top: 108,
        width: 269,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhoneUppercaseDark key={"."} style2={"default"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhoneUppercaseDark key={","} style2={"default"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhoneUppercaseDark key={"?"} style2={"default"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhoneUppercaseDark key={"!"} style2={"default"} />}</div>
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"’"}
          style2={"default"}
        />
      </div>
      <KeysIPhoneSpecialDark
        style={{
          position: "absolute",
          left: 344,
          top: 108,
          width: 44,
          height: 42,
        }}
        key={"􀆛"}
        type={"delete"}
      />
      <KeysIPhoneSpecialDark
        style={{
          position: "absolute",
          left: 3,
          top: 108,
          width: 44,
          height: 42,
        }}
        key={"􀆞"}
        type={"keyboard#"}
      />
      <div style={{
        position: "absolute",
        left: 3,
        top: 54,
        width: 387,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"-"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"/"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={":"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={";"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"("}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={")"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"$"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"&"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"@"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"”"}
          style2={"default"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 3,
        top: 0,
        width: 387,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"1"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"2"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"3"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"4"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"5"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"6"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"7"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"8"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"9"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"0"}
          style2={"default"}
        />
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 204,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 101,
        top: 162,
        width: 191,
        height: 42,
      }}>
        <KeysSpaceDark
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 191,
            height: 42,
          }}
          config={"default"}
        />
      </div>
      <KeysReturnDark
        style={{
          position: "absolute",
          left: 298,
          top: 162,
          width: 92,
          height: 42,
        }}
        blueColor={"off"}
      />
      <div style={{
          position: "absolute",
          left: 3,
          top: 162,
          width: 92,
          height: 42,
        }}>
        <KeysIPhoneSpecialDark
          style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
          key={"123"}
          type={"space"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 62,
        top: 108,
        width: 269,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhoneUppercaseDark key={"Z"} style2={"default"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhoneUppercaseDark key={"X"} style2={"default"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhoneUppercaseDark key={"C"} style2={"default"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhoneUppercaseDark key={"V"} style2={"default"} />}</div>
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"B"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"N"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"M"}
          style2={"default"}
        />
      </div>
      <KeysIPhoneSpecialDark
        style={{
          position: "absolute",
          left: 344,
          top: 108,
          width: 44,
          height: 42,
        }}
        key={"􀆛"}
        type={"delete"}
      />
      <div style={{
          position: "absolute",
          left: 3,
          top: 108,
          width: 44,
          height: 42,
        }}>
        <KeysIPhoneSpecialDark
          style={{ transform: "scale(1.375, 1)", transformOrigin: "0 0" }}
          key={"􀆞"}
          type={"shift (locked)"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 23,
        top: 54,
        width: 347,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"A"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"S"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"D"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"F"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"G"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"H"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"J"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"K"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"L"}
          style2={"default"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 3,
        top: 0,
        width: 387,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"W"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"E"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"R"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"T"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"Y"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"U"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"I"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"O"}
          style2={"default"}
        />
        <KeysIPhoneUppercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"P"}
          style2={"default"}
        />
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 393,
      height: 204,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 101,
        top: 162,
        width: 191,
        height: 42,
      }}>
        <KeysSpaceDark
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 191,
            height: 42,
          }}
          config={"default"}
        />
      </div>
      <KeysReturnDark
        style={{
          position: "absolute",
          left: 298,
          top: 162,
          width: 92,
          height: 42,
        }}
        label={"return"}
        blueColor={"off"}
      />
      <div style={{
          position: "absolute",
          left: 3,
          top: 162,
          width: 92,
          height: 42,
        }}>
        <KeysIPhoneSpecialDark
          style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
          key={"123"}
          type={"space"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 62,
        top: 108,
        width: 269,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhoneLowercaseDark key={"z"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhoneLowercaseDark key={"x"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhoneLowercaseDark key={"c"} />}</div>
        <div style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhoneLowercaseDark key={"v"} />}</div>
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"b"}
        />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"n"}
        />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"m"}
        />
      </div>
      <KeysIPhoneSpecialDark
        style={{
          position: "absolute",
          left: 346,
          top: 108,
          width: 44,
          height: 42,
        }}
        key={"􀆛"}
        type={"delete"}
      />
      <div style={{
          position: "absolute",
          left: 3,
          top: 108,
          width: 44,
          height: 42,
        }}>
        <KeysIPhoneSpecialDark
          style={{ transform: "scale(1.375, 1)", transformOrigin: "0 0" }}
          key={"􀆝"}
          type={"shift"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 23,
        top: 54,
        width: 347,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"a"}
        />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"s"}
        />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"d"}
        />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"f"}
        />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"g"}
        />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"h"}
        />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"j"}
        />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"k"}
        />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"l"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 3,
        top: 0,
        width: 387,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <KeysIPhoneLowercaseDark style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }} />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"w"}
        />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"e"}
        />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"r"}
        />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"t"}
        />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"y"}
        />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"u"}
        />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"i"}
        />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"o"}
        />
        <KeysIPhoneLowercaseDark
          style={{
            position: "relative",
            height: 42,
            flexGrow: 1,
            width: "auto",
          }}
          key={"p"}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: Type=Characters
    "type=characters": __body0,
    // figma: Type=Numbers
    "type=numbers": __body1,
    // figma: Type=Letters - Uppercase
    "type=letters - uppercase": __body2,
    // figma: Type=Letters - Lowercase
    "type=letters - lowercase": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default KeyboardIPhoneLayoutsDark;
