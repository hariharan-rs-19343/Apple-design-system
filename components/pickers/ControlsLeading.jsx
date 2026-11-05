import { ButtonBack } from '../buttons/ButtonBack.jsx';
import { ButtonSymbol } from '../buttons/ButtonSymbol.jsx';
import { ButtonText } from '../buttons/ButtonText.jsx';

// figma node: 58:63224 Controls - Leading (10 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "config=" + __venc(p.config);

export function ControlsLeading(_p = {}) {
  const props = { ..._p, config: _p.config ?? "back" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 73,
      boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
      display: "flex",
      flexDirection: "row",
      padding: "11px 8px 11px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonBack enabled={true} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 174,
      boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 16px 11px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonText emphasized={false} enabled={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ButtonText emphasized={false} enabled={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ButtonText emphasized={false} enabled={true} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 116,
      boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 16px 11px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonText emphasized={false} enabled={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ButtonText emphasized={false} enabled={true} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 58,
      boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 16px 11px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonText emphasized={false} enabled={true} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 246,
      boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 16px 11px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonSymbol enabled={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ButtonSymbol enabled={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ButtonSymbol enabled={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <ButtonSymbol enabled={true} />}</div>
      <ButtonSymbol
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        enabled={true}
      />
      <ButtonSymbol
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        enabled={true}
      />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 205,
      boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 16px 11px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonSymbol enabled={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ButtonSymbol enabled={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ButtonSymbol enabled={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <ButtonSymbol enabled={true} />}</div>
      <ButtonSymbol
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        enabled={true}
      />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 164,
      boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 16px 11px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonSymbol enabled={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ButtonSymbol enabled={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ButtonSymbol enabled={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <ButtonSymbol enabled={true} />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 123,
      boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 16px 11px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonSymbol enabled={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ButtonSymbol enabled={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ButtonSymbol enabled={true} />}</div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 82,
      boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 16px 11px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonSymbol enabled={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ButtonSymbol enabled={true} />}</div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 41,
      boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 16px 11px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonSymbol enabled={true} />}</div>
    </div>
  );
  const __impls = {
    // figma: Config=Back
    "config=back": __body0,
    // figma: Config=Text - 3
    "config=text - 3": __body1,
    // figma: Config=Text - 2
    "config=text - 2": __body2,
    // figma: Config=Text - 1
    "config=text - 1": __body3,
    // figma: Config=Symbols - 6 (iPad only)
    "config=symbols - 6 (ipad only)": __body4,
    // figma: Config=Symbols - 5 (iPad only)
    "config=symbols - 5 (ipad only)": __body5,
    // figma: Config=Symbols - 4 (iPad only)
    "config=symbols - 4 (ipad only)": __body6,
    // figma: Config=Symbols - 3
    "config=symbols - 3": __body7,
    // figma: Config=Symbols - 2
    "config=symbols - 2": __body8,
    // figma: Config=Symbols - 1
    "config=symbols - 1": __body9,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ControlsLeading;
