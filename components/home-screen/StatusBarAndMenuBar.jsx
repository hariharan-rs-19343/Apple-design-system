import { MenuBarItem } from '../fields/MenuBarItem.jsx';
import { WindowControls } from '../surfaces/WindowControls.jsx';

// figma node: 5413:10006 Status bar and Menu bar- iPad (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function StatusBarAndMenuBar(_p = {}) {
  const props = { ..._p, type: _p.type ?? "status bar only", time: _p.time ?? "9:41", date: _p.date ?? "Tue Apr 1" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 32,
      backgroundColor: "rgb(255,255,255)",
      backdropFilter: "blur(0px)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 26px 0px 26px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--labels-primary)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--labels-primary)",
          flexShrink: 0,
        }}>{props.time}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--labels-primary)",
          flexShrink: 0,
        }}>{props.date}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "5px 0px 5px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={16.500} height={10} viewBox="0 0 16.500 10" fill="none" style={{
          position: "relative",
          width: 16.5,
          height: 10,
          flexShrink: 0,
        }}>
          <path d={"M 13.576 0.617 C 13.5 0.801 13.5 1.034 13.5 1.5 L 13.5 8.5 C 13.5 8.966 13.5 9.199 13.576 9.383 C 13.678 9.628 13.872 9.822 14.117 9.924 C 14.301 10 14.534 10 15 10 C 15.466 10 15.699 10 15.883 9.924 C 16.128 9.822 16.322 9.628 16.424 9.383 C 16.5 9.199 16.5 8.966 16.5 8.5 L 16.5 1.5 C 16.5 1.034 16.5 0.801 16.424 0.617 C 16.322 0.372 16.128 0.178 15.883 0.076 C 15.699 0 15.466 0 15 0 C 14.534 0 14.301 0 14.117 0.076 C 13.872 0.178 13.678 0.372 13.576 0.617 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 9 3.5 C 9 3.034 9 2.801 9.076 2.617 C 9.178 2.372 9.372 2.178 9.617 2.076 C 9.801 2 10.034 2 10.5 2 C 10.966 2 11.199 2 11.383 2.076 C 11.628 2.178 11.822 2.372 11.924 2.617 C 12 2.801 12 3.034 12 3.5 L 12 8.5 C 12 8.966 12 9.199 11.924 9.383 C 11.822 9.628 11.628 9.822 11.383 9.924 C 11.199 10 10.966 10 10.5 10 C 10.034 10 9.801 10 9.617 9.924 C 9.372 9.822 9.178 9.628 9.076 9.383 C 9 9.199 9 8.966 9 8.5 L 9 3.5 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 4.576 4.617 C 4.5 4.801 4.5 5.034 4.5 5.5 L 4.5 8.5 C 4.5 8.966 4.5 9.199 4.576 9.383 C 4.678 9.628 4.872 9.822 5.117 9.924 C 5.301 10 5.534 10 6 10 C 6.466 10 6.699 10 6.883 9.924 C 7.128 9.822 7.322 9.628 7.424 9.383 C 7.5 9.199 7.5 8.966 7.5 8.5 L 7.5 5.5 C 7.5 5.034 7.5 4.801 7.424 4.617 C 7.322 4.372 7.128 4.178 6.883 4.076 C 6.699 4 6.466 4 6 4 C 5.534 4 5.301 4 5.117 4.076 C 4.872 4.178 4.678 4.372 4.576 4.617 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0.076 6.117 C 0 6.301 0 6.534 0 7 L 0 8.5 C 0 8.966 0 9.199 0.076 9.383 C 0.178 9.628 0.372 9.822 0.617 9.924 C 0.801 10 1.034 10 1.5 10 C 1.966 10 2.199 10 2.383 9.924 C 2.628 9.822 2.822 9.628 2.924 9.383 C 3 9.199 3 8.966 3 8.5 L 3 7 C 3 6.534 3 6.301 2.924 6.117 C 2.822 5.872 2.628 5.678 2.383 5.576 C 2.199 5.5 1.966 5.5 1.5 5.5 C 1.034 5.5 0.801 5.5 0.617 5.576 C 0.372 5.678 0.178 5.872 0.076 6.117 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={14.053} height={10} viewBox="0 0 14.053 10" fill="none" style={{
          position: "relative",
          width: 14.053,
          height: 10,
          flexShrink: 0,
        }}>
          <path d={"M 12.505 4.246 C 12.618 4.352 12.793 4.353 12.904 4.243 L 13.968 3.179 C 14.082 3.064 14.083 2.875 13.965 2.763 C 12.156 1.051 9.714 0 7.027 0 C 4.339 0 1.898 1.051 0.089 2.763 C -0.029 2.875 -0.029 3.064 0.086 3.179 L 1.15 4.243 C 1.26 4.353 1.435 4.352 1.549 4.246 C 2.983 2.901 4.91 2.077 7.027 2.077 C 9.143 2.077 11.07 2.901 12.505 4.246 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 10.058 6.696 C 10.173 6.799 10.346 6.8 10.455 6.691 L 11.518 5.628 C 11.633 5.513 11.634 5.32 11.514 5.21 C 10.333 4.124 8.757 3.461 7.027 3.461 C 5.296 3.461 3.721 4.124 2.54 5.21 C 2.42 5.32 2.42 5.513 2.536 5.628 L 3.598 6.691 C 3.708 6.8 3.88 6.799 3.996 6.696 C 4.802 5.977 5.864 5.538 7.027 5.538 C 8.19 5.538 9.252 5.977 10.058 6.696 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 9.062 7.661 C 9.187 7.766 9.186 7.962 9.07 8.078 L 7.232 9.916 C 7.12 10.028 6.937 10.028 6.824 9.916 L 4.986 8.078 C 4.87 7.962 4.869 7.766 4.995 7.661 C 5.545 7.201 6.254 6.923 7.028 6.923 C 7.802 6.923 8.511 7.201 9.062 7.661 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "var(--labels-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "100%"}</span>
        <div style={{
          position: "relative",
          width: 26.5,
          height: 12,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={26.500} height={12} viewBox="0 0 26.500 12" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 26.5,
            height: 12,
            opacity: 0.4,
          }}>
            <path d={"M 22.226 0.354 L 22.68 -0.536 L 22.68 -0.537 L 22.226 0.354 Z M 23.646 1.774 L 24.537 1.32 L 24.536 1.32 L 23.646 1.774 Z M 23.646 10.226 L 24.518 10.713 L 24.528 10.697 L 24.537 10.68 L 23.646 10.226 Z M 23.521 10.449 L 24.373 10.972 L 24.384 10.955 L 24.393 10.937 L 23.521 10.449 Z M 22.226 11.646 L 22.651 12.55 L 22.666 12.544 L 22.68 12.536 L 22.226 11.646 Z M 22.093 11.708 L 22.488 12.627 L 22.503 12.62 L 22.519 12.613 L 22.093 11.708 Z M 5.2 12 L 5.195 13 L 5.2 13 L 5.2 12 Z M 3.995 11.994 L 3.979 12.994 L 3.99 12.994 L 3.995 11.994 Z M 1.774 11.646 L 1.32 12.536 L 1.32 12.537 L 1.774 11.646 Z M 0.479 10.449 L -0.393 10.937 L -0.384 10.955 L -0.373 10.972 L 0.479 10.449 Z M 0.354 10.226 L -0.537 10.68 L -0.528 10.697 L -0.518 10.713 L 0.354 10.226 Z M 0.292 1.907 L -0.613 1.481 L -0.62 1.497 L -0.627 1.512 L 0.292 1.907 Z M 0.354 1.774 L -0.536 1.32 L -0.544 1.334 L -0.55 1.349 L 0.354 1.774 Z M 1.551 0.479 L 1.063 -0.393 L 1.045 -0.384 L 1.028 -0.373 L 1.551 0.479 Z M 1.774 0.354 L 1.32 -0.537 L 1.303 -0.528 L 1.287 -0.518 L 1.774 0.354 Z M 3.995 0.006 L 3.99 -0.994 L 3.979 -0.994 L 3.995 0.006 Z M 5.2 0 L 5.2 -1 L 5.195 -1 L 5.2 0 Z M 3.146 1.041 L 3.065 0.044 L 3.065 0.044 L 3.146 1.041 Z M 2.229 1.245 L 1.775 0.354 L 1.775 0.354 L 2.229 1.245 Z M 1.245 2.229 L 0.354 1.775 L 0.354 1.775 L 1.245 2.229 Z M 1.041 3.146 L 0.044 3.065 L 0.044 3.065 L 1.041 3.146 Z M 1.041 8.854 L 0.044 8.935 L 0.044 8.935 L 1.041 8.854 Z M 1.245 9.771 L 0.354 10.225 L 0.354 10.225 L 1.245 9.771 Z M 2.229 10.755 L 1.775 11.646 L 1.775 11.646 L 2.229 10.755 Z M 3.146 10.959 L 3.065 11.956 L 3.065 11.956 L 3.146 10.959 Z M 20.854 10.959 L 20.935 11.956 L 20.935 11.956 L 20.854 10.959 Z M 21.771 10.755 L 22.225 11.646 L 22.225 11.646 L 21.771 10.755 Z M 22.755 9.771 L 23.646 10.225 L 23.646 10.225 L 22.755 9.771 Z M 22.959 8.854 L 23.956 8.935 L 23.956 8.935 L 22.959 8.854 Z M 22.959 3.146 L 23.956 3.065 L 23.956 3.065 L 22.959 3.146 Z M 22.755 2.229 L 23.646 1.775 L 23.646 1.775 L 22.755 2.229 Z M 21.771 1.245 L 22.225 0.354 L 22.225 0.354 L 21.771 1.245 Z M 20.854 1.041 L 20.935 0.044 L 20.935 0.044 L 20.854 1.041 Z M 25 4.063 L 25.249 3.095 L 24 2.773 L 24 4.063 L 25 4.063 Z M 25 7.937 L 24 7.937 L 24 9.227 L 25.249 8.905 L 25 7.937 Z M 18.8 0 L 18.8 1 C 19.726 1 20.361 1.001 20.853 1.041 C 21.333 1.08 21.588 1.152 21.772 1.245 L 22.226 0.354 L 22.68 -0.537 C 22.168 -0.797 21.62 -0.903 21.016 -0.952 C 20.424 -1.001 19.693 -1 18.8 -1 L 18.8 0 Z M 22.226 0.354 L 21.772 1.245 C 22.195 1.461 22.539 1.805 22.755 2.228 L 23.646 1.774 L 24.536 1.32 C 24.129 0.521 23.479 -0.129 22.68 -0.536 L 22.226 0.354 Z M 23.646 1.774 L 22.755 2.228 C 22.848 2.412 22.92 2.667 22.959 3.147 C 22.999 3.639 23 4.274 23 5.2 L 24 5.2 L 25 5.2 C 25 4.307 25.001 3.576 24.952 2.984 C 24.903 2.38 24.797 1.832 24.537 1.32 L 23.646 1.774 Z M 24 5.2 L 23 5.2 L 23 6.8 L 24 6.8 L 25 6.8 L 25 5.2 L 24 5.2 Z M 24 6.8 L 23 6.8 C 23 7.726 22.999 8.361 22.959 8.853 C 22.92 9.333 22.848 9.588 22.755 9.772 L 23.646 10.226 L 24.537 10.68 C 24.797 10.168 24.903 9.62 24.952 9.016 C 25.001 8.424 25 7.693 25 6.8 L 24 6.8 Z M 23.646 10.226 L 22.773 9.738 L 22.648 9.961 L 23.521 10.449 L 24.393 10.937 L 24.518 10.713 L 23.646 10.226 Z M 23.521 10.449 L 22.668 9.926 C 22.452 10.279 22.142 10.566 21.772 10.755 L 22.226 11.646 L 22.68 12.536 C 23.379 12.18 23.964 11.638 24.373 10.972 L 23.521 10.449 Z M 22.226 11.646 L 21.8 10.741 L 21.667 10.803 L 22.093 11.708 L 22.519 12.613 L 22.651 12.55 L 22.226 11.646 Z M 22.093 11.708 L 21.698 10.789 C 21.507 10.871 21.239 10.933 20.762 10.966 C 20.28 10.999 19.667 11 18.8 11 L 18.8 12 L 18.8 13 C 19.64 13 20.333 13.001 20.901 12.961 C 21.474 12.921 21.999 12.837 22.488 12.627 L 22.093 11.708 Z M 18.8 12 L 18.8 11 L 5.2 11 L 5.2 12 L 5.2 13 L 18.8 13 L 18.8 12 Z M 5.2 12 L 5.205 11 L 4 10.994 L 3.995 11.994 L 3.99 12.994 L 5.195 13 L 5.2 12 Z M 3.995 11.994 L 4.011 10.994 C 2.941 10.977 2.519 10.902 2.228 10.755 L 1.774 11.646 L 1.32 12.537 C 2.073 12.92 2.935 12.978 3.979 12.994 L 3.995 11.994 Z M 1.774 11.646 L 2.228 10.755 C 1.858 10.566 1.548 10.279 1.332 9.926 L 0.479 10.449 L -0.373 10.972 C 0.036 11.638 0.621 12.18 1.32 12.536 L 1.774 11.646 Z M 0.479 10.449 L 1.352 9.961 L 1.227 9.738 L 0.354 10.226 L -0.518 10.713 L -0.393 10.937 L 0.479 10.449 Z M 0.354 10.226 L 1.245 9.772 C 1.152 9.588 1.08 9.333 1.041 8.853 C 1.001 8.361 1 7.726 1 6.8 L 0 6.8 L -1 6.8 C -1 7.693 -1.001 8.424 -0.952 9.016 C -0.903 9.62 -0.797 10.168 -0.537 10.68 L 0.354 10.226 Z M 0 6.8 L 1 6.8 L 1 5.2 L 0 5.2 L -1 5.2 L -1 6.8 L 0 6.8 Z M 0 5.2 L 1 5.2 C 1 4.333 1.001 3.72 1.034 3.238 C 1.067 2.761 1.129 2.493 1.211 2.302 L 0.292 1.907 L -0.627 1.512 C -0.837 2.001 -0.921 2.526 -0.961 3.099 C -1.001 3.667 -1 4.36 -1 5.2 L 0 5.2 Z M 0.292 1.907 L 1.197 2.333 L 1.259 2.2 L 0.354 1.774 L -0.55 1.349 L -0.613 1.481 L 0.292 1.907 Z M 0.354 1.774 L 1.245 2.228 C 1.434 1.858 1.721 1.548 2.074 1.332 L 1.551 0.479 L 1.028 -0.373 C 0.362 0.036 -0.18 0.621 -0.536 1.32 L 0.354 1.774 Z M 1.551 0.479 L 2.039 1.352 L 2.262 1.227 L 1.774 0.354 L 1.287 -0.518 L 1.063 -0.393 L 1.551 0.479 Z M 1.774 0.354 L 2.228 1.245 C 2.519 1.098 2.941 1.023 4.011 1.006 L 3.995 0.006 L 3.979 -0.994 C 2.935 -0.978 2.073 -0.92 1.32 -0.537 L 1.774 0.354 Z M 3.995 0.006 L 4 1.006 L 5.205 1 L 5.2 0 L 5.195 -1 L 3.99 -0.994 L 3.995 0.006 Z M 5.2 0 L 5.2 1 L 18.8 1 L 18.8 0 L 18.8 -1 L 5.2 -1 L 5.2 0 Z M 5.2 1 L 5.2 0 C 4.29 0 3.607 0 3.065 0.044 L 3.146 1.041 L 3.228 2.038 C 3.669 2.002 4.257 2 5.2 2 L 5.2 1 Z M 3.146 1.041 L 3.065 0.044 C 2.524 0.089 2.123 0.177 1.775 0.354 L 2.229 1.245 L 2.682 2.136 C 2.701 2.127 2.809 2.072 3.228 2.038 L 3.146 1.041 Z M 2.229 1.245 L 1.775 0.354 C 1.163 0.666 0.666 1.163 0.354 1.775 L 1.245 2.229 L 2.136 2.683 C 2.256 2.447 2.447 2.256 2.683 2.136 L 2.229 1.245 Z M 1.245 2.229 L 0.354 1.775 C 0.177 2.123 0.089 2.524 0.044 3.065 L 1.041 3.146 L 2.038 3.228 C 2.072 2.809 2.127 2.701 2.136 2.682 L 1.245 2.229 Z M 1.041 3.146 L 0.044 3.065 C 0 3.607 0 4.29 0 5.2 L 1 5.2 L 2 5.2 C 2 4.257 2.002 3.669 2.038 3.228 L 1.041 3.146 Z M 1 5.2 L 0 5.2 L 0 6.8 L 1 6.8 L 2 6.8 L 2 5.2 L 1 5.2 Z M 1 6.8 L 0 6.8 C 0 7.71 0 8.393 0.044 8.935 L 1.041 8.854 L 2.038 8.772 C 2.002 8.331 2 7.743 2 6.8 L 1 6.8 Z M 1.041 8.854 L 0.044 8.935 C 0.089 9.476 0.177 9.877 0.354 10.225 L 1.245 9.771 L 2.136 9.318 C 2.127 9.299 2.072 9.191 2.038 8.772 L 1.041 8.854 Z M 1.245 9.771 L 0.354 10.225 C 0.666 10.837 1.163 11.334 1.775 11.646 L 2.229 10.755 L 2.683 9.864 C 2.447 9.744 2.256 9.553 2.136 9.317 L 1.245 9.771 Z M 2.229 10.755 L 1.775 11.646 C 2.123 11.823 2.524 11.911 3.065 11.956 L 3.146 10.959 L 3.228 9.962 C 2.809 9.928 2.701 9.873 2.682 9.864 L 2.229 10.755 Z M 3.146 10.959 L 3.065 11.956 C 3.607 12 4.29 12 5.2 12 L 5.2 11 L 5.2 10 C 4.257 10 3.669 9.998 3.228 9.962 L 3.146 10.959 Z M 5.2 11 L 5.2 12 L 18.8 12 L 18.8 11 L 18.8 10 L 5.2 10 L 5.2 11 Z M 18.8 11 L 18.8 12 C 19.71 12 20.393 12 20.935 11.956 L 20.854 10.959 L 20.772 9.962 C 20.331 9.998 19.743 10 18.8 10 L 18.8 11 Z M 20.854 10.959 L 20.935 11.956 C 21.476 11.911 21.877 11.823 22.225 11.646 L 21.771 10.755 L 21.318 9.864 C 21.299 9.873 21.191 9.928 20.772 9.962 L 20.854 10.959 Z M 21.771 10.755 L 22.225 11.646 C 22.837 11.334 23.334 10.837 23.646 10.225 L 22.755 9.771 L 21.864 9.317 C 21.744 9.553 21.553 9.744 21.317 9.864 L 21.771 10.755 Z M 22.755 9.771 L 23.646 10.225 C 23.823 9.877 23.911 9.476 23.956 8.935 L 22.959 8.854 L 21.962 8.772 C 21.928 9.191 21.873 9.299 21.864 9.318 L 22.755 9.771 Z M 22.959 8.854 L 23.956 8.935 C 24 8.393 24 7.71 24 6.8 L 23 6.8 L 22 6.8 C 22 7.743 21.998 8.331 21.962 8.772 L 22.959 8.854 Z M 23 6.8 L 24 6.8 L 24 5.2 L 23 5.2 L 22 5.2 L 22 6.8 L 23 6.8 Z M 23 5.2 L 24 5.2 C 24 4.29 24 3.607 23.956 3.065 L 22.959 3.146 L 21.962 3.228 C 21.998 3.669 22 4.257 22 5.2 L 23 5.2 Z M 22.959 3.146 L 23.956 3.065 C 23.911 2.524 23.823 2.123 23.646 1.775 L 22.755 2.229 L 21.864 2.682 C 21.873 2.701 21.928 2.809 21.962 3.228 L 22.959 3.146 Z M 22.755 2.229 L 23.646 1.775 C 23.334 1.163 22.837 0.666 22.225 0.354 L 21.771 1.245 L 21.317 2.136 C 21.553 2.256 21.744 2.447 21.864 2.683 L 22.755 2.229 Z M 21.771 1.245 L 22.225 0.354 C 21.877 0.177 21.476 0.089 20.935 0.044 L 20.854 1.041 L 20.772 2.038 C 21.191 2.072 21.299 2.127 21.318 2.136 L 21.771 1.245 Z M 20.854 1.041 L 20.935 0.044 C 20.393 0 19.71 0 18.8 0 L 18.8 1 L 18.8 2 C 19.743 2 20.331 2.002 20.772 2.038 L 20.854 1.041 Z M 18.8 1 L 18.8 0 L 5.2 0 L 5.2 1 L 5.2 2 L 18.8 2 L 18.8 1 Z M 25 4.063 L 24.751 5.032 C 25.183 5.143 25.5 5.536 25.5 6 L 26.5 6 L 27.5 6 C 27.5 4.6 26.543 3.428 25.249 3.095 L 25 4.063 Z M 26.5 6 L 25.5 6 C 25.5 6.464 25.183 6.857 24.751 6.968 L 25 7.937 L 25.249 8.905 C 26.543 8.572 27.5 7.4 27.5 6 L 26.5 6 Z M 25 7.937 L 26 7.937 L 26 4.063 L 25 4.063 L 24 4.063 L 24 7.937 L 25 7.937 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 20,
            height: 8,
            borderRadius: 1.5,
            backgroundColor: "var(--labels-primary)",
          }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1210,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "6px 0px 6px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "2px 11px 1px 11px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
              flexShrink: 0,
            }}>App</span>
          </div>
        </div>
        <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon2 ?? <MenuBarItem menuName={"File"} state={"deselected"} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "6px 0px 6px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "2px 11px 1px 11px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
              flexShrink: 0,
            }}>Edit</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "6px 0px 6px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "2px 11px 1px 11px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
              flexShrink: 0,
            }}>Format</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "6px 0px 6px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "2px 11px 1px 11px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
              flexShrink: 0,
            }}>View</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "6px 0px 6px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "2px 11px 1px 11px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
              flexShrink: 0,
            }}>Window</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "6px 0px 6px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "2px 11px 1px 11px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
              flexShrink: 0,
            }}>Help</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 32,
      backgroundColor: "rgb(255,255,255)",
      backdropFilter: "blur(0px)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 26px 0px 26px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--labels-primary)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--labels-primary)",
          flexShrink: 0,
        }}>{props.time}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--labels-primary)",
          flexShrink: 0,
        }}>{props.date}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "5px 0px 5px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={16.500} height={10} viewBox="0 0 16.500 10" fill="none" style={{
          position: "relative",
          width: 16.5,
          height: 10,
          flexShrink: 0,
        }}>
          <path d={"M 13.576 0.617 C 13.5 0.801 13.5 1.034 13.5 1.5 L 13.5 8.5 C 13.5 8.966 13.5 9.199 13.576 9.383 C 13.678 9.628 13.872 9.822 14.117 9.924 C 14.301 10 14.534 10 15 10 C 15.466 10 15.699 10 15.883 9.924 C 16.128 9.822 16.322 9.628 16.424 9.383 C 16.5 9.199 16.5 8.966 16.5 8.5 L 16.5 1.5 C 16.5 1.034 16.5 0.801 16.424 0.617 C 16.322 0.372 16.128 0.178 15.883 0.076 C 15.699 0 15.466 0 15 0 C 14.534 0 14.301 0 14.117 0.076 C 13.872 0.178 13.678 0.372 13.576 0.617 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 9 3.5 C 9 3.034 9 2.801 9.076 2.617 C 9.178 2.372 9.372 2.178 9.617 2.076 C 9.801 2 10.034 2 10.5 2 C 10.966 2 11.199 2 11.383 2.076 C 11.628 2.178 11.822 2.372 11.924 2.617 C 12 2.801 12 3.034 12 3.5 L 12 8.5 C 12 8.966 12 9.199 11.924 9.383 C 11.822 9.628 11.628 9.822 11.383 9.924 C 11.199 10 10.966 10 10.5 10 C 10.034 10 9.801 10 9.617 9.924 C 9.372 9.822 9.178 9.628 9.076 9.383 C 9 9.199 9 8.966 9 8.5 L 9 3.5 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 4.576 4.617 C 4.5 4.801 4.5 5.034 4.5 5.5 L 4.5 8.5 C 4.5 8.966 4.5 9.199 4.576 9.383 C 4.678 9.628 4.872 9.822 5.117 9.924 C 5.301 10 5.534 10 6 10 C 6.466 10 6.699 10 6.883 9.924 C 7.128 9.822 7.322 9.628 7.424 9.383 C 7.5 9.199 7.5 8.966 7.5 8.5 L 7.5 5.5 C 7.5 5.034 7.5 4.801 7.424 4.617 C 7.322 4.372 7.128 4.178 6.883 4.076 C 6.699 4 6.466 4 6 4 C 5.534 4 5.301 4 5.117 4.076 C 4.872 4.178 4.678 4.372 4.576 4.617 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0.076 6.117 C 0 6.301 0 6.534 0 7 L 0 8.5 C 0 8.966 0 9.199 0.076 9.383 C 0.178 9.628 0.372 9.822 0.617 9.924 C 0.801 10 1.034 10 1.5 10 C 1.966 10 2.199 10 2.383 9.924 C 2.628 9.822 2.822 9.628 2.924 9.383 C 3 9.199 3 8.966 3 8.5 L 3 7 C 3 6.534 3 6.301 2.924 6.117 C 2.822 5.872 2.628 5.678 2.383 5.576 C 2.199 5.5 1.966 5.5 1.5 5.5 C 1.034 5.5 0.801 5.5 0.617 5.576 C 0.372 5.678 0.178 5.872 0.076 6.117 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={14.053} height={10} viewBox="0 0 14.053 10" fill="none" style={{
          position: "relative",
          width: 14.053,
          height: 10,
          flexShrink: 0,
        }}>
          <path d={"M 12.505 4.246 C 12.618 4.352 12.793 4.353 12.904 4.243 L 13.968 3.179 C 14.082 3.064 14.083 2.875 13.965 2.763 C 12.156 1.051 9.714 0 7.027 0 C 4.339 0 1.898 1.051 0.089 2.763 C -0.029 2.875 -0.029 3.064 0.086 3.179 L 1.15 4.243 C 1.26 4.353 1.435 4.352 1.549 4.246 C 2.983 2.901 4.91 2.077 7.027 2.077 C 9.143 2.077 11.07 2.901 12.505 4.246 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 10.058 6.696 C 10.173 6.799 10.346 6.8 10.455 6.691 L 11.518 5.628 C 11.633 5.513 11.634 5.32 11.514 5.21 C 10.333 4.124 8.757 3.461 7.027 3.461 C 5.296 3.461 3.721 4.124 2.54 5.21 C 2.42 5.32 2.42 5.513 2.536 5.628 L 3.598 6.691 C 3.708 6.8 3.88 6.799 3.996 6.696 C 4.802 5.977 5.864 5.538 7.027 5.538 C 8.19 5.538 9.252 5.977 10.058 6.696 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 9.062 7.661 C 9.187 7.766 9.186 7.962 9.07 8.078 L 7.232 9.916 C 7.12 10.028 6.937 10.028 6.824 9.916 L 4.986 8.078 C 4.87 7.962 4.869 7.766 4.995 7.661 C 5.545 7.201 6.254 6.923 7.028 6.923 C 7.802 6.923 8.511 7.201 9.062 7.661 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "var(--labels-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "100%"}</span>
        <div style={{
          position: "relative",
          width: 26.5,
          height: 12,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={26.500} height={12} viewBox="0 0 26.500 12" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 26.5,
            height: 12,
            opacity: 0.4,
          }}>
            <path d={"M 22.226 0.354 L 22.68 -0.536 L 22.68 -0.537 L 22.226 0.354 Z M 23.646 1.774 L 24.537 1.32 L 24.536 1.32 L 23.646 1.774 Z M 23.646 10.226 L 24.518 10.713 L 24.528 10.697 L 24.537 10.68 L 23.646 10.226 Z M 23.521 10.449 L 24.373 10.972 L 24.384 10.955 L 24.393 10.937 L 23.521 10.449 Z M 22.226 11.646 L 22.651 12.55 L 22.666 12.544 L 22.68 12.536 L 22.226 11.646 Z M 22.093 11.708 L 22.488 12.627 L 22.503 12.62 L 22.519 12.613 L 22.093 11.708 Z M 5.2 12 L 5.195 13 L 5.2 13 L 5.2 12 Z M 3.995 11.994 L 3.979 12.994 L 3.99 12.994 L 3.995 11.994 Z M 1.774 11.646 L 1.32 12.536 L 1.32 12.537 L 1.774 11.646 Z M 0.479 10.449 L -0.393 10.937 L -0.384 10.955 L -0.373 10.972 L 0.479 10.449 Z M 0.354 10.226 L -0.537 10.68 L -0.528 10.697 L -0.518 10.713 L 0.354 10.226 Z M 0.292 1.907 L -0.613 1.481 L -0.62 1.497 L -0.627 1.512 L 0.292 1.907 Z M 0.354 1.774 L -0.536 1.32 L -0.544 1.334 L -0.55 1.349 L 0.354 1.774 Z M 1.551 0.479 L 1.063 -0.393 L 1.045 -0.384 L 1.028 -0.373 L 1.551 0.479 Z M 1.774 0.354 L 1.32 -0.537 L 1.303 -0.528 L 1.287 -0.518 L 1.774 0.354 Z M 3.995 0.006 L 3.99 -0.994 L 3.979 -0.994 L 3.995 0.006 Z M 5.2 0 L 5.2 -1 L 5.195 -1 L 5.2 0 Z M 3.146 1.041 L 3.065 0.044 L 3.065 0.044 L 3.146 1.041 Z M 2.229 1.245 L 1.775 0.354 L 1.775 0.354 L 2.229 1.245 Z M 1.245 2.229 L 0.354 1.775 L 0.354 1.775 L 1.245 2.229 Z M 1.041 3.146 L 0.044 3.065 L 0.044 3.065 L 1.041 3.146 Z M 1.041 8.854 L 0.044 8.935 L 0.044 8.935 L 1.041 8.854 Z M 1.245 9.771 L 0.354 10.225 L 0.354 10.225 L 1.245 9.771 Z M 2.229 10.755 L 1.775 11.646 L 1.775 11.646 L 2.229 10.755 Z M 3.146 10.959 L 3.065 11.956 L 3.065 11.956 L 3.146 10.959 Z M 20.854 10.959 L 20.935 11.956 L 20.935 11.956 L 20.854 10.959 Z M 21.771 10.755 L 22.225 11.646 L 22.225 11.646 L 21.771 10.755 Z M 22.755 9.771 L 23.646 10.225 L 23.646 10.225 L 22.755 9.771 Z M 22.959 8.854 L 23.956 8.935 L 23.956 8.935 L 22.959 8.854 Z M 22.959 3.146 L 23.956 3.065 L 23.956 3.065 L 22.959 3.146 Z M 22.755 2.229 L 23.646 1.775 L 23.646 1.775 L 22.755 2.229 Z M 21.771 1.245 L 22.225 0.354 L 22.225 0.354 L 21.771 1.245 Z M 20.854 1.041 L 20.935 0.044 L 20.935 0.044 L 20.854 1.041 Z M 25 4.063 L 25.249 3.095 L 24 2.773 L 24 4.063 L 25 4.063 Z M 25 7.937 L 24 7.937 L 24 9.227 L 25.249 8.905 L 25 7.937 Z M 18.8 0 L 18.8 1 C 19.726 1 20.361 1.001 20.853 1.041 C 21.333 1.08 21.588 1.152 21.772 1.245 L 22.226 0.354 L 22.68 -0.537 C 22.168 -0.797 21.62 -0.903 21.016 -0.952 C 20.424 -1.001 19.693 -1 18.8 -1 L 18.8 0 Z M 22.226 0.354 L 21.772 1.245 C 22.195 1.461 22.539 1.805 22.755 2.228 L 23.646 1.774 L 24.536 1.32 C 24.129 0.521 23.479 -0.129 22.68 -0.536 L 22.226 0.354 Z M 23.646 1.774 L 22.755 2.228 C 22.848 2.412 22.92 2.667 22.959 3.147 C 22.999 3.639 23 4.274 23 5.2 L 24 5.2 L 25 5.2 C 25 4.307 25.001 3.576 24.952 2.984 C 24.903 2.38 24.797 1.832 24.537 1.32 L 23.646 1.774 Z M 24 5.2 L 23 5.2 L 23 6.8 L 24 6.8 L 25 6.8 L 25 5.2 L 24 5.2 Z M 24 6.8 L 23 6.8 C 23 7.726 22.999 8.361 22.959 8.853 C 22.92 9.333 22.848 9.588 22.755 9.772 L 23.646 10.226 L 24.537 10.68 C 24.797 10.168 24.903 9.62 24.952 9.016 C 25.001 8.424 25 7.693 25 6.8 L 24 6.8 Z M 23.646 10.226 L 22.773 9.738 L 22.648 9.961 L 23.521 10.449 L 24.393 10.937 L 24.518 10.713 L 23.646 10.226 Z M 23.521 10.449 L 22.668 9.926 C 22.452 10.279 22.142 10.566 21.772 10.755 L 22.226 11.646 L 22.68 12.536 C 23.379 12.18 23.964 11.638 24.373 10.972 L 23.521 10.449 Z M 22.226 11.646 L 21.8 10.741 L 21.667 10.803 L 22.093 11.708 L 22.519 12.613 L 22.651 12.55 L 22.226 11.646 Z M 22.093 11.708 L 21.698 10.789 C 21.507 10.871 21.239 10.933 20.762 10.966 C 20.28 10.999 19.667 11 18.8 11 L 18.8 12 L 18.8 13 C 19.64 13 20.333 13.001 20.901 12.961 C 21.474 12.921 21.999 12.837 22.488 12.627 L 22.093 11.708 Z M 18.8 12 L 18.8 11 L 5.2 11 L 5.2 12 L 5.2 13 L 18.8 13 L 18.8 12 Z M 5.2 12 L 5.205 11 L 4 10.994 L 3.995 11.994 L 3.99 12.994 L 5.195 13 L 5.2 12 Z M 3.995 11.994 L 4.011 10.994 C 2.941 10.977 2.519 10.902 2.228 10.755 L 1.774 11.646 L 1.32 12.537 C 2.073 12.92 2.935 12.978 3.979 12.994 L 3.995 11.994 Z M 1.774 11.646 L 2.228 10.755 C 1.858 10.566 1.548 10.279 1.332 9.926 L 0.479 10.449 L -0.373 10.972 C 0.036 11.638 0.621 12.18 1.32 12.536 L 1.774 11.646 Z M 0.479 10.449 L 1.352 9.961 L 1.227 9.738 L 0.354 10.226 L -0.518 10.713 L -0.393 10.937 L 0.479 10.449 Z M 0.354 10.226 L 1.245 9.772 C 1.152 9.588 1.08 9.333 1.041 8.853 C 1.001 8.361 1 7.726 1 6.8 L 0 6.8 L -1 6.8 C -1 7.693 -1.001 8.424 -0.952 9.016 C -0.903 9.62 -0.797 10.168 -0.537 10.68 L 0.354 10.226 Z M 0 6.8 L 1 6.8 L 1 5.2 L 0 5.2 L -1 5.2 L -1 6.8 L 0 6.8 Z M 0 5.2 L 1 5.2 C 1 4.333 1.001 3.72 1.034 3.238 C 1.067 2.761 1.129 2.493 1.211 2.302 L 0.292 1.907 L -0.627 1.512 C -0.837 2.001 -0.921 2.526 -0.961 3.099 C -1.001 3.667 -1 4.36 -1 5.2 L 0 5.2 Z M 0.292 1.907 L 1.197 2.333 L 1.259 2.2 L 0.354 1.774 L -0.55 1.349 L -0.613 1.481 L 0.292 1.907 Z M 0.354 1.774 L 1.245 2.228 C 1.434 1.858 1.721 1.548 2.074 1.332 L 1.551 0.479 L 1.028 -0.373 C 0.362 0.036 -0.18 0.621 -0.536 1.32 L 0.354 1.774 Z M 1.551 0.479 L 2.039 1.352 L 2.262 1.227 L 1.774 0.354 L 1.287 -0.518 L 1.063 -0.393 L 1.551 0.479 Z M 1.774 0.354 L 2.228 1.245 C 2.519 1.098 2.941 1.023 4.011 1.006 L 3.995 0.006 L 3.979 -0.994 C 2.935 -0.978 2.073 -0.92 1.32 -0.537 L 1.774 0.354 Z M 3.995 0.006 L 4 1.006 L 5.205 1 L 5.2 0 L 5.195 -1 L 3.99 -0.994 L 3.995 0.006 Z M 5.2 0 L 5.2 1 L 18.8 1 L 18.8 0 L 18.8 -1 L 5.2 -1 L 5.2 0 Z M 5.2 1 L 5.2 0 C 4.29 0 3.607 0 3.065 0.044 L 3.146 1.041 L 3.228 2.038 C 3.669 2.002 4.257 2 5.2 2 L 5.2 1 Z M 3.146 1.041 L 3.065 0.044 C 2.524 0.089 2.123 0.177 1.775 0.354 L 2.229 1.245 L 2.682 2.136 C 2.701 2.127 2.809 2.072 3.228 2.038 L 3.146 1.041 Z M 2.229 1.245 L 1.775 0.354 C 1.163 0.666 0.666 1.163 0.354 1.775 L 1.245 2.229 L 2.136 2.683 C 2.256 2.447 2.447 2.256 2.683 2.136 L 2.229 1.245 Z M 1.245 2.229 L 0.354 1.775 C 0.177 2.123 0.089 2.524 0.044 3.065 L 1.041 3.146 L 2.038 3.228 C 2.072 2.809 2.127 2.701 2.136 2.682 L 1.245 2.229 Z M 1.041 3.146 L 0.044 3.065 C 0 3.607 0 4.29 0 5.2 L 1 5.2 L 2 5.2 C 2 4.257 2.002 3.669 2.038 3.228 L 1.041 3.146 Z M 1 5.2 L 0 5.2 L 0 6.8 L 1 6.8 L 2 6.8 L 2 5.2 L 1 5.2 Z M 1 6.8 L 0 6.8 C 0 7.71 0 8.393 0.044 8.935 L 1.041 8.854 L 2.038 8.772 C 2.002 8.331 2 7.743 2 6.8 L 1 6.8 Z M 1.041 8.854 L 0.044 8.935 C 0.089 9.476 0.177 9.877 0.354 10.225 L 1.245 9.771 L 2.136 9.318 C 2.127 9.299 2.072 9.191 2.038 8.772 L 1.041 8.854 Z M 1.245 9.771 L 0.354 10.225 C 0.666 10.837 1.163 11.334 1.775 11.646 L 2.229 10.755 L 2.683 9.864 C 2.447 9.744 2.256 9.553 2.136 9.317 L 1.245 9.771 Z M 2.229 10.755 L 1.775 11.646 C 2.123 11.823 2.524 11.911 3.065 11.956 L 3.146 10.959 L 3.228 9.962 C 2.809 9.928 2.701 9.873 2.682 9.864 L 2.229 10.755 Z M 3.146 10.959 L 3.065 11.956 C 3.607 12 4.29 12 5.2 12 L 5.2 11 L 5.2 10 C 4.257 10 3.669 9.998 3.228 9.962 L 3.146 10.959 Z M 5.2 11 L 5.2 12 L 18.8 12 L 18.8 11 L 18.8 10 L 5.2 10 L 5.2 11 Z M 18.8 11 L 18.8 12 C 19.71 12 20.393 12 20.935 11.956 L 20.854 10.959 L 20.772 9.962 C 20.331 9.998 19.743 10 18.8 10 L 18.8 11 Z M 20.854 10.959 L 20.935 11.956 C 21.476 11.911 21.877 11.823 22.225 11.646 L 21.771 10.755 L 21.318 9.864 C 21.299 9.873 21.191 9.928 20.772 9.962 L 20.854 10.959 Z M 21.771 10.755 L 22.225 11.646 C 22.837 11.334 23.334 10.837 23.646 10.225 L 22.755 9.771 L 21.864 9.317 C 21.744 9.553 21.553 9.744 21.317 9.864 L 21.771 10.755 Z M 22.755 9.771 L 23.646 10.225 C 23.823 9.877 23.911 9.476 23.956 8.935 L 22.959 8.854 L 21.962 8.772 C 21.928 9.191 21.873 9.299 21.864 9.318 L 22.755 9.771 Z M 22.959 8.854 L 23.956 8.935 C 24 8.393 24 7.71 24 6.8 L 23 6.8 L 22 6.8 C 22 7.743 21.998 8.331 21.962 8.772 L 22.959 8.854 Z M 23 6.8 L 24 6.8 L 24 5.2 L 23 5.2 L 22 5.2 L 22 6.8 L 23 6.8 Z M 23 5.2 L 24 5.2 C 24 4.29 24 3.607 23.956 3.065 L 22.959 3.146 L 21.962 3.228 C 21.998 3.669 22 4.257 22 5.2 L 23 5.2 Z M 22.959 3.146 L 23.956 3.065 C 23.911 2.524 23.823 2.123 23.646 1.775 L 22.755 2.229 L 21.864 2.682 C 21.873 2.701 21.928 2.809 21.962 3.228 L 22.959 3.146 Z M 22.755 2.229 L 23.646 1.775 C 23.334 1.163 22.837 0.666 22.225 0.354 L 21.771 1.245 L 21.317 2.136 C 21.553 2.256 21.744 2.447 21.864 2.683 L 22.755 2.229 Z M 21.771 1.245 L 22.225 0.354 C 21.877 0.177 21.476 0.089 20.935 0.044 L 20.854 1.041 L 20.772 2.038 C 21.191 2.072 21.299 2.127 21.318 2.136 L 21.771 1.245 Z M 20.854 1.041 L 20.935 0.044 C 20.393 0 19.71 0 18.8 0 L 18.8 1 L 18.8 2 C 19.743 2 20.331 2.002 20.772 2.038 L 20.854 1.041 Z M 18.8 1 L 18.8 0 L 5.2 0 L 5.2 1 L 5.2 2 L 18.8 2 L 18.8 1 Z M 25 4.063 L 24.751 5.032 C 25.183 5.143 25.5 5.536 25.5 6 L 26.5 6 L 27.5 6 C 27.5 4.6 26.543 3.428 25.249 3.095 L 25 4.063 Z M 26.5 6 L 25.5 6 C 25.5 6.464 25.183 6.857 24.751 6.968 L 25 7.937 L 25.249 8.905 C 26.543 8.572 27.5 7.4 27.5 6 L 26.5 6 Z M 25 7.937 L 26 7.937 L 26 4.063 L 25 4.063 L 24 4.063 L 24 7.937 L 25 7.937 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 20,
            height: 8,
            borderRadius: 1.5,
            backgroundColor: "var(--labels-primary)",
          }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1210,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <WindowControls state={"active"} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "6px 0px 6px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "2px 11px 1px 11px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
              flexShrink: 0,
            }}>App</span>
          </div>
        </div>
        <div style={{ position: "relative", width: 46, flexShrink: 0 }}>{props.icon3 ?? <MenuBarItem menuName={"File"} state={"deselected"} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "6px 0px 6px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "2px 11px 1px 11px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
              flexShrink: 0,
            }}>Edit</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "6px 0px 6px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "2px 11px 1px 11px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
              flexShrink: 0,
            }}>Format</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "6px 0px 6px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "2px 11px 1px 11px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
              flexShrink: 0,
            }}>View</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "6px 0px 6px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "2px 11px 1px 11px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
              flexShrink: 0,
            }}>Window</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "6px 0px 6px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "2px 11px 1px 11px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--labels-primary)",
              flexShrink: 0,
            }}>Help</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 1210,
      height: 32,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      padding: "4px 26px 4px 26px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--labels-primary)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--labels-primary)",
          flexShrink: 0,
        }}>{props.time}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--labels-primary)",
          flexShrink: 0,
        }}>{props.date}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "5px 0px 5px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={16.500} height={10} viewBox="0 0 16.500 10" fill="none" style={{
          position: "relative",
          width: 16.5,
          height: 10,
          flexShrink: 0,
        }}>
          <path d={"M 13.576 0.617 C 13.5 0.801 13.5 1.034 13.5 1.5 L 13.5 8.5 C 13.5 8.966 13.5 9.199 13.576 9.383 C 13.678 9.628 13.872 9.822 14.117 9.924 C 14.301 10 14.534 10 15 10 C 15.466 10 15.699 10 15.883 9.924 C 16.128 9.822 16.322 9.628 16.424 9.383 C 16.5 9.199 16.5 8.966 16.5 8.5 L 16.5 1.5 C 16.5 1.034 16.5 0.801 16.424 0.617 C 16.322 0.372 16.128 0.178 15.883 0.076 C 15.699 0 15.466 0 15 0 C 14.534 0 14.301 0 14.117 0.076 C 13.872 0.178 13.678 0.372 13.576 0.617 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 9 3.5 C 9 3.034 9 2.801 9.076 2.617 C 9.178 2.372 9.372 2.178 9.617 2.076 C 9.801 2 10.034 2 10.5 2 C 10.966 2 11.199 2 11.383 2.076 C 11.628 2.178 11.822 2.372 11.924 2.617 C 12 2.801 12 3.034 12 3.5 L 12 8.5 C 12 8.966 12 9.199 11.924 9.383 C 11.822 9.628 11.628 9.822 11.383 9.924 C 11.199 10 10.966 10 10.5 10 C 10.034 10 9.801 10 9.617 9.924 C 9.372 9.822 9.178 9.628 9.076 9.383 C 9 9.199 9 8.966 9 8.5 L 9 3.5 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 4.576 4.617 C 4.5 4.801 4.5 5.034 4.5 5.5 L 4.5 8.5 C 4.5 8.966 4.5 9.199 4.576 9.383 C 4.678 9.628 4.872 9.822 5.117 9.924 C 5.301 10 5.534 10 6 10 C 6.466 10 6.699 10 6.883 9.924 C 7.128 9.822 7.322 9.628 7.424 9.383 C 7.5 9.199 7.5 8.966 7.5 8.5 L 7.5 5.5 C 7.5 5.034 7.5 4.801 7.424 4.617 C 7.322 4.372 7.128 4.178 6.883 4.076 C 6.699 4 6.466 4 6 4 C 5.534 4 5.301 4 5.117 4.076 C 4.872 4.178 4.678 4.372 4.576 4.617 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0.076 6.117 C 0 6.301 0 6.534 0 7 L 0 8.5 C 0 8.966 0 9.199 0.076 9.383 C 0.178 9.628 0.372 9.822 0.617 9.924 C 0.801 10 1.034 10 1.5 10 C 1.966 10 2.199 10 2.383 9.924 C 2.628 9.822 2.822 9.628 2.924 9.383 C 3 9.199 3 8.966 3 8.5 L 3 7 C 3 6.534 3 6.301 2.924 6.117 C 2.822 5.872 2.628 5.678 2.383 5.576 C 2.199 5.5 1.966 5.5 1.5 5.5 C 1.034 5.5 0.801 5.5 0.617 5.576 C 0.372 5.678 0.178 5.872 0.076 6.117 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={14.053} height={10} viewBox="0 0 14.053 10" fill="none" style={{
          position: "relative",
          width: 14.053,
          height: 10,
          flexShrink: 0,
        }}>
          <path d={"M 12.505 4.246 C 12.618 4.352 12.793 4.353 12.904 4.243 L 13.968 3.179 C 14.082 3.064 14.083 2.875 13.965 2.763 C 12.156 1.051 9.714 0 7.027 0 C 4.339 0 1.898 1.051 0.089 2.763 C -0.029 2.875 -0.029 3.064 0.086 3.179 L 1.15 4.243 C 1.26 4.353 1.435 4.352 1.549 4.246 C 2.983 2.901 4.91 2.077 7.027 2.077 C 9.143 2.077 11.07 2.901 12.505 4.246 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 10.058 6.696 C 10.173 6.799 10.346 6.8 10.455 6.691 L 11.518 5.628 C 11.633 5.513 11.634 5.32 11.514 5.21 C 10.333 4.124 8.757 3.461 7.027 3.461 C 5.296 3.461 3.721 4.124 2.54 5.21 C 2.42 5.32 2.42 5.513 2.536 5.628 L 3.598 6.691 C 3.708 6.8 3.88 6.799 3.996 6.696 C 4.802 5.977 5.864 5.538 7.027 5.538 C 8.19 5.538 9.252 5.977 10.058 6.696 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 9.062 7.661 C 9.187 7.766 9.186 7.962 9.07 8.078 L 7.232 9.916 C 7.12 10.028 6.937 10.028 6.824 9.916 L 4.986 8.078 C 4.87 7.962 4.869 7.766 4.995 7.661 C 5.545 7.201 6.254 6.923 7.028 6.923 C 7.802 6.923 8.511 7.201 9.062 7.661 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "var(--labels-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "100%"}</span>
        <div style={{
          position: "relative",
          width: 26.5,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={26.500} height={12} viewBox="0 0 26.500 12" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 26.5,
            height: 12,
            opacity: 0.4,
          }}>
            <path d={"M 20.853 1.041 L 20.772 2.038 L 20.772 2.038 L 20.853 1.041 Z M 21.771 1.245 L 21.317 2.136 L 21.317 2.136 L 21.771 1.245 Z M 22.755 2.229 L 23.646 1.775 L 23.646 1.775 L 22.755 2.229 Z M 22.959 3.147 L 21.962 3.228 L 21.962 3.228 L 22.959 3.147 Z M 22.959 8.853 L 21.962 8.772 L 21.962 8.772 L 22.959 8.853 Z M 22.755 9.771 L 23.646 10.225 L 23.646 10.225 L 22.755 9.771 Z M 21.771 10.755 L 21.317 9.864 L 21.317 9.864 L 21.771 10.755 Z M 20.853 10.959 L 20.935 11.956 L 20.935 11.956 L 20.853 10.959 Z M 3.147 10.959 L 3.065 11.956 L 3.065 11.956 L 3.147 10.959 Z M 2.229 10.755 L 2.683 9.864 L 2.683 9.864 L 2.229 10.755 Z M 1.245 9.771 L 0.354 10.225 L 0.354 10.225 L 1.245 9.771 Z M 1.041 8.853 L 2.038 8.772 L 2.038 8.772 L 1.041 8.853 Z M 1.041 3.147 L 2.038 3.228 L 2.038 3.228 L 1.041 3.147 Z M 1.245 2.229 L 2.136 2.683 L 2.136 2.683 L 1.245 2.229 Z M 2.229 1.245 L 2.683 2.136 L 2.683 2.136 L 2.229 1.245 Z M 3.147 1.041 L 3.228 2.038 L 3.228 2.038 L 3.147 1.041 Z M 0.354 1.775 L 1.245 2.229 L 0.354 1.775 Z M 1.775 0.354 L 2.229 1.245 L 1.775 0.354 Z M 22.225 0.354 L 22.679 -0.537 L 22.679 -0.537 L 22.225 0.354 Z M 23.646 1.775 L 22.755 2.229 L 22.755 2.229 L 23.646 1.775 Z M 23.646 10.225 L 22.755 9.771 L 22.755 9.771 L 23.646 10.225 Z M 22.225 11.646 L 21.771 10.755 L 21.771 10.755 L 22.225 11.646 Z M 1.775 11.646 L 2.229 10.755 L 2.229 10.755 L 1.775 11.646 Z M 0.354 10.225 L -0.537 10.679 L -0.537 10.679 L 0.354 10.225 Z M 25 4.063 L 25.249 3.095 L 24 2.773 L 24 4.063 L 25 4.063 Z M 25 7.937 L 24 7.937 L 24 9.227 L 25.249 8.905 L 25 7.937 Z M 18.8 0 L 5.2 0 L 5.2 2 L 18.8 2 L 18.8 0 Z M 20.935 0.044 C 20.393 0 19.71 0 18.8 0 L 18.8 2 C 19.743 2 20.33 2.002 20.772 2.038 L 20.935 0.044 Z M 22.225 0.354 C 21.878 0.177 21.476 0.089 20.935 0.044 L 20.772 2.038 C 21.19 2.072 21.299 2.127 21.317 2.136 L 22.225 0.354 Z M 23.646 1.775 C 23.334 1.163 22.837 0.666 22.225 0.354 L 21.317 2.136 C 21.553 2.256 21.744 2.447 21.864 2.683 L 23.646 1.775 Z M 23.956 3.065 C 23.911 2.524 23.823 2.122 23.646 1.775 L 21.864 2.683 C 21.873 2.701 21.928 2.81 21.962 3.228 L 23.956 3.065 Z M 24 5.2 C 24 4.29 24 3.607 23.956 3.065 L 21.962 3.228 C 21.998 3.67 22 4.257 22 5.2 L 24 5.2 Z M 24 6.8 L 24 5.2 L 22 5.2 L 22 6.8 L 24 6.8 Z M 23.956 8.935 C 24 8.393 24 7.71 24 6.8 L 22 6.8 C 22 7.743 21.998 8.33 21.962 8.772 L 23.956 8.935 Z M 23.646 10.225 C 23.823 9.878 23.911 9.476 23.956 8.935 L 21.962 8.772 C 21.928 9.19 21.873 9.299 21.864 9.317 L 23.646 10.225 Z M 22.225 11.646 C 22.837 11.334 23.334 10.837 23.646 10.225 L 21.864 9.317 C 21.744 9.553 21.553 9.744 21.317 9.864 L 22.225 11.646 Z M 20.935 11.956 C 21.476 11.911 21.878 11.823 22.225 11.646 L 21.317 9.864 C 21.299 9.873 21.19 9.928 20.772 9.962 L 20.935 11.956 Z M 18.8 12 C 19.71 12 20.393 12 20.935 11.956 L 20.772 9.962 C 20.33 9.998 19.743 10 18.8 10 L 18.8 12 Z M 5.2 12 L 18.8 12 L 18.8 10 L 5.2 10 L 5.2 12 Z M 3.065 11.956 C 3.607 12 4.29 12 5.2 12 L 5.2 10 C 4.257 10 3.67 9.998 3.228 9.962 L 3.065 11.956 Z M 1.775 11.646 C 2.122 11.823 2.524 11.911 3.065 11.956 L 3.228 9.962 C 2.81 9.928 2.701 9.873 2.683 9.864 L 1.775 11.646 Z M 0.354 10.225 C 0.666 10.837 1.163 11.334 1.775 11.646 L 2.683 9.864 C 2.447 9.744 2.256 9.553 2.136 9.317 L 0.354 10.225 Z M 0.044 8.935 C 0.089 9.476 0.177 9.878 0.354 10.225 L 2.136 9.317 C 2.127 9.299 2.072 9.19 2.038 8.772 L 0.044 8.935 Z M 0 6.8 C 0 7.71 0 8.393 0.044 8.935 L 2.038 8.772 C 2.002 8.33 2 7.743 2 6.8 L 0 6.8 Z M 0 5.2 L 0 6.8 L 2 6.8 L 2 5.2 L 0 5.2 Z M 0.044 3.065 C 0 3.607 0 4.29 0 5.2 L 2 5.2 C 2 4.257 2.002 3.67 2.038 3.228 L 0.044 3.065 Z M 0.354 1.775 C 0.177 2.122 0.089 2.524 0.044 3.065 L 2.038 3.228 C 2.072 2.81 2.127 2.701 2.136 2.683 L 0.354 1.775 Z M 1.775 0.354 C 1.163 0.666 0.666 1.163 0.354 1.775 L 2.136 2.683 C 2.256 2.447 2.447 2.256 2.683 2.136 L 1.775 0.354 Z M 3.065 0.044 C 2.524 0.089 2.122 0.177 1.775 0.354 L 2.683 2.136 C 2.701 2.127 2.81 2.072 3.228 2.038 L 3.065 0.044 Z M 5.2 0 C 4.29 0 3.607 0 3.065 0.044 L 3.228 2.038 C 3.67 2.002 4.257 2 5.2 2 L 5.2 0 Z M -0.537 1.321 C -0.798 1.833 -0.903 2.38 -0.952 2.984 C -1.001 3.576 -1 4.306 -1 5.2 L 1 5.2 C 1 4.273 1.001 3.639 1.041 3.147 C 1.08 2.667 1.152 2.412 1.245 2.229 L -0.537 1.321 Z M 1.321 -0.537 C 0.521 -0.129 -0.129 0.521 -0.537 1.321 L 1.245 2.229 C 1.461 1.805 1.805 1.461 2.229 1.245 L 1.321 -0.537 Z M 5.2 -1 C 4.306 -1 3.576 -1.001 2.984 -0.952 C 2.38 -0.903 1.833 -0.798 1.321 -0.537 L 2.229 1.245 C 2.412 1.152 2.667 1.08 3.147 1.041 C 3.639 1.001 4.273 1 5.2 1 L 5.2 -1 Z M 18.8 -1 L 5.2 -1 L 5.2 1 L 18.8 1 L 18.8 -1 Z M 22.679 -0.537 C 22.167 -0.798 21.62 -0.903 21.016 -0.952 C 20.424 -1.001 19.694 -1 18.8 -1 L 18.8 1 C 19.727 1 20.361 1.001 20.853 1.041 C 21.333 1.08 21.588 1.152 21.771 1.245 L 22.679 -0.537 Z M 24.537 1.321 C 24.129 0.521 23.479 -0.129 22.679 -0.537 L 21.771 1.245 C 22.195 1.461 22.539 1.805 22.755 2.229 L 24.537 1.321 Z M 25 5.2 C 25 4.306 25.001 3.576 24.952 2.984 C 24.903 2.38 24.798 1.833 24.537 1.321 L 22.755 2.229 C 22.848 2.412 22.92 2.667 22.959 3.147 C 22.999 3.639 23 4.273 23 5.2 L 25 5.2 Z M 25 6.8 L 25 5.2 L 23 5.2 L 23 6.8 L 25 6.8 Z M 24.537 10.679 C 24.798 10.167 24.903 9.62 24.952 9.016 C 25.001 8.424 25 7.694 25 6.8 L 23 6.8 C 23 7.727 22.999 8.361 22.959 8.853 C 22.92 9.333 22.848 9.588 22.755 9.771 L 24.537 10.679 Z M 22.679 12.537 C 23.479 12.129 24.129 11.479 24.537 10.679 L 22.755 9.771 C 22.539 10.195 22.195 10.539 21.771 10.755 L 22.679 12.537 Z M 18.8 13 C 19.694 13 20.424 13.001 21.016 12.952 C 21.62 12.903 22.167 12.798 22.679 12.537 L 21.771 10.755 C 21.588 10.848 21.333 10.92 20.853 10.959 C 20.361 10.999 19.727 11 18.8 11 L 18.8 13 Z M 5.2 13 L 18.8 13 L 18.8 11 L 5.2 11 L 5.2 13 Z M 1.321 12.537 C 1.833 12.798 2.38 12.903 2.984 12.952 C 3.576 13.001 4.306 13 5.2 13 L 5.2 11 C 4.273 11 3.639 10.999 3.147 10.959 C 2.667 10.92 2.412 10.848 2.229 10.755 L 1.321 12.537 Z M -0.537 10.679 C -0.129 11.479 0.521 12.129 1.321 12.537 L 2.229 10.755 C 1.805 10.539 1.461 10.195 1.245 9.771 L -0.537 10.679 Z M -1 6.8 C -1 7.694 -1.001 8.424 -0.952 9.016 C -0.903 9.62 -0.798 10.167 -0.537 10.679 L 1.245 9.771 C 1.152 9.588 1.08 9.333 1.041 8.853 C 1.001 8.361 1 7.727 1 6.8 L -1 6.8 Z M -1 5.2 L -1 6.8 L 1 6.8 L 1 5.2 L -1 5.2 Z M 24.751 5.031 C 25.182 5.143 25.5 5.535 25.5 6 L 27.5 6 C 27.5 4.601 26.543 3.428 25.249 3.095 L 24.751 5.031 Z M 26 7.937 L 26 4.063 L 24 4.063 L 24 7.937 L 26 7.937 Z M 25.5 6 C 25.5 6.465 25.182 6.857 24.751 6.969 L 25.249 8.905 C 26.543 8.572 27.5 7.399 27.5 6 L 25.5 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 20,
            height: 8,
            borderRadius: 1.5,
            backgroundColor: "var(--labels-primary)",
          }} />
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Type=Status and menu bar - Windowed
    "type=status and menu bar - windowed": __body0,
    // figma: Type=Status and menu bar - Fullscreen
    "type=status and menu bar - fullscreen": __body1,
    // figma: Type=Status bar only
    "type=status bar only": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default StatusBarAndMenuBar;
