// figma node: 480:781 _Search Fields (12 variants)
// Field background drawn with box-shadows so it stretches to any size without distorting the corner radius.
const LOOKS = {
  "content area": {
    idle: { background: "rgb(255,255,255)", boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.08), 0px 0px 1px 0px rgba(0,0,0,0.08)" },
    focused: { background: "rgb(255,255,255)", boxShadow: "0px 0px 0px 1px rgba(0,122,255,0.3), 0px 0px 0px 3.5px rgba(0,122,255,0.25)" },
    disabled: { background: "rgba(255,255,255,0.5)", boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.04)" },
  },
  "content area form": {
    idle: { background: "rgb(255,255,255)", boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.08), 0px 0px 6px 0px rgba(0,0,0,0.03)" },
    focused: { background: "rgb(255,255,255)", boxShadow: "0px 0px 0px 1px rgba(0,122,255,0.3), 0px 0px 0px 3.5px rgba(0,122,255,0.25), 0px 0px 6px 0px rgba(0,0,0,0.03)" },
    disabled: { background: "rgba(255,255,255,0.5)", boxShadow: "0px 0px 6px 0px rgba(0,0,0,0.02)" },
  },
  "over-glass": {
    idle: { background: "rgb(255,255,255)", boxShadow: "0px 0px 6px 0px rgba(0,0,0,0.03), inset 0 0 0 0.5px rgba(0,0,0,0.06)" },
    focused: { background: "rgb(230,230,230)", boxShadow: "0px 0px 0px 1px rgba(0,136,255,0.3), 0px 0px 0px 3.5px rgba(0,136,255,0.25), 0px 0px 6px 0px rgba(0,0,0,0.03)" },
    disabled: { background: "rgba(255,255,255,0.5)", boxShadow: "0px 0px 6px 0px rgba(0,0,0,0.02)" },
  },
  "over-glass form": {
    idle: { background: "rgb(255,255,255)", boxShadow: "0px 0px 6px 0px rgba(0,0,0,0.03), inset 0 0 0 0.5px rgba(0,0,0,0.06)" },
    focused: { background: "rgb(255,255,255)", boxShadow: "0px 0px 0px 1px rgba(0,122,255,0.3), 0px 0px 0px 3.5px rgba(0,122,255,0.25), 0px 0px 6px 0px rgba(0,0,0,0.03)" },
    disabled: { background: "rgba(255,255,255,0.5)", boxShadow: "0px 0px 6px 0px rgba(0,0,0,0.02)" },
  },
};
export function MacSearchFields(_p = {}) {
  const props = { ..._p, state: _p.state ?? "idle", context: _p.context ?? "content area" };
  const ctx = LOOKS[props.context] ?? LOOKS["content area"];
  const look = ctx[props.state] ?? ctx.idle;
  return (
    <div className={props.className} style={{
      width: 120,
      height: 24,
      borderRadius: 1000,
      boxSizing: "border-box",
      position: "relative",
      ...look,
      ...props.style,
    }}>{props.children}</div>
  );
}
export default MacSearchFields;
