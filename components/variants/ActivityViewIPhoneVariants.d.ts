import * as React from 'react';
import type { ActivityViewIPhoneProps } from '../../components/views/ActivityViewIPhone';
export interface ActivityViewIPhoneVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ActivityViewIPhone side by side. */
export declare const ActivityViewIPhoneVariants: React.FC<ActivityViewIPhoneVariantsProps>;
export default ActivityViewIPhoneVariants;
/** Mode=Dark */
export declare const ActivityViewIPhoneModeDark: React.FC<Partial<ActivityViewIPhoneProps>>;
/** Mode=Light */
export declare const ActivityViewIPhoneModeLight: React.FC<Partial<ActivityViewIPhoneProps>>;
