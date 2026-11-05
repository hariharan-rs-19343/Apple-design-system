import * as React from 'react';
import type { WatchPickerProps } from '../../watchos/pickers/WatchPicker';
export interface WatchPickerVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchPicker side by side. */
export declare const WatchPickerVariants: React.FC<WatchPickerVariantsProps>;
export default WatchPickerVariants;
/** Values=3 (mixed widths), Selected=3 */
export declare const WatchPickerValues3MixedWidthsSelected3: React.FC<Partial<WatchPickerProps>>;
/** Values=3 (mixed widths), Selected=2 */
export declare const WatchPickerValues3MixedWidthsSelected2: React.FC<Partial<WatchPickerProps>>;
/** Values=3 (mixed widths), Selected=1 */
export declare const WatchPickerValues3MixedWidthsSelected1: React.FC<Partial<WatchPickerProps>>;
/** Values=3 (mixed widths), Selected=None */
export declare const WatchPickerValues3MixedWidthsSelectedNone: React.FC<Partial<WatchPickerProps>>;
/** Values=3, Selected=2 */
export declare const WatchPickerValues3Selected2: React.FC<Partial<WatchPickerProps>>;
/** Values=3, Selected=1 */
export declare const WatchPickerValues3Selected1: React.FC<Partial<WatchPickerProps>>;
/** Values=3, Selected=3 */
export declare const WatchPickerValues3Selected3: React.FC<Partial<WatchPickerProps>>;
/** Values=3, Selected=None */
export declare const WatchPickerValues3SelectedNone: React.FC<Partial<WatchPickerProps>>;
/** Values=2, Selected=2 */
export declare const WatchPickerValues2Selected2: React.FC<Partial<WatchPickerProps>>;
/** Values=2, Selected=1 */
export declare const WatchPickerValues2Selected1: React.FC<Partial<WatchPickerProps>>;
/** Values=2, Selected=None */
export declare const WatchPickerValues2SelectedNone: React.FC<Partial<WatchPickerProps>>;
/** Values=1, Selected=1 */
export declare const WatchPickerValues1Selected1: React.FC<Partial<WatchPickerProps>>;
/** Values=1, Selected=None */
export declare const WatchPickerValues1SelectedNone: React.FC<Partial<WatchPickerProps>>;
