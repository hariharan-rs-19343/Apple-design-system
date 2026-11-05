import * as React from 'react';
import type { AlertProps } from '../../components/alerts/Alert';
export interface AlertVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Alert side by side. */
export declare const AlertVariants: React.FC<AlertVariantsProps>;
export default AlertVariants;
/** Type=Side-by-Side */
export declare const AlertTypeSideBySide: React.FC<Partial<AlertProps>>;
/** Type=Stacked */
export declare const AlertTypeStacked: React.FC<Partial<AlertProps>>;
