export default {
    FILE_PATH: {
        fi: {
            //path that is used when inlining and replacing
            inline_path: './pages/fi/*.html',
            //path that is used when the html files are minified
            minify_path: 'build/fi/*.html',
            //path to final product
            dest: 'build/fi/'
        },
        sv: {
            inline_path: './pages/sv/*.html',
            minify_path: 'build/sv/*.html',
            dest: 'build/sv/'
        },
        en: {
            inline_path: './pages/en/*.html',
            minify_path: 'build/en/*.html',
            dest: 'build/en/'
        }
    },
    FEEDBACK_URLS: {
        //this placeholder string is replaced by the correct one according to language
        src: "<--feedback-->",
        fi: "https://opaskartta.turku.fi/eFeedback/fi/Feedback/30-S%C3%A4hk%C3%B6iset%20asiointipalvelut",
        sv: "https://opaskartta.turku.fi/eFeedback/sv/Feedback/30-S%C3%A4hk%C3%B6iset%20asiointipalvelut",
        en: "https://opaskartta.turku.fi/eFeedback/en/Feedback/30-S%C3%A4hk%C3%B6iset%20asiointipalvelut"
    },
    MAP_URLS: {
        //this placeholder string is replaced by the correct one according to language
        src: "<--map_url-->",
        fi: "https://palvelukartta.turku.fi/unit/",
        sv: "https://servicekarta.turku.fi/unit/",
        en: "https://servicemap.turku.fi/",
    },
    LOGO_URLS: {
        //this placeholder string is replaced by the correct one according to language
        src: "<--turku_logo-->",
        fi: "http://www.turku.fi/sites/default/files/styles/site_logo/public/sites/all/themes/custom/driveturku/images/sprites/logo.png",
        sv: "http://www.turku.fi/sites/default/files/styles/site_logo/public/sites/all/themes/custom/driveturku/images/sprites/logo_sv.png",
        en: "http://www.turku.fi/sites/default/files/styles/site_logo/public/sites/all/themes/custom/driveturku/images/sprites/logo.png",
    },
};
