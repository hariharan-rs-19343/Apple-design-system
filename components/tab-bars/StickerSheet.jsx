import { ModeLabel } from '../labels/ModeLabel.jsx';

// figma node: 540:189858 _Sticker Sheet (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function StickerSheet(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "dark" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 100,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--backgrounds-primary)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 4px 4px 4px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", width: 55, flexShrink: 0 }}>{props.icon1 ?? <ModeLabel mode={"light"} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 100,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(0,0,0)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 4px 4px 4px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", width: 54, flexShrink: 0 }}>{props.icon1 ?? <ModeLabel mode={"dark"} />}</div>
    </div>
  );
  const __impls = {
    // figma: Mode=Light
    "mode=light": __body0,
    // figma: Mode=Dark
    "mode=dark": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default StickerSheet;
