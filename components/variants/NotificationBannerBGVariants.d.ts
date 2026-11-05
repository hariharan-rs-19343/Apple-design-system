import * as React from 'react';
import type { NotificationBannerBGProps } from '../../components/notifications/NotificationBannerBG';
export interface NotificationBannerBGVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of NotificationBannerBG side by side. */
export declare const NotificationBannerBGVariants: React.FC<NotificationBannerBGVariantsProps>;
export default NotificationBannerBGVariants;
/** Mode=Dark */
export declare const NotificationBannerBGModeDark: React.FC<Partial<NotificationBannerBGProps>>;
/** Mode=Light */
export declare const NotificationBannerBGModeLight: React.FC<Partial<NotificationBannerBGProps>>;
