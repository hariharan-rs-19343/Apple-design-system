import * as React from 'react';
import type { WatchExampleListsProps } from '../../watchos/examples/WatchExampleLists';
export interface WatchExampleListsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchExampleLists side by side. */
export declare const WatchExampleListsVariants: React.FC<WatchExampleListsVariantsProps>;
export default WatchExampleListsVariants;
/** Type=Workout */
export declare const WatchExampleListsTypeWorkout: React.FC<Partial<WatchExampleListsProps>>;
/** Type=Menu */
export declare const WatchExampleListsTypeMenu: React.FC<Partial<WatchExampleListsProps>>;
/** Type=Colorful */
export declare const WatchExampleListsTypeColorful: React.FC<Partial<WatchExampleListsProps>>;
/** Type=Grouped List Items */
export declare const WatchExampleListsTypeGroupedListItems: React.FC<Partial<WatchExampleListsProps>>;
