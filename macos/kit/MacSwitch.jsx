// figma node: 121:12161 Switch (18 variants) — rebuilt from the kit values: 54×24 capsule track, 2pt inset, 32×20 knob.
const SW_TINT = "var(--mac-controls-tint, rgb(13,111,255))";
const SW_KNOB_SHADOW = "0px 0px 1px 0px rgba(0,0,0,0.05), 0px 0px 4px 0px rgba(0,0,0,0.05), 0px 0px 44px 0px rgba(0,0,0,0.1)";
const SW_GLASS_RIM = "inset 1.75px 1.75px 1px -1px rgba(255,255,255,0.9), inset -1.75px -1.75px 2px -1px rgba(255,255,255,0.9), inset 0px 0px 1px 0.25px rgba(255,255,255,0.1)";

function swTrack(on, state, active) {
  const tinted = on && active;
  if (tinted) {
    if (state === "clicked") return { background: `linear-gradient(rgba(0,0,0,0.15),rgba(0,0,0,0.15)), ${SW_TINT}` };
    if (state === "disabled") return { background: SW_TINT, _alpha: 0.125 };
    return { background: SW_TINT };
  }
  if (state === "clicked") return { background: "rgba(0,0,0,0.13)" };
  if (state === "disabled") return { background: "rgba(0,0,0,0.025)" };
  return { background: "rgba(0,0,0,0.05)" };
}
function swKnob(state) {
  if (state === "clicked") return { background: "rgba(255,255,255,0.12)", backdropFilter: "blur(2px) saturate(160%)", WebkitBackdropFilter: "blur(2px) saturate(160%)", boxShadow: `${SW_GLASS_RIM}, ${SW_KNOB_SHADOW}` };
  if (state === "disabled") return { background: "rgba(0,0,0,0.48)", boxShadow: `${SW_GLASS_RIM}, ${SW_KNOB_SHADOW}` };
  return { background: "rgb(255,255,255)", boxShadow: SW_KNOB_SHADOW };
}

// Kit control sizes: track width × height, knob inset.
const SW_SIZES = { mini: [36, 16, 1.5], small: [44, 20, 2], medium: [54, 24, 2], large: [64, 28, 2], xl: [80, 36, 3] };
export function MacSwitch(_p = {}) {
  const props = { ..._p, state: _p.state ?? "idle", selection: _p.selection ?? "off", activeWindow: _p.activeWindow ?? true, showAXLabel: _p.showAXLabel ?? true, size: _p.size ?? "medium" };
  const [w, hgt, inset] = SW_SIZES[props.size] ?? SW_SIZES.medium;
  const knobH = hgt - inset * 2;
  const knobW = +(knobH * 1.6).toFixed(2);
  const state = props.state === "disabeld" ? "disabled" : props.state;
  const on = props.selection === "on" || props.selection === "mixed";
  const tinted = on && props.activeWindow;
  const track = swTrack(on, state, props.activeWindow);
  const axColor = tinted ? "rgb(255,255,255)" : "rgb(198,198,198)";
  const axOpacity = state === "disabled" ? 0.5 : tinted ? 1 : 0.5;
  const ax = props.selection === "mixed"
    ? <span style={{ width: 10, height: 2.5, borderRadius: 100, backgroundColor: axColor }} />
    : on
      ? <span style={{ width: 2.5, height: 10, borderRadius: 100, backgroundColor: axColor }} />
      : <span style={{ width: 6, height: 6, borderRadius: 100, boxShadow: `inset 0 0 0 1.5px ${axColor}` }} />;
  return (
    <div className={props.className} role="switch" aria-checked={props.selection === "mixed" ? "mixed" : on} style={{
      width: w,
      height: hgt,
      borderRadius: 1000,
      overflow: "hidden",
      display: "flex",
      flexDirection: on ? "row-reverse" : "row",
      alignItems: "stretch",
      padding: inset,
      boxSizing: "border-box",
      position: "relative",
      isolation: "isolate",
      ...props.style,
    }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: 1000, zIndex: -1, background: track.background, opacity: track._alpha ?? 1 }} />
      <div style={{ width: knobW, flexShrink: 0, borderRadius: 1000, ...swKnob(state) }} />
      {props.showAXLabel && (
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", opacity: axOpacity }}>{ax}</div>
      )}
    </div>
  );
}
export default MacSwitch;
