import { KeysIPhone } from './KeysIPhone.jsx';
import { KeysIPhoneSpace } from './KeysIPhoneSpace.jsx';

// figma node: 118:55120 _Keyboard - iPhone Layouts (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "type=" + __venc(p.type);

export function KeyboardIPhoneLayouts(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", type: _p.type ?? "letters - lowercase" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 11,
      padding: "0px 6.670px 0px 6.670px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhone letter={"["} mode={"dark"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhone letter={"]"} mode={"dark"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhone letter={"{"} mode={"dark"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhone letter={"}"} mode={"dark"} type={"uppercase"} />}</div>
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          punctuation={"#"}
          mode={"dark"}
          type={"punctuation"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"%"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"^"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          punctuation={"*"}
          letter={"*"}
          mode={"dark"}
          type={"punctuation"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"+"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"="}
          mode={"dark"}
          type={"uppercase"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          mode={"dark"}
          type={"special charaters (not capitalized)"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"\\"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"|"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"~"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"<"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={">"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"€"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"£"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"¥"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 45,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"·"}
          mode={"dark"}
          type={"uppercase"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 13,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 46,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(1.438, 1)", transformOrigin: "0 0" }}
            mode={"dark"}
            type={"123"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"."}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={","}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"?"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"!"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"‘"}
            mode={"dark"}
            type={"uppercase"}
          />
        </div>
        <div style={{
            position: "relative",
            width: 46,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(1.438, 1)", transformOrigin: "0 0" }}
            letter={"􁂈"}
            mode={"dark"}
            type={"delete"}
          />
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 92,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
            mode={"dark"}
            type={"abc"}
          />
        </div>
        <KeysIPhoneSpace
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          mode={"dark"}
          config={"default"}
        />
        <div style={{
            position: "relative",
            width: 92,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
            mode={"dark"}
            type={"return-prominent"}
          />
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 11,
      padding: "0px 6.670px 0px 6.670px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhone letter={"1"} mode={"dark"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhone letter={"2"} mode={"dark"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhone letter={"3"} mode={"dark"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhone letter={"4"} mode={"dark"} type={"uppercase"} />}</div>
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"5"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"6"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"7"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"8"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"9"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"0"}
          mode={"dark"}
          type={"uppercase"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"-"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"/"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          character={":"}
          mode={"dark"}
          type={"special charaters (not capitalized)"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={";"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"("}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={")"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"$"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"&"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"@"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 45,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"“"}
          mode={"dark"}
          type={"uppercase"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 13,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 46,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(1.438, 1)", transformOrigin: "0 0" }}
            mode={"dark"}
            type={"#+"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"."}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={","}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"?"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"!"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"‘"}
            mode={"dark"}
            type={"uppercase"}
          />
        </div>
        <div style={{
            position: "relative",
            width: 46,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(1.438, 1)", transformOrigin: "0 0" }}
            letter={"􁂈"}
            mode={"dark"}
            type={"delete"}
          />
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 92,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
            mode={"dark"}
            type={"abc"}
          />
        </div>
        <KeysIPhoneSpace
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          mode={"dark"}
          config={"default"}
        />
        <div style={{
            position: "relative",
            width: 92,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
            mode={"dark"}
            type={"return-prominent"}
          />
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 11,
      padding: "0px 6.670px 0px 6.670px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhone mode={"dark"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhone letter={"W"} mode={"dark"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhone letter={"E"} mode={"dark"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhone letter={"R"} mode={"dark"} type={"uppercase"} />}</div>
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"T"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"Y"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"U"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"I"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"O"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"P"}
          mode={"dark"}
          type={"uppercase"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "0px 20px 0px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"A"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"S"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"D"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"F"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"G"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"H"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"J"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"K"}
          mode={"dark"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"L"}
          mode={"dark"}
          type={"uppercase"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 14.25,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 45,
            height: 45,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(1.406, 1.047)", transformOrigin: "0 0" }}
            letter={"􀆞"}
            mode={"dark"}
            type={"shift"}
          />
        </div>
        <div style={{
          position: "relative",
          height: 45,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"Z"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"X"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"C"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"V"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"B"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"N"}
            mode={"dark"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"M"}
            mode={"dark"}
            type={"uppercase"}
          />
        </div>
        <div style={{
            position: "relative",
            width: 45,
            height: 45,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(1.406, 1.047)", transformOrigin: "0 0" }}
            letter={"􁂈"}
            mode={"dark"}
            type={"delete"}
          />
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 92,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
            mode={"dark"}
            type={"abc"}
          />
        </div>
        <KeysIPhoneSpace
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          mode={"dark"}
          config={"default"}
        />
        <div style={{
            position: "relative",
            width: 92,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
            mode={"dark"}
            type={"return-prominent"}
          />
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 11,
      padding: "0px 6.670px 0px 6.670px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhone mode={"dark"} type={"lowercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhone letter={"w"} mode={"dark"} type={"lowercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhone letter={"e"} mode={"dark"} type={"lowercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhone letter={"r"} mode={"dark"} type={"lowercase"} />}</div>
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"t"}
          mode={"dark"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"y"}
          mode={"dark"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"u"}
          mode={"dark"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"i"}
          mode={"dark"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"o"}
          mode={"dark"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"p"}
          mode={"dark"}
          type={"lowercase"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "0px 20px 0px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"a"}
          mode={"dark"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"s"}
          mode={"dark"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"d"}
          mode={"dark"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"f"}
          mode={"dark"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"g"}
          mode={"dark"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"h"}
          mode={"dark"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"j"}
          mode={"dark"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"k"}
          mode={"dark"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"l"}
          mode={"dark"}
          type={"lowercase"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 14.25,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 45,
            height: 45,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(1.406, 1.047)", transformOrigin: "0 0" }}
            letter={"􀆝"}
            mode={"dark"}
            type={"shift"}
          />
        </div>
        <div style={{
          position: "relative",
          height: 45,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"z"}
            mode={"dark"}
            type={"lowercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"x"}
            mode={"dark"}
            type={"lowercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"c"}
            mode={"dark"}
            type={"lowercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"v"}
            mode={"dark"}
            type={"lowercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"b"}
            mode={"dark"}
            type={"lowercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"n"}
            mode={"dark"}
            type={"lowercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"m"}
            mode={"dark"}
            type={"lowercase"}
          />
        </div>
        <div style={{
            position: "relative",
            width: 45,
            height: 45,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(1.406, 1.047)", transformOrigin: "0 0" }}
            letter={"􁂈"}
            mode={"dark"}
            type={"delete"}
          />
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 92,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
            mode={"dark"}
            type={"abc"}
          />
        </div>
        <KeysIPhoneSpace
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          mode={"dark"}
          config={"default"}
        />
        <div style={{
            position: "relative",
            width: 92,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
            mode={"dark"}
            type={"return-prominent"}
          />
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 11,
      padding: "0px 6.670px 0px 6.670px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhone letter={"["} mode={"light"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhone letter={"]"} mode={"light"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhone letter={"{"} mode={"light"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhone letter={"}"} mode={"light"} type={"uppercase"} />}</div>
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          punctuation={"#"}
          mode={"light"}
          type={"punctuation"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"%"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"^"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"*"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"+"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"="}
          mode={"light"}
          type={"uppercase"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          mode={"light"}
          type={"special charaters (not capitalized)"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"\\"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"|"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"~"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"<"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={">"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"€"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"£"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"¥"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 45,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"·"}
          mode={"light"}
          type={"uppercase"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 13,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 46,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(1.438, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            type={"123"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"."}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={","}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"?"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"!"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"‘"}
            mode={"light"}
            type={"uppercase"}
          />
        </div>
        <div style={{
            position: "relative",
            width: 46,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(1.438, 1)", transformOrigin: "0 0" }}
            letter={"􁂈"}
            mode={"light"}
            type={"delete"}
          />
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 92,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            type={"abc"}
          />
        </div>
        <KeysIPhoneSpace
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          mode={"light"}
          config={"default"}
        />
        <div style={{
            position: "relative",
            width: 92,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            type={"return-prominent"}
          />
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 11,
      padding: "0px 6.670px 0px 6.670px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhone letter={"1"} mode={"light"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhone letter={"2"} mode={"light"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhone letter={"3"} mode={"light"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhone letter={"4"} mode={"light"} type={"uppercase"} />}</div>
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"5"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"6"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"7"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"8"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"9"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"0"}
          mode={"light"}
          type={"uppercase"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"-"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"/"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          character={":"}
          mode={"light"}
          type={"special charaters (not capitalized)"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={";"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"("}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={")"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"$"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"&"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"@"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 45,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"“"}
          mode={"light"}
          type={"uppercase"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 13,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 46,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(1.438, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            type={"#+"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"."}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={","}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"?"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"!"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              height: 43,
              flexGrow: 1,
              width: "auto",
            }}
            letter={"‘"}
            mode={"light"}
            type={"uppercase"}
          />
        </div>
        <div style={{
            position: "relative",
            width: 46,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(1.438, 1)", transformOrigin: "0 0" }}
            letter={"􁂈"}
            mode={"light"}
            type={"delete"}
          />
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 92,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            type={"abc"}
          />
        </div>
        <div style={{
          position: "relative",
          height: 43,
          borderRadius: 8.5,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <svg viewBox="0 0 192.660 43" fill="none" style={{
            position: "relative",
            borderRadius: 8.5,
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <path d={"M 0 13.6 C 0 8.84 0 6.459 0.926 4.641 C 1.741 3.042 3.042 1.741 4.641 0.926 C 6.459 0 8.84 0 13.6 0 L 185.4 0 C 190.16 0 192.541 0 194.359 0.926 C 195.958 1.741 197.259 3.042 198.074 4.641 C 199 6.459 199 8.84 199 13.6 L 199 29.4 C 199 34.16 199 36.541 198.074 38.359 C 197.259 39.958 195.958 41.259 194.359 42.074 C 192.541 43 190.16 43 185.4 43 L 13.6 43 C 8.84 43 6.459 43 4.641 42.074 C 3.042 41.259 1.741 39.958 0.926 38.359 C 0 36.541 0 34.16 0 29.4 L 0 13.6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
            position: "relative",
            width: 92,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            type={"return-prominent"}
          />
        </div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 11,
      padding: "0px 6.670px 0px 6.670px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhone letter={"q"} mode={"light"} type={"lowercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhone letter={"w"} mode={"light"} type={"lowercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhone letter={"e"} mode={"light"} type={"lowercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhone letter={"r"} mode={"light"} type={"lowercase"} />}</div>
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"t"}
          mode={"light"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"y"}
          mode={"light"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"u"}
          mode={"light"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"i"}
          mode={"light"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"o"}
          mode={"light"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"p"}
          mode={"light"}
          type={"lowercase"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "0px 20px 0px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"a"}
          mode={"light"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"s"}
          mode={"light"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"d"}
          mode={"light"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"f"}
          mode={"light"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"g"}
          mode={"light"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"h"}
          mode={"light"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"j"}
          mode={"light"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"k"}
          mode={"light"}
          type={"lowercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"l"}
          mode={"light"}
          type={"lowercase"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 14.25,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 45,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(1.406, 1)", transformOrigin: "0 0" }}
            letter={"􀆝"}
            mode={"light"}
            type={"shift"}
          />
        </div>
        <div style={{
          position: "relative",
          height: 45,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"z"}
            mode={"light"}
            type={"lowercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"x"}
            mode={"light"}
            type={"lowercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"c"}
            mode={"light"}
            type={"lowercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"v"}
            mode={"light"}
            type={"lowercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"b"}
            mode={"light"}
            type={"lowercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"n"}
            mode={"light"}
            type={"lowercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"m"}
            mode={"light"}
            type={"lowercase"}
          />
        </div>
        <div style={{
            position: "relative",
            width: 45,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(1.406, 1)", transformOrigin: "0 0" }}
            letter={"􁂈"}
            mode={"light"}
            type={"delete"}
          />
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 92,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            type={"abc"}
          />
        </div>
        <KeysIPhoneSpace
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          mode={"light"}
          config={"default"}
        />
        <div style={{
            position: "relative",
            width: 92,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            type={"return-prominent"}
          />
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 11,
      padding: "0px 6.670px 0px 6.670px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon1 ?? <KeysIPhone mode={"light"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon2 ?? <KeysIPhone letter={"W"} mode={"light"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon3 ?? <KeysIPhone letter={"E"} mode={"light"} type={"uppercase"} />}</div>
        <div style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}>{props.icon4 ?? <KeysIPhone letter={"R"} mode={"light"} type={"uppercase"} />}</div>
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"T"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"Y"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"U"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"I"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"O"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"P"}
          mode={"light"}
          type={"uppercase"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "0px 20px 0px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"A"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"S"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"D"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"F"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"G"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"H"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"J"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"K"}
          mode={"light"}
          type={"uppercase"}
        />
        <KeysIPhone
          style={{
            position: "relative",
            height: 43,
            flexGrow: 1,
            width: "auto",
          }}
          letter={"L"}
          mode={"light"}
          type={"uppercase"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 14.25,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 45,
            height: 45,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(1.406, 1.047)", transformOrigin: "0 0" }}
            letter={"􀆞"}
            mode={"light"}
            type={"shift"}
          />
        </div>
        <div style={{
          position: "relative",
          height: 45,
          display: "flex",
          flexDirection: "row",
          gap: 6,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"Z"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"X"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"C"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"V"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"B"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"N"}
            mode={"light"}
            type={"uppercase"}
          />
          <KeysIPhone
            style={{
              position: "relative",
              flexGrow: 1,
              alignSelf: "stretch",
              width: "auto",
              height: "auto",
            }}
            letter={"M"}
            mode={"light"}
            type={"uppercase"}
          />
        </div>
        <div style={{
            position: "relative",
            width: 45,
            height: 45,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(1.406, 1.047)", transformOrigin: "0 0" }}
            letter={"􁂈"}
            mode={"light"}
            type={"delete"}
          />
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 92,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            type={"abc"}
          />
        </div>
        <KeysIPhoneSpace
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          mode={"light"}
          config={"default"}
        />
        <div style={{
            position: "relative",
            width: 92,
            height: 43,
            flexShrink: 0,
          }}>
          <KeysIPhone
            style={{ transform: "scale(2.875, 1)", transformOrigin: "0 0" }}
            mode={"light"}
            type={"return-prominent"}
          />
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, Type=Characters
    "mode=dark|type=characters": __body0,
    // figma: Mode=Dark, Type=Numbers
    "mode=dark|type=numbers": __body1,
    // figma: Mode=Dark, Type=Letters - Uppercase
    "mode=dark|type=letters - uppercase": __body2,
    // figma: Mode=Dark, Type=Letters - Lowercase
    "mode=dark|type=letters - lowercase": __body3,
    // figma: Mode= Light, Type=Characters
    "mode=light|type=characters": __body4,
    // figma: Mode= Light, Type=Numbers
    "mode=light|type=numbers": __body5,
    // figma: Mode= Light, Type=Letters - Lowercase
    "mode=light|type=letters - lowercase": __body6,
    // figma: Mode= Light, Type=Letters - Uppercase
    "mode=light|type=letters - uppercase": __body7,
  };
  return (__impls[__vkey(props)] ?? __body6)();
}
export default KeyboardIPhoneLayouts;
