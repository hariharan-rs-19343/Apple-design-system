import * as React from 'react';
import type { SwipeActionsProps } from '../../components/accessory-bars/SwipeActions';
export interface SwipeActionsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SwipeActions side by side. */
export declare const SwipeActionsVariants: React.FC<SwipeActionsVariantsProps>;
export default SwipeActionsVariants;
/** Actions=3, Type=Symbol + Text */
export declare const SwipeActionsActions3TypeSymbolText: React.FC<Partial<SwipeActionsProps>>;
/** Actions=2, Type=Symbol + Text */
export declare const SwipeActionsActions2TypeSymbolText: React.FC<Partial<SwipeActionsProps>>;
/** Actions=1, Type=Symbol + Text */
export declare const SwipeActionsActions1TypeSymbolText: React.FC<Partial<SwipeActionsProps>>;
/** Actions=3, Type=Text */
export declare const SwipeActionsActions3TypeText: React.FC<Partial<SwipeActionsProps>>;
/** Actions=2, Type=Text */
export declare const SwipeActionsActions2TypeText: React.FC<Partial<SwipeActionsProps>>;
/** Actions=1, Type=Text */
export declare const SwipeActionsActions1TypeText: React.FC<Partial<SwipeActionsProps>>;
/** Actions=3, Type=Symbol */
export declare const SwipeActionsActions3TypeSymbol: React.FC<Partial<SwipeActionsProps>>;
/** Actions=2, Type=Symbol */
export declare const SwipeActionsActions2TypeSymbol: React.FC<Partial<SwipeActionsProps>>;
/** Actions=1, Type=Symbol */
export declare const SwipeActionsActions1TypeSymbol: React.FC<Partial<SwipeActionsProps>>;
