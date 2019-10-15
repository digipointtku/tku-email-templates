
import gulp from 'gulp';
import inlineCss from 'gulp-inline-css';
import htmlmin from 'gulp-htmlmin';
import rename from 'gulp-rename';
import replace from 'gulp-replace';

/**
 * Used in the copycss function
 * src: path to turku-custom.css, contents of this get copied to dest so add new stuff here
 * filename: name of the target file
 * dest: path to target folder
 */
const css_path = { src: 'pages/fi/css/turku-custom.css', filename: 'turku-custom' , dest: 'pages/sv/css/'}

/**
 * inline_path: path including all .html files in target folder is used in inlineFI/inlineSV
 * minify_path: path including all .html files in the build folder which is used in minifyFI/minifySV
 * dest: path to build folders
 */
const fi = { inline_path: './pages/fi/*.html', minify_path: 'build/fi/*.html', dest: 'build/fi/' };
const sv = { inline_path: './pages/sv/*.html', minify_path: 'build/sv/*.html', dest: 'build/sv/' };


/**
 * src: string in the .html files that will be replaced.
 * fi: url to Finnish feedback page
 * sv: url to Swedish feedback page
 */
const feedback_links = { 
    src: "<--feedback-->",
    fi: "https://opaskartta.turku.fi/eFeedback/fi/Feedback/30-S%C3%A4hk%C3%B6iset%20asiointipalvelut",
    sv: "https://opaskartta.turku.fi/eFeedback/sv/Feedback/30-S%C3%A4hk%C3%B6iset%20asiointipalvelut" 
};

/**
 * 
 * src: string in the .html files that will be replaced.
 * fi: url to the Finnish version of the mapservice
 * sv: url to the Swedish version of the mapservice
 * 
 * ie in Finnish files the map url will initially look like:
 * '<--map_url-->' + unit_map_service_id|string + '#!route-details'
 * and after replacing
 * 'https://palvelukartta.turku.fi/unit/' + unit_map_service_id|string + '#!route-details'
 */
const map_urls = {
    src: "<--map_url-->",
    fi: "https://palvelukartta.turku.fi/unit/",
    sv: "https://servicekarta.turku.fi/unit/"
};

/**
 * src: string in the .html files that will be replaced.
 * fi: url to the Turku logo
 * sv: url to the Åbo logo
 * 
 * ie in Finnish files the <img> for the logo will initially look like:
 * <img src='<--turku_logo-->' .../>
 * and after replacing
 * <img src='http://www.turku.fi/sites/default/files/styles/site_logo/public/sites/all/themes/custom/driveturku/images/sprites/logo.png' .../>
 */
const logo_urls = {
    src: "<--turku_logo-->",
    fi: "http://www.turku.fi/sites/default/files/styles/site_logo/public/sites/all/themes/custom/driveturku/images/sprites/logo.png",
    sv: "http://www.turku.fi/sites/default/files/styles/site_logo/public/sites/all/themes/custom/driveturku/images/sprites/logo_sv.png"
}

/**
 * Gulp tasks.
 * See https://gulpjs.com/ 
 */
gulp.task('copy:css', gulp.series(copycss));
gulp.task('build:finnish', gulp.series(inlineFI, minifyFI));
gulp.task('build:finnish_only', gulp.series('copy:css','build:finnish'));
gulp.task('build:swedish', gulp.series(inlineSV, minifySV));
gulp.task('build:swedish_only', gulp.series('copy:css','build:swedish'));
gulp.task('build', gulp.series('copy:css', 'build:finnish', 'build:swedish'));
gulp.task('default', gulp.series('copy:css', 'build:finnish', 'build:swedish'));

/**
 * First replaces placeholder strings(<--feedback/map_url/turku_logo-->) with correct Finnish urls,
 * then inlines all css(from css files in /css subfolder) before moving the final product to correct Finnish folder/subfolder.
 * 
 * info on replace/inlineCss:
 * https://www.npmjs.com/package/gulp-replace
 * https://www.npmjs.com/package/gulp-inline-css
 */
function inlineFI() {
    return gulp.src(fi.inline_path)
    .pipe(replace(logo_urls.src,logo_urls.fi))
    .pipe(replace(feedback_links.src,feedback_links.fi))
    .pipe(replace(map_urls.src,map_urls.fi))
    .pipe(inlineCss({
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    }))
    .pipe(gulp.dest(fi.dest));
}

/**
 * First replaces placeholder strings(<--feedback/map_url/turku_logo-->) with correct Swedish urls,
 * then inlines all css(from css files in /css subfolder) before moving the final product to correct Swedish folder/subfolder.
 * info on replace/inlineCss:
 * https://www.npmjs.com/package/gulp-replace
 * https://www.npmjs.com/package/gulp-inline-css
 */
function inlineSV() {
    return gulp.src(sv.inline_path)
    .pipe(replace(logo_urls.src,logo_urls.sv))
    .pipe(replace(feedback_links.src,feedback_links.sv))
    .pipe(replace(map_urls.src,map_urls.sv))
    .pipe(inlineCss({
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true
    })).pipe(gulp.dest(sv.dest));
}

/**
 * Removes whitespace for the Finnish html files in the build folder.
 * 
 * info on htmlmin:
 * https://www.npmjs.com/package/gulp-htmlmin
 */
function minifyFI() {
    return gulp.src(fi.minify_path).pipe(htmlmin({
        collapseWhitespace: true
    })).pipe(gulp.dest(fi.dest))
}

/**
 * Removes whitespace for the Swedish html files in the build folder.
 * info on htmlmin:
 * https://www.npmjs.com/package/gulp-htmlmin
 */
function minifySV() {
    return gulp.src(sv.minify_path).pipe(htmlmin({
        collapseWhitespace: true
    })).pipe(gulp.dest(sv.dest))
}


/**
 * Copies the contents of pages/fi/css/turku-custom.css to pages/sv/css/turku-custom.css.
 * The contents of sv/css/turku-custom get replaced so ADD ALL NEW CSS STUFF TO THE FINNISH ONE(fi/css/turku-custom).
 * 
 * info on rename:
 * https://www.npmjs.com/package/gulp-rename
 */
function copycss() {
    return gulp.src(css_path.src)
    .pipe(rename({ basename: css_path.filename}))
    .pipe(gulp.dest(css_path.dest))
}


