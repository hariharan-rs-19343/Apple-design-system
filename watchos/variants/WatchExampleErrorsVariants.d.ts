import * as React from 'react';
import type { WatchExampleErrorsProps } from '../../watchos/examples/WatchExampleErrors';
export interface WatchExampleErrorsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchExampleErrors side by side. */
export declare const WatchExampleErrorsVariants: React.FC<WatchExampleErrorsVariantsProps>;
export default WatchExampleErrorsVariants;
/** Type=Title with Close button */
export declare const WatchExampleErrorsTypeTitleWithCloseButton: React.FC<Partial<WatchExampleErrorsProps>>;
/** Type=Symbol + Description */
export declare const WatchExampleErrorsTypeSymbolDescription: React.FC<Partial<WatchExampleErrorsProps>>;
/** Type=Description only */
export declare const WatchExampleErrorsTypeDescriptionOnly: React.FC<Partial<WatchExampleErrorsProps>>;
/** Type=Title + Description */
export declare const WatchExampleErrorsTypeTitleDescription: React.FC<Partial<WatchExampleErrorsProps>>;
/** Type=Title only */
export declare const WatchExampleErrorsTypeTitleOnly: React.FC<Partial<WatchExampleErrorsProps>>;
