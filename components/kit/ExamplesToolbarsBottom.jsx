import { ButtonBottom } from '../buttons/ButtonBottom.jsx';
import { IPhone17Pro } from '../kit/IPhone17Pro.jsx';
import { ScrollEdgeEffectSoft } from '../kit/ScrollEdgeEffectSoft.jsx';
import { StatusBarIPhone2 } from '../navigation/StatusBarIPhone2.jsx';
import { ToolbarBottomIPhone } from '../toolbars/ToolbarBottomIPhone.jsx';

// figma node: 2517:14528 Examples/Toolbars - Bottom (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ExamplesToolbarsBottom(_p = {}) {
  const props = { ..._p, type: _p.type ?? "text" };
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
        padding: "116px 16px 10px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
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
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 62,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.310)", transformOrigin: "0 0" }}
            edge={"top"}
          />
        </div>
        <div style={{
            position: "absolute",
            left: 0,
            top: 764,
            width: 402,
            height: 110,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.550)", transformOrigin: "0 0" }}
            edge={"bottom"}
          />
        </div>
      </div>
      <ToolbarBottomIPhone
        style={{
          position: "absolute",
          left: 0,
          top: 790,
          width: 402,
        }}
        type={"search with focus"}
      />
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
        padding: "116px 16px 10px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
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
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 62,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.310)", transformOrigin: "0 0" }}
            edge={"top"}
          />
        </div>
        <div style={{
            position: "absolute",
            left: 0,
            top: 764,
            width: 402,
            height: 110,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.550)", transformOrigin: "0 0" }}
            edge={"bottom"}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 790,
        width: 402,
        display: "flex",
        flexDirection: "row",
        padding: "4px 28px 32px 28px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <ButtonBottom
            style={{ position: "relative", height: 48, flexShrink: 0 }}
            state={"1 symbol"}
          />
          <ButtonBottom
            style={{ position: "relative", height: 48, flexShrink: 0 }}
            state={"1 symbol"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <ButtonBottom
            style={{ position: "relative", height: 48, flexShrink: 0 }}
            state={"1 symbol"}
          />
          <ButtonBottom
            style={{ position: "relative", height: 48, flexShrink: 0 }}
            state={"1 symbol"}
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
        padding: "116px 16px 10px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
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
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 62,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.310)", transformOrigin: "0 0" }}
            edge={"top"}
          />
        </div>
        <div style={{
            position: "absolute",
            left: 0,
            top: 764,
            width: 402,
            height: 110,
          }}>
          <ScrollEdgeEffectSoft
            style={{ transform: "scale(2.010, 0.550)", transformOrigin: "0 0" }}
            edge={"bottom"}
          />
        </div>
      </div>
      <ToolbarBottomIPhone
        style={{
          position: "absolute",
          left: 0,
          top: 790,
          width: 402,
        }}
        icon3={<ButtonBottom state={"text"} style={{ width: 48, height: 48 }} />}
        icon1={<ButtonBottom state={"text"} style={{ width: 48, height: 48 }} />}
        type={"buttons"}
      />
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
    // figma: Type=Search
    "type=search": __body0,
    // figma: Type=Symbols
    "type=symbols": __body1,
    // figma: Type=Text
    "type=text": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default ExamplesToolbarsBottom;
