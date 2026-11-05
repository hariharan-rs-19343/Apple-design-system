import * as React from 'react';
export interface SearchFieldProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "placeholder" | "focused" | "typing";
  showText?: boolean;
  searchText?: string;
  /** Text content; defaults to "􀊫". */
  text1?: string;
  /** Text content; defaults to "􀁡". */
  text2?: string;
  /** Text content; defaults to "Cancel". */
  text3?: string;
}
export declare const SearchField: React.FC<SearchFieldProps>;
export default SearchField;
