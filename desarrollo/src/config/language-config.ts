export interface Language {
    code: string;
    name: string;
}

interface LanguageConfig {
    LANGUAGES: Record<string, Language>;
    DEFAULT_LANGUAGE: string;
}

export const LanguageConfig: LanguageConfig = {
    LANGUAGES: {
        A_SPANISH: { code: 'es', name: 'Español' },
        B_KICHWA: { code: 'qu-EC', name: 'Kichwa shimi' },
        C_SHUAR: { code: 'jiv-EC', name: 'Shuar chicham' },
        D_ENGLISH: { code: 'en', name: 'English' },
    },
    DEFAULT_LANGUAGE: 'es',
};

export function getSupportedLanguageCodes(): string[] {
    const languageCodes: string[] = [];
    for (const language of Object.values(LanguageConfig.LANGUAGES)) {
        languageCodes.push(language.code);
    }
    return languageCodes;
}
