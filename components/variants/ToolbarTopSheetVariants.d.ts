import * as React from 'react';
import type { ToolbarTopSheetProps } from '../../components/navigation/ToolbarTopSheet';
export interface ToolbarTopSheetVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ToolbarTopSheet side by side. */
export declare const ToolbarTopSheetVariants: React.FC<ToolbarTopSheetVariantsProps>;
export default ToolbarTopSheetVariants;
/** Mode=Light, Style=Compact Large */
export declare const ToolbarTopSheetModeLightStyleCompactLarge: React.FC<Partial<ToolbarTopSheetProps>>;
/** Mode=Light, Style=Default */
export declare const ToolbarTopSheetModeLightStyleDefault: React.FC<Partial<ToolbarTopSheetProps>>;
/** Mode=Light, Style=Large Title */
export declare const ToolbarTopSheetModeLightStyleLargeTitle: React.FC<Partial<ToolbarTopSheetProps>>;
/** Mode=Light, Style=Title 2 Line Left */
export declare const ToolbarTopSheetModeLightStyleTitle2LineLeft: React.FC<Partial<ToolbarTopSheetProps>>;
/** Mode=Light, Style=Title 2 Line */
export declare const ToolbarTopSheetModeLightStyleTitle2Line: React.FC<Partial<ToolbarTopSheetProps>>;
