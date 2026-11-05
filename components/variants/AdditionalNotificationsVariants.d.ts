import * as React from 'react';
import type { AdditionalNotificationsProps } from '../../components/notifications/AdditionalNotifications';
export interface AdditionalNotificationsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of AdditionalNotifications side by side. */
export declare const AdditionalNotificationsVariants: React.FC<AdditionalNotificationsVariantsProps>;
export default AdditionalNotificationsVariants;
/** Mode=Dark Elevated */
export declare const AdditionalNotificationsModeDarkElevated: React.FC<Partial<AdditionalNotificationsProps>>;
/** Mode=Dark */
export declare const AdditionalNotificationsModeDark: React.FC<Partial<AdditionalNotificationsProps>>;
/** Mode=Light */
export declare const AdditionalNotificationsModeLight: React.FC<Partial<AdditionalNotificationsProps>>;
