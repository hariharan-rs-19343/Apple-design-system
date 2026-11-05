import * as React from 'react';
import type { WatchNavigationBarProps } from '../../watchos/navigation/WatchNavigationBar';
export interface WatchNavigationBarVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchNavigationBar side by side. */
export declare const WatchNavigationBarVariants: React.FC<WatchNavigationBarVariantsProps>;
export default WatchNavigationBarVariants;
/** Type=Modal - Text Buttons */
export declare const WatchNavigationBarTypeModalTextButtons: React.FC<Partial<WatchNavigationBarProps>>;
/** Type=Modal - Text Confirm Button */
export declare const WatchNavigationBarTypeModalTextConfirmButton: React.FC<Partial<WatchNavigationBarProps>>;
/** Type=Modal - 1 Control */
export declare const WatchNavigationBarTypeModal1Control: React.FC<Partial<WatchNavigationBarProps>>;
/** Type=Modal - Default */
export declare const WatchNavigationBarTypeModalDefault: React.FC<Partial<WatchNavigationBarProps>>;
/** Type=Child - Status + Title */
export declare const WatchNavigationBarTypeChildStatusTitle: React.FC<Partial<WatchNavigationBarProps>>;
/** Type=Center Aligned */
export declare const WatchNavigationBarTypeCenterAligned: React.FC<Partial<WatchNavigationBarProps>>;
/** Type=Status + Large Title */
export declare const WatchNavigationBarTypeStatusLargeTitle: React.FC<Partial<WatchNavigationBarProps>>;
/** Type=Status + Title */
export declare const WatchNavigationBarTypeStatusTitle: React.FC<Partial<WatchNavigationBarProps>>;
/** Type=Status Bar */
export declare const WatchNavigationBarTypeStatusBar: React.FC<Partial<WatchNavigationBarProps>>;
