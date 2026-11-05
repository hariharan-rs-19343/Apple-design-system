// figma node: 56:56617 _Arrow
export function Arrow(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 50,
      height: 10,
      position: "relative",
      ...props.style,
    }}>
      <svg width={29} height={8} viewBox="0 0 29 8" fill="none" style={{
        position: "absolute",
        left: 10,
        top: 0,
        width: 29,
        height: 8,
      }}>
        <path d={"M 0 0.001 C 1.057 0.001 2.113 -0.004 3.17 0.007 C 4.181 0.018 5.313 0.034 6.297 0.404 C 7.36 0.804 8.064 1.504 8.772 2.327 C 9.282 2.919 10.283 4.182 10.771 4.792 C 11.17 5.292 11.951 6.281 12.378 6.759 C 12.915 7.361 13.578 8 14.5 8 C 15.422 8 16.086 7.361 16.622 6.76 C 17.049 6.282 17.83 5.293 18.229 4.793 C 18.716 4.183 19.718 2.92 20.228 2.328 C 20.937 1.504 21.64 0.805 22.703 0.405 C 23.687 0.036 24.819 0.019 25.83 0.008 C 26.887 -0.003 27.943 0.002 29 0.002"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default Arrow;
