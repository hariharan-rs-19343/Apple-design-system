import * as React from 'react';
import type { TextField2Props } from '../../components/text-fields/TextField2';
export interface TextField2VariantsProps { style?: React.CSSProperties; }
/** Renders every variant of TextField2 side by side. */
export declare const TextField2Variants: React.FC<TextField2VariantsProps>;
export default TextField2Variants;
/** State=Placeholder */
export declare const TextField2StatePlaceholder: React.FC<Partial<TextField2Props>>;
/** State=Focused */
export declare const TextField2StateFocused: React.FC<Partial<TextField2Props>>;
/** State=Value Entered */
export declare const TextField2StateValueEntered: React.FC<Partial<TextField2Props>>;
/** State=Typing */
export declare const TextField2StateTyping: React.FC<Partial<TextField2Props>>;
