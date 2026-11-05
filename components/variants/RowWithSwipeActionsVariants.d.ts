import * as React from 'react';
import type { RowWithSwipeActionsProps } from '../../components/lists/RowWithSwipeActions';
export interface RowWithSwipeActionsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of RowWithSwipeActions side by side. */
export declare const RowWithSwipeActionsVariants: React.FC<RowWithSwipeActionsVariantsProps>;
export default RowWithSwipeActionsVariants;
/** Height=Tall, Swipe=Right */
export declare const RowWithSwipeActionsHeightTallSwipeRight: React.FC<Partial<RowWithSwipeActionsProps>>;
/** Height=Regular, Swipe=Right */
export declare const RowWithSwipeActionsHeightRegularSwipeRight: React.FC<Partial<RowWithSwipeActionsProps>>;
/** Height=Tall, Swipe=Left */
export declare const RowWithSwipeActionsHeightTallSwipeLeft: React.FC<Partial<RowWithSwipeActionsProps>>;
/** Height=Regular, Swipe=Left */
export declare const RowWithSwipeActionsHeightRegularSwipeLeft: React.FC<Partial<RowWithSwipeActionsProps>>;
