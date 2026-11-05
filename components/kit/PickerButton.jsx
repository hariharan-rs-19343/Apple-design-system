// figma node: 5739:34128 Picker Button (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "selected=" + __venc(p.selected);

export function PickerButton(_p = {}) {
  const props = { ..._p, size: _p.size ?? "sm", selected: _p.selected ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 5,
        top: 5,
        width: 26,
        height: 26,
        borderRadius: "50%",
        backgroundColor: "rgb(175,82,222)",
      }} />
      <svg width={36} height={36} viewBox="0 0 36 36" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 36,
        height: 36,
      }}>
        <path d={"M 18 36 C 27.941 36 36 27.941 36 18 C 36 8.059 27.941 0 18 0 C 8.059 0 0 8.059 0 18 C 0 27.941 8.059 36 18 36 Z M 18 33 C 26.284 33 33 26.284 33 18 C 33 9.716 26.284 3 18 3 C 9.716 3 3 9.716 3 18 C 3 26.284 9.716 33 18 33 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: "radial-gradient(18px 18px at 50.00% 50.00%, rgb(228,228,228) 0.00%, rgba(228,228,228,0) 88.00%), conic-gradient(from 0deg at 50% 50%, rgb(231,224,64) 0.00deg, rgb(238,170,60) 44.65deg, rgb(232,64,59) 89.78deg, rgb(179,62,213) 131.61deg, rgb(105,74,232) 182.19deg, rgb(60,202,231) 231.34deg, rgb(60,232,133) 269.54deg, rgb(137,231,67) 313.04deg, rgb(231,224,64) 360.00deg)",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 28,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 5,
        top: 5,
        width: 18,
        height: 18,
        borderRadius: "50%",
        backgroundColor: "rgb(175,82,222)",
      }} />
      <svg width={28} height={28} viewBox="0 0 28 28" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 28,
      }}>
        <path d={"M 14 28 C 21.732 28 28 21.732 28 14 C 28 6.268 21.732 0 14 0 C 6.268 0 0 6.268 0 14 C 0 21.732 6.268 28 14 28 Z M 14 25 C 20.075 25 25 20.075 25 14 C 25 7.925 20.075 3 14 3 C 7.925 3 3 7.925 3 14 C 3 20.075 7.925 25 14 25 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 28,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 28,
        borderRadius: "50%",
        background: "radial-gradient(14px 14px at 50.00% 50.00%, rgb(228,228,228) 0.00%, rgba(228,228,228,0) 88.00%), conic-gradient(from 0deg at 50% 50%, rgb(231,224,64) 0.00deg, rgb(238,170,60) 44.65deg, rgb(232,64,59) 89.78deg, rgb(179,62,213) 131.61deg, rgb(105,74,232) 182.19deg, rgb(60,202,231) 231.34deg, rgb(60,232,133) 269.54deg, rgb(137,231,67) 313.04deg, rgb(231,224,64) 360.00deg)",
      }} />
    </div>
  );
  const __impls = {
    // figma: Size=Large, Selected=True
    "size=lg|selected=true": __body0,
    // figma: Size=Large, Selected=False
    "size=lg|selected=false": __body1,
    // figma: Size=Small, Selected=True
    "size=sm|selected=true": __body2,
    // figma: Size=Small, Selected=False
    "size=sm|selected=false": __body3,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default PickerButton;
