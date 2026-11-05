import * as React from 'react';
import type { LeadingIPhoneProps } from '../../components/labels/LeadingIPhone';
export interface LeadingIPhoneVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of LeadingIPhone side by side. */
export declare const LeadingIPhoneVariants: React.FC<LeadingIPhoneVariantsProps>;
export default LeadingIPhoneVariants;
/** Mode=Light, State=Destructive */
export declare const LeadingIPhoneModeLightStateDestructive: React.FC<Partial<LeadingIPhoneProps>>;
/** Mode=Light, State=Disabled */
export declare const LeadingIPhoneModeLightStateDisabled: React.FC<Partial<LeadingIPhoneProps>>;
