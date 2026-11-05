// figma node: 488:17661 Window Controls/Utility (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "active=" + __venc(p.active);

export function MacWindowControlsUtility(_p = {}) {
  const props = { ..._p, active: _p.active ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 7,
      padding: "3px 3px 3px 3px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={10} viewBox="0 0 10 10" fill="none" style={{
        position: "relative",
        width: 10,
        borderRadius: 100,
        flexShrink: 0,
        alignSelf: "stretch",
        color: "rgba(0,0,0,0.15)",
      }}>
        <path d={"M 0 5 C 0 2.239 2.239 0 5 0 L 5 0 C 7.761 0 10 2.239 10 5 L 10 5 C 10 7.761 7.761 10 5 10 L 5 10 C 2.239 10 0 7.761 0 5 L 0 5 Z"} fill="rgba(0,0,0,0.15)" fillRule="nonzero" />
        <path d={"M 5 10 L 5 9.5 C 2.515 9.5 0.5 7.485 0.5 5 L 0 5 L -0.5 5 C -0.5 8.038 1.962 10.5 5 10.5 L 5 10 Z M 10 5 L 9.5 5 C 9.5 7.485 7.485 9.5 5 9.5 L 5 10 L 5 10.5 C 8.038 10.5 10.5 8.038 10.5 5 L 10 5 Z M 5 0 L 5 0.5 C 7.485 0.5 9.5 2.515 9.5 5 L 10 5 L 10.5 5 C 10.5 1.962 8.038 -0.5 5 -0.5 L 5 0 Z M 5 0 L 5 -0.5 C 1.962 -0.5 -0.5 1.962 -0.5 5 L 0 5 L 0.5 5 C 0.5 2.515 2.515 0.5 5 0.5 L 5 0 Z"} fill="rgba(0,0,0,0.1)" fillRule="nonzero" />
      </svg>
      <svg width={10} viewBox="0 0 10 10" fill="none" style={{
        position: "relative",
        width: 10,
        borderRadius: 100,
        flexShrink: 0,
        alignSelf: "stretch",
        color: "rgba(0,0,0,0.15)",
      }}>
        <path d={"M 0 5 C 0 2.239 2.239 0 5 0 L 5 0 C 7.761 0 10 2.239 10 5 L 10 5 C 10 7.761 7.761 10 5 10 L 5 10 C 2.239 10 0 7.761 0 5 L 0 5 Z"} fill="rgba(0,0,0,0.15)" fillRule="nonzero" />
        <path d={"M 5 10 L 5 9.5 C 2.515 9.5 0.5 7.485 0.5 5 L 0 5 L -0.5 5 C -0.5 8.038 1.962 10.5 5 10.5 L 5 10 Z M 10 5 L 9.5 5 C 9.5 7.485 7.485 9.5 5 9.5 L 5 10 L 5 10.5 C 8.038 10.5 10.5 8.038 10.5 5 L 10 5 Z M 5 0 L 5 0.5 C 7.485 0.5 9.5 2.515 9.5 5 L 10 5 L 10.5 5 C 10.5 1.962 8.038 -0.5 5 -0.5 L 5 0 Z M 5 0 L 5 -0.5 C 1.962 -0.5 -0.5 1.962 -0.5 5 L 0 5 L 0.5 5 C 0.5 2.515 2.515 0.5 5 0.5 L 5 0 Z"} fill="rgba(0,0,0,0.1)" fillRule="nonzero" />
      </svg>
      <svg width={10} viewBox="0 0 10 10" fill="none" style={{
        position: "relative",
        width: 10,
        borderRadius: 100,
        flexShrink: 0,
        alignSelf: "stretch",
        color: "rgba(0,0,0,0.15)",
      }}>
        <path d={"M 0 5 C 0 2.239 2.239 0 5 0 L 5 0 C 7.761 0 10 2.239 10 5 L 10 5 C 10 7.761 7.761 10 5 10 L 5 10 C 2.239 10 0 7.761 0 5 L 0 5 Z"} fill="rgba(0,0,0,0.15)" fillRule="nonzero" />
        <path d={"M 5 10 L 5 9.5 C 2.515 9.5 0.5 7.485 0.5 5 L 0 5 L -0.5 5 C -0.5 8.038 1.962 10.5 5 10.5 L 5 10 Z M 10 5 L 9.5 5 C 9.5 7.485 7.485 9.5 5 9.5 L 5 10 L 5 10.5 C 8.038 10.5 10.5 8.038 10.5 5 L 10 5 Z M 5 0 L 5 0.5 C 7.485 0.5 9.5 2.515 9.5 5 L 10 5 L 10.5 5 C 10.5 1.962 8.038 -0.5 5 -0.5 L 5 0 Z M 5 0 L 5 -0.5 C 1.962 -0.5 -0.5 1.962 -0.5 5 L 0 5 L 0.5 5 C 0.5 2.515 2.515 0.5 5 0.5 L 5 0 Z"} fill="rgba(0,0,0,0.1)" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 7,
      padding: "3px 3px 3px 3px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={10} viewBox="0 0 10 10" fill="none" style={{
        position: "relative",
        width: 10,
        borderRadius: 100,
        flexShrink: 0,
        alignSelf: "stretch",
        color: "rgb(255,115,106)",
      }}>
        <path d={"M 0 5 C 0 2.239 2.239 0 5 0 L 5 0 C 7.761 0 10 2.239 10 5 L 10 5 C 10 7.761 7.761 10 5 10 L 5 10 C 2.239 10 0 7.761 0 5 L 0 5 Z"} fill="rgb(255,115,106)" fillRule="nonzero" />
        <path d={"M 5 10 L 5 9.5 C 2.515 9.5 0.5 7.485 0.5 5 L 0 5 L -0.5 5 C -0.5 8.038 1.962 10.5 5 10.5 L 5 10 Z M 10 5 L 9.5 5 C 9.5 7.485 7.485 9.5 5 9.5 L 5 10 L 5 10.5 C 8.038 10.5 10.5 8.038 10.5 5 L 10 5 Z M 5 0 L 5 0.5 C 7.485 0.5 9.5 2.515 9.5 5 L 10 5 L 10.5 5 C 10.5 1.962 8.038 -0.5 5 -0.5 L 5 0 Z M 5 0 L 5 -0.5 C 1.962 -0.5 -0.5 1.962 -0.5 5 L 0 5 L 0.5 5 C 0.5 2.515 2.515 0.5 5 0.5 L 5 0 Z"} fill="rgba(0,0,0,0.1)" fillRule="nonzero" />
      </svg>
      <svg width={10} viewBox="0 0 10 10" fill="none" style={{
        position: "relative",
        width: 10,
        borderRadius: 100,
        flexShrink: 0,
        alignSelf: "stretch",
        color: "rgb(254,188,46)",
      }}>
        <path d={"M 0 5 C 0 2.239 2.239 0 5 0 L 5 0 C 7.761 0 10 2.239 10 5 L 10 5 C 10 7.761 7.761 10 5 10 L 5 10 C 2.239 10 0 7.761 0 5 L 0 5 Z"} fill="rgb(254,188,46)" fillRule="nonzero" />
        <path d={"M 5 10 L 5 9.5 C 2.515 9.5 0.5 7.485 0.5 5 L 0 5 L -0.5 5 C -0.5 8.038 1.962 10.5 5 10.5 L 5 10 Z M 10 5 L 9.5 5 C 9.5 7.485 7.485 9.5 5 9.5 L 5 10 L 5 10.5 C 8.038 10.5 10.5 8.038 10.5 5 L 10 5 Z M 5 0 L 5 0.5 C 7.485 0.5 9.5 2.515 9.5 5 L 10 5 L 10.5 5 C 10.5 1.962 8.038 -0.5 5 -0.5 L 5 0 Z M 5 0 L 5 -0.5 C 1.962 -0.5 -0.5 1.962 -0.5 5 L 0 5 L 0.5 5 C 0.5 2.515 2.515 0.5 5 0.5 L 5 0 Z"} fill="rgba(0,0,0,0.1)" fillRule="nonzero" />
      </svg>
      <svg width={10} viewBox="0 0 10 10" fill="none" style={{
        position: "relative",
        width: 10,
        borderRadius: 100,
        flexShrink: 0,
        alignSelf: "stretch",
        color: "rgb(25,195,50)",
      }}>
        <path d={"M 0 5 C 0 2.239 2.239 0 5 0 L 5 0 C 7.761 0 10 2.239 10 5 L 10 5 C 10 7.761 7.761 10 5 10 L 5 10 C 2.239 10 0 7.761 0 5 L 0 5 Z"} fill="rgb(25,195,50)" fillRule="nonzero" />
        <path d={"M 5 10 L 5 9.5 C 2.515 9.5 0.5 7.485 0.5 5 L 0 5 L -0.5 5 C -0.5 8.038 1.962 10.5 5 10.5 L 5 10 Z M 10 5 L 9.5 5 C 9.5 7.485 7.485 9.5 5 9.5 L 5 10 L 5 10.5 C 8.038 10.5 10.5 8.038 10.5 5 L 10 5 Z M 5 0 L 5 0.5 C 7.485 0.5 9.5 2.515 9.5 5 L 10 5 L 10.5 5 C 10.5 1.962 8.038 -0.5 5 -0.5 L 5 0 Z M 5 0 L 5 -0.5 C 1.962 -0.5 -0.5 1.962 -0.5 5 L 0 5 L 0.5 5 C 0.5 2.515 2.515 0.5 5 0.5 L 5 0 Z"} fill="rgba(0,0,0,0.1)" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Active=False
    "active=false": __body0,
    // figma: Active=True
    "active=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default MacWindowControlsUtility;
