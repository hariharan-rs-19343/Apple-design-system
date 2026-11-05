import { ButtonSymbol2 } from './ButtonSymbol2.jsx';
import { ButtonText2 } from './ButtonText2.jsx';
import { LiquidGlassRegularSmall } from './LiquidGlassRegularSmall.jsx';

// figma node: 5720:47981 _Button - Bottom (9 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function ButtonBottom(_p = {}) {
  const props = { ..._p, state: _p.state ?? "1 symbol - prominent" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 6px 0px 6px",
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
          width: 69,
          height: 48,
        }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"primary"} style={{ transform: "scale(1.438, 1)", transformOrigin: "0 0" }} />}</div>
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
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 6px 0px 6px",
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
          width: 69,
          height: 48,
        }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} style={{ transform: "scale(1.438, 1)", transformOrigin: "0 0" }} />}</div>
      <div style={{ position: "relative", height: 36, flexShrink: 0 }}>{props.icon2 ?? <ButtonText2 mode={"light"} state={"default"} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 18,
      padding: "0px 10px 0px 10px",
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
          width: 326,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(6.792, 1)", transformOrigin: "0 0" }}
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
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 18,
      padding: "0px 10px 0px 10px",
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
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(5.667, 1)", transformOrigin: "0 0" }}
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
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 18,
      padding: "0px 10px 0px 10px",
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
          width: 218,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(4.542, 1)", transformOrigin: "0 0" }}
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
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 18,
      padding: "0px 10px 0px 10px",
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
          width: 164,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(3.417, 1)", transformOrigin: "0 0" }}
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
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 18,
      padding: "0px 10px 0px 10px",
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
          width: 110,
          height: 48,
        }}>
        <LiquidGlassRegularSmall
          style={{ transform: "scale(2.292, 1)", transformOrigin: "0 0" }}
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
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 18,
      padding: "0px 6px 0px 6px",
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
          width: 48,
          height: 48,
        }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"default"} />}</div>
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
      height: 48,
      borderRadius: 296,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 18,
      padding: "0px 6px 0px 6px",
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
          width: 48,
          height: 48,
        }}>{props.icon1 ?? <LiquidGlassRegularSmall mode={"light"} state={"primary"} />}</div>
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
        }}>{props.text1 ?? "􀓔"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Text - Primary
    "state=text - primary": __body0,
    // figma: State=Text
    "state=text": __body1,
    // figma: State=6 Symbols
    "state=6 symbols": __body2,
    // figma: State=5 Symbols
    "state=5 symbols": __body3,
    // figma: State=4 Symbols
    "state=4 symbols": __body4,
    // figma: State=3 Symbols
    "state=3 symbols": __body5,
    // figma: State=2 Symbols
    "state=2 symbols": __body6,
    // figma: State=1 Symbol
    "state=1 symbol": __body7,
    // figma: State=1 Symbol - Prominent
    "state=1 symbol - prominent": __body8,
  };
  return (__impls[__vkey(props)] ?? __body8)();
}
export default ButtonBottom;
