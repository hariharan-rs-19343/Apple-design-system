// figma node: 121:12063 Dial (Circular Slider) (3 variants)
// Knob fill = _Control Backgrounds / Bordered Neutral / Content Area (black 5% idle, 15% clicked, 5% @ 50% disabled).
// Per-size metrics from the Control Size token modes: diameter = global-height, indicator = dial-height-knob, inset = dial-inset-knob.
const MAC_DIAL_SIZES = {
  mini: { d: 16, knob: 4, inset: 2 },
  small: { d: 20, knob: 5, inset: 2.5 },
  medium: { d: 24, knob: 6, inset: 3 },
  large: { d: 28, knob: 6, inset: 3 },
  xlarge: { d: 36, knob: 7, inset: 3 },
};

export function MacDialCircularSlider(_p = {}) {
  const state = _p.state ?? "idle";
  const m = MAC_DIAL_SIZES[_p.size] ?? MAC_DIAL_SIZES.medium;
  const angle = _p.angle ?? 0;
  const disabled = state === "disabled";
  const fill = state === "clicked" ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0.05)";
  return (
    <div className={_p.className} style={{
      position: "relative",
      width: m.d,
      height: m.d,
      flexShrink: 0,
      borderRadius: "50%",
      overflow: "hidden",
      ..._p.style,
    }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: fill, opacity: disabled ? 0.5 : 1 }} />
      <div style={{ position: "absolute", inset: 0, transform: `rotate(${angle}deg)` }}>
        <div style={{
          position: "absolute",
          left: (m.d - 2) / 2,
          top: m.inset,
          width: 2,
          height: m.knob,
          borderRadius: 100,
          background: disabled ? "var(--mac-glyphs-neutral-disabled)" : "var(--mac-glyphs-neutral-idle)",
        }} />
      </div>
    </div>
  );
}
export default MacDialCircularSlider;
