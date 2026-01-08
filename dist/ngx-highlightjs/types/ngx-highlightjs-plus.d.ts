import * as i0 from '@angular/core';
import { InjectionToken, Provider, EventEmitter, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

declare function isUrl(url: string): boolean;
interface GistOptions {
    clientId: string;
    clientSecret: string;
}
declare const GIST_OPTIONS: InjectionToken<GistOptions>;
declare function provideGistOptions(options: GistOptions): Provider[];
interface Owner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}
interface User {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}
interface ChangeStatus {
    total: number;
    additions: number;
    deletions: number;
}
interface History {
    user: User;
    version: string;
    committed_at: Date;
    change_status: ChangeStatus;
    url: string;
}
interface Files {
    [fileName: string]: {
        filename: string;
        type: string;
        language: string;
        raw_url: string;
        size: number;
        truncated: boolean;
        content: string;
    };
}
interface Gist {
    url: string;
    forks_url: string;
    commits_url: string;
    id: string;
    node_id: string;
    git_pull_url: string;
    git_push_url: string;
    html_url: string;
    files: Files;
    public: boolean;
    created_at: Date;
    updated_at: Date;
    description: string;
    comments: number;
    user?: any;
    comments_url: string;
    owner: Owner;
    forks: any[];
    history: History[];
    truncated: boolean;
}

declare class GistDirective {
    private _loader;
    set gist(value: string);
    gistLoad: EventEmitter<Gist>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GistDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GistDirective, "[gist]", never, { "gist": { "alias": "gist"; "required": false; }; }, { "gistLoad": "gistLoad"; }, never, never, true, never>;
}
declare class GistFilePipe implements PipeTransform {
    transform(gist: Gist, fileName: string): string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<GistFilePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<GistFilePipe, "gistFile", true>;
}

declare class CodeFromUrlPipe implements PipeTransform {
    private _location;
    private _loader;
    transform(url: string): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CodeFromUrlPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<CodeFromUrlPipe, "codeFromUrl", true>;
}

declare class HighlightPlusModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<HighlightPlusModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<HighlightPlusModule, never, [typeof GistDirective, typeof GistFilePipe, typeof CodeFromUrlPipe], [typeof GistDirective, typeof GistFilePipe, typeof CodeFromUrlPipe]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<HighlightPlusModule>;
}

declare class CodeLoader {
    private _http;
    private _options;
    /**
     * Get plus code
     * @param id Gist ID
     */
    getCodeFromGist(id: string): Observable<Gist>;
    /**
     * Get code by URL
     * @param url File raw link
     */
    getCodeFromUrl(url: string): Observable<string>;
    private fetchFile;
    static ɵfac: i0.ɵɵFactoryDeclaration<CodeLoader, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CodeLoader>;
}

export { CodeFromUrlPipe, CodeLoader, GIST_OPTIONS, GistDirective, GistFilePipe, HighlightPlusModule, isUrl, provideGistOptions };
export type { Gist, GistOptions };
