import * as React from 'react';
export interface KeysIPadCommandProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  align?: "left" | "right";
  label?: string;
}
export declare const KeysIPadCommand: React.FC<KeysIPadCommandProps>;
export default KeysIPadCommand;
