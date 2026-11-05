import * as React from 'react';
import type { NotificationMenuBGProps } from '../../components/page-controls/NotificationMenuBG';
export interface NotificationMenuBGVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of NotificationMenuBG side by side. */
export declare const NotificationMenuBGVariants: React.FC<NotificationMenuBGVariantsProps>;
export default NotificationMenuBGVariants;
/** Mode=Dark */
export declare const NotificationMenuBGModeDark: React.FC<Partial<NotificationMenuBGProps>>;
/** Mode=Light */
export declare const NotificationMenuBGModeLight: React.FC<Partial<NotificationMenuBGProps>>;
