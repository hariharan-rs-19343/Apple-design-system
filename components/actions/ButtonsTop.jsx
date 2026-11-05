import { ButtonBack2 } from './ButtonBack2.jsx';
import { ButtonSymbol2 } from '../buttons/ButtonSymbol2.jsx';
import { ButtonText2 } from '../buttons/ButtonText2.jsx';
import { LiquidGlassRegularSmall } from '../buttons/LiquidGlassRegularSmall.jsx';

// figma node: 5720:29596 _Buttons - Top (10 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ButtonsTop(_p = {}) {
  const props = { ..._p, type: _p.type ?? "1 symbol - prominent" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      minWidth: 44,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 2px 0px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 84,
          height: 44,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(1.750, 0.917)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <ButtonBack2
        style={{
          position: "relative",
          width: 80,
          height: 36,
          flexShrink: 0,
        }}
        mode={"light"}
        state={"default"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 73,
          height: 44,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(1.521, 0.917)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"primary"}
        />
      </div>
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        padding: "0px 6px 0px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 73,
          height: 44,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(1.521, 0.917)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{ position: "relative", height: 36, flexShrink: 0 }}>{props.icon1 ?? <ButtonText2 mode={"light"} state={"default"} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "0px 6px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 328,
          height: 44,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(6.833, 0.917)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon1 ?? <ButtonSymbol2 mode={"light"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon2 ?? <ButtonSymbol2 mode={"light"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon3 ?? <ButtonSymbol2 mode={"light"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon4 ?? <ButtonSymbol2 mode={"light"} state={"default"} />}</div>
      <ButtonSymbol2
        style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}
        mode={"light"}
        state={"default"}
      />
      <ButtonSymbol2
        style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}
        mode={"light"}
        state={"default"}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "0px 6px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 272,
          height: 44,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(5.667, 0.917)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon1 ?? <ButtonSymbol2 mode={"light"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon2 ?? <ButtonSymbol2 mode={"light"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon3 ?? <ButtonSymbol2 mode={"light"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon4 ?? <ButtonSymbol2 mode={"light"} state={"default"} />}</div>
      <ButtonSymbol2
        style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}
        mode={"light"}
        state={"default"}
      />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "0px 6px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 216,
          height: 44,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(4.500, 0.917)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon1 ?? <ButtonSymbol2 mode={"light"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon2 ?? <ButtonSymbol2 mode={"light"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon3 ?? <ButtonSymbol2 mode={"light"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon4 ?? <ButtonSymbol2 mode={"light"} state={"default"} />}</div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "0px 6px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 160,
          height: 44,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.333, 0.917)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon1 ?? <ButtonSymbol2 mode={"light"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon2 ?? <ButtonSymbol2 mode={"light"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon3 ?? <ButtonSymbol2 mode={"light"} state={"default"} />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "0px 6px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 104,
          height: 44,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(2.167, 0.917)", transformOrigin: "0 0" }}
          mode={"light"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon1 ?? <ButtonSymbol2 mode={"light"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon2 ?? <ButtonSymbol2 mode={"light"} state={"default"} />}</div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "0px 4px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 44,
          height: 44,
        }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} style={{ transform: "scale(0.917, 0.917)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "relative",
          width: 36,
          height: 36,
          flexShrink: 0,
        }}>{props.icon2 ?? <ButtonSymbol2 mode={"light"} state={"default"} />}</div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "0px 4px 0px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 44,
          height: 44,
        }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"primary"} style={{ transform: "scale(0.917, 0.917)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        width: 36,
        height: 36,
        borderRadius: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>􀓔</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Type=Back
    "type=back": __body0,
    // figma: Type=Text - Primary
    "type=text - primary": __body1,
    // figma: Type=Text
    "type=text": __body2,
    // figma: Type=6 Symbols
    "type=6 symbols": __body3,
    // figma: Type=5 Symbols
    "type=5 symbols": __body4,
    // figma: Type=4 Symbols
    "type=4 symbols": __body5,
    // figma: Type=3 Symbols
    "type=3 symbols": __body6,
    // figma: Type=2 Symbols
    "type=2 symbols": __body7,
    // figma: Type=1 Symbol
    "type=1 symbol": __body8,
    // figma: Type=1 Symbol - Prominent
    "type=1 symbol - prominent": __body9,
  };
  return (__impls[__vkey(props)] ?? __body9)();
}
export default ButtonsTop;
