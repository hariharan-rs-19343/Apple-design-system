import * as React from 'react';
import type { WatchExampleProps } from '../../watchos/alerts/WatchExample';
export interface WatchExampleVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchExample side by side. */
export declare const WatchExampleVariants: React.FC<WatchExampleVariantsProps>;
export default WatchExampleVariants;
/** Type=Title with Close Button */
export declare const WatchExampleTypeTitleWithCloseButton: React.FC<Partial<WatchExampleProps>>;
/** Type=Symbol + Description */
export declare const WatchExampleTypeSymbolDescription: React.FC<Partial<WatchExampleProps>>;
/** Type=Description Only */
export declare const WatchExampleTypeDescriptionOnly: React.FC<Partial<WatchExampleProps>>;
/** Type=Title + Description */
export declare const WatchExampleTypeTitleDescription: React.FC<Partial<WatchExampleProps>>;
/** Type=Title */
export declare const WatchExampleTypeTitle: React.FC<Partial<WatchExampleProps>>;
