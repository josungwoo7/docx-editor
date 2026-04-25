import { R as ReactEditorPlugin } from './react-DQALWiqZ.mjs';
export { D as DEFAULT_SELECTION_STYLE, a as DocxEditor, b as DocxEditorHandle, c as DocxEditorProps, d as DocxEditorRef, E as EditorMode, e as EditorPlugin, f as ErrorBoundary, g as ErrorBoundaryProps, h as ErrorContextValue, i as ErrorProvider, H as HIGH_CONTRAST_SELECTION_STYLE, j as HighlightRect, P as PLUGIN_HOST_STYLES, k as ParseErrorDisplay, l as ParseErrorDisplayProps, m as PluginContext, n as PluginHost, o as PluginHostProps, p as PluginHostRef, q as ReactSidebarItem, r as RenderAsyncOptions, S as SELECTION_CSS_VARS, s as SelectionHighlightConfig, t as SelectionOverlayProps, u as SelectionRange, v as SidebarItemRenderProps, T as TableSelectionState, U as UnsupportedFeatureWarning, w as UnsupportedFeatureWarningProps, x as UseAutoSaveOptions, y as UseAutoSaveReturn, z as UseClipboardOptions, A as UseClipboardReturn, B as UseSelectionHighlightOptions, C as UseSelectionHighlightReturn, F as UseTableSelectionOptions, G as UseTableSelectionReturn, I as UseWheelZoomOptions, J as UseWheelZoomReturn, Z as ZOOM_PRESETS, K as areSelectionStylesInjected, L as clampZoom, M as clearSelection, N as createSelectionChangeHandler, O as findNearestZoomPreset, Q as formatZoom, V as generateOverlayElements, W as generateSelectionCSS, X as getHighlightRectStyle, Y as getMergedSelectionRects, _ as getNextZoomPreset, $ as getPreviousZoomPreset, a0 as getSelectedText, a1 as getSelectionBoundingRect, a2 as getSelectionRects, a3 as getUserFriendlyMessage, a4 as getZoomPresets, a5 as hasActiveSelection, a6 as highlightTextRange, a7 as injectSelectionStyles, a8 as isParseError, a9 as isSelectionBackwards, aa as isSelectionWithin, ab as isZoomPreset, ac as mergeAdjacentRects, ad as normalizeSelectionDirection, ae as parseZoom, af as removeSelectionStyles, ag as renderAsync, ah as selectRange, ai as useAutoSave, aj as useClipboard, ak as useErrorNotifications, al as useSelectionHighlight, am as useTableSelection, an as useWheelZoom } from './react-DQALWiqZ.mjs';
export { D as DocumentAgent, g as DocxInput, t as toArrayBuffer } from './DocumentAgent-BqA9EJ3F.mjs';
export { A as AgentContextOptions, C as CreateEmptyDocumentOptions, E as ExtendedSelectionContext, P as ProcessTemplateOptions, a as ProcessTemplateResult, b as SelectionContextOptions, c as blendColors, d as buildExtendedSelectionContext, e as buildSelectionContext, g as colorsEqual, h as createDocumentWithText, i as createEmptyDocument, j as createRgbColor, l as createThemeColor, m as darkenColor, n as emuToPixels, o as emuToTwips, p as executeCommand, q as executeCommands, r as formatPx, s as getAgentContext, t as getContrastingColor, u as getDocumentSummary, x as getTemplateTags, y as halfPointsToPixels, z as isBlack, B as isWhite, D as lightenColor, G as parseColorString, H as parseDocx, I as pixelsToEmu, J as pixelsToTwips, K as pointsToPixels, M as processTemplate, O as processTemplateAsBlob, Q as processTemplateDetailed, R as resolveColor, U as resolveHighlightColor, V as resolveShadingColor, W as serializeDocumentBody, X as serializeDocx, Y as serializeSectionProperties, Z as twipsToEmu, _ as twipsToPixels, $ as validateTemplate } from './colorResolver-BwI_Uxp3.mjs';
export { I as InsertPosition, c as canRenderFont, a as countPageBreaks, b as createColumnBreak, d as createHorizontalRule, e as createLineBreak, f as createPageBreak, g as createPageBreakParagraph, h as createPageBreakRun, i as findPageBreaks, j as getLoadedFonts, k as hasPageBreakBefore, l as insertHorizontalRule, m as insertPageBreak, n as isBreakContent, o as isColumnBreak, p as isFontLoaded, q as isFontsLoading, r as isLineBreak, s as isPageBreak, t as loadFont, u as loadFontFromBuffer, v as loadFonts, w as onFontsLoaded, x as preloadCommonFonts, y as removePageBreak } from './fontLoader-DicgJidU.mjs';
import { ToolbarProps } from './ui.mjs';
export { AdvancedColorPicker, AlignmentButtons, AlignmentButtonsProps, ColorOption, ColorPicker, ColorPickerProps, ContextMenu, ContextMenuProps, DialogKeyboardShortcut, FindMatch, FindOptions, FindReplaceDialog, FindReplaceDialogProps, FindReplaceOptions, FindReplaceState, FindResult, FontOption, FontPicker, FontPickerProps, FontSizePicker, FontSizePickerProps, HighlightOptions, HorizontalRuler, HorizontalRulerProps, HyperlinkData, HyperlinkDialog, HyperlinkDialogProps, ImageData, IndicatorPosition, IndicatorVariant, InsertImageDialog, InsertImageDialogProps, InsertSymbolDialog, InsertSymbolDialogProps, InsertTableDialog, InsertTableDialogProps, KeyboardShortcutsDialog, KeyboardShortcutsDialogProps, LineSpacingOption, LineSpacingPicker, LineSpacingPickerProps, ListButtons, ListButtonsProps, ListState, LoadingIndicator, LoadingIndicatorProps, LoadingOperation, LoadingSize, LoadingVariant, PasteOption, PasteSpecialDialog, PasteSpecialDialogProps, ResponsePreview, ResponsePreviewProps, ResponsePreviewState, ResponsiveToolbar, ResponsiveToolbarGroup, ResponsiveToolbarGroupProps, ResponsiveToolbarProps, SYMBOL_CATEGORIES, ShortcutCategory, StyleOption, StylePicker, StylePickerProps, SymbolCategory, TableBorderColorPicker, TableBorderColorPickerProps, TableBorderPicker, TableBorderPickerProps, TableBorderWidthPicker, TableBorderWidthPickerProps, TableCellFillPicker, TableCellFillPickerProps, TableConfig, TableInsertButtons, TableInsertButtonsProps, TableMergeButton, TableMergeButtonProps, TableMoreDropdown, TableMoreDropdownProps, TextContextAction, TextContextMenu, TextContextMenuItem, TextContextMenuProps, Toolbar, ToolbarButton, ToolbarGroup, ToolbarItem, ToolbarItemPriority, ToolbarSeparator, UnsavedIndicator, UnsavedIndicatorProps, UseFindReplaceReturn, UseKeyboardShortcutsDialogOptions, UseKeyboardShortcutsDialogReturn, UseLoadingOptions, UseLoadingReturn, UsePasteSpecialOptions, UsePasteSpecialReturn, UseResponsiveToolbarOptions, UseResponsiveToolbarReturn, UseTextContextMenuOptions, UseTextContextMenuReturn, UseUnsavedChangesOptions, UseUnsavedChangesReturn, ZoomControl, ZoomControlProps, calculateFitDimensions, clampTableConfig, createChangeTracker, createDefaultFindOptions, createDefaultListState, createDefaultTableConfig, createErrorResponse, createMockResponse, createSearchPattern, createToolbarItem, createToolbarItems, dataUrlToBlob, delay, escapeRegexString, findAllMatches, findInDocument, findInParagraph, formatFileSize, formatShortcutKeys, formatTableDimensions, getActionShortcut, getAllActions, getAllCategories, getAllIndicatorPositions, getAllIndicatorVariants, getAllLoadingSizes, getAllLoadingVariants, getAllPasteOptions, getCategoryLabel, getCommonShortcuts, getDefaultActions, getDefaultHighlightOptions, getDefaultPasteOption, getDefaultShortcuts, getDefaultTextContextMenuItems, getImageAcceptString, getImageDimensions, getLoadingVariantLabel, getMarginInUnits, getMatchCountText, getPasteOption, getRecommendedPriority, getRulerDimensions, getShortcutsByCategory, getSupportedImageExtensions, getSymbolCategories, getSymbolUnicodeInfo, getSymbolsByCategory, getTablePresets, getTextActionLabel, getTextActionShortcut, getVariantLabel, isActionAvailable, isEmptySearch, isPasteSpecialShortcut, isTextActionAvailable, isValidImageFile, isValidTableConfig, parseMarginFromUnits, positionToMargin, replaceAllInContent, replaceFirstInContent, scrollToMatch, searchSymbols, symbolFromCodePoint, useContextMenu, useFindReplace, useHyperlinkDialog, useInsertImageDialog, useInsertSymbolDialog, useInsertTableDialog, useKeyboardShortcutsDialog, useLoading, useLoadingOperations, usePasteSpecial, useResponsePreview, useResponsiveToolbar, useTextContextMenu, useUnsavedChanges } from './ui.mjs';
import { ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { T as Translations, a as TranslationKey } from './clipboard-BnTQ1BBf.mjs';
export { C as CLIPBOARD_TYPES, b as ClipboardContent, c as ClipboardOptions, I as INTERNAL_CLIPBOARD_TYPE, L as LocaleStrings, P as ParsedClipboardContent, d as PartialLocaleStrings, e as PrintButton, f as PrintButtonProps, g as PrintOptions, h as PrintStyles, i as TableAction, j as TableContext, k as TableSelection, l as TableSplitConfig, m as TableToolbar, n as TableToolbarProps, o as addColumn, p as addRow, q as cleanWordHtml, r as copyParagraphs, s as copyRuns, t as createClipboardHandlers, u as createTableContext, v as deleteColumn, w as deleteRow, x as formatPrintPageRange, y as getCellAt, z as getColumnCount, A as getDefaultPrintOptions, B as getTableSplitCellDialogConfig, D as handlePasteEvent, E as htmlToRuns, F as isEditorHtml, G as isPrintSupported, H as isWordHtml, J as mergeCells, K as openPrintWindow, M as paragraphsToClipboardContent, N as parseClipboardHtml, O as parsePageRange, Q as readFromClipboard, R as runsToClipboardContent, S as splitCell, U as splitTableCell, V as triggerPrint, W as writeToClipboard } from './clipboard-BnTQ1BBf.mjs';
export { f as AIAction, g as AIActionRequest, A as AgentCommand, h as AgentContext, i as AgentResponse, j as ApplyStyleCommand, l as BlockContent, ad as BookmarkEnd, ae as BookmarkStart, C as Comment, p as DeleteTextCommand, D as Document, d as DocumentBody, r as DocxPackage, E as Endnote, af as Field, ag as FooterReference, F as Footnote, t as FormatTextCommand, ah as HeaderFooter, ai as HeaderReference, H as Hyperlink, I as Image, u as InsertHyperlinkCommand, v as InsertImageCommand, w as InsertTableCommand, x as InsertTextCommand, L as ListLevel, N as NumberingDefinitions, a as Paragraph, J as ParagraphContext, K as ParagraphFormatting, P as Position, R as Range, Q as Relationship, S as ReplaceTextCommand, b as Run, c as RunContent, V as SectionProperties, W as SelectionContext, X as SetVariableCommand, aj as Shape, Y as Style, Z as StyleDefinitions, $ as SuggestedAction, e as Table, a0 as TableCell, a1 as TableRow, ak as TextBox, a2 as TextContent, T as TextFormatting, a3 as Theme, al as ThemeColorScheme, am as ThemeFont, an as ThemeFontScheme } from './agentApi-BVHzyk2l.mjs';
import * as prosemirror_state from 'prosemirror-state';
import { Plugin, PluginKey } from 'prosemirror-state';
import { DecorationSet, EditorView } from 'prosemirror-view';
export { C as CorePlugin, e as McpSession, M as McpToolDefinition, i as McpToolHandler, j as McpToolResult } from './types-B3LkfO0u.mjs';
export { P as PluginRegistry, p as pluginRegistry, r as registerPlugins } from './registry-DyIMyB-0.mjs';
export { docxtemplaterPlugin } from './core-plugins-reexport.mjs';
export { d as AutoSaveStatus, e as ClipboardSelection, h as ErrorNotification, i as ErrorSeverity, j as PanelConfig, k as PluginPanelProps, l as PositionCoordinates, R as RenderedDomContext, m as SavedDocumentData, F as SidebarItem, G as SidebarItemContext, T as TABLE_DATA_ATTRIBUTES, p as createSelectionFromDOM, t as formatLastSaveTime, u as formatStorageSize, v as getAutoSaveStatusLabel, w as getAutoSaveStorageSize, x as getSelectionRuns, z as isAutoSaveSupported } from './ClipboardManager-CgpKW2At.mjs';
import 'prosemirror-model';

interface LocaleProviderProps {
    i18n?: Translations;
    children: ReactNode;
}
declare function LocaleProvider({ i18n, children }: LocaleProviderProps): react_jsx_runtime.JSX.Element;
declare function useTranslation(): {
    t: (key: TranslationKey, vars?: Record<string, string | number>) => string;
};

/**
 * Props for the EditorToolbar compound component.
 * Extends ToolbarProps with title bar-specific fields.
 */
interface EditorToolbarProps extends ToolbarProps {
}

interface LogoProps {
    children: ReactNode;
}
declare function Logo({ children }: LogoProps): react_jsx_runtime.JSX.Element;
interface DocumentNameProps {
    value: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    editable?: boolean;
}
declare function DocumentName({ value, onChange, placeholder, editable }: DocumentNameProps): react_jsx_runtime.JSX.Element;
interface TitleBarRightProps {
    children: ReactNode;
}
declare function TitleBarRight({ children }: TitleBarRightProps): react_jsx_runtime.JSX.Element;
declare function MenuBar(): react_jsx_runtime.JSX.Element;
interface TitleBarProps {
    children: ReactNode;
}
/**
 * TitleBar layout (Google Docs style):
 *
 *   ┌──────────┬────────────────────────────┬──────────────────┐
 *   │          │ Document Name              │                  │
 *   │  Logo    │                            │  Right Actions   │
 *   │          │ File  Format  Insert       │                  │
 *   └──────────┴────────────────────────────┴──────────────────┘
 *
 * Logo and TitleBarRight span full height. DocumentName + MenuBar
 * stack vertically in the center column.
 */
declare function TitleBar({ children }: TitleBarProps): react_jsx_runtime.JSX.Element;

interface FormattingBarProps extends ToolbarProps {
    /** Custom toolbar items to render at the end */
    children?: ReactNode;
    /** When true, renders with display:contents so children flow in parent flex container */
    inline?: boolean;
}
/**
 * Icon-based formatting toolbar — undo/redo, zoom, styles, fonts,
 * bold/italic/underline, colors, alignment, lists, table/image context, clear formatting.
 */
declare function FormattingBar(explicitProps: FormattingBarProps): react_jsx_runtime.JSX.Element;

/**
 * EditorToolbar — Google Docs-style 2-level compound component.
 *
 * Usage:
 *   <EditorToolbar {...toolbarProps}>
 *     <EditorToolbar.TitleBar>
 *       <EditorToolbar.Logo><MyIcon /></EditorToolbar.Logo>
 *       <EditorToolbar.DocumentName value={name} onChange={setName} />
 *       <EditorToolbar.MenuBar />
 *       <EditorToolbar.TitleBarRight>
 *         <button>Save</button>
 *       </EditorToolbar.TitleBarRight>
 *     </EditorToolbar.TitleBar>
 *     <EditorToolbar.FormattingBar />
 *   </EditorToolbar>
 */

interface EditorToolbarComponent {
    (props: EditorToolbarProps & {
        children: ReactNode;
    }): React.JSX.Element;
    TitleBar: typeof TitleBar;
    Logo: typeof Logo;
    DocumentName: typeof DocumentName;
    MenuBar: typeof MenuBar;
    TitleBarRight: typeof TitleBarRight;
    FormattingBar: typeof FormattingBar;
}
declare const EditorToolbar: EditorToolbarComponent;

/**
 * Text Selection Utilities
 *
 * Utilities for word-level and paragraph-level text selection.
 * Used for double-click (word) and triple-click (paragraph) selection.
 */
/**
 * Check if a character is a word character
 */
declare function isWordCharacter$1(char: string): boolean;
/**
 * Check if a character is whitespace
 */
declare function isWhitespace$1(char: string): boolean;
/**
 * Find word boundaries around a position in text
 * Returns [startIndex, endIndex] inclusive start, exclusive end
 */
declare function findWordBoundaries(text: string, position: number): [number, number];
/**
 * Get the word at a position in text
 */
declare function getWordAt(text: string, position: number): string;
/**
 * Word selection result
 */
interface WordSelectionResult {
    /** The selected word */
    word: string;
    /** Start index in the text (inclusive) */
    startIndex: number;
    /** End index in the text (exclusive) */
    endIndex: number;
}
/**
 * Find the word at a position and return detailed info
 */
declare function findWordAt(text: string, position: number): WordSelectionResult;
/**
 * Select a word at the current cursor position using the browser's native APIs.
 * This works reliably across different browsers and handles contentEditable well.
 */
declare function selectWordAtCursor(): boolean;
/**
 * Select a word in a specific text node at the given offset
 */
declare function selectWordInTextNode(textNode: Text, offset: number): boolean;
/**
 * Expand the current selection to word boundaries.
 * If there's a collapsed selection (cursor), selects the word at cursor.
 * If there's an existing selection, expands to include complete words.
 */
declare function expandSelectionToWordBoundaries(): boolean;
/**
 * Select the entire paragraph containing the current selection.
 * Looks for the nearest element with [data-paragraph-index] attribute.
 */
declare function selectParagraphAtCursor(): boolean;
/**
 * Handle click event for multi-click detection.
 * Call this in your click handler.
 * Returns the click count (1 = single, 2 = double, 3 = triple).
 */
declare function handleClickForMultiClick(event: MouseEvent): number;
/**
 * Create a double-click handler that selects words.
 * Returns a function that should be called on dblclick events.
 */
declare function createDoubleClickWordSelector(): (event: MouseEvent) => void;
/**
 * Create a triple-click handler that selects paragraphs.
 * This uses our custom click counting since browsers have inconsistent triple-click.
 */
declare function createTripleClickParagraphSelector(): (event: MouseEvent) => void;

/**
 * Keyboard Navigation Utilities
 *
 * Provides enhanced keyboard navigation for the editor:
 * - Ctrl+Left/Right: Move by word
 * - Home/End: Move to start/end of line
 * - Ctrl+Home/End: Move to start/end of document
 * - Ctrl+Shift+Left/Right: Select by word
 * - Shift+Home/End: Select to start/end of line
 */
/**
 * Navigation direction
 */
type NavigationDirection = 'left' | 'right' | 'up' | 'down';
/**
 * Navigation unit
 */
type NavigationUnit = 'character' | 'word' | 'line' | 'paragraph' | 'document';
/**
 * Keyboard navigation action
 */
interface NavigationAction {
    /** Direction to navigate */
    direction: NavigationDirection;
    /** Unit of movement */
    unit: NavigationUnit;
    /** Whether to extend selection */
    extend: boolean;
}
/**
 * Keyboard shortcut definition
 */
interface KeyboardShortcut {
    key: string;
    ctrlKey?: boolean;
    metaKey?: boolean;
    shiftKey?: boolean;
    altKey?: boolean;
}
/**
 * Check if a character is a word character (letter, digit, or underscore)
 */
declare function isWordCharacter(char: string): boolean;
/**
 * Check if a character is whitespace
 */
declare function isWhitespace(char: string): boolean;
/**
 * Check if a character is a punctuation character
 */
declare function isPunctuation(char: string): boolean;
/**
 * Find the start of the current or previous word
 */
declare function findWordStart(text: string, position: number): number;
/**
 * Find the end of the current or next word
 */
declare function findWordEnd(text: string, position: number): number;
/**
 * Find the next word start (for Ctrl+Right navigation)
 */
declare function findNextWordStart(text: string, position: number): number;
/**
 * Find the previous word start (for Ctrl+Left navigation)
 */
declare function findPreviousWordStart(text: string, position: number): number;
/**
 * Find the start of the current line in a text node
 * Uses visual line detection based on bounding rectangles
 */
declare function findVisualLineStart(container: Node, offset: number): {
    node: Node;
    offset: number;
} | null;
/**
 * Find the end of the current line in a text node
 * Uses visual line detection based on bounding rectangles
 */
declare function findVisualLineEnd(container: Node, offset: number): {
    node: Node;
    offset: number;
} | null;
/**
 * Get the current selection info
 */
declare function getSelectionInfo(): {
    node: Node;
    offset: number;
    anchorNode: Node | null;
    anchorOffset: number;
    focusNode: Node | null;
    focusOffset: number;
    isCollapsed: boolean;
    text: string;
} | null;
/**
 * Set the selection to a specific position
 */
declare function setSelectionPosition(node: Node, offset: number): void;
/**
 * Extend selection to a specific position
 */
declare function extendSelectionTo(node: Node, offset: number): void;
/**
 * Move selection by word in a text node
 */
declare function moveByWord(direction: 'left' | 'right', extend?: boolean): boolean;
/**
 * Move to start/end of line
 */
declare function moveToLineEdge(edge: 'start' | 'end', extend?: boolean): boolean;
/**
 * Parse a keyboard event into a navigation action
 */
declare function parseNavigationAction(event: KeyboardEvent): NavigationAction | null;
/**
 * Handle a keyboard navigation event
 * Returns true if the event was handled
 */
declare function handleNavigationKey(event: KeyboardEvent, options?: {
    onDocumentStart?: () => void;
    onDocumentEnd?: () => void;
}): boolean;
/**
 * Check if an event is a navigation key event
 */
declare function isNavigationKey(event: KeyboardEvent): boolean;
/**
 * Expand selection to word boundaries
 * Used for double-click word selection
 */
declare function expandSelectionToWord(): boolean;
/**
 * Get the word at the current cursor position
 */
declare function getWordAtCursor(): string | null;
/**
 * Check if a keyboard event matches a shortcut definition
 */
declare function matchesShortcut(event: KeyboardEvent, shortcut: KeyboardShortcut): boolean;
/**
 * Common navigation shortcuts
 */
declare const NAVIGATION_SHORTCUTS: {
    readonly wordLeft: KeyboardShortcut;
    readonly wordRight: KeyboardShortcut;
    readonly selectWordLeft: KeyboardShortcut;
    readonly selectWordRight: KeyboardShortcut;
    readonly lineStart: KeyboardShortcut;
    readonly lineEnd: KeyboardShortcut;
    readonly selectToLineStart: KeyboardShortcut;
    readonly selectToLineEnd: KeyboardShortcut;
    readonly documentStart: KeyboardShortcut;
    readonly documentEnd: KeyboardShortcut;
    readonly selectToDocumentStart: KeyboardShortcut;
    readonly selectToDocumentEnd: KeyboardShortcut;
};
/**
 * Get a human-readable description of a shortcut
 */
declare function describeShortcut(shortcut: KeyboardShortcut): string;
/**
 * Get all navigation shortcuts with descriptions
 */
declare function getNavigationShortcutDescriptions(): Array<{
    action: string;
    shortcut: string;
}>;

/**
 * Template tag types
 */
type TagType = 'variable' | 'sectionStart' | 'sectionEnd' | 'invertedStart' | 'raw';
/**
 * A found template tag
 */
interface TemplateTag {
    id: string;
    type: TagType;
    name: string;
    rawTag: string;
    from: number;
    to: number;
    /** For sections: nested variable names */
    nestedVars?: string[];
    /** True if this variable is inside a section (shown in section's nested vars) */
    insideSection?: boolean;
}
/**
 * Plugin state
 */
interface TemplatePluginState$1 {
    tags: TemplateTag[];
    decorations: DecorationSet;
    hoveredId?: string;
    selectedId?: string;
}
/**
 * Plugin key
 */
declare const templatePluginKey: PluginKey<TemplatePluginState$1>;
/**
 * Create the template plugin
 */
declare function createTemplatePlugin(): Plugin<TemplatePluginState$1>;
/**
 * Get tags from editor state
 */
declare function getTemplateTags(state: prosemirror_state.EditorState): TemplateTag[];
/**
 * Set hovered tag
 */
declare function setHoveredElement(view: EditorView, id: string | undefined): void;
/**
 * Set selected tag
 */
declare function setSelectedElement(view: EditorView, id: string | undefined): void;
/**
 * CSS styles for template decorations
 */
declare const TEMPLATE_DECORATION_STYLES = "\n.docx-template-tag {\n  cursor: pointer;\n  transition: background-color 0.1s;\n}\n\n.docx-template-tag:hover,\n.docx-template-tag.hovered {\n  filter: brightness(0.95);\n}\n\n.docx-template-tag.selected {\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);\n}\n";

/**
 * Template Plugin
 *
 * Docxtemplater template support as a plugin for the DOCX Editor.
 *
 * Features:
 * - Full docxtemplater syntax detection (variables, loops, conditionals)
 * - Sidebar annotation chips showing template structure (via getSidebarItems)
 * - Differentiated visual highlighting by element type
 *
 * @example
 * ```tsx
 * import { PluginHost } from '@docx-editor/plugin-api';
 * import { templatePlugin } from '@docx-editor/plugins/template';
 *
 * function MyEditor() {
 *   return (
 *     <PluginHost plugins={[templatePlugin]}>
 *       <DocxEditor document={doc} onChange={handleChange} />
 *     </PluginHost>
 *   );
 * }
 * ```
 */

interface TemplatePluginState {
    tags: TemplateTag[];
    hoveredId?: string;
    selectedId?: string;
}
/**
 * Create the template plugin instance.
 */
declare function createPlugin(_options?: {
    /** @deprecated — panel is no longer used; template chips render in the unified sidebar */
    defaultCollapsed?: boolean;
    /** @deprecated */
    panelPosition?: 'left' | 'right';
    /** @deprecated */
    panelWidth?: number;
}): ReactEditorPlugin<TemplatePluginState>;
/**
 * Default template plugin instance.
 */
declare const templatePlugin: ReactEditorPlugin<TemplatePluginState>;

/**
 * @eigenpal/docx-js-editor
 *
 * A complete WYSIWYG DOCX editor with full Microsoft Word fidelity.
 *
 * Features:
 * - Full text and paragraph formatting
 * - Tables, images, shapes, text boxes
 * - Hyperlinks, bookmarks, fields
 * - Footnotes, lists, headers/footers
 * - Page layout with margins and columns
 * - DocumentAgent API for programmatic editing
 * - Template variable substitution
 * - AI-powered context menu
 *
 * CSS Styles:
 * For optimal cursor visibility and selection highlighting, import the editor styles:
 * ```
 * import '@eigenpal/docx-js-editor/styles/editor.css';
 * ```
 */
declare const VERSION = "0.0.2";

export { type DocumentNameProps, EditorToolbar, type EditorToolbarProps, FormattingBar, type FormattingBarProps, type KeyboardShortcut, LocaleProvider, type LocaleProviderProps, type LogoProps, NAVIGATION_SHORTCUTS, type NavigationAction, type NavigationDirection, type NavigationUnit, TEMPLATE_DECORATION_STYLES, type TagType, type TemplateTag, type TitleBarProps, type TitleBarRightProps, ToolbarProps, TranslationKey, Translations, VERSION, type WordSelectionResult, createDoubleClickWordSelector, createPlugin as createTemplatePlugin, createTemplatePlugin as createTemplateProseMirrorPlugin, createTripleClickParagraphSelector, describeShortcut, expandSelectionToWord, expandSelectionToWordBoundaries, extendSelectionTo, findNextWordStart, findPreviousWordStart, findVisualLineEnd, findVisualLineStart, findWordAt, findWordBoundaries, findWordEnd, findWordStart, getNavigationShortcutDescriptions, getSelectionInfo, getTemplateTags as getTemplatePluginTags, getWordAt, getWordAtCursor, handleClickForMultiClick, handleNavigationKey, isNavigationKey, isPunctuation, isWhitespace$1 as isWhitespace, isWhitespace as isWhitespaceChar, isWordCharacter as isWordChar, isWordCharacter$1 as isWordCharacter, matchesShortcut, moveByWord, moveToLineEdge, parseNavigationAction, selectParagraphAtCursor, selectWordAtCursor, selectWordInTextNode, setHoveredElement, setSelectedElement, setSelectionPosition, templatePlugin, templatePluginKey, useTranslation };
