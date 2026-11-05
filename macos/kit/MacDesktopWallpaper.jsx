// figma node: 121:13310 Desktop Wallpaper (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "colorMode=" + __venc(p.colorMode);

export function MacDesktopWallpaper(_p = {}) {
  const props = { ..._p, colorMode: _p.colorMode ?? "dark" };
  const __body = (mode) => () => (
    <div className={["mac-wallpaper-" + mode, props.className].filter(Boolean).join(" ")} style={{
      width: 1512,
      height: 982,
      position: "relative",
      ...props.style,
    }}>{props.children}</div>
  );
  const __body0 = __body("dark");
  const __body1 = __body("light");
  const __impls = {
    // figma: Color Mode=Dark
    "colorMode=dark": __body0,
    // figma: Color Mode=Light
    "colorMode=light": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default MacDesktopWallpaper;
