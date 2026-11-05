import * as React from 'react';
import type { HSQAWidgetLightProps } from '../../components/home-screen/HSQAWidgetLight';
export interface HSQAWidgetLightVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of HSQAWidgetLight side by side. */
export declare const HSQAWidgetLightVariants: React.FC<HSQAWidgetLightVariantsProps>;
export default HSQAWidgetLightVariants;
/** State=Selected */
export declare const HSQAWidgetLightStateSelected: React.FC<Partial<HSQAWidgetLightProps>>;
/** State=Default */
export declare const HSQAWidgetLightStateDefault: React.FC<Partial<HSQAWidgetLightProps>>;
