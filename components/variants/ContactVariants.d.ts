import * as React from 'react';
import type { ContactProps } from '../../components/fields/Contact';
export interface ContactVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Contact side by side. */
export declare const ContactVariants: React.FC<ContactVariantsProps>;
export default ContactVariants;
/** People=2 */
export declare const ContactPeople2: React.FC<Partial<ContactProps>>;
/** People=1 */
export declare const ContactPeople1: React.FC<Partial<ContactProps>>;
