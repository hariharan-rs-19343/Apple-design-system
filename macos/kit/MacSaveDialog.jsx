// figma node: 121:11578 Save Dialog — rebuilt by hand from the kit's exact values (Small 390×284, Large 800×448).
const SD_FONT = "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", sans-serif";
const SD_INK = "rgba(0,0,0,0.85)";
const sdText = (size, weight, color, extra) => ({ fontFamily: SD_FONT, fontSize: size, fontWeight: weight, color: color ?? SD_INK, whiteSpace: "nowrap", ...extra });

function SdWindow({ width, height, children, style }) {
  return (
    <div style={{ position: "relative", width, height, borderRadius: 26, overflow: "hidden", backgroundColor: "rgb(255,255,255)", boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.23), 0px 16px 48px 0px rgba(0,0,0,0.35)", boxSizing: "border-box", ...style }}>{children}</div>
  );
}
function SdLabel({ children, width }) {
  return <div style={{ height: 24, width, display: "flex", alignItems: "center", justifyContent: "flex-end", flexShrink: 0, ...sdText(13, 510, "rgba(0,0,0,0.5)", { letterSpacing: "-0.02em" }) }}>{children}</div>;
}
function SdField({ value, focused, width }) {
  return (
    <div style={{ position: "relative", height: 24, width, flex: width ? "none" : 1, minWidth: 0, borderRadius: 6, backgroundColor: "rgb(255,255,255)", boxShadow: focused ? "0 0 0 1px rgba(0,136,255,0.55), 0 0 0 3.5px rgba(0,136,255,0.22)" : "0px 0px 0px 1px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", padding: "0px 4px 0px 8px", boxSizing: "border-box" }}>
      {value != null && <span style={{ ...sdText(13, 510, "rgb(26,26,26)", { lineHeight: "16px" }), overflow: "hidden", textOverflow: "ellipsis" }}>{value}</span>}
      {focused && <span style={{ width: 2, height: 18, borderRadius: 100, backgroundColor: "rgb(0,136,255)", flexShrink: 0 }} />}
    </div>
  );
}
function SdPopUp({ label, width }) {
  return (
    <div style={{ height: 24, width, flex: width ? "none" : 1, minWidth: 0, borderRadius: 6, backgroundColor: "rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: 8, padding: "0px 12px 0px 12px", boxSizing: "border-box" }}>
      <span style={{ flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", ...sdText(13, 510, SD_INK, { lineHeight: "16px" }) }}>{label}</span>
      <span style={sdText(11, 700, SD_INK, { lineHeight: "16px" })}>􀆏</span>
    </div>
  );
}
function SdIconButton({ glyph, width = 24 }) {
  return <div style={{ width, height: 24, flexShrink: 0, borderRadius: 6, backgroundColor: "rgba(0,0,0,0.05)", display: "flex", alignItems: "center", justifyContent: "center", ...sdText(10, 700, SD_INK, { lineHeight: "16px" }) }}>{glyph}</div>;
}
function SdButton({ label, kind = "neutral", width }) {
  const look = kind === "default" ? { backgroundColor: "rgb(0,136,255)", color: "rgb(255,255,255)" } : kind === "destructive" ? { backgroundColor: "rgba(255,56,60,0.23)", color: "rgb(255,56,60)" } : { backgroundColor: "rgba(0,0,0,0.05)", color: SD_INK };
  return <div style={{ width, height: 24, flexShrink: 0, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", padding: "0px 16px", boxSizing: "border-box", ...sdText(13, 510, look.color, { lineHeight: "16px" }), backgroundColor: look.backgroundColor }}>{label}</div>;
}
function SdSegmented({ items }) {
  return (
    <div style={{ height: 24, flexShrink: 0, borderRadius: 6, backgroundColor: "rgba(0,0,0,0.05)", display: "flex", alignItems: "center", padding: "0px 2px", boxSizing: "border-box" }}>
      {items.map((g, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center" }}>
          {i > 0 && <span style={{ width: 1, height: 14, backgroundColor: "rgba(0,0,0,0.1)" }} />}
          <span style={{ minWidth: 20, padding: "0px 4px", textAlign: "center", ...sdText(g.small ? 10 : 13, g.small ? 700 : 510, g.dim ? "rgba(0,0,0,0.25)" : SD_INK, { lineHeight: "16px" }) }}>{g.glyph}</span>
        </div>
      ))}
    </div>
  );
}
function SdSidebarItem({ glyph, label, selected }) {
  return (
    <div style={{ height: 24, display: "flex", alignItems: "center", padding: "0px 6px", boxSizing: "border-box" }}>
      <div style={{ flex: 1, height: 24, borderRadius: 8, backgroundColor: selected ? "rgba(0,0,0,0.11)" : "transparent", display: "flex", alignItems: "center", gap: 6, padding: "4px 10px 4px 8px", boxSizing: "border-box", minWidth: 0 }}>
        <span style={{ width: 18, flexShrink: 0, textAlign: "center", ...sdText(11, 510, selected ? "rgb(0,122,255)" : SD_INK, { lineHeight: "16px" }) }}>{glyph}</span>
        <span style={{ flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", ...sdText(11, 510, SD_INK, { lineHeight: "16px" }) }}>{label}</span>
      </div>
    </div>
  );
}
function SdSection({ title }) {
  return <div style={{ height: 34, padding: "15px 12px 5px 18px", boxSizing: "border-box", ...sdText(11, 700, "rgba(0,0,0,0.5)", { lineHeight: "14px" }) }}>{title}</div>;
}
const SD_COLS = [360, 161, 143];
function SdHeaderRow() {
  const cells = ["Name", "Label", "Label"];
  return (
    <div style={{ height: 28, display: "flex", borderBottom: "1px solid rgba(0,0,0,0.1)", boxSizing: "border-box" }}>
      {cells.map((c, i) => (
        <div key={i} style={{ width: SD_COLS[i], flexShrink: 0, display: "flex", alignItems: "center", gap: 6, padding: i === 0 ? "0px 12px 0px 44px" : "0px 8px", boxSizing: "border-box", borderLeft: i ? "1px solid rgba(0,0,0,0.1)" : "none" }}>
          <span style={{ flex: 1, ...sdText(11, i === 0 ? 700 : 510, i === 0 ? SD_INK : "rgba(0,0,0,0.5)", { lineHeight: "14px" }) }}>{c}</span>
          {i === 0 && <span style={sdText(9, 700, "rgba(0,0,0,0.5)")}>􀆈</span>}
        </div>
      ))}
    </div>
  );
}
function SdRow({ label, alt }) {
  return (
    <div style={{ height: 20, display: "flex", alignItems: "center", margin: "0px 8px", borderRadius: 6, backgroundColor: alt ? "rgba(0,0,0,0.03)" : "transparent" }}>
      <div style={{ width: SD_COLS[0] - 8, flexShrink: 0, display: "flex", alignItems: "center", gap: 6, padding: "0px 0px 0px 8px", boxSizing: "border-box" }}>
        <span style={{ width: 12, textAlign: "center", ...sdText(10, 700, "rgba(0,0,0,0.5)") }}>􀆊</span>
        <span style={{ width: 13, height: 11, borderRadius: 2, backgroundColor: "rgb(205,222,240)", flexShrink: 0 }} />
        <span style={sdText(13, 510, SD_INK, { lineHeight: "16px" })}>{label}</span>
      </div>
      <div style={{ width: SD_COLS[1], flexShrink: 0, padding: "0px 8px", boxSizing: "border-box", ...sdText(13, 510, "rgba(0,0,0,0.5)", { lineHeight: "16px" }) }}>Label</div>
      <div style={{ flex: 1, padding: "0px 8px", boxSizing: "border-box", ...sdText(13, 510, "rgba(0,0,0,0.5)", { lineHeight: "16px" }) }}>Label</div>
    </div>
  );
}

export function MacSaveDialogSmall(props = {}) {
  return (
    <SdWindow width={390} height={284} style={props.style}>
      <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: 20, padding: 20, boxSizing: "border-box" }}>
        <div style={{ height: 200, display: "flex", gap: 6, padding: "0px 21px 0px 11px", boxSizing: "border-box" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-end", gap: 6 }}>
            <SdLabel>Save As:</SdLabel><SdLabel>Tags:</SdLabel><SdLabel>File Format:</SdLabel><SdLabel>Where:</SdLabel>
          </div>
          <div style={{ width: 229, flexShrink: 0, display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ height: 80, display: "flex", flexDirection: "column", justifyContent: "center", gap: 6 }}>
              <span style={sdText(13, 700, SD_INK, { lineHeight: "16px", whiteSpace: "normal" })}>{props.title ?? "Do you want to keep this new document “Untitled”?"}</span>
              <span style={sdText(11, 400, SD_INK, { lineHeight: "14px", whiteSpace: "normal" })}>{props.description ?? "You can choose to save your changes, or delete this document immediately. You can’t undo this action."}</span>
            </div>
            <SdField value={props.fileName ?? "Untitled"} focused />
            <SdField />
            <div style={{ display: "flex" }}><SdPopUp label="Rich Text Document" /></div>
            <div style={{ display: "flex", gap: 8 }}><SdPopUp label="􀈕 Desktop" /><SdIconButton glyph="􀆈" /></div>
          </div>
        </div>
        <div style={{ height: 24, display: "flex", alignItems: "center", gap: 8 }}>
          <SdButton label="Delete" kind="destructive" width={72} />
          <div style={{ flex: 1 }} />
          <SdButton label="Cancel" width={74} />
          <SdButton label="Save" kind="default" width={74} />
        </div>
      </div>
    </SdWindow>
  );
}

export function MacSaveDialogLarge(props = {}) {
  const rows = ["Label", "Label", "Label", "Label", "Label"];
  return (
    <SdWindow width={800} height={448} style={props.style}>
      <div style={{ height: "100%", display: "flex" }}>
        <div style={{ width: 136, flexShrink: 0, padding: 8, boxSizing: "border-box", display: "flex" }}>
          <div style={{ flex: 1, borderRadius: 18, background: "rgba(246,246,246,0.72)", backdropFilter: "blur(24px) saturate(180%)", WebkitBackdropFilter: "blur(24px) saturate(180%)", boxShadow: "0 8px 40px rgba(0,0,0,0.12), inset 0 0 0 0.5px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.9)", padding: "10px 0px", boxSizing: "border-box", overflow: "hidden" }}>
            <SdSidebarItem glyph="􀈕" label="Text Edit" />
            <SdSidebarItem glyph="􀐫" label="Recents" />
            <SdSidebarItem glyph="􀈝" label="Shared" />
            <SdSection title="Favorites" />
            <SdSidebarItem glyph="􀣰" label="Desktop" selected />
            <SdSidebarItem glyph="􀈷" label="Documents" />
            <SdSidebarItem glyph="􀁸" label="Downloads" />
            <SdSection title="Locations" />
            <SdSidebarItem glyph="􀇂" label="iCloud Drive" />
            <SdSidebarItem glyph="􀎞" label="janeappleseed" />
            <SdSidebarItem glyph="􀥾" label="Macintosh HD" />
            <SdSection title="Tags" />
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", padding: "20px 0px 0px 0px", boxSizing: "border-box" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 13, padding: "0px 20px 12px 12px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}><div style={{ flex: "0 0 193px", display: "flex", justifyContent: "flex-end" }}><SdLabel>Save As:</SdLabel></div><SdField value={props.fileName ?? "Untitled"} focused width={229} /></div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}><div style={{ flex: "0 0 193px", display: "flex", justifyContent: "flex-end" }}><SdLabel>Tags:</SdLabel></div><SdField width={229} /></div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}><div style={{ flex: "0 0 193px", display: "flex", justifyContent: "flex-end" }}><SdLabel>File Format:</SdLabel></div><SdPopUp label="Rich Text Document" width={229} /></div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <SdSegmented items={[{ glyph: "􀆉" }, { glyph: "􀆊", dim: true }]} />
              <SdSegmented items={[{ glyph: "􀏭" }, { glyph: "􀆈", small: true }]} />
              <SdSegmented items={[{ glyph: "􀇷" }, { glyph: "􀆈", small: true }]} />
              <SdPopUp label="􀈕 Desktop" width={196} />
              <SdIconButton glyph="􀆈" />
              <div style={{ flex: 1 }} />
              <div style={{ width: 168, height: 24, flexShrink: 0, borderRadius: 100, backgroundColor: "rgb(255,255,255)", boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", gap: 4, padding: "0px 8px", boxSizing: "border-box" }}>
                <span style={sdText(11, 510, "rgba(0,0,0,0.85)")}>􀊫</span>
                <span style={sdText(13, 510, "rgba(0,0,0,0.85)", { lineHeight: "16px" })}>Search</span>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
            <SdHeaderRow />
            <div style={{ paddingTop: 4, display: "flex", flexDirection: "column" }}>{rows.map((r, i) => <SdRow key={i} label={r} alt={i % 2 === 1} />)}</div>
          </div>
          <div style={{ height: 66, flexShrink: 0, borderTop: "1px solid rgba(0,0,0,0.1)", display: "flex", alignItems: "center", gap: 8, padding: "0px 17px", boxSizing: "border-box" }}>
            <SdButton label="New Document" width={128} />
            <SdButton label="Show Options" width={120} />
            <div style={{ flex: 1 }} />
            <SdButton label="Cancel" width={76} />
            <SdButton label="Save" kind="default" width={63} />
          </div>
        </div>
      </div>
    </SdWindow>
  );
}

export function MacSaveDialog(_p = {}) {
  const props = { ..._p, size: _p.size ?? "board" };
  if (props.size === "small") return <MacSaveDialogSmall {...props} />;
  if (props.size === "large") return <MacSaveDialogLarge {...props} />;
  return (
    <div className={props.className} style={{ position: "relative", width: 1400, height: 600, borderRadius: 2, backgroundColor: "var(--mac-section-fill, rgb(245,245,245))", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)", ...props.style }}>
      <MacSaveDialogSmall style={{ position: "absolute", left: 50, top: 50 }} />
      <MacSaveDialogLarge style={{ position: "absolute", left: 540, top: 50 }} />
      <div style={{ position: "absolute", left: 50, top: 460, width: 100, height: 100, borderRadius: 26, backgroundColor: "rgba(0,0,0,0.2)" }} />
    </div>
  );
}
export default MacSaveDialog;
