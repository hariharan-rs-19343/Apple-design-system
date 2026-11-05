// figma node: 4416:6323 _Spinner
// Six dots on a 122pt grid (36pt dots, opacities 1 / .7 / .5 / .3 / .2 / .5), scaled to fill its container.
// Steps one dot per tick, like the watchOS activity indicator.
const DOTS = [
  { x: 5.76, y: 21.5, o: 1 },
  { x: 43, y: 0, o: 0.5 },
  { x: 80.24, y: 21.5, o: 0.2 },
  { x: 80.24, y: 64.5, o: 0.3 },
  { x: 43, y: 86, o: 0.5 },
  { x: 5.76, y: 64.5, o: 0.7 },
];
export function WatchSpinner(_p = {}) {
  const props = _p;
  const animate = props.animate ?? true;
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    if (!animate) return;
    const t = setInterval(() => setStep(s => (s + 1) % 6), 120);
    return () => clearInterval(t);
  }, [animate]);
  return (
    <div className={props.className} style={{ width: "100%", height: "100%", minWidth: 8, minHeight: 8, maxWidth: 122, maxHeight: 122, aspectRatio: "1 / 1", position: "relative", color: "rgb(255,255,255)", margin: "auto", ...props.style }}>
      <svg viewBox="0 0 122 122" width="100%" height="100%" style={{ display: "block" }}>
        {DOTS.map((d, i) => (
          <circle key={i} cx={d.x + 18} cy={d.y + 18} r={18} fill="currentColor" opacity={DOTS[(i - step + 6) % 6].o} />
        ))}
      </svg>
    </div>
  );
}
export default WatchSpinner;
