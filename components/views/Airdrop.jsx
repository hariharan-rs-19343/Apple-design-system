// figma node: 126:59834 Airdrop
export function Airdrop(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 60,
      height: 60,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 60,
        height: 60,
      }} />
    </div>
  );
}
export default Airdrop;
