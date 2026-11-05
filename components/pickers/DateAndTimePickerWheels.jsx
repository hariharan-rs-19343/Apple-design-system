// figma node: 533:15609 Date and Time Picker - Wheels (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "type=" + __venc(p.type);

export function DateAndTimePickerWheels(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", type: _p.type ?? "date" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 297,
      height: 213,
      borderRadius: 13,
      backdropFilter: "blur(80px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          borderRadius: 13,
          background: "linear-gradient(rgb(92,92,92),rgb(92,92,92)), linear-gradient(rgba(153,153,153,0.97),rgba(153,153,153,0.97))",
          boxShadow: "0px 10px 60px 0px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "18px 20px 18px 20px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            width: 257,
            height: 177,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: -20,
              top: 72,
              width: 297,
              height: 35,
              borderRadius: 7,
              backgroundColor: "rgba(116,116,128,0.08)",
            }} />
            <div className="fig-mask-d4f6bc88d18169df-cf0808d4" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 257,
              height: 177,
            }}>
              <div style={{
                position: "absolute",
                left: -20,
                top: 72,
                width: 297,
                height: 35,
                borderRadius: 7,
                backgroundColor: "rgb(0,0,0)",
              }} />
              <div style={{
                position: "absolute",
                left: -20,
                top: 107,
                width: 297,
                height: 72,
                background: "linear-gradient(180deg, rgb(178,178,178) 0.00%, rgba(178,178,178,0.3) 100.00%)",
              }} />
              <div style={{
                position: "absolute",
                left: -20,
                top: 0,
                width: 297,
                height: 72,
                background: "linear-gradient(180deg, rgba(178,178,178,0.3) 0.00%, rgb(178,178,178) 100.00%)",
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 198.5,
      height: 213.5,
      borderRadius: 13,
      backdropFilter: "blur(80px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          borderRadius: 13,
          background: "linear-gradient(rgb(92,92,92),rgb(92,92,92)), linear-gradient(rgba(153,153,153,0.97),rgba(153,153,153,0.97))",
          boxShadow: "0px 10px 60px 0px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "18px 20px 18px 20px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            width: 158.5,
            height: 177.5,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: -20,
              top: 72,
              width: 198.5,
              height: 35,
              borderRadius: 7,
              backgroundColor: "rgba(116,116,128,0.08)",
            }} />
            <div className="fig-mask-54f47d69b6c743ee-0d8b0db8" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 158.5,
              height: 177.5,
            }}>
              <div style={{
                position: "absolute",
                left: -20,
                top: 72,
                width: 198.5,
                height: 35,
                borderRadius: 7,
                backgroundColor: "rgb(0,0,0)",
              }} />
              <div style={{
                position: "absolute",
                left: -20,
                top: 107,
                width: 199,
                height: 72,
                background: "linear-gradient(180deg, rgb(178,178,178) 0.00%, rgba(178,178,178,0.3) 100.00%)",
              }} />
              <div style={{
                position: "absolute",
                left: -20,
                top: 0,
                width: 199,
                height: 72,
                background: "linear-gradient(180deg, rgba(178,178,178,0.3) 0.00%, rgb(178,178,178) 100.00%)",
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Mode=Light, Type=Date
    "mode=light|type=date": __body0,
    // figma: Mode=Light, Type=Time
    "mode=light|type=time": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DateAndTimePickerWheels;
