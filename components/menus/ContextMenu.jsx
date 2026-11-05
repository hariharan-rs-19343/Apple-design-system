// figma node: 125:58750 Context Menu (4 variants) — menu: 492:52296 Menu - iPhone / Mode=Light. Light theme only, Liquid Glass material.
const cmFont = "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, system-ui, sans-serif";
const cmSym = "\"SF Pro\", -apple-system, BlinkMacSystemFont, system-ui, sans-serif";
const cmInk = "rgb(26,26,26)", cmRed = "rgb(255,56,60)", cmOff = "rgb(191,191,191)", cmSub = "rgb(114,114,114)";

const DEFAULT_QUICK = [
  { symbol: "􀋂", label: "Label", selected: true },
  { symbol: "􀋂", label: "Label" },
  { symbol: "􀋂", label: "Destructive", destructive: true },
];
const DEFAULT_ITEMS = [
  { type: "separator" },
  { label: "Label", symbol: "􀓔", shortcut: ["􀆔", "A"] },
  { label: "Disabled Action", symbol: "􀓔", disabled: true },
  { label: "Destructive Action", subtitle: "Subtitle", symbol: "􀓔", destructive: true },
  { type: "separator" },
  { label: "Action", symbol: "􀓔" },
  { type: "separator" },
  { type: "section", label: "Section Title" },
  { type: "submenu", label: "Submenu" },
  { type: "submenu", label: "Submenu" },
  { type: "submenu", label: "Submenu with a long title" },
  { type: "separator" },
  { type: "section", label: "Section Title" },
  { label: "Action", symbol: "􀓔" },
];

function CMQuickAction({ a }) {
  const c = a.destructive ? cmRed : cmInk;
  return (
    <div style={{ position: "relative", flex: "1 1 0", minWidth: 0, height: 57, overflow: "hidden", borderRadius: 20, display: "flex", flexDirection: "column", gap: 5, padding: "6px 4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", backgroundColor: a.selected ? "rgb(237,237,237)" : "transparent" }}>
      <span style={{ alignSelf: "stretch", fontFamily: cmSym, fontWeight: 400, fontSize: 13, textAlign: "center", whiteSpace: "nowrap", lineHeight: "15px", color: c }}>{a.symbol}</span>
      <span style={{ alignSelf: "stretch", fontFamily: cmFont, fontWeight: 510, fontSize: 12, textAlign: "center", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "18px", color: c }}>{a.label}</span>
    </div>
  );
}

function CMItem({ it }) {
  if (it.type === "separator") return (
    <div style={{ height: 21, display: "flex", flexDirection: "column", padding: "0px 8px", justifyContent: "center", boxSizing: "border-box", flexShrink: 0, alignSelf: "stretch" }}>
      <div style={{ height: 1, backgroundColor: "rgb(230,230,230)" }} />
    </div>
  );
  if (it.type === "section") return (
    <div style={{ height: 29, display: "flex", padding: "0px 8px", alignItems: "center", boxSizing: "border-box", flexShrink: 0, alignSelf: "stretch" }}>
      <span style={{ flex: 1, fontFamily: cmFont, fontWeight: 510, fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "15px", letterSpacing: "-0.080px", color: cmOff }}>{it.label}</span>
    </div>
  );
  const c = it.disabled ? cmOff : it.destructive ? cmRed : cmInk;
  const sub = it.type === "submenu";
  const showSym = !sub && it.symbol;
  return (
    <div style={{ minHeight: 40, display: "flex", flexDirection: "row", gap: 6, padding: "0px 8px 0px 6px", alignItems: "center", boxSizing: "border-box", flexShrink: 0, alignSelf: "stretch" }}>
      <div style={{ display: "flex", flexDirection: "row", gap: 8, alignItems: "center", flexGrow: 1, minWidth: 0, alignSelf: "stretch" }}>
        {showSym && <span style={{ width: 28, flexShrink: 0, fontFamily: cmSym, fontWeight: 400, fontSize: 17, textAlign: "center", lineHeight: "22px", color: c }}>{it.symbol}</span>}
        <div style={{ display: "flex", flexDirection: "column", gap: 2, padding: "10px 0px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box", flexGrow: 1, minWidth: 0, alignSelf: "stretch" }}>
          <span style={{ alignSelf: "stretch", fontFamily: cmFont, fontWeight: 400, fontSize: 17, lineHeight: "20px", letterSpacing: "-0.430px", color: c }}>{it.label}</span>
          {it.subtitle && <span style={{ alignSelf: "stretch", fontFamily: cmFont, fontWeight: 400, fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "18px", color: cmSub }}>{it.subtitle}</span>}
        </div>
      </div>
      {it.shortcut && (
        <div style={{ height: 20, display: "flex", flexDirection: "row", gap: 1, alignItems: "center", flexShrink: 0 }}>
          {it.shortcut.map((k, i) => <span key={i} style={{ fontFamily: cmSym, fontWeight: 400, fontSize: 15, textAlign: "center", lineHeight: "20px", color: cmSub }}>{k}</span>)}
        </div>
      )}
      {sub && <span style={{ width: 14, flexShrink: 0, fontFamily: cmSym, fontWeight: 700, fontSize: 15, textAlign: "center", lineHeight: "20px", color: c }}>􀆊</span>}
    </div>
  );
}

export function ContextMenuPanel({ width = 250, quickActions = DEFAULT_QUICK, items = DEFAULT_ITEMS, style }) {
  // Liquid Glass - Regular - Medium (5584:31857), Mode=Light: 60% rgb(245,245,245) fill, frost 12, shadow 0 8 40 12%.
  return (
    <div style={{ position: "relative", width, display: "flex", flexDirection: "column", padding: "10px 0px", alignItems: "center", boxSizing: "border-box", borderRadius: 34, backgroundColor: "rgba(245,245,245,0.6)", backdropFilter: "blur(calc(var(--liquid-glass-frost-medium, 12) * 1px)) saturate(180%)", WebkitBackdropFilter: "blur(calc(var(--liquid-glass-frost-medium, 12) * 1px)) saturate(180%)", boxShadow: "0px 8px 40px 0px rgba(0,0,0,0.12), inset 1px 1px 0px 0px rgba(255,255,255,0.7), inset -1px -1px 0px 0px rgba(255,255,255,0.35)", ...style }}>
      {quickActions && quickActions.length > 0 && (
        <div style={{ height: 56, display: "flex", flexDirection: "row", gap: 6, padding: "0px 10px", alignItems: "center", boxSizing: "border-box", flexShrink: 0, alignSelf: "stretch" }}>
          {quickActions.map((a, i) => <CMQuickAction key={i} a={a} />)}
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", padding: "0px 16px", alignItems: "flex-start", boxSizing: "border-box", flexShrink: 0, alignSelf: "stretch" }}>
        {items.map((it, i) => <CMItem key={i} it={it} />)}
      </div>
    </div>
  );
}

// Figma: each variant frame is 351×160 (the content area); the menu sits outside it at these offsets.
const CM_LAYOUT = {
  "vertical|leading": { left: 0, top: 177.5, width: 250 },
  "vertical|trailing": { left: 113, top: 178.5, width: 238 },
  "horizontal (ipad only)|trailing": { left: 389, top: 0, width: 228 },
  "horizontal (ipad only)|leading": { left: -266, top: 0, width: 228 },
};

export function ContextMenu(_p = {}) {
  const props = { ..._p, alignment: _p.alignment ?? "vertical", side: _p.side ?? "trailing" };
  const L = CM_LAYOUT[props.alignment + "|" + props.side] || CM_LAYOUT["vertical|trailing"];
  return (
    <div className={props.className} style={{ position: "relative", width: 351, height: 160, ...props.style }}>
      <div style={{ position: "absolute", left: 0, top: -0.5, width: 351, height: 161, borderRadius: 30, backgroundColor: "rgb(255,255,255)", boxShadow: "0px 0px 32px 0px rgba(0,0,0,0.2)", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <span style={{ fontFamily: cmFont, fontWeight: 400, fontSize: 17, textAlign: "center", whiteSpace: "nowrap", lineHeight: "22px", letterSpacing: "-0.430px", color: "rgba(0,0,0,0.6)" }}>{props.text1 ?? "Content Area"}</span>
      </div>
      <ContextMenuPanel width={L.width} quickActions={props.quickActions} items={props.items}
        style={{ position: "absolute", left: L.left, top: L.top, height: 578 }} />
    </div>
  );
}
export default ContextMenu;
