/**
 * @typedef LanguageSpecificObject
 * Object containing language specific paths.
 *
 * Example shows FI object for varaamo
 * @example
 * FI: {
 *     // path to final product
 *     DEST: 'build/varaamo/fi/',
 *     // base path
 *     ROOT: '/pages/varaamo/fi/',
 * },
 */

/**
 * @typedef ServiceSpecificObject
 * Contains language specific objects + additional keys
 * @see {@link LanguageSpecificObject} example of a language specific object
 * @example
 * FI:{},
 * SV:{},
 * EN:{}
 * PAYMENT:{}
 */

/**
 * @typedef MainObject
 * Contains service specific objects
 * @see {@link ServiceSpecificObject} example of service specific object.
 * @see {@link LanguageSpecificObject} example of language specific object.
 * @example
 * VARAAMO:{},
 * MONITORI:{}
 */

/**
 * @typedef PlaceholderStringReplacement
 * Contains placeholder string SRC that is replaced by a language specific url.
 *
 * Example uses FEEDBACK_URLS
 * @example
 * SRC: "<--feedback-->",
 * FI: "https://opaskartta.turku.fi/eFeedback/fi/....",
 * SV: "https://opaskartta.turku.fi/eFeedback/sv/...",
 * EN: "https://opaskartta.turku.fi/eFeedback/en/...",
 */

export default {
    /** @type {MainObject} **/
    FILE_PATH: {


        /** @see {@link ServiceSpecificObject} **/
        VARAAMO: {
            /** @type {LanguageSpecificObject} **/
            FI: {
                DEST: 'build/varaamo/fi/',
                ROOT: '/pages/varaamo/fi/',
            },
            /** @type {LanguageSpecificObject} **/
            SV: {
                DEST: 'build/varaamo/sv/',
                ROOT: '/pages/varaamo/sv/'
            },
            /** @type {LanguageSpecificObject} **/
            EN: {
                DEST: 'build/varaamo/en/',
                ROOT: '/pages/varaamo/en/'
            },
            PAYMENT: {
                ROOT: './pages/varaamo/payment/',
            }
        },

        /** @see {@link ServiceSpecificObject} **/
        MONITORI: {
            /** @type {LanguageSpecificObject} **/
            FI: {
                DEST: 'build/monitori/fi/',
                ROOT: '/pages/monitori/fi/'
            },
            /** @type {LanguageSpecificObject} **/
            SV: {
                DEST: 'build/monitori/sv/',
                ROOT: '/pages/monitori/sv/',
            },
            /** @type {LanguageSpecificObject} **/
            EN: {
                DEST: 'build/monitori/en/',
                ROOT: '/pages/monitori/en/',
            }
        },

        /** @see {@link ServiceSpecificObject} **/
        DIGINEUVOJA: {
            /** @type {LanguageSpecificObject} **/
            FI: {
                DEST: 'build/digineuvoja/fi/',
                ROOT: '/pages/digineuvoja/fi/'
            },
            /** @type {LanguageSpecificObject} **/
            SV: {
                DEST: 'build/digineuvoja/sv/',
                ROOT: '/pages/digineuvoja/sv/',
            },
            /** @type {LanguageSpecificObject} **/
            EN: {
                DEST: 'build/digineuvoja/en/',
                ROOT: '/pages/digineuvoja/en/',
            }
        }
    },

    /** @type {PlaceholderStringReplacement} **/
    FEEDBACK_URLS: {
        //this placeholder string is replaced by the correct one according to language
        SRC: "<--feedback-->",
        FI: "https://opaskartta.turku.fi/eFeedback/fi/Feedback/30-S%C3%A4hk%C3%B6iset%20asiointipalvelut",
        SV: "https://opaskartta.turku.fi/eFeedback/sv/Feedback/30-S%C3%A4hk%C3%B6iset%20asiointipalvelut",
        EN: "https://opaskartta.turku.fi/eFeedback/en/Feedback/30-S%C3%A4hk%C3%B6iset%20asiointipalvelut"
    },

    MAP_URLS: {
        /** @type {PlaceholderStringReplacement} **/
        SERVICE_MAP: {
            //placeholder string that is replaced according to language specific value
            SRC: "<--map_url-->",
            FI: "https://palvelukartta.turku.fi/unit/",
            SV: "https://servicekarta.turku.fi/unit/",
            EN: "https://servicemap.turku.fi/",
        }
    },
    LOGO_URLS: {
        /** @type {PlaceholderStringReplacement} **/
        TURKU: {
            SRC: "<--turku_logo-->",
            FI: "http://www.turku.fi/sites/default/files/styles/site_logo/public/sites/all/themes/custom/driveturku/images/sprites/logo.png",
            SV: "http://www.turku.fi/sites/default/files/styles/site_logo/public/sites/all/themes/custom/driveturku/images/sprites/logo_sv.png",
            EN: "http://www.turku.fi/sites/default/files/styles/site_logo/public/sites/all/themes/custom/driveturku/images/sprites/logo.png",
        }
    },
    LOGO_ALTS: {
        TURKU: {
            SRC: "<--turku_logo_alt-->",
            FI: "Turun vaakuna",
            SV: "Åbo stadsvapen",
            EN: "A picture of the coat of arms of the city of Turku."
        }
    }
};
