// figma node: 518:108540 _Bezel
export function Bezel(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 143,
      height: 145,
      borderRadius: 40,
      backgroundColor: "var(--grays-black)",
      boxShadow: "0px 12px 74px 0px rgba(0,0,0,0.22)",
      position: "relative",
      ...props.style,
    }} />
  );
}
export default Bezel;
