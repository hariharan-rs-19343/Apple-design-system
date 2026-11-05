import { ControlsBGIPad } from '../home-screen/ControlsBGIPad.jsx';
import { ControlsIPad1x1 } from '../home-screen/ControlsIPad1x1.jsx';
import { ControlsIPad2x1 } from '../home-screen/ControlsIPad2x1.jsx';
import { ControlsIPad2x2 } from '../home-screen/ControlsIPad2x2.jsx';
import { HomeIndicator } from '../bezels/HomeIndicator.jsx';
import { LockScreenIPad } from '../home-screen/LockScreenIPad.jsx';

// figma node: 2606:21776 Control Center - iPad
export function ControlCenterIPad(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1210,
      height: 834,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <LockScreenIPad style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
        }} />
      <HomeIndicator
        style={{
          position: "absolute",
          left: 405,
          top: 814,
          width: 400,
          height: 19.5,
        }}
        device={"iPad"}
        orientation={"landscape"}
      />
      <div style={{
        position: "absolute",
        left: 866,
        top: 72,
        width: 294,
        height: 491,
      }}>
        <div style={{
          position: "absolute",
          left: -120,
          top: -75,
          width: 534,
          height: 686,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 534,
            height: 686,
            clipPath: "inset(60px 60px 60px 60px round 34px)",
          }}>
            <div style={{
              position: "absolute",
              left: -100,
              top: -100,
              width: 734,
              height: 886,
              background: "linear-gradient(rgb(17,17,17),rgb(17,17,17)), linear-gradient(rgb(229,229,229),rgb(229,229,229)), linear-gradient(rgba(68,68,68,0.6),rgba(68,68,68,0.6))",
              backdropFilter: "blur(20px)",
            }} />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 152,
          top: 425,
          width: 66,
          height: 66,
          borderRadius: 296,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 66,
              height: 66,
            }}>{props.icon1 ?? <ControlsBGIPad on={false} />}</div>
          <svg width={35.334} height={16.730} viewBox="0 0 35.334 16.730" fill="none" style={{
            position: "absolute",
            left: 15.819,
            top: 24.928,
            width: 35.334,
            height: 16.73,
            color: "rgba(255,255,255,0.5)",
          }}>
            <path d={"M 6.546 16.73 C 5.778 16.73 5.085 16.688 4.466 16.604 C 3.848 16.526 3.293 16.379 2.8 16.163 C 2.308 15.953 1.861 15.65 1.459 15.254 C 1.069 14.863 0.768 14.425 0.558 13.939 C 0.348 13.447 0.201 12.891 0.117 12.273 C 0.039 11.655 0 10.961 0 10.193 L 0 6.51 C 0 5.37 0.096 4.394 0.288 3.584 C 0.48 2.767 0.873 2.065 1.468 1.477 C 2.056 0.888 2.761 0.495 3.584 0.297 C 4.406 0.099 5.382 0 6.51 0 L 24.663 0 C 25.432 0 26.125 0.042 26.743 0.126 C 27.362 0.204 27.917 0.351 28.409 0.567 C 28.901 0.777 29.349 1.081 29.751 1.477 C 30.141 1.867 30.441 2.308 30.651 2.8 C 30.861 3.287 31.005 3.839 31.083 4.457 C 31.168 5.076 31.21 5.769 31.21 6.537 L 31.21 10.193 C 31.21 10.961 31.168 11.655 31.083 12.273 C 31.005 12.885 30.861 13.438 30.651 13.93 C 30.441 14.422 30.141 14.863 29.751 15.254 C 29.355 15.65 28.907 15.953 28.409 16.163 C 27.917 16.379 27.362 16.526 26.743 16.604 C 26.125 16.688 25.432 16.73 24.663 16.73 L 6.546 16.73 Z M 6.222 14.065 L 24.987 14.065 C 25.612 14.065 26.164 14.011 26.644 13.903 C 27.124 13.795 27.509 13.594 27.797 13.3 C 28.079 13.011 28.274 12.633 28.382 12.165 C 28.49 11.697 28.544 11.148 28.544 10.517 L 28.544 6.222 C 28.544 5.586 28.49 5.034 28.382 4.565 C 28.28 4.097 28.085 3.716 27.797 3.422 C 27.503 3.134 27.115 2.935 26.635 2.827 C 26.161 2.719 25.612 2.665 24.987 2.665 L 6.249 2.665 C 5.613 2.665 5.052 2.719 4.565 2.827 C 4.085 2.929 3.701 3.128 3.413 3.422 C 3.125 3.716 2.926 4.1 2.818 4.574 C 2.716 5.049 2.665 5.607 2.665 6.249 L 2.665 10.517 C 2.665 11.148 2.716 11.697 2.818 12.165 C 2.926 12.633 3.125 13.011 3.413 13.3 C 3.707 13.594 4.091 13.795 4.565 13.903 C 5.04 14.011 5.592 14.065 6.222 14.065 Z M 32.974 11.652 L 32.974 5.079 C 33.311 5.103 33.659 5.253 34.019 5.529 C 34.385 5.805 34.694 6.186 34.946 6.672 C 35.205 7.153 35.334 7.717 35.334 8.365 C 35.334 9.013 35.205 9.581 34.946 10.067 C 34.694 10.547 34.385 10.928 34.019 11.211 C 33.659 11.487 33.311 11.634 32.974 11.652 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={17.072} height={8.284} viewBox="0 0 17.072 8.284" fill="none" style={{
            position: "absolute",
            left: 20.042,
            top: 29.151,
            width: 17.072,
            height: 8.284,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 0.936 8.203 C 1.159 8.257 1.441 8.284 1.783 8.284 L 15.29 8.284 C 15.638 8.284 15.92 8.257 16.136 8.203 C 16.352 8.143 16.532 8.041 16.676 7.897 C 16.82 7.753 16.922 7.573 16.982 7.357 C 17.042 7.135 17.072 6.852 17.072 6.51 L 17.072 1.774 C 17.072 1.432 17.042 1.153 16.982 0.936 C 16.922 0.714 16.82 0.531 16.676 0.387 C 16.538 0.249 16.358 0.15 16.136 0.09 C 15.914 0.03 15.632 0 15.29 0 L 1.81 0 C 1.456 0 1.165 0.03 0.936 0.09 C 0.714 0.144 0.534 0.24 0.396 0.378 C 0.252 0.522 0.15 0.708 0.09 0.936 C 0.03 1.159 0 1.447 0 1.801 L 0 6.51 C 0 6.852 0.03 7.135 0.09 7.357 C 0.15 7.573 0.252 7.753 0.396 7.897 C 0.54 8.041 0.72 8.143 0.936 8.203 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 228,
          top: 350,
          width: 66,
          height: 66,
          borderRadius: 296,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 66,
              height: 66,
            }}>{props.icon2 ?? <ControlsBGIPad on={false} />}</div>
          <svg width={23.817} height={19.017} viewBox="0 0 23.817 19.017" fill="none" style={{
            position: "absolute",
            left: 19,
            top: 22,
            width: 23.817,
            height: 19.017,
            color: "rgba(255,255,255,0.5)",
          }}>
            <path d={"M 3.962 19.017 C 2.671 19.017 1.687 18.681 1.009 18.009 C 0.336 17.337 0 16.361 0 15.083 L 0 3.926 C 0 2.647 0.336 1.675 1.009 1.009 C 1.687 0.336 2.671 0 3.962 0 L 19.864 0 C 21.149 0 22.127 0.336 22.799 1.009 C 23.478 1.681 23.817 2.653 23.817 3.926 L 23.817 6.6 L 21.161 6.6 L 21.161 4.232 C 21.161 3.698 21.025 3.302 20.755 3.044 C 20.485 2.785 20.098 2.656 19.594 2.656 L 4.223 2.656 C 3.719 2.656 3.332 2.785 3.062 3.044 C 2.797 3.302 2.665 3.698 2.665 4.232 L 2.665 14.776 C 2.665 15.311 2.797 15.707 3.062 15.965 C 3.332 16.223 3.719 16.352 4.223 16.352 L 7.177 16.352 L 7.177 19.017 L 3.962 19.017 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={24} height={19} viewBox="0 0 24 19" fill="none" style={{
            position: "absolute",
            left: 25,
            top: 27.5,
            width: 24,
            height: 19,
            color: "var(--grays-white)",
          }}>
            <path d={"M 3.983 19 C 2.689 19 1.7 18.664 1.016 17.992 C 0.339 17.321 0 16.349 0 15.078 L 0 3.922 C 0 2.651 0.339 1.679 1.016 1.008 C 1.7 0.336 2.689 0 3.983 0 L 20.008 0 C 21.302 0 22.291 0.336 22.975 1.008 C 23.658 1.679 24 2.651 24 3.922 L 24 15.078 C 24 16.349 23.658 17.321 22.975 17.992 C 22.291 18.664 21.302 19 20.008 19 L 3.983 19 Z M 4.256 16.337 L 19.744 16.337 C 20.253 16.337 20.64 16.208 20.906 15.95 C 21.178 15.692 21.314 15.3 21.314 14.772 L 21.314 4.237 C 21.314 3.703 21.178 3.308 20.906 3.05 C 20.64 2.792 20.253 2.663 19.744 2.663 L 4.256 2.663 C 3.741 2.663 3.351 2.792 3.085 3.05 C 2.819 3.308 2.686 3.703 2.686 4.237 L 2.686 14.772 C 2.686 15.3 2.819 15.692 3.085 15.95 C 3.351 16.208 3.741 16.337 4.256 16.337 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
            position: "absolute",
            left: 0,
            top: 198,
            width: 66,
            height: 66,
          }}>{props.icon3 ?? <ControlsIPad1x1 symbol={"􀌟"} on={false} />}</div>
        <ControlsIPad2x2
          style={{
            position: "absolute",
            left: 0,
            top: 349,
            width: 142,
            height: 142,
          }}
          symbol={"􀛮"}
          on={false}
        />
        <div style={{
          position: "absolute",
          left: 228,
          top: 197,
          width: 66,
          height: 142,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 66,
              height: 142,
            }}>
            <ControlsBGIPad
              style={{ transform: "scale(1, 2.152)", transformOrigin: "0 0" }}
              on={false}
            />
          </div>
          <svg width={66} height={72} viewBox="0 0 66 72" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 70,
            width: 66,
            height: 72,
            borderRadius: 100,
          }}>
            <path d={"M 0 0 L 66 0 L 66 39 C 66 57.225 51.225 72 33 72 L 33 72 C 14.775 72 0 57.225 0 39 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 16.286,
            top: 97.484,
            width: 29.402,
            height: 22.725,
          }}>
            <svg width={9.890} height={18.458} viewBox="0 0 9.890 18.458" fill="none" style={{
              position: "absolute",
              left: 19.513,
              top: 2.118,
              width: 9.89,
              height: 18.458,
              opacity: 0.5,
              color: "var(--accents-cyan)",
            }}>
              <path d={"M 0.546 14.868 C 0.242 14.665 0.064 14.394 0.013 14.055 C -0.029 13.717 0.068 13.366 0.305 13.002 C 0.652 12.494 0.923 11.918 1.118 11.275 C 1.312 10.623 1.41 9.942 1.41 9.231 C 1.41 8.52 1.312 7.839 1.118 7.187 C 0.931 6.536 0.661 5.96 0.305 5.461 C 0.06 5.105 -0.038 4.758 0.013 4.42 C 0.064 4.073 0.242 3.798 0.546 3.594 C 0.817 3.417 1.109 3.357 1.422 3.417 C 1.735 3.476 1.985 3.641 2.171 3.912 C 2.688 4.597 3.09 5.406 3.377 6.337 C 3.665 7.259 3.809 8.224 3.809 9.231 C 3.809 10.238 3.665 11.203 3.377 12.126 C 3.09 13.048 2.688 13.852 2.171 14.538 C 1.985 14.817 1.735 14.986 1.422 15.046 C 1.109 15.096 0.817 15.037 0.546 14.868 Z M 5.612 18.258 C 5.315 18.071 5.146 17.813 5.104 17.483 C 5.062 17.145 5.15 16.81 5.37 16.48 C 6.039 15.482 6.56 14.36 6.932 13.116 C 7.304 11.872 7.491 10.577 7.491 9.231 C 7.491 7.885 7.304 6.591 6.932 5.346 C 6.568 4.094 6.048 2.972 5.37 1.982 C 5.142 1.652 5.049 1.322 5.091 0.992 C 5.142 0.653 5.315 0.391 5.612 0.205 C 5.899 0.019 6.2 -0.041 6.513 0.027 C 6.835 0.086 7.093 0.26 7.287 0.548 C 8.117 1.707 8.756 3.044 9.204 4.559 C 9.661 6.066 9.89 7.623 9.89 9.231 C 9.89 10.839 9.661 12.397 9.204 13.903 C 8.747 15.401 8.108 16.738 7.287 17.915 C 7.093 18.203 6.835 18.376 6.513 18.435 C 6.2 18.495 5.899 18.435 5.612 18.258 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={15.526} height={22.725} viewBox="0 0 15.526 22.725" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 15.526,
              height: 22.725,
              color: "var(--accents-cyan)",
            }}>
              <path d={"M 13.889 22.725 C 13.567 22.725 13.262 22.653 12.975 22.509 C 12.687 22.373 12.386 22.158 12.073 21.861 L 6.767 16.834 C 6.682 16.766 6.585 16.732 6.475 16.732 L 2.869 16.732 C 1.947 16.732 1.236 16.479 0.736 15.971 C 0.245 15.463 0 14.714 0 13.724 L 0 9.014 C 0 8.032 0.245 7.287 0.736 6.779 C 1.236 6.271 1.947 6.018 2.869 6.018 L 6.475 6.018 C 6.585 6.018 6.682 5.979 6.767 5.903 L 12.073 0.939 C 12.429 0.609 12.738 0.372 13 0.229 C 13.262 0.076 13.55 0 13.863 0 C 14.354 0 14.752 0.165 15.057 0.495 C 15.37 0.825 15.526 1.227 15.526 1.701 L 15.526 21.087 C 15.526 21.552 15.374 21.942 15.069 22.255 C 14.765 22.568 14.371 22.725 13.889 22.725 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 152,
          top: 197,
          width: 66,
          height: 142,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 66,
              height: 142,
            }}>
            <ControlsBGIPad
              style={{ transform: "scale(1, 2.152)", transformOrigin: "0 0" }}
              on={false}
            />
          </div>
          <svg width={66} height={87} viewBox="0 0 66 87" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 55,
            width: 66,
            height: 87,
            borderRadius: 100,
          }}>
            <path d={"M 0 0 L 66 0 L 66 54 C 66 72.225 51.225 87 33 87 L 33 87 C 14.775 87 0 72.225 0 54 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 18.87,
            top: 94.679,
            width: 28.247,
            height: 28.298,
            overflow: "hidden",
          }}>
            <svg width={28.247} height={28.298} viewBox="0 0 28.247 28.298" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 28.247,
              height: 28.298,
              opacity: 0.5,
              color: "var(--accents-yellow)",
            }}>
              <path d={"M 14.13 5.192 C 13.774 5.192 13.474 5.065 13.229 4.812 C 12.983 4.558 12.86 4.257 12.86 3.91 L 12.86 1.27 C 12.86 0.923 12.983 0.626 13.229 0.381 C 13.474 0.127 13.774 0 14.13 0 C 14.468 0 14.76 0.127 15.006 0.381 C 15.26 0.626 15.387 0.923 15.387 1.27 L 15.387 3.91 C 15.387 4.257 15.26 4.558 15.006 4.812 C 14.76 5.065 14.468 5.192 14.13 5.192 Z M 20.452 7.833 C 20.207 7.596 20.084 7.3 20.084 6.944 C 20.084 6.589 20.207 6.288 20.452 6.043 L 22.331 4.164 C 22.568 3.919 22.864 3.796 23.22 3.796 C 23.575 3.787 23.876 3.906 24.121 4.151 C 24.367 4.397 24.489 4.697 24.489 5.053 C 24.489 5.408 24.367 5.709 24.121 5.954 L 22.255 7.833 C 22.009 8.087 21.709 8.214 21.354 8.214 C 20.998 8.205 20.698 8.078 20.452 7.833 Z M 23.067 14.155 C 23.067 13.808 23.19 13.512 23.436 13.267 C 23.689 13.013 23.994 12.886 24.35 12.886 L 26.978 12.886 C 27.325 12.886 27.621 13.013 27.866 13.267 C 28.12 13.512 28.247 13.808 28.247 14.155 C 28.247 14.502 28.12 14.799 27.866 15.044 C 27.621 15.289 27.325 15.412 26.978 15.412 L 24.35 15.412 C 23.994 15.412 23.689 15.289 23.436 15.044 C 23.19 14.799 23.067 14.502 23.067 14.155 Z M 20.452 20.478 C 20.689 20.241 20.985 20.122 21.341 20.122 C 21.696 20.122 21.997 20.241 22.242 20.478 L 24.121 22.356 C 24.367 22.593 24.489 22.89 24.489 23.245 C 24.489 23.601 24.371 23.901 24.134 24.146 C 23.888 24.383 23.588 24.502 23.232 24.502 C 22.877 24.51 22.581 24.4 22.344 24.172 L 20.452 22.268 C 20.207 22.031 20.084 21.739 20.084 21.392 C 20.084 21.036 20.207 20.731 20.452 20.478 Z M 14.13 23.118 C 14.468 23.118 14.76 23.241 15.006 23.486 C 15.26 23.74 15.387 24.041 15.387 24.388 L 15.387 27.028 C 15.387 27.375 15.26 27.672 15.006 27.917 C 14.76 28.171 14.468 28.298 14.13 28.298 C 13.774 28.298 13.474 28.171 13.229 27.917 C 12.983 27.672 12.86 27.375 12.86 27.028 L 12.86 24.388 C 12.86 24.041 12.983 23.74 13.229 23.486 C 13.474 23.241 13.774 23.118 14.13 23.118 Z M 7.795 20.478 C 8.032 20.731 8.15 21.036 8.15 21.392 C 8.15 21.739 8.028 22.031 7.782 22.268 L 5.903 24.159 C 5.666 24.388 5.366 24.498 5.002 24.489 C 4.646 24.489 4.346 24.371 4.101 24.134 C 3.872 23.888 3.758 23.588 3.758 23.232 C 3.758 22.877 3.881 22.581 4.126 22.344 L 5.992 20.478 C 6.238 20.241 6.538 20.122 6.894 20.122 C 7.249 20.122 7.549 20.241 7.795 20.478 Z M 5.18 14.155 C 5.18 14.502 5.053 14.799 4.799 15.044 C 4.545 15.289 4.244 15.412 3.897 15.412 L 1.257 15.412 C 0.918 15.412 0.622 15.289 0.368 15.044 C 0.123 14.799 0 14.502 0 14.155 C 0 13.808 0.123 13.512 0.368 13.267 C 0.622 13.013 0.918 12.886 1.257 12.886 L 3.897 12.886 C 4.244 12.886 4.545 13.013 4.799 13.267 C 5.053 13.512 5.18 13.808 5.18 14.155 Z M 7.782 7.833 C 7.537 8.078 7.236 8.201 6.881 8.201 C 6.534 8.201 6.238 8.078 5.992 7.833 L 4.126 5.941 C 3.889 5.704 3.771 5.408 3.771 5.053 C 3.771 4.697 3.893 4.397 4.139 4.151 C 4.384 3.906 4.685 3.787 5.04 3.796 C 5.396 3.804 5.692 3.927 5.929 4.164 L 7.795 6.043 C 8.032 6.28 8.15 6.58 8.15 6.944 C 8.15 7.3 8.028 7.596 7.782 7.833 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={13.254} height={13.267} viewBox="0 0 13.254 13.267" fill="none" style={{
              position: "absolute",
              left: 7.49,
              top: 7.516,
              width: 13.254,
              height: 13.267,
              color: "var(--accents-yellow)",
            }}>
              <path d={"M 6.627 13.267 C 5.713 13.267 4.854 13.097 4.05 12.759 C 3.246 12.412 2.539 11.938 1.93 11.337 C 1.329 10.728 0.855 10.021 0.508 9.217 C 0.169 8.413 0 7.554 0 6.64 C 0 5.717 0.169 4.858 0.508 4.063 C 0.855 3.258 1.329 2.556 1.93 1.955 C 2.539 1.346 3.246 0.868 4.05 0.521 C 4.854 0.174 5.713 0 6.627 0 C 7.541 0 8.4 0.174 9.204 0.521 C 10.008 0.868 10.711 1.346 11.312 1.955 C 11.921 2.556 12.395 3.258 12.733 4.063 C 13.08 4.858 13.254 5.717 13.254 6.64 C 13.254 7.554 13.08 8.413 12.733 9.217 C 12.395 10.021 11.921 10.728 11.312 11.337 C 10.711 11.938 10.008 12.412 9.204 12.759 C 8.4 13.097 7.541 13.267 6.627 13.267 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <ControlsIPad2x1
          style={{
            position: "absolute",
            left: 0,
            top: 273,
            width: 142,
            height: 66,
          }}
          symbol={"􀆺"}
          on={false}
          type={"toggle"}
        />
        <div style={{
          position: "absolute",
          left: 76,
          top: 197,
          width: 66,
          height: 66,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 66,
            height: 66,
          }}>
            <svg width={66} height={66} viewBox="0 0 66 66" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 66,
              height: 66,
              overflow: "hidden",
              borderRadius: 100,
            }}>
              <path d={"M 0 33 C 0 14.775 14.775 0 33 0 L 33 0 C 51.225 0 66 14.775 66 33 L 66 33 C 66 51.225 51.225 66 33 66 L 33 66 C 14.775 66 0 51.225 0 33 L 0 33 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 66,
            height: 66,
            opacity: 0.9,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 19,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "rgba(255,0,0,0.6)",
          }}>􀋞</span>
        </div>
        <div style={{
          position: "absolute",
          left: 152,
          top: 349,
          width: 66,
          height: 66,
          borderRadius: 296,
        }}>
          <ControlsBGIPad
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 66,
              height: 66,
            }}
            on={false}
          />
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 66,
            height: 66,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "var(--grays-white)",
          }}>{props.text1 ?? "􀑚"}</span>
        </div>
        <div style={{
          position: "absolute",
          left: 152,
          top: 45,
          width: 142,
          height: 142,
          borderRadius: 30,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 142,
              height: 142,
            }}>
            <ControlsBGIPad
              style={{ transform: "scale(2.152, 2.152)", transformOrigin: "0 0" }}
              on={false}
            />
          </div>
          <span style={{
            position: "absolute",
            left: 98,
            top: 111,
            width: 20,
            height: 14,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "rgb(255,255,255)",
          }}>{props.text2 ?? "􀊌"}</span>
          <span style={{
            position: "absolute",
            left: 58,
            top: 102,
            width: 24,
            height: 30,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 25,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "rgb(255,255,255)",
          }}>{props.text3 ?? "􀊄"}</span>
          <span style={{
            position: "absolute",
            left: 24,
            top: 111,
            width: 20,
            height: 14,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "rgb(255,255,255)",
          }}>{props.text4 ?? "􀊊"}</span>
          <span style={{
            position: "absolute",
            left: 16,
            top: 84,
            width: 110,
            height: 18,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.080px",
            color: "rgba(255,255,255,0.33)",
          }}>Artist</span>
          <span style={{
            position: "absolute",
            left: 16,
            top: 66,
            width: 110,
            height: 18,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "rgb(255,255,255)",
          }}>Track</span>
          <div style={{
            position: "absolute",
            left: 89,
            top: 13.5,
            width: 39,
            height: 39,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
          }}>
            <span style={{
              position: "absolute",
              left: 8,
              top: 8.5,
              width: 23,
              height: 23,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "rgb(255,255,255)",
            }}>􀑢</span>
          </div>
          <div style={{
            position: "absolute",
            left: 14,
            top: 14,
            width: 50,
            height: 50,
            borderRadius: 14,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 45,
          width: 142,
          height: 142,
          borderRadius: 30,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 142,
              height: 142,
            }}>
            <ControlsBGIPad
              style={{ transform: "scale(2.152, 2.152)", transformOrigin: "0 0" }}
              on={false}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 105.333,
            top: 105.333,
            width: 23,
            height: 23,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
          }}>
            <span style={{
              position: "absolute",
              left: -0.333,
              top: -0.333,
              width: 23,
              height: 23,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 9,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀤆</span>
          </div>
          <div style={{
            position: "absolute",
            left: 77,
            top: 105.333,
            width: 23,
            height: 23,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: -0.333,
              width: 23,
              height: 23,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀉤</span>
          </div>
          <div style={{
            position: "absolute",
            left: 105.333,
            top: 77,
            width: 23,
            height: 23,
            borderRadius: 100,
            backgroundColor: "var(--accents-blue)",
          }}>
            <svg width={6.942} height={11} viewBox="0 0 6.942 11" fill="none" style={{
              position: "absolute",
              left: 7.667,
              top: 6,
              width: 6.942,
              height: 11,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 3.97 4.198 L 3.97 1.766 L 5.467 2.992 L 3.97 4.198 Z M 3.97 9.238 L 3.97 6.807 L 5.467 8.012 L 3.97 9.238 Z M 2.713 10.288 C 2.713 10.974 3.575 11.234 4.136 10.756 L 6.61 8.657 C 6.838 8.469 6.942 8.22 6.942 7.971 C 6.942 7.721 6.828 7.472 6.599 7.295 L 4.365 5.497 L 6.599 3.699 C 6.828 3.512 6.932 3.263 6.942 3.024 C 6.942 2.785 6.838 2.535 6.61 2.338 L 4.136 0.249 C 3.565 -0.24 2.713 0.031 2.713 0.716 L 2.713 4.26 L 1.039 2.878 C 0.915 2.774 0.769 2.722 0.613 2.722 C 0.27 2.722 0 2.992 0 3.335 C 0 3.522 0.073 3.71 0.249 3.845 L 2.318 5.508 L 0.249 7.17 C 0.073 7.305 0 7.493 0 7.68 C 0 8.054 0.281 8.293 0.613 8.293 C 0.759 8.293 0.915 8.241 1.039 8.137 L 2.713 6.755 L 2.713 10.288 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
          <div style={{
            position: "absolute",
            left: 77,
            top: 77,
            width: 23,
            height: 23,
            borderRadius: 100,
            backgroundColor: "var(--accents-green)",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 23,
              height: 23,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 7,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀭧</span>
          </div>
          <div style={{
            position: "absolute",
            left: 13,
            top: 77,
            width: 51,
            height: 51,
            borderRadius: 100,
            backgroundColor: "var(--accents-blue)",
          }}>
            <span style={{
              position: "absolute",
              left: 14,
              top: 19,
              width: 23,
              height: 14,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀙇</span>
          </div>
          <div style={{
            position: "absolute",
            left: 77,
            top: 13,
            width: 51,
            height: 51,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
          }}>
            <svg width={24} height={22.612} viewBox="0 0 24 22.612" fill="none" style={{
              position: "absolute",
              left: 14,
              top: 14,
              width: 24,
              height: 22.612,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 22 12 C 22 15.865 19.807 19.218 16.598 20.882 L 17.607 22.612 C 21.409 20.599 24 16.602 24 12 C 24 5.373 18.627 0 12 0 C 5.373 0 0 5.373 0 12 C 0 16.602 2.591 20.599 6.393 22.612 L 7.402 20.882 C 4.193 19.218 2 15.865 2 12 C 2 6.477 6.477 2 12 2 C 17.523 2 22 6.477 22 12 Z M 20.666 12 C 20.666 15.373 18.739 18.296 15.925 19.728 L 14.915 17.997 C 17.136 16.915 18.666 14.636 18.666 12 C 18.666 8.318 15.681 5.333 12 5.333 C 8.318 5.333 5.333 8.318 5.333 12 C 5.333 14.636 6.864 16.916 9.085 17.997 L 8.075 19.729 C 5.261 18.297 3.333 15.373 3.333 12 C 3.333 7.213 7.213 3.333 12 3.333 C 16.786 3.333 20.666 7.213 20.666 12 Z M 15 12 C 15 13.285 14.192 14.382 13.055 14.809 L 14.072 16.552 C 15.799 15.764 17 14.022 17 12 C 17 9.239 14.761 7 12 7 C 9.239 7 7 9.239 7 12 C 7 14.022 8.201 15.764 9.928 16.552 L 10.945 14.809 C 9.808 14.382 9 13.285 9 12 C 9 10.343 10.343 9 12 9 C 13.657 9 15 10.343 15 12 Z M 12 13.666 C 12.92 13.666 13.666 12.92 13.666 12 C 13.666 11.079 12.92 10.333 12 10.333 C 11.079 10.333 10.333 11.079 10.333 12 C 10.333 12.92 11.079 13.666 12 13.666 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
          <div style={{
            position: "absolute",
            left: 13,
            top: 13,
            width: 51,
            height: 51,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
          }}>
            <span style={{
              position: "absolute",
              left: 15,
              top: 19,
              width: 22,
              height: 14,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀑓</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 191,
          top: 0,
          width: 97.428,
          height: 18,
        }}>
          <svg width={17.142} height={12.328} viewBox="0 0 17.142 12.328" fill="none" style={{
            position: "absolute",
            left: 1,
            top: 2.836,
            width: 17.142,
            height: 12.328,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 8.571 2.466 C 11.058 2.466 13.45 3.388 15.253 5.042 C 15.389 5.17 15.606 5.168 15.739 5.038 L 17.037 3.775 C 17.104 3.709 17.142 3.62 17.142 3.527 C 17.141 3.435 17.102 3.346 17.034 3.281 C 12.303 -1.094 4.839 -1.094 0.108 3.281 C 0.04 3.346 0.001 3.435 0 3.527 C -0.001 3.62 0.037 3.709 0.105 3.775 L 1.403 5.038 C 1.536 5.168 1.753 5.17 1.889 5.042 C 3.692 3.388 6.084 2.466 8.571 2.466 Z M 8.568 6.687 C 9.925 6.686 11.234 7.198 12.24 8.122 C 12.376 8.253 12.591 8.251 12.723 8.116 L 14.011 6.797 C 14.078 6.727 14.116 6.634 14.115 6.536 C 14.114 6.438 14.075 6.345 14.005 6.278 C 10.942 3.387 6.197 3.387 3.133 6.278 C 3.064 6.345 3.024 6.438 3.023 6.536 C 3.023 6.634 3.06 6.728 3.128 6.797 L 4.415 8.116 C 4.548 8.251 4.762 8.253 4.898 8.122 C 5.904 7.199 7.212 6.687 8.568 6.687 Z M 11.092 9.48 C 11.094 9.585 11.057 9.687 10.99 9.761 L 8.813 12.216 C 8.749 12.288 8.662 12.328 8.572 12.328 C 8.481 12.328 8.394 12.288 8.33 12.216 L 6.153 9.761 C 6.086 9.687 6.049 9.585 6.051 9.48 C 6.053 9.375 6.094 9.275 6.164 9.204 C 7.554 7.89 9.59 7.89 10.98 9.204 C 11.05 9.275 11.09 9.375 11.092 9.48 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <span style={{
            position: "absolute",
            left: 21,
            top: 0,
            width: 42,
            height: 18,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 15,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(255,255,255)",
          }}>100%</span>
          <div style={{
            position: "absolute",
            left: 67,
            top: 2,
            width: 31,
            height: 14,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 28,
              height: 14,
              opacity: 0.35,
              borderRadius: 4.665999889373779,
              boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
            }} />
            <svg width={2} height={5} viewBox="0 0 2 5" fill="none" style={{
              position: "absolute",
              left: 29,
              top: 4,
              width: 2,
              height: 5,
              opacity: 0.4,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 0 0 L 0 5 C 1.212 4.577 2 3.591 2 2.5 C 2 1.409 1.212 0.423 0 0"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
              position: "absolute",
              left: 2.5,
              top: 2.5,
              width: 23,
              height: 9,
              borderRadius: 2.200000047683716,
              backgroundColor: "rgb(255,255,255)",
            }} />
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 1174,
        top: 355,
        width: 21.33,
        height: 240.55,
        overflow: "hidden",
      }}>
        <svg width={17.440} height={14.860} viewBox="0 0 17.440 14.860" fill="none" style={{
          position: "absolute",
          left: 2,
          top: 109,
          width: 17.44,
          height: 14.86,
          color: "rgba(0,0,0,0.25)",
        }}>
          <path d={"M 14.19 11.22 C 14.34 11.4 14.53 11.49 14.77 11.5 C 15 11.5 15.22 11.4 15.42 11.19 C 16.08 10.49 16.58 9.67 16.92 8.74 C 17.26 7.8 17.44 6.81 17.44 5.77 C 17.44 5.07 17.36 4.4 17.2 3.75 C 17.04 3.1 16.81 2.48 16.51 1.9 C 16.21 1.32 15.85 0.81 15.42 0.35 C 15.22 0.14 15.01 0.03 14.77 0.04 C 14.54 0.04 14.34 0.14 14.19 0.31 C 14.05 0.48 13.99 0.66 14.02 0.86 C 14.05 1.06 14.15 1.25 14.31 1.43 C 14.82 1.99 15.21 2.65 15.48 3.4 C 15.75 4.15 15.89 4.94 15.89 5.78 C 15.89 6.62 15.75 7.41 15.48 8.16 C 15.21 8.91 14.82 9.56 14.31 10.13 C 14.15 10.31 14.05 10.5 14.02 10.7 C 13.99 10.9 14.04 11.08 14.19 11.25 L 14.19 11.22 Z M 11.76 8.92 C 11.91 9.1 12.1 9.19 12.35 9.19 C 12.59 9.19 12.8 9.09 12.98 8.88 C 13.32 8.48 13.58 8.01 13.76 7.47 C 13.94 6.93 14.04 6.36 14.04 5.77 C 14.04 5.18 13.95 4.61 13.76 4.07 C 13.58 3.53 13.32 3.06 12.98 2.66 C 12.8 2.45 12.59 2.34 12.35 2.34 C 12.11 2.34 11.91 2.43 11.76 2.61 C 11.62 2.78 11.57 2.95 11.6 3.15 C 11.63 3.34 11.72 3.53 11.85 3.72 C 12.05 3.99 12.2 4.3 12.32 4.66 C 12.44 5.02 12.49 5.39 12.49 5.77 C 12.49 6.15 12.43 6.52 12.32 6.88 C 12.21 7.24 12.05 7.56 11.84 7.82 C 11.71 8.01 11.62 8.2 11.59 8.39 C 11.56 8.58 11.61 8.76 11.75 8.93 L 11.76 8.92 Z M 7.13 5.76 C 7.13 6.07 7.21 6.34 7.37 6.59 C 7.53 6.84 7.73 7.03 7.99 7.16 L 7.99 14.04 C 7.99 14.28 8.06 14.48 8.2 14.63 C 8.34 14.78 8.51 14.86 8.73 14.86 C 8.95 14.86 9.13 14.79 9.27 14.64 C 9.4 14.49 9.47 14.29 9.47 14.04 L 9.47 7.16 C 9.72 7.03 9.92 6.84 10.08 6.59 C 10.24 6.34 10.32 6.06 10.32 5.76 C 10.32 5.46 10.25 5.2 10.11 4.96 C 9.97 4.72 9.78 4.53 9.54 4.38 C 9.3 4.24 9.03 4.16 8.74 4.16 C 8.45 4.16 8.18 4.23 7.94 4.38 C 7.7 4.52 7.51 4.72 7.37 4.96 C 7.23 5.2 7.16 5.47 7.16 5.76 L 7.13 5.76 Z M 3.39 5.76 C 3.39 6.36 3.48 6.92 3.67 7.46 C 3.85 8 4.11 8.47 4.45 8.87 C 4.63 9.08 4.84 9.18 5.08 9.18 C 5.32 9.18 5.52 9.09 5.67 8.91 C 5.81 8.74 5.86 8.57 5.83 8.37 C 5.8 8.18 5.71 7.99 5.58 7.8 C 5.38 7.54 5.22 7.23 5.1 6.86 C 4.98 6.49 4.93 6.13 4.93 5.75 C 4.93 5.37 4.99 5 5.1 4.64 C 5.22 4.28 5.37 3.96 5.57 3.7 C 5.71 3.51 5.79 3.32 5.82 3.13 C 5.85 2.94 5.8 2.76 5.66 2.59 C 5.51 2.41 5.32 2.32 5.07 2.32 C 4.83 2.32 4.62 2.42 4.44 2.64 C 4.1 3.04 3.84 3.51 3.66 4.05 C 3.48 4.59 3.38 5.16 3.38 5.75 L 3.39 5.76 Z M 0 5.76 C 0 6.8 0.17 7.79 0.52 8.73 C 0.86 9.67 1.36 10.49 2.02 11.18 C 2.22 11.39 2.44 11.5 2.67 11.49 C 2.9 11.49 3.09 11.39 3.24 11.21 C 3.38 11.04 3.44 10.86 3.41 10.66 C 3.38 10.46 3.28 10.27 3.12 10.09 C 2.61 9.53 2.22 8.87 1.95 8.12 C 1.68 7.37 1.54 6.58 1.54 5.74 C 1.54 4.9 1.68 4.11 1.95 3.36 C 2.22 2.61 2.61 1.96 3.12 1.39 C 3.28 1.21 3.38 1.02 3.41 0.82 C 3.44 0.62 3.39 0.44 3.24 0.27 C 3.09 0.09 2.9 0 2.67 0 C 2.44 0 2.22 0.1 2.02 0.31 C 1.59 0.77 1.23 1.28 0.93 1.86 C 0.63 2.44 0.4 3.05 0.24 3.71 C 0.08 4.36 0 5.04 0 5.73 L 0 5.76 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={13.780} height={16.891} viewBox="0 0 13.780 16.891" fill="none" style={{
          position: "absolute",
          left: 4,
          top: 53.33,
          width: 13.78,
          height: 16.891,
          color: "rgba(0,0,0,0.25)",
        }}>
          <path d={"M 2.32 16.881 C 2.61 16.881 2.93 16.821 3.27 16.701 C 3.61 16.581 3.94 16.401 4.24 16.141 C 4.55 15.891 4.8 15.551 4.99 15.141 C 5.18 14.731 5.28 14.231 5.28 13.651 L 5.28 6.251 C 5.28 6.071 5.3 5.951 5.34 5.901 C 5.38 5.851 5.48 5.811 5.64 5.781 L 12.09 4.451 C 12.27 4.411 12.39 4.411 12.45 4.451 C 12.51 4.491 12.54 4.591 12.54 4.741 L 12.59 9.701 C 12.59 10.061 12.42 10.281 12.09 10.351 L 10.91 10.611 C 9.29 10.961 8.48 11.751 8.48 12.981 C 8.48 13.391 8.58 13.761 8.79 14.081 C 8.99 14.401 9.27 14.661 9.63 14.841 C 9.98 15.021 10.39 15.121 10.84 15.121 C 11.14 15.121 11.45 15.061 11.79 14.951 C 12.13 14.841 12.45 14.661 12.75 14.411 C 13.05 14.161 13.3 13.841 13.49 13.431 C 13.68 13.031 13.78 12.531 13.78 11.951 L 13.78 0.951 C 13.78 0.551 13.68 0.271 13.47 0.131 C 13.26 -0.009 12.93 -0.039 12.48 0.051 L 4.88 1.621 C 4.3 1.741 4.01 2.051 4.01 2.551 L 4.06 11.491 C 4.06 11.831 3.92 12.031 3.63 12.081 L 2.39 12.341 C 1.59 12.511 0.99 12.801 0.59 13.211 C 0.2 13.621 0 14.131 0 14.761 C 0 15.391 0.22 15.901 0.66 16.291 C 1.1 16.691 1.65 16.891 2.33 16.891 L 2.32 16.881 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={16} height={14.820} viewBox="0 0 16 14.820" fill="none" style={{
          position: "absolute",
          left: 3,
          top: 1,
          width: 16,
          height: 14.82,
          color: "rgb(255,255,255)",
        }}>
          <path d={"M 8.005 14.82 C 8.115 14.82 8.255 14.78 8.405 14.71 C 8.555 14.63 8.705 14.55 8.856 14.46 C 10.306 13.52 11.557 12.54 12.628 11.5 C 13.699 10.46 14.529 9.4 15.119 8.3 C 15.71 7.2 16 6.1 16 4.98 C 16 4.24 15.88 3.56 15.64 2.96 C 15.4 2.35 15.069 1.83 14.659 1.38 C 14.239 0.94 13.759 0.6 13.208 0.36 C 12.658 0.12 12.068 0 11.437 0 C 10.657 0 9.976 0.2 9.396 0.59 C 8.816 0.98 8.355 1.5 8.005 2.14 C 7.665 1.5 7.205 0.99 6.624 0.59 C 6.044 0.19 5.363 0 4.573 0 C 3.942 0 3.352 0.12 2.802 0.36 C 2.251 0.6 1.771 0.94 1.351 1.38 C 0.931 1.82 0.6 2.35 0.36 2.96 C 0.12 3.57 0 4.24 0 4.98 C 0 6.09 0.29 7.2 0.881 8.3 C 1.471 9.4 2.301 10.46 3.372 11.5 C 4.443 12.54 5.704 13.52 7.154 14.46 C 7.295 14.55 7.445 14.64 7.605 14.71 C 7.755 14.79 7.895 14.82 8.005 14.82 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <span style={{
        position: "absolute",
        left: 1119.333,
        top: 16,
        width: 44,
        height: 44,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
      }}>􀆨</span>
      <span style={{
        position: "absolute",
        left: 857,
        top: 16,
        width: 44,
        height: 44,
        fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 15,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
      }}>􀅼</span>
    </div>
  );
}
export default ControlCenterIPad;
