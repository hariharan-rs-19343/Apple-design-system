import { MacDesktopWallpaper } from './MacDesktopWallpaper.jsx';

// figma node: 536:11067 Materials - Dark
export function MacMaterialsDark(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1080,
      height: 560,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <MacDesktopWallpaper
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1512,
          height: 982,
        }}
        colorMode={"dark"}
      />
      <div style={{
        position: "absolute",
        left: 850,
        top: 90,
        width: 160,
        height: 410,
        borderRadius: 5,
        backgroundColor: "rgba(0,0,0,0.1)",
        backdropFilter: "blur(30px)",
      }} />
      <div style={{
        position: "absolute",
        left: 650,
        top: 90,
        width: 160,
        height: 410,
        borderRadius: 5,
        backgroundColor: "rgba(0,0,0,0.2)",
        backdropFilter: "blur(30px)",
      }} />
      <div style={{
        position: "absolute",
        left: 450,
        top: 90,
        width: 160,
        height: 410,
        borderRadius: 5,
        backgroundColor: "rgba(0,0,0,0.29)",
        backdropFilter: "blur(30px)",
      }} />
      <div style={{
        position: "absolute",
        left: 250,
        top: 90,
        width: 160,
        height: 410,
        borderRadius: 5,
        backgroundColor: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(30px)",
      }} />
      <div style={{
        position: "absolute",
        left: 50,
        top: 90,
        width: 160,
        height: 410,
        borderRadius: 5,
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(30px)",
      }} />
      <span style={{
        position: "absolute",
        left: 850,
        top: 50,
        width: 61,
        height: 16,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(124,124,124)",
      }}>UltraThin</span>
      <span style={{
        position: "absolute",
        left: 650,
        top: 50,
        width: 29,
        height: 16,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(124,124,124)",
      }}>Thin</span>
      <span style={{
        position: "absolute",
        left: 450,
        top: 50,
        width: 53,
        height: 16,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(124,124,124)",
      }}>Medium</span>
      <span style={{
        position: "absolute",
        left: 250,
        top: 50,
        width: 37,
        height: 16,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(124,124,124)",
      }}>Thick</span>
      <span style={{
        position: "absolute",
        left: 50,
        top: 50,
        width: 68,
        height: 16,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(124,124,124)",
      }}>UltraThick</span>
    </div>
  );
}
export default MacMaterialsDark;
