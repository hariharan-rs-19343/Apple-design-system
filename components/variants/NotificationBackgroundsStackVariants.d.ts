import * as React from 'react';
import type { NotificationBackgroundsStackProps } from '../../components/actions/NotificationBackgroundsStack';
export interface NotificationBackgroundsStackVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of NotificationBackgroundsStack side by side. */
export declare const NotificationBackgroundsStackVariants: React.FC<NotificationBackgroundsStackVariantsProps>;
export default NotificationBackgroundsStackVariants;
/** Mode=Dark */
export declare const NotificationBackgroundsStackModeDark: React.FC<Partial<NotificationBackgroundsStackProps>>;
/** Mode=Light */
export declare const NotificationBackgroundsStackModeLight: React.FC<Partial<NotificationBackgroundsStackProps>>;
