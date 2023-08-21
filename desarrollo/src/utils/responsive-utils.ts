//If you want to change this value, you also should change it in /src/styles/base/mixins.less
const MAX_WIDTH_MOBILE: number = 990;

export function isMobileViewport(): boolean {
    return window.innerWidth < MAX_WIDTH_MOBILE;
}
