/**
 * @typedef LanguageSpecificObject
 * Object containing language specific paths.
 *
 * Example shows FI object for varaamo
 * @example
 * FI: {
 *     // path that is used when inlining and replacing
 *     INLINE_PATH: './pages/varaamo/fi/*.html',
 *     // path that is used when the html files are minified
 *     MINIFY_PATH: 'build/varaamo/fi/*.html',
 *     // path to final product
 *     DEST: 'build/varaamo/fi/',
 *     // base path
 *     ROOT: '/pages/varaamo/fi/',
 * },
 */

/**
 * @typedef ServiceSpecificObject
 * Contains language specific objects
 * @see {@link LanguageSpecificObject} example of a language specific object
 * @example
 * FI:{},
 * SV:{},
 * EN:{}
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
                INLINE_PATH: './pages/varaamo/fi/*.html',
                MINIFY_PATH: 'build/varaamo/fi/*.html',
                DEST: 'build/varaamo/fi/',
                ROOT: '/pages/varaamo/fi/',
            },
            /** @type {LanguageSpecificObject} **/
            SV: {
                INLINE_PATH: './pages/varaamo/sv/*.html',
                MINIFY_PATH: 'build/varaamo/sv/*.html',
                DEST: 'build/varaamo/sv/',
                ROOT: '/pages/varaamo/sv/'
            },
            /** @type {LanguageSpecificObject} **/
            EN: {
                INLINE_PATH: './pages/varaamo/en/*.html',
                MINIFY_PATH: 'build/varaamo/en/*.html',
                DEST: 'build/varaamo/en/',
                ROOT: '/pages/varaamo/en/'
            },
        },

        /** @see {@link ServiceSpecificObject} **/
        MONITORI: {
            /** @type {LanguageSpecificObject} **/
            FI: {
                INLINE_PATH: './pages/monitori/fi/*.html',
                MINIFY_PATH: 'build/monitori/fi/*.html',
                DEST: 'build/monitori/fi/',
                ROOT: '/pages/monitori/fi/'
            },
            /** @type {LanguageSpecificObject} **/
            SV: {
                INLINE_PATH: './pages/monitori/sv/*.html',
                MINIFY_PATH: 'build/monitori/sv/*.html',
                DEST: 'build/monitori/sv/',
                ROOT: '/pages/monitori/sv/',
            },
            /** @type {LanguageSpecificObject} **/
            EN: {
                INLINE_PATH: './pages/monitori/en/*.html',
                MINIFY_PATH: 'build/monitori/en/*.html',
                DEST: 'build/monitori/en/',
                ROOT: '/pages/monitori/en/',
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
};
