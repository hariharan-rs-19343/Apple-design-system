import { Button } from './Button.jsx';
import { Grabber2 } from '../navigation/Grabber2.jsx';
import { Title } from './Title.jsx';

// figma node: 5584:61664 _Toolbar - iPad
export function ToolbarIPad2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 402,
      display: "flex",
      flexDirection: "column",
      gap: 5,
      padding: "8px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 40,
          height: 5,
          flexShrink: 0,
        }}>{props.icon1 ?? <Grabber2 mode={"light"} style={{ transform: "scale(1.111, 1)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon2 ?? <Button mode={"light"} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <Title mode={"light"} />}</div>
        <div style={{ position: "relative", height: 44, flexShrink: 0 }}>{props.icon4 ?? <Button text1={"􀆄"} mode={"light"} />}</div>
      </div>
    </div>
  );
}
export default ToolbarIPad2;
