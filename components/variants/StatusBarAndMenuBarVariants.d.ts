import * as React from 'react';
import type { StatusBarAndMenuBarProps } from '../../components/home-screen/StatusBarAndMenuBar';
export interface StatusBarAndMenuBarVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of StatusBarAndMenuBar side by side. */
export declare const StatusBarAndMenuBarVariants: React.FC<StatusBarAndMenuBarVariantsProps>;
export default StatusBarAndMenuBarVariants;
/** Type=Status and menu bar - Windowed */
export declare const StatusBarAndMenuBarTypeStatusAndMenuBarWindowed: React.FC<Partial<StatusBarAndMenuBarProps>>;
/** Type=Status and menu bar - Fullscreen */
export declare const StatusBarAndMenuBarTypeStatusAndMenuBarFullscreen: React.FC<Partial<StatusBarAndMenuBarProps>>;
/** Type=Status bar only */
export declare const StatusBarAndMenuBarTypeStatusBarOnly: React.FC<Partial<StatusBarAndMenuBarProps>>;
