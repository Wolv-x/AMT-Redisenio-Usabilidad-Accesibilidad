const MAX_WIDTH_MOBILE: number = 1024;

export function isMobileViewport(): boolean {
    return window.innerWidth < MAX_WIDTH_MOBILE;
}
