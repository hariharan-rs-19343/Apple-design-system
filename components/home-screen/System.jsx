import { AppIconIPad } from '../app-icons/AppIconIPad.jsx';
import { AppIconIPhone } from '../app-icons/AppIconIPhone.jsx';
import { ContextMenuDimmingOverlay } from './ContextMenuDimmingOverlay.jsx';
import { ControlsBGIPad } from './ControlsBGIPad.jsx';
import { ControlsBGIPhone } from './ControlsBGIPhone.jsx';
import { ControlsIPad1x1 } from './ControlsIPad1x1.jsx';
import { ControlsIPad2x1 } from './ControlsIPad2x1.jsx';
import { ControlsIPad2x2 } from './ControlsIPad2x2.jsx';
import { ControlsIPhone1x1 } from './ControlsIPhone1x1.jsx';
import { ControlsIPhone2x2 } from './ControlsIPhone2x2.jsx';
import { ControlsLockScreen } from './ControlsLockScreen.jsx';
import { CustomIcon } from '../app-icons/CustomIcon.jsx';
import { DockIPad } from './DockIPad.jsx';
import { DockIPhone } from './DockIPhone.jsx';
import { DockMaterial } from './DockMaterial.jsx';
import { HSQAActions } from './HSQAActions.jsx';
import { HSQAAppIconDark } from './HSQAAppIconDark.jsx';
import { HSQAAppIconLight } from './HSQAAppIconLight.jsx';
import { HSQAWidgetDark } from './HSQAWidgetDark.jsx';
import { HSQAWidgetLight } from './HSQAWidgetLight.jsx';
import { HSQAWidgetRow } from './HSQAWidgetRow.jsx';
import { HomeIndicator } from '../bezels/HomeIndicator.jsx';
import { HomeScreenIPad } from './HomeScreenIPad.jsx';
import { HomeScreenQuickActions } from './HomeScreenQuickActions.jsx';
import { HomeScreenWidgetIPad } from './HomeScreenWidgetIPad.jsx';
import { HomeScreenWidgetIPhone } from '../surfaces/HomeScreenWidgetIPhone.jsx';
import { LaunchPad } from '../labels/LaunchPad.jsx';
import { LiquidGlassClearLight } from '../notifications/LiquidGlassClearLight.jsx';
import { LiquidGlassRegularMedium } from '../alerts/LiquidGlassRegularMedium.jsx';
import { LockScreenIPad } from './LockScreenIPad.jsx';
import { LockScreenIPhone } from './LockScreenIPhone.jsx';
import { LockScreenWidget2x2Date } from './LockScreenWidget2x2Date.jsx';
import { LockScreenWidgetCircularOpen } from './LockScreenWidgetCircularOpen.jsx';
import { LockScreenWidgetCircularOpen3 } from './LockScreenWidgetCircularOpen3.jsx';
import { LockScreenWidgetCircularStack } from './LockScreenWidgetCircularStack.jsx';
import { LockScreenWidgetInline } from './LockScreenWidgetInline.jsx';
import { LockScreenWidgetModularTable } from './LockScreenWidgetModularTable.jsx';
import { LockScreenWidgetModularWith } from './LockScreenWidgetModularWith.jsx';
import { LockScreenWidgetRectangularWith } from './LockScreenWidgetRectangularWith.jsx';
import { LockScreenWidgetTallBody2 } from './LockScreenWidgetTallBody2.jsx';
import { StatusBarAndMenuBar } from './StatusBarAndMenuBar.jsx';
import { SystemIcons } from '../app-icons/SystemIcons.jsx';
import { WallpapersIPad } from './WallpapersIPad.jsx';
import { WallpapersIPhone } from './WallpapersIPhone.jsx';

// figma node: 544:199445 System
export function System(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 6100,
      height: 6400,
      borderRadius: 22,
      backgroundColor: "var(--section-fill)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 4810,
        top: 1992,
        width: 1210,
        height: 834,
        overflow: "hidden",
      }}>
        <HomeScreenIPad
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1210,
            height: 834,
          }}
          widgets={"none"}
        />
        <svg width={1210} height={834} viewBox="0 0 1210 834" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1210,
          height: 834,
          color: "rgba(0,0,0,0.23)",
        }}>
          <path d={"M 0 0 L 200 0 L 200 200 L 0 200 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
            position: "absolute",
            left: 157,
            top: 466,
            width: 78,
            height: 78,
          }}>
          <CustomIcon
            style={{ transform: "scale(1.182, 1.182)", transformOrigin: "0 0" }}
            mode={"default"}
          />
        </div>
        <HomeScreenQuickActions style={{
            position: "absolute",
            left: 157,
            top: 90,
            width: 250,
          }} />
      </div>
      <div style={{
        position: "absolute",
        left: 5320,
        top: 1780,
        width: 130,
        height: 80,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 64,
          top: 20,
          width: 38,
          height: 38,
          borderRadius: 8,
          backgroundColor: "var(--fills-vibrant-tertiary)",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 38,
            height: 38,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 19,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--labels-primary)",
          }}>􂘬</span>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 38,
          height: 38,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 38,
            height: 38,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 19,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--labels-primary)",
          }}>􂘬</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 5480,
        top: 1780,
        width: 130,
        height: 80,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 64,
          top: 20,
          width: 38,
          height: 38,
          borderRadius: 8,
          backgroundColor: "rgb(18,18,18)",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 38,
            height: 38,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 19,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgb(255,255,255)",
          }}>􂘬</span>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 38,
          height: 38,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 38,
            height: 38,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 19,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgb(255,255,255)",
          }}>􂘬</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 5320,
        top: 1670,
        width: 130,
        height: 80,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 64,
          top: 20,
          width: 38,
          height: 38,
          borderRadius: 8,
          backgroundColor: "var(--fills-vibrant-tertiary)",
        }}>
          <svg width={17.080} height={17.080} viewBox="0 0 17.080 17.080" fill="none" style={{
            position: "absolute",
            left: 10.456,
            top: 10.767,
            width: 17.08,
            height: 17.08,
            color: "var(--labels-primary)",
          }}>
            <path d={"M 1.772 7.774 C 1.184 7.774 0.742 7.626 0.445 7.329 C 0.148 7.032 0 6.578 0 5.965 L 0 1.809 C 0 1.203 0.148 0.751 0.445 0.455 C 0.742 0.152 1.184 0 1.772 0 L 6.002 0 C 6.59 0 7.032 0.152 7.329 0.455 C 7.626 0.751 7.774 1.203 7.774 1.809 L 7.774 5.965 C 7.774 6.578 7.626 7.032 7.329 7.329 C 7.032 7.626 6.59 7.774 6.002 7.774 L 1.772 7.774 Z M 11.086 7.774 C 10.493 7.774 10.047 7.626 9.75 7.329 C 9.454 7.032 9.305 6.578 9.305 5.965 L 9.305 1.809 C 9.305 1.203 9.454 0.751 9.75 0.455 C 10.047 0.152 10.493 0 11.086 0 L 15.308 0 C 15.895 0 16.337 0.152 16.634 0.455 C 16.931 0.751 17.08 1.203 17.08 1.809 L 17.08 5.965 C 17.08 6.578 16.931 7.032 16.634 7.329 C 16.337 7.626 15.895 7.774 15.308 7.774 L 11.086 7.774 Z M 11.105 6.466 L 15.289 6.466 C 15.456 6.466 15.577 6.426 15.651 6.346 C 15.731 6.259 15.771 6.129 15.771 5.956 L 15.771 1.809 C 15.771 1.642 15.731 1.518 15.651 1.438 C 15.577 1.351 15.456 1.308 15.289 1.308 L 11.105 1.308 C 10.938 1.308 10.814 1.351 10.734 1.438 C 10.653 1.518 10.613 1.642 10.613 1.809 L 10.613 5.956 C 10.613 6.129 10.653 6.259 10.734 6.346 C 10.814 6.426 10.938 6.466 11.105 6.466 Z M 1.772 17.08 C 1.184 17.08 0.742 16.931 0.445 16.634 C 0.148 16.337 0 15.883 0 15.271 L 0 11.124 C 0 10.511 0.148 10.057 0.445 9.76 C 0.742 9.463 1.184 9.314 1.772 9.314 L 6.002 9.314 C 6.59 9.314 7.032 9.463 7.329 9.76 C 7.626 10.057 7.774 10.511 7.774 11.124 L 7.774 15.271 C 7.774 15.883 7.626 16.337 7.329 16.634 C 7.032 16.931 6.59 17.08 6.002 17.08 L 1.772 17.08 Z M 1.791 15.771 L 5.975 15.771 C 6.135 15.771 6.256 15.731 6.336 15.651 C 6.423 15.57 6.466 15.447 6.466 15.28 L 6.466 11.124 C 6.466 10.957 6.423 10.833 6.336 10.752 C 6.256 10.666 6.135 10.623 5.975 10.623 L 1.791 10.623 C 1.63 10.623 1.509 10.666 1.429 10.752 C 1.348 10.833 1.308 10.957 1.308 11.124 L 1.308 15.28 C 1.308 15.447 1.348 15.57 1.429 15.651 C 1.509 15.731 1.63 15.771 1.791 15.771 Z M 11.086 17.08 C 10.493 17.08 10.047 16.931 9.75 16.634 C 9.454 16.337 9.305 15.883 9.305 15.271 L 9.305 11.124 C 9.305 10.511 9.454 10.057 9.75 9.76 C 10.047 9.463 10.493 9.314 11.086 9.314 L 15.308 9.314 C 15.895 9.314 16.337 9.463 16.634 9.76 C 16.931 10.057 17.08 10.511 17.08 11.124 L 17.08 15.271 C 17.08 15.883 16.931 16.337 16.634 16.634 C 16.337 16.931 15.895 17.08 15.308 17.08 L 11.086 17.08 Z M 11.105 15.771 L 15.289 15.771 C 15.456 15.771 15.577 15.731 15.651 15.651 C 15.731 15.57 15.771 15.447 15.771 15.28 L 15.771 11.124 C 15.771 10.957 15.731 10.833 15.651 10.752 C 15.577 10.666 15.456 10.623 15.289 10.623 L 11.105 10.623 C 10.938 10.623 10.814 10.666 10.734 10.752 C 10.653 10.833 10.613 10.957 10.613 11.124 L 10.613 15.28 C 10.613 15.447 10.653 15.57 10.734 15.651 C 10.814 15.731 10.938 15.771 11.105 15.771 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 38,
          height: 38,
        }}>
          <svg width={17.080} height={17.080} viewBox="0 0 17.080 17.080" fill="none" style={{
            position: "absolute",
            left: 10.456,
            top: 10.767,
            width: 17.08,
            height: 17.08,
            color: "var(--labels-primary)",
          }}>
            <path d={"M 1.772 7.774 C 1.184 7.774 0.742 7.626 0.445 7.329 C 0.148 7.032 0 6.578 0 5.965 L 0 1.809 C 0 1.203 0.148 0.751 0.445 0.455 C 0.742 0.152 1.184 0 1.772 0 L 6.002 0 C 6.59 0 7.032 0.152 7.329 0.455 C 7.626 0.751 7.774 1.203 7.774 1.809 L 7.774 5.965 C 7.774 6.578 7.626 7.032 7.329 7.329 C 7.032 7.626 6.59 7.774 6.002 7.774 L 1.772 7.774 Z M 11.086 7.774 C 10.493 7.774 10.047 7.626 9.75 7.329 C 9.454 7.032 9.305 6.578 9.305 5.965 L 9.305 1.809 C 9.305 1.203 9.454 0.751 9.75 0.455 C 10.047 0.152 10.493 0 11.086 0 L 15.308 0 C 15.895 0 16.337 0.152 16.634 0.455 C 16.931 0.751 17.08 1.203 17.08 1.809 L 17.08 5.965 C 17.08 6.578 16.931 7.032 16.634 7.329 C 16.337 7.626 15.895 7.774 15.308 7.774 L 11.086 7.774 Z M 11.105 6.466 L 15.289 6.466 C 15.456 6.466 15.577 6.426 15.651 6.346 C 15.731 6.259 15.771 6.129 15.771 5.956 L 15.771 1.809 C 15.771 1.642 15.731 1.518 15.651 1.438 C 15.577 1.351 15.456 1.308 15.289 1.308 L 11.105 1.308 C 10.938 1.308 10.814 1.351 10.734 1.438 C 10.653 1.518 10.613 1.642 10.613 1.809 L 10.613 5.956 C 10.613 6.129 10.653 6.259 10.734 6.346 C 10.814 6.426 10.938 6.466 11.105 6.466 Z M 1.772 17.08 C 1.184 17.08 0.742 16.931 0.445 16.634 C 0.148 16.337 0 15.883 0 15.271 L 0 11.124 C 0 10.511 0.148 10.057 0.445 9.76 C 0.742 9.463 1.184 9.314 1.772 9.314 L 6.002 9.314 C 6.59 9.314 7.032 9.463 7.329 9.76 C 7.626 10.057 7.774 10.511 7.774 11.124 L 7.774 15.271 C 7.774 15.883 7.626 16.337 7.329 16.634 C 7.032 16.931 6.59 17.08 6.002 17.08 L 1.772 17.08 Z M 1.791 15.771 L 5.975 15.771 C 6.135 15.771 6.256 15.731 6.336 15.651 C 6.423 15.57 6.466 15.447 6.466 15.28 L 6.466 11.124 C 6.466 10.957 6.423 10.833 6.336 10.752 C 6.256 10.666 6.135 10.623 5.975 10.623 L 1.791 10.623 C 1.63 10.623 1.509 10.666 1.429 10.752 C 1.348 10.833 1.308 10.957 1.308 11.124 L 1.308 15.28 C 1.308 15.447 1.348 15.57 1.429 15.651 C 1.509 15.731 1.63 15.771 1.791 15.771 Z M 11.086 17.08 C 10.493 17.08 10.047 16.931 9.75 16.634 C 9.454 16.337 9.305 15.883 9.305 15.271 L 9.305 11.124 C 9.305 10.511 9.454 10.057 9.75 9.76 C 10.047 9.463 10.493 9.314 11.086 9.314 L 15.308 9.314 C 15.895 9.314 16.337 9.463 16.634 9.76 C 16.931 10.057 17.08 10.511 17.08 11.124 L 17.08 15.271 C 17.08 15.883 16.931 16.337 16.634 16.634 C 16.337 16.931 15.895 17.08 15.308 17.08 L 11.086 17.08 Z M 11.105 15.771 L 15.289 15.771 C 15.456 15.771 15.577 15.731 15.651 15.651 C 15.731 15.57 15.771 15.447 15.771 15.28 L 15.771 11.124 C 15.771 10.957 15.731 10.833 15.651 10.752 C 15.577 10.666 15.456 10.623 15.289 10.623 L 11.105 10.623 C 10.938 10.623 10.814 10.666 10.734 10.752 C 10.653 10.833 10.613 10.957 10.613 11.124 L 10.613 15.28 C 10.613 15.447 10.653 15.57 10.734 15.651 C 10.814 15.731 10.938 15.771 11.105 15.771 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 5480,
        top: 1670,
        width: 130,
        height: 80,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 64,
          top: 20,
          width: 38,
          height: 38,
          borderRadius: 8,
          backgroundColor: "rgb(18,18,18)",
        }}>
          <svg width={17.080} height={17.080} viewBox="0 0 17.080 17.080" fill="none" style={{
            position: "absolute",
            left: 10.456,
            top: 10.767,
            width: 17.08,
            height: 17.08,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.772 7.774 C 1.184 7.774 0.742 7.626 0.445 7.329 C 0.148 7.032 0 6.578 0 5.965 L 0 1.809 C 0 1.203 0.148 0.751 0.445 0.455 C 0.742 0.152 1.184 0 1.772 0 L 6.002 0 C 6.59 0 7.032 0.152 7.329 0.455 C 7.626 0.751 7.774 1.203 7.774 1.809 L 7.774 5.965 C 7.774 6.578 7.626 7.032 7.329 7.329 C 7.032 7.626 6.59 7.774 6.002 7.774 L 1.772 7.774 Z M 11.086 7.774 C 10.493 7.774 10.047 7.626 9.75 7.329 C 9.454 7.032 9.305 6.578 9.305 5.965 L 9.305 1.809 C 9.305 1.203 9.454 0.751 9.75 0.455 C 10.047 0.152 10.493 0 11.086 0 L 15.308 0 C 15.895 0 16.337 0.152 16.634 0.455 C 16.931 0.751 17.08 1.203 17.08 1.809 L 17.08 5.965 C 17.08 6.578 16.931 7.032 16.634 7.329 C 16.337 7.626 15.895 7.774 15.308 7.774 L 11.086 7.774 Z M 11.105 6.466 L 15.289 6.466 C 15.456 6.466 15.577 6.426 15.651 6.346 C 15.731 6.259 15.771 6.129 15.771 5.956 L 15.771 1.809 C 15.771 1.642 15.731 1.518 15.651 1.438 C 15.577 1.351 15.456 1.308 15.289 1.308 L 11.105 1.308 C 10.938 1.308 10.814 1.351 10.734 1.438 C 10.653 1.518 10.613 1.642 10.613 1.809 L 10.613 5.956 C 10.613 6.129 10.653 6.259 10.734 6.346 C 10.814 6.426 10.938 6.466 11.105 6.466 Z M 1.772 17.08 C 1.184 17.08 0.742 16.931 0.445 16.634 C 0.148 16.337 0 15.883 0 15.271 L 0 11.124 C 0 10.511 0.148 10.057 0.445 9.76 C 0.742 9.463 1.184 9.314 1.772 9.314 L 6.002 9.314 C 6.59 9.314 7.032 9.463 7.329 9.76 C 7.626 10.057 7.774 10.511 7.774 11.124 L 7.774 15.271 C 7.774 15.883 7.626 16.337 7.329 16.634 C 7.032 16.931 6.59 17.08 6.002 17.08 L 1.772 17.08 Z M 1.791 15.771 L 5.975 15.771 C 6.135 15.771 6.256 15.731 6.336 15.651 C 6.423 15.57 6.466 15.447 6.466 15.28 L 6.466 11.124 C 6.466 10.957 6.423 10.833 6.336 10.752 C 6.256 10.666 6.135 10.623 5.975 10.623 L 1.791 10.623 C 1.63 10.623 1.509 10.666 1.429 10.752 C 1.348 10.833 1.308 10.957 1.308 11.124 L 1.308 15.28 C 1.308 15.447 1.348 15.57 1.429 15.651 C 1.509 15.731 1.63 15.771 1.791 15.771 Z M 11.086 17.08 C 10.493 17.08 10.047 16.931 9.75 16.634 C 9.454 16.337 9.305 15.883 9.305 15.271 L 9.305 11.124 C 9.305 10.511 9.454 10.057 9.75 9.76 C 10.047 9.463 10.493 9.314 11.086 9.314 L 15.308 9.314 C 15.895 9.314 16.337 9.463 16.634 9.76 C 16.931 10.057 17.08 10.511 17.08 11.124 L 17.08 15.271 C 17.08 15.883 16.931 16.337 16.634 16.634 C 16.337 16.931 15.895 17.08 15.308 17.08 L 11.086 17.08 Z M 11.105 15.771 L 15.289 15.771 C 15.456 15.771 15.577 15.731 15.651 15.651 C 15.731 15.57 15.771 15.447 15.771 15.28 L 15.771 11.124 C 15.771 10.957 15.731 10.833 15.651 10.752 C 15.577 10.666 15.456 10.623 15.289 10.623 L 11.105 10.623 C 10.938 10.623 10.814 10.666 10.734 10.752 C 10.653 10.833 10.613 10.957 10.613 11.124 L 10.613 15.28 C 10.613 15.447 10.653 15.57 10.734 15.651 C 10.814 15.731 10.938 15.771 11.105 15.771 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 38,
          height: 38,
        }}>
          <svg width={17.080} height={17.080} viewBox="0 0 17.080 17.080" fill="none" style={{
            position: "absolute",
            left: 10.456,
            top: 10.767,
            width: 17.08,
            height: 17.08,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.772 7.774 C 1.184 7.774 0.742 7.626 0.445 7.329 C 0.148 7.032 0 6.578 0 5.965 L 0 1.809 C 0 1.203 0.148 0.751 0.445 0.455 C 0.742 0.152 1.184 0 1.772 0 L 6.002 0 C 6.59 0 7.032 0.152 7.329 0.455 C 7.626 0.751 7.774 1.203 7.774 1.809 L 7.774 5.965 C 7.774 6.578 7.626 7.032 7.329 7.329 C 7.032 7.626 6.59 7.774 6.002 7.774 L 1.772 7.774 Z M 11.086 7.774 C 10.493 7.774 10.047 7.626 9.75 7.329 C 9.454 7.032 9.305 6.578 9.305 5.965 L 9.305 1.809 C 9.305 1.203 9.454 0.751 9.75 0.455 C 10.047 0.152 10.493 0 11.086 0 L 15.308 0 C 15.895 0 16.337 0.152 16.634 0.455 C 16.931 0.751 17.08 1.203 17.08 1.809 L 17.08 5.965 C 17.08 6.578 16.931 7.032 16.634 7.329 C 16.337 7.626 15.895 7.774 15.308 7.774 L 11.086 7.774 Z M 11.105 6.466 L 15.289 6.466 C 15.456 6.466 15.577 6.426 15.651 6.346 C 15.731 6.259 15.771 6.129 15.771 5.956 L 15.771 1.809 C 15.771 1.642 15.731 1.518 15.651 1.438 C 15.577 1.351 15.456 1.308 15.289 1.308 L 11.105 1.308 C 10.938 1.308 10.814 1.351 10.734 1.438 C 10.653 1.518 10.613 1.642 10.613 1.809 L 10.613 5.956 C 10.613 6.129 10.653 6.259 10.734 6.346 C 10.814 6.426 10.938 6.466 11.105 6.466 Z M 1.772 17.08 C 1.184 17.08 0.742 16.931 0.445 16.634 C 0.148 16.337 0 15.883 0 15.271 L 0 11.124 C 0 10.511 0.148 10.057 0.445 9.76 C 0.742 9.463 1.184 9.314 1.772 9.314 L 6.002 9.314 C 6.59 9.314 7.032 9.463 7.329 9.76 C 7.626 10.057 7.774 10.511 7.774 11.124 L 7.774 15.271 C 7.774 15.883 7.626 16.337 7.329 16.634 C 7.032 16.931 6.59 17.08 6.002 17.08 L 1.772 17.08 Z M 1.791 15.771 L 5.975 15.771 C 6.135 15.771 6.256 15.731 6.336 15.651 C 6.423 15.57 6.466 15.447 6.466 15.28 L 6.466 11.124 C 6.466 10.957 6.423 10.833 6.336 10.752 C 6.256 10.666 6.135 10.623 5.975 10.623 L 1.791 10.623 C 1.63 10.623 1.509 10.666 1.429 10.752 C 1.348 10.833 1.308 10.957 1.308 11.124 L 1.308 15.28 C 1.308 15.447 1.348 15.57 1.429 15.651 C 1.509 15.731 1.63 15.771 1.791 15.771 Z M 11.086 17.08 C 10.493 17.08 10.047 16.931 9.75 16.634 C 9.454 16.337 9.305 15.883 9.305 15.271 L 9.305 11.124 C 9.305 10.511 9.454 10.057 9.75 9.76 C 10.047 9.463 10.493 9.314 11.086 9.314 L 15.308 9.314 C 15.895 9.314 16.337 9.463 16.634 9.76 C 16.931 10.057 17.08 10.511 17.08 11.124 L 17.08 15.271 C 17.08 15.883 16.931 16.337 16.634 16.634 C 16.337 16.931 15.895 17.08 15.308 17.08 L 11.086 17.08 Z M 11.105 15.771 L 15.289 15.771 C 15.456 15.771 15.577 15.731 15.651 15.651 C 15.731 15.57 15.771 15.447 15.771 15.28 L 15.771 11.124 C 15.771 10.957 15.731 10.833 15.651 10.752 C 15.577 10.666 15.456 10.623 15.289 10.623 L 11.105 10.623 C 10.938 10.623 10.814 10.666 10.734 10.752 C 10.653 10.833 10.613 10.957 10.613 11.124 L 10.613 15.28 C 10.613 15.447 10.653 15.57 10.734 15.651 C 10.814 15.731 10.938 15.771 11.105 15.771 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 4810,
        top: 1490,
        width: 480,
        height: 140,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 247,
          top: 82,
          width: 200,
          height: 42,
          display: "flex",
          flexDirection: "row",
          gap: 14,
          padding: "2px 26px 2px 26px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span style={{
            position: "relative",
            width: 20,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            lineHeight: "22px",
            color: "rgb(255,66,69)",
            flexShrink: 0,
          }}>􀓔</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "rgb(255,66,69)",
            flexGrow: 1,
          }}>Action</span>
        </div>
        <div style={{
          position: "absolute",
          left: 247,
          top: 20,
          width: 200,
          height: 42,
          display: "flex",
          flexDirection: "row",
          gap: 14,
          padding: "2px 26px 2px 26px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span style={{
            position: "relative",
            width: 20,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            lineHeight: "22px",
            color: "rgb(245,245,245)",
            flexShrink: 0,
          }}>􀓔</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "rgb(245,245,245)",
            flexGrow: 1,
          }}>Action</span>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 82,
          width: 200,
          height: 42,
          display: "flex",
          flexDirection: "row",
          gap: 14,
          padding: "2px 26px 2px 26px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span style={{
            position: "relative",
            width: 20,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            lineHeight: "22px",
            color: "var(--accents-red)",
            flexShrink: 0,
          }}>􀓔</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "var(--accents-red)",
            flexGrow: 1,
          }}>Action</span>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 200,
          height: 42,
          display: "flex",
          flexDirection: "row",
          gap: 14,
          padding: "2px 26px 2px 26px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span style={{
            position: "relative",
            width: 20,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            lineHeight: "22px",
            color: "var(--labels-vibrant-primary)",
            flexShrink: 0,
          }}>􀓔</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "22px",
            letterSpacing: "-0.430px",
            color: "var(--labels-vibrant-primary)",
            flexGrow: 1,
          }}>Action</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 5320,
        top: 1490,
        width: 290,
        height: 140,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 78,
          width: 250,
          display: "flex",
          flexDirection: "row",
          padding: "0px 17px 0px 17px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <HSQAAppIconDark
            style={{
              position: "relative",
              width: 38,
              height: 38,
              flexShrink: 0,
            }}
            state={"default"}
          />
          <HSQAWidgetDark
            style={{
              position: "relative",
              width: 38,
              height: 38,
              flexShrink: 0,
            }}
            symbol={"􂘬"}
            state={"default"}
          />
          <HSQAWidgetDark
            style={{
              position: "relative",
              width: 38,
              height: 38,
              flexShrink: 0,
            }}
            symbol={"􂘭"}
            state={"selected"}
          />
          <HSQAWidgetDark
            style={{
              position: "relative",
              width: 38,
              height: 38,
              flexShrink: 0,
            }}
            symbol={"􂘮"}
            state={"default"}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 250,
          display: "flex",
          flexDirection: "row",
          padding: "0px 17px 0px 17px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <HSQAAppIconLight
            style={{
              position: "relative",
              width: 38,
              height: 38,
              flexShrink: 0,
            }}
            state={"default"}
          />
          <HSQAWidgetLight
            style={{
              position: "relative",
              width: 38,
              height: 38,
              flexShrink: 0,
            }}
            symbol={"􂘬"}
            state={"default"}
          />
          <HSQAWidgetLight
            style={{
              position: "relative",
              width: 38,
              height: 38,
              flexShrink: 0,
            }}
            symbol={"􂘭"}
            state={"selected"}
          />
          <HSQAWidgetLight
            style={{
              position: "relative",
              width: 38,
              height: 38,
              flexShrink: 0,
            }}
            symbol={"􂘮"}
            state={"default"}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 4810,
        top: 1050,
        width: 250,
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        gap: 17.5,
        padding: "7.500px 0px 11px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 250,
            height: 368,
          }}>
          <LiquidGlassRegularMedium
            style={{ transform: "scale(1.563, 2.300)", transformOrigin: "0 0" }}
            mode={"light"}
          />
        </div>
        <HSQAWidgetRow
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          mode={"light"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <HSQAActions
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
            state={"default"}
          />
          <HSQAActions
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
            state={"default"}
          />
          <HSQAActions
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
            state={"default"}
          />
          <HSQAActions
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
            state={"default"}
          />
          <HSQAActions
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
            state={"default"}
          />
          <HSQAActions
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            mode={"light"}
            state={"default"}
          />
          <HSQAActions
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            symbol={"􀁎"}
            label={"Remove App"}
            mode={"light"}
            state={"destructive"}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 4810,
        top: 100,
        width: 402,
        height: 874,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <WallpapersIPhone
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 402,
              height: 874,
            }}
            mode={"light"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 154,
            padding: "21px 24px 19px 24px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              height: 22,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "1.500px 0px 1.500px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 590,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "var(--grays-white)",
                flexShrink: 0,
              }}>9:41</span>
            </div>
            <div style={{
              position: "relative",
              height: 22,
              display: "flex",
              flexDirection: "row",
              gap: 7,
              padding: "1px 1px 1px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <svg width={19.200} height={12.226} viewBox="0 0 19.200 12.226" fill="none" style={{
                position: "relative",
                width: 19.2,
                height: 12.226,
                flexShrink: 0,
                color: "var(--grays-white)",
              }}>
                <path d={"M 19.2 1.146 C 19.2 0.513 18.722 0 18.133 0 L 17.067 0 C 16.478 0 16 0.513 16 1.146 L 16 11.08 C 16 11.713 16.478 12.226 17.067 12.226 L 18.133 12.226 C 18.722 12.226 19.2 11.713 19.2 11.08 L 19.2 1.146 Z M 11.766 2.445 L 12.833 2.445 C 13.422 2.445 13.899 2.971 13.899 3.619 L 13.899 11.053 C 13.899 11.701 13.422 12.226 12.833 12.226 L 11.766 12.226 C 11.177 12.226 10.699 11.701 10.699 11.053 L 10.699 3.619 C 10.699 2.971 11.177 2.445 11.766 2.445 Z M 7.434 5.094 L 6.367 5.094 C 5.778 5.094 5.301 5.627 5.301 6.283 L 5.301 11.038 C 5.301 11.694 5.778 12.226 6.367 12.226 L 7.434 12.226 C 8.023 12.226 8.501 11.694 8.501 11.038 L 8.501 6.283 C 8.501 5.627 8.023 5.094 7.434 5.094 Z M 2.133 7.54 L 1.067 7.54 C 0.478 7.54 0 8.064 0 8.711 L 0 11.055 C 0 11.702 0.478 12.226 1.067 12.226 L 2.133 12.226 C 2.722 12.226 3.2 11.702 3.2 11.055 L 3.2 8.711 C 3.2 8.064 2.722 7.54 2.133 7.54 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <svg width={17.142} height={12.328} viewBox="0 0 17.142 12.328" fill="none" style={{
                position: "relative",
                width: 17.142,
                height: 12.328,
                flexShrink: 0,
                color: "var(--grays-white)",
              }}>
                <path d={"M 8.571 2.466 C 11.058 2.466 13.45 3.388 15.253 5.042 C 15.389 5.17 15.606 5.168 15.739 5.038 L 17.037 3.775 C 17.104 3.709 17.142 3.62 17.142 3.527 C 17.141 3.435 17.102 3.346 17.034 3.281 C 12.303 -1.094 4.839 -1.094 0.108 3.281 C 0.04 3.346 0.001 3.435 0 3.527 C -0.001 3.62 0.037 3.709 0.105 3.775 L 1.403 5.038 C 1.536 5.168 1.753 5.17 1.889 5.042 C 3.692 3.388 6.084 2.466 8.571 2.466 Z M 8.568 6.687 C 9.925 6.686 11.234 7.198 12.24 8.122 C 12.376 8.253 12.591 8.251 12.723 8.116 L 14.011 6.797 C 14.078 6.727 14.116 6.634 14.115 6.536 C 14.114 6.438 14.075 6.345 14.005 6.278 C 10.942 3.387 6.197 3.387 3.133 6.278 C 3.064 6.345 3.024 6.438 3.023 6.536 C 3.023 6.634 3.06 6.728 3.128 6.797 L 4.415 8.116 C 4.548 8.251 4.762 8.253 4.898 8.122 C 5.904 7.199 7.212 6.687 8.568 6.687 Z M 11.092 9.48 C 11.094 9.585 11.057 9.687 10.99 9.761 L 8.813 12.216 C 8.749 12.288 8.662 12.328 8.572 12.328 C 8.481 12.328 8.394 12.288 8.33 12.216 L 6.153 9.761 C 6.086 9.687 6.049 9.585 6.051 9.48 C 6.053 9.375 6.094 9.275 6.164 9.204 C 7.554 7.89 9.59 7.89 10.98 9.204 C 11.05 9.275 11.09 9.375 11.092 9.48 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <div style={{
                position: "relative",
                width: 27.328,
                height: 13,
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 25,
                  height: 13,
                  opacity: 0.35,
                  borderRadius: 4.300000190734863,
                  boxShadow: "inset 0 0 0 1px var(--grays-white)",
                }} />
                <svg width={1.328} height={4.075} viewBox="0 0 1.328 4.075" fill="none" style={{
                  position: "absolute",
                  left: 26,
                  top: 4.5,
                  width: 1.328,
                  height: 4.075,
                  opacity: 0.4,
                  color: "var(--grays-white)",
                }}>
                  <path d={"M 0 0 L 0 4.075 C 0.805 3.73 1.328 2.927 1.328 2.038 C 1.328 1.148 0.805 0.345 0 0"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <div style={{
                  position: "absolute",
                  left: 2,
                  top: 2,
                  width: 21,
                  height: 9,
                  borderRadius: 2.5,
                  backgroundColor: "var(--grays-white)",
                }} />
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "28.666px 26px 28.666px 26px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "17.333px 12px",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"FaceTime"}
              icon1={<SystemIcons icon={"facetime"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Calendar"}
              icon1={<SystemIcons icon={"calendar"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Photos"}
              icon1={<SystemIcons icon={"photos"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Camera"}
              icon1={<SystemIcons icon={"camera"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Mail"}
              icon1={<SystemIcons icon={"mail"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Notes"}
              icon1={<SystemIcons icon={"notes"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Reminders"}
              icon1={<SystemIcons icon={"reminders"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Clock"}
              icon1={<SystemIcons icon={"clock"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"News"}
              icon1={<SystemIcons icon={"news"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"TV"}
              icon1={<SystemIcons icon={"tv"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Games"}
              icon1={<SystemIcons icon={"games"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"App Store"}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Maps"}
              icon1={<SystemIcons icon={"maps"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Health"}
              icon1={<SystemIcons icon={"health"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Wallet"}
              icon1={<SystemIcons icon={"wallet"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Settings"}
              icon1={<SystemIcons icon={"settings"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <div style={{
              position: "relative",
              width: 72,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 64,
                height: 64,
                opacity: 0,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <div className="fig-asset-9ee404c0ae57001e" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 64,
                  height: 64,
                }} />
              </div>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 510,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                filter: "drop-shadow(0px 2px 25px rgb(0,0,0))",
              }}>App Name</span>
            </div>
            <div style={{
              position: "relative",
              width: 72,
              height: 79,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 72,
              height: 79,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 72,
              height: 79,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }} />
          </div>
          <div style={{
            position: "relative",
            height: 30,
            overflow: "hidden",
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "7px 12px 7px 12px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 77,
                height: 30,
              }}>
              <DockMaterial style={{ transform: "scale(0.770, 0.300)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 11.5,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--grays-white)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>􀊫</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 11.5,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--grays-white)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Search</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "20px 17px 17px 17px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              padding: "20px 19px 19px 19px",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 368,
                  height: 103,
                }}>
                <DockMaterial style={{ transform: "scale(3.680, 1.030)", transformOrigin: "0 0" }} />
              </div>
              <AppIconIPhone
                style={{ position: "relative", height: 64, flexShrink: 0 }}
                showAppName={false}
                appName={"FaceTime"}
                icon1={<SystemIcons icon={"phone"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
                type={"system"}
              />
              <AppIconIPhone
                style={{ position: "relative", height: 64, flexShrink: 0 }}
                showAppName={false}
                appName={"FaceTime"}
                icon1={<SystemIcons icon={"safari"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
                type={"system"}
              />
              <AppIconIPhone
                style={{ position: "relative", height: 64, flexShrink: 0 }}
                showAppName={false}
                appName={"FaceTime"}
                icon1={<SystemIcons icon={"messages"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
                type={"system"}
              />
              <AppIconIPhone
                style={{ position: "relative", height: 64, flexShrink: 0 }}
                showAppName={false}
                appName={"FaceTime"}
                icon1={<SystemIcons icon={"music"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
                type={"system"}
              />
            </div>
          </div>
        </div>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 874,
          }}>
          <ContextMenuDimmingOverlay style={{ transform: "scale(2.010, 4.370)", transformOrigin: "0 0" }} />
        </div>
        <div style={{
            position: "absolute",
            left: 24,
            top: 482,
            width: 74,
            height: 74,
          }}>
          <CustomIcon
            style={{ transform: "scale(1.121, 1.121)", transformOrigin: "0 0" }}
            mode={"default"}
          />
        </div>
        <HomeScreenQuickActions style={{
            position: "absolute",
            left: 24,
            top: 105,
            width: 250,
          }} />
      </div>
      <div style={{
        position: "absolute",
        left: 3500,
        top: 3270,
        width: 110,
        height: 200,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
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
        <div style={{
          position: "absolute",
          left: 20,
          top: 108,
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
      </div>
      <div style={{
        position: "absolute",
        left: 4005,
        top: 2900,
        width: 190,
        height: 360,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 190,
          width: 142,
          height: 142,
          display: "flex",
          flexDirection: "column",
          padding: "14px 13px 17px 13px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
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
            position: "relative",
            width: 40,
            height: 40,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀑚</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0px 2px 0px 2px",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "100%",
              letterSpacing: "-0.080px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Title</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              letterSpacing: "-0.080px",
              color: "rgba(255,255,255,0.33)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 142,
          height: 142,
          display: "flex",
          flexDirection: "column",
          padding: "14px 13px 17px 13px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
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
              on={true}
            />
          </div>
          <div style={{
            position: "relative",
            width: 40,
            height: 40,
            borderRadius: 100,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "var(--accents-red)",
            }} />
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "rgb(255,255,255)",
            }}>􀑚</span>
          </div>
          <div style={{
            position: "relative",
            width: 123,
            display: "flex",
            flexDirection: "column",
            padding: "0px 2px 0px 2px",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "100%",
              letterSpacing: "-0.080px",
              color: "rgb(0,0,0)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Title</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              letterSpacing: "-0.080px",
              color: "rgba(0,0,0,0.4)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 3630,
        top: 2900,
        width: 350,
        height: 200,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 182,
          top: 108,
          width: 142,
          height: 66,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 14px 0px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 142,
              height: 66,
            }}>
            <ControlsBGIPad
              style={{ transform: "scale(2.152, 1)", transformOrigin: "0 0" }}
              on={false}
            />
          </div>
          <div style={{
            position: "relative",
            width: 40,
            height: 40,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(128,128,128),rgb(128,128,128)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀑚</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 1,
            padding: "1px 0px 1px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>Title</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              letterSpacing: "-0.080px",
              color: "rgba(255,255,255,0.33)",
              flexShrink: 0,
            }}>􀆏</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 182,
          top: 20,
          width: 142,
          height: 66,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 14px 0px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 142,
              height: 66,
            }}>
            <ControlsBGIPad
              style={{ transform: "scale(2.152, 1)", transformOrigin: "0 0" }}
              on={false}
            />
          </div>
          <div style={{
            position: "relative",
            width: 40,
            height: 40,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              opacity: 0.9,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--accents-red)",
            }}>􀑚</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 1,
            padding: "1px 0px 1px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>Title</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              letterSpacing: "-0.080px",
              color: "rgba(255,255,255,0.33)",
              flexShrink: 0,
            }}>􀆏</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 108,
          width: 142,
          height: 66,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 14px 0px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 142,
              height: 66,
            }}>
            <ControlsBGIPad
              style={{ transform: "scale(2.152, 1)", transformOrigin: "0 0" }}
              on={false}
            />
          </div>
          <div style={{
            position: "relative",
            width: 40,
            height: 40,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀑚</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Title</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              letterSpacing: "-0.080px",
              color: "rgba(255,255,255,0.33)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 142,
          height: 66,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 14px 0px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 142,
              height: 66,
            }}>
            <ControlsBGIPad
              style={{ transform: "scale(2.152, 1)", transformOrigin: "0 0" }}
              on={true}
            />
          </div>
          <div style={{
            position: "relative",
            width: 40,
            height: 40,
            borderRadius: 100,
            background: "linear-gradient(rgba(51,51,51,0.4),rgba(51,51,51,0.4)), linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3))",
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              opacity: 0.9,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--accents-red)",
            }}>􀑚</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "rgb(0,0,0)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Title</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              letterSpacing: "-0.080px",
              color: "rgba(0,0,0,0.4)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 3500,
        top: 2900,
        width: 110,
        height: 200,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 66,
          height: 66,
        }}>
          <ControlsBGIPad
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 66,
              height: 66,
            }}
            on={true}
          />
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
            color: "var(--accents-red)",
          }}>􀑚</span>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 108,
          width: 66,
          height: 66,
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
            fontWeight: 700,
            fontSize: 19,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "var(--grays-white)",
          }}>􀑚</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 3500,
        top: 1992,
        width: 1210,
        height: 834,
        overflow: "hidden",
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
          <ControlsIPad1x1
            style={{
              position: "absolute",
              left: 0,
              top: 198,
              width: 66,
              height: 66,
            }}
            symbol={"􀌟"}
            on={false}
          />
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
            }}>􀑚</span>
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
            }}>􀊌</span>
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
            }}>􀊄</span>
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
            }}>􀊊</span>
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
      <div style={{
        position: "absolute",
        left: 3500,
        top: 1460,
        width: 110,
        height: 200,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 66,
          height: 66,
          borderRadius: 296,
        }}>
          <svg width={66} height={66} viewBox="0 0 66 66" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 66,
            height: 66,
            overflow: "hidden",
            borderRadius: 296,
          }}>
            <path d={"M 0 33 C 0 14.775 14.775 0 33 0 L 33 0 C 51.225 0 66 14.775 66 33 L 66 33 C 66 51.225 51.225 66 33 66 L 33 66 C 14.775 66 0 51.225 0 33 L 0 33 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 108,
          width: 66,
          height: 66,
          borderRadius: 296,
        }}>
          <svg width={66} height={66} viewBox="0 0 66 66" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 66,
            height: 66,
            overflow: "hidden",
            borderRadius: 1000,
            color: "rgb(36,36,36)",
          }}>
            <path d={"M 0 33 C 0 14.775 14.775 0 33 0 L 33 0 C 51.225 0 66 14.775 66 33 L 66 33 C 66 51.225 51.225 66 33 66 L 33 66 C 14.775 66 0 51.225 0 33 L 0 33 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 4045,
        top: 1050,
        width: 190,
        height: 360,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 190,
          width: 155,
          height: 155,
          display: "flex",
          flexDirection: "column",
          padding: "14px 14px 14px 14px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 155,
              height: 155,
            }}>
            <ControlsBGIPhone
              style={{ transform: "scale(2.348, 2.348)", transformOrigin: "0 0" }}
              on={false}
            />
          </div>
          <div style={{
            position: "relative",
            width: 40,
            height: 40,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(128,128,128),rgb(128,128,128)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀑚</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0px 2px 0px 2px",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "100%",
              letterSpacing: "-0.080px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Title</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              letterSpacing: "-0.080px",
              color: "rgba(255,255,255,0.33)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 155,
          height: 155,
          display: "flex",
          flexDirection: "column",
          padding: "14px 14px 17px 14px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 155,
              height: 155,
            }}>
            <ControlsBGIPhone
              style={{ transform: "scale(2.348, 2.348)", transformOrigin: "0 0" }}
              on={true}
            />
          </div>
          <div style={{
            position: "relative",
            width: 40,
            height: 40,
            borderRadius: 100,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "var(--accents-red)",
            }} />
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "rgb(255,255,255)",
            }}>􀑚</span>
          </div>
          <div style={{
            position: "relative",
            width: 123,
            display: "flex",
            flexDirection: "column",
            padding: "0px 2px 0px 2px",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "100%",
              letterSpacing: "-0.080px",
              color: "rgb(0,0,0)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Title</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              letterSpacing: "-0.080px",
              color: "rgba(0,0,0,0.4)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 3630,
        top: 1050,
        width: 390,
        height: 200,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 202,
          top: 108,
          width: 155,
          height: 70,
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 14px 0px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 155,
              height: 70,
            }}>
            <ControlsBGIPhone
              style={{ transform: "scale(2.348, 1.061)", transformOrigin: "0 0" }}
              on={false}
            />
          </div>
          <div style={{
            position: "relative",
            width: 40,
            height: 40,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(128,128,128),rgb(128,128,128)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀑚</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 1,
            padding: "1px 0px 1px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>Title</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              letterSpacing: "-0.080px",
              color: "rgba(255,255,255,0.33)",
              flexShrink: 0,
            }}>􀆏</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 202,
          top: 20,
          width: 155,
          height: 70,
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 14px 0px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 155,
              height: 70,
            }}>
            <ControlsBGIPhone
              style={{ transform: "scale(2.348, 1.061)", transformOrigin: "0 0" }}
              on={false}
            />
          </div>
          <div style={{
            position: "relative",
            width: 40,
            height: 40,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(128,128,128),rgb(128,128,128)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              opacity: 0.9,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--accents-red)",
            }}>􀑚</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 1,
            padding: "1px 0px 1px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>Title</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              letterSpacing: "-0.080px",
              color: "rgba(255,255,255,0.33)",
              flexShrink: 0,
            }}>􀆏</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 108,
          width: 155,
          height: 70,
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 14px 0px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 155,
              height: 70,
            }}>
            <ControlsBGIPhone
              style={{ transform: "scale(2.348, 1.061)", transformOrigin: "0 0" }}
              on={false}
            />
          </div>
          <div style={{
            position: "relative",
            width: 40,
            height: 40,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(128,128,128),rgb(128,128,128)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀑚</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Title</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              letterSpacing: "-0.080px",
              color: "rgba(255,255,255,0.33)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 155,
          height: 70,
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 14px 0px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 155,
              height: 70,
            }}>
            <ControlsBGIPhone
              style={{ transform: "scale(2.348, 1.061)", transformOrigin: "0 0" }}
              on={true}
            />
          </div>
          <div style={{
            position: "relative",
            width: 40,
            height: 40,
            borderRadius: 100,
            background: "linear-gradient(rgba(51,51,51,0.4),rgba(51,51,51,0.4)), linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3))",
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              opacity: 0.9,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--accents-red)",
            }}>􀑚</span>
          </div>
          <div style={{
            position: "relative",
            width: 75,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "rgb(0,0,0)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Title</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              letterSpacing: "-0.080px",
              color: "rgba(0,0,0,0.4)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 3500,
        top: 1050,
        width: 110,
        height: 200,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 70,
          height: 70,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 70,
              height: 70,
            }}>
            <ControlsBGIPhone
              style={{ transform: "scale(1.061, 1.061)", transformOrigin: "0 0" }}
              on={true}
            />
          </div>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 70,
            opacity: 0.9,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 19,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "var(--accents-red)",
          }}>􀑚</span>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 108,
          width: 70,
          height: 70,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 70,
              height: 70,
            }}>
            <ControlsBGIPhone
              style={{ transform: "scale(1.061, 1.061)", transformOrigin: "0 0" }}
              on={false}
            />
          </div>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 70,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 19,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "var(--grays-white)",
          }}>􀑚</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 3500,
        top: 100,
        width: 402,
        height: 874,
        overflow: "hidden",
      }}>
        <LockScreenIPhone style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 874,
          }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 874,
          backgroundColor: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(24px)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 840,
          width: 402,
          height: 34,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,1,273,21)",
            transformOrigin: "0 0",
            width: 144,
            height: 5,
            borderRadius: 100,
            backgroundColor: "var(--labels-primary)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 372,
          top: 290,
          width: 21.33,
          height: 240.55,
          overflow: "hidden",
        }}>
          <svg width={17.440} height={14.860} viewBox="0 0 17.440 14.860" fill="none" style={{
            position: "absolute",
            left: 2,
            top: 222,
            width: 17.44,
            height: 14.86,
            color: "var(--labels-vibrant-tertiary)",
          }}>
            <path d={"M 14.19 11.22 C 14.34 11.4 14.53 11.49 14.77 11.5 C 15 11.5 15.22 11.4 15.42 11.19 C 16.08 10.49 16.58 9.67 16.92 8.74 C 17.26 7.8 17.44 6.81 17.44 5.77 C 17.44 5.07 17.36 4.4 17.2 3.75 C 17.04 3.1 16.81 2.48 16.51 1.9 C 16.21 1.32 15.85 0.81 15.42 0.35 C 15.22 0.14 15.01 0.03 14.77 0.04 C 14.54 0.04 14.34 0.14 14.19 0.31 C 14.05 0.48 13.99 0.66 14.02 0.86 C 14.05 1.06 14.15 1.25 14.31 1.43 C 14.82 1.99 15.21 2.65 15.48 3.4 C 15.75 4.15 15.89 4.94 15.89 5.78 C 15.89 6.62 15.75 7.41 15.48 8.16 C 15.21 8.91 14.82 9.56 14.31 10.13 C 14.15 10.31 14.05 10.5 14.02 10.7 C 13.99 10.9 14.04 11.08 14.19 11.25 L 14.19 11.22 Z M 11.76 8.92 C 11.91 9.1 12.1 9.19 12.35 9.19 C 12.59 9.19 12.8 9.09 12.98 8.88 C 13.32 8.48 13.58 8.01 13.76 7.47 C 13.94 6.93 14.04 6.36 14.04 5.77 C 14.04 5.18 13.95 4.61 13.76 4.07 C 13.58 3.53 13.32 3.06 12.98 2.66 C 12.8 2.45 12.59 2.34 12.35 2.34 C 12.11 2.34 11.91 2.43 11.76 2.61 C 11.62 2.78 11.57 2.95 11.6 3.15 C 11.63 3.34 11.72 3.53 11.85 3.72 C 12.05 3.99 12.2 4.3 12.32 4.66 C 12.44 5.02 12.49 5.39 12.49 5.77 C 12.49 6.15 12.43 6.52 12.32 6.88 C 12.21 7.24 12.05 7.56 11.84 7.82 C 11.71 8.01 11.62 8.2 11.59 8.39 C 11.56 8.58 11.61 8.76 11.75 8.93 L 11.76 8.92 Z M 7.13 5.76 C 7.13 6.07 7.21 6.34 7.37 6.59 C 7.53 6.84 7.73 7.03 7.99 7.16 L 7.99 14.04 C 7.99 14.28 8.06 14.48 8.2 14.63 C 8.34 14.78 8.51 14.86 8.73 14.86 C 8.95 14.86 9.13 14.79 9.27 14.64 C 9.4 14.49 9.47 14.29 9.47 14.04 L 9.47 7.16 C 9.72 7.03 9.92 6.84 10.08 6.59 C 10.24 6.34 10.32 6.06 10.32 5.76 C 10.32 5.46 10.25 5.2 10.11 4.96 C 9.97 4.72 9.78 4.53 9.54 4.38 C 9.3 4.24 9.03 4.16 8.74 4.16 C 8.45 4.16 8.18 4.23 7.94 4.38 C 7.7 4.52 7.51 4.72 7.37 4.96 C 7.23 5.2 7.16 5.47 7.16 5.76 L 7.13 5.76 Z M 3.39 5.76 C 3.39 6.36 3.48 6.92 3.67 7.46 C 3.85 8 4.11 8.47 4.45 8.87 C 4.63 9.08 4.84 9.18 5.08 9.18 C 5.32 9.18 5.52 9.09 5.67 8.91 C 5.81 8.74 5.86 8.57 5.83 8.37 C 5.8 8.18 5.71 7.99 5.58 7.8 C 5.38 7.54 5.22 7.23 5.1 6.86 C 4.98 6.49 4.93 6.13 4.93 5.75 C 4.93 5.37 4.99 5 5.1 4.64 C 5.22 4.28 5.37 3.96 5.57 3.7 C 5.71 3.51 5.79 3.32 5.82 3.13 C 5.85 2.94 5.8 2.76 5.66 2.59 C 5.51 2.41 5.32 2.32 5.07 2.32 C 4.83 2.32 4.62 2.42 4.44 2.64 C 4.1 3.04 3.84 3.51 3.66 4.05 C 3.48 4.59 3.38 5.16 3.38 5.75 L 3.39 5.76 Z M 0 5.76 C 0 6.8 0.17 7.79 0.52 8.73 C 0.86 9.67 1.36 10.49 2.02 11.18 C 2.22 11.39 2.44 11.5 2.67 11.49 C 2.9 11.49 3.09 11.39 3.24 11.21 C 3.38 11.04 3.44 10.86 3.41 10.66 C 3.38 10.46 3.28 10.27 3.12 10.09 C 2.61 9.53 2.22 8.87 1.95 8.12 C 1.68 7.37 1.54 6.58 1.54 5.74 C 1.54 4.9 1.68 4.11 1.95 3.36 C 2.22 2.61 2.61 1.96 3.12 1.39 C 3.28 1.21 3.38 1.02 3.41 0.82 C 3.44 0.62 3.39 0.44 3.24 0.27 C 3.09 0.09 2.9 0 2.67 0 C 2.44 0 2.22 0.1 2.02 0.31 C 1.59 0.77 1.23 1.28 0.93 1.86 C 0.63 2.44 0.4 3.05 0.24 3.71 C 0.08 4.36 0 5.04 0 5.73 L 0 5.76 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={19.330} height={16.940} viewBox="0 0 19.330 16.940" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 166.33,
            width: 19.33,
            height: 16.94,
            color: "var(--labels-vibrant-tertiary)",
          }}>
            <path d={"M 14.61 4.27 L 17 6.37 L 17 2.16 C 17 1.98 16.95 1.84 16.84 1.73 C 16.73 1.62 16.59 1.57 16.41 1.57 L 15.19 1.57 C 15.02 1.57 14.87 1.62 14.76 1.73 C 14.65 1.84 14.6 1.98 14.6 2.16 L 14.6 4.27 L 14.61 4.27 Z M 0 7.99 C 0 8.19 0.07 8.36 0.2 8.48 C 0.33 8.6 0.5 8.67 0.71 8.67 C 0.82 8.67 0.92 8.65 1 8.62 C 1.08 8.59 1.16 8.54 1.24 8.48 L 9.38 1.66 C 9.47 1.58 9.56 1.54 9.66 1.54 C 9.76 1.54 9.86 1.58 9.95 1.66 L 18.09 8.48 C 18.16 8.54 18.24 8.59 18.33 8.62 C 18.42 8.65 18.51 8.67 18.62 8.67 C 18.82 8.67 18.99 8.61 19.13 8.48 C 19.26 8.36 19.33 8.19 19.33 7.99 C 19.33 7.75 19.22 7.55 19.01 7.37 L 10.72 0.41 C 10.4 0.14 10.05 0 9.67 0 C 9.29 0 8.94 0.14 8.62 0.41 L 0.33 7.37 C 0.12 7.54 0.01 7.75 0.01 7.99 L 0 7.99 Z M 8.97 10.18 L 8.97 8.86 L 9.5 8.42 C 9.61 8.33 9.72 8.33 9.83 8.42 L 10.36 8.86 L 10.36 10.18 C 10.36 10.29 10.3 10.35 10.19 10.35 L 9.14 10.35 C 9.03 10.35 8.97 10.29 8.97 10.18 Z M 7.56 10.91 C 7.56 11.18 7.64 11.38 7.79 11.53 C 7.94 11.67 8.16 11.74 8.44 11.74 L 10.9 11.74 C 11.18 11.74 11.4 11.67 11.55 11.53 C 11.7 11.39 11.78 11.18 11.78 10.91 L 11.78 8.21 L 10.18 6.87 C 10.02 6.73 9.85 6.67 9.67 6.66 C 9.49 6.66 9.32 6.73 9.16 6.87 L 7.56 8.21 L 7.56 10.91 Z M 6.39 12.45 L 6.39 7.64 L 9.4 5.11 C 9.48 5.05 9.57 5.02 9.67 5.01 C 9.77 5.01 9.86 5.04 9.94 5.11 L 12.95 7.64 L 12.95 12.45 C 12.95 12.76 12.79 12.92 12.48 12.92 L 6.85 12.92 C 6.54 12.92 6.39 12.76 6.39 12.45 Z M 4.95 13.22 C 4.95 13.59 5.05 13.87 5.25 14.06 C 5.45 14.25 5.76 14.34 6.16 14.34 L 13.18 14.34 C 13.58 14.34 13.88 14.25 14.08 14.06 C 14.29 13.87 14.39 13.59 14.39 13.22 L 14.39 6.94 L 10.23 3.45 C 10.05 3.31 9.86 3.23 9.66 3.23 C 9.46 3.23 9.27 3.3 9.1 3.45 L 4.94 6.94 L 4.94 13.22 L 4.95 13.22 Z M 2.33 15.03 C 2.33 15.63 2.5 16.1 2.85 16.43 C 3.2 16.77 3.68 16.94 4.31 16.94 L 15.03 16.94 C 15.65 16.94 16.14 16.77 16.48 16.43 C 16.83 16.09 17 15.63 17 15.03 L 17 6.17 L 15.56 6.12 L 15.56 14.66 C 15.56 14.94 15.49 15.16 15.35 15.3 C 15.21 15.44 15 15.51 14.71 15.51 L 4.63 15.51 C 4.34 15.51 4.13 15.44 3.99 15.3 C 3.85 15.16 3.78 14.95 3.78 14.66 L 3.78 6.05 L 2.34 6.1 L 2.34 15.03 L 2.33 15.03 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={13.780} height={16.891} viewBox="0 0 13.780 16.891" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 110.33,
            width: 13.78,
            height: 16.891,
            color: "var(--labels-vibrant-tertiary)",
          }}>
            <path d={"M 2.32 16.881 C 2.61 16.881 2.93 16.821 3.27 16.701 C 3.61 16.581 3.94 16.401 4.24 16.141 C 4.55 15.891 4.8 15.551 4.99 15.141 C 5.18 14.731 5.28 14.231 5.28 13.651 L 5.28 6.251 C 5.28 6.071 5.3 5.951 5.34 5.901 C 5.38 5.851 5.48 5.811 5.64 5.781 L 12.09 4.451 C 12.27 4.411 12.39 4.411 12.45 4.451 C 12.51 4.491 12.54 4.591 12.54 4.741 L 12.59 9.701 C 12.59 10.061 12.42 10.281 12.09 10.351 L 10.91 10.611 C 9.29 10.961 8.48 11.751 8.48 12.981 C 8.48 13.391 8.58 13.761 8.79 14.081 C 8.99 14.401 9.27 14.661 9.63 14.841 C 9.98 15.021 10.39 15.121 10.84 15.121 C 11.14 15.121 11.45 15.061 11.79 14.951 C 12.13 14.841 12.45 14.661 12.75 14.411 C 13.05 14.161 13.3 13.841 13.49 13.431 C 13.68 13.031 13.78 12.531 13.78 11.951 L 13.78 0.951 C 13.78 0.551 13.68 0.271 13.47 0.131 C 13.26 -0.009 12.93 -0.039 12.48 0.051 L 4.88 1.621 C 4.3 1.741 4.01 2.051 4.01 2.551 L 4.06 11.491 C 4.06 11.831 3.92 12.031 3.63 12.081 L 2.39 12.341 C 1.59 12.511 0.99 12.801 0.59 13.211 C 0.2 13.621 0 14.131 0 14.761 C 0 15.391 0.22 15.901 0.66 16.291 C 1.1 16.691 1.65 16.891 2.33 16.891 L 2.32 16.881 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 55,
            width: 16,
            height: 16,
            color: "var(--labels-vibrant-tertiary)",
          }}>
            <path d={"M 8 16 C 9.099 16 10.13 15.794 11.092 15.372 C 12.054 14.96 12.908 14.38 13.644 13.644 C 14.38 12.908 14.96 12.054 15.372 11.092 C 15.794 10.13 16 9.099 16 8 C 16 6.901 15.794 5.87 15.372 4.908 C 14.95 3.946 14.38 3.092 13.644 2.356 C 12.908 1.62 12.054 1.04 11.092 0.628 C 10.13 0.216 9.09 0 8 0 C 6.91 0 5.88 0.206 4.908 0.628 C 3.946 1.04 3.092 1.62 2.356 2.356 C 1.62 3.092 1.05 3.946 0.628 4.908 C 0.216 5.87 0 6.901 0 8 C 0 9.099 0.206 10.13 0.628 11.092 C 1.04 12.054 1.62 12.908 2.356 13.644 C 3.092 14.38 3.946 14.96 4.908 15.372 C 5.87 15.784 6.901 16 8 16 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={16} height={14.820} viewBox="0 0 16 14.820" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 1,
            width: 16,
            height: 14.82,
            color: "var(--labels-vibrant-primary)",
          }}>
            <path d={"M 8.005 14.82 C 8.115 14.82 8.255 14.78 8.405 14.71 C 8.555 14.63 8.705 14.55 8.856 14.46 C 10.306 13.52 11.557 12.54 12.628 11.5 C 13.699 10.46 14.529 9.4 15.119 8.3 C 15.71 7.2 16 6.1 16 4.98 C 16 4.24 15.88 3.56 15.64 2.96 C 15.4 2.35 15.069 1.83 14.659 1.38 C 14.239 0.94 13.759 0.6 13.208 0.36 C 12.658 0.12 12.068 0 11.437 0 C 10.657 0 9.976 0.2 9.396 0.59 C 8.816 0.98 8.355 1.5 8.005 2.14 C 7.665 1.5 7.205 0.99 6.624 0.59 C 6.044 0.19 5.363 0 4.573 0 C 3.942 0 3.352 0.12 2.802 0.36 C 2.251 0.6 1.771 0.94 1.351 1.38 C 0.931 1.82 0.6 2.35 0.36 2.96 C 0.12 3.57 0 4.24 0 4.98 C 0 6.09 0.29 7.2 0.881 8.3 C 1.471 9.4 2.301 10.46 3.372 11.5 C 4.443 12.54 5.704 13.52 7.154 14.46 C 7.295 14.55 7.445 14.64 7.605 14.71 C 7.755 14.79 7.895 14.82 8.005 14.82 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 209,
          top: 560,
          width: 70,
          height: 70,
          borderRadius: 296,
        }}>
          <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 70,
            overflow: "hidden",
            borderRadius: 100,
            color: "rgb(36,36,36)",
          }}>
            <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 35 0 C 54.33 0 70 15.67 70 35 L 70 35 C 70 54.33 54.33 70 35 70 L 35 70 C 15.67 70 0 54.33 0 35 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={37.475} height={17.744} viewBox="0 0 37.475 17.744" fill="none" style={{
            position: "absolute",
            left: 16.777,
            top: 26.438,
            width: 37.475,
            height: 17.744,
            color: "rgba(255,255,255,0.5)",
          }}>
            <path d={"M 6.943 17.744 C 6.128 17.744 5.393 17.7 4.737 17.611 C 4.081 17.528 3.492 17.372 2.97 17.143 C 2.448 16.92 1.974 16.598 1.547 16.178 C 1.133 15.764 0.815 15.299 0.592 14.784 C 0.369 14.262 0.213 13.673 0.124 13.017 C 0.041 12.361 0 11.626 0 10.811 L 0 6.905 C 0 5.695 0.102 4.661 0.306 3.801 C 0.509 2.935 0.926 2.19 1.557 1.566 C 2.181 0.942 2.929 0.525 3.801 0.315 C 4.673 0.105 5.708 0 6.905 0 L 26.158 0 C 26.973 0 27.708 0.045 28.364 0.134 C 29.02 0.216 29.609 0.372 30.131 0.602 C 30.653 0.825 31.127 1.146 31.554 1.566 C 31.968 1.98 32.286 2.448 32.509 2.97 C 32.732 3.486 32.885 4.072 32.967 4.727 C 33.056 5.383 33.101 6.118 33.101 6.933 L 33.101 10.811 C 33.101 11.626 33.056 12.361 32.967 13.017 C 32.885 13.666 32.732 14.252 32.509 14.774 C 32.286 15.296 31.968 15.764 31.554 16.178 C 31.134 16.598 30.659 16.92 30.131 17.143 C 29.609 17.372 29.02 17.528 28.364 17.611 C 27.708 17.7 26.973 17.744 26.158 17.744 L 6.943 17.744 Z M 6.599 14.917 L 26.502 14.917 C 27.164 14.917 27.75 14.86 28.259 14.746 C 28.768 14.631 29.176 14.418 29.481 14.106 C 29.781 13.8 29.988 13.399 30.102 12.902 C 30.217 12.406 30.274 11.823 30.274 11.155 L 30.274 6.599 C 30.274 5.924 30.217 5.339 30.102 4.842 C 29.994 4.345 29.787 3.941 29.481 3.629 C 29.17 3.323 28.759 3.113 28.25 2.999 C 27.747 2.884 27.164 2.827 26.502 2.827 L 6.628 2.827 C 5.953 2.827 5.358 2.884 4.842 2.999 C 4.333 3.107 3.925 3.317 3.62 3.629 C 3.314 3.941 3.104 4.349 2.989 4.852 C 2.881 5.354 2.827 5.947 2.827 6.628 L 2.827 11.155 C 2.827 11.823 2.881 12.406 2.989 12.902 C 3.104 13.399 3.314 13.8 3.62 14.106 C 3.932 14.418 4.339 14.631 4.842 14.746 C 5.345 14.86 5.931 14.917 6.599 14.917 Z M 34.973 12.358 L 34.973 5.386 C 35.329 5.412 35.699 5.571 36.081 5.864 C 36.469 6.157 36.797 6.561 37.064 7.077 C 37.338 7.586 37.475 8.185 37.475 8.872 C 37.475 9.56 37.338 10.161 37.064 10.677 C 36.797 11.186 36.469 11.591 36.081 11.89 C 35.699 12.183 35.329 12.339 34.973 12.358 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={18.107} height={8.786} viewBox="0 0 18.107 8.786" fill="none" style={{
            position: "absolute",
            left: 21.256,
            top: 30.918,
            width: 18.107,
            height: 8.786,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 0.993 8.7 C 1.229 8.758 1.528 8.786 1.891 8.786 L 16.216 8.786 C 16.586 8.786 16.885 8.758 17.114 8.7 C 17.343 8.637 17.534 8.528 17.687 8.376 C 17.84 8.223 17.948 8.032 18.012 7.803 C 18.075 7.567 18.107 7.268 18.107 6.905 L 18.107 1.881 C 18.107 1.518 18.075 1.222 18.012 0.993 C 17.948 0.758 17.84 0.563 17.687 0.411 C 17.541 0.264 17.35 0.159 17.114 0.096 C 16.878 0.032 16.579 0 16.216 0 L 1.92 0 C 1.544 0 1.235 0.032 0.993 0.096 C 0.758 0.153 0.567 0.255 0.42 0.401 C 0.267 0.554 0.159 0.751 0.096 0.993 C 0.032 1.229 0 1.534 0 1.91 L 0 6.905 C 0 7.268 0.032 7.567 0.096 7.803 C 0.159 8.032 0.267 8.223 0.42 8.376 C 0.573 8.528 0.764 8.637 0.993 8.7 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 294,
          top: 475,
          width: 70,
          height: 70,
          borderRadius: 296,
        }}>
          <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 70,
            overflow: "hidden",
            borderRadius: 100,
            color: "rgb(36,36,36)",
          }}>
            <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 35 0 C 54.33 0 70 15.67 70 35 L 70 35 C 70 54.33 54.33 70 35 70 L 35 70 C 15.67 70 0 54.33 0 35 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={25.260} height={20.170} viewBox="0 0 25.260 20.170" fill="none" style={{
            position: "absolute",
            left: 19.709,
            top: 22.246,
            width: 25.26,
            height: 20.17,
            color: "rgb(64,64,64)",
          }}>
            <path d={"M 4.202 20.17 C 2.833 20.17 1.789 19.813 1.07 19.1 C 0.357 18.387 0 17.353 0 15.997 L 0 4.164 C 0 2.808 0.357 1.776 1.07 1.07 C 1.789 0.357 2.833 0 4.202 0 L 21.068 0 C 22.43 0 23.468 0.357 24.181 1.07 C 24.901 1.783 25.26 2.814 25.26 4.164 L 25.26 7 L 22.443 7 L 22.443 4.489 C 22.443 3.922 22.3 3.502 22.013 3.228 C 21.727 2.954 21.316 2.817 20.781 2.817 L 4.479 2.817 C 3.944 2.817 3.534 2.954 3.247 3.228 C 2.967 3.502 2.827 3.922 2.827 4.489 L 2.827 15.672 C 2.827 16.239 2.967 16.659 3.247 16.933 C 3.534 17.206 3.944 17.343 4.479 17.343 L 7.612 17.343 L 7.612 20.17 L 4.202 20.17 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={25.260} height={20.170} viewBox="0 0 25.260 20.170" fill="none" style={{
            position: "absolute",
            left: 26.05,
            top: 28.205,
            width: 25.26,
            height: 20.17,
            color: "var(--grays-white)",
          }}>
            <path d={"M 4.193 20.17 C 2.83 20.17 1.789 19.813 1.07 19.1 C 0.357 18.387 0 17.356 0 16.006 L 0 4.164 C 0 2.814 0.357 1.783 1.07 1.07 C 1.789 0.357 2.83 0 4.193 0 L 21.058 0 C 22.421 0 23.462 0.357 24.181 1.07 C 24.901 1.783 25.26 2.814 25.26 4.164 L 25.26 16.006 C 25.26 17.356 24.901 18.387 24.181 19.1 C 23.462 19.813 22.421 20.17 21.058 20.17 L 4.193 20.17 Z M 4.479 17.343 L 20.781 17.343 C 21.316 17.343 21.724 17.206 22.004 16.933 C 22.29 16.659 22.433 16.242 22.433 15.681 L 22.433 4.498 C 22.433 3.932 22.29 3.511 22.004 3.238 C 21.724 2.964 21.316 2.827 20.781 2.827 L 4.479 2.827 C 3.938 2.827 3.527 2.964 3.247 3.238 C 2.967 3.511 2.827 3.932 2.827 4.498 L 2.827 15.681 C 2.827 16.242 2.967 16.659 3.247 16.933 C 3.527 17.206 3.938 17.343 4.479 17.343 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 209,
          top: 475,
          width: 70,
          height: 70,
          borderRadius: 296,
          background: "linear-gradient(rgba(26,26,26,0.2),rgba(26,26,26,0.2)), linear-gradient(rgba(255,0,0,0.1),rgba(255,0,0,0.1))",
        }}>
          <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 70,
            overflow: "hidden",
            borderRadius: 100,
            color: "rgb(36,36,36)",
          }}>
            <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 35 0 C 54.33 0 70 15.67 70 35 L 70 35 C 70 54.33 54.33 70 35 70 L 35 70 C 15.67 70 0 54.33 0 35 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 70,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 32,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "var(--grays-white)",
          }}>􀑚</span>
        </div>
        <ControlsIPhone2x2
          style={{
            position: "absolute",
            left: 37,
            top: 475,
            width: 155,
            height: 155,
          }}
          symbol={"􀛮"}
          on={false}
        />
        <div style={{
          position: "absolute",
          left: 37,
          top: 389,
          width: 155,
          height: 70,
          borderRadius: 100,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 14px 0px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 155,
            height: 70,
          }}>
            <svg width={155} height={70} viewBox="0 0 155 70" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 155,
              height: 70,
              overflow: "hidden",
              borderRadius: 100,
              color: "rgb(36,36,36)",
            }}>
              <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 120 0 C 139.33 0 155 15.67 155 35 L 155 35 C 155 54.33 139.33 70 120 70 L 35 70 C 15.67 70 0 54.33 0 35 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            width: 40,
            height: 40,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(128,128,128),rgb(128,128,128)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀆺</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 15,
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Title</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 510,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "18px",
              letterSpacing: "-0.080px",
              color: "rgba(255,255,255,0.33)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Detail</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 294,
          top: 303,
          width: 70,
          height: 155,
          overflow: "hidden",
          borderRadius: 34,
        }}>
          <svg width={70} height={155} viewBox="0 0 70 155" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 155,
            overflow: "hidden",
            borderRadius: 100,
            color: "rgb(36,36,36)",
          }}>
            <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 35 0 C 54.33 0 70 15.67 70 35 L 70 120 C 70 139.33 54.33 155 35 155 L 35 155 C 15.67 155 0 139.33 0 120 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={70} height={55} viewBox="0 0 70 55" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 100,
            width: 70,
            height: 55,
            borderRadius: "100px 100px 24px 24px",
          }}>
            <path d={"M 0 0 L 70 0 L 70 20 C 70 30.245 70 35.367 68.462 39.454 C 66.027 45.922 60.922 51.027 54.454 53.462 C 50.367 55 45.245 55 35 55 L 35 55 C 24.755 55 19.633 55 15.546 53.462 C 9.078 51.027 3.973 45.922 1.538 39.454 C 0 35.367 0 30.245 0 20 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 20,
            top: 109,
            width: 29.4,
            height: 22.725,
          }}>
            <svg width={10} height={19} viewBox="0 0 10 19" fill="none" style={{
              position: "absolute",
              left: 20,
              top: 2,
              width: 10,
              height: 19,
              opacity: 0.5,
              color: "var(--accents-cyan)",
            }}>
              <path d={"M 0.552 15.305 C 0.244 15.096 0.065 14.817 0.013 14.469 C -0.03 14.12 0.069 13.758 0.308 13.384 C 0.659 12.861 0.933 12.269 1.13 11.607 C 1.327 10.936 1.425 10.234 1.425 9.503 C 1.425 8.771 1.327 8.069 1.13 7.398 C 0.942 6.728 0.668 6.135 0.308 5.621 C 0.06 5.255 -0.038 4.898 0.013 4.55 C 0.065 4.192 0.244 3.909 0.552 3.7 C 0.826 3.517 1.121 3.456 1.438 3.517 C 1.755 3.578 2.007 3.748 2.195 4.027 C 2.717 4.733 3.124 5.565 3.415 6.523 C 3.706 7.473 3.851 8.466 3.851 9.503 C 3.851 10.539 3.706 11.532 3.415 12.482 C 3.124 13.432 2.717 14.259 2.195 14.965 C 2.007 15.253 1.755 15.427 1.438 15.488 C 1.121 15.54 0.826 15.479 0.552 15.305 Z M 5.674 18.794 C 5.375 18.603 5.203 18.337 5.161 17.997 C 5.118 17.649 5.208 17.304 5.43 16.965 C 6.106 15.937 6.633 14.782 7.009 13.501 C 7.386 12.221 7.574 10.888 7.574 9.503 C 7.574 8.117 7.386 6.784 7.009 5.504 C 6.641 4.214 6.115 3.06 5.43 2.04 C 5.199 1.701 5.105 1.361 5.148 1.021 C 5.199 0.673 5.375 0.403 5.674 0.211 C 5.965 0.019 6.269 -0.042 6.585 0.028 C 6.911 0.089 7.172 0.267 7.369 0.564 C 8.207 1.757 8.853 3.134 9.307 4.693 C 9.769 6.244 10 7.847 10 9.503 C 10 11.158 9.769 12.761 9.307 14.312 C 8.845 15.854 8.199 17.23 7.369 18.441 C 7.172 18.738 6.911 18.916 6.585 18.977 C 6.269 19.038 5.965 18.977 5.674 18.794 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={15.500} height={23} viewBox="0 0 15.500 23" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 15.5,
              height: 23,
              color: "var(--accents-cyan)",
            }}>
              <path d={"M 13.865 23 C 13.544 23 13.24 22.927 12.953 22.782 C 12.665 22.645 12.365 22.426 12.053 22.126 L 6.755 17.038 C 6.671 16.969 6.573 16.935 6.464 16.935 L 2.864 16.935 C 1.943 16.935 1.234 16.678 0.735 16.164 C 0.245 15.65 0 14.892 0 13.89 L 0 9.123 C 0 8.129 0.245 7.375 0.735 6.861 C 1.234 6.347 1.943 6.091 2.864 6.091 L 6.464 6.091 C 6.573 6.091 6.671 6.052 6.755 5.975 L 12.053 0.951 C 12.408 0.617 12.716 0.377 12.978 0.231 C 13.24 0.077 13.527 0 13.84 0 C 14.33 0 14.727 0.167 15.031 0.501 C 15.344 0.835 15.5 1.242 15.5 1.722 L 15.5 21.342 C 15.5 21.814 15.348 22.208 15.044 22.525 C 14.74 22.842 14.347 23 13.865 23 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 209,
          top: 303,
          width: 70,
          height: 155,
          overflow: "hidden",
          borderRadius: 34,
        }}>
          <svg width={70} height={155} viewBox="0 0 70 155" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 155,
            overflow: "hidden",
            borderRadius: 100,
            color: "rgb(36,36,36)",
          }}>
            <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 35 0 C 54.33 0 70 15.67 70 35 L 70 120 C 70 139.33 54.33 155 35 155 L 35 155 C 15.67 155 0 139.33 0 120 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={70} height={112} viewBox="0 0 70 112" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 43,
            width: 70,
            height: 112,
            borderRadius: "100px 100px 24px 24px",
          }}>
            <path d={"M 0 0 L 70 0 L 70 77 C 70 87.245 70 92.367 68.462 96.454 C 66.027 102.922 60.922 108.027 54.454 110.462 C 50.367 112 45.245 112 35 112 L 35 112 C 24.755 112 19.633 112 15.546 110.462 C 9.078 108.027 3.973 102.922 1.538 96.454 C 0 92.367 0 87.245 0 77 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 21,
            top: 107,
            width: 27,
            height: 27,
            overflow: "hidden",
          }}>
            <svg width={27} height={27} viewBox="0 0 27 27" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 27,
              height: 27,
              opacity: 0.5,
              color: "var(--accents-yellow)",
            }}>
              <path d={"M 13.506 4.954 C 13.166 4.954 12.879 4.833 12.644 4.591 C 12.41 4.349 12.293 4.062 12.293 3.731 L 12.293 1.211 C 12.293 0.88 12.41 0.598 12.644 0.363 C 12.879 0.121 13.166 0 13.506 0 C 13.83 0 14.109 0.121 14.343 0.363 C 14.586 0.598 14.707 0.88 14.707 1.211 L 14.707 3.731 C 14.707 4.062 14.586 4.349 14.343 4.591 C 14.109 4.833 13.83 4.954 13.506 4.954 Z M 19.549 7.474 C 19.315 7.248 19.197 6.965 19.197 6.626 C 19.197 6.287 19.315 6 19.549 5.766 L 21.345 3.973 C 21.572 3.739 21.855 3.622 22.195 3.622 C 22.534 3.614 22.822 3.727 23.056 3.961 C 23.291 4.195 23.408 4.482 23.408 4.821 C 23.408 5.16 23.291 5.447 23.056 5.681 L 21.272 7.474 C 21.038 7.716 20.751 7.837 20.411 7.837 C 20.071 7.829 19.784 7.708 19.549 7.474 Z M 22.049 13.506 C 22.049 13.175 22.166 12.892 22.401 12.658 C 22.644 12.416 22.935 12.295 23.275 12.295 L 25.787 12.295 C 26.118 12.295 26.401 12.416 26.636 12.658 C 26.879 12.892 27 13.175 27 13.506 C 27 13.837 26.879 14.12 26.636 14.354 C 26.401 14.588 26.118 14.705 25.787 14.705 L 23.275 14.705 C 22.935 14.705 22.644 14.588 22.401 14.354 C 22.166 14.12 22.049 13.837 22.049 13.506 Z M 19.549 19.538 C 19.776 19.312 20.059 19.199 20.399 19.199 C 20.738 19.199 21.026 19.312 21.26 19.538 L 23.056 21.331 C 23.291 21.557 23.408 21.84 23.408 22.179 C 23.408 22.518 23.295 22.805 23.068 23.039 C 22.834 23.265 22.547 23.378 22.207 23.378 C 21.867 23.386 21.584 23.281 21.357 23.063 L 19.549 21.246 C 19.315 21.02 19.197 20.742 19.197 20.41 C 19.197 20.071 19.315 19.781 19.549 19.538 Z M 13.506 22.058 C 13.83 22.058 14.109 22.175 14.343 22.409 C 14.586 22.651 14.707 22.938 14.707 23.269 L 14.707 25.789 C 14.707 26.12 14.586 26.402 14.343 26.637 C 14.109 26.879 13.83 27 13.506 27 C 13.166 27 12.879 26.879 12.644 26.637 C 12.41 26.402 12.293 26.12 12.293 25.789 L 12.293 23.269 C 12.293 22.938 12.41 22.651 12.644 22.409 C 12.879 22.175 13.166 22.058 13.506 22.058 Z M 7.451 19.538 C 7.677 19.781 7.791 20.071 7.791 20.41 C 7.791 20.742 7.673 21.02 7.439 21.246 L 5.643 23.051 C 5.416 23.269 5.129 23.374 4.781 23.366 C 4.441 23.366 4.154 23.253 3.92 23.027 C 3.701 22.793 3.592 22.506 3.592 22.167 C 3.592 21.828 3.709 21.545 3.944 21.319 L 5.728 19.538 C 5.962 19.312 6.249 19.199 6.589 19.199 C 6.929 19.199 7.216 19.312 7.451 19.538 Z M 4.951 13.506 C 4.951 13.837 4.83 14.12 4.587 14.354 C 4.344 14.588 4.057 14.705 3.725 14.705 L 1.201 14.705 C 0.878 14.705 0.595 14.588 0.352 14.354 C 0.117 14.12 0 13.837 0 13.506 C 0 13.175 0.117 12.892 0.352 12.658 C 0.595 12.416 0.878 12.295 1.201 12.295 L 3.725 12.295 C 4.057 12.295 4.344 12.416 4.587 12.658 C 4.83 12.892 4.951 13.175 4.951 13.506 Z M 7.439 7.474 C 7.204 7.708 6.917 7.825 6.577 7.825 C 6.245 7.825 5.962 7.708 5.728 7.474 L 3.944 5.669 C 3.717 5.443 3.604 5.16 3.604 4.821 C 3.604 4.482 3.721 4.195 3.956 3.961 C 4.191 3.727 4.478 3.614 4.818 3.622 C 5.157 3.63 5.44 3.747 5.667 3.973 L 7.451 5.766 C 7.677 5.992 7.791 6.279 7.791 6.626 C 7.791 6.965 7.673 7.248 7.439 7.474 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={11} height={11} viewBox="0 0 11 11" fill="none" style={{
              position: "absolute",
              left: 8,
              top: 8,
              width: 11,
              height: 11,
              color: "var(--accents-yellow)",
            }}>
              <path d={"M 5.5 11 C 4.741 11 4.028 10.86 3.361 10.579 C 2.694 10.291 2.107 9.898 1.602 9.4 C 1.103 8.895 0.709 8.309 0.421 7.642 C 0.14 6.975 0 6.263 0 5.505 C 0 4.74 0.14 4.028 0.421 3.368 C 0.709 2.702 1.103 2.119 1.602 1.621 C 2.107 1.116 2.694 0.719 3.361 0.432 C 4.028 0.144 4.741 0 5.5 0 C 6.259 0 6.972 0.144 7.639 0.432 C 8.306 0.719 8.889 1.116 9.388 1.621 C 9.894 2.119 10.287 2.702 10.568 3.368 C 10.856 4.028 11 4.74 11 5.505 C 11 6.263 10.856 6.975 10.568 7.642 C 10.287 8.309 9.894 8.895 9.388 9.4 C 8.889 9.898 8.306 10.291 7.639 10.579 C 6.972 10.86 6.259 11 5.5 11 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <ControlsIPhone1x1
          style={{
            position: "absolute",
            left: 37,
            top: 303,
            width: 70,
            height: 70,
          }}
          symbol={"􀌟"}
          on={false}
        />
        <div style={{
          position: "absolute",
          left: 122,
          top: 303,
          width: 70,
          height: 70,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 70,
          }}>
            <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 70,
              height: 70,
              overflow: "hidden",
              borderRadius: 100,
            }}>
              <path d={"M 0 35 C 0 15.67 15.67 0 35 0 L 35 0 C 54.33 0 70 15.67 70 35 L 70 35 C 70 54.33 54.33 70 35 70 L 35 70 C 15.67 70 0 54.33 0 35 L 0 35 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: 70,
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
          left: 209,
          top: 132,
          width: 155,
          height: 155,
          borderRadius: 30,
        }}>
          <svg width={155} height={155} viewBox="0 0 155 155" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 155,
            height: 155,
            overflow: "hidden",
            borderRadius: 30,
            color: "rgb(36,36,36)",
          }}>
            <path d={"M 0 48 C 0 31.198 0 22.798 3.27 16.38 C 6.146 10.735 10.735 6.146 16.38 3.27 C 22.798 0 31.198 0 48 0 L 107 0 C 123.802 0 132.202 0 138.62 3.27 C 144.265 6.146 148.854 10.735 151.73 16.38 C 155 22.798 155 31.198 155 48 L 155 107 C 155 123.802 155 132.202 151.73 138.62 C 148.854 144.265 144.265 148.854 138.62 151.73 C 132.202 155 123.802 155 107 155 L 48 155 C 31.198 155 22.798 155 16.38 151.73 C 10.735 148.854 6.146 144.265 3.27 138.62 C 0 132.202 0 123.802 0 107 L 0 48 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "absolute",
            left: 111,
            top: 124,
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
          }}>􀊌</span>
          <span style={{
            position: "absolute",
            left: 65,
            top: 115,
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
          }}>􀊄</span>
          <span style={{
            position: "absolute",
            left: 24,
            top: 124,
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
          }}>􀊊</span>
          <span style={{
            position: "absolute",
            left: 14,
            top: 91,
            width: 124,
            height: 18,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 15,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "rgb(175,175,175)",
          }}>Artist</span>
          <span style={{
            position: "absolute",
            left: 14,
            top: 74,
            width: 124,
            height: 18,
            fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 510,
            fontSize: 15,
            lineHeight: "100%",
            letterSpacing: "-0.200px",
            color: "rgb(175,175,175)",
          }}>Track</span>
          <div style={{
            position: "absolute",
            left: 100,
            top: 13,
            width: 40,
            height: 40,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
          }}>
            <span style={{
              position: "absolute",
              left: 8,
              top: 8,
              width: 24,
              height: 24,
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
            left: 12.666,
            top: 13.333,
            width: 53.666,
            height: 53.666,
            borderRadius: 14,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 37,
          top: 132,
          width: 155,
          height: 155,
          borderRadius: 30,
        }}>
          <svg width={155} height={155} viewBox="0 0 155 155" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 155,
            height: 155,
            overflow: "hidden",
            borderRadius: 30,
            color: "rgb(36,36,36)",
          }}>
            <path d={"M 0 48 C 0 31.198 0 22.798 3.27 16.38 C 6.146 10.735 10.735 6.146 16.38 3.27 C 22.798 0 31.198 0 48 0 L 107 0 C 123.802 0 132.202 0 138.62 3.27 C 144.265 6.146 148.854 10.735 151.73 16.38 C 155 22.798 155 31.198 155 48 L 155 107 C 155 123.802 155 132.202 151.73 138.62 C 148.854 144.265 144.265 148.854 138.62 151.73 C 132.202 155 123.802 155 107 155 L 48 155 C 31.198 155 22.798 155 16.38 151.73 C 10.735 148.854 6.146 144.265 3.27 138.62 C 0 132.202 0 123.802 0 107 L 0 48 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 116,
            top: 115.333,
            width: 25.666,
            height: 25.67,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 25.333,
              height: 25.333,
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
            left: 84.667,
            top: 115.333,
            width: 25.666,
            height: 25.67,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 25.333,
              height: 25.333,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀉤</span>
          </div>
          <div style={{
            position: "absolute",
            left: 116,
            top: 84,
            width: 25.666,
            height: 25.67,
            borderRadius: 100,
            backgroundColor: "var(--accents-blue)",
          }}>
            <svg width={8.794} height={13.936} viewBox="0 0 8.794 13.936" fill="none" style={{
              position: "absolute",
              left: 8.443,
              top: 6.08,
              width: 8.794,
              height: 13.936,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 5.029 5.319 L 5.029 2.238 L 6.925 3.791 L 5.029 5.319 Z M 5.029 11.705 L 5.029 8.623 L 6.925 10.151 L 5.029 11.705 Z M 3.436 13.034 C 3.436 13.903 4.529 14.233 5.24 13.627 L 8.373 10.967 C 8.662 10.73 8.794 10.414 8.794 10.098 C 8.794 9.782 8.649 9.466 8.36 9.242 L 5.529 6.964 L 8.36 4.687 C 8.649 4.45 8.781 4.134 8.794 3.831 C 8.794 3.528 8.662 3.212 8.373 2.962 L 5.24 0.315 C 4.516 -0.304 3.436 0.039 3.436 0.908 L 3.436 5.398 L 1.316 3.646 C 1.159 3.515 0.974 3.449 0.777 3.449 C 0.342 3.449 0 3.791 0 4.226 C 0 4.463 0.092 4.7 0.316 4.871 L 2.936 6.978 L 0.316 9.084 C 0.092 9.255 0 9.492 0 9.729 C 0 10.204 0.355 10.506 0.777 10.506 C 0.961 10.506 1.159 10.441 1.316 10.309 L 3.436 8.558 L 3.436 13.034 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
          <div style={{
            position: "absolute",
            left: 84.667,
            top: 84,
            width: 25.666,
            height: 25.666,
            borderRadius: 100,
            backgroundColor: "var(--accents-green)",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 25.333,
              height: 25.333,
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 9,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.200px",
              color: "var(--grays-white)",
            }}>􀭧</span>
          </div>
          <div style={{
            position: "absolute",
            left: 14,
            top: 84,
            width: 57,
            height: 57,
            borderRadius: 100,
            backgroundColor: "var(--accents-blue)",
          }}>
            <span style={{
              position: "absolute",
              left: 14,
              top: 19,
              width: 29,
              height: 20,
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
            left: 84.667,
            top: 13,
            width: 57,
            height: 57,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
          }}>
            <svg width={22.666} height={21.354} viewBox="0 0 22.666 21.354" fill="none" style={{
              position: "absolute",
              left: 16.666,
              top: 18,
              width: 22.666,
              height: 21.354,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 11.333 0 C 17.592 0 22.666 5.074 22.666 11.334 C 22.666 15.681 20.218 19.453 16.627 21.354 L 15.674 19.721 C 18.705 18.148 20.777 14.984 20.777 11.334 C 20.777 6.118 16.549 1.889 11.333 1.889 C 6.117 1.889 1.889 6.118 1.889 11.334 C 1.889 14.984 3.961 18.149 6.991 19.722 L 6.038 21.354 C 2.448 19.453 0 15.68 0 11.334 C 0 5.075 5.074 0 11.333 0 Z M 11.333 3.148 C 15.853 3.149 19.518 6.813 19.518 11.334 C 19.518 14.52 17.696 17.278 15.038 18.631 L 14.085 16.996 C 16.183 15.975 17.629 13.824 17.629 11.334 C 17.629 7.857 14.81 5.037 11.333 5.037 C 7.856 5.037 5.037 7.857 5.037 11.334 C 5.037 13.824 6.483 15.976 8.58 16.997 L 7.627 18.631 C 4.97 17.278 3.148 14.52 3.147 11.334 C 3.147 6.813 6.813 3.149 11.333 3.148 Z M 11.333 6.611 C 13.941 6.611 16.055 8.726 16.055 11.334 C 16.055 13.244 14.92 14.888 13.289 15.632 L 12.327 13.983 C 13.401 13.58 14.166 12.548 14.166 11.334 C 14.166 9.769 12.898 8.5 11.333 8.5 C 9.768 8.5 8.5 9.769 8.5 11.334 C 8.5 12.548 9.265 13.58 10.338 13.983 L 9.377 15.632 C 7.746 14.888 6.611 13.244 6.611 11.334 C 6.611 8.726 8.725 6.612 11.333 6.611 Z M 11.333 9.76 C 12.202 9.76 12.907 10.464 12.907 11.333 C 12.907 12.202 12.202 12.907 11.333 12.907 C 10.464 12.907 9.759 12.202 9.759 11.333 C 9.759 10.464 10.464 9.76 11.333 9.76 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "absolute",
            left: 14,
            top: 13,
            width: 57,
            height: 57,
            borderRadius: 100,
            background: "linear-gradient(rgb(34,34,34),rgb(34,34,34)), linear-gradient(rgb(119,119,119),rgb(119,119,119)), linear-gradient(rgba(17,17,17,0.6),rgba(17,17,17,0.6))",
          }}>
            <span style={{
              position: "absolute",
              left: 15,
              top: 19,
              width: 28,
              height: 20,
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
          left: 48,
          top: 89,
          width: 306.003,
          height: 13.666,
        }}>
          <div style={{
            position: "absolute",
            left: 276,
            top: 0,
            width: 30.003,
            height: 13.666,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 27.333,
              height: 13.666,
              opacity: 0.35,
              borderRadius: 4.665999889373779,
              boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
            }} />
            <svg width={1.670} height={5} viewBox="0 0 1.670 5" fill="none" style={{
              position: "absolute",
              left: 28.333,
              top: 4.333,
              width: 1.67,
              height: 5,
              opacity: 0.4,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 0 0 L 0 5 C 1.012 4.577 1.67 3.591 1.67 2.5 C 1.67 1.409 1.012 0.423 0 0"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
              position: "absolute",
              left: 2.33,
              top: 2.33,
              width: 22.666,
              height: 9,
              borderRadius: 2.5,
              backgroundColor: "rgb(255,255,255)",
            }} />
          </div>
          <span style={{
            position: "absolute",
            left: 230,
            top: -2,
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
          <svg width={17.142} height={12.328} viewBox="0 0 17.142 12.328" fill="none" style={{
            position: "absolute",
            left: 25.199,
            top: 0.638,
            width: 17.142,
            height: 12.328,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 8.571 2.466 C 11.058 2.466 13.45 3.388 15.253 5.042 C 15.389 5.17 15.606 5.168 15.739 5.038 L 17.037 3.775 C 17.104 3.709 17.142 3.62 17.142 3.527 C 17.141 3.435 17.102 3.346 17.034 3.281 C 12.303 -1.094 4.839 -1.094 0.108 3.281 C 0.04 3.346 0.001 3.435 0 3.527 C -0.001 3.62 0.037 3.709 0.105 3.775 L 1.403 5.038 C 1.536 5.168 1.753 5.17 1.889 5.042 C 3.692 3.388 6.084 2.466 8.571 2.466 Z M 8.568 6.687 C 9.925 6.686 11.234 7.198 12.24 8.122 C 12.376 8.253 12.591 8.251 12.723 8.116 L 14.011 6.797 C 14.078 6.727 14.116 6.634 14.115 6.536 C 14.114 6.438 14.075 6.345 14.005 6.278 C 10.942 3.387 6.197 3.387 3.133 6.278 C 3.064 6.345 3.024 6.438 3.023 6.536 C 3.023 6.634 3.06 6.728 3.128 6.797 L 4.415 8.116 C 4.548 8.251 4.762 8.253 4.898 8.122 C 5.904 7.199 7.212 6.687 8.568 6.687 Z M 11.092 9.48 C 11.094 9.585 11.057 9.687 10.99 9.761 L 8.813 12.216 C 8.749 12.288 8.662 12.328 8.572 12.328 C 8.481 12.328 8.394 12.288 8.33 12.216 L 6.153 9.761 C 6.086 9.687 6.049 9.585 6.051 9.48 C 6.053 9.375 6.094 9.275 6.164 9.204 C 7.554 7.89 9.59 7.89 10.98 9.204 C 11.05 9.275 11.09 9.375 11.092 9.48 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <svg width={20.680} height={13} viewBox="0 0 20.680 13" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0.333,
            width: 20.68,
            height: 13,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 17.119 0.546 C 17.01 0.76 17.01 1.04 17.01 1.6 L 17.01 11.4 C 17.01 11.96 17.01 12.24 17.119 12.454 C 17.215 12.642 17.368 12.795 17.556 12.891 C 17.77 13 18.05 13 18.61 13 L 19.08 13 C 19.64 13 19.92 13 20.134 12.891 C 20.322 12.795 20.475 12.642 20.571 12.454 C 20.68 12.24 20.68 11.96 20.68 11.4 L 20.68 1.6 C 20.68 1.04 20.68 0.76 20.571 0.546 C 20.475 0.358 20.322 0.205 20.134 0.109 C 19.92 0 19.64 0 19.08 0 L 18.61 0 C 18.05 0 17.77 0 17.556 0.109 C 17.368 0.205 17.215 0.358 17.119 0.546 Z M 11.442 3.543 C 11.333 3.757 11.333 4.037 11.333 4.597 L 11.333 11.397 C 11.333 11.957 11.333 12.237 11.442 12.451 C 11.538 12.639 11.691 12.792 11.879 12.888 C 12.093 12.997 12.373 12.997 12.933 12.997 L 13.403 12.997 C 13.963 12.997 14.243 12.997 14.457 12.888 C 14.645 12.792 14.798 12.639 14.894 12.451 C 15.003 12.237 15.003 11.957 15.003 11.397 L 15.003 4.597 C 15.003 4.037 15.003 3.757 14.894 3.543 C 14.798 3.355 14.645 3.202 14.457 3.106 C 14.243 2.997 13.963 2.997 13.403 2.997 L 12.933 2.997 C 12.373 2.997 12.093 2.997 11.879 3.106 C 11.691 3.202 11.538 3.355 11.442 3.543 Z M 5.666 7.597 C 5.666 7.037 5.666 6.757 5.775 6.543 C 5.871 6.355 6.024 6.202 6.212 6.106 C 6.426 5.997 6.706 5.997 7.266 5.997 L 7.736 5.997 C 8.296 5.997 8.576 5.997 8.79 6.106 C 8.978 6.202 9.131 6.355 9.227 6.543 C 9.336 6.757 9.336 7.037 9.336 7.597 L 9.336 11.397 C 9.336 11.957 9.336 12.237 9.227 12.451 C 9.131 12.639 8.978 12.792 8.79 12.888 C 8.576 12.997 8.296 12.997 7.736 12.997 L 7.266 12.997 C 6.706 12.997 6.426 12.997 6.212 12.888 C 6.024 12.792 5.871 12.639 5.775 12.451 C 5.666 12.237 5.666 11.957 5.666 11.397 L 5.666 7.597 Z M 0.109 8.543 C 0 8.757 0 9.037 0 9.597 L 0 11.397 C 0 11.957 0 12.237 0.109 12.451 C 0.205 12.639 0.358 12.792 0.546 12.888 C 0.76 12.997 1.04 12.997 1.6 12.997 L 2.07 12.997 C 2.63 12.997 2.91 12.997 3.124 12.888 C 3.312 12.792 3.465 12.639 3.561 12.451 C 3.67 12.237 3.67 11.957 3.67 11.397 L 3.67 9.597 C 3.67 9.037 3.67 8.757 3.561 8.543 C 3.465 8.355 3.312 8.202 3.124 8.106 C 2.91 7.997 2.63 7.997 2.07 7.997 L 1.6 7.997 C 1.04 7.997 0.76 7.997 0.546 8.106 C 0.358 8.202 0.205 8.355 0.109 8.543 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
        <div style={{
            position: "absolute",
            left: 287,
            top: 560,
            width: 58,
            height: 58,
          }}>
          <LiquidGlassClearLight style={{ transform: "scale(0.362, 0.362)", transformOrigin: "0 0" }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 2190,
        top: 2000,
        width: 1210,
        height: 834,
        overflow: "hidden",
      }}>
        <WallpapersIPad
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1210,
            height: 834,
          }}
          mode={"light"}
        />
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
        <LockScreenWidgetInline style={{
            position: "absolute",
            left: 442,
            top: 66.5,
            width: 327,
          }} />
        <span style={{
          position: "absolute",
          left: 596,
          top: 26,
          width: 19,
          height: 23,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 510,
          fontSize: 19,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
        }}>􀎡</span>
        <div style={{
          position: "absolute",
          left: 39,
          top: 66,
          width: 164,
          height: 702,
        }}>
          <LockScreenWidgetTallBody2
            style={{
              position: "absolute",
              left: 2,
              top: 630.5,
              width: 162,
            }}
            line1={"Cupertino"}
            line2={"9:41AM"}
          />
          <div style={{
            position: "absolute",
            left: 2,
            top: 450,
            width: 162,
            height: 162,
          }}>
            <svg width={148} height={148} viewBox="0 0 148 148" fill="none" style={{
              position: "absolute",
              left: 7,
              top: 7,
              width: 148,
              height: 148,
              overflow: "hidden",
              borderRadius: 100,
              backdropFilter: "blur(50px)",
              color: "rgb(140,140,140)",
            }}>
              <path d={"M 0 74 C 0 33.131 33.131 0 74 0 L 74 0 C 114.869 0 148 33.131 148 74 L 148 74 C 148 114.869 114.869 148 74 148 L 74 148 C 33.131 148 0 114.869 0 74 L 0 74 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
              position: "absolute",
              left: 21.314,
              top: 17.028,
              width: 119.373,
              height: 129.405,
            }}>
              <span style={{
                position: "absolute",
                left: 48.735,
                top: 0,
                width: 19,
                height: 23,
                opacity: 0.85,
                fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 19,
                textAlign: "left",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>12</span>
              <span style={{
                position: "absolute",
                left: 25.085,
                top: 7.739,
                width: 16,
                height: 23,
                opacity: 0.85,
                fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 19,
                textAlign: "left",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>11</span>
              <span style={{
                position: "absolute",
                left: 6.641,
                top: 27.085,
                width: 20,
                height: 23,
                opacity: 0.85,
                fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 19,
                textAlign: "left",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>10</span>
              <span style={{
                position: "absolute",
                left: 0,
                top: 53.203,
                width: 12,
                height: 23,
                opacity: 0.85,
                fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 19,
                textAlign: "left",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>9</span>
              <span style={{
                position: "absolute",
                left: 7.739,
                top: 79.32,
                width: 12,
                height: 23,
                opacity: 0.85,
                fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 19,
                textAlign: "left",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>8</span>
              <span style={{
                position: "absolute",
                left: 26.618,
                top: 97.699,
                width: 11,
                height: 23,
                opacity: 0.85,
                fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 19,
                textAlign: "left",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>7</span>
              <span style={{
                position: "absolute",
                left: 54.17,
                top: 106.405,
                width: 12,
                height: 23,
                opacity: 0.85,
                fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 19,
                textAlign: "left",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>6</span>
              <span style={{
                position: "absolute",
                left: 78.353,
                top: 97.699,
                width: 12,
                height: 23,
                opacity: 0.85,
                fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 19,
                textAlign: "left",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>5</span>
              <span style={{
                position: "absolute",
                left: 98.667,
                top: 79.32,
                width: 12,
                height: 23,
                opacity: 0.85,
                fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 19,
                textAlign: "left",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>4</span>
              <span style={{
                position: "absolute",
                left: 107.373,
                top: 53.203,
                width: 12,
                height: 23,
                opacity: 0.85,
                fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 19,
                textAlign: "left",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>3</span>
              <span style={{
                position: "absolute",
                left: 100.134,
                top: 27.085,
                width: 11,
                height: 23,
                opacity: 0.85,
                fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 19,
                textAlign: "left",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>2</span>
              <span style={{
                position: "absolute",
                left: 82.288,
                top: 7.739,
                width: 8,
                height: 23,
                opacity: 0.85,
                fontFamily: "\"SF Compact Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 19,
                textAlign: "left",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
              }}>1</span>
            </div>
            <svg width={141.229} height={141.229} viewBox="0 0 141.229 141.229" fill="none" style={{
              position: "absolute",
              left: 10.385,
              top: 10.385,
              width: 141.229,
              height: 141.229,
              borderRadius: 100,
              color: "rgb(217,217,217)",
            }}>
              <path d={"M 69.647 0.967 C 69.647 0.433 70.08 0 70.614 0 C 71.149 0 71.582 0.433 71.582 0.967 L 71.582 4.837 C 71.582 5.371 71.149 5.804 70.614 5.804 C 70.08 5.804 69.647 5.371 69.647 4.837 L 69.647 0.967 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 140.261 69.647 C 140.796 69.647 141.229 70.08 141.229 70.614 C 141.229 71.149 140.796 71.582 140.261 71.582 L 136.392 71.582 C 135.858 71.582 135.425 71.149 135.425 70.614 C 135.425 70.08 135.858 69.647 136.392 69.647 L 140.261 69.647 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 4.837 70.614 C 5.371 70.614 5.804 71.047 5.804 71.582 C 5.804 72.116 5.371 72.549 4.837 72.549 L 0.967 72.549 C 0.433 72.549 0 72.116 0 71.582 C 0 71.047 0.433 70.614 0.967 70.614 L 4.837 70.614 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 69.647 136.392 C 69.647 135.858 70.08 135.425 70.614 135.425 C 71.149 135.425 71.582 135.858 71.582 136.392 L 71.582 140.261 C 71.582 140.796 71.149 141.229 70.614 141.229 C 70.08 141.229 69.647 140.796 69.647 140.261 L 69.647 136.392 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 76.932 1.248 C 76.988 0.716 77.464 0.331 77.996 0.387 C 78.527 0.443 78.912 0.919 78.856 1.45 L 78.452 5.298 C 78.396 5.829 77.92 6.215 77.389 6.159 C 76.858 6.103 76.472 5.627 76.528 5.096 L 76.932 1.248 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 139.981 76.932 C 140.512 76.988 140.898 77.464 140.842 77.996 C 140.786 78.527 140.31 78.912 139.779 78.856 L 135.931 78.452 C 135.399 78.396 135.014 77.92 135.07 77.389 C 135.126 76.858 135.602 76.472 136.133 76.528 L 139.981 76.932 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 5.197 63.739 C 5.728 63.795 6.114 64.271 6.058 64.802 C 6.002 65.333 5.526 65.719 4.995 65.663 L 1.147 65.258 C 0.615 65.202 0.23 64.726 0.286 64.195 C 0.342 63.664 0.818 63.278 1.349 63.334 L 5.197 63.739 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 62.777 135.931 C 62.833 135.399 63.309 135.014 63.84 135.07 C 64.371 135.126 64.757 135.602 64.701 136.133 L 64.296 139.981 C 64.24 140.512 63.764 140.898 63.233 140.842 C 62.702 140.786 62.316 140.31 62.372 139.779 L 62.777 135.931 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 84.149 2.288 C 84.26 1.766 84.773 1.432 85.296 1.543 C 85.818 1.654 86.152 2.168 86.041 2.69 L 85.237 6.475 C 85.125 6.998 84.612 7.331 84.089 7.22 C 83.567 7.109 83.233 6.595 83.344 6.073 L 84.149 2.288 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 138.941 84.149 C 139.463 84.26 139.797 84.773 139.686 85.296 C 139.575 85.818 139.061 86.152 138.538 86.041 L 134.754 85.237 C 134.231 85.125 133.898 84.612 134.009 84.089 C 134.12 83.567 134.633 83.233 135.156 83.344 L 138.941 84.149 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 6.274 56.938 C 6.797 57.049 7.13 57.563 7.019 58.086 C 6.908 58.608 6.394 58.942 5.872 58.831 L 2.087 58.026 C 1.564 57.915 1.231 57.402 1.342 56.879 C 1.453 56.356 1.967 56.023 2.489 56.134 L 6.274 56.938 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 55.992 134.754 C 56.103 134.231 56.617 133.897 57.14 134.009 C 57.662 134.12 57.996 134.633 57.885 135.156 L 57.08 138.941 C 56.969 139.463 56.455 139.797 55.933 139.686 C 55.41 139.575 55.077 139.061 55.188 138.538 L 55.992 134.754 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 91.217 4.077 C 91.382 3.569 91.927 3.291 92.435 3.456 C 92.944 3.621 93.222 4.167 93.056 4.675 L 91.861 8.355 C 91.696 8.863 91.15 9.141 90.642 8.976 C 90.134 8.811 89.856 8.265 90.021 7.757 L 91.217 4.077 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 137.152 91.217 C 137.66 91.382 137.938 91.927 137.773 92.435 C 137.608 92.944 137.062 93.222 136.554 93.056 L 132.874 91.861 C 132.366 91.696 132.088 91.15 132.253 90.642 C 132.418 90.134 132.964 89.856 133.472 90.021 L 137.152 91.217 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 8.056 50.288 C 8.564 50.453 8.842 50.999 8.677 51.507 C 8.512 52.015 7.966 52.293 7.458 52.128 L 3.778 50.932 C 3.27 50.767 2.992 50.221 3.157 49.713 C 3.322 49.205 3.868 48.927 4.376 49.092 L 8.056 50.288 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 49.368 132.874 C 49.533 132.366 50.079 132.088 50.587 132.253 C 51.095 132.418 51.373 132.964 51.208 133.472 L 50.012 137.152 C 49.847 137.66 49.301 137.938 48.793 137.773 C 48.285 137.608 48.007 137.062 48.172 136.554 L 49.368 132.874 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 98.059 6.595 C 98.276 6.107 98.848 5.888 99.336 6.105 C 99.824 6.322 100.043 6.894 99.826 7.382 L 98.252 10.917 C 98.035 11.405 97.463 11.624 96.975 11.407 C 96.487 11.19 96.268 10.618 96.485 10.13 L 98.059 6.595 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 134.634 98.059 C 135.122 98.276 135.341 98.848 135.124 99.336 C 134.907 99.824 134.335 100.043 133.847 99.826 L 130.312 98.252 C 129.824 98.035 129.604 97.463 129.822 96.975 C 130.039 96.487 130.611 96.268 131.099 96.485 L 134.634 98.059 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 10.523 43.86 C 11.011 44.077 11.231 44.649 11.014 45.137 C 10.796 45.625 10.225 45.845 9.736 45.628 L 6.202 44.054 C 5.714 43.836 5.494 43.265 5.711 42.777 C 5.929 42.289 6.501 42.069 6.989 42.286 L 10.523 43.86 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 42.976 130.312 C 43.194 129.824 43.766 129.604 44.254 129.822 C 44.742 130.039 44.961 130.611 44.744 131.099 L 43.17 134.634 C 42.953 135.122 42.381 135.341 41.893 135.124 C 41.405 134.907 41.185 134.335 41.403 133.847 L 42.976 130.312 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 104.6 9.815 C 104.867 9.352 105.459 9.193 105.922 9.461 C 106.384 9.728 106.543 10.319 106.276 10.782 L 104.341 14.133 C 104.074 14.595 103.482 14.754 103.02 14.487 C 102.557 14.22 102.398 13.628 102.666 13.165 L 104.6 9.815 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 131.414 104.6 C 131.877 104.867 132.035 105.459 131.768 105.922 C 131.501 106.384 130.91 106.543 130.447 106.276 L 127.096 104.341 C 126.633 104.074 126.475 103.482 126.742 103.02 C 127.009 102.557 127.601 102.398 128.063 102.666 L 131.414 104.6 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 13.649 37.725 C 14.112 37.993 14.27 38.584 14.003 39.047 C 13.736 39.51 13.144 39.668 12.682 39.401 L 9.331 37.466 C 8.868 37.199 8.71 36.608 8.977 36.145 C 9.244 35.682 9.836 35.524 10.298 35.791 L 13.649 37.725 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 36.888 127.096 C 37.155 126.633 37.746 126.475 38.209 126.742 C 38.672 127.009 38.83 127.601 38.563 128.063 L 36.629 131.414 C 36.361 131.877 35.77 132.035 35.307 131.768 C 34.845 131.501 34.686 130.91 34.953 130.447 L 36.888 127.096 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 110.769 13.7 C 111.083 13.268 111.688 13.172 112.12 13.486 C 112.553 13.8 112.648 14.405 112.334 14.837 L 110.06 17.968 C 109.746 18.4 109.141 18.496 108.709 18.182 C 108.277 17.868 108.181 17.263 108.495 16.83 L 110.769 13.7 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 127.529 110.769 C 127.961 111.083 128.057 111.688 127.743 112.12 C 127.429 112.553 126.824 112.648 126.391 112.334 L 123.261 110.06 C 122.829 109.746 122.733 109.141 123.047 108.709 C 123.361 108.277 123.966 108.181 124.398 108.495 L 127.529 110.769 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 17.399 31.951 C 17.831 32.265 17.927 32.87 17.613 33.302 C 17.299 33.735 16.694 33.83 16.262 33.516 L 13.132 31.242 C 12.699 30.928 12.604 30.323 12.918 29.891 C 13.232 29.459 13.837 29.363 14.269 29.677 L 17.399 31.951 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 31.169 123.261 C 31.483 122.829 32.088 122.733 32.52 123.047 C 32.952 123.361 33.048 123.966 32.734 124.398 L 30.459 127.529 C 30.145 127.961 29.54 128.057 29.108 127.743 C 28.676 127.429 28.58 126.824 28.894 126.391 L 31.169 123.261 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 116.498 18.209 C 116.856 17.812 117.468 17.78 117.865 18.138 C 118.262 18.495 118.294 19.107 117.936 19.504 L 115.347 22.379 C 114.99 22.776 114.378 22.808 113.981 22.451 C 113.584 22.093 113.552 21.482 113.909 21.085 L 116.498 18.209 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 123.019 116.498 C 123.417 116.856 123.449 117.468 123.091 117.865 C 122.734 118.262 122.122 118.294 121.725 117.936 L 118.85 115.347 C 118.453 114.99 118.42 114.378 118.778 113.981 C 119.135 113.584 119.747 113.552 120.144 113.909 L 123.019 116.498 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 21.732 26.6 C 22.129 26.958 22.161 27.57 21.804 27.967 C 21.446 28.364 20.834 28.396 20.437 28.038 L 17.562 25.449 C 17.165 25.092 17.133 24.48 17.49 24.083 C 17.848 23.686 18.46 23.654 18.857 24.011 L 21.732 26.6 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 25.882 118.85 C 26.239 118.453 26.851 118.42 27.248 118.778 C 27.645 119.135 27.677 119.747 27.319 120.144 L 24.73 123.019 C 24.373 123.417 23.761 123.449 23.364 123.091 C 22.967 122.734 22.935 122.122 23.293 121.725 L 25.882 118.85 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 121.725 23.293 C 122.122 22.935 122.734 22.967 123.091 23.364 C 123.449 23.761 123.417 24.373 123.019 24.73 L 120.144 27.319 C 119.747 27.677 119.135 27.645 118.778 27.248 C 118.42 26.851 118.453 26.239 118.85 25.882 L 121.725 23.293 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 117.936 121.725 C 118.294 122.122 118.262 122.734 117.865 123.091 C 117.468 123.449 116.856 123.417 116.498 123.019 L 113.909 120.144 C 113.552 119.747 113.584 119.135 113.981 118.778 C 114.378 118.42 114.99 118.453 115.347 118.85 L 117.936 121.725 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 26.6 21.732 C 26.958 22.129 26.926 22.741 26.529 23.098 C 26.132 23.456 25.52 23.424 25.163 23.026 L 22.574 20.151 C 22.216 19.754 22.248 19.142 22.645 18.785 C 23.042 18.427 23.654 18.46 24.011 18.857 L 26.6 21.732 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 21.085 113.909 C 21.482 113.552 22.093 113.584 22.451 113.981 C 22.808 114.378 22.776 114.99 22.379 115.347 L 19.504 117.936 C 19.107 118.294 18.495 118.262 18.138 117.865 C 17.78 117.468 17.812 116.856 18.209 116.499 L 21.085 113.909 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 126.391 28.894 C 126.824 28.58 127.429 28.676 127.743 29.108 C 128.057 29.54 127.961 30.145 127.529 30.459 L 124.398 32.734 C 123.966 33.048 123.361 32.952 123.047 32.52 C 122.733 32.088 122.829 31.483 123.261 31.169 L 126.391 28.894 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 112.334 126.391 C 112.648 126.824 112.553 127.429 112.12 127.743 C 111.688 128.057 111.083 127.961 110.769 127.529 L 108.495 124.398 C 108.181 123.966 108.277 123.361 108.709 123.047 C 109.141 122.733 109.746 122.829 110.06 123.261 L 112.334 126.391 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 31.951 17.399 C 32.265 17.831 32.169 18.436 31.737 18.75 C 31.305 19.064 30.7 18.968 30.386 18.536 L 28.112 15.406 C 27.798 14.974 27.894 14.369 28.326 14.055 C 28.758 13.741 29.363 13.837 29.677 14.269 L 31.951 17.399 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 16.83 108.495 C 17.263 108.181 17.868 108.277 18.182 108.709 C 18.496 109.141 18.4 109.746 17.968 110.06 L 14.837 112.334 C 14.405 112.648 13.8 112.553 13.486 112.12 C 13.172 111.688 13.268 111.083 13.7 110.769 L 16.83 108.495 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 130.447 34.953 C 130.91 34.686 131.501 34.845 131.768 35.307 C 132.035 35.77 131.877 36.361 131.414 36.629 L 128.063 38.563 C 127.601 38.83 127.009 38.672 126.742 38.209 C 126.475 37.746 126.633 37.155 127.096 36.888 L 130.447 34.953 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 106.276 130.447 C 106.543 130.91 106.384 131.501 105.922 131.768 C 105.459 132.035 104.867 131.877 104.6 131.414 L 102.666 128.063 C 102.398 127.601 102.557 127.009 103.02 126.742 C 103.482 126.475 104.074 126.633 104.341 127.096 L 106.276 130.447 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 37.725 13.649 C 37.993 14.112 37.834 14.703 37.371 14.971 C 36.909 15.238 36.317 15.079 36.05 14.616 L 34.115 11.266 C 33.848 10.803 34.007 10.211 34.469 9.944 C 34.932 9.677 35.524 9.836 35.791 10.298 L 37.725 13.649 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 13.165 102.666 C 13.628 102.398 14.22 102.557 14.487 103.02 C 14.754 103.482 14.595 104.074 14.133 104.341 L 10.782 106.276 C 10.319 106.543 9.728 106.384 9.461 105.922 C 9.193 105.459 9.352 104.867 9.815 104.6 L 13.165 102.666 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 133.847 41.403 C 134.335 41.185 134.907 41.405 135.124 41.893 C 135.341 42.381 135.122 42.953 134.634 43.17 L 131.099 44.744 C 130.611 44.961 130.039 44.742 129.822 44.254 C 129.604 43.766 129.824 43.194 130.312 42.976 L 133.847 41.403 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 99.826 133.847 C 100.043 134.335 99.824 134.907 99.336 135.124 C 98.848 135.341 98.276 135.122 98.059 134.634 L 96.485 131.099 C 96.268 130.611 96.487 130.039 96.975 129.822 C 97.463 129.604 98.035 129.824 98.252 130.312 L 99.826 133.847 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 43.86 10.523 C 44.077 11.011 43.858 11.583 43.37 11.801 C 42.882 12.018 42.31 11.798 42.093 11.31 L 40.519 7.776 C 40.302 7.287 40.521 6.716 41.009 6.498 C 41.497 6.281 42.069 6.501 42.286 6.989 L 43.86 10.523 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 10.13 96.485 C 10.618 96.268 11.19 96.487 11.407 96.975 C 11.624 97.463 11.405 98.035 10.917 98.252 L 7.382 99.826 C 6.894 100.043 6.322 99.824 6.105 99.336 C 5.888 98.848 6.107 98.276 6.595 98.059 L 10.13 96.485 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 136.554 48.172 C 137.062 48.007 137.608 48.285 137.773 48.793 C 137.938 49.301 137.66 49.847 137.152 50.012 L 133.472 51.208 C 132.964 51.373 132.418 51.095 132.253 50.587 C 132.088 50.079 132.366 49.533 132.874 49.368 L 136.554 48.172 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 93.056 136.554 C 93.222 137.062 92.944 137.608 92.435 137.773 C 91.927 137.938 91.382 137.66 91.217 137.152 L 90.021 133.472 C 89.856 132.964 90.134 132.418 90.642 132.253 C 91.15 132.088 91.696 132.366 91.861 132.874 L 93.056 136.554 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 50.288 8.056 C 50.453 8.564 50.175 9.11 49.667 9.275 C 49.159 9.44 48.613 9.162 48.448 8.654 L 47.252 4.974 C 47.087 4.466 47.365 3.92 47.873 3.755 C 48.381 3.59 48.927 3.868 49.092 4.376 L 50.288 8.056 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 7.757 90.021 C 8.265 89.856 8.811 90.134 8.976 90.642 C 9.141 91.15 8.863 91.696 8.355 91.861 L 4.675 93.056 C 4.167 93.222 3.621 92.944 3.456 92.435 C 3.291 91.927 3.569 91.382 4.077 91.217 L 7.757 90.021 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 138.538 55.188 C 139.061 55.077 139.575 55.41 139.686 55.933 C 139.797 56.455 139.463 56.969 138.941 57.08 L 135.156 57.885 C 134.633 57.996 134.12 57.662 134.009 57.14 C 133.897 56.617 134.231 56.103 134.754 55.992 L 138.538 55.188 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 86.041 138.538 C 86.152 139.061 85.818 139.575 85.296 139.686 C 84.773 139.797 84.26 139.463 84.149 138.941 L 83.344 135.156 C 83.233 134.633 83.567 134.12 84.089 134.009 C 84.612 133.897 85.125 134.231 85.237 134.754 L 86.041 138.538 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 56.938 6.274 C 57.049 6.797 56.716 7.31 56.193 7.421 C 55.671 7.532 55.157 7.199 55.046 6.676 L 54.242 2.892 C 54.131 2.369 54.464 1.855 54.987 1.744 C 55.509 1.633 56.023 1.967 56.134 2.489 L 56.938 6.274 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 6.073 83.344 C 6.595 83.233 7.109 83.567 7.22 84.089 C 7.331 84.612 6.998 85.125 6.475 85.237 L 2.69 86.041 C 2.168 86.152 1.654 85.818 1.543 85.296 C 1.432 84.773 1.766 84.26 2.288 84.149 L 6.073 83.344 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 139.779 62.372 C 140.31 62.316 140.786 62.702 140.842 63.233 C 140.898 63.764 140.512 64.24 139.981 64.296 L 136.133 64.701 C 135.602 64.757 135.126 64.371 135.07 63.84 C 135.014 63.309 135.399 62.833 135.931 62.777 L 139.779 62.372 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 78.856 139.779 C 78.912 140.31 78.527 140.786 77.996 140.842 C 77.464 140.898 76.988 140.512 76.932 139.981 L 76.528 136.133 C 76.472 135.602 76.858 135.126 77.389 135.07 C 77.92 135.014 78.396 135.399 78.452 135.931 L 78.856 139.779 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 63.739 5.197 C 63.795 5.728 63.409 6.204 62.878 6.26 C 62.347 6.316 61.871 5.93 61.815 5.399 L 61.41 1.551 C 61.354 1.02 61.74 0.544 62.271 0.488 C 62.802 0.432 63.278 0.818 63.334 1.349 L 63.739 5.197 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 5.096 76.528 C 5.627 76.472 6.103 76.858 6.159 77.389 C 6.215 77.92 5.829 78.396 5.298 78.452 L 1.45 78.856 C 0.919 78.912 0.443 78.527 0.387 77.996 C 0.331 77.464 0.716 76.988 1.248 76.932 L 5.096 76.528 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
            <svg width={82.054} height={107.373} viewBox="0 0 82.054 107.373" fill="none" style={{
              position: "absolute",
              left: 50.53,
              top: 43.759,
              width: 82.054,
              height: 107.373,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 29.02 34.764 L 24.755 31.678 C 24.914 30.689 24.524 29.646 23.657 29.02 L 4.38 15.031 C 3.152 14.144 1.417 14.417 0.524 15.637 C -0.368 16.857 -0.093 18.581 1.135 19.467 L 20.412 33.456 C 21.279 34.082 22.398 34.128 23.296 33.672 L 27.561 36.758 L 29.02 34.764 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 30.426 39.199 C 29.37 39.199 28.513 38.343 28.513 37.287 C 28.513 36.231 29.37 35.375 30.426 35.375 C 31.482 35.375 32.338 36.231 32.338 37.287 C 32.338 38.343 31.482 39.199 30.426 39.199 Z M 81.542 1.08 C 80.673 -0.089 78.981 -0.35 77.784 0.499 L 37.995 28.742 C 37.149 29.342 36.77 30.341 36.925 31.289 L 32.799 34.214 C 31.055 32.979 28.614 33.357 27.347 35.059 C 26.08 36.762 26.466 39.146 28.211 40.383 C 29.956 41.62 32.398 41.243 33.665 39.54 C 34.428 38.515 34.591 37.244 34.22 36.125 L 38.347 33.198 C 39.222 33.635 40.312 33.592 41.158 32.992 L 80.947 4.748 C 82.144 3.899 82.412 2.249 81.542 1.08 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 30.487 29.987 C 30.211 29.987 29.987 30.211 29.987 30.487 L 29.987 33.356 C 29.987 33.632 30.211 33.856 30.487 33.856 C 30.763 33.856 30.987 33.632 30.987 33.356 L 30.987 30.487 C 30.987 30.211 30.763 29.987 30.487 29.987 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 30.487 40.627 C 30.211 40.627 29.987 40.851 29.987 41.127 L 29.987 106.873 C 29.987 107.149 30.211 107.373 30.487 107.373 C 30.763 107.373 30.987 107.149 30.987 106.873 L 30.987 41.127 C 30.987 40.851 30.763 40.627 30.487 40.627 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <LockScreenWidgetRectangularWith
            style={{
              position: "absolute",
              left: 2,
              top: 359.213,
              width: 162,
            }}
            symbol={"􀛤"}
            label={"AAPL"}
            secondaryLabel={"+1.78"}
          />
          <LockScreenWidgetCircularOpen3 style={{
              position: "absolute",
              left: 92,
              top: 270,
              width: 72,
              height: 72,
            }} />
          <LockScreenWidgetCircularOpen style={{
              position: "absolute",
              left: 2,
              top: 270,
              width: 72,
              height: 72,
            }} />
          <LockScreenWidgetModularWith style={{
              position: "absolute",
              left: 2,
              top: 180,
              width: 162,
              height: 72,
            }} />
          <LockScreenWidget2x2Date style={{
              position: "absolute",
              left: 2,
              top: 0,
              width: 162,
              height: 162,
            }} />
        </div>
        <svg width={239.313} height={102} viewBox="0 0 239.313 102" fill="none" style={{
          position: "absolute",
          left: 485,
          top: 109,
          width: 239.313,
          height: 102,
          backdropFilter: "blur(30px)",
        }}>
          <path d={"M 37.672 0 C 43.787 0 49.238 0.945 54.046 2.836 C 58.854 4.727 62.927 7.457 66.288 11.04 L 66.3 11.017 C 69.661 14.599 72.216 18.953 73.955 24.076 C 75.694 29.199 76.569 35.011 76.569 41.5 L 76.569 59.694 C 76.569 68.494 75.006 76.045 71.878 82.37 C 68.75 88.696 64.257 93.539 58.41 96.924 C 52.563 100.308 45.515 102 37.264 102 C 30.355 102 24.391 100.845 19.361 98.558 C 14.331 96.27 10.387 93.201 7.504 89.338 C 4.738 85.638 3.058 81.554 2.463 77.096 L 2.393 76.512 C 2.264 75.812 2.3 75.228 2.475 74.762 C 2.65 74.295 2.941 73.933 3.361 73.688 C 3.781 73.443 4.342 73.314 5.065 73.314 L 18.614 73.314 C 19.151 73.314 19.594 73.384 19.933 73.524 C 20.271 73.664 20.552 73.886 20.75 74.178 C 20.913 74.423 21.065 74.738 21.193 75.135 L 21.264 75.38 C 21.579 77.27 22.373 79.056 23.668 80.748 C 24.963 82.44 26.772 83.806 29.095 84.856 C 31.417 85.907 34.3 86.432 37.73 86.432 C 41.5 86.432 44.675 85.779 47.23 84.483 C 49.786 83.188 51.851 81.425 53.415 79.196 C 54.979 76.967 56.1 74.446 56.788 71.622 C 57.477 68.798 57.815 65.868 57.815 62.811 L 57.815 55.901 L 57.582 56.217 C 55.19 59.333 52.003 61.842 48.012 63.744 C 43.822 65.74 38.921 66.732 33.284 66.732 C 26.76 66.732 20.995 65.367 15.988 62.647 C 10.982 59.928 7.061 56.159 4.236 51.351 C 1.412 46.542 0 41.057 0 34.895 L 0 33.635 C 0 27.018 1.552 21.182 4.645 16.141 C 7.737 11.099 12.102 7.142 17.739 4.283 C 23.376 1.424 30.016 0 37.672 0 Z M 178.521 1.692 C 179.187 1.692 179.713 1.786 180.121 1.984 C 180.529 2.183 180.821 2.474 181.02 2.883 C 181.218 3.291 181.312 3.816 181.312 4.481 L 181.312 66.394 L 191.465 66.394 C 192.107 66.394 192.632 66.499 193.04 66.697 L 193.052 66.732 C 193.46 66.931 193.764 67.234 193.962 67.643 C 194.16 68.051 194.266 68.576 194.266 69.218 L 194.266 79.208 C 194.266 79.85 194.16 80.375 193.962 80.783 C 193.764 81.192 193.46 81.495 193.052 81.693 C 192.643 81.892 192.117 81.997 191.476 81.997 L 181.323 81.997 L 181.323 97.624 C 181.323 98.266 181.218 98.791 181.02 99.199 C 180.821 99.608 180.518 99.912 180.109 100.11 C 179.701 100.309 179.175 100.413 178.533 100.413 L 165.72 100.413 C 165.078 100.413 164.564 100.309 164.167 100.11 C 163.77 99.912 163.467 99.608 163.269 99.211 C 163.07 98.814 162.965 98.289 162.965 97.659 L 162.965 81.997 L 116.692 81.997 C 116.039 81.997 115.525 81.903 115.128 81.693 C 114.731 81.483 114.428 81.192 114.229 80.795 C 114.031 80.398 113.926 79.873 113.926 79.231 L 113.926 67.946 C 113.926 67.293 113.961 66.755 114.02 66.323 C 114.078 65.892 114.206 65.483 114.381 65.087 C 114.556 64.69 114.813 64.211 115.151 63.651 C 117.229 60.337 119.318 57.011 121.407 53.673 C 123.496 50.335 125.585 47.009 127.662 43.694 C 129.751 40.38 131.829 37.065 133.906 33.739 C 135.983 30.413 138.072 27.088 140.161 23.75 C 142.25 20.412 144.34 17.086 146.417 13.76 C 148.494 10.434 150.583 7.107 152.672 3.781 C 153.01 3.221 153.337 2.801 153.664 2.509 C 153.991 2.206 154.364 2.007 154.784 1.879 C 155.204 1.751 155.741 1.692 156.395 1.692 L 178.521 1.692 Z M 236.547 1.692 C 237.189 1.692 237.715 1.798 238.123 1.996 C 238.531 2.194 238.835 2.498 239.033 2.906 L 239.01 2.906 C 239.208 3.315 239.313 3.84 239.313 4.481 L 239.313 97.601 C 239.313 98.254 239.22 98.791 239.021 99.188 C 238.835 99.584 238.531 99.877 238.135 100.075 C 237.738 100.274 237.212 100.366 236.547 100.366 L 223.336 100.401 C 222.706 100.401 222.181 100.297 221.784 100.099 C 221.387 99.9 221.084 99.596 220.886 99.199 C 220.687 98.802 220.582 98.278 220.582 97.647 L 220.582 19.677 L 197.837 35.233 C 197.288 35.607 196.798 35.77 196.354 35.724 C 195.911 35.677 195.549 35.49 195.269 35.14 C 194.989 34.801 194.849 34.3 194.849 33.635 L 194.849 22.058 C 194.849 21.416 194.907 20.891 195.012 20.459 C 195.128 20.027 195.316 19.653 195.596 19.326 C 195.876 18.999 196.285 18.65 196.821 18.288 L 218.609 2.999 C 219.146 2.626 219.602 2.346 219.987 2.159 C 220.372 1.973 220.78 1.856 221.2 1.786 C 221.62 1.728 222.158 1.692 222.823 1.692 L 236.547 1.692 Z M 95.896 65.297 C 97.856 65.297 99.619 65.752 101.194 66.662 C 102.758 67.572 104.019 68.809 104.952 70.385 C 105.886 71.96 106.353 73.77 106.353 75.684 C 106.353 77.598 105.886 79.36 104.952 80.947 C 104.019 82.534 102.77 83.795 101.194 84.705 C 99.619 85.615 97.809 86.07 95.896 86.07 C 93.982 86.07 92.219 85.615 90.632 84.705 C 89.045 83.795 87.784 82.546 86.874 80.947 C 85.964 79.348 85.509 77.644 85.509 75.684 C 85.509 73.723 85.964 71.949 86.874 70.385 C 87.784 68.821 89.033 67.572 90.632 66.662 C 92.231 65.752 93.935 65.297 95.896 65.297 Z M 158.355 23.26 C 156.103 26.854 153.85 30.448 151.621 34.031 C 149.392 37.626 147.14 41.209 144.888 44.804 C 142.635 48.398 140.383 51.993 138.131 55.599 C 135.878 59.205 133.637 62.799 131.408 66.394 L 163.28 66.394 L 163.28 15.394 C 163.27 15.41 160.103 20.475 158.355 23.26 Z M 37.556 15.405 C 33.844 15.405 30.576 16.129 27.717 17.564 C 24.858 19 22.629 21.042 21.019 23.656 C 19.408 26.27 18.603 29.375 18.603 32.958 L 18.603 33.926 C 18.603 37.52 19.408 40.671 21.019 43.379 C 22.629 46.086 24.858 48.176 27.717 49.67 C 30.576 51.164 33.809 51.91 37.556 51.91 C 41.302 51.91 44.581 51.164 47.417 49.67 C 50.253 48.176 52.471 46.075 54.081 43.379 C 55.691 40.683 56.496 37.532 56.496 33.926 L 56.496 32.958 C 56.496 29.375 55.691 26.282 54.081 23.656 C 52.471 21.03 50.241 19 47.417 17.564 C 44.593 16.129 41.267 15.405 37.556 15.405 Z M 95.896 15.79 C 97.856 15.79 99.619 16.245 101.194 17.155 C 102.758 18.066 104.019 19.303 104.952 20.878 C 105.886 22.453 106.353 24.263 106.353 26.177 C 106.353 28.091 105.886 29.853 104.952 31.44 C 104.019 33.028 102.77 34.288 101.194 35.198 C 99.619 36.109 97.809 36.563 95.896 36.563 C 93.982 36.563 92.219 36.109 90.632 35.198 C 89.045 34.288 87.784 33.039 86.874 31.44 C 85.964 29.842 85.509 28.137 85.509 26.177 C 85.509 24.216 85.964 22.442 86.874 20.878 C 87.784 19.314 89.033 18.066 90.632 17.155 C 92.231 16.245 93.935 15.79 95.896 15.79 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "absolute",
        left: 2190,
        top: 1100,
        width: 58,
        height: 58,
        borderRadius: 100,
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 58,
            height: 58,
          }}>
          <LiquidGlassClearLight style={{ transform: "scale(0.362, 0.362)", transformOrigin: "0 0" }} />
        </div>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 58,
          height: 58,
          opacity: 0.9,
          fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 21,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "-0.200px",
          color: "rgb(217,217,217)",
        }}>􀝌</span>
      </div>
      <div style={{
        position: "absolute",
        left: 2190,
        top: 100,
        width: 402,
        height: 874,
        overflow: "hidden",
      }}>
        <WallpapersIPhone
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 402,
            height: 874,
          }}
          mode={"light"}
        />
        <div style={{
          position: "absolute",
          left: 0,
          top: 840,
          width: 402,
          height: 34,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,1,273,21)",
            transformOrigin: "0 0",
            width: 144,
            height: 5,
            borderRadius: 100,
            backgroundColor: "var(--labels-primary)",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 46,
          top: 766,
          width: 310,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <ControlsLockScreen style={{
              position: "relative",
              width: 58,
              height: 58,
              flexShrink: 0,
            }} />
          <ControlsLockScreen
            style={{
              position: "relative",
              width: 58,
              height: 58,
              flexShrink: 0,
            }}
            symbol={"􀌟"}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 214,
          width: 402,
          display: "flex",
          flexDirection: "row",
          padding: "0px 32px 0px 32px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <LockScreenWidgetModularTable
            style={{
              position: "relative",
              height: 72,
              flexGrow: 1,
              width: "auto",
            }}
            symbol={"􀇕"}
            line1={"72º"}
            line2={"Partly Cloudy"}
            line3={"H:88º L:64º"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 16,
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <LockScreenWidgetCircularOpen style={{
                position: "relative",
                width: 72,
                height: 72,
                flexShrink: 0,
              }} />
            <LockScreenWidgetCircularStack style={{
                position: "relative",
                width: 72,
                height: 72,
                flexShrink: 0,
              }} />
          </div>
        </div>
        <svg width={205.060} height={87.400} viewBox="0 0 205.060 87.400" fill="none" style={{
          position: "absolute",
          left: 98,
          top: 115,
          width: 205.06,
          height: 87.4,
          backdropFilter: "blur(30px)",
        }}>
          <path d={"M 32.28 0 C 37.52 0 42.19 0.81 46.31 2.43 C 50.43 4.05 53.92 6.39 56.8 9.46 L 56.81 9.44 C 59.69 12.51 61.88 16.24 63.37 20.63 C 64.86 25.02 65.61 30 65.61 35.56 L 65.61 51.15 C 65.61 58.69 64.27 65.16 61.59 70.58 C 58.91 76 55.06 80.15 50.05 83.05 C 45.04 85.95 39 87.4 31.93 87.4 C 26.01 87.4 20.9 86.41 16.59 84.45 C 12.28 82.49 8.9 79.86 6.43 76.55 C 4.06 73.38 2.62 69.879 2.11 66.06 L 2.05 65.56 C 1.94 64.96 1.97 64.459 2.12 64.06 C 2.27 63.66 2.52 63.35 2.88 63.14 C 3.24 62.93 3.72 62.82 4.34 62.82 L 15.95 62.82 C 16.41 62.82 16.79 62.88 17.08 63 C 17.37 63.12 17.61 63.31 17.78 63.56 C 17.92 63.77 18.05 64.04 18.16 64.38 L 18.22 64.59 C 18.49 66.21 19.17 67.74 20.28 69.19 C 21.39 70.64 22.94 71.81 24.93 72.71 C 26.92 73.61 29.39 74.06 32.33 74.06 C 35.56 74.06 38.28 73.5 40.47 72.39 C 42.66 71.28 44.43 69.77 45.77 67.86 C 47.11 65.95 48.07 63.79 48.66 61.37 C 49.25 58.95 49.54 56.44 49.54 53.82 L 49.54 47.9 L 49.34 48.17 C 47.29 50.84 44.56 52.99 41.14 54.62 C 37.55 56.33 33.349 57.18 28.52 57.18 C 22.93 57.18 17.99 56.01 13.7 53.68 C 9.41 51.35 6.05 48.12 3.63 44 C 1.21 39.88 0 35.18 0 29.9 L 0 28.82 C 0 23.15 1.33 18.15 3.98 13.83 C 6.63 9.51 10.37 6.12 15.2 3.67 C 20.03 1.22 25.72 0 32.28 0 Z M 152.97 1.45 C 153.54 1.45 153.99 1.53 154.34 1.7 C 154.69 1.87 154.94 2.12 155.11 2.47 C 155.28 2.82 155.36 3.27 155.36 3.84 L 155.36 56.89 L 164.061 56.89 C 164.61 56.89 165.06 56.98 165.41 57.15 L 165.42 57.18 C 165.77 57.35 166.03 57.61 166.2 57.96 C 166.37 58.31 166.46 58.76 166.46 59.31 L 166.46 67.87 C 166.46 68.42 166.37 68.87 166.2 69.22 C 166.03 69.57 165.77 69.83 165.42 70 C 165.07 70.17 164.62 70.26 164.07 70.26 L 155.37 70.26 L 155.37 83.65 C 155.37 84.2 155.28 84.65 155.11 85 C 154.94 85.35 154.68 85.61 154.33 85.78 C 153.98 85.95 153.53 86.04 152.98 86.04 L 142 86.04 C 141.45 86.04 141.01 85.95 140.67 85.78 C 140.33 85.61 140.07 85.35 139.9 85.01 C 139.73 84.67 139.64 84.22 139.64 83.68 L 139.64 70.26 L 99.99 70.26 C 99.43 70.26 98.99 70.18 98.65 70 C 98.31 69.82 98.05 69.57 97.88 69.23 C 97.71 68.89 97.62 68.44 97.62 67.89 L 97.62 58.22 C 97.62 57.66 97.65 57.2 97.7 56.83 C 97.75 56.46 97.86 56.11 98.01 55.77 C 98.16 55.43 98.38 55.02 98.67 54.54 C 100.45 51.7 102.24 48.85 104.03 45.99 C 105.82 43.13 107.61 40.28 109.39 37.44 C 111.18 34.6 112.96 31.76 114.74 28.91 C 116.52 26.06 118.311 23.21 120.101 20.35 C 121.89 17.49 123.68 14.64 125.46 11.79 C 127.24 8.94 129.03 6.09 130.82 3.24 C 131.11 2.76 131.39 2.4 131.67 2.15 C 131.95 1.89 132.27 1.72 132.63 1.61 C 132.99 1.5 133.45 1.45 134.01 1.45 L 152.97 1.45 Z M 202.69 1.45 C 203.24 1.45 203.69 1.54 204.04 1.71 C 204.39 1.88 204.65 2.14 204.82 2.49 L 204.8 2.49 C 204.97 2.84 205.06 3.29 205.06 3.84 L 205.06 83.63 C 205.06 84.19 204.98 84.65 204.81 84.99 C 204.65 85.33 204.39 85.58 204.05 85.75 C 203.71 85.92 203.26 86 202.69 86 L 191.37 86.03 C 190.83 86.03 190.38 85.94 190.04 85.77 C 189.7 85.6 189.44 85.34 189.27 85 C 189.1 84.66 189.01 84.21 189.01 83.67 L 189.01 16.86 L 169.52 30.19 C 169.05 30.51 168.63 30.65 168.25 30.61 C 167.87 30.57 167.56 30.41 167.32 30.11 C 167.08 29.82 166.96 29.39 166.96 28.82 L 166.96 18.9 C 166.96 18.351 167.01 17.9 167.1 17.53 C 167.2 17.16 167.36 16.84 167.6 16.56 C 167.84 16.28 168.19 15.98 168.65 15.67 L 187.32 2.57 C 187.78 2.25 188.17 2.01 188.5 1.85 C 188.83 1.69 189.18 1.59 189.54 1.53 C 189.9 1.48 190.36 1.45 190.93 1.45 L 202.69 1.45 Z M 82.17 55.95 C 83.85 55.95 85.36 56.34 86.71 57.12 C 88.05 57.9 89.13 58.96 89.93 60.31 C 90.73 61.659 91.13 63.21 91.13 64.85 C 91.13 66.49 90.73 68 89.93 69.36 C 89.13 70.72 88.06 71.8 86.71 72.58 C 85.36 73.36 83.81 73.75 82.17 73.75 C 80.53 73.75 79.02 73.36 77.66 72.58 C 76.3 71.8 75.22 70.73 74.44 69.36 C 73.66 67.99 73.271 66.53 73.271 64.85 C 73.271 63.17 73.66 61.649 74.44 60.31 C 75.22 58.97 76.29 57.9 77.66 57.12 C 79.03 56.34 80.49 55.95 82.17 55.95 Z M 135.69 19.93 C 133.76 23.01 131.83 26.09 129.92 29.16 C 128.01 32.24 126.08 35.31 124.15 38.39 C 122.22 41.47 120.29 44.55 118.36 47.64 C 116.43 50.729 114.51 53.81 112.601 56.89 L 139.91 56.89 L 139.91 13.19 C 139.885 13.231 137.183 17.551 135.69 19.93 Z M 32.18 13.2 C 29 13.2 26.2 13.82 23.75 15.05 C 21.3 16.28 19.39 18.03 18.01 20.27 C 16.63 22.51 15.94 25.17 15.94 28.24 L 15.94 29.07 C 15.94 32.15 16.63 34.85 18.01 37.17 C 19.39 39.49 21.3 41.28 23.75 42.56 C 26.2 43.84 28.97 44.48 32.18 44.48 C 35.39 44.48 38.2 43.84 40.63 42.56 C 43.06 41.28 44.96 39.48 46.34 37.17 C 47.72 34.86 48.41 32.16 48.41 29.07 L 48.41 28.24 C 48.41 25.17 47.72 22.52 46.34 20.27 C 44.96 18.02 43.05 16.28 40.63 15.05 C 38.21 13.82 35.36 13.2 32.18 13.2 Z M 82.17 13.53 C 83.85 13.53 85.36 13.92 86.71 14.7 C 88.05 15.48 89.13 16.54 89.93 17.89 C 90.73 19.24 91.13 20.79 91.13 22.43 C 91.13 24.07 90.73 25.58 89.93 26.94 C 89.13 28.3 88.06 29.38 86.71 30.16 C 85.36 30.94 83.81 31.33 82.17 31.33 C 80.53 31.33 79.02 30.94 77.66 30.16 C 76.3 29.38 75.22 28.31 74.44 26.94 C 73.66 25.57 73.271 24.11 73.271 22.43 C 73.271 20.75 73.66 19.23 74.44 17.89 C 75.22 16.55 76.29 15.48 77.66 14.7 C 79.03 13.92 80.49 13.53 82.17 13.53 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <LockScreenWidgetInline
          style={{
            position: "absolute",
            left: 0,
            top: 82,
            width: 402,
          }}
          text={"Apr 1 􀆪 SFO 9:41 AM"}
        />
        <div style={{
          position: "absolute",
          left: 306.2,
          top: 46.8,
          width: 48,
          height: 2.333,
          opacity: 0.35,
          borderRadius: 1.166664958000183,
          backgroundColor: "rgb(255,255,255)",
          backdropFilter: "blur(29.901px)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 402,
          height: 62,
        }}>
          <div style={{
            position: "absolute",
            left: 342.2,
            top: 26.6,
            width: 27.228,
            height: 13,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 25,
              height: 13,
              opacity: 0.35,
              borderRadius: 4.300000190734863,
              boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
            }} />
            <svg width={1.328} height={4} viewBox="0 0 1.328 4" fill="none" style={{
              position: "absolute",
              left: 25.9,
              top: 4.667,
              width: 1.328,
              height: 4,
              opacity: 0.4,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 0 0 L 0 4 C 0.805 3.661 1.328 2.873 1.328 2 C 1.328 1.127 0.805 0.339 0 0"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
              position: "absolute",
              left: 1.8,
              top: 2,
              width: 21,
              height: 9,
              borderRadius: 2.5,
              backgroundColor: "rgb(255,255,255)",
            }} />
          </div>
          <svg width={17.142} height={12.099} viewBox="0 0 17.142 12.099" fill="none" style={{
            position: "absolute",
            left: 317.7,
            top: 27.2,
            width: 17.142,
            height: 12.099,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 6.163 9.034 C 7.553 7.744 9.588 7.744 10.979 9.034 C 11.048 9.103 11.09 9.201 11.092 9.304 C 11.094 9.408 11.057 9.507 10.989 9.58 L 8.813 11.989 C 8.749 12.06 8.662 12.099 8.571 12.099 C 8.481 12.099 8.393 12.06 8.329 11.989 L 6.152 9.58 C 6.085 9.507 6.048 9.408 6.05 9.304 C 6.052 9.201 6.093 9.103 6.163 9.034 Z M 3.135 6.161 C 6.199 3.324 10.943 3.324 14.007 6.161 C 14.076 6.227 14.115 6.319 14.116 6.415 C 14.117 6.51 14.08 6.603 14.013 6.67 L 12.725 7.965 C 12.592 8.097 12.378 8.1 12.242 7.971 C 11.236 7.064 9.927 6.562 8.569 6.562 C 7.213 6.563 5.905 7.065 4.899 7.971 C 4.763 8.1 4.55 8.097 4.417 7.965 L 3.13 6.67 C 3.062 6.603 3.024 6.51 3.025 6.415 C 3.026 6.319 3.066 6.227 3.135 6.161 Z M 0.108 3.22 C 4.839 -1.073 12.303 -1.073 17.034 3.22 C 17.102 3.284 17.141 3.371 17.142 3.461 C 17.142 3.552 17.105 3.64 17.037 3.705 L 15.739 4.945 C 15.606 5.072 15.389 5.073 15.253 4.948 C 13.45 3.325 11.058 2.421 8.571 2.42 C 6.084 2.42 3.691 3.325 1.889 4.948 C 1.753 5.073 1.536 5.072 1.402 4.945 L 0.105 3.705 C 0.037 3.64 -0.001 3.552 0 3.461 C 0.001 3.371 0.04 3.284 0.108 3.22 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={19.200} height={12} viewBox="0 0 19.200 12" fill="none" style={{
            position: "absolute",
            left: 291,
            top: 27.1,
            width: 19.2,
            height: 12,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 2.134 7.4 C 2.723 7.401 3.2 7.915 3.2 8.55 L 3.2 10.85 C 3.2 11.485 2.723 12 2.134 12 L 1.066 12 C 0.477 12 0 11.485 0 10.85 L 0 8.55 C 0 7.915 0.477 7.401 1.066 7.4 L 2.134 7.4 Z M 7.434 5 C 8.023 5 8.5 5.523 8.5 6.167 L 8.5 10.833 C 8.5 11.477 8.023 12 7.434 12 L 6.366 12 C 5.777 12 5.3 11.477 5.3 10.833 L 5.3 6.167 C 5.3 5.523 5.777 5 6.366 5 L 7.434 5 Z M 12.833 2.4 C 13.422 2.4 13.9 2.916 13.9 3.552 L 13.9 10.848 C 13.9 11.484 13.422 12 12.833 12 L 11.767 12 C 11.178 12 10.7 11.484 10.7 10.848 L 10.7 3.552 C 10.7 2.916 11.178 2.4 11.767 2.4 L 12.833 2.4 Z M 18.134 0 C 18.723 0 19.2 0.504 19.2 1.125 L 19.2 10.875 C 19.2 11.496 18.723 12 18.134 12 L 17.066 12 C 16.477 12 16 11.496 16 10.875 L 16 1.125 C 16 0.504 16.477 0 17.066 0 L 18.134 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 1410,
        top: 2000,
        display: "flex",
        flexDirection: "row",
        padding: "18px 0px 20px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 17,
          padding: "18.500px 19px 18.500px 19px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 683,
              height: 101,
            }}>
            <DockMaterial style={{ transform: "scale(6.830, 1.010)", transformOrigin: "0 0" }} />
          </div>
          <AppIconIPhone
            style={{ position: "relative", height: 64, flexShrink: 0 }}
            showAppName={false}
            appName={"FaceTime"}
            icon1={<SystemIcons icon={"messages"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
            type={"system"}
          />
          <AppIconIPhone
            style={{ position: "relative", height: 64, flexShrink: 0 }}
            showAppName={false}
            appName={"FaceTime"}
            icon1={<SystemIcons icon={"safari"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
            type={"system"}
          />
          <AppIconIPhone
            style={{ position: "relative", height: 64, flexShrink: 0 }}
            showAppName={false}
            appName={"FaceTime"}
            icon1={<SystemIcons icon={"music"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
            type={"system"}
          />
          <AppIconIPhone
            style={{ position: "relative", height: 64, flexShrink: 0 }}
            showAppName={false}
            appName={"FaceTime"}
            icon1={<SystemIcons icon={"mail"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
            type={"system"}
          />
          <AppIconIPhone
            style={{ position: "relative", height: 64, flexShrink: 0 }}
            showAppName={false}
            appName={"FaceTime"}
            icon1={<SystemIcons icon={"calendar"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
            type={"system"}
          />
          <AppIconIPhone
            style={{ position: "relative", height: 64, flexShrink: 0 }}
            showAppName={false}
            appName={"FaceTime"}
            icon1={<SystemIcons icon={"photos"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
            type={"system"}
          />
          <AppIconIPhone
            style={{ position: "relative", height: 64, flexShrink: 0 }}
            showAppName={false}
            appName={"FaceTime"}
            icon1={<SystemIcons icon={"notes"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
            type={"system"}
          />
          <div style={{
            position: "relative",
            width: 1,
            height: 62,
            backgroundColor: "var(--fills-vibrant-secondary)",
            flexShrink: 0,
          }} />
          <LaunchPad
            style={{ position: "relative", flexShrink: 0 }}
            mode={"light"}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 100,
        top: 2010,
        width: 1250,
        height: 4290,
        overflow: "hidden",
        borderRadius: 5,
      }}>
        <div style={{
          position: "absolute",
          left: 20,
          top: 3436,
          width: 1210,
          height: 834,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <WallpapersIPad
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 1210,
              height: 834,
            }}
            mode={"light"}
          />
          <StatusBarAndMenuBar
            style={{
              position: "relative",
              height: 32,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            type={"status bar only"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "50px 124px 50px 124px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "76px 94px",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 146,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }} />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"FaceTime"}
              icon1={<SystemIcons icon={"facetime"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"Files"}
              icon1={<SystemIcons icon={"files"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"Preview"}
              icon1={<SystemIcons icon={"preview"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"Maps"}
              icon1={<SystemIcons icon={"maps"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"Home"}
              icon1={<SystemIcons icon={"home"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"Camera"}
              icon1={<SystemIcons icon={"camera"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"App Store"}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"Books"}
              icon1={<SystemIcons icon={"books"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"Games"}
              icon1={<SystemIcons icon={"games"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"TV"}
              icon1={<SystemIcons icon={"tv"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"News"}
              icon1={<SystemIcons icon={"news"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"Settings"}
              icon1={<SystemIcons icon={"settings"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"Clock"}
              icon1={<SystemIcons icon={"clock"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"Weather"}
              icon1={<SystemIcons icon={"weather"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"Stocks"}
              icon1={<SystemIcons icon={"stocks"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"Find My"}
              icon1={<SystemIcons icon={"find my"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"Contacts"}
              icon1={<SystemIcons icon={"contacts"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"Translate"}
              icon1={<SystemIcons icon={"translate"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 146, flexShrink: 0 }}
              appName={"Your App"}
              type={"custom"}
            />
            <div style={{
              position: "relative",
              width: 146,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 146,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 146,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 146,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }} />
          </div>
          <div style={{
            position: "relative",
            borderRadius: 50,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 12px 0px 12px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
              position: "relative",
              width: 7,
              height: 7,
              borderRadius: 50,
              flexShrink: 0,
              color: "var(--grays-white)",
            }}>
              <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
              position: "relative",
              width: 7,
              height: 7,
              opacity: 0.3,
              borderRadius: 50,
              flexShrink: 0,
              color: "var(--grays-white)",
            }}>
              <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <DockIPad style={{ position: "relative", flexShrink: 0 }} />
          <div style={{
              position: "absolute",
              left: 125,
              top: 46,
              width: 138,
              height: 138,
            }}>
            <HomeScreenWidgetIPad
              style={{ transform: "scale(1.015, 1.015)", transformOrigin: "0 0" }}
              size={"sm"}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 2582,
          width: 1210,
          height: 834,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <WallpapersIPad
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 1210,
              height: 834,
            }}
            mode={"light"}
          />
          <StatusBarAndMenuBar
            style={{
              position: "relative",
              height: 32,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            type={"status bar only"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "50px 124px 50px 124px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "76px 12px",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 142,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0px 6px 0px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 142,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0px 6px 0px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }} />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"FaceTime"}
              icon1={<SystemIcons icon={"facetime"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Files"}
              icon1={<SystemIcons icon={"files"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Preview"}
              icon1={<SystemIcons icon={"preview"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Maps"}
              icon1={<SystemIcons icon={"maps"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Home"}
              icon1={<SystemIcons icon={"home"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Camera"}
              icon1={<SystemIcons icon={"camera"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"App Store"}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Books"}
              icon1={<SystemIcons icon={"books"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Games"}
              icon1={<SystemIcons icon={"games"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"TV"}
              icon1={<SystemIcons icon={"tv"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"News"}
              icon1={<SystemIcons icon={"news"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Settings"}
              icon1={<SystemIcons icon={"settings"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Clock"}
              icon1={<SystemIcons icon={"clock"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Weather"}
              icon1={<SystemIcons icon={"weather"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Stocks"}
              icon1={<SystemIcons icon={"stocks"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Find My"}
              icon1={<SystemIcons icon={"find my"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Contacts"}
              icon1={<SystemIcons icon={"contacts"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Translate"}
              icon1={<SystemIcons icon={"translate"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Your App"}
              type={"custom"}
            />
            <div style={{
              position: "relative",
              width: 142,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0px 6px 0px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 142,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0px 6px 0px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 142,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0px 6px 0px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }} />
          </div>
          <div style={{
            position: "relative",
            borderRadius: 50,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 12px 0px 12px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
              position: "relative",
              width: 7,
              height: 7,
              borderRadius: 50,
              flexShrink: 0,
              color: "var(--grays-white)",
            }}>
              <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
              position: "relative",
              width: 7,
              height: 7,
              opacity: 0.3,
              borderRadius: 50,
              flexShrink: 0,
              color: "var(--grays-white)",
            }}>
              <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <DockIPad style={{ position: "relative", flexShrink: 0 }} />
          <HomeScreenWidgetIPad
            style={{
              position: "absolute",
              left: 125,
              top: 46,
              width: 300,
              height: 136,
            }}
            size={"md"}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 1728,
          width: 1210,
          height: 834,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <WallpapersIPad
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 1210,
              height: 834,
            }}
            mode={"light"}
          />
          <StatusBarAndMenuBar
            style={{
              position: "relative",
              height: 32,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            type={"status bar only"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "50px 124px 50px 124px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "76px 12px",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 142,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0px 6px 0px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 142,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0px 6px 0px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }} />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"FaceTime"}
              icon1={<SystemIcons icon={"facetime"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Files"}
              icon1={<SystemIcons icon={"files"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Preview"}
              icon1={<SystemIcons icon={"preview"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Maps"}
              icon1={<SystemIcons icon={"maps"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <div style={{
              position: "relative",
              width: 142,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0px 6px 0px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 142,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0px 6px 0px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }} />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Home"}
              icon1={<SystemIcons icon={"home"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Camera"}
              icon1={<SystemIcons icon={"camera"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"App Store"}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Books"}
              icon1={<SystemIcons icon={"books"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Games"}
              icon1={<SystemIcons icon={"games"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"TV"}
              icon1={<SystemIcons icon={"tv"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"News"}
              icon1={<SystemIcons icon={"news"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Settings"}
              icon1={<SystemIcons icon={"settings"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Clock"}
              icon1={<SystemIcons icon={"clock"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Weather"}
              icon1={<SystemIcons icon={"weather"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Stocks"}
              icon1={<SystemIcons icon={"stocks"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Find My"}
              icon1={<SystemIcons icon={"find my"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Contacts"}
              icon1={<SystemIcons icon={"contacts"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Translate"}
              icon1={<SystemIcons icon={"translate"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Your App"}
              type={"custom"}
            />
            <div style={{
              position: "relative",
              width: 142,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0px 6px 0px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }} />
          </div>
          <div style={{
            position: "relative",
            borderRadius: 50,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 12px 0px 12px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
              position: "relative",
              width: 7,
              height: 7,
              borderRadius: 50,
              flexShrink: 0,
              color: "var(--grays-white)",
            }}>
              <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
              position: "relative",
              width: 7,
              height: 7,
              opacity: 0.3,
              borderRadius: 50,
              flexShrink: 0,
              color: "var(--grays-white)",
            }}>
              <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <DockIPad style={{ position: "relative", flexShrink: 0 }} />
          <HomeScreenWidgetIPad
            style={{
              position: "absolute",
              left: 125,
              top: 46,
              width: 300,
              height: 300,
            }}
            size={"lg"}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 874,
          width: 1210,
          height: 834,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <WallpapersIPad
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 1210,
              height: 834,
            }}
            mode={"light"}
          />
          <StatusBarAndMenuBar
            style={{
              position: "relative",
              height: 32,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            type={"status bar only"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "50px 124px 50px 124px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "76px 12px",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 142,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0px 6px 0px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 142,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0px 6px 0px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 142,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0px 6px 0px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 142,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0px 6px 0px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }} />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"FaceTime"}
              icon1={<SystemIcons icon={"facetime"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Files"}
              icon1={<SystemIcons icon={"files"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <div style={{
              position: "relative",
              width: 142,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0px 6px 0px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 142,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0px 6px 0px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 142,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0px 6px 0px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 142,
              height: 79,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0px 6px 0px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }} />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Preview"}
              icon1={<SystemIcons icon={"preview"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Maps"}
              icon1={<SystemIcons icon={"maps"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Home"}
              icon1={<SystemIcons icon={"home"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Camera"}
              icon1={<SystemIcons icon={"camera"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"App Store"}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Books"}
              icon1={<SystemIcons icon={"books"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Games"}
              icon1={<SystemIcons icon={"games"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"TV"}
              icon1={<SystemIcons icon={"tv"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"News"}
              icon1={<SystemIcons icon={"news"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Settings"}
              icon1={<SystemIcons icon={"settings"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Clock"}
              icon1={<SystemIcons icon={"clock"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Weather"}
              icon1={<SystemIcons icon={"weather"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Stocks"}
              icon1={<SystemIcons icon={"stocks"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Find My"}
              icon1={<SystemIcons icon={"find my"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
          </div>
          <div style={{
            position: "relative",
            borderRadius: 50,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 12px 0px 12px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
              position: "relative",
              width: 7,
              height: 7,
              borderRadius: 50,
              flexShrink: 0,
              color: "var(--grays-white)",
            }}>
              <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
              position: "relative",
              width: 7,
              height: 7,
              opacity: 0.3,
              borderRadius: 50,
              flexShrink: 0,
              color: "var(--grays-white)",
            }}>
              <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <DockIPad style={{ position: "relative", flexShrink: 0 }} />
          <HomeScreenWidgetIPad
            style={{
              position: "absolute",
              left: 125,
              top: 46,
              width: 628,
              height: 300,
            }}
            size={"extra large"}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 1210,
          height: 834,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <WallpapersIPad
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 1210,
              height: 834,
            }}
            mode={"light"}
          />
          <StatusBarAndMenuBar
            style={{
              position: "relative",
              height: 32,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            type={"status bar only"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "52px 124px 52px 124px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "38px 12px",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"FaceTime"}
              icon1={<SystemIcons icon={"facetime"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Files"}
              icon1={<SystemIcons icon={"files"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Preview"}
              icon1={<SystemIcons icon={"preview"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Maps"}
              icon1={<SystemIcons icon={"maps"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Home"}
              icon1={<SystemIcons icon={"home"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Camera"}
              icon1={<SystemIcons icon={"camera"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"App Store"}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Books"}
              icon1={<SystemIcons icon={"books"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Games"}
              icon1={<SystemIcons icon={"games"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"TV"}
              icon1={<SystemIcons icon={"tv"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"News"}
              icon1={<SystemIcons icon={"news"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Settings"}
              icon1={<SystemIcons icon={"settings"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Clock"}
              icon1={<SystemIcons icon={"clock"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Weather"}
              icon1={<SystemIcons icon={"weather"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Stocks"}
              icon1={<SystemIcons icon={"stocks"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Find My"}
              icon1={<SystemIcons icon={"find my"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Contacts"}
              icon1={<SystemIcons icon={"contacts"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Translate"}
              icon1={<SystemIcons icon={"translate"} mode={"default"} style={{ transform: "scale(1.030, 1.030)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPad
              style={{ position: "relative", width: 142, flexShrink: 0 }}
              appName={"Your App"}
              type={"custom"}
            />
          </div>
          <div style={{
            position: "relative",
            borderRadius: 50,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 12px 0px 12px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
              position: "relative",
              width: 7,
              height: 7,
              borderRadius: 50,
              flexShrink: 0,
              color: "var(--grays-white)",
            }}>
              <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
              position: "relative",
              width: 7,
              height: 7,
              opacity: 0.3,
              borderRadius: 50,
              flexShrink: 0,
              color: "var(--grays-white)",
            }}>
              <path d={"M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "18px 0px 20px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 17,
              padding: "18.500px 19px 18.500px 19px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 683,
                  height: 101,
                }}>
                <DockMaterial style={{ transform: "scale(6.830, 1.010)", transformOrigin: "0 0" }} />
              </div>
              <AppIconIPhone
                style={{ position: "relative", height: 64, flexShrink: 0 }}
                showAppName={false}
                appName={"FaceTime"}
                icon1={<SystemIcons icon={"messages"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
                type={"system"}
              />
              <AppIconIPhone
                style={{ position: "relative", height: 64, flexShrink: 0 }}
                showAppName={false}
                appName={"FaceTime"}
                icon1={<SystemIcons icon={"safari"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
                type={"system"}
              />
              <AppIconIPhone
                style={{ position: "relative", height: 64, flexShrink: 0 }}
                showAppName={false}
                appName={"FaceTime"}
                icon1={<SystemIcons icon={"music"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
                type={"system"}
              />
              <AppIconIPhone
                style={{ position: "relative", height: 64, flexShrink: 0 }}
                showAppName={false}
                appName={"FaceTime"}
                icon1={<SystemIcons icon={"mail"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
                type={"system"}
              />
              <AppIconIPhone
                style={{ position: "relative", height: 64, flexShrink: 0 }}
                showAppName={false}
                appName={"FaceTime"}
                icon1={<SystemIcons icon={"calendar"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
                type={"system"}
              />
              <AppIconIPhone
                style={{ position: "relative", height: 64, flexShrink: 0 }}
                showAppName={false}
                appName={"FaceTime"}
                icon1={<SystemIcons icon={"photos"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
                type={"system"}
              />
              <AppIconIPhone
                style={{ position: "relative", height: 64, flexShrink: 0 }}
                showAppName={false}
                appName={"FaceTime"}
                icon1={<SystemIcons icon={"notes"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
                type={"system"}
              />
              <div style={{
                position: "relative",
                width: 1,
                height: 62,
                borderRadius: 100,
                backgroundColor: "var(--fills-vibrant-secondary)",
                flexShrink: 0,
              }} />
              <LaunchPad
                style={{ position: "relative", flexShrink: 0 }}
                mode={"light"}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 1410,
        top: 2200,
        width: 200,
        height: 100,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "var(--subcomponent-fill)",
      }}>
        <div style={{
          position: "absolute",
          left: 110,
          top: 20.5,
          borderRadius: 12,
          display: "flex",
          flexDirection: "column",
          gap: 3.5,
          padding: "7.500px 7.500px 7.500px 7px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "absolute",
            left: -8,
            top: 0,
            width: 68,
            height: 61,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 8,
              width: 60,
              height: 45,
              borderRadius: 12,
              background: "linear-gradient(rgba(255,255,255,0.08),rgba(255,255,255,0.08)), linear-gradient(rgb(15,15,15),rgb(15,15,15))",
              backdropFilter: "blur(80px)",
            }} />
            <div style={{
              position: "absolute",
              left: 4,
              top: 4,
              width: 52,
              height: 53,
              opacity: 0.75,
              borderRadius: 12,
              background: "linear-gradient(rgba(255,255,255,0.08),rgba(255,255,255,0.08)), linear-gradient(rgb(35,35,35),rgb(35,35,35))",
              backdropFilter: "blur(80px)",
            }} />
            <div style={{
              position: "absolute",
              left: 8,
              top: 0,
              width: 60,
              height: 61,
              borderRadius: 12,
              background: "linear-gradient(rgba(255,255,255,0.45),rgba(255,255,255,0.45)), linear-gradient(rgb(37,37,37),rgb(37,37,37))",
              backdropFilter: "blur(80px)",
            }} />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 3.5,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 21,
                height: 21,
                flexShrink: 0,
              }}>
              <SystemIcons
                style={{ transform: "scale(0.318, 0.318)", transformOrigin: "0 0" }}
                icon={"calendar"}
                mode={"default"}
              />
            </div>
            <div style={{
                position: "relative",
                width: 21,
                height: 21,
                flexShrink: 0,
              }}>
              <SystemIcons
                style={{ transform: "scale(0.318, 0.318)", transformOrigin: "0 0" }}
                icon={"shortcuts"}
                mode={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 3.5,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 21,
                height: 21,
                flexShrink: 0,
              }}>
              <SystemIcons
                style={{ transform: "scale(0.318, 0.318)", transformOrigin: "0 0" }}
                icon={"mail"}
                mode={"default"}
              />
            </div>
            <div style={{
                position: "relative",
                width: 21,
                height: 21,
                flexShrink: 0,
              }}>
              <SystemIcons
                style={{ transform: "scale(0.318, 0.318)", transformOrigin: "0 0" }}
                icon={"news"}
                mode={"default"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          borderRadius: 12,
          display: "flex",
          flexDirection: "column",
          gap: 3.5,
          padding: "7.500px 7.500px 7.500px 7px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "absolute",
            left: -8,
            top: 0,
            width: 68,
            height: 61,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 8,
              width: 60,
              height: 45,
              borderRadius: 12,
              background: "linear-gradient(rgba(255,255,255,0.45),rgba(255,255,255,0.45)), linear-gradient(rgb(15,15,15),rgb(15,15,15))",
              backdropFilter: "blur(80px)",
            }} />
            <div style={{
              position: "absolute",
              left: 4,
              top: 4,
              width: 52,
              height: 53,
              opacity: 0.75,
              borderRadius: 12,
              background: "linear-gradient(rgba(255,255,255,0.45),rgba(255,255,255,0.45)), linear-gradient(rgb(35,35,35),rgb(35,35,35))",
              backdropFilter: "blur(80px)",
            }} />
            <div style={{
              position: "absolute",
              left: 8,
              top: 0,
              width: 60,
              height: 61,
              borderRadius: 12,
              background: "linear-gradient(rgba(255,255,255,0.45),rgba(255,255,255,0.45)), linear-gradient(rgb(37,37,37),rgb(37,37,37))",
              backdropFilter: "blur(80px)",
            }} />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 3.5,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 21,
                height: 21,
                flexShrink: 0,
              }}>
              <SystemIcons
                style={{ transform: "scale(0.318, 0.318)", transformOrigin: "0 0" }}
                icon={"calendar"}
                mode={"default"}
              />
            </div>
            <div style={{
                position: "relative",
                width: 21,
                height: 21,
                flexShrink: 0,
              }}>
              <SystemIcons
                style={{ transform: "scale(0.318, 0.318)", transformOrigin: "0 0" }}
                icon={"shortcuts"}
                mode={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 3.5,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 21,
                height: 21,
                flexShrink: 0,
              }}>
              <SystemIcons
                style={{ transform: "scale(0.318, 0.318)", transformOrigin: "0 0" }}
                icon={"mail"}
                mode={"default"}
              />
            </div>
            <div style={{
                position: "relative",
                width: 21,
                height: 21,
                flexShrink: 0,
              }}>
              <SystemIcons
                style={{ transform: "scale(0.318, 0.318)", transformOrigin: "0 0" }}
                icon={"news"}
                mode={"default"}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 1410,
        top: 2320,
        width: 21,
        height: 21,
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 21,
            height: 21,
          }}>
          <SystemIcons
            style={{ transform: "scale(0.318, 0.318)", transformOrigin: "0 0" }}
            icon={"shortcuts"}
            mode={"default"}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 600,
        top: 1120,
        width: 100,
        height: 100,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 100,
          height: 100,
          opacity: 0.67,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 100,
            height: 100,
            clipPath: "inset(-76px 0px 0px -76px)",
          }}>
            <svg width={100} height={100} viewBox="0 0 100 100" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 2,
              width: 100,
              height: 100,
              borderRadius: 38,
              backdropFilter: "blur(60px)",
              color: "rgba(0,0,0,0.4)",
            }}>
              <path d={"M 0 50 C 0 38.842 0 33.263 1.163 28.672 C 4.588 15.148 15.148 4.588 28.672 1.163 C 33.263 0 38.842 0 50 0 L 50 0 C 61.158 0 66.737 0 71.328 1.163 C 84.852 4.588 95.412 15.148 98.837 28.672 C 100 33.263 100 38.842 100 50 L 100 50 C 100 61.158 100 66.737 98.837 71.328 C 95.412 84.852 84.852 95.412 71.328 98.837 C 66.737 100 61.158 100 50 100 L 50 100 C 38.842 100 33.263 100 28.672 98.837 C 15.148 95.412 4.588 84.852 1.163 71.328 C 0 66.737 0 61.158 0 50 L 0 50 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <svg width={100} height={100} viewBox="0 0 100 100" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 100,
          height: 100,
          borderRadius: 38,
          color: "rgba(0,0,0,0.2)",
        }}>
          <path d={"M 0 50 C 0 38.842 0 33.263 1.163 28.672 C 4.588 15.148 15.148 4.588 28.672 1.163 C 33.263 0 38.842 0 50 0 L 50 0 C 61.158 0 66.737 0 71.328 1.163 C 84.852 4.588 95.412 15.148 98.837 28.672 C 100 33.263 100 38.842 100 50 L 100 50 C 100 61.158 100 66.737 98.837 71.328 C 95.412 84.852 84.852 95.412 71.328 98.837 C 66.737 100 61.158 100 50 100 L 50 100 C 38.842 100 33.263 100 28.672 98.837 C 15.148 95.412 4.588 84.852 1.163 71.328 C 0 66.737 0 61.158 0 50 L 0 50 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "absolute",
        left: 100,
        top: 1100,
        width: 402,
        display: "flex",
        flexDirection: "row",
        padding: "20px 17px 17px 17px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "20px 19px 19px 19px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 368,
              height: 103,
            }}>
            <DockMaterial style={{ transform: "scale(3.680, 1.030)", transformOrigin: "0 0" }} />
          </div>
          <AppIconIPhone
            style={{ position: "relative", height: 64, flexShrink: 0 }}
            showAppName={false}
            appName={"FaceTime"}
            icon1={<SystemIcons icon={"phone"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
            type={"system"}
          />
          <AppIconIPhone
            style={{ position: "relative", height: 64, flexShrink: 0 }}
            showAppName={false}
            appName={"FaceTime"}
            icon1={<SystemIcons icon={"safari"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
            type={"system"}
          />
          <AppIconIPhone
            style={{ position: "relative", height: 64, flexShrink: 0 }}
            showAppName={false}
            appName={"FaceTime"}
            icon1={<SystemIcons icon={"messages"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
            type={"system"}
          />
          <AppIconIPhone
            style={{ position: "relative", height: 64, flexShrink: 0 }}
            showAppName={false}
            appName={"FaceTime"}
            icon1={<SystemIcons icon={"music"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
            type={"system"}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 100,
        top: 100,
        width: 1700,
        height: 930,
        overflow: "hidden",
        borderRadius: 5,
      }}>
        <div style={{
          position: "absolute",
          left: 1280,
          top: 20,
          width: 402,
          height: 874,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <WallpapersIPhone
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 402,
              height: 874,
            }}
            mode={"light"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 154,
            padding: "21px 24px 19px 24px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              height: 22,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "1.500px 0px 1.500px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 590,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "var(--grays-white)",
                flexShrink: 0,
              }}>9:41</span>
            </div>
            <div style={{
              position: "relative",
              height: 22,
              display: "flex",
              flexDirection: "row",
              gap: 7,
              padding: "1px 1px 1px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <svg width={19.200} height={12.226} viewBox="0 0 19.200 12.226" fill="none" style={{
                position: "relative",
                width: 19.2,
                height: 12.226,
                flexShrink: 0,
                color: "var(--grays-white)",
              }}>
                <path d={"M 19.2 1.146 C 19.2 0.513 18.722 0 18.133 0 L 17.067 0 C 16.478 0 16 0.513 16 1.146 L 16 11.08 C 16 11.713 16.478 12.226 17.067 12.226 L 18.133 12.226 C 18.722 12.226 19.2 11.713 19.2 11.08 L 19.2 1.146 Z M 11.766 2.445 L 12.833 2.445 C 13.422 2.445 13.899 2.971 13.899 3.619 L 13.899 11.053 C 13.899 11.701 13.422 12.226 12.833 12.226 L 11.766 12.226 C 11.177 12.226 10.699 11.701 10.699 11.053 L 10.699 3.619 C 10.699 2.971 11.177 2.445 11.766 2.445 Z M 7.434 5.094 L 6.367 5.094 C 5.778 5.094 5.301 5.627 5.301 6.283 L 5.301 11.038 C 5.301 11.694 5.778 12.226 6.367 12.226 L 7.434 12.226 C 8.023 12.226 8.501 11.694 8.501 11.038 L 8.501 6.283 C 8.501 5.627 8.023 5.094 7.434 5.094 Z M 2.133 7.54 L 1.067 7.54 C 0.478 7.54 0 8.064 0 8.711 L 0 11.055 C 0 11.702 0.478 12.226 1.067 12.226 L 2.133 12.226 C 2.722 12.226 3.2 11.702 3.2 11.055 L 3.2 8.711 C 3.2 8.064 2.722 7.54 2.133 7.54 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <svg width={17.142} height={12.328} viewBox="0 0 17.142 12.328" fill="none" style={{
                position: "relative",
                width: 17.142,
                height: 12.328,
                flexShrink: 0,
                color: "var(--grays-white)",
              }}>
                <path d={"M 8.571 2.466 C 11.058 2.466 13.45 3.388 15.253 5.042 C 15.389 5.17 15.606 5.168 15.739 5.038 L 17.037 3.775 C 17.104 3.709 17.142 3.62 17.142 3.527 C 17.141 3.435 17.102 3.346 17.034 3.281 C 12.303 -1.094 4.839 -1.094 0.108 3.281 C 0.04 3.346 0.001 3.435 0 3.527 C -0.001 3.62 0.037 3.709 0.105 3.775 L 1.403 5.038 C 1.536 5.168 1.753 5.17 1.889 5.042 C 3.692 3.388 6.084 2.466 8.571 2.466 Z M 8.568 6.687 C 9.925 6.686 11.234 7.198 12.24 8.122 C 12.376 8.253 12.591 8.251 12.723 8.116 L 14.011 6.797 C 14.078 6.727 14.116 6.634 14.115 6.536 C 14.114 6.438 14.075 6.345 14.005 6.278 C 10.942 3.387 6.197 3.387 3.133 6.278 C 3.064 6.345 3.024 6.438 3.023 6.536 C 3.023 6.634 3.06 6.728 3.128 6.797 L 4.415 8.116 C 4.548 8.251 4.762 8.253 4.898 8.122 C 5.904 7.199 7.212 6.687 8.568 6.687 Z M 11.092 9.48 C 11.094 9.585 11.057 9.687 10.99 9.761 L 8.813 12.216 C 8.749 12.288 8.662 12.328 8.572 12.328 C 8.481 12.328 8.394 12.288 8.33 12.216 L 6.153 9.761 C 6.086 9.687 6.049 9.585 6.051 9.48 C 6.053 9.375 6.094 9.275 6.164 9.204 C 7.554 7.89 9.59 7.89 10.98 9.204 C 11.05 9.275 11.09 9.375 11.092 9.48 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <div style={{
                position: "relative",
                width: 27.328,
                height: 13,
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 25,
                  height: 13,
                  opacity: 0.35,
                  borderRadius: 4.300000190734863,
                  boxShadow: "inset 0 0 0 1px var(--grays-white)",
                }} />
                <svg width={1.328} height={4.075} viewBox="0 0 1.328 4.075" fill="none" style={{
                  position: "absolute",
                  left: 26,
                  top: 4.5,
                  width: 1.328,
                  height: 4.075,
                  opacity: 0.4,
                  color: "var(--grays-white)",
                }}>
                  <path d={"M 0 0 L 0 4.075 C 0.805 3.73 1.328 2.927 1.328 2.038 C 1.328 1.148 0.805 0.345 0 0"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <div style={{
                  position: "absolute",
                  left: 2,
                  top: 2,
                  width: 21,
                  height: 9,
                  borderRadius: 2.5,
                  backgroundColor: "var(--grays-white)",
                }} />
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "28px 26px 28px 26px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "17px 12px",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 72,
              height: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 72,
              height: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }} />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"FaceTime"}
              icon1={<SystemIcons icon={"facetime"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Calendar"}
              icon1={<SystemIcons icon={"calendar"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <div style={{
              position: "relative",
              width: 72,
              height: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 72,
              height: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }} />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Photos"}
              icon1={<SystemIcons icon={"photos"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Camera"}
              icon1={<SystemIcons icon={"camera"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Mail"}
              icon1={<SystemIcons icon={"mail"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Notes"}
              icon1={<SystemIcons icon={"notes"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Reminders"}
              icon1={<SystemIcons icon={"reminders"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Clock"}
              icon1={<SystemIcons icon={"clock"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"News"}
              icon1={<SystemIcons icon={"news"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"TV"}
              icon1={<SystemIcons icon={"tv"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Games"}
              icon1={<SystemIcons icon={"games"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"App Store"}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Maps"}
              icon1={<SystemIcons icon={"maps"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Health"}
              icon1={<SystemIcons icon={"health"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Wallet"}
              icon1={<SystemIcons icon={"wallet"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Settings"}
              icon1={<SystemIcons icon={"settings"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
          </div>
          <div style={{
            position: "relative",
            height: 30,
            overflow: "hidden",
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "7px 12px 7px 12px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 77,
                height: 30,
              }}>
              <DockMaterial style={{ transform: "scale(0.770, 0.300)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 11.5,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--grays-white)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>􀊫</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 11.5,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--grays-white)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Search</span>
          </div>
          <DockIPhone style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }} />
          <HomeScreenWidgetIPhone
            style={{
              position: "absolute",
              left: 26.667,
              top: 90,
              width: 164,
              height: 164,
            }}
            size={"sm"}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 860,
          top: 20,
          width: 402,
          height: 874,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <WallpapersIPhone
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 402,
              height: 874,
            }}
            mode={"light"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 154,
            padding: "21px 24px 19px 24px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              height: 22,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "1.500px 0px 1.500px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 590,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "var(--grays-white)",
                flexShrink: 0,
              }}>9:41</span>
            </div>
            <div style={{
              position: "relative",
              height: 22,
              display: "flex",
              flexDirection: "row",
              gap: 7,
              padding: "1px 1px 1px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <svg width={19.200} height={12.226} viewBox="0 0 19.200 12.226" fill="none" style={{
                position: "relative",
                width: 19.2,
                height: 12.226,
                flexShrink: 0,
                color: "var(--grays-white)",
              }}>
                <path d={"M 19.2 1.146 C 19.2 0.513 18.722 0 18.133 0 L 17.067 0 C 16.478 0 16 0.513 16 1.146 L 16 11.08 C 16 11.713 16.478 12.226 17.067 12.226 L 18.133 12.226 C 18.722 12.226 19.2 11.713 19.2 11.08 L 19.2 1.146 Z M 11.766 2.445 L 12.833 2.445 C 13.422 2.445 13.899 2.971 13.899 3.619 L 13.899 11.053 C 13.899 11.701 13.422 12.226 12.833 12.226 L 11.766 12.226 C 11.177 12.226 10.699 11.701 10.699 11.053 L 10.699 3.619 C 10.699 2.971 11.177 2.445 11.766 2.445 Z M 7.434 5.094 L 6.367 5.094 C 5.778 5.094 5.301 5.627 5.301 6.283 L 5.301 11.038 C 5.301 11.694 5.778 12.226 6.367 12.226 L 7.434 12.226 C 8.023 12.226 8.501 11.694 8.501 11.038 L 8.501 6.283 C 8.501 5.627 8.023 5.094 7.434 5.094 Z M 2.133 7.54 L 1.067 7.54 C 0.478 7.54 0 8.064 0 8.711 L 0 11.055 C 0 11.702 0.478 12.226 1.067 12.226 L 2.133 12.226 C 2.722 12.226 3.2 11.702 3.2 11.055 L 3.2 8.711 C 3.2 8.064 2.722 7.54 2.133 7.54 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <svg width={17.142} height={12.328} viewBox="0 0 17.142 12.328" fill="none" style={{
                position: "relative",
                width: 17.142,
                height: 12.328,
                flexShrink: 0,
                color: "var(--grays-white)",
              }}>
                <path d={"M 8.571 2.466 C 11.058 2.466 13.45 3.388 15.253 5.042 C 15.389 5.17 15.606 5.168 15.739 5.038 L 17.037 3.775 C 17.104 3.709 17.142 3.62 17.142 3.527 C 17.141 3.435 17.102 3.346 17.034 3.281 C 12.303 -1.094 4.839 -1.094 0.108 3.281 C 0.04 3.346 0.001 3.435 0 3.527 C -0.001 3.62 0.037 3.709 0.105 3.775 L 1.403 5.038 C 1.536 5.168 1.753 5.17 1.889 5.042 C 3.692 3.388 6.084 2.466 8.571 2.466 Z M 8.568 6.687 C 9.925 6.686 11.234 7.198 12.24 8.122 C 12.376 8.253 12.591 8.251 12.723 8.116 L 14.011 6.797 C 14.078 6.727 14.116 6.634 14.115 6.536 C 14.114 6.438 14.075 6.345 14.005 6.278 C 10.942 3.387 6.197 3.387 3.133 6.278 C 3.064 6.345 3.024 6.438 3.023 6.536 C 3.023 6.634 3.06 6.728 3.128 6.797 L 4.415 8.116 C 4.548 8.251 4.762 8.253 4.898 8.122 C 5.904 7.199 7.212 6.687 8.568 6.687 Z M 11.092 9.48 C 11.094 9.585 11.057 9.687 10.99 9.761 L 8.813 12.216 C 8.749 12.288 8.662 12.328 8.572 12.328 C 8.481 12.328 8.394 12.288 8.33 12.216 L 6.153 9.761 C 6.086 9.687 6.049 9.585 6.051 9.48 C 6.053 9.375 6.094 9.275 6.164 9.204 C 7.554 7.89 9.59 7.89 10.98 9.204 C 11.05 9.275 11.09 9.375 11.092 9.48 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <div style={{
                position: "relative",
                width: 27.328,
                height: 13,
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 25,
                  height: 13,
                  opacity: 0.35,
                  borderRadius: 4.300000190734863,
                  boxShadow: "inset 0 0 0 1px var(--grays-white)",
                }} />
                <svg width={1.328} height={4.075} viewBox="0 0 1.328 4.075" fill="none" style={{
                  position: "absolute",
                  left: 26,
                  top: 4.5,
                  width: 1.328,
                  height: 4.075,
                  opacity: 0.4,
                  color: "var(--grays-white)",
                }}>
                  <path d={"M 0 0 L 0 4.075 C 0.805 3.73 1.328 2.927 1.328 2.038 C 1.328 1.148 0.805 0.345 0 0"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <div style={{
                  position: "absolute",
                  left: 2,
                  top: 2,
                  width: 21,
                  height: 9,
                  borderRadius: 2.5,
                  backgroundColor: "var(--grays-white)",
                }} />
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "26.333px 26.666px 36px 26.666px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <HomeScreenWidgetIPhone
              style={{
                position: "relative",
                height: 164,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              size={"md"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "0.333px 26px 0.333px 26px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "17px 12px",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"FaceTime"}
              icon1={<SystemIcons icon={"facetime"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Calendar"}
              icon1={<SystemIcons icon={"calendar"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Photos"}
              icon1={<SystemIcons icon={"photos"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Camera"}
              icon1={<SystemIcons icon={"camera"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Mail"}
              icon1={<SystemIcons icon={"mail"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Notes"}
              icon1={<SystemIcons icon={"notes"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Reminders"}
              icon1={<SystemIcons icon={"reminders"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Clock"}
              icon1={<SystemIcons icon={"clock"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"News"}
              icon1={<SystemIcons icon={"news"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"TV"}
              icon1={<SystemIcons icon={"tv"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Games"}
              icon1={<SystemIcons icon={"games"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"App Store"}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Maps"}
              icon1={<SystemIcons icon={"maps"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Health"}
              icon1={<SystemIcons icon={"health"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Wallet"}
              icon1={<SystemIcons icon={"wallet"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Settings"}
              icon1={<SystemIcons icon={"settings"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
          </div>
          <div style={{
            position: "relative",
            height: 30,
            overflow: "hidden",
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "7px 12px 7px 12px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 77,
                height: 30,
              }}>
              <DockMaterial style={{ transform: "scale(0.770, 0.300)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 11.5,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--grays-white)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>􀊫</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 11.5,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--grays-white)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Search</span>
          </div>
          <DockIPhone style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }} />
        </div>
        <div style={{
          position: "absolute",
          left: 440,
          top: 20,
          width: 402,
          height: 874,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <WallpapersIPhone
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 402,
              height: 874,
            }}
            mode={"light"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 154,
            padding: "21px 24px 19px 24px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              height: 22,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "1.500px 0px 1.500px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 590,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "var(--grays-white)",
                flexShrink: 0,
              }}>9:41</span>
            </div>
            <div style={{
              position: "relative",
              height: 22,
              display: "flex",
              flexDirection: "row",
              gap: 7,
              padding: "1px 1px 1px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <svg width={19.200} height={12.226} viewBox="0 0 19.200 12.226" fill="none" style={{
                position: "relative",
                width: 19.2,
                height: 12.226,
                flexShrink: 0,
                color: "var(--grays-white)",
              }}>
                <path d={"M 19.2 1.146 C 19.2 0.513 18.722 0 18.133 0 L 17.067 0 C 16.478 0 16 0.513 16 1.146 L 16 11.08 C 16 11.713 16.478 12.226 17.067 12.226 L 18.133 12.226 C 18.722 12.226 19.2 11.713 19.2 11.08 L 19.2 1.146 Z M 11.766 2.445 L 12.833 2.445 C 13.422 2.445 13.899 2.971 13.899 3.619 L 13.899 11.053 C 13.899 11.701 13.422 12.226 12.833 12.226 L 11.766 12.226 C 11.177 12.226 10.699 11.701 10.699 11.053 L 10.699 3.619 C 10.699 2.971 11.177 2.445 11.766 2.445 Z M 7.434 5.094 L 6.367 5.094 C 5.778 5.094 5.301 5.627 5.301 6.283 L 5.301 11.038 C 5.301 11.694 5.778 12.226 6.367 12.226 L 7.434 12.226 C 8.023 12.226 8.501 11.694 8.501 11.038 L 8.501 6.283 C 8.501 5.627 8.023 5.094 7.434 5.094 Z M 2.133 7.54 L 1.067 7.54 C 0.478 7.54 0 8.064 0 8.711 L 0 11.055 C 0 11.702 0.478 12.226 1.067 12.226 L 2.133 12.226 C 2.722 12.226 3.2 11.702 3.2 11.055 L 3.2 8.711 C 3.2 8.064 2.722 7.54 2.133 7.54 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <svg width={17.142} height={12.328} viewBox="0 0 17.142 12.328" fill="none" style={{
                position: "relative",
                width: 17.142,
                height: 12.328,
                flexShrink: 0,
                color: "var(--grays-white)",
              }}>
                <path d={"M 8.571 2.466 C 11.058 2.466 13.45 3.388 15.253 5.042 C 15.389 5.17 15.606 5.168 15.739 5.038 L 17.037 3.775 C 17.104 3.709 17.142 3.62 17.142 3.527 C 17.141 3.435 17.102 3.346 17.034 3.281 C 12.303 -1.094 4.839 -1.094 0.108 3.281 C 0.04 3.346 0.001 3.435 0 3.527 C -0.001 3.62 0.037 3.709 0.105 3.775 L 1.403 5.038 C 1.536 5.168 1.753 5.17 1.889 5.042 C 3.692 3.388 6.084 2.466 8.571 2.466 Z M 8.568 6.687 C 9.925 6.686 11.234 7.198 12.24 8.122 C 12.376 8.253 12.591 8.251 12.723 8.116 L 14.011 6.797 C 14.078 6.727 14.116 6.634 14.115 6.536 C 14.114 6.438 14.075 6.345 14.005 6.278 C 10.942 3.387 6.197 3.387 3.133 6.278 C 3.064 6.345 3.024 6.438 3.023 6.536 C 3.023 6.634 3.06 6.728 3.128 6.797 L 4.415 8.116 C 4.548 8.251 4.762 8.253 4.898 8.122 C 5.904 7.199 7.212 6.687 8.568 6.687 Z M 11.092 9.48 C 11.094 9.585 11.057 9.687 10.99 9.761 L 8.813 12.216 C 8.749 12.288 8.662 12.328 8.572 12.328 C 8.481 12.328 8.394 12.288 8.33 12.216 L 6.153 9.761 C 6.086 9.687 6.049 9.585 6.051 9.48 C 6.053 9.375 6.094 9.275 6.164 9.204 C 7.554 7.89 9.59 7.89 10.98 9.204 C 11.05 9.275 11.09 9.375 11.092 9.48 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <div style={{
                position: "relative",
                width: 27.328,
                height: 13,
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 25,
                  height: 13,
                  opacity: 0.35,
                  borderRadius: 4.300000190734863,
                  boxShadow: "inset 0 0 0 1px var(--grays-white)",
                }} />
                <svg width={1.328} height={4.075} viewBox="0 0 1.328 4.075" fill="none" style={{
                  position: "absolute",
                  left: 26,
                  top: 4.5,
                  width: 1.328,
                  height: 4.075,
                  opacity: 0.4,
                  color: "var(--grays-white)",
                }}>
                  <path d={"M 0 0 L 0 4.075 C 0.805 3.73 1.328 2.927 1.328 2.038 C 1.328 1.148 0.805 0.345 0 0"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <div style={{
                  position: "absolute",
                  left: 2,
                  top: 2,
                  width: 21,
                  height: 9,
                  borderRadius: 2.5,
                  backgroundColor: "var(--grays-white)",
                }} />
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "27.670px 26.666px 36px 26.666px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <HomeScreenWidgetIPhone
              style={{
                position: "relative",
                height: 365,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              size={"lg"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "0px 26px 0px 26px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "18px 12px",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"FaceTime"}
              icon1={<SystemIcons icon={"facetime"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Calendar"}
              icon1={<SystemIcons icon={"calendar"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Photos"}
              icon1={<SystemIcons icon={"photos"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Camera"}
              icon1={<SystemIcons icon={"camera"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Mail"}
              icon1={<SystemIcons icon={"mail"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Notes"}
              icon1={<SystemIcons icon={"notes"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Reminders"}
              icon1={<SystemIcons icon={"reminders"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Clock"}
              icon1={<SystemIcons icon={"clock"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
          </div>
          <div style={{
            position: "relative",
            height: 30,
            overflow: "hidden",
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "7px 12px 7px 12px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 77,
                height: 30,
              }}>
              <DockMaterial style={{ transform: "scale(0.770, 0.300)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 11.5,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--grays-white)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>􀊫</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 11.5,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--grays-white)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Search</span>
          </div>
          <DockIPhone style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }} />
        </div>
        <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 402,
          height: 874,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <WallpapersIPhone
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 402,
              height: 874,
            }}
            mode={"light"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 154,
            padding: "21px 24px 19px 24px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              height: 22,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "1.500px 0px 1.500px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 590,
                fontSize: 17,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "var(--grays-white)",
                flexShrink: 0,
              }}>9:41</span>
            </div>
            <div style={{
              position: "relative",
              height: 22,
              display: "flex",
              flexDirection: "row",
              gap: 7,
              padding: "1px 1px 1px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <svg width={19.200} height={12.226} viewBox="0 0 19.200 12.226" fill="none" style={{
                position: "relative",
                width: 19.2,
                height: 12.226,
                flexShrink: 0,
                color: "var(--grays-white)",
              }}>
                <path d={"M 19.2 1.146 C 19.2 0.513 18.722 0 18.133 0 L 17.067 0 C 16.478 0 16 0.513 16 1.146 L 16 11.08 C 16 11.713 16.478 12.226 17.067 12.226 L 18.133 12.226 C 18.722 12.226 19.2 11.713 19.2 11.08 L 19.2 1.146 Z M 11.766 2.445 L 12.833 2.445 C 13.422 2.445 13.899 2.971 13.899 3.619 L 13.899 11.053 C 13.899 11.701 13.422 12.226 12.833 12.226 L 11.766 12.226 C 11.177 12.226 10.699 11.701 10.699 11.053 L 10.699 3.619 C 10.699 2.971 11.177 2.445 11.766 2.445 Z M 7.434 5.094 L 6.367 5.094 C 5.778 5.094 5.301 5.627 5.301 6.283 L 5.301 11.038 C 5.301 11.694 5.778 12.226 6.367 12.226 L 7.434 12.226 C 8.023 12.226 8.501 11.694 8.501 11.038 L 8.501 6.283 C 8.501 5.627 8.023 5.094 7.434 5.094 Z M 2.133 7.54 L 1.067 7.54 C 0.478 7.54 0 8.064 0 8.711 L 0 11.055 C 0 11.702 0.478 12.226 1.067 12.226 L 2.133 12.226 C 2.722 12.226 3.2 11.702 3.2 11.055 L 3.2 8.711 C 3.2 8.064 2.722 7.54 2.133 7.54 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <svg width={17.142} height={12.328} viewBox="0 0 17.142 12.328" fill="none" style={{
                position: "relative",
                width: 17.142,
                height: 12.328,
                flexShrink: 0,
                color: "var(--grays-white)",
              }}>
                <path d={"M 8.571 2.466 C 11.058 2.466 13.45 3.388 15.253 5.042 C 15.389 5.17 15.606 5.168 15.739 5.038 L 17.037 3.775 C 17.104 3.709 17.142 3.62 17.142 3.527 C 17.141 3.435 17.102 3.346 17.034 3.281 C 12.303 -1.094 4.839 -1.094 0.108 3.281 C 0.04 3.346 0.001 3.435 0 3.527 C -0.001 3.62 0.037 3.709 0.105 3.775 L 1.403 5.038 C 1.536 5.168 1.753 5.17 1.889 5.042 C 3.692 3.388 6.084 2.466 8.571 2.466 Z M 8.568 6.687 C 9.925 6.686 11.234 7.198 12.24 8.122 C 12.376 8.253 12.591 8.251 12.723 8.116 L 14.011 6.797 C 14.078 6.727 14.116 6.634 14.115 6.536 C 14.114 6.438 14.075 6.345 14.005 6.278 C 10.942 3.387 6.197 3.387 3.133 6.278 C 3.064 6.345 3.024 6.438 3.023 6.536 C 3.023 6.634 3.06 6.728 3.128 6.797 L 4.415 8.116 C 4.548 8.251 4.762 8.253 4.898 8.122 C 5.904 7.199 7.212 6.687 8.568 6.687 Z M 11.092 9.48 C 11.094 9.585 11.057 9.687 10.99 9.761 L 8.813 12.216 C 8.749 12.288 8.662 12.328 8.572 12.328 C 8.481 12.328 8.394 12.288 8.33 12.216 L 6.153 9.761 C 6.086 9.687 6.049 9.585 6.051 9.48 C 6.053 9.375 6.094 9.275 6.164 9.204 C 7.554 7.89 9.59 7.89 10.98 9.204 C 11.05 9.275 11.09 9.375 11.092 9.48 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <div style={{
                position: "relative",
                width: 27.328,
                height: 13,
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 25,
                  height: 13,
                  opacity: 0.35,
                  borderRadius: 4.300000190734863,
                  boxShadow: "inset 0 0 0 1px var(--grays-white)",
                }} />
                <svg width={1.328} height={4.075} viewBox="0 0 1.328 4.075" fill="none" style={{
                  position: "absolute",
                  left: 26,
                  top: 4.5,
                  width: 1.328,
                  height: 4.075,
                  opacity: 0.4,
                  color: "var(--grays-white)",
                }}>
                  <path d={"M 0 0 L 0 4.075 C 0.805 3.73 1.328 2.927 1.328 2.038 C 1.328 1.148 0.805 0.345 0 0"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <div style={{
                  position: "absolute",
                  left: 2,
                  top: 2,
                  width: 21,
                  height: 9,
                  borderRadius: 2.5,
                  backgroundColor: "var(--grays-white)",
                }} />
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "28.666px 26px 28.666px 26px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "17.333px 12px",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"FaceTime"}
              icon1={<SystemIcons icon={"facetime"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Calendar"}
              icon1={<SystemIcons icon={"calendar"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Photos"}
              icon1={<SystemIcons icon={"photos"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Camera"}
              icon1={<SystemIcons icon={"camera"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Mail"}
              icon1={<SystemIcons icon={"mail"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Notes"}
              icon1={<SystemIcons icon={"notes"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Reminders"}
              icon1={<SystemIcons icon={"reminders"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Clock"}
              icon1={<SystemIcons icon={"clock"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"News"}
              icon1={<SystemIcons icon={"news"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"TV"}
              icon1={<SystemIcons icon={"tv"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Games"}
              icon1={<SystemIcons icon={"games"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"App Store"}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Maps"}
              icon1={<SystemIcons icon={"maps"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Health"}
              icon1={<SystemIcons icon={"health"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Wallet"}
              icon1={<SystemIcons icon={"wallet"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"Settings"}
              icon1={<SystemIcons icon={"settings"} mode={"default"} style={{ transform: "scale(0.970, 0.970)", transformOrigin: "0 0" }} />}
              type={"system"}
            />
            <AppIconIPhone
              style={{ position: "relative", width: 72, flexShrink: 0 }}
              appName={"My App"}
              showBadge={true}
              type={"custom"}
            />
            <div style={{
              position: "relative",
              width: 72,
              height: 79,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 72,
              height: 79,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 72,
              height: 79,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }} />
          </div>
          <div style={{
            position: "relative",
            height: 30,
            overflow: "hidden",
            borderRadius: 100,
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "7px 12px 7px 12px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 77,
                height: 30,
              }}>
              <DockMaterial style={{ transform: "scale(0.770, 0.300)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 11.5,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--grays-white)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>􀊫</span>
            <span style={{
              position: "relative",
              fontFamily: "\"Zoho Puvi\", \"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 590,
              fontSize: 11.5,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--grays-white)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Search</span>
          </div>
          <DockIPhone style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 100,
        top: 1440,
        width: 440,
        overflow: "hidden",
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
        gap: 24,
        padding: "20px 20px 20px 20px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          height: 34,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,1,272,21)",
            transformOrigin: "0 0",
            width: 144,
            height: 5,
            borderRadius: 100,
            backgroundColor: "var(--labels-primary)",
          }} />
        </div>
        <div style={{
          position: "relative",
          height: 21,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,1,313,8)",
            transformOrigin: "0 0",
            width: 226,
            height: 5,
            borderRadius: 100,
            backgroundColor: "var(--labels-primary)",
          }} />
        </div>
        <div style={{
          position: "relative",
          height: 19.5,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,1,336,7)",
            transformOrigin: "0 0",
            width: 273,
            height: 5.5,
            borderRadius: 100,
            backgroundColor: "var(--labels-primary)",
          }} />
        </div>
        <div style={{
          position: "relative",
          height: 19.5,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,1,358,7)",
            transformOrigin: "0 0",
            width: 315,
            height: 5.5,
            borderRadius: 100,
            backgroundColor: "var(--labels-primary)",
          }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 2190,
        top: 4200,
        width: 442,
        height: 1808,
        overflow: "hidden",
        borderRadius: 5,
      }}>
        <div className="fig-asset-f4e8b98baf01df25" style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 402,
          height: 874,
        }} />
        <div className="fig-asset-f94ac88aebf3c1f2" style={{
          position: "absolute",
          left: 20,
          top: 914,
          width: 402,
          height: 874,
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: 2690,
        top: 4200,
        width: 1250,
        height: 1728,
        overflow: "hidden",
        borderRadius: 5,
      }}>
        <div className="fig-asset-37e814e0e37fff7e" style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 1210,
          height: 834,
          overflow: "hidden",
        }} />
        <div className="fig-asset-8724019823d1ebf4" style={{
          position: "absolute",
          left: 20,
          top: 874,
          width: 1210,
          height: 834,
          overflow: "hidden",
        }} />
      </div>
    </div>
  );
}
export default System;
