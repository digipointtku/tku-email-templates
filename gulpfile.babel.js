import gulp from 'gulp';
import inlineCss from 'gulp-inline-css';
import htmlmin from 'gulp-htmlmin';
import replace from 'gulp-replace';

import FILES from './variables';

/**
 * Gulp tasks.
 * See https://gulpjs.com/
 */
gulp.task('build:varaamo:finnish', gulp.series(inlineVaraamoFI, minifyVaraamoFI));
gulp.task('build:varaamo:swedish', gulp.series(inlineVaraamoSV, minifyVaraamoSV));
gulp.task('build:varaamo:english', gulp.series(inlineVaraamoEN, minifyVaraamoEN));
gulp.task('build:varaamo:all', gulp.series('build:varaamo:finnish', 'build:varaamo:swedish', 'build:varaamo:english'));
gulp.task('build:monitori:finnish', gulp.series(inlineMonitoriFI, minifyMonitoriFI));
gulp.task('build:monitori:swedish', gulp.series(inlineMonitoriSV, minifyMonitoriSV));
gulp.task('build:monitori:english', gulp.series(inlineMonitoriEN, minifyMonitoriEN));
gulp.task('build:monitori:all', gulp.series('build:monitori:finnish', 'build:monitori:swedish', 'build:monitori:english'));
gulp.task('default', gulp.series('build:varaamo:all', 'build:monitori:all'));


/**
 * First replaces placeholder strings(<--feedback/map_url/turku_logo-->) with correct urls for the language,
 * then inlines all css(from css files in /css subfolder) before moving the final product to correct folder/subfolder depending on language.
 *
 * Info on replace/inlineCss:
 *
 * https://www.npmjs.com/package/gulp-replace
 * https://www.npmjs.com/package/gulp-inline-css
 */
function inlineVaraamoFI() {
    return gulp.src(FILES.FILE_PATH.VARAAMO.FI.INLINE_PATH)
    .pipe(replace(FILES.LOGO_URLS.TURKU.SRC,FILES.LOGO_URLS.TURKU.FI))
    .pipe(replace(FILES.FEEDBACK_URLS.SRC,FILES.FEEDBACK_URLS.FI))
    .pipe(replace(FILES.MAP_URLS.SERVICE_MAP.SRC, FILES.MAP_URLS.SERVICE_MAP.FI))
    .pipe(inlineCss({
        url: 'file://' + __dirname + FILES.FILE_PATH.VARAAMO.FI.ROOT, // specifies the base path for the stylesheet links
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    }))
    .pipe(gulp.dest(FILES.FILE_PATH.VARAAMO.FI.DEST));
}



/**
 * @see inlineFI
 */
function inlineVaraamoSV() {
    return gulp.src(FILES.FILE_PATH.VARAAMO.SV.INLINE_PATH)
    .pipe(replace(FILES.LOGO_URLS.TURKU.SRC, FILES.LOGO_URLS.TURKU.SV))
    .pipe(replace(FILES.FEEDBACK_URLS.SRC, FILES.FEEDBACK_URLS.SV))
    .pipe(replace(FILES.MAP_URLS.SERVICE_MAP.SRC, FILES.MAP_URLS.SERVICE_MAP.SV))
    .pipe(inlineCss({
        url: 'file://' + __dirname + FILES.FILE_PATH.VARAAMO.SV.ROOT, // specifies the base path for the stylesheet links
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    })).pipe(gulp.dest(FILES.FILE_PATH.VARAAMO.SV.DEST));
}

/**
 * @see inlineFI
 */
function inlineVaraamoEN(){
    return gulp.src(FILES.FILE_PATH.VARAAMO.EN.INLINE_PATH)
    .pipe(replace(FILES.LOGO_URLS.TURKU.SRC, FILES.LOGO_URLS.TURKU.EN))
    .pipe(replace(FILES.FEEDBACK_URLS.SRC, FILES.FEEDBACK_URLS.EN))
    .pipe(replace(FILES.MAP_URLS.SERVICE_MAP.SRC, FILES.MAP_URLS.SERVICE_MAP.EN))
    .pipe(inlineCss({
        url: 'file://' + __dirname + FILES.FILE_PATH.VARAAMO.EN.ROOT,
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    })).pipe(gulp.dest(FILES.FILE_PATH.VARAAMO.EN.DEST))
}

function inlineMonitoriFI() {
    return gulp.src(FILES.FILE_PATH.MONITORI.FI.INLINE_PATH)
        .pipe(replace(FILES.LOGO_URLS.TURKU.SRC,FILES.LOGO_URLS.TURKU.FI))
        .pipe(replace(FILES.FEEDBACK_URLS.SRC,FILES.FEEDBACK_URLS.FI))
        .pipe(replace(FILES.MAP_URLS.SERVICE_MAP.SRC, FILES.MAP_URLS.SERVICE_MAP.FI))
        .pipe(inlineCss({
            url: 'file://' + __dirname + FILES.FILE_PATH.MONITORI.FI.ROOT, // specifies the base path for the stylesheet links
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true
        }))
        .pipe(gulp.dest(FILES.FILE_PATH.MONITORI.FI.DEST));
}

function inlineMonitoriSV() {
    return gulp.src(FILES.FILE_PATH.MONITORI.SV.INLINE_PATH)
        .pipe(replace(FILES.LOGO_URLS.TURKU.SRC,FILES.LOGO_URLS.TURKU.SV))
        .pipe(replace(FILES.FEEDBACK_URLS.SRC,FILES.FEEDBACK_URLS.SV))
        .pipe(replace(FILES.MAP_URLS.SERVICE_MAP.SRC, FILES.MAP_URLS.SERVICE_MAP.SV))
        .pipe(inlineCss({
            url: 'file://' + __dirname + FILES.FILE_PATH.MONITORI.SV.ROOT, // specifies the base path for the stylesheet links
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true
        }))
        .pipe(gulp.dest(FILES.FILE_PATH.MONITORI.SV.DEST));
}

function inlineMonitoriEN() {
    return gulp.src(FILES.FILE_PATH.MONITORI.EN.INLINE_PATH)
        .pipe(replace(FILES.LOGO_URLS.TURKU.SRC,FILES.LOGO_URLS.TURKU.EN))
        .pipe(replace(FILES.FEEDBACK_URLS.SRC,FILES.FEEDBACK_URLS.EN))
        .pipe(replace(FILES.MAP_URLS.SERVICE_MAP.SRC, FILES.MAP_URLS.SERVICE_MAP.EN))
        .pipe(inlineCss({
            url: 'file://' + __dirname + FILES.FILE_PATH.MONITORI.EN.ROOT, // specifies the base path for the stylesheet links
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true
        }))
        .pipe(gulp.dest(FILES.FILE_PATH.MONITORI.EN.DEST));
}


/**
 * Removes whitespace for the html files in the build folder.
 *
 * info on htmlmin:
 * https://www.npmjs.com/package/gulp-htmlmin
 */
function minifyVaraamoFI() {
    return gulp.src(FILES.FILE_PATH.VARAAMO.FI.MINIFY_PATH).pipe(htmlmin({
        collapseWhitespace: true
    })).pipe(gulp.dest(FILES.FILE_PATH.VARAAMO.FI.DEST))
}

/**
 * @see minifyFI for information
 */
function minifyVaraamoSV() {
    return gulp.src(FILES.FILE_PATH.VARAAMO.SV.MINIFY_PATH).pipe(htmlmin({
        collapseWhitespace: true
    })).pipe(gulp.dest(FILES.FILE_PATH.VARAAMO.SV.DEST))
}

/**
 * @see minifyFI
 */
function minifyVaraamoEN() {
    return gulp.src(FILES.FILE_PATH.VARAAMO.EN.MINIFY_PATH).pipe(htmlmin({
        collapseWhitespace: true
    })).pipe(gulp.dest(FILES.FILE_PATH.VARAAMO.EN.DEST))
}

function minifyMonitoriFI() {
    return gulp.src(FILES.FILE_PATH.MONITORI.FI.MINIFY_PATH).pipe(htmlmin({
        collapseWhitespace: true
    })).pipe(gulp.dest(FILES.FILE_PATH.MONITORI.FI.DEST))
}

function minifyMonitoriSV() {
    return gulp.src(FILES.FILE_PATH.MONITORI.SV.MINIFY_PATH).pipe(htmlmin({
        collapseWhitespace: true
    })).pipe(gulp.dest(FILES.FILE_PATH.MONITORI.SV.DEST))
}

function minifyMonitoriEN() {
    return gulp.src(FILES.FILE_PATH.MONITORI.EN.MINIFY_PATH).pipe(htmlmin({
        collapseWhitespace: true
    })).pipe(gulp.dest(FILES.FILE_PATH.MONITORI.EN.DEST))
}
