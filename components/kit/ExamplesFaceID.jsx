import { FaceID } from '../views/FaceID.jsx';
import { IPhone17Pro } from '../kit/IPhone17Pro.jsx';
import { StatusBarIPhone2 } from '../navigation/StatusBarIPhone2.jsx';

// figma node: 770:21898 Examples/Face ID (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function ExamplesFaceID(_p = {}) {
  const props = { ..._p, state: _p.state ?? "authenticating" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 402,
      height: 874,
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
        borderRadius: 50,
        backgroundColor: "var(--backgrounds-primary)",
        display: "flex",
        flexDirection: "column",
        padding: "167px 16px 10px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "10px 0px 10px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
      </div>
      <StatusBarIPhone2 style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
        }} />
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }}>
        <FaceID
          style={{ transform: "scale(1, 4.600)", transformOrigin: "0 0" }}
          state={"success"}
        />
      </div>
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
        borderRadius: 50,
        backgroundColor: "var(--backgrounds-primary)",
        display: "flex",
        flexDirection: "column",
        padding: "167px 16px 10px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "10px 0px 10px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
      </div>
      <StatusBarIPhone2 style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
        }} />
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
        }}>
        <FaceID
          style={{ transform: "scale(1, 4.600)", transformOrigin: "0 0" }}
          state={"authenticating"}
        />
      </div>
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
    // figma: State=Success
    "state=success": __body0,
    // figma: State=Authenticating
    "state=authenticating": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ExamplesFaceID;
