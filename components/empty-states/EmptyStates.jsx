// figma node: 5583:24408 Empty States (3 variants)
const ES_FONT = "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif";

function esIsPUA(s) {
  const cp = s ? s.codePointAt(0) : 0;
  return !s || cp >= 0xE000 && cp <= 0xF8FF || cp >= 0xF0000;
}

function EsGlyph({ symbol, size }) {
  if (!esIsPUA(symbol)) {
    return <span style={{ fontFamily: ES_FONT, fontWeight: 590, fontSize: size, lineHeight: 1, color: "var(--accents-blue)" }}>{symbol}</span>;
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--accents-blue)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5 L20.5 20.5" />
    </svg>
  );
}

export function EmptyStates(_p = {}) {
  const type = _p.type ?? "title and subtitle";
  const message = _p.message ?? "Message";
  const description = _p.description ?? "Description";
  const symbol = _p.symbol ?? "􀋃";
  const action = _p.actionLabel ?? "Primary Action";

  let icon = null;
  if (type === "large symbol") {
    icon = <div style={{ height: 48, display: "flex", alignItems: "center", justifyContent: "center" }}><EsGlyph symbol={symbol} size={44} /></div>;
  } else if (type === "symbol in circle") {
    icon = (
      <div style={{ width: 56, height: 56, borderRadius: "50%", background: "color-mix(in srgb, var(--accents-blue) 15%, transparent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <EsGlyph symbol={symbol} size={26} />
      </div>
    );
  }

  return (
    <div className={_p.className} style={{
      width: 402, height: 874, borderRadius: 44, background: "var(--backgrounds-primary, #fff)",
      display: "flex", flexDirection: "column", alignItems: "stretch",
      padding: "0 34px 36px", boxSizing: "border-box", position: "relative", overflow: "hidden",
      ..._p.style,
    }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: "0 16px" }}>
        {icon}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, textAlign: "center", fontFamily: ES_FONT }}>
          <span style={{ fontWeight: 700, fontSize: 22, lineHeight: "28px", letterSpacing: "-0.26px", color: "var(--labels-primary)", textWrap: "balance" }}>{message}</span>
          <span style={{ fontWeight: 400, fontSize: 17, lineHeight: "22px", letterSpacing: "-0.43px", color: "var(--labels-secondary, rgba(60,60,67,0.6))", textWrap: "pretty" }}>{description}</span>
        </div>
      </div>
      <button type="button" onClick={_p.onAction} style={{
        height: 52, borderRadius: 1000, border: 0, background: "var(--accents-blue)", color: "#fff",
        fontFamily: ES_FONT, fontWeight: 590, fontSize: 17, letterSpacing: "-0.43px", cursor: "pointer",
        boxShadow: "0 8px 40px rgba(0,0,0,0.12)", flexShrink: 0,
      }}>{action}</button>
    </div>
  );
}
export default EmptyStates;
