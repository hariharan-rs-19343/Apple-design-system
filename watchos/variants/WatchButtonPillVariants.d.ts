import * as React from 'react';
import type { WatchButtonPillProps } from '../../watchos/buttons/WatchButtonPill';
export interface WatchButtonPillVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchButtonPill side by side. */
export declare const WatchButtonPillVariants: React.FC<WatchButtonPillVariantsProps>;
export default WatchButtonPillVariants;
/** Type=Destructive Floating */
export declare const WatchButtonPillTypeDestructiveFloating: React.FC<Partial<WatchButtonPillProps>>;
/** Type=Destructive */
export declare const WatchButtonPillTypeDestructive: React.FC<Partial<WatchButtonPillProps>>;
/** Type=Tertiary */
export declare const WatchButtonPillTypeTertiary: React.FC<Partial<WatchButtonPillProps>>;
/** Type=Secondary */
export declare const WatchButtonPillTypeSecondary: React.FC<Partial<WatchButtonPillProps>>;
/** Type=Primary Floating */
export declare const WatchButtonPillTypePrimaryFloating: React.FC<Partial<WatchButtonPillProps>>;
/** Type=Primary */
export declare const WatchButtonPillTypePrimary: React.FC<Partial<WatchButtonPillProps>>;
/** Type=Default Floating */
export declare const WatchButtonPillTypeDefaultFloating: React.FC<Partial<WatchButtonPillProps>>;
/** Type=Default */
export declare const WatchButtonPillTypeDefault: React.FC<Partial<WatchButtonPillProps>>;
