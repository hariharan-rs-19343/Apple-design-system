import * as React from 'react';
import type { ExamplesNotificationsProps } from '../../components/kit/ExamplesNotifications';
export interface ExamplesNotificationsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ExamplesNotifications side by side. */
export declare const ExamplesNotificationsVariants: React.FC<ExamplesNotificationsVariantsProps>;
export default ExamplesNotificationsVariants;
/** Expanded=True */
export declare const ExamplesNotificationsExpandedTrue: React.FC<Partial<ExamplesNotificationsProps>>;
/** Expanded=False */
export declare const ExamplesNotificationsExpandedFalse: React.FC<Partial<ExamplesNotificationsProps>>;
