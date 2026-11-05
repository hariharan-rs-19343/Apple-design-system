import { BackgroundLightDefaultEmoji } from '../kit/BackgroundLightDefaultEmoji.jsx';
import { HomeIndicator } from '../bezels/HomeIndicator.jsx';

// figma node: 204:67770 Keyboard - iPad/Emoji/Light
export function KeyboardIPadEmojiLight(_p = {}) {
  const props = { ..._p, showBar: _p.showBar ?? true, showReplace: _p.showReplace ?? true, email2: _p.email2 ?? "name@email.com", email1: _p.email1 ?? "name@email.com" };
  return (
    <div className={props.className} style={{
      width: 1210,
      height: 428,
      overflow: "hidden",
      borderRadius: 27,
      position: "relative",
      ...props.style,
    }}>
      <BackgroundLightDefaultEmoji style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 428,
        }} />
      <div style={{
          position: "absolute",
          left: 0,
          top: 409,
          width: 1210,
          height: 19,
        }}>
        <HomeIndicator
          style={{ transform: "scale(3.025, 0.974)", transformOrigin: "0 0" }}
          device={"iPad"}
          orientation={"landscape"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 11,
        top: 51,
        display: "flex",
        flexDirection: "row",
        gap: 15,
        padding: "0px 4px 0px 4px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{props.text1 ?? "😀\n😃\n😄\n😁\n😆"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{props.text2 ?? "🥹\n😅\n😂\n🤣\n🥲"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{props.text3 ?? "☺️\n😊\n😇\n🙂\n🙃"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{props.text4 ?? "😉\n😌\n😍\n🥰\n😘"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"😗\n😙\n😚\n😋\n😛"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"😝\n😜\n🤪\n🤨\n🧐"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"🤓\n😎\n🥸\n🤩\n🥳"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"😏\n😒\n😞\n😔\n😟"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"😕\n🙁\n☹\n️😣\n😖"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"😫\n😩\n🥺\n😢\n😭"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"😤\n😠\n😡\n🤬\n🤯"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"😳\n🥵\n🥶\n😶‍🌫️\n😱"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"😰\n😥\n😓\n🤗\n🤔"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"😨\n😰\n😥\n😓\n🤗"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"🤔\n🫣\n🤭\n🫢\n🫡"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"🤫\n🫠\n🤥\n😶\n🫥"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"😐\n🫤\n😑\n😬\n🙄"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"😯\n😦\n😧\n😮\n😲"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"🥱\n😴\n🤤\n😪\n😮‍💨"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"😵\n😵‍💫\n🤐\n🥴\n🤢"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"🤮\n🤧\n😷\n🤒\n🤕"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"🤑\n🤠\n😈\n👿\n👹"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"👺\n🤡\n💩\n👻\n💀"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"☠️\n👽\n👾\n🤖\n🎃"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"😺\n😸\n😹\n😻\n😼"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          textAlign: "center",
          lineHeight: "60px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          whiteSpace: "pre-wrap",
        }}>{"😽\n🙀\n😿\n😾\n🫶🏼"}</span>
      </div>
      <span style={{
        position: "absolute",
        left: 1134,
        top: 364,
        width: 35,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 23.5,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--miscellaneous-keyboards-emoji-mic)",
      }}>􀓖</span>
      <span style={{
        position: "absolute",
        left: 1043,
        top: 365,
        width: 31,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 24,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--miscellaneous-keyboards-emoji-mic)",
      }}>􀆛</span>
      <span style={{
        position: "absolute",
        left: 930,
        top: 364,
        width: 49,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "rgb(80,85,92)",
      }}>space</span>
      <div style={{
        position: "absolute",
        left: 227,
        top: 354,
        width: 636,
        height: 44,
      }}>
        <div style={{
          position: "absolute",
          left: 67,
          top: 0,
          width: 44,
          height: 44,
          borderRadius: "50%",
          backgroundColor: "rgb(201,206,214)",
        }} />
        <svg width={16.500} height={21.500} viewBox="0 0 16.500 21.500" fill="none" style={{
          position: "absolute",
          left: 619.5,
          top: 11.5,
          width: 16.5,
          height: 21.5,
          color: "rgb(117,118,119)",
        }}>
          <path d={"M 8.896 2.45 C 8.896 2.45 10.664 1.504 12 1.504 C 13.064 1.533 14.097 1.841 15 2.393 L 15 11.213 C 14.063 10.772 13.04 10.537 12 10.527 C 10.745 10.576 9.514 10.888 8.387 11.445 C 7.355 12.053 6.195 12.406 5 12.476 C 2.5 12.476 1.5 10.991 1.5 10.991 L 1.5 2.479 C 1.5 2.479 2.5 3.396 5 3.396 C 6.352 3.369 7.682 3.046 8.896 2.45 Z M 1.5 0.464 L 1.5 0.444 L 0 0.444 L 0 21.5 L 1.5 21.5 L 1.5 12.864 C 1.5 12.864 2.5 13.923 5 13.923 C 6.352 13.896 7.682 13.574 8.896 12.977 C 8.896 12.977 10.664 12.031 12 12.031 C 13.228 12.042 14.433 12.368 15.5 12.977 L 16.5 13.64 L 16.5 12.476 L 16.5 12.136 L 16.5 3.112 L 16.5 1.816 L 16.5 1.608 L 15.5 0.946 C 14.433 0.337 13.228 0.011 12 0 C 10.745 0.048 9.514 0.361 8.387 0.917 C 7.355 1.525 6.195 1.879 5 1.949 C 2.5 1.949 1.5 0.464 1.5 0.464 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width={22.000} height={24.000} viewBox="0 0 22.000 24.000" fill="none" style={{
          position: "absolute",
          left: 540,
          top: 10,
          width: 22,
          height: 24,
          color: "rgb(117,118,119)",
        }}>
          <path d={"M 16.313 0 L 16.276 7.529 C 16.276 7.529 14.841 7.186 13.845 7.728 C 12.258 8.595 12.267 9.825 12.618 10.778 C 13.232 12.447 17.845 11.641 17.845 8.422 L 17.845 1.982 C 17.845 1.982 20.062 3.084 20.213 5.144 C 20.272 5.952 19.901 6.605 19.601 7.133 C 19.304 7.656 19.077 8.057 19.403 8.364 C 19.403 8.364 21.266 6.682 21.3 5.072 C 21.374 1.477 18.745 0 16.314 0 L 16.313 0 Z M 9.974 23.893 L 8.091 23.893 L 7.074 22.777 C 6.213 23.531 5.103 23.954 3.948 23.969 C 1.987 23.969 0.498 22.821 0.498 21.045 C 0.498 19.723 1.323 18.911 2.459 18.283 C 2.587 18.209 2.721 18.142 2.863 18.075 C 2.19 17.369 1.606 16.67 1.606 15.748 C 1.606 14.465 2.713 13.406 4.263 13.406 C 5.722 13.406 6.92 14.354 6.92 15.758 C 6.92 17.023 5.924 17.744 4.779 18.346 L 6.959 20.814 C 7.33 20.03 7.503 19.17 7.464 18.307 L 7.464 17.921 L 8.797 17.921 L 8.797 18.352 C 8.863 19.559 8.574 20.759 7.966 21.81 L 9.974 23.893 Z M 3.626 18.948 C 3.514 19 3.41 19.052 3.305 19.112 C 2.496 19.543 1.942 20.071 1.943 20.933 C 1.943 22.115 2.912 22.571 4.02 22.571 C 4.827 22.606 5.614 22.32 6.201 21.778 L 3.626 18.948 Z M 4.018 17.543 L 4.017 17.543 C 4.922 17.09 5.573 16.644 5.573 15.826 C 5.594 15.357 5.351 14.915 4.939 14.675 C 4.527 14.435 4.014 14.437 3.604 14.679 C 3.194 14.921 2.953 15.365 2.977 15.834 C 2.977 16.347 3.232 16.778 4.017 17.543 L 4.016 17.543 L 4.018 17.543 Z M 17.57 18.703 L 13.921 23.953 L 12.067 24 L 16.168 18.527 L 19.929 13.434 L 21.731 13.434 L 17.57 18.703 Z M 10.687 5.471 L 6.107 5.472 L 6.107 11.451 L 4.58 11.451 L 4.58 5.472 L 0 5.474 L 0 3.976 L 10.687 3.976 L 10.687 5.471 Z M 10.687 0.985 L 0 0.985 L 0 2.48 L 10.687 2.48 L 10.687 0.985 Z M 19.866 23.913 C 18.527 23.913 17.763 22.795 17.763 21.385 L 17.763 21.176 C 17.763 19.802 18.548 18.685 19.881 18.685 C 21.214 18.685 22 19.787 22 21.19 L 22 21.399 C 22 22.757 21.229 23.913 19.866 23.913 Z M 19.889 19.839 C 19.252 19.839 18.941 20.437 18.941 21.248 L 18.941 21.307 C 18.941 22.172 19.279 22.75 19.882 22.75 C 20.472 22.75 20.824 22.185 20.824 21.321 L 20.824 21.261 C 20.824 20.403 20.5 19.839 19.889 19.839 Z M 11.656 16.137 C 11.656 17.548 12.42 18.665 13.76 18.665 C 15.122 18.665 15.893 17.51 15.893 16.152 L 15.893 15.945 C 15.893 14.542 15.107 13.439 13.774 13.439 C 12.441 13.439 11.656 14.557 11.656 15.931 L 11.656 16.137 Z M 12.839 16.002 C 12.839 15.195 13.149 14.6 13.783 14.6 C 14.39 14.6 14.714 15.162 14.714 16.015 L 14.714 16.074 C 14.714 16.934 14.364 17.496 13.776 17.496 C 13.176 17.496 12.839 16.921 12.839 16.061 L 12.839 16.004 L 12.839 16.002 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width={16.500} height={24} viewBox="0 0 16.500 24" fill="none" style={{
          position: "absolute",
          left: 465,
          top: 10,
          width: 16.5,
          height: 24,
          color: "rgb(117,118,119)",
        }}>
          <path d={"M 11.659 22.484 L 11.595 22.483 L 11.659 22.483 L 11.659 19.554 L 11.808 18.25 C 12.014 16.535 12.831 14.961 14.099 13.832 C 15.696 12.35 16.574 10.214 16.495 8 C 16.495 3.589 12.796 0 8.25 0 C 3.704 0 0.005 3.589 0.005 8 C -0.074 10.214 0.804 12.35 2.401 13.832 C 3.669 14.961 4.486 16.535 4.692 18.25 L 4.841 19.556 L 4.841 22.484 C 4.856 23.147 5.334 23.702 5.97 23.796 C 6.724 23.922 7.486 23.99 8.25 24 C 9.014 23.99 9.776 23.922 10.53 23.796 C 11.166 23.702 11.644 23.147 11.659 22.484 Z M 13.126 12.717 C 11.623 14.054 10.636 15.942 10.372 18 L 6.128 18 C 5.862 15.937 4.875 14.052 3.352 12.696 C 2.097 11.532 1.396 9.825 1.46 8 C 1.46 4.439 4.488 1.5 8.25 1.5 C 12.012 1.5 15.04 4.439 15.041 8.055 C 15.104 9.825 14.403 11.532 13.126 12.717 Z M 6.296 19.556 L 6.296 19.5 L 10.204 19.5 L 10.204 22.331 C 9.537 22.436 8.885 22.492 8.232 22.5 C 7.606 22.492 6.949 22.435 6.296 22.331 L 6.296 19.556 Z M 9.22 11.5 C 9.22 11.579 9.229 11.656 9.246 11.73 L 8.25 12.676 L 7.254 11.729 C 7.271 11.656 7.28 11.579 7.28 11.5 C 7.28 10.948 6.846 10.5 6.31 10.5 C 5.774 10.5 5.34 10.948 5.34 11.5 C 5.34 12.052 5.774 12.5 6.31 12.5 C 6.391 12.5 6.471 12.49 6.546 12.47 L 7.765 13.629 L 7.765 17 L 8.735 17 L 8.735 13.629 L 9.954 12.47 C 10.03 12.49 10.109 12.5 10.19 12.5 C 10.726 12.5 11.16 12.052 11.16 11.5 C 11.16 10.948 10.726 10.5 10.19 10.5 C 9.654 10.5 9.22 10.948 9.22 11.5 Z M 6.31 20.5 L 6.31 21.5 L 8.25 21.5 L 8.25 20.5 L 6.31 20.5 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
          position: "absolute",
          left: 385,
          top: 10,
          width: 24,
          height: 24,
          color: "rgb(117,118,119)",
        }}>
          <path d={"M 5 0 L 15.5 0 L 15.5 5.984 L 24 5.984 L 24 22.485 L 22.5 22.485 L 22.5 9 L 22.5 7.5 L 15.5 7.5 L 15.5 9 L 14 9 L 14 1.5 L 6.5 1.5 L 6.487 10.5 L 1.5 10.5 L 1.5 22.485 L 0 22.485 L 0 8.984 L 5.01 8.984 L 5 0 Z M 3 11.984 L 4.5 11.984 L 4.5 13.484 L 3 13.484 L 3 11.984 Z M 12.5 6 L 11 6 L 11 7.5 L 12.5 7.5 L 12.5 6 Z M 8 6 L 9.5 6 L 9.5 7.5 L 8 7.5 L 8 6 Z M 21 8.984 L 19.5 8.984 L 19.5 10.484 L 21 10.484 L 21 8.984 Z M 19.5 11.984 L 21 11.984 L 21 13.484 L 19.5 13.484 L 19.5 11.984 Z M 9.5 3 L 8 2.984 L 8 4.5 L 9.5 4.5 L 9.5 3 Z M 11 3 L 12.5 3 L 12.5 4.5 L 11 4.5 L 11 3 Z M 19.5 16 L 18 16 L 18 14.5 C 17.911 11.979 15.835 9.986 13.313 10 L 10.688 10 C 8.165 9.986 6.089 11.979 6 14.5 L 6 16 L 4.5 16 C 3.948 16 3.5 16.448 3.5 17 L 3.5 21 C 3.5 21.552 3.948 22 4.5 22 L 4.5 24 L 7.5 24 L 7.5 22 L 16.5 22 L 16.5 24 L 19.5 24 L 19.5 22 C 20.052 22 20.5 21.552 20.5 21 L 20.5 17 C 20.5 16.448 20.052 16 19.5 16 Z M 16.5 16 C 16.5 13.712 16.5 11.5 12 11.5 C 7.5 11.5 7.5 13.715 7.5 16 L 16.5 16 Z M 6.219 17.11 C 6.84 17.11 7.344 17.613 7.344 18.235 C 7.344 18.856 6.84 19.36 6.219 19.36 C 5.598 19.36 5.094 18.856 5.094 18.235 C 5.094 17.613 5.598 17.11 6.219 17.11 Z M 18.875 18.235 C 18.875 17.613 18.372 17.11 17.75 17.11 L 17.75 17.11 C 17.129 17.11 16.625 17.613 16.625 18.235 C 16.625 18.856 17.129 19.36 17.75 19.36 C 18.372 19.36 18.875 18.856 18.875 18.235 Z M 19.5 20 L 19.5 20.985 L 15.25 20.985 L 8.75 20.985 L 4.5 20.985 L 4.5 20 L 8.25 20 L 8.25 19.985 C 8.25 19.708 8.474 19.485 8.75 19.485 L 15.25 19.485 C 15.526 19.485 15.75 19.708 15.75 19.985 L 15.75 20 L 19.5 20 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
          position: "absolute",
          left: 308,
          top: 10,
          width: 24,
          height: 24,
          color: "rgb(117,118,119)",
        }}>
          <path d={"M 0 12 C 0 18.627 5.373 24 12 24 C 18.627 24 24 18.627 24 12 C 24 5.373 18.627 0 12 0 C 5.373 0 0 5.373 0 12 Z M 20.344 13.333 L 20.328 13.307 L 22.344 12.842 L 22.55 13.227 C 22.224 16.062 20.782 18.557 18.674 20.262 L 17.857 20.055 L 17.86 17.061 L 20.344 13.333 Z M 16.849 20.582 L 16.918 17.553 L 13.996 16.458 L 10.458 18.363 L 10.458 20.539 L 14.837 22.135 L 14.825 22.021 L 16.849 20.582 Z M 13.492 11.846 L 13.492 15.668 L 9.976 17.563 L 6.3 15.52 L 6.28 11.444 L 9.293 9.491 L 13.492 11.846 Z M 16.927 9.614 L 14.055 11.086 L 9.872 8.737 L 9.63 5.538 L 13.842 3.347 L 16.932 5.294 L 16.927 9.614 Z M 17.867 5.654 L 17.862 9.399 L 19.79 12.454 L 22.235 11.804 L 22.503 10.414 C 22.177 8.242 21.195 6.285 19.763 4.753 L 17.867 5.654 Z M 13.466 2.466 L 13.466 1.48 C 12.987 1.414 12.497 1.38 12 1.38 C 9.75 1.38 7.663 2.08 5.946 3.273 L 6.336 4.56 L 9.444 4.56 L 13.466 2.466 Z M 5.345 11.374 L 3.677 9.039 L 1.572 9.978 C 1.445 10.633 1.379 11.309 1.379 12 C 1.379 14.029 1.948 15.925 2.935 17.537 L 3.805 17.398 L 3.73 17.313 L 5.363 15.68 L 5.345 11.374 Z M 3.532 7.988 L 5.458 4.908 L 5.126 3.904 C 3.643 5.164 2.511 6.825 1.896 8.719 L 3.532 7.988 Z M 3.509 18.381 L 4.522 18.218 L 6.822 20.847 L 6.812 21.27 C 5.52 20.545 4.395 19.558 3.509 18.381 Z M 7.736 21.73 L 7.744 21.454 L 10.09 21.454 L 13.04 22.571 C 12.698 22.604 12.351 22.621 12 22.621 C 10.483 22.621 9.041 22.303 7.736 21.73 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width={24} height={23.998} viewBox="0 0 24 23.998" fill="none" style={{
          position: "absolute",
          left: 231,
          top: 10,
          width: 24,
          height: 23.998,
          color: "rgb(117,118,119)",
        }}>
          <path d={"M 23.2 14.855 C 23.223 15.121 22.366 15.429 22.366 15.429 L 24 16.374 C 24 16.374 23.769 16.653 23.304 16.907 C 23.89 17.372 23.979 17.887 23.979 18.429 C 23.979 19.096 23.722 19.675 22.858 20.217 C 23.288 20.608 23.711 22.049 23.711 22.494 C 23.711 23.256 21.54 23.989 21.04 23.989 C 20.539 23.989 16.513 23.995 13.777 23.995 C 12.56 23.995 11.402 24.001 10.331 23.995 L 1.922 23.972 L 0 5.472 L 8.805 5.472 L 10.031 0.539 L 10.034 0.539 C 10.112 0.23 10.39 0 10.723 0 C 10.788 0 10.849 0.012 10.908 0.028 L 10.91 0.025 L 10.999 0.056 C 11 0.056 11.001 0.056 11.002 0.057 L 15.864 1.717 L 15.403 3.066 L 11.228 1.64 L 10.274 5.472 L 12.524 5.472 L 12.08 10.029 C 12.663 9.999 13.261 9.982 13.874 9.982 C 19.257 9.982 23.641 11.119 23.641 13.802 C 23.641 14.302 23.371 14.32 23.09 14.774 C 23.127 14.799 23.196 14.808 23.2 14.855 L 23.2 14.855 Z M 6.235 22.101 C 6.742 22.602 7.917 22.495 7.917 22.495 L 13.505 22.495 L 20.519 22.495 C 20.519 22.495 21.111 22.49 21.567 22.04 C 22.221 21.394 21.418 20.48 20.605 20.48 C 19.004 20.48 8.898 20.467 7.044 20.467 C 6.214 20.467 5.727 21.598 6.235 22.101 L 6.235 22.101 Z M 13.918 19.428 L 22.8 16.488 L 5.398 16.488 L 13.918 19.428 Z M 1.574 6.973 L 3.12 22.494 L 4.03 22.494 C 4.018 22.049 4.548 20.654 4.977 20.263 C 4.112 19.722 3.709 19.237 3.709 18.569 C 3.709 17.997 3.864 17.221 4.513 16.737 C 3.705 16.459 3.571 15.89 4.089 15.737 C 4.664 15.567 4.729 15.96 5.07 15.522 C 4.405 14.865 4.03 14.587 4.03 13.801 C 4.03 11.676 6.832 10.525 10.669 10.137 L 11.02 6.973 L 1.574 6.973 Z M 13.873 11.436 C 10.972 11.436 5.399 12.076 5.504 13.828 C 5.536 14.357 7.494 14.987 7.494 14.987 L 13.905 14.987 L 20.268 14.987 C 20.268 14.987 22.202 14.3 22.216 13.828 C 22.267 12.075 16.682 11.436 13.873 11.436 L 13.873 11.436 Z M 0 5.472 C 0.02 5.694 0 5.514 0 5.472 L 0 5.472 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
          position: "absolute",
          left: 154,
          top: 10,
          width: 24,
          height: 24,
          color: "rgb(117,118,119)",
        }}>
          <path d={"M 21.416 9.761 C 22.848 8.102 24.769 4.341 22.115 1.536 C 21.184 0.553 20.028 0.022 18.772 0.001 C 16.296 -0.04 14.283 1.879 14.061 2.098 L 14.061 2.099 C 13.519 1.991 12.939 1.93 12.315 1.93 C 11.507 1.93 10.765 2.033 10.078 2.208 L 9.962 2.102 L 9.958 2.099 C 9.737 1.879 7.723 -0.04 5.248 0.001 C 3.992 0.022 2.836 0.552 1.905 1.537 C -0.744 4.335 1.164 8.085 2.594 9.75 C 1.603 10.683 -0.711 13.284 0.214 16.568 C 1.565 21.371 5.792 21.534 6.074 21.539 L 6.836 21.539 C 8.138 23.236 10.364 24 12.009 24 C 13.519 24 15.76 23.352 17.149 21.539 L 17.911 21.539 C 18.209 21.534 22.435 21.371 23.786 16.568 C 24.709 13.29 22.407 10.694 21.416 9.761 Z M 22.343 16.159 C 21.301 19.864 18.242 20.029 17.911 20.036 L 16.606 20.036 C 16.208 20.036 15.886 20.346 15.86 20.738 C 14.776 22.047 13.04 22.497 12.009 22.497 C 11 22.497 9.286 22.063 8.194 20.817 C 8.194 20.812 8.195 20.808 8.196 20.803 C 8.197 20.798 8.198 20.793 8.198 20.787 C 8.198 20.372 7.862 20.036 7.448 20.036 L 6.103 20.036 C 5.758 20.029 2.699 19.864 1.657 16.159 C 0.79 13.08 3.801 10.676 3.925 10.579 L 4.3 10.288 L 4.443 9.837 C 4.525 9.576 6.534 3.434 12.315 3.434 C 18 3.434 19.467 9.467 19.526 9.718 L 19.649 10.245 L 20.07 10.575 C 20.198 10.676 23.21 13.08 22.343 16.159 Z M 5.273 1.504 C 4.513 1.517 3.721 1.802 2.992 2.572 C 1.071 4.603 2.646 7.294 3.417 8.364 C 4.084 6.886 5.635 4.181 8.474 2.797 C 7.844 2.298 6.608 1.482 5.273 1.504 Z M 18.746 1.504 C 19.507 1.516 20.298 1.801 21.026 2.571 C 22.914 4.565 21.432 7.193 20.647 8.301 C 20.065 6.747 18.657 3.946 15.752 2.638 C 16.423 2.143 17.545 1.484 18.746 1.504 Z M 12.652 19.787 C 12.723 19.862 12.834 19.917 13.002 19.917 C 13.513 19.917 13.534 19.423 13.534 19.418 L 14.533 19.463 L 14.533 19.467 C 14.502 20.172 13.954 20.919 13.002 20.919 C 12.617 20.919 12.268 20.784 12.003 20.542 C 11.737 20.784 11.388 20.919 11.003 20.919 C 10.051 20.919 9.504 20.172 9.472 19.467 L 9.472 19.463 L 10.471 19.418 C 10.471 19.423 10.493 19.917 11.003 19.917 C 11.171 19.917 11.281 19.862 11.353 19.787 C 11.496 19.641 11.491 19.423 11.491 19.423 L 11.491 18.327 C 10.707 17.969 9.797 16.942 9.797 16.277 C 9.797 15.46 10.621 15.46 10.621 15.46 L 11.995 15.46 L 13.37 15.46 C 13.37 15.46 14.194 15.46 14.194 16.277 C 14.194 16.939 13.295 17.955 12.514 18.32 L 12.514 19.423 C 12.514 19.423 12.509 19.641 12.652 19.787 Z M 16.485 10.95 C 15.934 10.95 15.486 11.624 15.486 12.454 C 15.486 13.283 15.934 13.957 16.485 13.957 C 17.038 13.957 17.485 13.283 17.485 12.454 C 17.485 11.624 17.038 10.95 16.485 10.95 Z M 6.489 12.454 C 6.489 11.624 6.937 10.95 7.489 10.95 C 8.041 10.95 8.488 11.624 8.488 12.454 C 8.488 13.283 8.041 13.957 7.489 13.957 C 6.937 13.957 6.489 13.283 6.489 12.454 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
          position: "absolute",
          left: 77,
          top: 10,
          width: 24,
          height: 24,
          color: "rgb(23,23,23)",
        }}>
          <path d={"M 24 12 C 24 5.373 18.627 0 12 0 C 5.373 0 0 5.373 0 12 C 0 18.627 5.373 24 12 24 C 18.627 24 24 18.627 24 12 Z M 22.515 12 C 22.515 6.201 17.814 1.5 12.016 1.5 C 6.217 1.5 1.515 6.201 1.515 12 C 1.515 17.799 6.217 22.5 12.016 22.5 C 17.814 22.5 22.515 17.799 22.515 12 Z M 15.5 7.5 C 16.052 7.5 16.5 8.172 16.5 9 C 16.5 9.828 16.052 10.5 15.5 10.5 C 14.948 10.5 14.5 9.828 14.5 9 C 14.5 8.172 14.948 7.5 15.5 7.5 Z M 9.5 9 C 9.5 8.171 9.052 7.5 8.5 7.5 C 7.948 7.5 7.5 8.171 7.5 9 C 7.5 9.829 7.945 10.5 8.5 10.5 C 9.055 10.5 9.5 9.829 9.5 9 Z M 12.009 14.487 C 14.104 14.487 15.999 14.045 17.36 13.727 C 18.689 13.417 19.509 13.226 19.509 13.681 C 19.509 17.725 16.151 21.002 12.009 21.002 C 7.867 21.002 4.509 17.725 4.509 13.681 C 4.509 13.226 5.329 13.417 6.658 13.727 C 8.019 14.045 9.914 14.487 12.009 14.487 Z M 16.644 15.156 C 15.596 15.424 13.99 15.834 12 15.834 C 10.01 15.834 8.404 15.424 7.356 15.156 C 6.485 14.934 6 14.81 6 15.102 C 6 17.904 10.362 18.03 12 18.03 C 13.839 18.03 18 17.904 18 15.102 C 18 14.81 17.515 14.934 16.644 15.156 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 10,
          width: 24,
          height: 24,
          color: "rgb(117,118,119)",
        }}>
          <path d={"M 24 12 C 24 5.373 18.627 0 12 0 C 5.373 0 0 5.373 0 12 C 0 18.627 5.373 24 12 24 C 18.627 24 24 18.627 24 12 Z M 22.501 12 C 22.501 6.201 17.8 1.5 12.001 1.5 C 6.202 1.5 1.501 6.201 1.501 12 C 1.501 17.799 6.202 22.5 12.001 22.5 C 17.8 22.5 22.501 17.799 22.501 12 Z M 6 11.5 L 11.5 11.5 L 11.5 3 L 13.001 3 L 13.001 11.5 L 13 11.5 L 13 13 L 6 13 L 6 11.5 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
      <span style={{
        position: "absolute",
        left: 133,
        top: 365,
        width: 25,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 21,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--miscellaneous-keyboards-emoji-mic)",
      }}>􀊫</span>
      <span style={{
        position: "absolute",
        left: 33,
        top: 363,
        width: 48,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 18.5,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--miscellaneous-keyboards-emoji-mic)",
      }}>A B C</span>
      <span style={{
        position: "absolute",
        left: 18,
        top: 21.5,
        width: 166,
        height: 22,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.400px",
        color: "rgba(60,60,67,0.3)",
      }}>SMILEYS &amp; PEOPLE</span>
    </div>
  );
}
export default KeyboardIPadEmojiLight;
