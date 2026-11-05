import * as React from 'react';
import type { WatchExampleNotificationsProps } from '../../watchos/examples/WatchExampleNotifications';
export interface WatchExampleNotificationsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchExampleNotifications side by side. */
export declare const WatchExampleNotificationsVariants: React.FC<WatchExampleNotificationsVariantsProps>;
export default WatchExampleNotificationsVariants;
/** Type=Long Look */
export declare const WatchExampleNotificationsTypeLongLook: React.FC<Partial<WatchExampleNotificationsProps>>;
/** Type=Short Look */
export declare const WatchExampleNotificationsTypeShortLook: React.FC<Partial<WatchExampleNotificationsProps>>;
/** Type=Banner */
export declare const WatchExampleNotificationsTypeBanner: React.FC<Partial<WatchExampleNotificationsProps>>;
