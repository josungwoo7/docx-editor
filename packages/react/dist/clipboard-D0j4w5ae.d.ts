import React__default, { CSSProperties, ReactNode } from 'react';
import { e as Table, a0 as TableCell, a3 as Theme, b as Run, a as Paragraph } from './agentApi-BVHzyk2l.js';

var _lang = "en";
var common = {
	cancel: "Cancel",
	insert: "Insert",
	apply: "Apply",
	close: "Close",
	"delete": "Delete",
	update: "Update",
	save: "Save",
	retry: "Retry",
	send: "Send",
	edit: "Edit",
	comment: "Comment",
	reply: "Reply",
	accept: "Accept",
	reject: "Reject",
	dismiss: "Dismiss",
	change: "Change",
	px: "px",
	closeDialog: "Close dialog"
};
var toolbar = {
	ariaLabel: "Formatting toolbar",
	file: "File",
	format: "Format",
	insert: "Insert",
	print: "Print",
	printShortcut: "Ctrl+P",
	pageSetup: "Page setup",
	leftToRight: "Left-to-right text",
	rightToLeft: "Right-to-left text",
	image: "Image",
	table: "Table",
	pageBreak: "Page break",
	tableOfContents: "Table of contents",
	symbol: "Symbol",
	help: "Help",
	reportIssue: "Report issue"
};
var formattingBar = {
	groups: {
		history: "History",
		zoom: "Zoom",
		styles: "Styles",
		font: "Font",
		textFormatting: "Text formatting",
		script: "Script",
		alignment: "Alignment",
		listFormatting: "List formatting",
		image: "Image",
		table: "Table"
	},
	undo: "Undo",
	undoShortcut: "Undo (Ctrl+Z)",
	redo: "Redo",
	redoShortcut: "Redo (Ctrl+Y)",
	bold: "Bold",
	boldShortcut: "Bold (Ctrl+B)",
	italic: "Italic",
	italicShortcut: "Italic (Ctrl+I)",
	underline: "Underline",
	underlineShortcut: "Underline (Ctrl+U)",
	strikethrough: "Strikethrough",
	fontColor: "Font Color",
	highlightColor: "Text Highlight Color",
	insertLink: "Insert link",
	insertLinkShortcut: "Insert link (Ctrl+K)",
	superscript: "Superscript",
	superscriptShortcut: "Superscript (Ctrl+Shift+=)",
	subscript: "Subscript",
	subscriptShortcut: "Subscript (Ctrl+=)",
	imageProperties: "Image properties",
	imagePropertiesShortcut: "Image properties (alt text, border)...",
	clearFormatting: "Clear formatting"
};
var alignment = {
	alignLeft: "Align Left",
	alignLeftShortcut: "Ctrl+L",
	center: "Center",
	centerShortcut: "Ctrl+E",
	alignRight: "Align Right",
	alignRightShortcut: "Ctrl+R",
	justify: "Justify",
	justifyShortcut: "Ctrl+J"
};
var lists = {
	ariaLabel: "List formatting",
	typeAriaLabel: "List type",
	indentationAriaLabel: "List indentation",
	bulletList: "Bullet List",
	numberedList: "Numbered List",
	decreaseIndent: "Decrease Indent",
	increaseIndent: "Increase Indent"
};
var lineSpacing = {
	single: "Single",
	double: "Double",
	lineSpacingTitle: "Line spacing: {label}",
	paragraphSpacing: "Paragraph spacing"
};
var styles = {
	selectAriaLabel: "Select paragraph style",
	normalText: "Normal text",
	title: "Title",
	subtitle: "Subtitle",
	heading1: "Heading 1",
	heading2: "Heading 2",
	heading3: "Heading 3"
};
var font = {
	selectAriaLabel: "Select font family",
	sansSerif: "Sans Serif",
	serif: "Serif",
	monospace: "Monospace"
};
var fontSize = {
	decrease: "Decrease font size",
	increase: "Increase font size",
	label: "Font size",
	listLabel: "Font sizes"
};
var zoom = {
	ariaLabel: "Zoom: {label}"
};
var colorPicker = {
	ariaLabel: "{type} color picker",
	highlightColors: "Highlight Colors",
	customColor: "Custom Color",
	noColor: "No Color",
	automatic: "Automatic",
	themeColors: "Theme Colors",
	standardColors: "Standard Colors",
	colors: {
		black: "Black",
		darkRed: "Dark Red",
		red: "Red",
		orange: "Orange",
		yellow: "Yellow",
		darkYellow: "Dark Yellow",
		green: "Green",
		darkGreen: "Dark Green",
		teal: "Teal",
		darkTeal: "Dark Teal",
		blue: "Blue",
		darkBlue: "Dark Blue",
		purple: "Purple",
		darkPurple: "Dark Purple",
		brown: "Brown",
		grey50: "Grey 50%",
		grey25: "Grey 25%",
		grey10: "Grey 10%",
		white: "White",
		lightRed: "Light Red",
		lightOrange: "Light Orange",
		lightYellow: "Light Yellow",
		lightGreen: "Light Green",
		lightBlue: "Light Blue",
		lightPurple: "Light Purple",
		pink: "Pink",
		rose: "Rose",
		gold: "Gold",
		aqua: "Aqua",
		lavender: "Lavender",
		silver: "Silver",
		darkOrange: "Dark Orange",
		darkGray: "Dark Gray",
		gray: "Gray",
		cyan: "Cyan",
		magenta: "Magenta",
		paleGreen: "Pale Green",
		lightCyan: "Light Cyan",
		skyBlue: "Sky Blue",
		lightBlue2: "Light Blue 2",
		lightMagenta: "Light Magenta",
		brightGreen: "Bright Green",
		violet: "Violet"
	}
};
var dialogs = {
	findReplace: {
		titleFind: "Find",
		titleFindReplace: "Find and Replace",
		findLabel: "Find:",
		findPlaceholder: "Enter text to find...",
		findAriaLabel: "Find text",
		findPrevious: "Find previous",
		findPreviousTitle: "Find Previous (Shift+Enter)",
		findNext: "Find next",
		findNextTitle: "Find Next (Enter)",
		matchCount: "{current} of {total} matches",
		noResults: "No results found",
		replaceLabel: "Replace:",
		replacePlaceholder: "Enter replacement text...",
		replaceAriaLabel: "Replace text",
		replaceButton: "Replace",
		replaceCurrentTitle: "Replace current match",
		replaceAllButton: "Replace All",
		replaceAllTitle: "Replace all matches",
		matchCase: "Match case",
		wholeWords: "Whole words",
		toggleReplace: "+ Replace"
	},
	hyperlink: {
		titleEdit: "Edit Hyperlink",
		titleInsert: "Insert Hyperlink",
		tabWebAddress: "Web Address",
		tabBookmark: "Bookmark",
		urlLabel: "URL",
		urlPlaceholder: "https://example.com",
		urlHint: "Enter a web address, email (mailto:), or phone (tel:)",
		bookmarkLabel: "Bookmark",
		bookmarkPlaceholder: "Select a bookmark...",
		displayTextLabel: "Display Text",
		displayTextPlaceholder: "Text to display (optional)",
		displayTextHint: "Leave empty to use the selected text",
		tooltipLabel: "Tooltip (optional)",
		tooltipPlaceholder: "Text shown on hover",
		removeLink: "Remove Link",
		invalidUrl: "Please enter a valid URL",
		urlRequired: "URL is required"
	},
	insertTable: {
		title: "Insert Table",
		hoverToSelect: "Hover to select size",
		tableSize: "{cols} x {rows} Table",
		orSpecifySize: "or specify size",
		rowsLabel: "Rows:",
		columnsLabel: "Columns:",
		insertButton: "Insert Table",
		sizeSelector: "Table size selector"
	},
	splitCell: {
		title: "Split Cell",
		description: "Set how many rows and columns to split the selected cell into.",
		rowsLabel: "Rows:",
		columnsLabel: "Columns:",
		currentMinimum: "Minimum from current span: {rows} row(s) x {cols} column(s)",
		minValue: "Use at least {rows} row(s) and {cols} column(s).",
		notOneByOne: "Choose at least two resulting cells."
	},
	insertImage: {
		title: "Insert Image",
		uploadAriaLabel: "Click or drag to upload image",
		uploadText: "Click to select or drag and drop an image",
		uploadSubtext: "PNG, JPG, GIF up to 10MB",
		dimensions: "Dimensions",
		widthLabel: "Width:",
		heightLabel: "Height:",
		aspectRatioLocked: "Aspect ratio locked",
		aspectRatioUnlocked: "Aspect ratio unlocked",
		altTextLabel: "Alt Text (optional)",
		altTextPlaceholder: "Describe the image for accessibility",
		insertButton: "Insert Image",
		invalidFile: "Please select a valid image file",
		fileTooLarge: "Image file is too large (max 10MB)",
		readFailed: "Failed to read image file",
		loadFailed: "Failed to load image",
		preview: "Preview"
	},
	insertSymbol: {
		title: "Insert Symbol",
		searchPlaceholder: "Search symbols (character or Unicode)...",
		noResults: "No symbols found for \"{query}\"",
		decimal: "Decimal: {value}",
		categories: {
			common: "Common",
			arrows: "Arrows",
			math: "Math",
			greek: "Greek",
			shapes: "Shapes",
			punctuation: "Punctuation",
			currency: "Currency",
			music: "Music",
			emoji: "Emoji"
		}
	},
	imageProperties: {
		title: "Image Properties",
		altText: "Alt Text",
		altTextPlaceholder: "Describe this image for accessibility...",
		border: "Border",
		width: "Width",
		style: "Style",
		color: "Color",
		preview: "Preview",
		borderStyles: {
			solid: "Solid",
			dashed: "Dashed",
			dotted: "Dotted",
			double: "Double",
			groove: "Groove",
			ridge: "Ridge",
			inset: "Inset",
			outset: "Outset"
		}
	},
	imagePosition: {
		title: "Image Position",
		horizontal: "Horizontal",
		vertical: "Vertical",
		position: "Position",
		alignment: "Alignment",
		offset: "Offset",
		offsetPx: "Offset (px)",
		align: "Align",
		relativeTo: "Relative to",
		alignOptions: {
			left: "Left",
			center: "Center",
			right: "Right",
			top: "Top",
			bottom: "Bottom"
		},
		relativeOptions: {
			page: "Page",
			column: "Column",
			margin: "Margin",
			character: "Character",
			paragraph: "Paragraph",
			line: "Line"
		}
	},
	pageSetup: {
		title: "Page Setup",
		pageSize: "PAGE SIZE",
		sizeLabel: "Size",
		custom: "Custom",
		orientation: "Orientation",
		portrait: "Portrait",
		landscape: "Landscape",
		margins: "MARGINS",
		top: "Top",
		bottom: "Bottom",
		left: "Left",
		right: "Right",
		pageSizes: {
			letter: "Letter (8.5\" × 11\")",
			a4: "A4 (8.27\" × 11.69\")",
			legal: "Legal (8.5\" × 14\")",
			a3: "A3 (11.69\" × 16.54\")",
			a5: "A5 (5.83\" × 8.27\")",
			b5: "B5 (6.93\" × 9.84\")",
			executive: "Executive (7.25\" × 10.5\")"
		}
	},
	tableProperties: {
		title: "Table Properties",
		widthType: "Width type",
		widthLabel: "Width",
		alignmentLabel: "Alignment",
		widthTypes: {
			auto: "Auto",
			fixed: "Fixed (twips)",
			percentage: "Percentage"
		},
		units: {
			fiftiethsPercent: "(50ths of %)",
			twips: "tw"
		},
		alignOptions: {
			left: "Left",
			center: "Center",
			right: "Right"
		}
	},
	pasteSpecial: {
		title: "Paste Special",
		keepFormatting: "Keep Source Formatting",
		keepFormattingDescription: "Paste with original formatting",
		keepFormattingShortcut: "Ctrl+V",
		plainText: "Paste as Plain Text",
		plainTextDescription: "Paste without any formatting",
		plainTextShortcut: "Ctrl+Shift+V",
		readingClipboard: "Reading clipboard...",
		preview: "Preview:",
		noContent: "No content available to paste",
		clipboardError: "Unable to read clipboard. Please use Ctrl+V to paste."
	},
	footnoteProperties: {
		title: "Footnote & Endnote Properties",
		footnotes: "Footnotes",
		endnotes: "Endnotes",
		position: "Position",
		numberFormat: "Number format",
		startAt: "Start at",
		numbering: "Numbering",
		footnotePositions: {
			bottomOfPage: "Bottom of page",
			belowText: "Below text"
		},
		endnotePositions: {
			endOfDocument: "End of document",
			endOfSection: "End of section"
		},
		numberingOptions: {
			continuous: "Continuous",
			restartSection: "Restart each section",
			restartPage: "Restart each page"
		},
		formats: {
			decimal: "1, 2, 3, ...",
			lowerRoman: "i, ii, iii, ...",
			upperRoman: "I, II, III, ...",
			lowerAlpha: "a, b, c, ...",
			upperAlpha: "A, B, C, ...",
			symbols: "*, †, ‡, ..."
		}
	},
	keyboardShortcuts: {
		ariaLabel: "Keyboard Shortcuts",
		searchPlaceholder: "Search shortcuts...",
		categories: {
			editing: "Editing",
			formatting: "Formatting",
			navigation: "Navigation",
			clipboard: "Clipboard",
			selection: "Selection",
			view: "View",
			file: "File",
			other: "Other"
		},
		shortcuts: {
			save: "Save",
			saveDescription: "Save document",
			print: "Print",
			printDescription: "Print document",
			undo: "Undo",
			undoDescription: "Undo last action",
			redo: "Redo",
			redoDescription: "Redo last action",
			"delete": "Delete",
			deleteDescription: "Delete selected text",
			find: "Find",
			findDescription: "Find text in document",
			findReplace: "Find & Replace",
			findReplaceDescription: "Find and replace text",
			cut: "Cut",
			cutDescription: "Cut selected text",
			copy: "Copy",
			copyDescription: "Copy selected text",
			paste: "Paste",
			pasteDescription: "Paste from clipboard",
			pastePlainText: "Paste as Plain Text",
			pastePlainTextDescription: "Paste without formatting",
			bold: "Bold",
			boldDescription: "Toggle bold formatting",
			italic: "Italic",
			italicDescription: "Toggle italic formatting",
			underline: "Underline",
			underlineDescription: "Toggle underline formatting",
			strikethrough: "Strikethrough",
			strikethroughDescription: "Toggle strikethrough",
			subscript: "Subscript",
			subscriptDescription: "Toggle subscript",
			superscript: "Superscript",
			superscriptDescription: "Toggle superscript",
			alignLeft: "Align Left",
			alignLeftDescription: "Left align paragraph",
			alignCenter: "Align Center",
			alignCenterDescription: "Center align paragraph",
			alignRight: "Align Right",
			alignRightDescription: "Right align paragraph",
			justify: "Justify",
			justifyDescription: "Justify paragraph",
			increaseIndent: "Increase Indent",
			increaseIndentDescription: "Increase paragraph indent",
			decreaseIndent: "Decrease Indent",
			decreaseIndentDescription: "Decrease paragraph indent",
			selectAll: "Select All",
			selectAllDescription: "Select all content",
			selectWord: "Select Word",
			selectWordDescription: "Select current word",
			selectParagraph: "Select Paragraph",
			selectParagraphDescription: "Select current paragraph",
			extendSelectionByWord: "Extend Selection by Word",
			extendSelectionByWordDescription: "Extend selection to next/previous word",
			extendSelectionToLineEdge: "Extend Selection to Line Edge",
			extendSelectionToLineEdgeDescription: "Extend selection to line start/end",
			moveByWord: "Move by Word",
			moveByWordDescription: "Move cursor to next/previous word",
			moveToLineStart: "Move to Line Start",
			moveToLineStartDescription: "Move cursor to start of line",
			moveToLineEnd: "Move to Line End",
			moveToLineEndDescription: "Move cursor to end of line",
			moveToDocumentStart: "Move to Document Start",
			moveToDocumentStartDescription: "Move cursor to start of document",
			moveToDocumentEnd: "Move to Document End",
			moveToDocumentEndDescription: "Move cursor to end of document",
			pageUp: "Page Up",
			pageUpDescription: "Scroll up one page",
			pageDown: "Page Down",
			pageDownDescription: "Scroll down one page",
			zoomIn: "Zoom In",
			zoomInDescription: "Increase zoom level",
			zoomOut: "Zoom Out",
			zoomOutDescription: "Decrease zoom level",
			resetZoom: "Reset Zoom",
			resetZoomDescription: "Reset zoom to 100%",
			keyboardShortcuts: "Keyboard Shortcuts",
			keyboardShortcutsDescription: "Show this help dialog"
		},
		noResults: "No shortcuts found matching \"{query}\"",
		pressEscToClose: "Press {key} to close",
		or: "or"
	}
};
var comments = {
	resolved: "Resolved",
	resolve: "Resolve",
	reopen: "Reopen",
	moreOptions: "More options",
	unknown: "Unknown",
	addComment: "Add a comment...",
	replyPlaceholder: "Reply or add others with @",
	replyCount: "{count, plural, one {# reply} other {# replies}}"
};
var trackedChanges = {
	unknown: "Unknown",
	replaced: "Replaced",
	"with": "with",
	added: "Added",
	deleted: "Deleted"
};
var contextMenu = {
	ariaLabel: "AI actions menu",
	textMenuAriaLabel: "Text editing menu",
	customPromptPlaceholder: "Enter custom prompt...",
	cut: "Cut",
	cutShortcut: "Ctrl+X",
	copy: "Copy",
	copyShortcut: "Ctrl+C",
	paste: "Paste",
	pasteShortcut: "Ctrl+V",
	pastePlainText: "Paste as Plain Text",
	pastePlainTextShortcut: "Ctrl+Shift+V",
	"delete": "Delete",
	deleteShortcut: "Del",
	selectAll: "Select All",
	selectAllShortcut: "Ctrl+A",
	selected: "Selected:",
	aiActions: {
		askAi: "Ask AI",
		rewrite: "Rewrite",
		expand: "Expand",
		summarize: "Summarize",
		translate: "Translate",
		explain: "Explain",
		fixGrammar: "Fix Grammar",
		makeFormal: "Make Formal",
		makeCasual: "Make Casual",
		custom: "Custom"
	}
};
var documentOutline = {
	ariaLabel: "Document outline",
	closeAriaLabel: "Close outline",
	closeTitle: "Close outline",
	title: "Outline",
	noHeadings: "No headings found. Add headings to your document to see them here."
};
var sidebar = {
	ariaLabel: "Annotations sidebar"
};
var titleBar = {
	untitled: "Untitled",
	documentNameAriaLabel: "Document name",
	menuBarAriaLabel: "Menu bar"
};
var errors = {
	loadingDocument: "Loading document...",
	noDocumentLoaded: "No document loaded",
	failedToLoad: "Failed to Load Document",
	unableToParse: "Unable to Parse Document",
	somethingWentWrong: "Something went wrong",
	errorDescription: "An error occurred while rendering this component. Please try again or contact support if the problem persists.",
	errorLabel: "Error:",
	componentStack: "Component Stack:",
	tryAgain: "Try Again",
	showDetails: "Show details",
	hideDetails: "Hide details",
	unsavedChanges: "You have unsaved changes. Are you sure you want to leave?"
};
var table = {
	insertRowAbove: "Insert row above",
	insertRowBelow: "Insert row below",
	insertColumnLeft: "Insert column left",
	insertColumnRight: "Insert column right",
	deleteRow: "Delete row",
	deleteColumn: "Delete column",
	deleteTable: "Delete table",
	mergeCells: "Merge cells",
	splitCell: "Split cell",
	editingTools: "Table editing tools",
	label: "Table:",
	cellFillColor: "Cell Fill Color",
	borderColor: "Border Color",
	borderWidth: "Border width",
	unknownAction: "Unknown Action",
	borders: {
		all: "All borders",
		outside: "Outside borders",
		inside: "Inside borders",
		none: "No borders",
		remove: "Remove borders",
		top: "Top border",
		bottom: "Bottom border",
		left: "Left border",
		right: "Right border",
		styleAriaLabel: "Border style",
		tooltip: "Borders"
	},
	moreOptions: "More table options",
	styles: {
		title: "Table Styles",
		label: "Styles",
		normalTable: "Normal Table",
		tableGrid: "Table Grid",
		gridTableLight: "Grid Table Light",
		plainTable1: "Plain Table 1",
		plainTable2: "Plain Table 2",
		plainTable3: "Plain Table 3",
		plainTable4: "Plain Table 4",
		gridTable1Light: "Grid Table 1 Light",
		gridTable4Accent1: "Grid Table 4 Accent 1",
		gridTable5Dark: "Grid Table 5 Dark",
		listTable3Accent2: "List Table 3 Accent 2",
		listTable4Accent3: "List Table 4 Accent 3",
		gridTable4Accent5: "Grid Table 4 Accent 5",
		gridTable4Accent6: "Grid Table 4 Accent 6"
	}
};
var tableAdvanced = {
	verticalAlignment: "Vertical alignment",
	top: "Top",
	middle: "Middle",
	bottom: "Bottom",
	cellMargins: "Cell margins",
	textDirection: "Text direction",
	textDirections: {
		horizontal: "Horizontal (LR)",
		verticalRL: "Vertical (top-bottom, RL)",
		verticalLR: "Vertical (bottom-top, LR)"
	},
	toggleNoWrap: "Toggle no-wrap",
	rowHeight: "Row height",
	heightRules: {
		auto: "Auto",
		atLeast: "At least",
		exact: "Exact"
	},
	rule: "Rule",
	height: "Height",
	toggleHeaderRow: "Toggle header row",
	distributeColumns: "Distribute columns evenly",
	autoFit: "Auto-fit to contents",
	tableProperties: "Table properties...",
	tableAlignment: "Table alignment",
	alignTableLeft: "Align table left",
	alignTableCenter: "Align table center",
	alignTableRight: "Align table right",
	tableOptionsMenu: "Table options menu",
	tableOptions: "Table options"
};
var imageTransform = {
	tooltip: "Transform",
	rotateClockwise: "Rotate clockwise",
	rotateCounterClockwise: "Rotate counter-clockwise",
	flipHorizontal: "Flip horizontal",
	flipVertical: "Flip vertical"
};
var imageWrap = {
	inline: "Inline with text",
	floatLeft: "Float left (wrap right)",
	floatRight: "Float right (wrap left)",
	topAndBottom: "Top and bottom",
	behindText: "Behind text",
	inFrontOfText: "In front of text",
	tooltipPrefix: "Wrap: {label}"
};
var responsePreview = {
	loading: "{action}...",
	result: "{action} Result",
	closeEsc: "Close (Esc)",
	editPrompt: "Edit the result before accepting:",
	changes: "Changes:",
	original: "Original:",
	"new": "New:",
	cancelEdit: "Cancel Edit"
};
var commentMarkers = {
	resolvedComment: "Resolved comment",
	comment: "Comment"
};
var editor = {
	toggleCommentsSidebar: "Toggle comments sidebar",
	showDocumentOutline: "Show document outline",
	editing: "Editing",
	editingDescription: "Edit document directly",
	suggesting: "Suggesting",
	suggestingDescription: "Edits become suggestions",
	viewing: "Viewing",
	viewingDescription: "Read-only, no edits",
	failedToParse: "Failed to parse document",
	linkRemoved: "Link removed",
	linkCopied: "Link copied to clipboard",
	failedToSave: "Failed to save document"
};
var hyperlinkPopup = {
	displayTextPlaceholder: "Display text",
	urlPlaceholder: "https://example.com",
	copyLink: "Copy link",
	editLink: "Edit link",
	removeLink: "Remove link"
};
var headerFooter = {
	header: "Header",
	footer: "Footer",
	options: "Options",
	insertPageNumber: "Insert current page number",
	insertTotalPages: "Insert total page count",
	remove: "Remove {label}",
	closeEditing: "Close {label} editing"
};
var image = {
	placeholder: "Image placeholder",
	placeholderText: "[Image]",
	editableAriaLabel: "Editable image"
};
var ruler = {
	horizontal: "Horizontal ruler",
	vertical: "Vertical ruler",
	firstLineIndent: "First line indent",
	leftIndent: "Left indent",
	rightIndent: "Right indent",
	topMargin: "Top margin",
	bottomMargin: "Bottom margin"
};
var print = {
	label: "Print",
	allPages: "All ({totalPages} pages)",
	singlePage: "Page {start}",
	pageRange: "Pages {start}-{end}"
};
var unsaved = {
	unsaved: "Unsaved",
	saved: "Saved",
	unsavedTitle: "Document has unsaved changes",
	savedTitle: "All changes saved",
	unsavedAriaLabel: "Unsaved changes",
	savedAriaLabel: "All changes saved"
};
var loading = {
	label: "Loading"
};
var en = {
	_lang: _lang,
	common: common,
	toolbar: toolbar,
	formattingBar: formattingBar,
	alignment: alignment,
	lists: lists,
	lineSpacing: lineSpacing,
	styles: styles,
	font: font,
	fontSize: fontSize,
	zoom: zoom,
	colorPicker: colorPicker,
	dialogs: dialogs,
	comments: comments,
	trackedChanges: trackedChanges,
	contextMenu: contextMenu,
	documentOutline: documentOutline,
	sidebar: sidebar,
	titleBar: titleBar,
	errors: errors,
	table: table,
	tableAdvanced: tableAdvanced,
	imageTransform: imageTransform,
	imageWrap: imageWrap,
	responsePreview: responsePreview,
	commentMarkers: commentMarkers,
	editor: editor,
	hyperlinkPopup: hyperlinkPopup,
	headerFooter: headerFooter,
	image: image,
	ruler: ruler,
	print: print,
	unsaved: unsaved,
	loading: loading
};

/** Auto-derived from en.json — never manually maintained */
type LocaleStrings = typeof en;
/** Recursively makes all properties optional */
type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] | null;
};
type PartialLocaleStrings = DeepPartial<LocaleStrings>;
/** Consumer-facing type for the i18n prop. */
type Translations = PartialLocaleStrings;
/** Generates a union of all valid dot-notation paths through a nested object type */
type DotPath<T, Prefix extends string = ''> = {
    [K in keyof T & string]: T[K] extends Record<string, unknown> ? DotPath<T[K], `${Prefix}${K}.`> : `${Prefix}${K}`;
}[keyof T & string];
type TranslationKey = DotPath<LocaleStrings>;

/**
 * Print Utilities
 *
 * Provides print functionality with:
 * - Print button component for toolbar
 * - Print-specific CSS styles
 * - Browser print dialog trigger
 * - Page range utilities
 */

/**
 * Print options
 */
interface PrintOptions {
    /** Whether to include headers */
    includeHeaders?: boolean;
    /** Whether to include footers */
    includeFooters?: boolean;
    /** Whether to include page numbers */
    includePageNumbers?: boolean;
    /** Page range to print (null = all) */
    pageRange?: {
        start: number;
        end: number;
    } | null;
    /** Scale factor for printing (1.0 = 100%) */
    scale?: number;
    /** Whether to show background colors */
    printBackground?: boolean;
    /** Margins mode */
    margins?: 'default' | 'none' | 'minimum';
}
/**
 * PrintButton props
 */
interface PrintButtonProps {
    /** Callback when print is triggered */
    onPrint: () => void;
    /** Whether the button is disabled */
    disabled?: boolean;
    /** Button label */
    label?: string;
    /** Additional CSS class */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
    /** Show icon */
    showIcon?: boolean;
    /** Compact mode */
    compact?: boolean;
}
/**
 * PrintButton - Standalone print button for toolbar
 */
declare function PrintButton({ onPrint, disabled, label: labelProp, className, style, showIcon, compact, }: PrintButtonProps): React__default.ReactElement;
/**
 * PrintStyles - Injects print-specific CSS
 */
declare function PrintStyles(): React__default.ReactElement;
/**
 * Trigger browser print dialog for the current document
 */
declare function triggerPrint(): void;
/**
 * Create print-optimized document view in a new window
 */
declare function openPrintWindow(title: string | undefined, content: string): Window | null;
/**
 * Get default print options
 */
declare function getDefaultPrintOptions(): PrintOptions;
/**
 * Create page range from string (e.g., "1-5", "3", "1,3,5")
 */
declare function parsePageRange(input: string, maxPages: number): {
    start: number;
    end: number;
} | null;
/**
 * Format page range for display
 */
declare function formatPageRange(range: {
    start: number;
    end: number;
} | null, totalPages: number): string;
/**
 * Check if browser supports good print functionality
 */
declare function isPrintSupported(): boolean;

/**
 * TableToolbar Component
 *
 * Provides controls for editing tables:
 * - Add row above/below
 * - Add column left/right
 * - Delete row/column
 * - Merge cells
 * - Split cell
 *
 * Shows when cursor is in a table.
 */

/**
 * Table editing action types
 */
type TableAction = 'addRowAbove' | 'addRowBelow' | 'addColumnLeft' | 'addColumnRight' | 'deleteRow' | 'deleteColumn' | 'mergeCells' | 'splitCell' | 'deleteTable' | 'selectTable' | 'selectRow' | 'selectColumn' | 'borderAll' | 'borderOutside' | 'borderInside' | 'borderNone' | 'borderTop' | 'borderBottom' | 'borderLeft' | 'borderRight' | {
    type: 'cellFillColor';
    color: string | null;
} | {
    type: 'borderColor';
    color: string;
} | {
    type: 'borderWidth';
    size: number;
} | {
    type: 'cellBorder';
    side: 'top' | 'bottom' | 'left' | 'right' | 'all';
    style: string;
    size: number;
    color: string;
} | {
    type: 'cellVerticalAlign';
    align: 'top' | 'center' | 'bottom';
} | {
    type: 'cellMargins';
    margins: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
} | {
    type: 'cellTextDirection';
    direction: string | null;
} | {
    type: 'toggleNoWrap';
} | {
    type: 'rowHeight';
    height: number | null;
    rule?: 'auto' | 'atLeast' | 'exact';
} | {
    type: 'toggleHeaderRow';
} | {
    type: 'distributeColumns';
} | {
    type: 'autoFitContents';
} | {
    type: 'tableProperties';
    props: {
        width?: number | null;
        widthType?: string | null;
        justification?: 'left' | 'center' | 'right' | null;
    };
} | {
    type: 'openTableProperties';
} | {
    type: 'applyTableStyle';
    styleId: string;
};
/**
 * Selection within a table
 */
interface TableSelection {
    /** Index of the table in the document */
    tableIndex: number;
    /** Row index (0-indexed) */
    rowIndex: number;
    /** Column index (0-indexed) */
    columnIndex: number;
    /** Selected cell range for multi-cell selection */
    selectedCells?: {
        startRow: number;
        startCol: number;
        endRow: number;
        endCol: number;
    };
}
/**
 * Context for table operations
 */
interface TableContext {
    /** The table being edited */
    table: Table;
    /** Current selection within the table */
    selection: TableSelection;
    /** Whether multiple cells are selected (for merge) */
    hasMultiCellSelection: boolean;
    /** Whether current cell can be split */
    canSplitCell: boolean;
    /** Total number of rows */
    rowCount: number;
    /** Total number of columns */
    columnCount: number;
}
interface TableSplitConfig {
    minRows: number;
    minCols: number;
    initialRows: number;
    initialCols: number;
}
/**
 * Props for TableToolbar component
 */
interface TableToolbarProps {
    /** Current table context (null if cursor not in table) */
    context: TableContext | null;
    /** Callback when a table action is triggered */
    onAction?: (action: TableAction, context: TableContext) => void;
    /** Whether the toolbar is disabled */
    disabled?: boolean;
    /** Additional CSS class name */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
    /** Show labels next to icons */
    showLabels?: boolean;
    /** Compact mode */
    compact?: boolean;
    /** Position of the toolbar */
    position?: 'top' | 'floating';
    /** Custom render for additional buttons */
    children?: ReactNode;
}
/**
 * TableToolbar - Shows table manipulation controls when cursor is in a table
 */
declare function TableToolbar({ context, onAction, disabled, className, style, showLabels, compact, position, children, }: TableToolbarProps): React__default.ReactElement | null;
/**
 * Create a table context from a table and selection
 */
declare function createTableContext(table: Table, selection: TableSelection): TableContext;
/**
 * Get column count from a table
 */
declare function getColumnCount(table: Table): number;
/**
 * Get cell at specific row and column index
 */
declare function getCellAt(table: Table, rowIndex: number, columnIndex: number): TableCell | null;
declare function getTableSplitCellDialogConfig(table: Table, rowIndex: number, columnIndex: number): TableSplitConfig | null;
declare function splitTableCell(table: Table, rowIndex: number, columnIndex: number, rows: number, cols: number): Table;
/**
 * Add a row to a table at the specified index
 */
declare function addRow(table: Table, atIndex: number, position?: 'before' | 'after'): Table;
/**
 * Delete a row from a table
 */
declare function deleteRow(table: Table, rowIndex: number): Table;
/**
 * Add a column to a table at the specified index
 */
declare function addColumn(table: Table, atIndex: number, position?: 'before' | 'after'): Table;
/**
 * Delete a column from a table
 */
declare function deleteColumn(table: Table, columnIndex: number): Table;
/**
 * Merge cells in a selection
 */
declare function mergeCells(table: Table, selection: TableSelection): Table;
/**
 * Backward-compatible helper for callers that still use the older merged-cell
 * split behavior directly.
 *
 * User-facing Split cell is now dialog-driven. For document-model tables, use
 * `getTableSplitCellDialogConfig()` and `splitTableCell()` instead.
 */
declare function splitCell(table: Table, rowIndex: number, columnIndex: number): Table;

/**
 * Clipboard utilities for copy/paste with formatting
 *
 * Handles:
 * - Copy: puts formatted HTML and plain text on clipboard
 * - Paste: reads HTML clipboard, converts to runs with formatting
 * - Handles paste from Word (cleans up Word HTML)
 * - Ctrl+C, Ctrl+V, Ctrl+X keyboard shortcuts
 */

/**
 * Clipboard content format
 */
interface ClipboardContent {
    /** Plain text representation */
    plainText: string;
    /** HTML representation */
    html: string;
    /** Internal format (JSON) for preserving full formatting */
    internal?: string;
}
/**
 * Parsed clipboard content
 */
interface ParsedClipboardContent {
    /** Runs parsed from clipboard */
    runs: Run[];
    /** Whether content came from Word */
    fromWord: boolean;
    /** Whether content came from our editor */
    fromEditor: boolean;
    /** Original plain text */
    plainText: string;
}
/**
 * Options for clipboard operations
 */
interface ClipboardOptions {
    /** Whether to include formatting in copy */
    includeFormatting?: boolean;
    /** Whether to clean Word-specific formatting */
    cleanWordFormatting?: boolean;
    /** Callback for handling errors */
    onError?: (error: Error) => void;
    /** Document theme — required to resolve themed text/shading colors in HTML. */
    theme?: Theme | null;
}
/**
 * Custom MIME type for internal clipboard format
 */
declare const INTERNAL_CLIPBOARD_TYPE = "application/x-docx-editor";
/**
 * Standard clipboard MIME types
 */
declare const CLIPBOARD_TYPES: {
    readonly HTML: "text/html";
    readonly PLAIN: "text/plain";
};
/**
 * Copy runs to clipboard with formatting
 */
declare function copyRuns(runs: Run[], options?: ClipboardOptions): Promise<boolean>;
/**
 * Copy paragraphs to clipboard with formatting
 */
declare function copyParagraphs(paragraphs: Paragraph[], options?: ClipboardOptions): Promise<boolean>;
/**
 * Convert runs to clipboard content (HTML and plain text).
 *
 * @param theme - Optional document theme. Pass it so themed text color and
 *   shading resolve correctly in the HTML payload (matters when pasting into
 *   Gmail/Word/etc.). Omit for rgb-only content.
 */
declare function runsToClipboardContent(runs: Run[], includeFormatting?: boolean, theme?: Theme | null): ClipboardContent;
/**
 * Convert paragraphs to clipboard content.
 *
 * @param theme - See {@link runsToClipboardContent}.
 */
declare function paragraphsToClipboardContent(paragraphs: Paragraph[], includeFormatting?: boolean, theme?: Theme | null): ClipboardContent;
/**
 * Write content to clipboard
 */
declare function writeToClipboard(content: ClipboardContent): Promise<boolean>;
/**
 * Read content from clipboard
 */
declare function readFromClipboard(options?: ClipboardOptions): Promise<ParsedClipboardContent | null>;
/**
 * Handle paste event
 */
declare function handlePasteEvent(event: ClipboardEvent, options?: ClipboardOptions): ParsedClipboardContent | null;
/**
 * Parse HTML from clipboard
 */
declare function parseClipboardHtml(html: string, plainText: string, cleanWordFormatting?: boolean): ParsedClipboardContent;
/**
 * Check if HTML is from Microsoft Word
 */
declare function isWordHtml(html: string): boolean;
/**
 * Check if HTML is from our editor
 */
declare function isEditorHtml(html: string): boolean;
/**
 * Clean Microsoft Word HTML
 */
declare function cleanWordHtml(html: string): string;
/**
 * Convert HTML to runs
 */
declare function htmlToRuns(html: string, plainTextFallback: string): Run[];
/**
 * Create clipboard keyboard handlers for an editor
 */
declare function createClipboardHandlers(options: {
    onCopy?: () => {
        runs: Run[];
    } | null;
    onCut?: () => {
        runs: Run[];
    } | null;
    onPaste?: (content: ParsedClipboardContent) => void;
    clipboardOptions?: ClipboardOptions;
}): {
    handleCopy: (event: ClipboardEvent) => Promise<void>;
    handleCut: (event: ClipboardEvent) => Promise<void>;
    handlePaste: (event: ClipboardEvent) => void;
    handleKeyDown: (event: KeyboardEvent) => Promise<void>;
};

export { getDefaultPrintOptions as A, getTableSplitCellDialogConfig as B, CLIPBOARD_TYPES as C, handlePasteEvent as D, htmlToRuns as E, isEditorHtml as F, isPrintSupported as G, isWordHtml as H, INTERNAL_CLIPBOARD_TYPE as I, mergeCells as J, openPrintWindow as K, type LocaleStrings as L, paragraphsToClipboardContent as M, parseClipboardHtml as N, parsePageRange as O, type ParsedClipboardContent as P, readFromClipboard as Q, runsToClipboardContent as R, splitCell as S, type Translations as T, splitTableCell as U, triggerPrint as V, writeToClipboard as W, type TranslationKey as a, type ClipboardContent as b, type ClipboardOptions as c, type PartialLocaleStrings as d, PrintButton as e, type PrintButtonProps as f, type PrintOptions as g, PrintStyles as h, type TableAction as i, type TableContext as j, type TableSelection as k, type TableSplitConfig as l, TableToolbar as m, type TableToolbarProps as n, addColumn as o, addRow as p, cleanWordHtml as q, copyParagraphs as r, copyRuns as s, createClipboardHandlers as t, createTableContext as u, deleteColumn as v, deleteRow as w, formatPageRange as x, getCellAt as y, getColumnCount as z };
