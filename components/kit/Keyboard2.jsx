import { AccessoryBarIPad } from '../accessory-bars/AccessoryBarIPad.jsx';
import { Autocorrection } from '../accessory-bars/Autocorrection.jsx';
import { BackgroundIPad } from '../backgrounds/BackgroundIPad.jsx';
import { KeyboardIPadLayouts } from '../keyboards/KeyboardIPadLayouts.jsx';

// figma node: 128:78692 Keyboard (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function Keyboard2(_p = {}) {
  const props = { ..._p, type: _p.type ?? "default", showBar: _p.showBar ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1210,
      overflow: "hidden",
      borderRadius: 27,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "6px 13.500px 30px 13.500px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <BackgroundIPad
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 428,
        }}
        mode={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 146,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showBar && (
        <div style={{
          position: "relative",
          width: 644,
          height: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <Autocorrection
            style={{
              position: "relative",
              height: 28,
              flexGrow: 1,
              width: "auto",
            }}
            option1={"“THE”"}
            option2={"THE"}
            option3={"TO"}
            mode={"light"}
          />
        </div>
        )}
        <AccessoryBarIPad
          style={{ position: "absolute", left: 0, top: 8 }}
          mode={"light"}
        />
      </div>
      <KeyboardIPadLayouts
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
        type={"lowercase"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1210,
      overflow: "hidden",
      borderRadius: 27,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "6px 13.500px 30px 13.500px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <BackgroundIPad
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 428,
        }}
        mode={"light"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 146,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showBar && (
        <div style={{
          position: "relative",
          width: 644,
          height: 44,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <Autocorrection
            style={{
              position: "relative",
              height: 28,
              flexGrow: 1,
              width: "auto",
            }}
            mode={"light"}
          />
        </div>
        )}
        <AccessoryBarIPad
          style={{ position: "absolute", left: 0, top: 8 }}
          mode={"light"}
        />
      </div>
      <KeyboardIPadLayouts
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
        type={"lowercase"}
      />
    </div>
  );
  const __impls = {
    // figma: Type=Shift
    "type=shift": __body0,
    // figma: Type=Default
    "type=default": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Keyboard2;
