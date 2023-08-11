export const LanguageConfig = {
    LANGUAGES: {
        SPANISH: { code: 'es', name: 'Español' },
        KICHWA: { code: 'qu-EC', name: 'Kichwa shimi' },
        SHUAR: { code: 'jiv-EC', name: 'Shuar chicham' },
        ENGLISH: { code: 'en', name: 'English' },
    },
    DEFAULT_LANGUAGE: 'es',
};

export function getSupportedLanguageCodes() {
    const languageCodes = [];
    for (const language of Object.values(LanguageConfig.LANGUAGES)) {
        languageCodes.push(language.code);
    }
    return languageCodes;
}
