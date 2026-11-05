import * as React from 'react';
import type { WatchBezelsProps } from '../../watchos/bezels/WatchBezels';
export interface WatchBezelsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchBezels side by side. */
export declare const WatchBezelsVariants: React.FC<WatchBezelsVariantsProps>;
export default WatchBezelsVariants;
/** Bezel Size=49mm */
export declare const WatchBezelsBezelSize49mm: React.FC<Partial<WatchBezelsProps>>;
/** Bezel Size=46mm */
export declare const WatchBezelsBezelSize46mm: React.FC<Partial<WatchBezelsProps>>;
/** Bezel Size=44mm */
export declare const WatchBezelsBezelSize44mm: React.FC<Partial<WatchBezelsProps>>;
/** Bezel Size=42mm */
export declare const WatchBezelsBezelSize42mm: React.FC<Partial<WatchBezelsProps>>;
/** Bezel Size=40mm */
export declare const WatchBezelsBezelSize40mm: React.FC<Partial<WatchBezelsProps>>;
