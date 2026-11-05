# ZhareHub Design System

Design system for ZhareHub's iOS and iPadOS 26 app, built from Apple's iOS/iPadOS 26 Community Figma kit.

## Sources

- **Figma**: iOS and iPadOS 26 (Community).fig — Apple's official UI kit
- **App Icons**: `assets/app-icon-light.png`, `assets/app-icon-dark.png` — ZhareHub rocket mark in light and dark variants
- **No logo SVG provided** — the app icon PNGs serve as the brand mark; render "ZhareHub" in SF Pro where a text mark is needed

## Brand

ZhareHub uses a red rocket icon as its app mark (red body, blue exhaust/window). The brand colors lean on iOS system red (`--accents-red`) and blue (`--accents-blue`).

---

## CONTENT FUNDAMENTALS

- **Tone**: Clean, functional iOS system language. Labels are short and direct.
- **Casing**: Title Case for navigation titles, Sentence case for body text and descriptions.
- **Person**: Second person ("you") for user-facing copy. First person for user actions ("My Files").
- **Emoji**: Not used in system UI. Icons come from SF Symbols.
- **Vibe**: Minimal, utilitarian, Apple-native. Clarity over decoration.

---

## VISUAL FOUNDATIONS

### Colors
- 12 accent colors: Red, Orange, Yellow, Green, Mint, Teal, Cyan, Blue, Indigo, Purple, Pink, Brown
- 8 grays: Black through White (6 intermediate steps)
- Semantic tokens: Labels (Primary/Secondary/Tertiary/Quaternary), Backgrounds (Primary/Secondary/Tertiary, Grouped variants, Elevated variants), Fills (Primary–Quaternary), Separators (Opaque/Non-opaque)
- Light and Dark modes with full token sets; Increased Contrast variants available
- Primary brand accent: `--accents-red` (#FF383C light / #FF4245 dark)

### ZhareHub Brand Palette (`tokens/brand-colors.css`)
Use these `--zh-*` tokens for ZhareHub-branded UI; they override the system accents for brand surfaces. Dark mode via `:root[data-theme="dark"]` or `.dark`.
- **Primary** `--zh-primary` #226DB4 (dark #5FA8EE) — main actions, links, selection. Ramp `--zh-primary-50…900`.
- **Secondary** `--zh-secondary` #0E7C72 (dark #4FC7B8) — supporting actions, success-adjacent highlights.
- **Tertiary** `--zh-tertiary` #AD5615 (dark #F0A060) — accents, badges, contrast against blue.
- Each role has `-pressed`, `--zh-on-*`, `-container`, `--zh-on-*-container`.
- **Disabled** `--zh-disabled-fill` / `-label` / `-border`.
- Surfaces: `--zh-background`, `--zh-surface`, `--zh-label`, `--zh-label-secondary`, `--zh-separator`.
- All on-color pairs meet 4.5:1.

### Typography
- **Font family**: **Zoho Puvi** is the ZhareHub brand typeface (10 weights, Thin 100 → Extrablack 950, `assets/fonts/ZohoPuvi-*.ttf`). Every stack is `"Zoho Puvi", "SF Pro", …`; SF Pro stays as fallback so SF Symbols glyphs (Private Use Area) still render. SF Compact for compact contexts.
- iOS weights map to Puvi cuts: 510 → Medium, 590 → Semibold.
- **Type scale** (11 levels): Large Title (34px), Title1 (28px), Title2 (22px), Title3 (20px), Headline (17px Semibold), Body (17px), Callout (16px), Subheadline (15px), Footnote (13px), Caption1 (12px), Caption2 (11px)
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700), Heavy (800)
- All styles have Italic variants; Headline defaults to Semibold
- Negative letter-spacing on Body and smaller sizes (e.g. -0.41px for Body)

### Spacing
- Standard iOS margins: 16px horizontal padding for content areas
- List row heights: 44px (regular), 64px+ (tall with images)
- Section insets: 20px grouped table margins
- Gap patterns: 8px, 10px, 12px, 16px between elements

### Backgrounds
- Flat solid colors, no gradients on backgrounds (gradients only on widgets and special elements)
- Grouped table backgrounds use `--backgrounds-grouped-primary` (light gray in light mode, black in dark mode)
- Elevated surfaces use distinct elevated tokens for visual separation in dark mode

### Corner Radii
- Buttons: 100px (full pill)
- Cards/Groups: 10–13px
- Sheets: 34px (iPhone top), 38px (iPad), 58px (iPhone bottom)
- App icons: 26px (iPhone at 120px), proportional for iPad
- Windows: 34px
- Widgets: 28px (small), proportional larger

### Shadows
- Sheets: `0 15px 75px rgba(0,0,0,0.18)`
- Windows: `0 20px 76px rgba(0,0,0,0.2)`
- Popovers: `0 10px 100px rgba(0,0,0,0.3)`
- Floating tab pill: `rgba(0,0,0,0.08)` subtle shadow

### Blur / Materials
- iOS Liquid Glass effect (new in iOS 26): frosted glass with refraction, depth, and splay parameters
- Material styles: Regular, Thick, Thin, Ultrathin — each in Light/Dark
- `backdrop-filter: blur()` values: 7px (regular), 12px (medium), 14px (large), 130px (popovers)
- Scroll edge effects: Hard and Soft blur variants

### Animation
- Standard iOS spring animations; no custom easing specified in the kit
- Transitions are implicit (system-managed)

### Hover/Press States
- Text buttons: opacity reduction on disabled
- Filled buttons: darker/lighter fill on press
- List rows: highlight fill on press

### Borders & Separators
- Separator tokens: Opaque (`--separators-opaque`) and Non-opaque (`--separators-non-opaque`)
- Bar borders: `rgba(0,0,0,0.3)` light / `rgba(255,255,255,0.15)` dark
- Component outlines use `--component-stroke` (Indigo-tinted in kit mode)

### Imagery
- Photo content fills containers edge-to-edge with `object-fit: cover`
- No grain, filters, or special treatments on photos
- Widget imagery uses system blue gradients

---

## ICONOGRAPHY

- **Primary icon system**: SF Symbols (Apple's system icon font) — referenced via Unicode Private Use Area characters (e.g. `\u{F0085}` / `􀆅`)
- **Style**: Monochrome, single-weight line icons matching SF Pro's optical weight
- **App icons**: 43 system app icons included in the kit (Messages, Mail, Safari, Photos, etc.) in Default, Dark, and Clear Light modes
- **Custom icons**: Supported via `CustomIcon` component with 3 mode variants
- **Badge**: Notification badge component for app icons
- No emoji used in system UI. No third-party icon sets.

---

## Components

Built from the iOS/iPadOS 26 Figma kit. 359 components (iPhone scope plus requested iPad examples; see "Intentionally Skipped Families" for the rest):

### examples-sidebar (`components/examples-sidebar/`)
ExamplesSidebar, SidebarToolbar, IPadProM411 — iPad `Examples/Sidebar` (Type=List, Type=List (Multi-level)), added at user request.

### accessory-bars (`components/accessory-bars/`)
AccessoryBarIPad, AccessoryBarIPhoneFind, AccessoryBarIPhoneFindAnd, AccessoryBarIPhoneToolbar, AccessoryBarURL, AccessoryBarWebForm, Autocorrection, ButtonSymbol3, EmojiSearchField, EmojiTabs, LiquidGlassRegularSmall3, Previous, ReplaceButton, Symbol2

### accessory-bars-dark (`components/accessory-bars-dark/`)
AccessoryBarAutocorrectionDark, AccessoryBarIPadButtonsDark, AccessoryBarIPadButtonsLight, AccessoryBarIPadFind, AccessoryBarIPadFindDark, AccessoryBarIPadNext, AccessoryBarIPadNextDark, AccessoryBarIPadPrevious, AccessoryBarIPadPreviousDark, AccessoryBarIPadReplace, AccessoryBarIPadReplaceDark, AccessoryBarIPhoneFindDark, AccessoryBarIPhoneNextDark, AccessoryBarIPhonePreviousDark, AccessoryBarIPhoneReplace, AccessoryBarIPhoneReplaceDark

### actions (`components/actions/`)
ActionSheetButtonsDark, BottomButtons, ButtonBack2, ButtonsTop, EditButtonsDark, NotificationBackgroundsStack, SwipeActionsLarge

### alerts (`components/alerts/`)
ActionSheet, Alert, Buttons2, LiquidGlassRegularMedium, TextFieldBackground

### app-icons (`components/app-icons/`)
AppIconIPad, AppIconIPhone, Badge, CustomIcon, SystemIcons

### backgrounds (`components/backgrounds/`)
BG, Background, BackgroundIPad, BackgroundIPhone, Gradient

### bezels (`components/bezels/`)
HomeIndicator, IPhone16Pro

### buttons (`components/buttons/`)
ButtonBack, ButtonBackgroundOverDarkBackground, ButtonBackgroundOverDarkBackground2, ButtonBottom, ButtonDone, ButtonLiquidGlass, ButtonLiquidGlassNotTinted, ButtonLiquidGlassTinted, ButtonSymbol, ButtonSymbol2, ButtonText, ButtonText2, LabelSymbolDefault, LabelSymbolDefault2, LabelSymbolPreferred, LabelTextDefault, LabelTextPreferred, LiquidGlassRegularSmall

### controls (`components/controls/`)
Arrows, Checkmark, Chevron, CloseButton, Disclosure, Disclsoure

### fields (`components/fields/`)
Contact, Contents, ControlsTrailing, FieldBG, FieldFind, FieldReplace, MenuBarItem, MenuItemDark, Next, Prompt, SearchField, TitleDefaultCompact

### home-screen (`components/home-screen/`)
ControlsBGIPad, ControlsBGIPhone, ControlsIPad1x1, ControlsIPad2x1, ControlsIPad2x2, ControlsIPhone1x1, ControlsIPhone2x1, ControlsIPhone2x2, HSQAActions, HSQAAppIconDark, HSQAAppIconLight, HSQABG, HSQAWidgetDark, HSQAWidgetLight, HSQAWidgetRow

### keyboards (`components/keyboards/`)
KeyboardIPadLayouts, KeyboardIPhoneLayouts, KeysIPadCommand, KeysIPadLowercase, KeysIPadReturn, KeysIPhone, KeysIPhoneSpace

### keyboards-dark (`components/keyboards-dark/`)
KeyboardIPadLayoutsDark, KeyboardIPadLayoutsDarkVibrant, KeyboardIPhoneLayoutsDark, KeysIPadEnterDark, KeysIPadEnterDarkVibrant, KeysIPadLowercaseDark, KeysIPadLowercaseDarkVibrant, KeysIPadSpecialDark, KeysIPadSpecialDarkVibrant, KeysIPadUppercaseDark, KeysIPadUppercaseDarkVibrant, KeysIPhoneLowercaseDark, KeysIPhoneNumeric, KeysIPhoneSpecialDark, KeysIPhoneUppercaseDark, KeysNumbericDark, KeysReturnDark, KeysSpaceDark

### labels (`components/labels/`)
CardTop, CloseButton2, Description, Header, HeaderTrailingAccessories, Label, LaunchPad, LeadingIPhone, Lollipops, ModeLabel

### lists (`components/lists/`)
ContentsDisclosure, DateAndTimeCollapsed, Decrement, EditButtonsLight, Grabber3, ImagesRegular, ImagesTall, Increment, Row, Separator, Stepper, Trailing2

### materials (`components/materials/`)
Grabber, Materials, MaterialsModeOptions

### menus (`components/menus/`)
EditMenuItem, MenuIndicator

### misc (`components/misc/`)
AppIconOptions, AppIconRowIPhone, AppStore, Buttons

### navigation (`components/navigation/`)
ButtonsTopSheets, Grabber2, Overlay, PopoversIPadOnly, SheetIPad, StatusBarIPhone2, SubtitleCaption, SubtitleSubheadline, TitleBody, TitleLargeTitle, TitleSubheadline, ToolbarTopSheet

### notifications (`components/notifications/`)
AdditionalNotifications, NotificationBGComposed, NotificationBannerBG, NotificationMaterials, NotificationMaterialsModeOptionsLight, NotificationMaterialsModeOptionsLight2, NotificationMaterialsModeOptionsLight3

### page-controls (`components/page-controls/`)
DateAndTimeCompactCollapsed2, NotificationMenuBG, PageControl, PageControl2, PageControlPlatterLight, Picker, Separator3, Swatch, SwatchGrid, SwatchLightAndDark, ToolbarBottomIPad

### page-dots (`components/page-dots/`)
PageDotsAnimated — interactive page dots. `animation="default"` widens the active dot to a 16px pill (2× dot width); `animation="stretch"` stretches the indicator to the target dot, then shrinks into it. Props: `count`, `current`/`defaultCurrent`, `onChange`, `mode`, `tint` (neutral | brand), `platter`, `duration`.

### progress (`components/progress/`)
ProgressIndicator

### segmented-controls (`components/segmented-controls/`)
SegmentedControl

### sidebar-items (`components/sidebar-items/`)
SectionHeader, SidebarEditButton, SidebarLeading, SidebarRow, SidebarSearchField, SidebarTrailing, ToolbarButtonSymbol, ToolbarButtonText, TrailingDisclosure

### sliders (`components/sliders/`)
Decrement2, Fill, Knob, Sliders, Ticks, Track

### surfaces (`components/surfaces/`)
DateAndTimePickers, HomeScreenWidgetIPhone, LiquidGlassRegularLarge, PageControl3, SearchField2, SectionHeader2, Sidebar, SidebarSearchField2, Window, WindowControls, WindowResize

### tab-bars (`components/tab-bars/`)
ButtonHorizontalStack, ButtonVerticalStack, PageDots, TabBarButtonIPadText

### text-fields (`components/text-fields/`)
DateAndTimeCompactCollapsed, RowTextFieldValueEntered, TextField2, TrailingLight

### toggles (`components/toggles/`)
ToggleSwitch

### views (`components/views/`)
Action, Actions, ActivityView, Button, ButtonLiquidGlassText, ColorPickerIPhone, FaceID, PopupButton, Title, ToolbarIPhone

### lists — added (`components/lists/`)
ComponentHeader, Header3, IndexBar, RowButton, RowWithSwipeActions, SwipeActionsSmall

### pickers (`components/pickers/`)
PageControlBGContextDim, PickerColorSwatchesDot, ResizeIndicator, SearchEmoji, SearchFieldDark, SearchFieldValueBGContext

### progress — added (`components/progress/`)
ProgressScreen

### sheets (`components/sheets/`)
SheetsScreen

### status-bars (`components/status-bars/`)
StatusAndMenuBars

### steppers (`components/steppers/`)
Decrement2 (re-export), Increment2, SteppersScreen

### tab-bars — added (`components/tab-bars/`)
TabBarButtonIPadSymbol, TabBarButtonIPhoneSearch, TabBarButtonIPhoneText, TabBarIPhone

### text-fields — added (`components/text-fields/`)
TextFieldsScreen

### toolbars (`components/toolbars/`)
PageControl5, SearchAccessory, SearchBottom, SearchTop, SegmentedControlButton, ToolbarBottomIPhone, ToolbarTopIPhone



### menus — added (`components/menus/`)
ContextMenu, QuickActionIPhone, SectionTitleIPhone, SeparatorIPhone2

### notifications — added (`components/notifications/`)
LiquidGlassClearLight, NotificationCollapsed, NotificationCollapsedNotificationList, NotificationExpanded, NotificationsScreen, Time

### segmented-controls — added (`components/segmented-controls/`)
SegmentedControlButtons, Selection, SelectionBG, Separators, Shortcuts

### views — added (`components/views/`)
ColorPickersScreen, ToolbarIPad2

### buttons — added (`components/buttons/`)
ButtonContentArea, ButtonLiquidGlassSymbol

### home-screen — added (`components/home-screen/`)
ContextMenuDimmingOverlay, ControlsLockScreen, DockIPad, DockIPhone, DockMaterial, HomeScreenIPad, HomeScreenQuickActions, LockScreenIPad, LockScreenIPhone, HomeScreenWidgetIPad, LockScreenWidget2x2Date, LockScreenWidgetCircularOpen, LockScreenWidgetCircularOpen3, LockScreenWidgetCircularStack, LockScreenWidgetInline, LockScreenWidgetModularTable, LockScreenWidgetModularWith, LockScreenWidgetRectangularWith, LockScreenWidgetTallBody2, StatusBarAndMenuBar, System, WallpapersIPad, WallpapersIPhone

### tips — added (`components/tips/`, from TipKit (Community).fig)
IOSMiniTip, IOSMiniTipButtons, IOSMiniTipClose, IOSMiniTipLightX, IOSTipBackgroundAnnotation, IOSTipBackgroundPopover. TipKit-only tokens live in `tokens/tipkit-tokens.css`. Skipped: macOS and watchOS TipKit families (outside iPhone scope); `_Control Backgrounds` comes from the iOS kit.

### kit — full-kit import (`components/kit/`, `components/empty-states/`)
Additional families materialized from iOS and iPadOS 26 (Community).fig. Shared parts import from their existing homes.

IPhone15Pro, MenuIPadActions, MenuIPadActionsAndSubmenus, MenuIPhone, NavigationBarIPadMultitaskingCompact, ProgressBar, ProgressBarToolbar, QuickActionIPad, SectionTitleIPad, ButtonAddItem, ExamplesNavigationBarIPad, ExamplesNavigationBarIPhone, ExamplesSidebars, GroupedTableHeader, HeaderDark, HeaderDark2, HeaderLight, IPadProM413, IPhone17, IPhone17ProMax, IPhoneAir, LeadingFalseSymbol, SidebarToolbarTopTopLarge, SidebarVibrant, SplitViewSeparator, ToolbarTopRegularSizeClass, WindowGrabber, ButtonBottom48PtBack, ExamplesActionSheet, ExamplesActionSheet2, ExamplesActivityView, ExamplesActivityView2, ExamplesAlert2, ExamplesColorPicker, ExamplesColorPicker2, ExamplesContextMenu, ExamplesContextMenu2, ExamplesControlCenter, ExamplesControlCenter2, ExamplesFaceIDIPhone, ExamplesHomeScreen, ExamplesHomeScreen2, ExamplesHomeScreenQuickActions, ExamplesHomeScreenQuickActions2, ExamplesHomeScreenWidgets, ExamplesKeyboard2, ExamplesKeyboardIPad, ExamplesList, ExamplesLockScreen, ExamplesLockScreen2, ExamplesMenus, ExamplesMenus2, ExamplesNotifications, ExamplesPicker, ExamplesPicker2, ExamplesPopover, ExamplesSheetsModals, ExamplesSlider, ExamplesSteppers, ExamplesSteppers2, ExamplesTabBar, ExamplesTabBars, ExamplesTextFields, ExamplesToolbarsBottom, ExamplesToolbarsTop, ExamplesToolbarsTop2, ExamplesWindow, HomeScreenIPhone, IPadPro11M4Silver, Keyboard2, KeyboardIPadEmailLight, KeyboardIPadEmojiLight, KeyboardIPadFindAndReplace, KeyboardIPadNumbersAndSpecial, MenuItemsIPad, MenuItemsIPhone, MenuItemsSubmenusIPad, MenuItemsSubmenusIPhone, Overlay2, Overlay3, PickerButton, RowTextFieldFocused, RowTextFieldTyping, Selection2, SeparatorIPad, SheetFullScreenIPhone, StatusBarIPadFalseIPad, StatusBarIPhone, TextSelection2, AccessoryBarIPhoneFindAndReplace, SearchFieldValueBGContextBright, DateAndTimePickerCompactCollapsed (full-name aliases), ExamplesAlert, ExamplesEmptyStates, ExamplesFaceID, EmptyStates, AccessoryBarEditingToolsDark, AccessoryBarIPhoneFindDefault, AppLayoutIPad, Arrow, BackgroundIPhoneDarkElevatedDefault, BackgroundLightDefaultEmoji, BackgroundLightVibrantDefault, BackgroundLightVibrantEmoji, BackgroundNotification2Dark, BackgroundNotification2Light, BackgroundNotification3Dark, BackgroundNotification3Light, Bezel, ButtonBottom48PtBG, ButtonBottomDim1Symbol, ButtonLeft, ButtonSymbolBGContextBright, ButtonsTop1Symbol, ButtonsTop3Symbols, ButtonsTopBack, ButtonsTopSymbolPrimary, CloseButtonDarkTrue, ColorGrid, ColorPickerIPad, ControlCenterIPad, ControlCenterIPhone, ControlsCenteredIPadOnly, Day, DocumentHeader, EditMenu, ExamplesKeyboard, GroupedTableFooter, HomeIndicatorIPhonePortraitDark, HomeScreenQuickActionsIPad, HomeScreenQuickActionsIPhone, IPadMini, IPhone16, IPhone16Plus, IPhone16ProMax, IPhone17Pro, ImagesLightTallFill, IncrementIncrement, ItemsIPadDefaultTrueChevron, ItemsIPhoneDefaultFalseChevron, ItemsIPhoneFalseDefaultFalse, ItemsIPhoneFalseDisabledFalse, Keyboard, KeyboardIPadLayoutsLowercaseVibrant, KeysIPadLowercaseDefaultVibrant, KeysIPadLowercaseSpaceComma, KeysIPadSpecialVibrantLeft, KeysIPadSpecialVibrantLeft3, KeysIPadSpecialVibrantRight, KeysIPadSpecialVibrantRight3, KeysIPhone2, KeysLightVibrantSecondary, Light, LockScreenWidget2x2Clock, OverlayAlerts, PickerCalendarDayDark, Screen, Screen2, Screen3, ScrollEdgeEffectSoft, SectionTitle, SheetInspectorIPhone, ShortcutsSubmenuLight, SidebarWithMultilevelHiearchy, StatusBarIPadDarkTrue, TabBarIPad, TextSelection, ToolbarTopIPad, Week

### macOS — buttons (`macos/buttons/`)
MacButton — macOS platform layer. Same styles as iOS buttons (Liquid Glass, glass tinted, bordered prominent, bordered secondary, borderless, destructive) and sizes small/medium/large, but shape is a RoundedRectangle with 12px radius (`--mac-button-radius` in `tokens/macos-tokens.css`) instead of the capsule.

### widgets — added (`components/widgets/`)
LockScreenWidgetCircularClosed, LockScreenWidgetCircularIcon, LockScreenWidgetCircularOpen2, LockScreenWidgetCircularStack2, LockScreenWidgetCircularStack3, LockScreenWidgetClock, LockScreenWidgetModularColumns, LockScreenWidgetModularList, LockScreenWidgetModularStandard, LockScreenWidgetRectangularText, LockScreenWidgetTallBody. Card `widgets.card.html` shows these with the existing home-screen and lock-screen widgets. Skipped: Clock Big 2×2 (iPad only).

### accessory-bars — added (`components/accessory-bars/`)
AccessoryBarButtonSetTrailing, AccessoryBarEditingTools, SidebarControl, SubmenuIndicator, Suggestion, SwatchesAddButton, SwipeActions, Toolbar

### tab-bars — added (`components/tab-bars/`)
StickerSheet, Symbol, TabButtonsSidebar, TabButtonsSymbol

### misc — added (`components/misc/`)
ColorsDark, ColorsLight, DisclosureClosed, DisclosureDisabledFalse, DisclosureDisabledTrue, DisclosureOpened, IconGrid, LaunchPadIcon, MaskCircle, TabButtonsText, TextFieldDark, TitleAndDescription, Trailing

### views — added (`components/views/`)
ActionsLast, ActionsMiddle, ActionsSingle, ActivityViewIPad, ActivityViewIPhone, Airdrop, App, CompactMenu, HeaderDarkTitleSubtitle, HeaderLightTitleSubtitle, Mail, MenuCompactBackground, Messages, Notes, Reminders, TrailingDark, ViewContents

### pickers — added (`components/pickers/`)
ControlsLeading, DateAndTimePickerCompact, DateAndTimePickerWheels, DateAndTimeWheels

Shared building blocks are imported from their first home instead of being duplicated.

## Intentional Additions

The system is built from two Figma kits. All components outside `components/tips/` come from **iOS and iPadOS 26 (Community).fig**; when only **TipKit (Community).fig** is attached, those names don't match the TipKit kit, but they are intended. `components/tips/` comes from TipKit.

### From iOS and iPadOS 26 (Community).fig (370)

- AccessoryBarAutocorrectionDark
- AccessoryBarButtonSetTrailing
- AccessoryBarEditingTools
- AccessoryBarIPad
- AccessoryBarIPadButtonsDark
- AccessoryBarIPadButtonsLight
- AccessoryBarIPadFind
- AccessoryBarIPadFindDark
- AccessoryBarIPadNext
- AccessoryBarIPadNextDark
- AccessoryBarIPadPrevious
- AccessoryBarIPadPreviousDark
- AccessoryBarIPadReplace
- AccessoryBarIPadReplaceDark
- AccessoryBarIPhoneFind
- AccessoryBarIPhoneFindAnd
- AccessoryBarIPhoneFindDark
- AccessoryBarIPhoneNextDark
- AccessoryBarIPhonePreviousDark
- AccessoryBarIPhoneReplace
- AccessoryBarIPhoneReplaceDark
- AccessoryBarIPhoneToolbar
- AccessoryBarURL
- AccessoryBarWebForm
- Action
- ActionSheet
- ActionSheetButtonsDark
- Actions
- ActionsLast
- ActionsMiddle
- ActionsSingle
- ActivityView
- ActivityViewIPad
- ActivityViewIPhone
- AdditionalNotifications
- Airdrop
- Alert
- App
- AppIconIPad
- AppIconIPhone
- AppIconOptions
- AppIconRowIPhone
- AppStore
- Arrows
- Autocorrection
- BG
- Background
- BackgroundIPad
- BackgroundIPhone
- Badge
- BottomButtons
- Button
- ButtonBack
- ButtonBack2
- ButtonBackgroundOverDarkBackground
- ButtonBackgroundOverDarkBackground2
- ButtonBottom
- ButtonContentArea
- ButtonDone
- ButtonHorizontalStack
- ButtonLiquidGlass
- ButtonLiquidGlassNotTinted
- ButtonLiquidGlassSymbol
- ButtonLiquidGlassText
- ButtonLiquidGlassTinted
- ButtonSymbol
- ButtonSymbol2
- ButtonSymbol3
- ButtonText
- ButtonText2
- ButtonVerticalStack
- Buttons
- Buttons2
- ButtonsTop
- ButtonsTopSheets
- CardTop
- Checkmark
- Chevron
- CloseButton
- CloseButton2
- ColorPickerIPhone
- ColorPickersScreen
- ColorsDark
- ColorsLight
- CompactMenu
- ComponentHeader
- Contact
- Contents
- ContentsDisclosure
- ContextMenu
- ContextMenuDimmingOverlay
- ControlsBGIPad
- ControlsBGIPhone
- ControlsIPad1x1
- ControlsIPad2x1
- ControlsIPad2x2
- ControlsIPhone1x1
- ControlsIPhone2x1
- ControlsIPhone2x2
- ControlsLeading
- ControlsLockScreen
- ControlsTrailing
- CustomIcon
- DateAndTimeCollapsed
- DateAndTimeCompactCollapsed
- DateAndTimeCompactCollapsed2
- DateAndTimePickerCompact
- DateAndTimePickerWheels
- DateAndTimePickers
- DateAndTimeWheels
- Decrement
- Decrement2
- Description
- Disclosure
- DisclosureClosed
- DisclosureDisabledFalse
- DisclosureDisabledTrue
- DisclosureOpened
- Disclsoure
- DockIPad
- DockIPhone
- DockMaterial
- EditButtonsDark
- EditButtonsLight
- EditMenuItem
- EmojiSearchField
- EmojiTabs
- ExamplesSidebar
- FaceID
- FieldBG
- FieldFind
- FieldReplace
- Fill
- Grabber
- Grabber2
- Grabber3
- Gradient
- HSQAActions
- HSQAAppIconDark
- HSQAAppIconLight
- HSQABG
- HSQAWidgetDark
- HSQAWidgetLight
- HSQAWidgetRow
- Header
- Header3
- HeaderDarkTitleSubtitle
- HeaderLightTitleSubtitle
- HeaderTrailingAccessories
- HomeIndicator
- HomeScreenIPad
- HomeScreenQuickActions
- HomeScreenWidgetIPad
- HomeScreenWidgetIPhone
- IPadProM411
- IPhone16Pro
- IconGrid
- ImagesRegular
- ImagesTall
- Increment
- Increment2
- IndexBar
- KeyboardIPadLayouts
- KeyboardIPadLayoutsDark
- KeyboardIPadLayoutsDarkVibrant
- KeyboardIPhoneLayouts
- KeyboardIPhoneLayoutsDark
- KeysIPadCommand
- KeysIPadEnterDark
- KeysIPadEnterDarkVibrant
- KeysIPadLowercase
- KeysIPadLowercaseDark
- KeysIPadLowercaseDarkVibrant
- KeysIPadReturn
- KeysIPadSpecialDark
- KeysIPadSpecialDarkVibrant
- KeysIPadUppercaseDark
- KeysIPadUppercaseDarkVibrant
- KeysIPhone
- KeysIPhoneLowercaseDark
- KeysIPhoneNumeric
- KeysIPhoneSpace
- KeysIPhoneSpecialDark
- KeysIPhoneUppercaseDark
- KeysNumbericDark
- KeysReturnDark
- KeysSpaceDark
- Knob
- Label
- LabelSymbolDefault
- LabelSymbolDefault2
- LabelSymbolPreferred
- LabelTextDefault
- LabelTextPreferred
- LaunchPad
- LaunchPadIcon
- LeadingIPhone
- LiquidGlassClearLight
- LiquidGlassRegularLarge
- LiquidGlassRegularMedium
- LiquidGlassRegularSmall
- LiquidGlassRegularSmall3
- LockScreenIPad
- LockScreenIPhone
- LockScreenWidget2x2Date
- LockScreenWidgetCircularClosed
- LockScreenWidgetCircularIcon
- LockScreenWidgetCircularOpen
- LockScreenWidgetCircularOpen2
- LockScreenWidgetCircularOpen3
- LockScreenWidgetCircularStack
- LockScreenWidgetCircularStack2
- LockScreenWidgetCircularStack3
- LockScreenWidgetClock
- LockScreenWidgetInline
- LockScreenWidgetModularColumns
- LockScreenWidgetModularList
- LockScreenWidgetModularStandard
- LockScreenWidgetModularTable
- LockScreenWidgetModularWith
- LockScreenWidgetRectangularText
- LockScreenWidgetRectangularWith
- LockScreenWidgetTallBody
- LockScreenWidgetTallBody2
- Lollipops
- Mail
- MaskCircle
- Materials
- MaterialsModeOptions
- MenuBarItem
- MenuCompactBackground
- MenuIndicator
- MenuItemDark
- Messages
- ModeLabel
- Next
- Notes
- NotificationBGComposed
- NotificationBackgroundsStack
- NotificationBannerBG
- NotificationCollapsed
- NotificationCollapsedNotificationList
- NotificationExpanded
- NotificationMaterials
- NotificationMaterialsModeOptionsLight
- NotificationMaterialsModeOptionsLight2
- NotificationMaterialsModeOptionsLight3
- NotificationMenuBG
- NotificationsScreen
- Overlay
- PageControl
- PageControl2
- PageControl3
- PageControl5
- PageControlBGContextDim
- PageControlPlatterLight
- PageDots
- PageDotsAnimated
- Picker
- PickerColorSwatchesDot
- PopoversIPadOnly
- PopupButton
- Previous
- ProgressIndicator
- ProgressScreen
- Prompt
- QuickActionIPhone
- Reminders
- ReplaceButton
- ResizeIndicator
- Row
- RowButton
- RowTextFieldValueEntered
- RowWithSwipeActions
- SearchAccessory
- SearchBottom
- SearchEmoji
- SearchField
- SearchField2
- SearchFieldDark
- SearchFieldValueBGContext
- SearchTop
- SectionHeader
- SectionHeader2
- SectionTitleIPhone
- SegmentedControl
- SegmentedControlButton
- SegmentedControlButtons
- Selection
- SelectionBG
- Separator
- Separator3
- SeparatorIPhone2
- Separators
- SheetIPad
- SheetsScreen
- Shortcuts
- Sidebar
- SidebarControl
- SidebarEditButton
- SidebarLeading
- SidebarRow
- SidebarSearchField
- SidebarSearchField2
- SidebarToolbar
- SidebarTrailing
- Sliders
- StatusAndMenuBars
- StatusBarAndMenuBar
- StatusBarIPhone2
- Stepper
- SteppersScreen
- StickerSheet
- SubmenuIndicator
- SubtitleCaption
- SubtitleSubheadline
- Suggestion
- Swatch
- SwatchGrid
- SwatchLightAndDark
- SwatchesAddButton
- SwipeActions
- SwipeActionsLarge
- SwipeActionsSmall
- Symbol
- Symbol2
- System
- SystemIcons
- TabBarButtonIPadSymbol
- TabBarButtonIPadText
- TabBarButtonIPhoneSearch
- TabBarButtonIPhoneText
- TabBarIPhone
- TabButtonsSidebar
- TabButtonsSymbol
- TabButtonsText
- TextField2
- TextFieldBackground
- TextFieldDark
- TextFieldsScreen
- Ticks
- Time
- Title
- TitleAndDescription
- TitleBody
- TitleDefaultCompact
- TitleLargeTitle
- TitleSubheadline
- ToggleSwitch
- Toolbar
- ToolbarBottomIPad
- ToolbarBottomIPhone
- ToolbarButtonSymbol
- ToolbarButtonText
- ToolbarIPad2
- ToolbarIPhone
- ToolbarTopIPhone
- ToolbarTopSheet
- Track
- Trailing
- Trailing2
- TrailingDark
- TrailingDisclosure
- TrailingLight
- ViewContents
- WallpapersIPad
- WallpapersIPhone
- Window
- WindowControls
- WindowResize

### Full-kit import (74)

- ExamplesAlert
- ExamplesEmptyStates
- ExamplesFaceID
- AccessoryBarIPhoneFindAndReplace
- SearchFieldValueBGContextBright
- DateAndTimePickerCompactCollapsed
- EmptyStates
- IPhone15Pro
- MenuIPadActions
- MenuIPadActionsAndSubmenus
- MenuIPhone
- NavigationBarIPadMultitaskingCompact
- ProgressBar
- ProgressBarToolbar
- QuickActionIPad
- SectionTitleIPad
- ButtonAddItem
- ExamplesNavigationBarIPad
- ExamplesNavigationBarIPhone
- ExamplesSidebars
- GroupedTableHeader
- HeaderDark
- HeaderDark2
- HeaderLight
- IPadProM413
- IPhone17
- IPhone17ProMax
- IPhoneAir
- LeadingFalseSymbol
- SidebarToolbarTopTopLarge
- SidebarVibrant
- SplitViewSeparator
- ToolbarTopRegularSizeClass
- WindowGrabber
- ButtonBottom48PtBack
- ExamplesActionSheet
- ExamplesActionSheet2
- ExamplesActivityView
- ExamplesActivityView2
- ExamplesAlert2
- ExamplesColorPicker
- ExamplesColorPicker2
- ExamplesContextMenu
- ExamplesContextMenu2
- ExamplesControlCenter
- ExamplesControlCenter2
- ExamplesFaceIDIPhone
- ExamplesHomeScreen
- ExamplesHomeScreen2
- ExamplesHomeScreenQuickActions
- ExamplesHomeScreenQuickActions2
- ExamplesHomeScreenWidgets
- ExamplesKeyboard2
- ExamplesKeyboardIPad
- ExamplesList
- ExamplesLockScreen
- ExamplesLockScreen2
- ExamplesMenus
- ExamplesMenus2
- ExamplesNotifications
- ExamplesPicker
- ExamplesPicker2
- ExamplesPopover
- ExamplesSheetsModals
- ExamplesSlider
- ExamplesSteppers
- ExamplesSteppers2
- ExamplesTabBar
- ExamplesTabBars
- ExamplesTextFields
- ExamplesToolbarsBottom
- ExamplesToolbarsTop
- ExamplesToolbarsTop2
- ExamplesWindow
- HomeScreenIPhone
- IPadPro11M4Silver
- Keyboard2
- KeyboardIPadEmailLight
- KeyboardIPadEmojiLight
- KeyboardIPadFindAndReplace
- KeyboardIPadNumbersAndSpecial
- MenuItemsIPad
- MenuItemsIPhone
- MenuItemsSubmenusIPad
- MenuItemsSubmenusIPhone
- Overlay2
- Overlay3
- PickerButton
- RowTextFieldFocused
- RowTextFieldTyping
- Selection2
- SeparatorIPad
- SheetFullScreenIPhone
- StatusBarIPadFalseIPad
- StatusBarIPhone
- TextSelection2
- AccessoryBarEditingToolsDark
- AccessoryBarIPhoneFindDefault
- AppLayoutIPad
- Arrow
- BackgroundIPhoneDarkElevatedDefault
- BackgroundLightDefaultEmoji
- BackgroundLightVibrantDefault
- BackgroundLightVibrantEmoji
- BackgroundNotification2Dark
- BackgroundNotification2Light
- BackgroundNotification3Dark
- BackgroundNotification3Light
- Bezel
- ButtonBottom48PtBG
- ButtonBottomDim1Symbol
- ButtonLeft
- ButtonSymbolBGContextBright
- ButtonsTop1Symbol
- ButtonsTop3Symbols
- ButtonsTopBack
- ButtonsTopSymbolPrimary
- CloseButtonDarkTrue
- ColorGrid
- ColorPickerIPad
- ControlCenterIPad
- ControlCenterIPhone
- ControlsCenteredIPadOnly
- Day
- DocumentHeader
- EditMenu
- ExamplesKeyboard
- GroupedTableFooter
- HomeIndicatorIPhonePortraitDark
- HomeScreenQuickActionsIPad
- HomeScreenQuickActionsIPhone
- IPadMini
- IPhone16
- IPhone16Plus
- IPhone16ProMax
- IPhone17Pro
- ImagesLightTallFill
- IncrementIncrement
- ItemsIPadDefaultTrueChevron
- ItemsIPhoneDefaultFalseChevron
- ItemsIPhoneFalseDefaultFalse
- ItemsIPhoneFalseDisabledFalse
- Keyboard
- KeyboardIPadLayoutsLowercaseVibrant
- KeysIPadLowercaseDefaultVibrant
- KeysIPadLowercaseSpaceComma
- KeysIPadSpecialVibrantLeft
- KeysIPadSpecialVibrantLeft3
- KeysIPadSpecialVibrantRight
- KeysIPadSpecialVibrantRight3
- KeysIPhone2
- KeysLightVibrantSecondary
- Light
- LockScreenWidget2x2Clock
- OverlayAlerts
- PickerCalendarDayDark
- Screen
- Screen2
- Screen3
- ScrollEdgeEffectSoft
- SectionTitle
- SheetInspectorIPhone
- ShortcutsSubmenuLight
- SidebarWithMultilevelHiearchy
- StatusBarIPadDarkTrue
- TabBarIPad
- TextSelection
- ToolbarTopIPad
- Week

### Full-name aliases (round 2)
- AccessoryBarButtons — `_Accessory Bar - Buttons` → AccessoryBarIPadButtonsLight
- IPadOptions — `_iPad Options` → AppIconIPad
- IPhoneOptions — `_iPhone Options` → AppIconIPhone
- MenuItemInset — `_Menu Item - Inset` → MenuItemsIPhone
- SelectedButton — `_Selected Button` → SelectionBG
- ExamplesMenuIPhone — `Examples/Menu - iPhone` → ExamplesMenus
- ExamplesMultitaskingIPad — `Examples/Multitasking - iPad` → ExamplesWindow
- ExamplesToolbar — `Examples/Toolbar` → ExamplesToolbarsTop
- IPadPro11M4 — `iPad Pro - 11" (M4)` → IPadProM411
- NavigationBarIPadRegularSizeClass — `Navigation Bar - iPad (Regular Size Class)` → ToolbarTopRegularSizeClass
- NavigationBarIPhoneCompactSizeClass — `Navigation Bar - iPhone (Compact Size Class)` → ToolbarTopIPhone
- PopoverIPadOnly — `Popover (iPad Only)` → PopoversIPadOnly
- KeysLightVibrantOn — `_Keys/Light/Vibrant/On` → KeysIPhoneLightOn
- KeysLowercaseVibrant — `_Keys/Lowercase/Vibrant` → KeysIPadLowercaseDefaultVibrant
- KeysNumberic2LinesVibrant — `_Keys/Numberic/2 Lines/Vibrant` → KeysIPhoneNumeric
- KeysNumbericDeleteVibrant — `_Keys/Numberic/Delete/Vibrant` → KeysIPhoneNumeric
- KeysReturnLightOffVibrant — `_Keys/Return/Light/Off/Vibrant` → KeysLightVibrantSecondary
- KeysSpaceDefaultVibrant — `_Keys/Space/Default/Vibrant` → KeysIPhoneSpecialSpaceVibrant
- KeysSpaceEmailVibrant — `_Keys/Space/Email/Vibrant` → KeysIPhoneSpace
- KeysSpaceURLVibrant — `_Keys/Space/URL/Vibrant` → KeysIPhoneSpace
- OpacityMeter — `_Opacity Meter` → Track
- SliderTrackFilled — `_Slider / Track - Filled` → Fill
- SliderTrackUnfilled — `_Slider / Track - Unfilled` → Track
- SwatchesIPhone — `_Swatches - iPhone` → SwatchGrid
- ToggleControl — `_Toggle Control` → ToggleSwitch
- TopStyleModal — `_Top Style / Modal` → ToolbarTopSheet
- TopStyleModalStack — `_Top Style / Modal Stack` → ToolbarTopSheet
- BezelsIPadPro116thGenerationSpaceGray — `Bezels/iPad Pro - 11" (6th generation)/Space Gray` → IPadProM411
- Books — `Books` → SystemIcons
- Calculator — `Calculator` → SystemIcons
- Calendar — `Calendar` → SystemIcons
- Camera — `Camera` → SystemIcons
- Compass — `Compass` → SystemIcons
- Contacts — `Contacts` → SystemIcons
- ColorPickerDarkIPad — `Color Picker/Dark/iPad` → ColorPickerIPad
- ColorPickerDarkIPhone — `Color Picker/Dark/iPhone` → ColorPickerIPhone
- DateAndTimeCompactExpanded — `Date and Time - Compact - Expanded` → DateAndTimePickerCompact
- DateAndTimeInlineExpanded — `Date and Time - Inline - Expanded` → DateAndTimePickers

### macOS platform layer (1)

- MacButton

TipKit skips: `_Control Backgrounds` (the iOS 26 kit's control backgrounds are used instead), the macOS families (`macOS`, `macOS Mini Tip`, `macOS Mini Tip/_Buttons`, `macOS/_Tip Background/Annotation`, `macOS/_Tip Background/Popover`) and the watchOS families (`watchOS Mini Tip`, `watchOS/_Tip Background/Annotation`, `watchOS/_Close`, `watchOS/_Tip`, the `watchOS Mini Tip/Annotation View/*` and `watchOS Mini Tip/Popover View/*` views) because the system is iPhone-only. `_Component Header` is a Figma layout helper. The two `iOS Mini Tip / Light / x / Content / …` symbols are combined into `IOSMiniTipLightX`.

## Intentionally Skipped Families

The design-system check counts **1386** component families for the attached kit: **255 variant sets** plus **1172 standalone symbols** (mostly single variants such as `Mode=Dark, State=Unselected`, `Type=System`, individual key caps and per-size watch faces). Every family the check names individually is now built or aliased under its exact Figma name, and all 97 watchOS 26 families are built in `watchos/`. Standalone variant symbols are additionally exported by name (see **Variant exports**), so every variant is addressable directly as well as through its parent component's `type` / `mode` / `state` / `size` props.

**Scope decision (user-confirmed): only families used by iPhone screens are built.** The implemented components cover every iPhone-facing page of the kit: buttons, toggles, segmented controls, sliders, steppers, progress, text fields, alerts, action sheets, activity views, tab bars, toolbars, search bars, sheets, lists, keyboards, pickers, page controls, widgets, context menus, empty states, notifications, app icons, bezels, status bars and materials.

Skipped on purpose:
- **iPad-only and macOS-style families** (iPad keyboards beyond the dark set, iPad sidebars/windows variants, `(iPad Only)` Lock Screen widgets, menu bar items): out of scope for the iPhone app.
- **Variant symbols** (the ~1,825 standalone entries such as `Mode=Dark, State=Default`, `Dots=8+, Selection=3`, individual key caps): these are variants of families already built and are reached through each component's `mode` / `state` / `type` props, not separate exports.
- **Removed at user request:** the Widgets page (standalone Lock Screen / Home Screen widget set — only the widgets the Lock Screen and iPad Home Screen compositions need are kept, inside `components/home-screen/`), the calendar picker (`_Pickers` calendar section, `_Day`, `_Picker/Calendar/Day/Dark`), and Empty States.
- **Kit scaffolding** (`_Component Header`, `_Document Header`, `_Mode Label`, color/icon grids, cover and change-log pages): documentation chrome for the Figma file, not app UI.
- **Example compositions** (`Examples/Alert`, `Examples/Empty States`, and the rest of the `Examples/*` sets): demo screens assembled from components that are already built; not reusable primitives. Exception: `Examples/Sidebar` (iPad) is built at user request as `ExamplesSidebar`.

Ask to extend scope (e.g. iPad) and the remaining families can be materialized in batches.

---

## Tokens

130 Figma Variables extracted across 5 collections:
- **Colors** (90 variables): Accents, Backgrounds, Labels, Fills, Grays, Separators, Overlays, Miscellaneous
- **Kit** (27 variables): Component/subcomponent fills and strokes, sheet radii, status bar dimensions
- **Liquid Glass** (7 variables): Frost, depth, splay, refraction, opacity parameters
- **Ungrouped** (5 variables): Font references, caption metrics
- **Icons** (1 variable): Mode string

All tokens support Light, Dark, Increased Contrast Light, Increased Contrast Dark, and Accessible modes.

---

## File Index

```
styles.css              — Global CSS entry (imports only)
tokens/
  fig-tokens.css        — 130 Figma Variables as CSS custom properties
  fig-typography.css    — (empty — text styles not defined as Figma styles)
  typography.css        — SF Pro type scale with utility classes
assets/
  app-icon-light.png    — ZhareHub app icon (light)
  app-icon-dark.png     — ZhareHub app icon (dark)
guidelines/
  accent-colors.html    — Accent color swatches
  gray-scale.html       — Gray scale specimens
  semantic-colors.html  — Labels, backgrounds, fills
  fills-overlays.html   — Fill and overlay tokens
  type-scale.html       — Full iOS type scale
  type-weights.html     — Font weight specimens
  app-icon.html         — Brand mark card
components/
  buttons/              — Button components + card
  toggles/              — Toggle switch + card
  segmented-controls/   — Segmented control + card
  sliders/              — Slider components + card
  progress/             — Progress indicator + card
  text-fields/          — Text field components + card
  alerts/               — Alert and action sheet + card
  tab-bars/             — Tab bar buttons + card
  navigation/           — Sheets, status bar, toolbar + card
  lists/                — List row components + card
  keyboards/            — Keyboard layouts + card
  materials/            — Blur materials + card
  surfaces/             — Pickers, sidebar, window + card
  menus/                — Menu items + card
  views/                — Activity view, color picker, Face ID + card
  notifications/        — Notification backgrounds + card
  app-icons/            — App icon shapes and badges + card
  bezels/               — Device bezels + card
  toolbars/             — Toolbar card
thumbnail.html          — Design system thumbnail
readme.md               — This file
SKILL.md                — Agent skill definition
```


### Lists, materials & tab bar (round)
- RowNew, RowButtonNew, RowTextField, RowTextFieldNew, RowWithSwipeActionsNew
- ScrollEdgeEffectHard, TabBarButtonIPhoneTextDark, NavigationBarIPadMultitaskingCompactSizeClass
- Full-name aliases: TextField, SeparatorIPhone, StatusBarAndMenuBarIPad, TabBarIPadXXXXXXXX, TabBarIPhoneXxx
- Full-name aliases: ToolbarIPad, TopButtons, BackgroundIPhoneDarkElevatedDefaultDefault, ItemsIPhoneFalseDefaultFalseLight, ButtonBottom48PtBGContextDimBright6Symbols
- Full-name aliases: ItemsIPhoneFalseDisabledFalseLight, KeyboardIPhoneLayoutsLettersLowercaseVibrant, KeysIPhoneLightOn, KeysIPadEnterLightVibrantBlue, KeysIPadLowercaseSpaceCommaPeriodVibrant

### Intentionally skipped kit families
- `x`, `xx`, `XXX` — unnamed scratch layers in the source Figma kit with no design content; not real components.

### Full-name aliases (auto)
Thin aliases that re-export existing components under their exact Figma family names:
- DateAndTimeCompactCollapsedTime
- ButtonBackgroundOverDarkBackgroundBrightTrue
- IOSMiniTipLightXContentTextOnly
- NotificationMaterialsModeOptionsLightBottom
- NotificationMaterialsModeOptionsLightMiddle
- NotificationMaterialsModeOptionsLightTop
- LockScreenWidgetModularWithBar
- LockScreenWidgetRectangularWithChart
- LockScreenWidgetCircularStack2RowsIconAndLabel
- LockScreenWidgetTallBodyWithIcon
- LockScreenWidgetRectangularTextGauge
- LockScreenWidgetCircularClosedGauge
- LockScreenWidgetCircularStack2RowsLabels
- ButtonBottom48PtBGContextDimBright1Symbol
- KeyboardIPadNumbersAndSpecialCharactersLight
- LockScreenWidget2x2ClockBigIPadOnly
- ButtonBackgroundOverDarkBackgroundBrightFalse
- DateAndTimeCompactCollapsedDate
- KeysIPadSpecialVibrantLeftDictation
- KeysIPadSpecialVibrantLeftText
- KeysIPadSpecialVibrantRightKeyboardClose
- LockScreenWidgetCircularStack3Rows
- LockScreenWidget2x2DateIPadOnly
- LockScreenWidgetCircularOpenGauge3
- KeyboardIPadFindAndReplaceLight
- SidebarToolbarTopTopLargeTitle
- StatusBarIPadFalseIPadPro11M4
- LockScreenWidgetCircularOpenGauge
- ButtonSymbolBGContextBrightDefaultDim
- StatusBarIPadDarkTrueIPadPro13M4
- LockScreenWidgetCircularOpenGauge2
- KeysIPadSpecialVibrantRightText

### Keyboard keys (light vibrant)
- KeysLightVibrantNormal
- KeysIPadSpecialVibrantLeftTextSelected
- KeysIPadSpecialVibrantRightTextSelected
- KeysIPhoneSpecialShiftVibrant
- KeysIPhoneSpecialSpaceVibrant


---

## Variant exports

Every Figma variant of a multi-variant component is also exported by name, so standalone variant symbols in the kit (e.g. `Type=Primary Floating`) map to a real component. Each `<Component>Variants` file lives in `components/variants/`, `watchos/variants/` or `macos/variants/`; the `<Component>Variants` export renders all variants side by side, and each `<Component><Variant>` export is the parent component with that variant's props preset (any prop can still be overridden).

### Components (variants)
- AccessoryBarAutocorrectionDarkVariants: AccessoryBarAutocorrectionDarkSelection3, AccessoryBarAutocorrectionDarkSelection2, AccessoryBarAutocorrectionDarkSelection1, AccessoryBarAutocorrectionDarkSelectionNone
- AccessoryBarIPadVariants: AccessoryBarIPadModeDark, AccessoryBarIPadModeLight
- AccessoryBarIPadButtonsDarkVariants: AccessoryBarIPadButtonsDarkEnabledFalse, AccessoryBarIPadButtonsDarkEnabledTrue
- AccessoryBarIPadButtonsLightVariants: AccessoryBarIPadButtonsLightEnabledFalse, AccessoryBarIPadButtonsLightEnabledTrue
- AccessoryBarIPadFindVariants: AccessoryBarIPadFindStateTextEntered, AccessoryBarIPadFindStateTyping, AccessoryBarIPadFindStateFocused, AccessoryBarIPadFindStateDefault
- AccessoryBarIPadFindDarkVariants: AccessoryBarIPadFindDarkStateTextEntered, AccessoryBarIPadFindDarkStateTyping, AccessoryBarIPadFindDarkStateFocused, AccessoryBarIPadFindDarkStateDefault
- AccessoryBarIPadNextVariants: AccessoryBarIPadNextEnabledFalse, AccessoryBarIPadNextEnabledTrue
- AccessoryBarIPadNextDarkVariants: AccessoryBarIPadNextDarkEnabledFalse, AccessoryBarIPadNextDarkEnabledTrue
- AccessoryBarIPadPreviousVariants: AccessoryBarIPadPreviousEnabledFalse, AccessoryBarIPadPreviousEnabledTrue
- AccessoryBarIPadPreviousDarkVariants: AccessoryBarIPadPreviousDarkEnabledFalse, AccessoryBarIPadPreviousDarkEnabledTrue
- AccessoryBarIPadReplaceVariants: AccessoryBarIPadReplaceStateTyping, AccessoryBarIPadReplaceStateFocused, AccessoryBarIPadReplaceStateEmpty
- AccessoryBarIPadReplaceDarkVariants: AccessoryBarIPadReplaceDarkStateTyping, AccessoryBarIPadReplaceDarkStateFocused, AccessoryBarIPadReplaceDarkStateEmpty
- AccessoryBarIPhoneFindVariants: AccessoryBarIPhoneFindModeDark, AccessoryBarIPhoneFindModeLight
- AccessoryBarIPhoneFindAndVariants: AccessoryBarIPhoneFindAndModeDark, AccessoryBarIPhoneFindAndModeLight
- AccessoryBarIPhoneFindDarkVariants: AccessoryBarIPhoneFindDarkStateTextEntered, AccessoryBarIPhoneFindDarkStateTyping, AccessoryBarIPhoneFindDarkStateFocused, AccessoryBarIPhoneFindDarkStateDefault
- AccessoryBarIPhoneNextDarkVariants: AccessoryBarIPhoneNextDarkEnabledFalse, AccessoryBarIPhoneNextDarkEnabledTrue
- AccessoryBarIPhonePreviousDarkVariants: AccessoryBarIPhonePreviousDarkEnabledFalse, AccessoryBarIPhonePreviousDarkEnabledTrue
- AccessoryBarIPhoneReplaceVariants: AccessoryBarIPhoneReplaceStateTyping, AccessoryBarIPhoneReplaceStateFocused, AccessoryBarIPhoneReplaceStateEmpty
- AccessoryBarIPhoneReplaceDarkVariants: AccessoryBarIPhoneReplaceDarkStateTyping, AccessoryBarIPhoneReplaceDarkStateFocused, AccessoryBarIPhoneReplaceDarkStateEmpty
- AccessoryBarIPhoneToolbarVariants: AccessoryBarIPhoneToolbarModeDarkType6Symbols, AccessoryBarIPhoneToolbarModeDarkType5Symbols, AccessoryBarIPhoneToolbarModeDarkType4Symbols, AccessoryBarIPhoneToolbarModeDarkType3Symbols, AccessoryBarIPhoneToolbarModeDarkType2Symbols, AccessoryBarIPhoneToolbarModeDarkType1Symbol, AccessoryBarIPhoneToolbarModeLightType6Symbols, AccessoryBarIPhoneToolbarModeLightType5Symbols, AccessoryBarIPhoneToolbarModeLightType4Symbols, AccessoryBarIPhoneToolbarModeLightType3Symbols, AccessoryBarIPhoneToolbarModeLightType2Symbols, AccessoryBarIPhoneToolbarModeLightType1Symbol
- AccessoryBarURLVariants: AccessoryBarURLModeDark, AccessoryBarURLModeLight
- AccessoryBarWebFormVariants: AccessoryBarWebFormModeDark, AccessoryBarWebFormModeLight
- ActionVariants: ActionModeDark, ActionModeLight
- ActionsVariants: ActionsModeDark, ActionsModeLight
- ActionSheetButtonsDarkVariants: ActionSheetButtonsDarkTypeDestructive, ActionSheetButtonsDarkTypeDisabled, ActionSheetButtonsDarkTypeDefault
- ActivityViewIPadVariants: ActivityViewIPadModeDark, ActivityViewIPadModeLight
- ActivityViewIPhoneVariants: ActivityViewIPhoneModeDark, ActivityViewIPhoneModeLight
- AdditionalNotificationsVariants: AdditionalNotificationsModeDarkElevated, AdditionalNotificationsModeDark, AdditionalNotificationsModeLight
- AlertVariants: AlertTypeSideBySide, AlertTypeStacked
- AppIconIPadVariants: AppIconIPadTypeCustom, AppIconIPadTypeSystem
- AppIconIPhoneVariants: AppIconIPhoneTypeCustom, AppIconIPhoneTypeSystem
- AppIconOptionsVariants: AppIconOptionsIconWeatherModeLight, AppIconOptionsIconWeatherModeDark, AppIconOptionsIconWeatherModeTinted, AppIconOptionsIconWatchModeLight, AppIconOptionsIconWatchModeDark, AppIconOptionsIconWatchModeTinted, AppIconOptionsIconWalletModeLight, AppIconOptionsIconWalletModeDark, AppIconOptionsIconWalletModeTinted, AppIconOptionsIconVoiceMemosModeLight, AppIconOptionsIconVoiceMemosModeDark, AppIconOptionsIconVoiceMemosModeTinted, AppIconOptionsIconTVModeLight, AppIconOptionsIconTVModeDark, AppIconOptionsIconTVModeTinted, AppIconOptionsIconTranslateModeLight, AppIconOptionsIconTranslateModeDark, AppIconOptionsIconTranslateModeTinted, AppIconOptionsIconTipsModeLight, AppIconOptionsIconTipsModeDark, AppIconOptionsIconTipsModeTinted, AppIconOptionsIconStocksModeLight, AppIconOptionsIconStocksModeDark, AppIconOptionsIconStocksModeTinted, AppIconOptionsIconShortcutsModeLight, AppIconOptionsIconShortcutsModeDark, AppIconOptionsIconShortcutsModeTinted, AppIconOptionsIconSettingsModeLight, AppIconOptionsIconSettingsModeDark, AppIconOptionsIconSettingsModeTinted, AppIconOptionsIconSafariModeLight, AppIconOptionsIconSafariModeDark, AppIconOptionsIconSafariModeTinted, AppIconOptionsIconRemindersModeLight, AppIconOptionsIconRemindersModeDark, AppIconOptionsIconRemindersModeTinted, AppIconOptionsIconPodcastsModeLight, AppIconOptionsIconPodcastsModeDark, AppIconOptionsIconPodcastsModeTinted, AppIconOptionsIconPhotosModeLight, AppIconOptionsIconPhotosModeDark, AppIconOptionsIconPhotosModeTinted, AppIconOptionsIconPhoneModeLight, AppIconOptionsIconPhoneModeDark, AppIconOptionsIconPhoneModeTinted, AppIconOptionsIconPagesModeLight, AppIconOptionsIconPagesModeDark, AppIconOptionsIconPagesModeTinted, AppIconOptionsIconNumberModeLight, AppIconOptionsIconNumberModeDark, AppIconOptionsIconNumberModeTinted, AppIconOptionsIconNotesModeLight, AppIconOptionsIconNotesModeDark, AppIconOptionsIconNotesModeTinted, AppIconOptionsIconNewsModeLight, AppIconOptionsIconNewsModeDark, AppIconOptionsIconNewsModeTinted, AppIconOptionsIconMusicModeLight, AppIconOptionsIconMusicModeDark, AppIconOptionsIconMusicModeTinted, AppIconOptionsIconMessagesModeLight, AppIconOptionsIconMessagesModeDark, AppIconOptionsIconMessagesModeTinted, AppIconOptionsIconMeasureModeLight, AppIconOptionsIconMeasureModeDark, AppIconOptionsIconMeasureModeTinted, AppIconOptionsIconMapsModeLight, AppIconOptionsIconMapsModeDark, AppIconOptionsIconMapsModeTinted, AppIconOptionsIconMailModeLight, AppIconOptionsIconMailModeDark, AppIconOptionsIconMailModeTinted, AppIconOptionsIconKeynoteModeLight, AppIconOptionsIconKeynoteModeDark, AppIconOptionsIconKeynoteModeTinted, AppIconOptionsIconITunesStoreModeLight, AppIconOptionsIconITunesStoreModeDark, AppIconOptionsIconITunesStoreModeTinted, AppIconOptionsIconIMovieModeLight, AppIconOptionsIconIMovieModeDark, AppIconOptionsIconIMovieModeTinted, AppIconOptionsIconHomeModeLight, AppIconOptionsIconHomeModeDark, AppIconOptionsIconHomeModeTinted, AppIconOptionsIconHealthModeLight, AppIconOptionsIconHealthModeDark, AppIconOptionsIconHealthModeTinted, AppIconOptionsIconGarageBandModeLight, AppIconOptionsIconGarageBandModeDark, AppIconOptionsIconGarageBandModeTinted, AppIconOptionsIconFreeformModeLight, AppIconOptionsIconFreeformModeDark, AppIconOptionsIconFreeformModeTinted, AppIconOptionsIconFitnessModeLight, AppIconOptionsIconFitnessModeDark, AppIconOptionsIconFitnessModeTinted, AppIconOptionsIconFindMyModeLight, AppIconOptionsIconFindMyModeDark, AppIconOptionsIconFindMyModeTinted, AppIconOptionsIconFilesModeLight, AppIconOptionsIconFilesModeDark, AppIconOptionsIconFilesModeTinted, AppIconOptionsIconFaceTimeModeLight, AppIconOptionsIconFaceTimeModeDark, AppIconOptionsIconFaceTimeModeTinted, AppIconOptionsIconContactsModeLight, AppIconOptionsIconContactsModeDark, AppIconOptionsIconContactsModeTinted, AppIconOptionsIconCompassModeLight, AppIconOptionsIconCompassModeDark, AppIconOptionsIconCompassModeTinted, AppIconOptionsIconClockModeLight, AppIconOptionsIconClockModeDark, AppIconOptionsIconClockModeTinted, AppIconOptionsIconCalculatorModeLight, AppIconOptionsIconCalculatorModeDark, AppIconOptionsIconCalculatorModeTinted, AppIconOptionsIconCameraModeLight, AppIconOptionsIconCameraModeDark, AppIconOptionsIconCameraModeTinted, AppIconOptionsIconCalendarModeLight, AppIconOptionsIconCalendarModeDark, AppIconOptionsIconCalendarModeTinted, AppIconOptionsIconBooksModeLight, AppIconOptionsIconBooksModeDark, AppIconOptionsIconBooksModeTinted, AppIconOptionsIconAppStoreModeLight, AppIconOptionsIconAppStoreModeDark, AppIconOptionsIconAppStoreModeTinted
- AppIconRowIPhoneVariants: AppIconRowIPhoneIcons4, AppIconRowIPhoneIcons3, AppIconRowIPhoneIcons2, AppIconRowIPhoneIcons1
- ArrowsVariants: ArrowsStateEnabled, ArrowsStateDisabeld
- AutocorrectionVariants: AutocorrectionModeDark, AutocorrectionModeLight
- BackgroundVariants: BackgroundModeDark, BackgroundModeLight
- BackgroundIPadVariants: BackgroundIPadModeDark, BackgroundIPadModeLight
- BackgroundIPhoneVariants: BackgroundIPhoneModeDark, BackgroundIPhoneModeLight
- BGVariants: BGModeDarkElevated, BGModeDark, BGModeLight
- BottomButtonsVariants: BottomButtonsModeDarkTypeABCAndMic, BottomButtonsModeLightTypeABCAndMic, BottomButtonsTypeEmojiAndMicModeDark, BottomButtonsTypeEmojiAndMicModeLight
- ButtonVariants: ButtonModeDark, ButtonModeLight
- ButtonBackVariants: ButtonBackEnabledFalse, ButtonBackEnabledTrue
- ButtonBack2Variants: ButtonBack2ModeDarkStateDisabled, ButtonBack2ModeDarkStateDefault, ButtonBack2ModeLightStateDisabled, ButtonBack2ModeLightStateDefault
- ButtonBottomVariants: ButtonBottomStateTextPrimary, ButtonBottomStateText, ButtonBottomState6Symbols, ButtonBottomState5Symbols, ButtonBottomState4Symbols, ButtonBottomState3Symbols, ButtonBottomState2Symbols, ButtonBottomState1Symbol, ButtonBottomState1SymbolProminent
- ButtonContentAreaVariants: ButtonContentAreaSizeLargeStyleBorderlessLabelTypeSymbolEnabledFalseDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderlessLabelTypeSymbolEnabledFalseDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderlessLabelTypeSymbolEnabledFalseDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderedSecondaryLabelTypeSymbolEnabledFalseDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderedSecondaryLabelTypeSymbolEnabledFalseDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderedSecondaryLabelTypeSymbolEnabledFalseDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderedLabelTypeSymbolEnabledFalseDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderedLabelTypeSymbolEnabledFalseDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderedLabelTypeSymbolEnabledFalseDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderedProminentLabelTypeSymbolEnabledFalseDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderedProminentLabelTypeSymbolEnabledFalseDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderedProminentLabelTypeSymbolEnabledFalseDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderlessLabelTypeSymbolEnabledTrueDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderlessLabelTypeSymbolEnabledTrueDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderlessLabelTypeSymbolEnabledTrueDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderedSecondaryLabelTypeSymbolEnabledTrueDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderedSecondaryLabelTypeSymbolEnabledTrueDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderedSecondaryLabelTypeSymbolEnabledTrueDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderedLabelTypeSymbolEnabledTrueDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderedLabelTypeSymbolEnabledTrueDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderedLabelTypeSymbolEnabledTrueDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderedProminentLabelTypeSymbolEnabledTrueDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderedProminentLabelTypeSymbolEnabledTrueDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderedProminentLabelTypeSymbolEnabledTrueDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderlessLabelTypeTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderlessLabelTypeTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderlessLabelTypeTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderedSecondaryLabelTypeTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderedSecondaryLabelTypeTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderedSecondaryLabelTypeTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderedLabelTypeTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderedLabelTypeTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderedLabelTypeTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderedProminentLabelTypeTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderedProminentLabelTypeTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderedProminentLabelTypeTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderlessLabelTypeTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderlessLabelTypeTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderlessLabelTypeTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderedSecondaryLabelTypeTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderedSecondaryLabelTypeTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderedSecondaryLabelTypeTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderedLabelTypeTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderedLabelTypeTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderedLabelTypeTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderedProminentLabelTypeTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderedProminentLabelTypeTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderedProminentLabelTypeTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderlessLabelTypeSymbolTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderlessLabelTypeSymbolTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderlessLabelTypeSymbolTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderedSecondaryLabelTypeSymbolTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderedSecondaryLabelTypeSymbolTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderedSecondaryLabelTypeSymbolTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderedLabelTypeSymbolTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderedLabelTypeSymbolTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderedLabelTypeSymbolTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderedProminentLabelTypeSymbolTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderedProminentLabelTypeSymbolTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderedProminentLabelTypeSymbolTextEnabledFalseDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderlessLabelTypeSymbolTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderlessLabelTypeSymbolTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderlessLabelTypeSymbolTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderedSecondaryLabelTypeSymbolTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderedSecondaryLabelTypeSymbolTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderedSecondaryLabelTypeSymbolTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderedLabelTypeSymbolTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderedLabelTypeSymbolTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderedLabelTypeSymbolTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderedProminentLabelTypeSymbolTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeMediumStyleBorderedProminentLabelTypeSymbolTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeSmallStyleBorderedProminentLabelTypeSymbolTextEnabledTrueDestructiveTrue, ButtonContentAreaSizeLargeStyleBorderlessLabelTypeSymbolEnabledFalseDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderlessLabelTypeSymbolEnabledFalseDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderlessLabelTypeSymbolEnabledFalseDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderedSecondaryLabelTypeSymbolEnabledFalseDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderedSecondaryLabelTypeSymbolEnabledFalseDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderedSecondaryLabelTypeSymbolEnabledFalseDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderedLabelTypeSymbolEnabledFalseDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderedLabelTypeSymbolEnabledFalseDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderedLabelTypeSymbolEnabledFalseDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderedProminentLabelTypeSymbolEnabledFalseDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderedProminentLabelTypeSymbolEnabledFalseDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderedProminentLabelTypeSymbolEnabledFalseDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderlessLabelTypeSymbolEnabledTrueDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderlessLabelTypeSymbolEnabledTrueDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderlessLabelTypeSymbolEnabledTrueDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderedSecondaryLabelTypeSymbolEnabledTrueDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderedSecondaryLabelTypeSymbolEnabledTrueDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderedSecondaryLabelTypeSymbolEnabledTrueDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderedLabelTypeSymbolEnabledTrueDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderedLabelTypeSymbolEnabledTrueDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderedLabelTypeSymbolEnabledTrueDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderedProminentLabelTypeSymbolEnabledTrueDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderedProminentLabelTypeSymbolEnabledTrueDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderedProminentLabelTypeSymbolEnabledTrueDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderlessLabelTypeTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderlessLabelTypeTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderlessLabelTypeTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderedSecondaryLabelTypeTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderedSecondaryLabelTypeTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderedSecondaryLabelTypeTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderedLabelTypeTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderedLabelTypeTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderedLabelTypeTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderedProminentLabelTypeTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderedProminentLabelTypeTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderedProminentLabelTypeTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderlessLabelTypeTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderlessLabelTypeTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderlessLabelTypeTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderedSecondaryLabelTypeTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderedSecondaryLabelTypeTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderedSecondaryLabelTypeTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderedLabelTypeTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderedLabelTypeTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderedLabelTypeTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderedProminentLabelTypeTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderedProminentLabelTypeTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderedProminentLabelTypeTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderlessLabelTypeSymbolTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderlessLabelTypeSymbolTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderlessLabelTypeSymbolTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderedSecondaryLabelTypeSymbolTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderedSecondaryLabelTypeSymbolTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderedSecondaryLabelTypeSymbolTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderedLabelTypeSymbolTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderedLabelTypeSymbolTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderedLabelTypeSymbolTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderedProminentLabelTypeSymbolTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderedProminentLabelTypeSymbolTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderedProminentLabelTypeSymbolTextEnabledFalseDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderlessLabelTypeSymbolTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderlessLabelTypeSymbolTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderlessLabelTypeSymbolTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderedSecondaryLabelTypeSymbolTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderedSecondaryLabelTypeSymbolTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderedSecondaryLabelTypeSymbolTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderedLabelTypeSymbolTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderedLabelTypeSymbolTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderedLabelTypeSymbolTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeLargeStyleBorderedProminentLabelTypeSymbolTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeMediumStyleBorderedProminentLabelTypeSymbolTextEnabledTrueDestructiveFalse, ButtonContentAreaSizeSmallStyleBorderedProminentLabelTypeSymbolTextEnabledTrueDestructiveFalse
- ButtonDoneVariants: ButtonDoneBGContextDim, ButtonDoneBGContextBright
- ButtonHorizontalStackVariants: ButtonHorizontalStackSelectedFalse, ButtonHorizontalStackSelectedTrue
- ButtonLiquidGlassVariants: ButtonLiquidGlassModeDark, ButtonLiquidGlassModeLight
- ButtonLiquidGlassNotTintedVariants: ButtonLiquidGlassNotTintedModeDark, ButtonLiquidGlassNotTintedModeDarkElevated, ButtonLiquidGlassNotTintedModeLight
- ButtonLiquidGlassSymbolVariants: ButtonLiquidGlassSymbolTintedTrue, ButtonLiquidGlassSymbolTintedFalse
- ButtonLiquidGlassTextVariants: ButtonLiquidGlassTextTintedTrue, ButtonLiquidGlassTextTintedFalse
- ButtonLiquidGlassTintedVariants: ButtonLiquidGlassTintedModeDark, ButtonLiquidGlassTintedModeDarkElevated, ButtonLiquidGlassTintedModeLight
- ButtonsVariants: ButtonsTypeDestructive, ButtonsTypeDisabled, ButtonsTypeDefault
- Buttons2Variants: Buttons2ModeDarkTypeDestructive, Buttons2ModeDarkTypeSecondary, Buttons2ModeDarkTypePrimary, Buttons2ModeLightTypeDestructive, Buttons2ModeLightTypeSecondary, Buttons2ModeLightTypePrimary
- ButtonsTopVariants: ButtonsTopTypeBack, ButtonsTopTypeTextPrimary, ButtonsTopTypeText, ButtonsTopType6Symbols, ButtonsTopType5Symbols, ButtonsTopType4Symbols, ButtonsTopType3Symbols, ButtonsTopType2Symbols, ButtonsTopType1Symbol, ButtonsTopType1SymbolProminent
- ButtonsTopSheetsVariants: ButtonsTopSheetsModeDarkStateDefault, ButtonsTopSheetsModeDarkStatePreferred, ButtonsTopSheetsModeLightStateDefault, ButtonsTopSheetsModeLightStatePreferred
- ButtonSymbolVariants: ButtonSymbolEnabledFalse, ButtonSymbolEnabledTrue
- ButtonSymbol2Variants: ButtonSymbol2ModeDarkStateDisabled, ButtonSymbol2ModeDarkStateSelected, ButtonSymbol2ModeDarkStateTinted, ButtonSymbol2ModeDarkStateDefault, ButtonSymbol2ModeLightStateDisabled, ButtonSymbol2ModeLightStateSelected, ButtonSymbol2ModeLightStateTinted, ButtonSymbol2ModeLightStateDefault
- ButtonSymbol3Variants: ButtonSymbol3StateDisabled, ButtonSymbol3StateDefault, ButtonSymbol3StateButtonSymbolDarkProperty2Disabled, ButtonSymbol3StateButtonSymbolDarkProperty2Default
- ButtonTextVariants: ButtonTextEmphasizedTrueEnabledFalse, ButtonTextEmphasizedFalseEnabledFalse, ButtonTextEmphasizedTrueEnabledTrue, ButtonTextEmphasizedFalseEnabledTrue
- ButtonText2Variants: ButtonText2ModeDarkStateDisabled, ButtonText2ModeDarkStateTinted, ButtonText2ModeDarkStateSelected, ButtonText2ModeDarkStateDefault, ButtonText2ModeLightStateTinted, ButtonText2ModeLightStateDisabled, ButtonText2ModeLightStateSelected, ButtonText2ModeLightStateDefault
- ButtonVerticalStackVariants: ButtonVerticalStackSelectedFalse, ButtonVerticalStackSelectedTrue
- CardTopVariants: CardTopModeDarkElevated, CardTopModeDark, CardTopModeLight
- CheckmarkVariants: CheckmarkStateDisabledModeLight, CheckmarkStateDefaultModeLight
- ChevronVariants: ChevronModeDarkElevated, ChevronModeDark, ChevronModeLight
- CloseButtonVariants: CloseButtonModeDarkElevated, CloseButtonModeDark, CloseButtonModeLight
- CloseButton2Variants: CloseButton2ModeLight, CloseButton2ModeDark
- CompactMenuVariants: CompactMenuActions6, CompactMenuActions5, CompactMenuActions4, CompactMenuActions3, CompactMenuActions2
- ContactVariants: ContactPeople2, ContactPeople1
- ContentsVariants: ContentsSizeClassCompactStyleDefault, ContentsSizeClassCompactStyleLargeTitle, ContentsSizeClassRegularStyleDefault, ContentsSizeClassRegularStyleLargeTitle
- ContentsDisclosureVariants: ContentsDisclosureDisclosedFalse, ContentsDisclosureDisclosedTrue
- ControlsBGIPadVariants: ControlsBGIPadOnTrue, ControlsBGIPadOnFalse
- ControlsBGIPhoneVariants: ControlsBGIPhoneOnTrue, ControlsBGIPhoneOnFalse
- ControlsCenteredIPadOnlyVariants: ControlsCenteredIPadOnlyConfigText3, ControlsCenteredIPadOnlyConfigText2, ControlsCenteredIPadOnlyConfigText1, ControlsCenteredIPadOnlyConfigSymbols6, ControlsCenteredIPadOnlyConfigSymbols5, ControlsCenteredIPadOnlyConfigSymbols4, ControlsCenteredIPadOnlyConfigSymbols3, ControlsCenteredIPadOnlyConfigSymbols2, ControlsCenteredIPadOnlyConfigSymbols1
- ControlsIPad1x1Variants: ControlsIPad1x1OnTrue, ControlsIPad1x1OnFalse
- ControlsIPad2x1Variants: ControlsIPad2x1OnFalseTypeMenu, ControlsIPad2x1OnTrueTypeMenu, ControlsIPad2x1OnFalseTypeToggle, ControlsIPad2x1OnTrueTypeToggle
- ControlsIPad2x2Variants: ControlsIPad2x2OnFalse, ControlsIPad2x2OnTrue
- ControlsIPhone1x1Variants: ControlsIPhone1x1OnTrue, ControlsIPhone1x1OnFalse
- ControlsIPhone2x1Variants: ControlsIPhone2x1OnFalseTypeMenu, ControlsIPhone2x1OnTrueTypeMenu, ControlsIPhone2x1OnFalseTypeToggle, ControlsIPhone2x1OnTrueTypeToggle
- ControlsIPhone2x2Variants: ControlsIPhone2x2OnFalse, ControlsIPhone2x2OnTrue
- ControlsLeadingVariants: ControlsLeadingConfigBack, ControlsLeadingConfigText3, ControlsLeadingConfigText2, ControlsLeadingConfigText1, ControlsLeadingConfigSymbols6IPadOnly, ControlsLeadingConfigSymbols5IPadOnly, ControlsLeadingConfigSymbols4IPadOnly, ControlsLeadingConfigSymbols3, ControlsLeadingConfigSymbols2, ControlsLeadingConfigSymbols1
- ControlsTrailingVariants: ControlsTrailingConfigText3, ControlsTrailingConfigText2, ControlsTrailingConfigText1, ControlsTrailingConfigSymbols6IPadOnly, ControlsTrailingConfigSymbols5IPadOnly, ControlsTrailingConfigSymbols4IPadOnly, ControlsTrailingConfigSymbols3, ControlsTrailingConfigSymbols2, ControlsTrailingConfigSymbols1
- CustomIconVariants: CustomIconModeClearLight, CustomIconModeDark, CustomIconModeDefault
- DateAndTimeCollapsedVariants: DateAndTimeCollapsedStateDefault, DateAndTimeCollapsedStateSelected
- DateAndTimePickerCompactVariants: DateAndTimePickerCompactModeLightTypeTime, DateAndTimePickerCompactModeLightTypeDate, DateAndTimePickerCompactModeLightTypeDateAndTime
- DateAndTimePickersVariants: DateAndTimePickersStyleInline, DateAndTimePickersStyleCompact
- DateAndTimePickerWheelsVariants: DateAndTimePickerWheelsModeLightTypeDate, DateAndTimePickerWheelsModeLightTypeTime
- DateAndTimeWheelsVariants: DateAndTimeWheelsTypeDate, DateAndTimeWheelsTypeTime
- DayVariants: DayStateCurrentAndSelected, DayStateSelected, DayStateCurrent, DayStateDefault, DayStateNull
- DecrementVariants: DecrementStyleDisabled, DecrementStylePressed, DecrementStyleDefault
- Decrement2Variants: Decrement2StyleDisabled, Decrement2StylePressed, Decrement2StyleDefault
- DescriptionVariants: DescriptionModeDarkElevated, DescriptionModeDark, DescriptionModeLight
- DisclosureVariants: DisclosureTableOpenFalse, DisclosureTableOpenTrue
- DisclsoureVariants: DisclsoureOpenFalse, DisclsoureOpenTrue
- EditButtonsDarkVariants: EditButtonsDarkStateRemove, EditButtonsDarkStateAdd, EditButtonsDarkStateSelected, EditButtonsDarkStateUnselected
- EditButtonsLightVariants: EditButtonsLightStateRemove, EditButtonsLightStateAdd, EditButtonsLightStateSelected, EditButtonsLightStateUnselected
- EditMenuItemVariants: EditMenuItemModeLightStateDestructive, EditMenuItemModeDarkStateDestructive, EditMenuItemModeLightStateDefault, EditMenuItemModeDarkStateDefault
- EmojiSearchFieldVariants: EmojiSearchFieldModeDark, EmojiSearchFieldModeLight
- EmojiTabsVariants: EmojiTabsModeDark, EmojiTabsModeLight
- ExamplesAlertVariants: ExamplesAlertTypeStacked, ExamplesAlertTypeSideBySide
- ExamplesAlert2Variants: ExamplesAlert2KeyboardTrue, ExamplesAlert2KeyboardFalse
- ExamplesEmptyStatesVariants: ExamplesEmptyStatesConfigLargeSymbol, ExamplesEmptyStatesConfigSymbolInCircle, ExamplesEmptyStatesConfigTitleAndSubtitle
- ExamplesFaceIDVariants: ExamplesFaceIDStateSuccess, ExamplesFaceIDStateAuthenticating
- ExamplesHomeScreenWidgetsVariants: ExamplesHomeScreenWidgetsSizeLarge, ExamplesHomeScreenWidgetsSizeMedium, ExamplesHomeScreenWidgetsSizeSmall
- ExamplesKeyboardVariants: ExamplesKeyboardTypeFindAndReplace, ExamplesKeyboardTypeFind, ExamplesKeyboardTypeEmoji, ExamplesKeyboardTypeNumeric, ExamplesKeyboardTypeText
- ExamplesKeyboard2Variants: ExamplesKeyboard2TypeTextUpperCase, ExamplesKeyboard2TypeTextLowerCase
- ExamplesKeyboardIPadVariants: ExamplesKeyboardIPadTypeFindAndReplace, ExamplesKeyboardIPadTypeEmoji, ExamplesKeyboardIPadTypeEmail, ExamplesKeyboardIPadTypeTextShift, ExamplesKeyboardIPadTypeText, ExamplesKeyboardIPadTypeTextEnterEmphasized
- ExamplesListVariants: ExamplesListTypeFullWidthSectionHeaders, ExamplesListTypeFullWidth, ExamplesListTypeInset
- ExamplesMenusVariants: ExamplesMenusTypeMenu, ExamplesMenusTypeEditMedium
- ExamplesMenus2Variants: ExamplesMenus2TypeMenuAndSubmenu, ExamplesMenus2TypeEditMenu
- ExamplesNavigationBarIPadVariants: ExamplesNavigationBarIPadTypeDocumentBrowser, ExamplesNavigationBarIPadTypeDocument, ExamplesNavigationBarIPadTypeLargeTitle, ExamplesNavigationBarIPadTypeDefault
- ExamplesNavigationBarIPhoneVariants: ExamplesNavigationBarIPhoneLargeTitleTrue, ExamplesNavigationBarIPhoneLargeTitleFalse
- ExamplesNotificationsVariants: ExamplesNotificationsExpandedTrue, ExamplesNotificationsExpandedFalse
- ExamplesPickerVariants: ExamplesPickerTypeWheelsOfTimeDate, ExamplesPickerTypeWheelsOfTimeTime, ExamplesPickerTypeInline
- ExamplesPicker2Variants: ExamplesPicker2TypeInline, ExamplesPicker2TypeCompact
- ExamplesSheetsModalsVariants: ExamplesSheetsModalsTypeInspector, ExamplesSheetsModalsTypeFullscreenStack, ExamplesSheetsModalsTypeFullscreen
- ExamplesSidebarVariants: ExamplesSidebarTypeList, ExamplesSidebarTypeListMultiLevel
- ExamplesTabBarVariants: ExamplesTabBarSplitSearchFalse, ExamplesTabBarSplitSearchTrue
- ExamplesTabBarsVariants: ExamplesTabBarsTypeWithSearch, ExamplesTabBarsTypeWithoutSearch
- ExamplesToolbarsBottomVariants: ExamplesToolbarsBottomTypeSearch, ExamplesToolbarsBottomTypeSymbols, ExamplesToolbarsBottomTypeText
- ExamplesToolbarsTopVariants: ExamplesToolbarsTopTypeTitle2LineLeft, ExamplesToolbarsTopTypeTitle2Line, ExamplesToolbarsTopTypeLargeTitle, ExamplesToolbarsTopTypeCompactLargeTitle, ExamplesToolbarsTopTypeDefault
- ExamplesToolbarsTop2Variants: ExamplesToolbarsTop2Type2LineLargeTitle, ExamplesToolbarsTop2Type2LineLargeTitleInline, ExamplesToolbarsTop2Type2LineCenterAligned, ExamplesToolbarsTop2Type2LineLeftAligned
- FaceIDVariants: FaceIDStateSuccess, FaceIDStateAuthenticating
- FieldBGVariants: FieldBGModeDark, FieldBGModeLight
- FieldFindVariants: FieldFindModeLightStateTextEntered, FieldFindModeDarkStateTextEntered, FieldFindModeLightStateTyping, FieldFindModeDarkStateTyping, FieldFindModeLightStateFocused, FieldFindModeDarkStateFocused, FieldFindModeLightStateDefault, FieldFindModeDarkStateDefault
- FieldReplaceVariants: FieldReplaceModeLightStateTextEntered, FieldReplaceModeDarkStateTextEntered, FieldReplaceModeLightStateTyping, FieldReplaceModeDarkStateTyping, FieldReplaceModeLightStateFocused, FieldReplaceModeDarkStateFocused, FieldReplaceModeLightStateDefault, FieldReplaceModeDarkStateDefault
- GrabberVariants: GrabberModeLight, GrabberModeDark
- Grabber2Variants: Grabber2ModeLight, Grabber2ModeDark
- GradientVariants: GradientModeDarkPositionTop, GradientModeDarkPositionBottom, GradientModeLightPositionTop, GradientModeLightPositionBottom
- GroupedTableHeaderVariants: GroupedTableHeaderTypeProminent, GroupedTableHeaderTypePlain, GroupedTableHeaderTypeDefault
- HeaderVariants: HeaderModeDark, HeaderModeLight
- HeaderDarkVariants: HeaderDarkOpenTrue, HeaderDarkOpenFalse
- HeaderLightVariants: HeaderLightWidthInsetTypeProminent, HeaderLightWidthFullTypeProminent, HeaderLightWidthInsetTypePlain, HeaderLightWidthFullTypePlain, HeaderLightWidthInsetTypeDefault, HeaderLightWidthFullTypeDefault
- HeaderTrailingAccessoriesVariants: HeaderTrailingAccessoriesTypeDisclosureOpen, HeaderTrailingAccessoriesTypeAction, HeaderTrailingAccessoriesTypeImage, HeaderTrailingAccessoriesTypeButton
- HomeIndicatorVariants: HomeIndicatorDeviceIPhoneOrientationPortrait, HomeIndicatorDeviceIPhoneOrientationLandscape, HomeIndicatorDeviceIPadOrientationPortrait, HomeIndicatorDeviceIPadOrientationLandscape
- HomeScreenIPadVariants: HomeScreenIPadWidgetsSmall, HomeScreenIPadWidgetsMedium, HomeScreenIPadWidgetsLarge, HomeScreenIPadWidgetsExtraLarge, HomeScreenIPadWidgetsNone
- HomeScreenIPhoneVariants: HomeScreenIPhoneWidgetsSmall, HomeScreenIPhoneWidgetsMedium, HomeScreenIPhoneWidgetsLarge, HomeScreenIPhoneWidgetsNone
- HomeScreenWidgetIPadVariants: HomeScreenWidgetIPadSizeSmall, HomeScreenWidgetIPadSizeMedium, HomeScreenWidgetIPadSizeLarge, HomeScreenWidgetIPadSizeExtraLarge
- HomeScreenWidgetIPhoneVariants: HomeScreenWidgetIPhoneSizeSmall, HomeScreenWidgetIPhoneSizeMedium, HomeScreenWidgetIPhoneSizeLarge
- HSQAActionsVariants: HSQAActionsModeDarkStateDestructive, HSQAActionsModeDarkStateDefault, HSQAActionsModeLightStateDestructive, HSQAActionsModeLightStateDefault
- HSQAAppIconDarkVariants: HSQAAppIconDarkStateSelected, HSQAAppIconDarkStateDefault
- HSQAAppIconLightVariants: HSQAAppIconLightStateSelected, HSQAAppIconLightStateDefault
- HSQABGVariants: HSQABGModeLight, HSQABGModeDark
- HSQAWidgetDarkVariants: HSQAWidgetDarkStateSelected, HSQAWidgetDarkStateDefault
- HSQAWidgetLightVariants: HSQAWidgetLightStateSelected, HSQAWidgetLightStateDefault
- HSQAWidgetRowVariants: HSQAWidgetRowModeDark, HSQAWidgetRowModeLight
- ImagesRegularVariants: ImagesRegularTypeSymbol, ImagesRegularTypeRounded, ImagesRegularTypeCircular, ImagesRegularTypeFill
- ImagesTallVariants: ImagesTallTypeSymbol, ImagesTallTypeRounded, ImagesTallTypeCircular, ImagesTallTypeFill
- IncrementVariants: IncrementStyleDisabled, IncrementStylePressed, IncrementStyleDefault
- Increment2Variants: Increment2StyleDisabled, Increment2StylePressed, Increment2StyleDefault
- IndexBarVariants: IndexBarDeviceIPad, IndexBarDeviceIPhone
- IOSMiniTipVariants: IOSMiniTipStyleHintContentImage, IOSMiniTipStyleAnnotationContentImage, IOSMiniTipStylePopoverContentImage, IOSMiniTipStyleHintContentSymbol, IOSMiniTipStyleAnnotationContentSymbol, IOSMiniTipStylePopoverContentSymbol, IOSMiniTipStyleHintContentTextOnly, IOSMiniTipStyleAnnotationContentTextOnly, IOSMiniTipStylePopoverContentTextOnly
- IOSMiniTipButtonsVariants: IOSMiniTipButtonsLayoutStackedModeLight, IOSMiniTipButtonsLayoutStackedModeDark, IOSMiniTipButtonsLayoutSideBySideModeLight, IOSMiniTipButtonsLayoutSideBySideModeDark
- IPadProM411Variants: IPadProM411ColorSilver, IPadProM411ColorSpaceGray
- IPadProM413Variants: IPadProM413ColorSilver, IPadProM413ColorSpaceGray
- IPhone15ProVariants: IPhone15ProStyleDisplayOnly, IPhone15ProStyleBezel
- IPhone17Variants: IPhone17ColorBlack, IPhone17ColorLavendar, IPhone17ColorMistBlue, IPhone17ColorSage, IPhone17ColorWhite
- IPhone17ProVariants: IPhone17ProColorCosmicOrange, IPhone17ProColorDeepBlue, IPhone17ProColorSilver
- IPhone17ProMaxVariants: IPhone17ProMaxColorCosmicOrange, IPhone17ProMaxColorDeepBlue, IPhone17ProMaxColorSilver
- IPhoneAirVariants: IPhoneAirColorCloudWhite, IPhoneAirColorLightGold, IPhoneAirColorSkyBlue, IPhoneAirColorSpaceBlack
- KeyboardVariants: KeyboardTypeNumbersAndPunctuation, KeyboardTypeEmoji, KeyboardTypeWebForm, KeyboardTypeWeb, KeyboardTypeFindAndReplace, KeyboardTypeFind, KeyboardTypeDefault
- Keyboard2Variants: Keyboard2TypeShift, Keyboard2TypeDefault
- KeyboardIPadLayoutsVariants: KeyboardIPadLayoutsModeDarkTypeUppercase, KeyboardIPadLayoutsModeDarkTypeLowercase, KeyboardIPadLayoutsModeLightTypeUppercase, KeyboardIPadLayoutsModeLightTypeLowercase
- KeyboardIPadLayoutsDarkVariants: KeyboardIPadLayoutsDarkTypeLettersLowercase, KeyboardIPadLayoutsDarkTypeLettersUppercase
- KeyboardIPadLayoutsDarkVibrantVariants: KeyboardIPadLayoutsDarkVibrantTypeLettersLowercase, KeyboardIPadLayoutsDarkVibrantTypeLettersUppercase
- KeyboardIPhoneLayoutsVariants: KeyboardIPhoneLayoutsModeDarkTypeCharacters, KeyboardIPhoneLayoutsModeDarkTypeNumbers, KeyboardIPhoneLayoutsModeDarkTypeLettersUppercase, KeyboardIPhoneLayoutsModeDarkTypeLettersLowercase, KeyboardIPhoneLayoutsModeLightTypeCharacters, KeyboardIPhoneLayoutsModeLightTypeNumbers, KeyboardIPhoneLayoutsModeLightTypeLettersLowercase, KeyboardIPhoneLayoutsModeLightTypeLettersUppercase
- KeyboardIPhoneLayoutsDarkVariants: KeyboardIPhoneLayoutsDarkTypeCharacters, KeyboardIPhoneLayoutsDarkTypeNumbers, KeyboardIPhoneLayoutsDarkTypeLettersUppercase, KeyboardIPhoneLayoutsDarkTypeLettersLowercase
- KeysIPadCommandVariants: KeysIPadCommandModeDarkAlignRight, KeysIPadCommandModeDarkAlignLeft, KeysIPadCommandModeLightAlignRight, KeysIPadCommandModeLightAlignLeft
- KeysIPadEnterDarkVariants: KeysIPadEnterDarkColorBlue, KeysIPadEnterDarkColorDefault
- KeysIPadEnterDarkVibrantVariants: KeysIPadEnterDarkVibrantColorBlue, KeysIPadEnterDarkVibrantColorDefault
- KeysIPadLowercaseVariants: KeysIPadLowercaseModeDarkType2StoreyLower, KeysIPadLowercaseModeDarkType2StoreyUpper, KeysIPadLowercaseModeDarkType2StoreyPunctuation, KeysIPadLowercaseModeDarkType1StoryPunctuation, KeysIPadLowercaseModeLightType2StoreyLower, KeysIPadLowercaseModeLightType2StoreyUpper, KeysIPadLowercaseModeLightType2StoreyPunctuation, KeysIPadLowercaseModeLightType1StoryPunctuation
- KeysIPadLowercaseDarkVariants: KeysIPadLowercaseDarkTypeDefault, KeysIPadLowercaseDarkTypeSpaceCommaPeriod
- KeysIPadLowercaseDarkVibrantVariants: KeysIPadLowercaseDarkVibrantTypeDefault, KeysIPadLowercaseDarkVibrantTypeSpaceCommaPeriod
- KeysIPadReturnVariants: KeysIPadReturnModeDarkProminentTrue, KeysIPadReturnModeDarkProminentFalse, KeysIPadReturnModeLightProminentTrue, KeysIPadReturnModeLightProminentFalse
- KeysIPadSpecialDarkVibrantVariants: KeysIPadSpecialDarkVibrantAlignRightTypeKeyboardClose, KeysIPadSpecialDarkVibrantAlignLeftTypeDictation, KeysIPadSpecialDarkVibrantAlignLeftTypeEmoji, KeysIPadSpecialDarkVibrantAlignRightTypeTextSelected, KeysIPadSpecialDarkVibrantAlignRightTypeText, KeysIPadSpecialDarkVibrantAlignLeftTypeTextSelected, KeysIPadSpecialDarkVibrantAlignLeftTypeText
- KeysIPadUppercaseDarkVariants: KeysIPadUppercaseDarkTypePunctuation, KeysIPadUppercaseDarkTypeDefault
- KeysIPadUppercaseDarkVibrantVariants: KeysIPadUppercaseDarkVibrantTypePunctuation, KeysIPadUppercaseDarkVibrantTypeDefault
- KeysIPhoneVariants: KeysIPhoneModeDarkTypeSpace, KeysIPhoneModeDarkType123Small, KeysIPhoneModeDarkType, KeysIPhoneModeDarkTypeABC, KeysIPhoneModeDarkType123, KeysIPhoneModeDarkTypeReturnProminent, KeysIPhoneModeDarkTypeReturn, KeysIPhoneModeDarkTypeSymbol, KeysIPhoneModeDarkTypeSpecialCharatersNotCapitalized, KeysIPhoneModeDarkTypePunctuation, KeysIPhoneModeDarkTypeLowercase, KeysIPhoneModeDarkTypeUppercase, KeysIPhoneModeDarkTypeShift, KeysIPhoneModeDarkTypeDelete, KeysIPhoneModeLightTypeSpace, KeysIPhoneModeLightType123Small, KeysIPhoneModeLightType, KeysIPhoneModeLightTypeABC, KeysIPhoneModeLightType123, KeysIPhoneModeLightTypeReturnProminent, KeysIPhoneModeLightTypeReturn, KeysIPhoneModeLightTypeSymbol, KeysIPhoneModeLightTypeSpecialCharatersNotCapitalized, KeysIPhoneModeLightTypePunctuation, KeysIPhoneModeLightTypeLowercase, KeysIPhoneModeLightTypeUppercase, KeysIPhoneModeLightTypeShift, KeysIPhoneModeLightTypeDelete
- KeysIPhone2Variants: KeysIPhone2ModeDarkElevatedStateEmphasized, KeysIPhone2ModeDarkElevatedStateNormal, KeysIPhone2ModeDarkStateEmphasized, KeysIPhone2ModeDarkStateNormal, KeysIPhone2ModeLightStateEmphasized, KeysIPhone2ModeLightStateNormal
- KeysIPhoneNumericVariants: KeysIPhoneNumericModeDarkTypeMath, KeysIPhoneNumericModeLightTypeMath, KeysIPhoneNumericModeDarkTypeNumber, KeysIPhoneNumericModeLightTypeNumber, KeysIPhoneNumericModeDarkTypeNumberABC, KeysIPhoneNumericModeLightTypeNumberABC
- KeysIPhoneSpaceVariants: KeysIPhoneSpaceModeDarkConfigURL, KeysIPhoneSpaceModeDarkConfigEmail, KeysIPhoneSpaceModeDarkConfigDefault, KeysIPhoneSpaceModeLightConfigURL, KeysIPhoneSpaceModeLightConfigEmail, KeysIPhoneSpaceModeLightConfigDefault
- KeysIPhoneSpecialDarkVariants: KeysIPhoneSpecialDarkTypeShiftLocked, KeysIPhoneSpecialDarkTypeShift, KeysIPhoneSpecialDarkTypeKeyboard, KeysIPhoneSpecialDarkTypeNumbers, KeysIPhoneSpecialDarkTypeDelete, KeysIPhoneSpecialDarkTypeKeyboardABC, KeysIPhoneSpecialDarkTypeSpace
- KeysIPhoneUppercaseDarkVariants: KeysIPhoneUppercaseDarkStyleDefaultCurrencies, KeysIPhoneUppercaseDarkStyleDefaultBaselineAdjusted, KeysIPhoneUppercaseDarkStyleDefault
- KeysNumbericDarkVariants: KeysNumbericDarkTypeDelete, KeysNumbericDarkType2Lines, KeysNumbericDarkType1Line
- KeysReturnDarkVariants: KeysReturnDarkBlueColorOn, KeysReturnDarkBlueColorOff
- KeysSpaceDarkVariants: KeysSpaceDarkConfigURL, KeysSpaceDarkConfigEmail, KeysSpaceDarkConfigDefault
- LabelVariants: LabelStateDestructiveModeDarkElevated, LabelStateDestructiveModeDark, LabelStateDestructiveModeLight, LabelStateDisabledModeDarkElevated, LabelStateDisabledModeDark, LabelStateDisabledModeLight, LabelStateDefaultModeDarkElevated, LabelStateDefaultModeDark, LabelStateDefaultModeLight
- LabelSymbolDefaultVariants: LabelSymbolDefaultModeDarkStateDisabled, LabelSymbolDefaultModeDarkStateDefault, LabelSymbolDefaultModeLightStateDisabled, LabelSymbolDefaultModeLightStateDefault
- LabelSymbolDefault2Variants: LabelSymbolDefault2StateDefaultBGContextDim, LabelSymbolDefault2StateDefaultBGContextBright
- LabelSymbolPreferredVariants: LabelSymbolPreferredModeDarkStateDisabled, LabelSymbolPreferredModeDarkStateDefault, LabelSymbolPreferredModeLightStateDisabled, LabelSymbolPreferredModeLightStateDefault
- LabelTextDefaultVariants: LabelTextDefaultModeDarkStateDisabled, LabelTextDefaultModeDarkStateDefault, LabelTextDefaultModeLightStateDisabled, LabelTextDefaultModeLightStateDefault
- LabelTextPreferredVariants: LabelTextPreferredModeDarkStateDisabled, LabelTextPreferredModeDarkStateDefault, LabelTextPreferredModeLightStateDisabled, LabelTextPreferredModeLightStateDefault
- LaunchPadVariants: LaunchPadModeDark, LaunchPadModeLight
- LeadingIPhoneVariants: LeadingIPhoneModeLightStateDestructive, LeadingIPhoneModeLightStateDisabled
- LiquidGlassRegularLargeVariants: LiquidGlassRegularLargeModeDark, LiquidGlassRegularLargeModeLight
- LiquidGlassRegularMediumVariants: LiquidGlassRegularMediumModeDark, LiquidGlassRegularMediumModeLight
- LiquidGlassRegularSmallVariants: LiquidGlassRegularSmallModeDarkStatePrimary, LiquidGlassRegularSmallModeDarkStateDefault, LiquidGlassRegularSmallModeLightStatePrimary, LiquidGlassRegularSmallModeLightStateDefault
- LiquidGlassRegularSmall3Variants: LiquidGlassRegularSmall3ModeDarkStatePrimary, LiquidGlassRegularSmall3ModeDarkStateDefault, LiquidGlassRegularSmall3ModeLightStatePrimary, LiquidGlassRegularSmall3ModeLightStateDefault
- LollipopsVariants: LollipopsModeDarkElevated, LollipopsModeDark, LollipopsModeLight
- MaterialsVariants: MaterialsStyleChrome, MaterialsStyleThick, MaterialsStyleRegular, MaterialsStyleThin, MaterialsStyleUltrathin
- MaterialsModeOptionsVariants: MaterialsModeOptionsModeDarkStyleChrome, MaterialsModeOptionsModeICDarkStyleChrome, MaterialsModeOptionsModeDarkStyleThick, MaterialsModeOptionsModeICDarkStyleThick, MaterialsModeOptionsModeDarkStyleRegular, MaterialsModeOptionsModeICDarkStyleRegular, MaterialsModeOptionsModeDarkStyleThin, MaterialsModeOptionsModeICDarkStyleThin, MaterialsModeOptionsModeDarkStyleUltrathin, MaterialsModeOptionsModeICDarkStyleUltrathin, MaterialsModeOptionsModeLightStyleChrome, MaterialsModeOptionsModeICLightStyleChrome, MaterialsModeOptionsModeLightStyleThick, MaterialsModeOptionsModeICLightStyleThick, MaterialsModeOptionsModeLightStyleRegular, MaterialsModeOptionsModeICLightStyleRegular, MaterialsModeOptionsModeLightStyleThin, MaterialsModeOptionsModeICLightStyleThin, MaterialsModeOptionsModeLightStyleUltrathin, MaterialsModeOptionsModeICLightStyleUltrathin
- MenuBarItemVariants: MenuBarItemStateDeselected, MenuBarItemStateSelected
- MenuIndicatorVariants: MenuIndicatorModeDark, MenuIndicatorModeLight
- MenuIPadActionsVariants: MenuIPadActionsModeDark, MenuIPadActionsModeLight
- MenuIPadActionsAndSubmenusVariants: MenuIPadActionsAndSubmenusModeDark, MenuIPadActionsAndSubmenusModeLight
- MenuIPhoneVariants: MenuIPhoneModeDark, MenuIPhoneModeLight
- MenuItemDarkVariants: MenuItemDarkTypeDestructive, MenuItemDarkTypeDefault
- MenuItemsIPadVariants: MenuItemsIPadModeDarkStateDestructiveMenuHasSelectionTrue, MenuItemsIPadModeDarkStateDisabledMenuHasSelectionTrue, MenuItemsIPadModeDarkStateDefaultMenuHasSelectionTrue, MenuItemsIPadModeDarkStateDestructiveMenuHasSelectionFalse, MenuItemsIPadModeDarkStateDisabledMenuHasSelectionFalse, MenuItemsIPadModeDarkStateDefaultMenuHasSelectionFalse, MenuItemsIPadModeLightStateDestructiveMenuHasSelectionFalse, MenuItemsIPadModeLightStateDisabledMenuHasSelectionFalse, MenuItemsIPadModeLightStateDefaultMenuHasSelectionFalse, MenuItemsIPadModeLightStateDestructiveMenuHasSelectionTrue, MenuItemsIPadModeLightStateDisabledMenuHasSelectionTrue, MenuItemsIPadModeLightStateDefaultMenuHasSelectionTrue
- MenuItemsIPhoneVariants: MenuItemsIPhoneModeDarkStateDestructiveMenuHasSelectionTrue, MenuItemsIPhoneModeDarkStateDisabledMenuHasSelectionTrue, MenuItemsIPhoneModeDarkStateDefaultMenuHasSelectionTrue, MenuItemsIPhoneModeDarkStateDestructiveMenuHasSelectionFalse, MenuItemsIPhoneModeDarkStateDisabledMenuHasSelectionFalse, MenuItemsIPhoneModeDarkStateDefaultMenuHasSelectionFalse, MenuItemsIPhoneModeLightStateDestructiveMenuHasSelectionTrue, MenuItemsIPhoneModeLightStateDisabledMenuHasSelectionTrue, MenuItemsIPhoneModeLightStateDefaultMenuHasSelectionTrue, MenuItemsIPhoneModeLightStateDestructiveMenuHasSelectionFalse, MenuItemsIPhoneModeLightStateDisabledMenuHasSelectionFalse, MenuItemsIPhoneModeLightStateDefaultMenuHasSelectionFalse
- MenuItemsSubmenusIPadVariants: MenuItemsSubmenusIPadModeDarkStateDisabledOpenFalseMenuHasSelectionTrue, MenuItemsSubmenusIPadModeDarkStateDisabledOpenTrueMenuHasSelectionTrue, MenuItemsSubmenusIPadModeDarkStateDefaultOpenFalseMenuHasSelectionTrue, MenuItemsSubmenusIPadModeDarkStateDefaultOpenTrueMenuHasSelectionTrue, MenuItemsSubmenusIPadModeLightStateDisabledOpenFalseMenuHasSelectionTrue, MenuItemsSubmenusIPadModeLightStateDisabledOpenTrueMenuHasSelectionTrue, MenuItemsSubmenusIPadModeLightStateDefaultOpenFalseMenuHasSelectionTrue, MenuItemsSubmenusIPadModeLightStateDefaultOpenTrueMenuHasSelectionTrue, MenuItemsSubmenusIPadModeDarkStateDisabledOpenFalseMenuHasSelectionFalse, MenuItemsSubmenusIPadModeDarkStateDisabledOpenTrueMenuHasSelectionFalse, MenuItemsSubmenusIPadModeDarkStateDefaultOpenFalseMenuHasSelectionFalse, MenuItemsSubmenusIPadModeDarkStateDefaultOpenTrueMenuHasSelectionFalse, MenuItemsSubmenusIPadModeLightStateDisabledOpenFalseMenuHasSelectionFalse, MenuItemsSubmenusIPadModeLightStateDisabledOpenTrueMenuHasSelectionFalse, MenuItemsSubmenusIPadModeLightStateDefaultOpenFalseMenuHasSelectionFalse, MenuItemsSubmenusIPadModeLightStateDefaultOpenTrueMenuHasSelectionFalse
- MenuItemsSubmenusIPhoneVariants: MenuItemsSubmenusIPhoneModeDarkStateDisabledOpenTrueMenuHasSelectionTrue, MenuItemsSubmenusIPhoneModeDarkStateDefaultOpenTrueMenuHasSelectionTrue, MenuItemsSubmenusIPhoneModeDarkStateDisabledOpenFalseMenuHasSelectionTrue, MenuItemsSubmenusIPhoneModeDarkStateDefaultOpenFalseMenuHasSelectionTrue, MenuItemsSubmenusIPhoneModeDarkStateDisabledOpenTrueMenuHasSelectionFalse, MenuItemsSubmenusIPhoneModeDarkStateDefaultOpenTrueMenuHasSelectionFalse, MenuItemsSubmenusIPhoneModeDarkStateDisabledOpenFalseMenuHasSelectionFalse, MenuItemsSubmenusIPhoneModeDarkStateDefaultOpenFalseMenuHasSelectionFalse, MenuItemsSubmenusIPhoneModeLightStateDisabledOpenTrueMenuHasSelectionTrue, MenuItemsSubmenusIPhoneModeLightStateDefaultOpenTrueMenuHasSelectionTrue, MenuItemsSubmenusIPhoneModeLightStateDisabledOpenFalseMenuHasSelectionTrue, MenuItemsSubmenusIPhoneModeLightStateDefaultOpenFalseMenuHasSelectionTrue, MenuItemsSubmenusIPhoneModeLightStateDisabledOpenTrueMenuHasSelectionFalse, MenuItemsSubmenusIPhoneModeLightStateDefaultOpenTrueMenuHasSelectionFalse, MenuItemsSubmenusIPhoneModeLightStateDisabledOpenFalseMenuHasSelectionFalse, MenuItemsSubmenusIPhoneModeLightStateDefaultOpenFalseMenuHasSelectionFalse
- ModeLabelVariants: ModeLabelModeLight, ModeLabelModeDark
- NavigationBarIPadMultitaskingCompactVariants: NavigationBarIPadMultitaskingCompactStyleLarge, NavigationBarIPadMultitaskingCompactStyleDefault
- NextVariants: NextModeLightEnabledFalse, NextModeDarkEnabledFalse, NextModeLightEnabledTrue, NextModeDarkEnabledTrue
- NotificationBackgroundsStackVariants: NotificationBackgroundsStackModeDark, NotificationBackgroundsStackModeLight
- NotificationBannerBGVariants: NotificationBannerBGModeDark, NotificationBannerBGModeLight
- NotificationBGComposedVariants: NotificationBGComposedModeDarkCount3, NotificationBGComposedModeDarkCount2, NotificationBGComposedModeDarkCount1, NotificationBGComposedModeLightCount3, NotificationBGComposedModeLightCount2, NotificationBGComposedModeLightCount1
- NotificationCollapsedVariants: NotificationCollapsedStack3, NotificationCollapsedStack2, NotificationCollapsedStack1
- NotificationMaterialsVariants: NotificationMaterialsStyleBottom, NotificationMaterialsStyleMiddle, NotificationMaterialsStyleTop
- NotificationMenuBGVariants: NotificationMenuBGModeDark, NotificationMenuBGModeLight
- OverlayVariants: OverlayModeDark, OverlayModeLight
- PageControlVariants: PageControlModeLightDots8SelectionTrailing, PageControlModeLightDots8SelectionMiddle, PageControlModeLightDots8SelectionLeading, PageControlModeLightDots7SelectionTrailing, PageControlModeLightDots7SelectionLeading, PageControlModeLightDots6SelectionNA7Dots, PageControlModeLightDots5SelectionNA7Dots, PageControlModeLightDots4SelectionNA7Dots, PageControlModeLightDots3SelectionNA7Dots, PageControlModeLightDots2SelectionNA7Dots, PageControlModeDarkDots8SelectionTrailing, PageControlModeDarkDots8SelectionMiddle, PageControlModeDarkDots8SelectionLeading, PageControlModeDarkDots7SelectionTrailing, PageControlModeDarkDots7SelectionLeading, PageControlModeDarkDots6SelectionNA7Dots, PageControlModeDarkDots5SelectionNA7Dots, PageControlModeDarkDots4SelectionNA7Dots, PageControlModeDarkDots3SelectionNA7Dots, PageControlModeDarkDots2SelectionNA7Dots
- PageControl2Variants: PageControl2SelectedFalse, PageControl2SelectedTrue
- PageControl3Variants: PageControl3Dots8Selection8, PageControl3Dots8Selection7, PageControl3Dots8Selection6, PageControl3Dots8Selection5, PageControl3Dots8Selection4, PageControl3Dots8Selection3, PageControl3Dots8Selection2, PageControl3Dots8Selection1, PageControl3Dots7Selection7, PageControl3Dots7Selection6, PageControl3Dots7Selection5, PageControl3Dots7Selection4, PageControl3Dots7Selection3, PageControl3Dots7Selection2, PageControl3Dots7Selection1, PageControl3Dots6Selection6, PageControl3Dots6Selection5, PageControl3Dots6Selection4, PageControl3Dots6Selection3, PageControl3Dots6Selection2, PageControl3Dots6Selection1, PageControl3Dots5Selection5, PageControl3Dots5Selection4, PageControl3Dots5Selection3, PageControl3Dots5Selection2, PageControl3Dots5Selection1, PageControl3Dots4Selection4, PageControl3Dots4Selection3, PageControl3Dots4Selection2, PageControl3Dots4Selection1, PageControl3Dots3Selection3, PageControl3Dots3Selection2, PageControl3Dots3Selection1, PageControl3Dots2Selection2, PageControl3Dots2Selection1
- PageControl5Variants: PageControl5Dots8Selection8, PageControl5Dots8Selection7, PageControl5Dots8Selection6, PageControl5Dots8Selection5, PageControl5Dots8Selection4, PageControl5Dots8Selection3, PageControl5Dots8Selection2, PageControl5Dots8Selection1, PageControl5Dots7Selection7, PageControl5Dots7Selection6, PageControl5Dots7Selection5, PageControl5Dots7Selection4, PageControl5Dots7Selection3, PageControl5Dots7Selection2, PageControl5Dots7Selection1, PageControl5Dots6Selection6, PageControl5Dots6Selection5, PageControl5Dots6Selection4, PageControl5Dots6Selection3, PageControl5Dots6Selection2, PageControl5Dots6Selection1, PageControl5Dots5Selection5, PageControl5Dots5Selection4, PageControl5Dots5Selection3, PageControl5Dots5Selection2, PageControl5Dots5Selection1, PageControl5Dots4Selection4, PageControl5Dots4Selection3, PageControl5Dots4Selection2, PageControl5Dots4Selection1, PageControl5Dots3Selection3, PageControl5Dots3Selection2, PageControl5Dots3Selection1, PageControl5Dots2Selection2, PageControl5Dots2Selection1
- PageControlBGContextDimVariants: PageControlBGContextDimDots8Selection8, PageControlBGContextDimDots8Selection7, PageControlBGContextDimDots8Selection6, PageControlBGContextDimDots8Selection5, PageControlBGContextDimDots8Selection4, PageControlBGContextDimDots8Selection3, PageControlBGContextDimDots8Selection2, PageControlBGContextDimDots8Selection1, PageControlBGContextDimDots7Selection7, PageControlBGContextDimDots7Selection6, PageControlBGContextDimDots7Selection5, PageControlBGContextDimDots7Selection4, PageControlBGContextDimDots7Selection3, PageControlBGContextDimDots7Selection2, PageControlBGContextDimDots7Selection1, PageControlBGContextDimDots6Selection6, PageControlBGContextDimDots6Selection5, PageControlBGContextDimDots6Selection4, PageControlBGContextDimDots6Selection3, PageControlBGContextDimDots6Selection2, PageControlBGContextDimDots6Selection1, PageControlBGContextDimDots5Selection5, PageControlBGContextDimDots5Selection4, PageControlBGContextDimDots5Selection3, PageControlBGContextDimDots5Selection2, PageControlBGContextDimDots5Selection1, PageControlBGContextDimDots4Selection4, PageControlBGContextDimDots4Selection3, PageControlBGContextDimDots4Selection2, PageControlBGContextDimDots4Selection1, PageControlBGContextDimDots3Selection3, PageControlBGContextDimDots3Selection2, PageControlBGContextDimDots3Selection1, PageControlBGContextDimDots2Selection2, PageControlBGContextDimDots2Selection1
- PageDotsVariants: PageDotsModeDarkSelectedFalse, PageDotsModeDarkSelectedTrue, PageDotsModeLightSelectedFalse, PageDotsModeLightSelectedTrue
- PickerVariants: PickerPositionLast, PickerPositionMiddle
- PickerButtonVariants: PickerButtonSizeLargeSelectedTrue, PickerButtonSizeLargeSelectedFalse, PickerButtonSizeSmallSelectedTrue, PickerButtonSizeSmallSelectedFalse
- PickerCalendarDayDarkVariants: PickerCalendarDayDarkStateSelected, PickerCalendarDayDarkStateCurrentAndSelected, PickerCalendarDayDarkStateCurrent, PickerCalendarDayDarkStateDefault, PickerCalendarDayDarkStateNull
- PickerColorSwatchesDotVariants: PickerColorSwatchesDotStateSelected, PickerColorSwatchesDotStateUnselected
- PopoversIPadOnlyVariants: PopoversIPadOnlyDirectionUpAlignTrailing, PopoversIPadOnlyDirectionUpAlignLeading, PopoversIPadOnlyDirectionUpAlignCenter, PopoversIPadOnlyDirectionTrailingAlignBottom, PopoversIPadOnlyDirectionTrailingAlignTop, PopoversIPadOnlyDirectionTrailingAlignMiddle, PopoversIPadOnlyDirectionLeadingAlignBottom, PopoversIPadOnlyDirectionLeadingAlignTop, PopoversIPadOnlyDirectionLeadingAlignMiddle, PopoversIPadOnlyDirectionDownAlignTrailing, PopoversIPadOnlyDirectionDownAlignLeading, PopoversIPadOnlyDirectionDownAlignCenter
- PopupButtonVariants: PopupButtonStateEnabled, PopupButtonStateDisabled
- PreviousVariants: PreviousModeLightEnabledFalse, PreviousModeDarkEnabledFalse, PreviousModeLightEnabledTrue, PreviousModeDarkEnabledTrue
- ProgressBarVariants: ProgressBarValue100, ProgressBarValue90, ProgressBarValue80, ProgressBarValue70, ProgressBarValue60, ProgressBarValue50, ProgressBarValue40, ProgressBarValue30, ProgressBarValue20, ProgressBarValue10, ProgressBarValue0
- ProgressBarToolbarVariants: ProgressBarToolbarValue100, ProgressBarToolbarValue90, ProgressBarToolbarValue80, ProgressBarToolbarValue70, ProgressBarToolbarValue60, ProgressBarToolbarValue50, ProgressBarToolbarValue40, ProgressBarToolbarValue30, ProgressBarToolbarValue20, ProgressBarToolbarValue10, ProgressBarToolbarValue0
- QuickActionIPadVariants: QuickActionIPadModeDarkDestructiveTrue, QuickActionIPadModeDarkDestructiveFalse, QuickActionIPadModeLightDestructiveTrue, QuickActionIPadModeLightDestructiveFalse
- QuickActionIPhoneVariants: QuickActionIPhoneModeDarkDestructiveTrue, QuickActionIPhoneModeDarkDestructiveFalse, QuickActionIPhoneModeLightDestructiveTrue, QuickActionIPhoneModeLightDestructiveFalse
- ReplaceButtonVariants: ReplaceButtonModeLightStateDisabled, ReplaceButtonModeDarkStateDisabled, ReplaceButtonModeLightStateDefault, ReplaceButtonModeDarkStateDefault
- ResizeIndicatorVariants: ResizeIndicatorModeDarkElevated, ResizeIndicatorModeDark, ResizeIndicatorModeLight
- RowVariants: RowHeightTall, RowHeightRegular
- RowButtonVariants: RowButtonValueDisabled, RowButtonValueDestructive, RowButtonValueDefault
- RowWithSwipeActionsVariants: RowWithSwipeActionsHeightTallSwipeRight, RowWithSwipeActionsHeightRegularSwipeRight, RowWithSwipeActionsHeightTallSwipeLeft, RowWithSwipeActionsHeightRegularSwipeLeft
- ScrollEdgeEffectHardVariants: ScrollEdgeEffectHardEdgeBottom, ScrollEdgeEffectHardEdgeTop
- ScrollEdgeEffectSoftVariants: ScrollEdgeEffectSoftEdgeLeading, ScrollEdgeEffectSoftEdgeTrailing, ScrollEdgeEffectSoftEdgeBottom, ScrollEdgeEffectSoftEdgeTop
- SearchAccessoryVariants: SearchAccessoryShowFiltersTrue, SearchAccessoryShowFiltersFalse
- SearchBottomVariants: SearchBottomModeDarkStateTyping, SearchBottomModeDarkStateValue, SearchBottomModeDarkStatePlaceholder, SearchBottomModeLightStateTyping, SearchBottomModeLightStatePlaceholder, SearchBottomModeLightStateValue
- SearchEmojiVariants: SearchEmojiModeDark, SearchEmojiModeLight
- SearchFieldVariants: SearchFieldStateTyping, SearchFieldStateFocused, SearchFieldStatePlaceholder
- SearchField2Variants: SearchField2ModeDarkStateTyping, SearchField2ModeDarkStateValue, SearchField2ModeDarkStatePlaceholder, SearchField2ModeLightStateTyping, SearchField2ModeLightStateValue, SearchField2ModeLightStatePlaceholder
- SearchFieldDarkVariants: SearchFieldDarkStateTyping, SearchFieldDarkStateFocused, SearchFieldDarkStatePlaceholder
- SearchFieldValueBGContextVariants: SearchFieldValueBGContextStateTyping, SearchFieldValueBGContextStateValue, SearchFieldValueBGContextStatePlaceholder
- SearchTopVariants: SearchTopModeDarkStateValue, SearchTopModeDarkStateTyping, SearchTopModeDarkStatePlaceholder, SearchTopModeLightStateValue, SearchTopModeLightStateTyping, SearchTopModeLightStatePlaceholder
- SectionHeaderVariants: SectionHeaderModeDark, SectionHeaderModeLight
- SectionTitleIPadVariants: SectionTitleIPadModeDark, SectionTitleIPadModeLight
- SectionTitleIPhoneVariants: SectionTitleIPhoneModeDark, SectionTitleIPhoneModeLight
- SegmentedControlVariants: SegmentedControlSegments5Selected5, SegmentedControlSegments5Selected4, SegmentedControlSegments5Selected3, SegmentedControlSegments5Selected2, SegmentedControlSegments5Selected1, SegmentedControlSegments4Selected4, SegmentedControlSegments4Selected3, SegmentedControlSegments4Selected2, SegmentedControlSegments4Selected1, SegmentedControlSegments3Selected3, SegmentedControlSegments3Selected2, SegmentedControlSegments3Selected1, SegmentedControlSegments2Selected2, SegmentedControlSegments2Selected1
- SegmentedControlButtonVariants: SegmentedControlButtonModeDarkSelectedFalse, SegmentedControlButtonModeDarkSelectedTrue, SegmentedControlButtonModeLightSelectedFalse, SegmentedControlButtonModeLightSelectedTrue
- SegmentedControlButtonsVariants: SegmentedControlButtonsStateSelectedModeDark, SegmentedControlButtonsStateDefaultModeDark, SegmentedControlButtonsStateSelectedModeLight, SegmentedControlButtonsStateDefaultModeLight
- SelectionVariants: SelectionModeDark, SelectionModeLight
- Selection2Variants: Selection2ModeDark, Selection2ModeLight
- SelectionBGVariants: SelectionBGModeDark, SelectionBGModeLight
- SeparatorVariants: SeparatorModeDark, SeparatorModeLight
- SeparatorIPadVariants: SeparatorIPadModeDark, SeparatorIPadModeLight
- SeparatorIPhone2Variants: SeparatorIPhone2ModeDark, SeparatorIPhone2ModeLight
- SeparatorsVariants: SeparatorsModeDarkElevated, SeparatorsModeDark, SeparatorsModeLight
- SheetFullScreenIPhoneVariants: SheetFullScreenIPhoneStackedTrue, SheetFullScreenIPhoneStackedFalse
- ShortcutsVariants: ShortcutsModeDarkElevated, ShortcutsModeDark, ShortcutsModeLight
- SidebarControlVariants: SidebarControlToggleSidebar, SidebarControlToggleTabBar
- SidebarEditButtonVariants: SidebarEditButtonModeDarkTypeSelectable, SidebarEditButtonModeDarkTypeSelected, SidebarEditButtonModeDarkTypeDelete, SidebarEditButtonModeLightTypeSelectable, SidebarEditButtonModeLightTypeSelected, SidebarEditButtonModeLightTypeDelete
- SidebarLeadingVariants: SidebarLeadingModeDarkStateSelectedImageHidden, SidebarLeadingModeDarkStateSelectedImageCollection, SidebarLeadingModeDarkStateSelectedImageBitmap, SidebarLeadingModeDarkStateSelectedImageSymbol, SidebarLeadingModeDarkStateDefaultImageHidden, SidebarLeadingModeDarkStateDefaultImageCollection, SidebarLeadingModeDarkStateDefaultImageBitmap, SidebarLeadingModeDarkStateDefaultImageSymbol, SidebarLeadingModeLightStateSelectedImageHidden, SidebarLeadingModeLightStateSelectedImageCollection, SidebarLeadingModeLightStateSelectedImageBitmap, SidebarLeadingModeLightStateSelectedImageSymbol, SidebarLeadingModeLightStateDefaultImageHidden, SidebarLeadingModeLightStateDefaultImageCollection, SidebarLeadingModeLightStateDefaultImageBitmap, SidebarLeadingModeLightStateDefaultImageSymbol
- SidebarRowVariants: SidebarRowStateDisabledIndentLevel2, SidebarRowStateDisabledIndentLevel1, SidebarRowStateDisabledIndentLevel0, SidebarRowStateSelectedIndentLevel2, SidebarRowStateDisclosableIndentLevel2, SidebarRowStateSelectedIndentLevel1, SidebarRowStateDisclosableIndentLevel1, SidebarRowStateSelectedIndentLevel0, SidebarRowStateDisclosableIndentLevel0, SidebarRowStateDefaultIndentLevel2, SidebarRowStateDefaultIndentLevel1, SidebarRowStateDefaultIndentLevel0
- SidebarSearchFieldVariants: SidebarSearchFieldModeDarkStateTyping, SidebarSearchFieldModeDarkStateValue, SidebarSearchFieldModeDarkStatePlaceholder, SidebarSearchFieldModeLightStateTyping, SidebarSearchFieldModeLightStateValue, SidebarSearchFieldModeLightStatePlaceholder
- SidebarTrailingVariants: SidebarTrailingModeDarkStateSelectedTypeDetail, SidebarTrailingModeDarkStateSelectedTypeCheckmark, SidebarTrailingModeDarkStateSelectedTypeInfo, SidebarTrailingModeDarkStateSelectedTypeDisclosure, SidebarTrailingModeDarkStateSelectedTypeSymbol, SidebarTrailingModeDarkStateSelectedTypeToggle, SidebarTrailingModeDarkStateDefaultTypeDetail, SidebarTrailingModeDarkStateDefaultTypeCheckmark, SidebarTrailingModeDarkStateDefaultTypeInfo, SidebarTrailingModeDarkStateDefaultTypeDisclosure, SidebarTrailingModeDarkStateDefaultTypeSymbol, SidebarTrailingModeDarkStateDefaultTypeToggle, SidebarTrailingModeLightStateSelectedTypeDetail, SidebarTrailingModeLightStateSelectedTypeCheckmark, SidebarTrailingModeLightStateSelectedTypeInfo, SidebarTrailingModeLightStateSelectedTypeDisclosure, SidebarTrailingModeLightStateSelectedTypeSymbol, SidebarTrailingModeLightStateSelectedTypeToggle, SidebarTrailingModeLightStateDefaultTypeDetail, SidebarTrailingModeLightStateDefaultTypeCheckmark, SidebarTrailingModeLightStateDefaultTypeInfo, SidebarTrailingModeLightStateDefaultTypeDisclosure, SidebarTrailingModeLightStateDefaultTypeSymbol, SidebarTrailingModeLightStateDefaultTypeToggle
- SlidersVariants: SlidersValue100, SlidersValue75, SlidersValue50, SlidersValue25, SlidersValue0
- StatusBarAndMenuBarVariants: StatusBarAndMenuBarTypeStatusAndMenuBarWindowed, StatusBarAndMenuBarTypeStatusAndMenuBarFullscreen, StatusBarAndMenuBarTypeStatusBarOnly
- StickerSheetVariants: StickerSheetModeLight, StickerSheetModeDark
- SubmenuIndicatorVariants: SubmenuIndicatorOpenTrue, SubmenuIndicatorOpenFalse
- SubtitleCaptionVariants: SubtitleCaptionModeDark, SubtitleCaptionModeLight
- SubtitleSubheadlineVariants: SubtitleSubheadlineModeDark, SubtitleSubheadlineModeLight
- SuggestionVariants: SuggestionModeDark, SuggestionModeLight
- SwatchVariants: SwatchTypeLabelModeDark, SwatchTypeColorModeDark, SwatchTypeLabelModeLight, SwatchTypeColorModeLight
- SwatchesAddButtonVariants: SwatchesAddButtonModeLight, SwatchesAddButtonModeDark
- SwipeActionsVariants: SwipeActionsActions3TypeSymbolText, SwipeActionsActions2TypeSymbolText, SwipeActionsActions1TypeSymbolText, SwipeActionsActions3TypeText, SwipeActionsActions2TypeText, SwipeActionsActions1TypeText, SwipeActionsActions3TypeSymbol, SwipeActionsActions2TypeSymbol, SwipeActionsActions1TypeSymbol
- SymbolVariants: SymbolStateDefaultModeDarkElevated, SymbolStateDisabledModeDarkElevated, SymbolStateDefaultModeDark, SymbolStateDisabledModeDark, SymbolStateDefaultModeLight, SymbolStateDisabledModeLight
- Symbol2Variants: Symbol2ModeLight, Symbol2ModeDark
- SystemIconsVariants: SystemIconsIconWeatherModeDefault, SystemIconsIconAirdropModeDefault, SystemIconsIconWeatherModeDark, SystemIconsIconAirdropModeDark, SystemIconsIconWeatherModeClearLight, SystemIconsIconAirdropModeClearLight, SystemIconsIconWatchModeDefault, SystemIconsIconWatchModeDark, SystemIconsIconWatchModeClearLight, SystemIconsIconWalletModeDefault, SystemIconsIconWalletModeDark, SystemIconsIconWalletModeClearLight, SystemIconsIconVoiceMemosModeDefault, SystemIconsIconVoiceMemosModeDark, SystemIconsIconVoiceMemosModeClearLight, SystemIconsIconTVModeDefault, SystemIconsIconTVModeDark, SystemIconsIconTVModeClearLight, SystemIconsIconTranslateModeDefault, SystemIconsIconTranslateModeDark, SystemIconsIconTranslateModeClearLight, SystemIconsIconTipsModeDefault, SystemIconsIconTipsModeDark, SystemIconsIconTipsModeClearLight, SystemIconsIconStocksModeDefault, SystemIconsIconStocksModeDark, SystemIconsIconStocksModeClearLight, SystemIconsIconShortcutsModeDefault, SystemIconsIconShortcutsModeDark, SystemIconsIconShortcutsModeClearLight, SystemIconsIconSettingsModeDefault, SystemIconsIconSettingsModeDark, SystemIconsIconSettingsModeClearLight, SystemIconsIconSafariModeDefault, SystemIconsIconSafariModeDark, SystemIconsIconSafariModeClearLight, SystemIconsIconRemindersModeDefault, SystemIconsIconRemindersModeDark, SystemIconsIconRemindersModeClearLight, SystemIconsIconPreviewModeDefault, SystemIconsIconPreviewModeDark, SystemIconsIconPreviewModeClearLight, SystemIconsIconPodcastsModeDefault, SystemIconsIconPodcastsModeDark, SystemIconsIconPodcastsModeClearLight, SystemIconsIconPhotosModeDefault, SystemIconsIconPhotosModeDark, SystemIconsIconPhotosModeClearLight, SystemIconsIconPhoneModeDefault, SystemIconsIconPhoneModeDark, SystemIconsIconPhoneModeClearLight, SystemIconsIconPasswordsModeDefault, SystemIconsIconPasswordsModeDark, SystemIconsIconPasswordsModeClearLight, SystemIconsIconPagesModeDefault, SystemIconsIconPagesModeDark, SystemIconsIconPagesModeClearLight, SystemIconsIconNumberModeDefault, SystemIconsIconNumberModeDark, SystemIconsIconNumberModeClearLight, SystemIconsIconNotesModeDefault, SystemIconsIconNotesModeDark, SystemIconsIconNotesModeClearLight, SystemIconsIconNewsModeDefault, SystemIconsIconNewsModeDark, SystemIconsIconNewsModeClearLight, SystemIconsIconMusicModeDefault, SystemIconsIconMusicModeDark, SystemIconsIconMusicModeClearLight, SystemIconsIconMessagesModeDefault, SystemIconsIconMessagesModeDark, SystemIconsIconMessagesModeClearLight, SystemIconsIconMeasureModeDefault, SystemIconsIconMeasureModeDark, SystemIconsIconMeasureModeClearLight, SystemIconsIconMapsModeDefault, SystemIconsIconMapsModeDark, SystemIconsIconMapsModeClearLight, SystemIconsIconMailModeDefault, SystemIconsIconMailModeDark, SystemIconsIconMailModeClearLight, SystemIconsIconKeynoteModeDefault, SystemIconsIconKeynoteModeDark, SystemIconsIconKeynoteModeClearLight, SystemIconsIconITunesStoreModeDefault, SystemIconsIconITunesStoreModeDark, SystemIconsIconITunesStoreModeClearLight, SystemIconsIconHomeModeDefault, SystemIconsIconHomeModeDark, SystemIconsIconHomeModeClearLight, SystemIconsIconHealthModeDefault, SystemIconsIconHealthModeDark, SystemIconsIconHealthModeClearLight, SystemIconsIconGamesModeDefault, SystemIconsIconGamesModeDark, SystemIconsIconGamesModeClearLight, SystemIconsIconFreeformModeDefault, SystemIconsIconFreeformModeDark, SystemIconsIconFreeformModeClearLight, SystemIconsIconFitnessModeDefault, SystemIconsIconFitnessModeDark, SystemIconsIconFitnessModeClearLight, SystemIconsIconFindMyModeDefault, SystemIconsIconFindMyModeDark, SystemIconsIconFindMyModeClearLight, SystemIconsIconFilesModeDefault, SystemIconsIconFilesModeDark, SystemIconsIconFilesModeClearLight, SystemIconsIconFaceTimeModeDefault, SystemIconsIconFaceTimeModeDark, SystemIconsIconFaceTimeModeClearLight, SystemIconsIconContactsModeDefault, SystemIconsIconContactsModeDark, SystemIconsIconContactsModeClearLight, SystemIconsIconClockModeDefault, SystemIconsIconClockModeDark, SystemIconsIconClockModeClearLight, SystemIconsIconCalculatorModeDefault, SystemIconsIconCalculatorModeDark, SystemIconsIconCalculatorModeClearLight, SystemIconsIconCameraModeDefault, SystemIconsIconCameraModeDark, SystemIconsIconCameraModeClearLight, SystemIconsIconCalendarModeDefault, SystemIconsIconCalendarModeDark, SystemIconsIconCalendarModeClearLight, SystemIconsIconBooksModeDefault, SystemIconsIconBooksModeDark, SystemIconsIconBooksModeClearLight, SystemIconsIconAppStoreModeDefault, SystemIconsIconAppStoreModeDark, SystemIconsIconAppStoreModeClearLight
- TabBarButtonIPadSymbolVariants: TabBarButtonIPadSymbolSelectedFalseModeLight, TabBarButtonIPadSymbolSelectedTrueModeLight, TabBarButtonIPadSymbolModeDarkSelectedFalse, TabBarButtonIPadSymbolModeDarkSelectedTrue
- TabBarButtonIPadTextVariants: TabBarButtonIPadTextSelectedFalseModeLight, TabBarButtonIPadTextSelectedTrueModeLight, TabBarButtonIPadTextSelectedFalseModeDark, TabBarButtonIPadTextSelectedTrueModeDark
- TabBarButtonIPhoneSearchVariants: TabBarButtonIPhoneSearchSelectedTrueModeLight, TabBarButtonIPhoneSearchSelectedFalseModeLight, TabBarButtonIPhoneSearchSelectedTrueModeDark, TabBarButtonIPhoneSearchSelectedFalseModeDark
- TabBarButtonIPhoneTextVariants: TabBarButtonIPhoneTextSelectedTrueModeLight, TabBarButtonIPhoneTextSelectedFalseModeLight, TabBarButtonIPhoneTextSelectedTrueModeDark, TabBarButtonIPhoneTextSelectedFalseModeDark
- TabBarIPadVariants: TabBarIPadTabs88Selected, TabBarIPadTabs87Selected, TabBarIPadTabs86Selected, TabBarIPadTabs85Selected, TabBarIPadTabs84Selected, TabBarIPadTabs83Selected, TabBarIPadTabs82Selected, TabBarIPadTabs81Selected, TabBarIPadTabs77Selected, TabBarIPadTabs76Selected, TabBarIPadTabs75Selected, TabBarIPadTabs74Selected, TabBarIPadTabs73Selected, TabBarIPadTabs72Selected, TabBarIPadTabs71Selected, TabBarIPadTabs66Selected, TabBarIPadTabs65Selected, TabBarIPadTabs64Selected, TabBarIPadTabs63Selected, TabBarIPadTabs62Selected, TabBarIPadTabs61Selected, TabBarIPadTabs55Selected, TabBarIPadTabs54Selected, TabBarIPadTabs53Selected, TabBarIPadTabs52Selected, TabBarIPadTabs51Selected, TabBarIPadTabs44Selected, TabBarIPadTabs43Selected, TabBarIPadTabs42Selected, TabBarIPadTabs41Selected, TabBarIPadTabs33Selected, TabBarIPadTabs32Selected, TabBarIPadTabs31Selected, TabBarIPadTabs22Selected, TabBarIPadTabs21Selected
- TabBarIPhoneVariants: TabBarIPhoneSeparateSearchFalseMinimizedTrueTabs5, TabBarIPhoneSeparateSearchTrueMinimizedTrueTabs5, TabBarIPhoneSeparateSearchTrueMinimizedTrueTabs4, TabBarIPhoneSeparateSearchTrueMinimizedTrueTabs3, TabBarIPhoneSeparateSearchTrueMinimizedTrueTabs2, TabBarIPhoneSeparateSearchFalseMinimizedTrueTabs4, TabBarIPhoneSeparateSearchFalseMinimizedTrueTabs3, TabBarIPhoneSeparateSearchFalseMinimizedTrueTabs2, TabBarIPhoneSeparateSearchTrueMinimizedFalseTabs5, TabBarIPhoneSeparateSearchTrueMinimizedFalseTabs4, TabBarIPhoneSeparateSearchTrueMinimizedFalseTabs3, TabBarIPhoneSeparateSearchTrueMinimizedFalseTabs2, TabBarIPhoneSeparateSearchFalseMinimizedFalseTabs4, TabBarIPhoneSeparateSearchFalseMinimizedFalseTabs3, TabBarIPhoneSeparateSearchFalseMinimizedFalseTabs2, TabBarIPhoneSeparateSearchFalseMinimizedFalseTabs5
- TabButtonsSidebarVariants: TabButtonsSidebarModeDarkStateSelected, TabButtonsSidebarModeDarkElevatedStateSelected, TabButtonsSidebarModeLightStateSelected
- TabButtonsSymbolVariants: TabButtonsSymbolModeDarkStateSelected, TabButtonsSymbolModeDarkElevatedStateSelected, TabButtonsSymbolModeDarkStateUnselected, TabButtonsSymbolModeDarkElevatedStateUnselected, TabButtonsSymbolModeLightStateSelected, TabButtonsSymbolModeLightStateUnselected
- TabButtonsTextVariants: TabButtonsTextModeDarkStateSelected, TabButtonsTextModeDarkElevatedStateSelected, TabButtonsTextModeDarkStateUnselected, TabButtonsTextModeDarkElevatedStateUnselected, TabButtonsTextModeLightStateSelected, TabButtonsTextModeLightStateUnselected
- TextField2Variants: TextField2StatePlaceholder, TextField2StateFocused, TextField2StateValueEntered, TextField2StateTyping
- TextFieldBackgroundVariants: TextFieldBackgroundModeDark, TextFieldBackgroundModeLight
- TextFieldDarkVariants: TextFieldDarkStateTextEntered, TextFieldDarkStateFocused
- TimeVariants: TimeModeDark, TimeModeLight
- TitleVariants: TitleModeDark, TitleModeLight
- TitleAndDescriptionVariants: TitleAndDescriptionModeDarkElevated, TitleAndDescriptionModeDark, TitleAndDescriptionModeLight
- TitleBodyVariants: TitleBodyModeDark, TitleBodyModeLight
- TitleDefaultCompactVariants: TitleDefaultCompactModeLightTitleTypeDocument, TitleDefaultCompactModeLightTitleTypeDefault, TitleDefaultCompactModeDarkTitleTypeDocument, TitleDefaultCompactModeDarkTitleTypeDefault
- TitleLargeTitleVariants: TitleLargeTitleModeDark, TitleLargeTitleModeLight
- TitleSubheadlineVariants: TitleSubheadlineModeDark, TitleSubheadlineModeLight
- ToggleSwitchVariants: ToggleSwitchStateOff, ToggleSwitchStateOn
- ToolbarVariants: ToolbarStateDisabled, ToolbarStateDefault
- ToolbarBottomIPhoneVariants: ToolbarBottomIPhoneTypeSearchWithFocus, ToolbarBottomIPhoneTypeSearchLeadingItem, ToolbarBottomIPhoneTypeSearchTrailingItem, ToolbarBottomIPhoneTypeSearch, ToolbarBottomIPhoneTypeButtons, ToolbarBottomIPhoneTypeButtonsPageDots
- ToolbarButtonSymbolVariants: ToolbarButtonSymbolModeDark, ToolbarButtonSymbolModeLight
- ToolbarButtonTextVariants: ToolbarButtonTextModeDark, ToolbarButtonTextModeLight
- ToolbarTopIPadVariants: ToolbarTopIPadStyleCompactLargeTabBarTrue, ToolbarTopIPadStyleLargeTitleTabBarTrue, ToolbarTopIPadStyleTitle2LineLeftTabBarTrue, ToolbarTopIPadStyleTitle2LineTabBarTrue, ToolbarTopIPadStyleCompactLargeTabBarFalse, ToolbarTopIPadStyleLargeTitleTabBarFalse, ToolbarTopIPadStyleTitle2LineLeftTabBarFalse, ToolbarTopIPadStyleTitle2LineTabBarFalse
- ToolbarTopIPhoneVariants: ToolbarTopIPhoneStyleCompactLarge, ToolbarTopIPhoneStyleLargeTitle, ToolbarTopIPhoneStyleTitle2LineLeft, ToolbarTopIPhoneStyleTitle2Line, ToolbarTopIPhoneStyleDefault
- ToolbarTopRegularSizeClassVariants: ToolbarTopRegularSizeClassStyleDocumentBrowser, ToolbarTopRegularSizeClassStyleDefault, ToolbarTopRegularSizeClassStyleLargeTitle, ToolbarTopRegularSizeClassStyleDocument
- ToolbarTopSheetVariants: ToolbarTopSheetModeLightStyleCompactLarge, ToolbarTopSheetModeLightStyleDefault, ToolbarTopSheetModeLightStyleLargeTitle, ToolbarTopSheetModeLightStyleTitle2LineLeft, ToolbarTopSheetModeLightStyleTitle2Line
- TrailingVariants: TrailingDisclosableFalse, TrailingDisclosableTrue
- Trailing2Variants: Trailing2TypePopUp, Trailing2TypeButton, Trailing2TypeStepper, Trailing2TypePickerDate, Trailing2TypePickerTime, Trailing2TypePickerDateAndTime, Trailing2TypeToggle, Trailing2TypeDisclosure, Trailing2TypeDefault
- TrailingDarkVariants: TrailingDarkTypePopUp, TrailingDarkTypeButton, TrailingDarkTypeStepper, TrailingDarkTypePickerDate, TrailingDarkTypePickerTime, TrailingDarkTypePickerDateAndTime, TrailingDarkTypeToggle, TrailingDarkTypeDisclosure, TrailingDarkTypeDefault
- TrailingDisclosureVariants: TrailingDisclosureOpenTrue, TrailingDisclosureOpenFalse
- TrailingLightVariants: TrailingLightTypePopUp, TrailingLightTypeButton, TrailingLightTypeStepper, TrailingLightTypePickerDate, TrailingLightTypePickerTime, TrailingLightTypePickerDateAndTime, TrailingLightTypeToggle, TrailingLightTypeDisclosure, TrailingLightTypeDefault
- ViewContentsVariants: ViewContentsModeDark, ViewContentsModeLight
- WallpapersIPadVariants: WallpapersIPadModeLight, WallpapersIPadModeDark
- WallpapersIPhoneVariants: WallpapersIPhoneModeLight, WallpapersIPhoneModeDark
- WatchAppIconVariants: WatchAppIconTypeCustom, WatchAppIconTypeSystem
- WatchBackgroundVariants: WatchBackgroundStyleOverDarkBackground, WatchBackgroundStyleSolidColor, WatchBackgroundStyleGradient
- WatchBezelsVariants: WatchBezelsBezelSize49mm, WatchBezelsBezelSize46mm, WatchBezelsBezelSize44mm, WatchBezelsBezelSize42mm, WatchBezelsBezelSize40mm
- WatchButtonCircularVariants: WatchButtonCircularTypePrimaryFloating, WatchButtonCircularTypePrimary, WatchButtonCircularTypeDefaultFloating, WatchButtonCircularTypeDefault
- WatchButtonPayVariants: WatchButtonPaySizeSmall, WatchButtonPaySizeFullWidth
- WatchButtonPillVariants: WatchButtonPillTypeDestructiveFloating, WatchButtonPillTypeDestructive, WatchButtonPillTypeTertiary, WatchButtonPillTypeSecondary, WatchButtonPillTypePrimaryFloating, WatchButtonPillTypePrimary, WatchButtonPillTypeDefaultFloating, WatchButtonPillTypeDefault
- WatchExampleVariants: WatchExampleTypeTitleWithCloseButton, WatchExampleTypeSymbolDescription, WatchExampleTypeDescriptionOnly, WatchExampleTypeTitleDescription, WatchExampleTypeTitle
- WatchExampleErrorsVariants: WatchExampleErrorsTypeTitleWithCloseButton, WatchExampleErrorsTypeSymbolDescription, WatchExampleErrorsTypeDescriptionOnly, WatchExampleErrorsTypeTitleDescription, WatchExampleErrorsTypeTitleOnly
- WatchExampleListsVariants: WatchExampleListsTypeWorkout, WatchExampleListsTypeMenu, WatchExampleListsTypeColorful, WatchExampleListsTypeGroupedListItems
- WatchExampleNotificationsVariants: WatchExampleNotificationsTypeLongLook, WatchExampleNotificationsTypeShortLook, WatchExampleNotificationsTypeBanner
- WatchExamplePickersVariants: WatchExamplePickersWheels3MixedWidths, WatchExamplePickersWheels3, WatchExamplePickersWheels2, WatchExamplePickersWheels1
- WatchExampleProgressIndicatorsVariants: WatchExampleProgressIndicatorsTypeContentArea, WatchExampleProgressIndicatorsTypeInlineTableRow
- WatchFacesVariants: WatchFacesFaceModularSize49mm, WatchFacesFaceModularSize46mm, WatchFacesFaceModularSize44mm, WatchFacesFaceModularSize42mm, WatchFacesFaceModularSize40mm, WatchFacesFaceFluxSize49mm, WatchFacesFaceFluxSize46mm, WatchFacesFaceFluxSize44mm, WatchFacesFaceFluxSize42mm, WatchFacesFaceFluxSize40mm, WatchFacesFaceActivityAnalogSize49mm, WatchFacesFaceActivityAnalogSize46mm, WatchFacesFaceActivityAnalogSize44mm, WatchFacesFaceActivityAnalogSize42mm, WatchFacesFaceActivityAnalogSize40mm
- WatchItemVariants: WatchItemText3LineLabelSymbol, WatchItemTextLabelSymbol, WatchItemTextSubtitleTitle, WatchItemTextLabelSubtitle, WatchItemTextDefault
- WatchItemCarouselVariants: WatchItemCarouselScrollStatePartiallyClippedTintedFalse, WatchItemCarouselScrollStateFullViewTintedFalse, WatchItemCarouselScrollStatePartiallyClippedTintedTrue, WatchItemCarouselScrollStateFullViewTintedTrue
- WatchItemSourceListVariants: WatchItemSourceListScrollStatePartiallyClipped, WatchItemSourceListScrollStateFullView
- WatchModeVariants: WatchModeModeLight, WatchModeModeDark
- WatchNavigationBarVariants: WatchNavigationBarTypeModalTextButtons, WatchNavigationBarTypeModalTextConfirmButton, WatchNavigationBarTypeModal1Control, WatchNavigationBarTypeModalDefault, WatchNavigationBarTypeChildStatusTitle, WatchNavigationBarTypeCenterAligned, WatchNavigationBarTypeStatusLargeTitle, WatchNavigationBarTypeStatusTitle, WatchNavigationBarTypeStatusBar
- WatchPickerVariants: WatchPickerValues3MixedWidthsSelected3, WatchPickerValues3MixedWidthsSelected2, WatchPickerValues3MixedWidthsSelected1, WatchPickerValues3MixedWidthsSelectedNone, WatchPickerValues3Selected2, WatchPickerValues3Selected1, WatchPickerValues3Selected3, WatchPickerValues3SelectedNone, WatchPickerValues2Selected2, WatchPickerValues2Selected1, WatchPickerValues2SelectedNone, WatchPickerValues1Selected1, WatchPickerValues1SelectedNone
- WatchProgressIndicatorVariants: WatchProgressIndicatorSizeSmallStatusBar, WatchProgressIndicatorSizeMediumTableRow, WatchProgressIndicatorSizeLargeContentArea
- WatchScrollbarVariants: WatchScrollbarScrollViewHeight400Position4, WatchScrollbarScrollViewHeight400Position3, WatchScrollbarScrollViewHeight400Position2, WatchScrollbarScrollViewHeight400Position1, WatchScrollbarScrollViewHeight300Position3, WatchScrollbarScrollViewHeight300Position2, WatchScrollbarScrollViewHeight300Position1, WatchScrollbarScrollViewHeight200Position2, WatchScrollbarScrollViewHeight200Position1
- WatchSliderVariants: WatchSliderTypeContinuousStops6Value6, WatchSliderTypeContinuousStops6Value5, WatchSliderTypeContinuousStops6Value4, WatchSliderTypeContinuousStops6Value3, WatchSliderTypeContinuousStops6Value2, WatchSliderTypeContinuousStops6Value1, WatchSliderTypeContinuousStops5Value5, WatchSliderTypeContinuousStops5Value4, WatchSliderTypeContinuousStops5Value3, WatchSliderTypeContinuousStops5Value2, WatchSliderTypeContinuousStops5Value1, WatchSliderTypeContinuousStops4Value4, WatchSliderTypeContinuousStops4Value3, WatchSliderTypeContinuousStops4Value2, WatchSliderTypeContinuousStops4Value1, WatchSliderTypeContinuousStops3Value3, WatchSliderTypeContinuousStops3Value2, WatchSliderTypeContinuousStops3Value1, WatchSliderTypeSegmentedStops6Value6, WatchSliderTypeSegmentedStops6Value5, WatchSliderTypeSegmentedStops6Value4, WatchSliderTypeSegmentedStops6Value3, WatchSliderTypeSegmentedStops6Value2, WatchSliderTypeSegmentedStops6Value1, WatchSliderTypeSegmentedStops5Value5, WatchSliderTypeSegmentedStops5Value4, WatchSliderTypeSegmentedStops5Value3, WatchSliderTypeSegmentedStops5Value2, WatchSliderTypeSegmentedStops5Value1, WatchSliderTypeSegmentedStops4Value4, WatchSliderTypeSegmentedStops4Value3, WatchSliderTypeSegmentedStops4Value2, WatchSliderTypeSegmentedStops4Value1, WatchSliderTypeSegmentedStops3Value3, WatchSliderTypeSegmentedStops3Value2, WatchSliderTypeSegmentedStops3Value1
- WatchSmartStackVariants: WatchSmartStackSize40mm, WatchSmartStackSize42mm, WatchSmartStackSize44mm, WatchSmartStackSize46mm, WatchSmartStackSize49mm
- WatchStickerSheetVariants: WatchStickerSheetModeLight, WatchStickerSheetModeDark
- WatchSwatchVariants: WatchSwatchTypeLabelModeLight, WatchSwatchTypeColorModeLight, WatchSwatchTypeLabelModeDark, WatchSwatchTypeColorModeDark
- WatchTabsVariants: WatchTabsPages4Position4, WatchTabsPages4Position3, WatchTabsPages4Position2, WatchTabsPages4Position1, WatchTabsPages3Position3, WatchTabsPages3Position2, WatchTabsPages3Position1, WatchTabsPages2Position2, WatchTabsPages2Position1
- WatchToggleVariants: WatchToggleStateOff, WatchToggleStateOn
- WatchWheelsVariants: WatchWheelsStateDefault, WatchWheelsStateFocused
- WatchWidgetsVariants: WatchWidgetsTypeProgressViewControlWithoutCurrentValueSize49mm, WatchWidgetsTypeProgressViewControlWithoutCurrentValueSize46mm, WatchWidgetsTypeProgressViewControlWithoutCurrentValueSize44mm, WatchWidgetsTypeProgressViewControlWithoutCurrentValueSize42mm, WatchWidgetsTypeProgressViewControlWithoutCurrentValueSize40mm, WatchWidgetsTypeProgressViewControlWithCurrentValueSize49mm, WatchWidgetsTypeProgressViewControlWithCurrentValueSize46mm, WatchWidgetsTypeProgressViewControlWithCurrentValueSize44mm, WatchWidgetsTypeProgressViewControlWithCurrentValueSize42mm, WatchWidgetsTypeProgressViewControlWithCurrentValueSize40mm, WatchWidgetsTypeProgressViewSize49mm, WatchWidgetsTypeProgressViewSize46mm, WatchWidgetsTypeProgressViewSize44mm, WatchWidgetsTypeProgressViewSize42mm, WatchWidgetsTypeProgressViewSize40mm, WatchWidgetsTypeLabelGroupWithBarSize49mm, WatchWidgetsTypeLabelGroupWithBarSize46mm, WatchWidgetsTypeLabelGroupWithBarSize44mm, WatchWidgetsTypeLabelGroupWithBarSize42mm, WatchWidgetsTypeLabelGroupWithBarSize40mm, WatchWidgetsTypeLabelGroupWithIconSize49mm, WatchWidgetsTypeLabelGroupWithIconSize46mm, WatchWidgetsTypeLabelGroupWithIconSize44mm, WatchWidgetsTypeLabelGroupWithIconSize42mm, WatchWidgetsTypeLabelGroupWithIconSize40mm, WatchWidgetsTypeLabelGroupDoubleSize49mm, WatchWidgetsTypeLabelGroupDoubleSize46mm, WatchWidgetsTypeLabelGroupDoubleSize44mm, WatchWidgetsTypeLabelGroupDoubleSize42mm, WatchWidgetsTypeLabelGroupDoubleSize40mm, WatchWidgetsTypeLabelGroupSize49mm, WatchWidgetsTypeLabelGroupSize46mm, WatchWidgetsTypeLabelGroupSize44mm, WatchWidgetsTypeLabelGroupSize42mm, WatchWidgetsTypeLabelGroupSize40mm, WatchWidgetsTypeLabeledContentSize49mm, WatchWidgetsTypeLabeledContentSize46mm, WatchWidgetsTypeLabeledContentSize44mm, WatchWidgetsTypeLabeledContentSize42mm, WatchWidgetsTypeLabeledContentSize40mm, WatchWidgetsTypeGaugeSize49mm, WatchWidgetsTypeGaugeSize46mm, WatchWidgetsTypeGaugeSize44mm, WatchWidgetsTypeGaugeSize42mm, WatchWidgetsTypeGaugeSize40mm, WatchWidgetsTypeComboSize49mm, WatchWidgetsTypeComboSize46mm, WatchWidgetsTypeComboSize44mm, WatchWidgetsTypeComboSize42mm, WatchWidgetsTypeComboSize40mm, WatchWidgetsTypeChartSize49mm, WatchWidgetsTypeChartSize46mm, WatchWidgetsTypeChartSize44mm, WatchWidgetsTypeChartSize42mm, WatchWidgetsTypeChartSize40mm, WatchWidgetsTypeAccessoryWidgetGroupSize49mm, WatchWidgetsTypeAccessoryWidgetGroupSize46mm, WatchWidgetsTypeAccessoryWidgetGroupSize44mm, WatchWidgetsTypeAccessoryWidgetGroupSize42mm, WatchWidgetsTypeAccessoryWidgetGroupSize40mm
- WatchWidgetsLayoutGuideVariants: WatchWidgetsLayoutGuideTypeProgressViewWithoutCurrentValueSize49mm, WatchWidgetsLayoutGuideTypeProgressViewWithoutCurrentValueSize46mm, WatchWidgetsLayoutGuideTypeProgressViewWithoutCurrentValueSize44mm, WatchWidgetsLayoutGuideTypeProgressViewWithoutCurrentValueSize42mm, WatchWidgetsLayoutGuideTypeProgressViewWithoutCurrentValueSize40mm, WatchWidgetsLayoutGuideTypeProgressViewWithCurrentValueSize49mm, WatchWidgetsLayoutGuideTypeProgressViewWithCurrentValueSize46mm, WatchWidgetsLayoutGuideTypeProgressViewWithCurrentValueSize44mm, WatchWidgetsLayoutGuideTypeProgressViewWithCurrentValueSize42mm, WatchWidgetsLayoutGuideTypeProgressViewWithCurrentValueSize40mm, WatchWidgetsLayoutGuideTypeProgressViewSize49mm, WatchWidgetsLayoutGuideTypeProgressViewSize46mm, WatchWidgetsLayoutGuideTypeProgressViewSize44mm, WatchWidgetsLayoutGuideTypeProgressViewSize42mm, WatchWidgetsLayoutGuideTypeProgressViewSize40mm, WatchWidgetsLayoutGuideTypeLabelGroupWithBarSize49mm, WatchWidgetsLayoutGuideTypeLabelGroupWithBarSize46mm, WatchWidgetsLayoutGuideTypeLabelGroupWithBarSize44mm, WatchWidgetsLayoutGuideTypeLabelGroupWithBarSize42mm, WatchWidgetsLayoutGuideTypeLabelGroupWithBarSize40mm, WatchWidgetsLayoutGuideTypeLabelGroupWithIconSize49mm, WatchWidgetsLayoutGuideTypeLabelGroupWithIconSize46mm, WatchWidgetsLayoutGuideTypeLabelGroupWithIconSize44mm, WatchWidgetsLayoutGuideTypeLabelGroupWithIconSize42mm, WatchWidgetsLayoutGuideTypeLabelGroupWithIconSize40mm, WatchWidgetsLayoutGuideTypeLabelGroupDoubleSize49mm, WatchWidgetsLayoutGuideTypeLabelGroupDoubleSize46mm, WatchWidgetsLayoutGuideTypeLabelGroupDoubleSize44mm, WatchWidgetsLayoutGuideTypeLabelGroupDoubleSize42mm, WatchWidgetsLayoutGuideTypeLabelGroupDoubleSize40mm, WatchWidgetsLayoutGuideTypeLabelGroupSize49mm, WatchWidgetsLayoutGuideTypeLabelGroupSize46mm, WatchWidgetsLayoutGuideTypeLabelGroupSize44mm, WatchWidgetsLayoutGuideTypeLabelGroupSize42mm, WatchWidgetsLayoutGuideTypeLabelGroupSize40mm, WatchWidgetsLayoutGuideTypeLabeledContentSize49mm, WatchWidgetsLayoutGuideTypeLabeledContentSize46mm, WatchWidgetsLayoutGuideTypeLabeledContentSize44mm, WatchWidgetsLayoutGuideTypeLabeledContentSize42mm, WatchWidgetsLayoutGuideTypeLabeledContentSize40mm, WatchWidgetsLayoutGuideTypeGaugeSize49mm, WatchWidgetsLayoutGuideTypeGaugeSize46mm, WatchWidgetsLayoutGuideTypeGaugeSize44mm, WatchWidgetsLayoutGuideTypeGaugeSize42mm, WatchWidgetsLayoutGuideTypeGaugeSize40mm, WatchWidgetsLayoutGuideTypeComboSize49mm, WatchWidgetsLayoutGuideTypeComboSize46mm, WatchWidgetsLayoutGuideTypeComboSize44mm, WatchWidgetsLayoutGuideTypeComboSize42mm, WatchWidgetsLayoutGuideTypeComboSize40mm, WatchWidgetsLayoutGuideTypeChartSize49mm, WatchWidgetsLayoutGuideTypeChartSize46mm, WatchWidgetsLayoutGuideTypeChartSize44mm, WatchWidgetsLayoutGuideTypeChartSize42mm, WatchWidgetsLayoutGuideTypeChartSize40mm, WatchWidgetsLayoutGuideTypeAccessoryWidgetGroupSize49mm, WatchWidgetsLayoutGuideTypeAccessoryWidgetGroupSize46mm, WatchWidgetsLayoutGuideTypeAccessoryWidgetGroupSize44mm, WatchWidgetsLayoutGuideTypeAccessoryWidgetGroupSize42mm, WatchWidgetsLayoutGuideTypeAccessoryWidgetGroupSize40mm
- WindowControlsVariants: WindowControlsStateInactive, WindowControlsStateActive

---

## watchOS 26

Built from Apple's watchOS 26 (Community) Figma kit. All watchOS components live in `watchos/<category>/`, are prefixed `Watch` so they never collide with the iOS set, and read tokens from `tokens/watchos-tokens.css` (every variable prefixed `--watch-`; default mode is Dark, with Light, Tinted and 40/42/44/46/49mm size modes via `data-theme` / `data-mode` on :root). The file defines no text styles; type is set inline in SF Compact / SF Compact Rounded / SF Pro.

### Components (watchOS)

**Buttons** (`watchos/buttons/`)
- WatchButtonCircular
- WatchButtonCorner
- WatchButtonPay
- WatchButtonPetite
- WatchButtonPill

**Alerts, Action Sheets & Errors** (`watchos/alerts/`)
- WatchActionSheet
- WatchAlert
- WatchButtonFloatingDefault
- WatchExample

**Activity Rings** (`watchos/activity/`)
- WatchActivityRings

**App Icons** (`watchos/app-icons/`)
- WatchAppIcon
- WatchCustomIcon
- WatchIconGrid
- WatchSystemIcons

**Lists** (`watchos/lists/`)
- WatchFooter
- WatchHeader
- WatchItem
- WatchItemCarousel
- WatchItemLinkedTableview
- WatchItemSourceList

**Navigation Bars** (`watchos/navigation/`)
- WatchButtonText
- WatchNavigationBar

**Notifications** (`watchos/notifications/`)
- WatchNotificationsBanner
- WatchNotificationsLongLook
- WatchNotificationsShortLook

**Pickers** (`watchos/pickers/`)
- WatchEditLabel
- WatchPicker
- WatchWheels

**Progress & Toggles** (`watchos/controls/`)
- WatchProgressIndicator
- WatchSpinner
- WatchToggle

**Bezels & Watch Faces** (`watchos/bezels/`)
- WatchBezels
- WatchComponentHeader
- WatchFaces
- WatchMeasurement
- WatchMode
- WatchStickerSheet

**Colors & Materials** (`watchos/colors/`)
- WatchSwatch
- WatchSwatchGrid
- WatchSwatchLightAndDark
- WatchSwatchLightAndDarkVibrant

**Scrollbars & Tabs** (`watchos/scrollbars/`)
- WatchScrollbar
- WatchTabs

**Sliders** (`watchos/sliders/`)
- WatchSlider

**Layout Grids** (`watchos/layout/`)
- WatchDisplayMask40mm
- WatchDisplayMask42mm
- WatchDisplayMask44mm
- WatchDisplayMask46mm
- WatchDisplayMask49mm
- WatchGrid40mmDialBased
- WatchGrid40mmFoundation
- WatchGrid40mmInfographic
- WatchGrid40mmList
- WatchGrid40mmPinnedPillButton
- WatchGrid40mmThreeBottomButtons
- WatchGrid42mmDialBased
- WatchGrid42mmFoundation
- WatchGrid42mmInfographic
- WatchGrid42mmList
- WatchGrid42mmPinnedPillButton
- WatchGrid42mmThreeBottomButtons
- WatchGrid44mmDialBased
- WatchGrid44mmFoundation
- WatchGrid44mmInfographic
- WatchGrid44mmList
- WatchGrid44mmPinnedPillButton
- WatchGrid44mmThreeBottomButtons
- WatchGrid46mmDialBased
- WatchGrid46mmFoundation
- WatchGrid46mmInfographic
- WatchGrid46mmList
- WatchGrid46mmPinnedPillButton
- WatchGrid46mmThreeBottomButtons
- WatchGrid49mmDialBased
- WatchGrid49mmFoundation
- WatchGrid49mmInfographic
- WatchGrid49mmList
- WatchGrid49mmPinnedPillButton
- WatchGrid49mmThreeBottomButtons

**Smart Stack Widgets** (`watchos/widgets/`)
- WatchBackground
- WatchSmartStack
- WatchWidgets
- WatchWidgetsLayoutGuide

**Examples** (`watchos/examples/`)
- WatchExampleAlerts
- WatchExampleButtons
- WatchExampleErrors
- WatchExampleLists
- WatchExampleNavigationBars
- WatchExampleNotifications
- WatchExamplePageControls
- WatchExamplePickers
- WatchExampleProgressIndicators
- WatchExampleScrollbars
- WatchExampleSliders
- WatchExampleSmartStackWidgets
- WatchExampleToggles
- WatchExamplesActionSheets

---

## macOS 26

Built from Apple's macOS 26 (Community) Figma kit — the Materials, Text Styles, Alerts, Boxes, Windows, Tooltips, Toolbars & Titlebars, Toggles, Text Fields, Sliders & Dials, Sidebars, Sheets, Search Fields, Progress Indicators, Popovers, Pop-up & Pull-down Buttons, Notifications, Menus, Menu Bar & Dock and Dialogs pages. All macOS components live in `macos/kit/`, are prefixed `Mac` so they never collide with iOS or watchOS names, and read tokens from `tokens/macos-fig-tokens.css` (all 153 kit variables, prefixed `--mac-`; light/dark via `[data-theme]`, control sizes via `[data-mode="small|medium|large|xl"]`).

Notes:
- Liquid Glass (Large / Medium / Small / Medium Dark Elevated) renders as a translucent backdrop-blurred fill; Small takes `state="primary"` for the accent-blue tint. All accept children.
- `MacDesktopWallpaper` paints the kit's light/dark wallpapers via `.mac-wallpaper-light|dark` (`macos/kit/mac-wallpaper.css`).
- Page-sized frames (e.g. `MacSliders`, `MacSidebars`, `MacToolbarsAndTitlebars`) are the kit's full specimen boards; use the smaller components for real UI.

### Components (macOS)

**Materials & Liquid Glass** (`macos/kit/`)
- MacMaterialsLight
- MacMaterialsDark
- MacLiquidGlassLarge
- MacLiquidGlassMedium
- MacLiquidGlassSmall
- MacLiquidGlassMediumDarkElevated
- MacLiquidGlassLight
- MacLiquidGlassDark
- MacLiquidGlassDark2
- MacColorsLight
- MacColorsDark
- MacDesktopWallpaper

**Text Styles** (`macos/kit/`)
- MacTextStylesLeftAlignedLight2
- MacTextStylesLeftAlignedLight
- MacTextStylesLeftAlignedDark2
- MacTextStylesLeftAlignedDark

**Alerts, Sheets & Dialogs** (`macos/kit/`)
- MacPushButton
- MacAlertsComponents
- MacButtons
- MacSheets
- MacSaveDialog (size="small" | "large" | "board")
- MacSaveDialogSmall
- MacSaveDialogLarge

**Windows, Toolbars & Boxes** (`macos/kit/`)
- MacWindow
- MacWindowControlsStandard
- MacWindowControlsUtility
- MacWindowTitleStandard
- MacWindowTitleUtility
- MacUtilityPanel
- MacUtilityPanelTabs
- MacUtilityPanelTitleBar
- MacToolbarsAndTitlebars
- MacButtonsMedium
- MacButtonsXL
- MacGroupBoxes
- MacTooltips
- MacPageHeader
- MacHeader

**Toggles** (`macos/kit/`)
- MacSwitch
- MacKnob
- MacRadioButton
- MacCheckboxes
- MacControlBackgrounds
- MacSwitchExamples
- MacRadioButtonExamples
- MacCheckboxExamples

**Text & Search Fields** (`macos/kit/`)
- MacTextField
- MacInputFields
- MacSearchField
- MacSearchFields
- MacMagnifyingGlass
- MacClear
- MacTextFieldExamples
- MacSearchFieldExamples

**Sliders, Dials & Progress** (`macos/kit/`)
- MacSliderKnob
- MacTracks
- MacTrackFilled
- MacTrackFilled2
- MacTrackUnfilled
- MacTrackUnfilledCenterBiased
- MacDialCircularSlider
- MacDial
- MacSliderExamples
- MacSliders
- MacSlider (value, state, ticks, centerBiased, active, width)
- MacProgressBars

**Menus, Pop-ups & Popovers** (`macos/kit/`)
- MacMode — scopes a kit size mode (mini/small/medium/large/xl) to its children; MacPopUpButton/MacPulldownButton also take `size`
- MacPopUpButton
- MacPulldownButton
- MacMenuItem
- MacMenuBG
- MacMenuHeader
- MacSeparator
- MacShortcuts
- MacPopUpButtonExamples
- MacPopUpButtonsAndPull
- MacMenus
- MacPopovers

**Sidebars & Lists** (`macos/kit/`)
- MacItem
- MacSectionHeader
- MacDisclosureHeader
- MacColumnHeader
- MacHeaderLastFalseAscending
- MacListItemPrimaryColumn
- MacListItemSecondaryColumn
- MacSidebars

**Notifications, Menu Bar & Dock** (`macos/kit/`)
- MacMenuBarAppleLogoLight
- MacMenuBarAppNameLight
- MacMenuBarMenuItemLight
- MacMenuBarAppleLogoDark
- MacMenuBarAppNameDark
- MacMenuBarMenuItemDark
- MacDockIcon
- MacSystemAppIcon
- MacNotifications
- MacDesktopTemplates
