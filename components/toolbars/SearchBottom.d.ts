import * as React from 'react';
export interface SearchBottomProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  state?: "placeholder" | "typing" | "value";
  value?: string;
  placeholder?: string;
  /** Text content; defaults to "􀊫". */
  text1?: string;
  /** Text content; defaults to "Placeholder". */
  text2?: string;
  /** Text content; defaults to "􀊰". */
  text3?: string;
}
export declare const SearchBottom: React.FC<SearchBottomProps>;
export default SearchBottom;
