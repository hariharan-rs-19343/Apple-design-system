// figma node: 121:12407 Sliders — rebuilt from the kit values. Slider frame 100×24, track 6pt (1pt inset → 4pt bar),
// knob 20×16 capsule centred on the value, ticks every 10%. Board layout matches the kit page (1670×1040).
const SL_TINT = "var(--mac-controls-tint, rgb(13,111,255))";
const SL_KNOB_SHADOW = "0px 0px 1px 0px rgba(0,0,0,0.05), 0px 0px 4px 0px rgba(0,0,0,0.05), 0px 0px 44px 0px rgba(0,0,0,0.1)";

function slTrack(state) {
  if (state === "clicked") return { background: "rgba(0,0,0,0.13)" };
  if (state === "disabled") return { background: "rgba(0,0,0,0.05)", opacity: 0.5 };
  return { background: "rgba(0,0,0,0.05)" };
}
function slFill(state, active) {
  if (!active) {
    if (state === "clicked") return { background: "rgba(0,0,0,0.2)" };
    if (state === "disabled") return { background: "rgba(0,0,0,0.13)", opacity: 0.5 };
    return { background: "rgba(0,0,0,0.13)" };
  }
  if (state === "clicked") return { background: `linear-gradient(rgba(0,0,0,0.15),rgba(0,0,0,0.15)), ${SL_TINT}` };
  if (state === "disabled") return { background: SL_TINT, opacity: 0.25 };
  return { background: SL_TINT };
}
function slKnob(state) {
  if (state === "clicked") return { background: "rgba(255,255,255,0.18)", backdropFilter: "blur(1px) saturate(170%)", WebkitBackdropFilter: "blur(1px) saturate(170%)", boxShadow: `inset 1.5px 1.5px 1px -1px rgba(255,255,255,0.95), inset -1.5px -1.5px 1.5px -1px rgba(255,255,255,0.95), inset 0 0 0 0.5px rgba(0,0,0,0.06), ${SL_KNOB_SHADOW}` };
  if (state === "disabled") return { background: "rgb(236,236,236)", boxShadow: `inset 0 0 0 0.5px rgba(0,0,0,0.06), ${SL_KNOB_SHADOW}` };
  return { background: "rgb(255,255,255)", boxShadow: SL_KNOB_SHADOW };
}

export function MacSlider(_p = {}) {
  const props = { ..._p, value: _p.value ?? 50, state: _p.state ?? "idle", ticks: _p.ticks ?? false, centerBiased: _p.centerBiased ?? false, active: _p.active ?? true, width: _p.width ?? 100 };
  const W = props.width;
  const v = Math.max(0, Math.min(100, props.value));
  const x = (v / 100) * W;
  const mid = W / 2;
  const fillL = props.centerBiased ? Math.min(mid, x) : 0;
  const fillW = props.centerBiased ? Math.abs(x - mid) : x;
  const tickCount = typeof props.ticks === "number" ? props.ticks : 11;
  const showTicks = !!props.ticks;
  const tickColor = props.state === "disabled" ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0.26)";
  return (
    <div className={props.className} style={{ position: "relative", width: W, height: 24, flexShrink: 0, ...props.style }}>
      <div style={{ position: "absolute", left: 0, top: 10, width: W, height: 4, borderRadius: 100, ...slTrack(props.state) }} />
      {fillW > 0 && <div style={{ position: "absolute", left: fillL, top: 10, width: fillW, height: 4, borderRadius: 100, ...slFill(props.state, props.active) }} />}
      {props.centerBiased && (
        <div style={{ position: "absolute", left: mid - 1, top: showTicks ? 9 : 9, width: 2, height: showTicks ? 10 : 6, borderRadius: 1, background: showTicks ? (props.state === "disabled" ? "rgba(0,0,0,0.3)" : "rgb(0,0,0)") : "rgba(0,0,0,0.25)", opacity: props.state === "disabled" ? 0.5 : 1 }} />
      )}
      {showTicks && Array.from({ length: tickCount }).map((_, i) => {
        const tx = Math.round((i / (tickCount - 1)) * (W - 2));
        if (props.centerBiased && Math.abs(tx + 1 - mid) < 2) return null;
        return <div key={i} style={{ position: "absolute", left: tx, top: 16, width: 2, height: 2, borderRadius: 1, background: tickColor }} />;
      })}
      <div style={{ position: "absolute", left: x - 10, top: 4, width: 20, height: 16, borderRadius: 100, ...slKnob(props.state) }} />
    </div>
  );
}

const SL_COLS = [["idle", 20], ["clicked", 140], ["disabled", 260]];
const SL_VALUES = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function SlGroup({ left, centerBiased }) {
  return (
    <div style={{ position: "absolute", left, top: 50, width: 770, height: 760, overflow: "hidden", borderRadius: 5 }}>
      {[true, false].flatMap((active, ai) => [false, true].flatMap((ticks, ti) => SL_COLS.flatMap(([state, cx]) => SL_VALUES.map((value, vi) => (
        <MacSlider key={`${ai}${ti}${state}${vi}`} value={value} state={state} ticks={ticks} centerBiased={centerBiased} active={active}
          style={{ position: "absolute", left: cx + ti * 380, top: 20 + ai * 380 + vi * 32 }} />
      )))))}
    </div>
  );
}
function SlBar({ left, top, width = 54, look, mark }) {
  return (
    <div style={{ position: "absolute", left, top, width, height: 6 }}>
      <div style={{ position: "absolute", left: 0, top: 1, width, height: 4, borderRadius: 100, ...look }} />
      {mark && <div style={{ position: "absolute", left: mark === "center" ? width / 2 - 1 : 0, top: 0, width: 2, height: mark === "center" ? 10 : 6, borderRadius: 1, background: mark === "center" ? "rgb(0,0,0)" : "rgba(0,0,0,0.25)" }} />}
    </div>
  );
}
function SlTicks({ left, top, state, centerMark }) {
  return (
    <div style={{ position: "absolute", left, top, width: 54, height: 12 }}>
      <SlBar left={0} top={0} look={slTrack(state)} mark={centerMark ? "center" : null} />
      {Array.from({ length: 11 }).map((_, i) => {
        const tx = Math.round(i * 5.2);
        if (centerMark && i === 5) return null;
        return <div key={i} style={{ position: "absolute", left: tx, top: 8, width: 2, height: 2, borderRadius: 1, background: state === "disabled" ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0.26)" }} />;
      })}
    </div>
  );
}
const SL_STATES = ["idle", "clicked", "disabled"];

export function MacSliders(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{ position: "relative", width: 1670, height: 1040, borderRadius: 2, backgroundColor: "var(--mac-section-fill, rgb(245,245,245))", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)", ...props.style }}>
      <SlGroup left={50} centerBiased={false} />
      <SlGroup left={850} centerBiased={true} />
      <div style={{ position: "absolute", left: 50, top: 870, width: 160, height: 120 }}>
        {SL_STATES.map((s, i) => <SlBar key={"f" + s} left={18} top={20 + i * 34} look={slFill(s, true)} />)}
        {SL_STATES.map((s, i) => <SlBar key={"u" + s} left={88} top={20 + i * 34} look={slTrack(s)} />)}
      </div>
      <div style={{ position: "absolute", left: 230, top: 870, width: 90, height: 120 }}>
        {SL_STATES.map((s, i) => <SlTicks key={s} left={18} top={20 + i * 34} state={s} />)}
      </div>
      <div style={{ position: "absolute", left: 450, top: 870, width: 140, height: 90 }}>
        {[["idle", 20], ["disabled", 99]].flatMap(([s, kx]) => [19, 49].map((ky) => (
          <div key={s + ky} style={{ position: "absolute", left: kx, top: ky + 2, width: 20, height: 16, borderRadius: 100, ...slKnob(s) }} />
        )))}
      </div>
      <div style={{ position: "absolute", left: 848, top: 870, width: 160, height: 120 }}>
        {SL_STATES.map((s, i) => <SlBar key={"f" + s} left={18} top={20 + i * 34} look={slFill(s, true)} mark="left" />)}
        {SL_STATES.map((s, i) => <SlBar key={"u" + s} left={88} top={20 + i * 34} look={slTrack(s)} mark="left" />)}
      </div>
      <div style={{ position: "absolute", left: 1028, top: 870, width: 90, height: 120 }}>
        {SL_STATES.map((s, i) => <SlTicks key={s} left={17} top={20 + i * 34} state={s} centerMark />)}
      </div>
    </div>
  );
}
export default MacSliders;
