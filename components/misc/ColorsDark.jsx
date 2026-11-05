// figma node: 5584:32149 _Colors/Dark
export function ColorsDark(_p = {}) {
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
        backgroundColor: "rgb(153,153,153)",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        backgroundColor: "rgb(204,204,204)",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        backgroundColor: "rgb(249,223,27)",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        backgroundColor: "rgb(253,113,19)",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        backgroundColor: "rgb(211,0,0)",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
    </div>
  );
}
export default ColorsDark;
