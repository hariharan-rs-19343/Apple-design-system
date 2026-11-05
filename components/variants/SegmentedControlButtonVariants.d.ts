import * as React from 'react';
import type { SegmentedControlButtonProps } from '../../components/toolbars/SegmentedControlButton';
export interface SegmentedControlButtonVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SegmentedControlButton side by side. */
export declare const SegmentedControlButtonVariants: React.FC<SegmentedControlButtonVariantsProps>;
export default SegmentedControlButtonVariants;
/** Mode=Dark,Selected=False */
export declare const SegmentedControlButtonModeDarkSelectedFalse: React.FC<Partial<SegmentedControlButtonProps>>;
/** Mode=Dark,Selected=True */
export declare const SegmentedControlButtonModeDarkSelectedTrue: React.FC<Partial<SegmentedControlButtonProps>>;
/** Mode=Light, Selected=False */
export declare const SegmentedControlButtonModeLightSelectedFalse: React.FC<Partial<SegmentedControlButtonProps>>;
/** Mode=Light, Selected=True */
export declare const SegmentedControlButtonModeLightSelectedTrue: React.FC<Partial<SegmentedControlButtonProps>>;
