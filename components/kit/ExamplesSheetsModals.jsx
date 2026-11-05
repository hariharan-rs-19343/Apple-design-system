import { IPhone17Pro } from '../kit/IPhone17Pro.jsx';
import { SheetFullScreenIPhone } from './SheetFullScreenIPhone.jsx';
import { SheetInspectorIPhone } from '../kit/SheetInspectorIPhone.jsx';
import { StatusBarIPhone2 } from '../navigation/StatusBarIPhone2.jsx';

// figma node: 770:21908 Examples/Sheets (Modals) (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ExamplesSheetsModals(_p = {}) {
  const props = { ..._p, type: _p.type ?? "fullscreen" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      borderRadius: 48,
      backgroundColor: "var(--backgrounds-primary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 874,
        overflow: "hidden",
        borderRadius: 44,
        backgroundColor: "var(--backgrounds-primary)",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 167,
          backdropFilter: "blur(10px)",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 167,
            clipPath: "inset(0px 0px 0px 0px)",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 402,
              height: 167,
              opacity: 0.9,
              backgroundColor: "var(--backgrounds-primary)",
              backdropFilter: "blur(60px)",
            }} />
          </div>
        </div>
        <SheetInspectorIPhone style={{
            position: "absolute",
            left: 0,
            top: 500,
            width: 402,
            height: 374,
          }} />
      </div>
      <StatusBarIPhone2 style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
        }} />
      <IPhone17Pro
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }}
        color={"silver"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      borderRadius: 48,
      backgroundColor: "var(--backgrounds-primary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 874,
        overflow: "hidden",
        borderRadius: 44,
        backgroundColor: "var(--grays-black)",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 62,
            width: 402,
            height: 812,
          }}>
          <SheetFullScreenIPhone
            style={{ transform: "scale(1, 0.953)", transformOrigin: "0 0" }}
            stacked={true}
          />
        </div>
      </div>
      <StatusBarIPhone2 style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
        }} />
      <IPhone17Pro
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }}
        color={"silver"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      borderRadius: 48,
      backgroundColor: "var(--backgrounds-primary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 402,
        height: 874,
        overflow: "hidden",
        borderRadius: 44,
        backgroundColor: "var(--backgrounds-primary)",
      }}>
        <SheetFullScreenIPhone
          style={{
            position: "absolute",
            left: 0,
            top: 62,
            width: 402,
            height: 812,
          }}
          stacked={false}
        />
      </div>
      <StatusBarIPhone2 style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
        }} />
      <IPhone17Pro
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }}
        color={"silver"}
      />
    </div>
  );
  const __impls = {
    // figma: Type=Inspector
    "type=inspector": __body0,
    // figma: Type=Fullscreen Stack
    "type=fullscreen stack": __body1,
    // figma: Type=Fullscreen
    "type=fullscreen": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default ExamplesSheetsModals;
