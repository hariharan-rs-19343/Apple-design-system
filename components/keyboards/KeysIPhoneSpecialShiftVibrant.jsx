// figma: _Keys/iPhone - Special/Shift/Vibrant
export function KeysIPhoneSpecialShiftVibrant(p = {}) {
  const on = !!p.on;
  return (
    <div className={p.className} style={{ width: 44, height: 42, borderRadius: 8.5, display: "flex", alignItems: "center", justifyContent: "center", background: on ? "#fff" : "rgb(172,179,188)", boxShadow: "0px 1px 0px 0px rgba(0,0,0,0.35)", color: "var(--labels-primary, #000)", ...p.style }}>
      <svg width="20" height="19" viewBox="0 0 20 19" fill={on ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" style={{ display: "block" }}><path d="M10 1.5 L18.5 10 H13.5 V17.5 H6.5 V10 H1.5 Z" /></svg>
    </div>
  );
}
export default KeysIPhoneSpecialShiftVibrant;
