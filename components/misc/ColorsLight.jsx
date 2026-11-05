// figma node: 5584:32148 _Colors/Light
export function ColorsLight(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 600,
      height: 20,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(102,102,102)",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        backgroundColor: "rgb(51,51,51)",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        backgroundColor: "rgb(0,0,0)",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        backgroundColor: "rgb(11,36,137)",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        backgroundColor: "rgb(9,100,180)",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        backgroundColor: "rgb(44,164,98)",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
    </div>
  );
}
export default ColorsLight;
