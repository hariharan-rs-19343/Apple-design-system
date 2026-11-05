import { SectionHeader } from '../sidebar-items/SectionHeader.jsx';

// figma node: 131:66427 Section Header
export function SectionHeader2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 260,
      display: "flex",
      flexDirection: "row",
      padding: "2px 12px 10px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <SectionHeader
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        mode={"light"}
      />
    </div>
  );
}
export default SectionHeader2;
