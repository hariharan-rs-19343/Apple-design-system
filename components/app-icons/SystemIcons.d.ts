import * as React from 'react';
export interface SystemIconsProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: "app store" | "books" | "calendar" | "camera" | "calculator" | "clock" | "contacts" | "facetime" | "files" | "find my" | "fitness" | "freeform" | "health" | "home" | "itunes store" | "keynote" | "mail" | "maps" | "measure" | "messages" | "music" | "news" | "notes" | "number" | "pages" | "phone" | "photos" | "podcasts" | "reminders" | "safari" | "settings" | "shortcuts" | "stocks" | "tips" | "translate" | "tv" | "voice memos" | "wallet" | "watch" | "weather" | "games" | "preview" | "airdrop" | "passwords";
  mode?: "default" | "dark" | "clear light";
}
export declare const SystemIcons: React.FC<SystemIconsProps>;
export default SystemIcons;
