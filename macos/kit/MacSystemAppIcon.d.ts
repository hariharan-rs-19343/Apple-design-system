import * as React from 'react';
export interface MacSystemAppIconProps {
  className?: string;
  style?: React.CSSProperties;
  appIcon?: "custom" | "folder icon" | "launch pad" | "trash empty" | "trash full" | "apple tv" | "app store" | "contacts" | "books" | "calendar" | "calculator" | "home" | "finder" | "find my" | "final cut pro" | "facetime" | "iMovie" | "keynote" | "mail" | "maps" | "messages" | "music" | "news" | "notes" | "numbers" | "pages" | "photo booth" | "photos" | "podcasts" | "preview" | "quicktime player" | "reminders" | "safari" | "siri" | "stocks" | "system settings" | "textedit" | "terminal" | "voice memos" | "xcode" | "shortcuts" | "freeform" | "weather" | "mirroring";
  appIconMode?: "default" | "dark";
}
export declare const MacSystemAppIcon: React.FC<MacSystemAppIconProps>;
export default MacSystemAppIcon;
