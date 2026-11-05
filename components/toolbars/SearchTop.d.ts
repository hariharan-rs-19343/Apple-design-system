import * as React from 'react';
export interface SearchTopProps {
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  mode?: "dark" | "light";
  state?: "placeholder" | "value" | "typing";
  placeholder?: string;
  /** Text content; defaults to "􀊫". */
  text1?: string;
  /** Text content; defaults to "􀊰". */
  text2?: string;
}
export declare const SearchTop: React.FC<SearchTopProps>;
export default SearchTop;
