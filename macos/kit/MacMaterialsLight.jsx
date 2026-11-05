import { MacDesktopWallpaper } from './MacDesktopWallpaper.jsx';

// figma node: 483:8849 Materials - Light
export function MacMaterialsLight(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1080,
      height: 560,
      overflow: "hidden",
      backgroundColor: "rgb(229,229,229)",
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
        colorMode={"light"}
      />
      <div style={{
        position: "absolute",
        left: 850,
        top: 90,
        width: 160,
        height: 410,
        borderRadius: 5,
        backgroundColor: "rgba(246,246,246,0.36)",
        backdropFilter: "blur(30px)",
      }} />
      <div style={{
        position: "absolute",
        left: 650,
        top: 90,
        width: 160,
        height: 410,
        borderRadius: 5,
        backgroundColor: "rgba(246,246,246,0.48)",
        backdropFilter: "blur(30px)",
      }} />
      <div style={{
        position: "absolute",
        left: 450,
        top: 90,
        width: 160,
        height: 410,
        borderRadius: 5,
        backgroundColor: "rgba(246,246,246,0.6)",
        backdropFilter: "blur(30px)",
      }} />
      <div style={{
        position: "absolute",
        left: 250,
        top: 90,
        width: 160,
        height: 410,
        borderRadius: 5,
        backgroundColor: "rgba(246,246,246,0.72)",
        backdropFilter: "blur(30px)",
      }} />
      <div style={{
        position: "absolute",
        left: 50,
        top: 90,
        width: 160,
        height: 410,
        borderRadius: 5,
        backgroundColor: "rgba(246,246,246,0.84)",
        backdropFilter: "blur(30px)",
      }} />
      <span style={{
        position: "absolute",
        left: 850,
        top: 50,
        width: 61,
        height: 16,
        mixBlendMode: "multiply",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(77,77,77)",
      }}>UltraThin</span>
      <span style={{
        position: "absolute",
        left: 650,
        top: 50,
        width: 29,
        height: 16,
        mixBlendMode: "multiply",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(77,77,77)",
      }}>Thin</span>
      <span style={{
        position: "absolute",
        left: 450,
        top: 50,
        width: 53,
        height: 16,
        mixBlendMode: "multiply",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(77,77,77)",
      }}>Medium</span>
      <span style={{
        position: "absolute",
        left: 250,
        top: 50,
        width: 37,
        height: 16,
        mixBlendMode: "multiply",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(77,77,77)",
      }}>Thick</span>
      <span style={{
        position: "absolute",
        left: 50,
        top: 50,
        width: 68,
        height: 16,
        mixBlendMode: "multiply",
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(77,77,77)",
      }}>UltraThick</span>
    </div>
  );
}
export default MacMaterialsLight;
