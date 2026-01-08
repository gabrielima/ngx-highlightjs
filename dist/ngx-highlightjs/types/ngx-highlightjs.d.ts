import * as i0 from '@angular/core';
import { InjectionToken, EnvironmentProviders, Signal, InputSignal, WritableSignal, OutputEmitterRef, InputSignalWithTransform } from '@angular/core';
import { HLJSOptions, HLJSApi, HighlightOptions, HighlightResult, AutoHighlightResult, LanguageFn } from 'highlight.js';

/**
 * Full documentation is available here https://highlightjs.readthedocs.io/en/latest/api.html
 */
interface LineNumbersOptions {
    startFrom?: number;
    singleLine?: boolean;
}
interface HighlightJSOptions {
    highlightOptions?: Partial<HLJSOptions>;
    lineNumbersOptions?: LineNumbersOptions;
    languages?: Record<string, () => Promise<unknown>>;
    coreLibraryLoader?: () => Promise<unknown>;
    fullLibraryLoader?: () => Promise<unknown>;
    lineNumbersLoader?: () => Promise<unknown>;
    themePath?: string;
}
declare const HIGHLIGHT_OPTIONS: InjectionToken<HighlightJSOptions>;
declare function provideHighlightOptions(options: HighlightJSOptions): EnvironmentProviders;

declare class HighlightJS {
    private readonly loader;
    private readonly options;
    private readonly hljsSignal;
    readonly hljs: Signal<HLJSApi>;
    constructor();
    /**
     * Core highlighting function. Accepts the code to highlight (string) and a list of options (object)
     */
    highlight(code: string, options: HighlightOptions): Promise<HighlightResult>;
    /**
     * Highlighting with language detection.
     */
    highlightAuto(value: string, languageSubset: string[]): Promise<AutoHighlightResult>;
    /**
     * Applies highlighting to a DOM node containing code.
     * This function is the one to use to apply highlighting dynamically after page load or within initialization code of third-party JavaScript frameworks.
     * The function uses language detection by default but you can specify the language in the class attribute of the DOM node. See the scopes reference for all available language names and scopes.
     */
    highlightElement(element: HTMLElement): Promise<void>;
    /**
     * Applies highlighting to all elements on a page matching the configured cssSelector. The default cssSelector value is 'pre code',
     * which highlights all code blocks. This can be called before or after the page’s onload event has fired.
     */
    highlightAll(): Promise<void>;
    /**
     * @deprecated in version 12
     * Configures global options:
     */
    configure(config: Partial<HLJSOptions>): Promise<void>;
    /**
     * Adds new language to the library under the specified name. Used mostly internally.
     * The function is passed the hljs object to be able to use common regular expressions defined within it.
     */
    registerLanguage(languageName: string, languageDefinition: LanguageFn): Promise<void>;
    /**
     * Removes a language and its aliases from the library. Used mostly internally
     */
    unregisterLanguage(languageName: string): Promise<void>;
    /**
     * Adds new language alias or aliases to the library for the specified language name defined under languageName key.
     */
    registerAliases(alias: string | string[], { languageName }: {
        languageName: string;
    }): Promise<void>;
    /**
     * @return The languages names list.
     */
    listLanguages(): Promise<string[]>;
    /**
     * Looks up a language by name or alias.
     */
    getLanguage(name: string): Promise<any>;
    /**
     * Enables safe mode. This is the default mode, providing the most reliable experience for production usage.
     */
    safeMode(): Promise<void>;
    /**
     * Enables debug/development mode.
     */
    debugMode(): Promise<void>;
    /**
     * Display line numbers
     */
    lineNumbersBlock(el: HTMLElement, options: LineNumbersOptions): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HighlightJS, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HighlightJS>;
}

declare abstract class HighlightBase {
    protected _hljs: HighlightJS;
    private readonly _nativeElement;
    private _sanitizer;
    abstract code: InputSignal<string>;
    abstract highlightResult: WritableSignal<HighlightResult | AutoHighlightResult>;
    abstract highlighted: OutputEmitterRef<HighlightResult | AutoHighlightResult>;
    constructor();
    protected abstract highlightElement(code: string): Promise<void>;
    private setTextContent;
    private setInnerHTML;
    static ɵfac: i0.ɵɵFactoryDeclaration<HighlightBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HighlightBase, never, never, {}, {}, never, never, true, never>;
}

declare class Highlight extends HighlightBase {
    code: InputSignal<string>;
    highlightResult: WritableSignal<HighlightResult>;
    readonly language: InputSignal<string>;
    readonly ignoreIllegals: InputSignalWithTransform<boolean, unknown>;
    highlighted: OutputEmitterRef<HighlightResult>;
    highlightElement(code: string): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<Highlight, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Highlight, "[highlight]", never, { "code": { "alias": "highlight"; "required": false; "isSignal": true; }; "language": { "alias": "language"; "required": true; "isSignal": true; }; "ignoreIllegals": { "alias": "ignoreIllegals"; "required": false; "isSignal": true; }; }, { "highlighted": "highlighted"; }, never, never, true, never>;
}

declare class HighlightAuto extends HighlightBase {
    code: InputSignal<string>;
    highlightResult: WritableSignal<AutoHighlightResult>;
    readonly languages: InputSignal<string[]>;
    highlighted: OutputEmitterRef<AutoHighlightResult>;
    protected highlightElement(code: string): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HighlightAuto, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HighlightAuto, "[highlightAuto]", never, { "code": { "alias": "highlightAuto"; "required": false; "isSignal": true; }; "languages": { "alias": "languages"; "required": false; "isSignal": true; }; }, { "highlighted": "highlighted"; }, never, never, true, never>;
}

declare class HighlightModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<HighlightModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<HighlightModule, never, [typeof Highlight, typeof HighlightAuto], [typeof Highlight, typeof HighlightAuto]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<HighlightModule>;
}

declare class HighlightLoader {
    private document;
    private isPlatformBrowser;
    private options;
    private readonly _ready;
    readonly ready: Promise<HLJSApi>;
    private _themeLinkElement;
    constructor();
    /**
     * Lazy-Load highlight.js library
     */
    private _loadLibrary;
    /**
     * Lazy-load highlight.js languages
     */
    private _loadLanguages;
    /**
     * Import highlight.js core library
     */
    private loadCoreLibrary;
    /**
     * Import highlight.js library with all languages
     */
    private loadFullLibrary;
    /**
     * Import line numbers library
     */
    private loadLineNumbers;
    /**
     * Reload theme styles
     */
    setTheme(path: string): void;
    /**
     * Load theme
     */
    private loadTheme;
    static ɵfac: i0.ɵɵFactoryDeclaration<HighlightLoader, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HighlightLoader>;
}

export { HIGHLIGHT_OPTIONS, Highlight, HighlightAuto, HighlightBase, HighlightJS, HighlightLoader, HighlightModule, provideHighlightOptions };
export type { HighlightJSOptions, LineNumbersOptions };
