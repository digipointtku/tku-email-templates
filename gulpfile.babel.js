import gulp from 'gulp';
import inlineCss from 'gulp-inline-css';
import htmlmin from 'gulp-htmlmin';
import replace from 'gulp-replace';

import files from './variables';

/**
 * Gulp tasks.
 * See https://gulpjs.com/ 
 */
gulp.task('build:finnish', gulp.series(inlineFI, minifyFI));
gulp.task('build:swedish', gulp.series(inlineSV, minifySV));
gulp.task('build:english', gulp.series(inlineEN, minifyEN));
gulp.task('build:all', gulp.series('build:finnish', 'build:swedish', 'build:english'));
gulp.task('default', gulp.series('build:finnish', 'build:swedish', 'build:english'));


/**
 * First replaces placeholder strings(<--feedback/map_url/turku_logo-->) with correct urls for the language,
 * then inlines all css(from css files in /css subfolder) before moving the final product to correct folder/subfolder depending on language.
 * 
 * info on replace/inlineCss:
 * 
 * https://www.npmjs.com/package/gulp-replace
 * https://www.npmjs.com/package/gulp-inline-css
 */
function inlineFI() {
    return gulp.src(files.FILE_PATH.fi.inline_path)
    .pipe(replace(files.LOGO_URLS.src,files.LOGO_URLS.fi))
    .pipe(replace(files.FEEDBACK_URLS.src,files.FEEDBACK_URLS.fi))
    .pipe(replace(files.MAP_URLS.src, files.MAP_URLS.fi))
    .pipe(inlineCss({
        url: 'file://' + __dirname + '/pages/fi/', // specifies the base path for the stylesheet links
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    }))
    .pipe(gulp.dest(files.FILE_PATH.fi.dest));
}

/**
 * @see inlineFI
 */
function inlineSV() {
    return gulp.src(files.FILE_PATH.sv.inline_path)
    .pipe(replace(files.LOGO_URLS.src, files.LOGO_URLS.sv))
    .pipe(replace(files.FEEDBACK_URLS.src, files.FEEDBACK_URLS.sv))
    .pipe(replace(files.MAP_URLS.src, files.MAP_URLS.sv))
    .pipe(inlineCss({
        url: 'file://' + __dirname + '/pages/sv/', // specifies the base path for the stylesheet links
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    })).pipe(gulp.dest(files.FILE_PATH.sv.dest));
}

/**
 * @see inlineFI
 */
function inlineEN(){
    return gulp.src(files.FILE_PATH.en.inline_path)
    .pipe(replace(files.LOGO_URLS.src, files.LOGO_URLS.en))
    .pipe(replace(files.FEEDBACK_URLS.src, files.FEEDBACK_URLS.en))
    .pipe(replace(files.MAP_URLS.src, files.MAP_URLS.en))
    .pipe(inlineCss({
        url: 'file://' + __dirname + '/pages/en/',
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    })).pipe(gulp.dest(files.FILE_PATH.en.dest))
}


/**
 * Removes whitespace for the html files in the build folder.
 * 
 * info on htmlmin:
 * https://www.npmjs.com/package/gulp-htmlmin
 */
function minifyFI() {
    return gulp.src(files.FILE_PATH.fi.minify_path).pipe(htmlmin({
        collapseWhitespace: true
    })).pipe(gulp.dest(files.FILE_PATH.fi.dest))
}

/**
 * @see minifyFI for information
 */
function minifySV() {
    return gulp.src(files.FILE_PATH.sv.minify_path).pipe(htmlmin({
        collapseWhitespace: true
    })).pipe(gulp.dest(files.FILE_PATH.sv.dest))
}

/**
 * @see minifyFI
 */
function minifyEN() {
    return gulp.src(files.FILE_PATH.en.minify_path).pipe(htmlmin({
        collapseWhitespace: true
    })).pipe(gulp.dest(files.FILE_PATH.en.dest))
}
