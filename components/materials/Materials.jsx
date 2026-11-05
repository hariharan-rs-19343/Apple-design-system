import { MaterialsModeOptions } from './MaterialsModeOptions.jsx';

// figma node: 510:79105 _Materials (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2);

export function Materials(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "ultrathin" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <MaterialsModeOptions
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 100,
          height: 100,
        }}
        mode={"light"}
        style2={"chrome"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <MaterialsModeOptions
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 100,
          height: 100,
        }}
        mode={"light"}
        style2={"thick"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <MaterialsModeOptions
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 100,
          height: 100,
        }}
        mode={"light"}
        style2={"regular"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <MaterialsModeOptions
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 100,
          height: 100,
        }}
        mode={"light"}
        style2={"thin"}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <MaterialsModeOptions
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 100,
          height: 100,
        }}
        mode={"light"}
        style2={"ultrathin"}
      />
    </div>
  );
  const __impls = {
    // figma: Style=Chrome
    "style2=chrome": __body0,
    // figma: Style=Thick
    "style2=thick": __body1,
    // figma: Style=Regular
    "style2=regular": __body2,
    // figma: Style=Thin
    "style2=thin": __body3,
    // figma: Style=Ultrathin
    "style2=ultrathin": __body4,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default Materials;
