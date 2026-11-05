import * as React from 'react';
import type { SegmentedControlButtonsProps } from '../../components/segmented-controls/SegmentedControlButtons';
export interface SegmentedControlButtonsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SegmentedControlButtons side by side. */
export declare const SegmentedControlButtonsVariants: React.FC<SegmentedControlButtonsVariantsProps>;
export default SegmentedControlButtonsVariants;
/** State=Selected, Mode=Dark */
export declare const SegmentedControlButtonsStateSelectedModeDark: React.FC<Partial<SegmentedControlButtonsProps>>;
/** State=Default, Mode=Dark */
export declare const SegmentedControlButtonsStateDefaultModeDark: React.FC<Partial<SegmentedControlButtonsProps>>;
/** State=Selected, Mode=Light */
export declare const SegmentedControlButtonsStateSelectedModeLight: React.FC<Partial<SegmentedControlButtonsProps>>;
/** State=Default, Mode=Light */
export declare const SegmentedControlButtonsStateDefaultModeLight: React.FC<Partial<SegmentedControlButtonsProps>>;
