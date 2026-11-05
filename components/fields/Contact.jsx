import { SystemIcons } from '../app-icons/SystemIcons.jsx';

// figma node: 127:58423 _Contact (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "people=" + __venc(p.people);

export function Contact(_p = {}) {
  const props = { ..._p, people: _p.people ?? "1", firstName: _p.firstName ?? "First", lastName: _p.lastName ?? "Last", names: _p.names ?? "First and First", ofPeople: _p.ofPeople ?? "2 People" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 78,
      height: 104,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 75,
        width: 78,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 10,
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "13px",
          letterSpacing: "0.060px",
          color: "var(--labels-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.names}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "15px",
          letterSpacing: "0.060px",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.ofPeople}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 4,
        top: -1,
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: "rgba(120,120,128,0.16)",
      }}>
        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
          position: "absolute",
          left: 39,
          top: 39,
          width: 22,
          height: 22,
          overflow: "hidden",
          borderRadius: 100,
        }}>
          <path d={"M 0 11 C 0 4.925 4.925 0 11 0 L 11 0 C 17.075 0 22 4.925 22 11 L 22 11 C 22 17.075 17.075 22 11 22 L 11 22 C 4.925 22 0 17.075 0 11 L 0 11 Z"} fill="rgb(174,174,178)" fillRule="nonzero" />
        </svg>
        <svg width={37.333} height={37.333} viewBox="0 0 37.333 37.333" fill="none" style={{
          position: "absolute",
          left: 9,
          top: 9,
          width: 37.333,
          height: 37.333,
          overflow: "hidden",
          borderRadius: 100,
        }}>
          <path d={"M 0 18.667 C 0 8.357 8.357 0 18.667 0 L 18.667 0 C 28.976 0 37.333 8.357 37.333 18.667 L 37.333 18.667 C 37.333 28.976 28.976 37.333 18.667 37.333 L 18.667 37.333 C 8.357 37.333 0 28.976 0 18.667 L 0 18.667 Z"} fill="rgb(174,174,178)" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
          position: "absolute",
          left: 54,
          top: 49,
          width: 20,
          height: 20,
        }}>{props.icon1 ?? <SystemIcons icon={"messages"} mode={"default"} style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 78,
      height: 104,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 75,
        width: 78,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "15px",
          letterSpacing: "0.060px",
          color: "var(--labels-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.firstName}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "15px",
          letterSpacing: "0.060px",
          color: "var(--labels-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.lastName}</span>
      </div>
      <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
        position: "absolute",
        left: 4,
        top: 0,
        width: 70,
        height: 70,
        overflow: "hidden",
        borderRadius: 100,
      }}>
        <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 35 0 C 54.33 0 70 15.67 70 35 L 70 35 C 70 54.33 54.33 70 35 70 L 35 70 C 15.67 70 0 54.33 0 35 L 0 35 Z"} fill="rgb(174,174,178)" fillRule="nonzero" />
      </svg>
      <div style={{
          position: "absolute",
          left: 54,
          top: 50,
          width: 20,
          height: 20,
        }}>{props.icon1 ?? <SystemIcons icon={"messages"} mode={"default"} style={{ transform: "scale(0.303, 0.303)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: People=2
    "people=2": __body0,
    // figma: People=1
    "people=1": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Contact;
