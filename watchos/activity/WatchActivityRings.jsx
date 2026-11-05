// figma node: 6556:17727 Activity Rings
// 66×66 black disc; three 7px rings (r 28.5 / 20.5 / 12.5, 1px gaps) over 14% tracks.
const RINGS = [
  { key: "move", r: 28.5, track: "rgba(225,1,21,0.14)", from: "rgb(225,1,21)", to: "rgb(255,48,140)" },
  { key: "exercise", r: 20.5, track: "rgba(58,221,0,0.14)", from: "rgb(58,221,0)", to: "rgb(166,255,0)" },
  { key: "stand", r: 12.5, track: "rgba(0,187,225,0.14)", from: "rgb(0,187,225)", to: "rgb(0,255,246)" },
];
let __uid = 0;
export function WatchActivityRings(_p = {}) {
  const props = _p;
  const size = props.size ?? 66;
  const vals = { move: props.move ?? 0.75, exercise: props.exercise ?? 0.6, stand: props.stand ?? 0.85 };
  const id = React.useMemo(() => "war" + (++__uid), []);
  const W = 7;
  return (
    <div className={props.className} style={{ width: size, height: size, borderRadius: 120, backgroundColor: "rgb(0,0,0)", position: "relative", overflow: "hidden", ...props.style }}>
      <svg width={size} height={size} viewBox="0 0 66 66" style={{ display: "block" }}>
        <defs>
          {RINGS.map(g => (
            <linearGradient key={g.key} id={id + g.key} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={g.from} />
              <stop offset="1" stopColor={g.to} />
            </linearGradient>
          ))}
        </defs>
        {RINGS.map(g => {
          const v = Math.max(0, Math.min(1, vals[g.key]));
          const c = 2 * Math.PI * g.r;
          return (
            <g key={g.key}>
              <circle cx="33" cy="33" r={g.r} fill="none" stroke={g.track} strokeWidth={W} />
              {v > 0 && (
                <circle cx="33" cy="33" r={g.r} fill="none" stroke={`url(#${id + g.key})`} strokeWidth={W} strokeLinecap="round"
                  strokeDasharray={`${c * v} ${c}`} transform="rotate(-90 33 33)" />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
export default WatchActivityRings;
