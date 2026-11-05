import * as React from 'react';
import type { NotificationCollapsedProps } from '../../components/notifications/NotificationCollapsed';
export interface NotificationCollapsedVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of NotificationCollapsed side by side. */
export declare const NotificationCollapsedVariants: React.FC<NotificationCollapsedVariantsProps>;
export default NotificationCollapsedVariants;
/** Stack=3 */
export declare const NotificationCollapsedStack3: React.FC<Partial<NotificationCollapsedProps>>;
/** Stack=2 */
export declare const NotificationCollapsedStack2: React.FC<Partial<NotificationCollapsedProps>>;
/** Stack=1 */
export declare const NotificationCollapsedStack1: React.FC<Partial<NotificationCollapsedProps>>;
