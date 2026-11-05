import { ToolbarTopSheet } from './ToolbarTopSheet.jsx';

// figma node: 5719:30145 Sheet - iPad
export function SheetIPad(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 936,
      height: 852,
      borderRadius: 38,
      backgroundColor: "var(--backgrounds-primary-elevated-2)",
      boxShadow: "0px 15px 75px 0px rgba(0,0,0,0.18)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <ToolbarTopSheet
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={"light"}
        style2={"default"}
      />
    </div>
  );
}
export default SheetIPad;
