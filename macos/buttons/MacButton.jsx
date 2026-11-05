const FONT = "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif";
const RADIUS = "var(--mac-ios-button-radius, 8px)";

const SIZES = {
  small: { pad: "8px 16px", glassH: 34, font: 15, sym: 13, gap: 5 },
  medium: { pad: "10px 20px", glassH: 40, font: 17, sym: 15, gap: 5 },
  large: { pad: "14px 28px", glassH: 52, font: 19, sym: 17, gap: 6 },
};

function palette(variant, mode, disabled) {
  const dark = mode === "dark";
  if (disabled) {
    const bg = variant === "borderless" || variant === "destructiveBorderless" ? "transparent" : (dark ? "rgba(118,118,128,0.24)" : "rgba(116,116,128,0.08)");
    return { bg, fg: dark ? "rgba(235,235,245,0.3)" : "rgba(60,60,67,0.18)" };
  }
  switch (variant) {
    case "glass":
      return dark
        ? { bg: "rgb(18,18,18)", fg: "rgb(245,245,245)", shadow: "0 8px 40px 0 rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.08)" }
        : { bg: "rgb(247,247,247)", fg: "rgb(26,26,26)", shadow: "0 8px 40px 0 rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.9), inset 0 -1px 1px rgba(0,0,0,0.03)" };
    case "glassTinted":
      return { bg: dark ? "rgb(0,145,255)" : "rgb(0,145,255)", fg: "#fff", shadow: "0 8px 40px 0 rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.35), inset 0 -1px 1px rgba(0,0,0,0.06)", weight: 590 };
    case "prominent":
      return { bg: dark ? "rgb(10,132,255)" : "rgb(0,122,255)", fg: "#fff" };
    case "secondary":
      return { bg: dark ? "rgba(118,118,128,0.24)" : "rgba(116,116,128,0.08)", fg: dark ? "rgb(10,132,255)" : "rgb(0,122,255)" };
    case "borderless":
      return { bg: "transparent", fg: dark ? "rgb(10,132,255)" : "rgb(0,122,255)", tight: true };
    case "destructive":
      return { bg: dark ? "rgba(255,66,69,0.24)" : "rgba(255,56,60,0.14)", fg: dark ? "rgb(255,66,69)" : "rgb(255,56,60)" };
    case "destructiveBorderless":
      return { bg: "transparent", fg: dark ? "rgb(255,66,69)" : "rgb(255,56,60)", tight: true };
    default:
      return palette("prominent", mode, false);
  }
}

export function MacButton(_p = {}) {
  const variant = _p.variant ?? "prominent";
  const size = SIZES[_p.size ?? "medium"] ?? SIZES.medium;
  const mode = _p.mode ?? "light";
  const disabled = !!_p.disabled;
  const label = _p.label ?? "Label";
  const symbol = _p.symbol;
  const iconOnly = !!_p.iconOnly;
  const glass = variant === "glass" || variant === "glassTinted";
  const c = palette(variant, mode, disabled);
  const [pressed, setPressed] = React.useState(false);

  const pad = iconOnly ? 0 : glass ? `0 ${parseInt(size.pad.split(" ")[1]) }px` : c.tight ? size.pad.replace(/\d+px$/, (m) => `${Math.round(parseInt(m) * 0.6)}px`) : size.pad;
  const sq = glass ? size.glassH : size.font * 2 + 10;

  return (
    <button
      type="button"
      className={_p.className}
      disabled={disabled}
      onClick={_p.onClick}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      style={{
        appearance: "none",
        border: "none",
        margin: 0,
        width: iconOnly ? sq : "fit-content",
        height: glass || iconOnly ? sq : undefined,
        padding: pad,
        borderRadius: _p.shape === "circle" ? "50%" : RADIUS,
        background: c.bg,
        boxShadow: c.shadow,
        display: "inline-flex",
        flexDirection: "row",
        gap: size.gap,
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        cursor: disabled ? "default" : "pointer",
        opacity: pressed && !disabled ? 0.7 : 1,
        transition: "opacity 120ms ease",
        fontFamily: FONT,
        ..._p.style,
      }}
    >
      {(symbol || iconOnly) && (
        <span style={{ fontFamily: FONT, fontSize: iconOnly ? size.font + 2 : size.sym, fontWeight: 590, lineHeight: 1, color: c.fg, whiteSpace: "nowrap" }}>{symbol ?? "􀆅"}</span>
      )}
      {!iconOnly && (
        <span style={{ fontFamily: FONT, fontSize: size.font, fontWeight: c.weight ?? 510, lineHeight: "100%", color: c.fg, whiteSpace: "nowrap" }}>{label}</span>
      )}
    </button>
  );
}
export default MacButton;
