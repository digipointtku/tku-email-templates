import gulp from 'gulp';
import inlineCss from 'gulp-inline-css';
import htmlmin from 'gulp-htmlmin';
import replace from 'gulp-replace';



/**
 * inline_path: path including all .html files in target folder is used in inlineFI/inlineSV
 * minify_path: path including all .html files in the build folder which is used in minifyFI/minifySV
 * dest: path to build folders
 */
const fi = {
    inline_path: './pages/fi/*.html',
    minify_path: 'build/fi/*.html',
    dest: 'build/fi/'
};
const sv = {
    inline_path: './pages/sv/*.html',
    minify_path: 'build/sv/*.html',
    dest: 'build/sv/'
};


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
 * '<--map_url-->' + unit_map_service_id|string + '#!route-details'
 * 
 * and after replacing
 * 
 * 'https://palvelukartta.turku....' + unit_map_service_id|string + '#!route-details'
 */
const map_urls = {
    src: "<--map_url-->",
    fi: "https://palvelukartta.turku.fi/unit/",
    sv: "https://servicekarta.turku.fi/unit/"
};

/**
 * src: string in the .html files that will be replaced.
 * fi: url to the Turku logo.
 * sv: url to the Åbo logo.
 * 
 * <img src='<--turku_logo-->' .../>
 * 
 * and after replacing
 * 
 * <img src='http://www.turku.fi/sites/...' .../>
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
gulp.task('build:finnish', gulp.series(inlineFI, minifyFI));
gulp.task('build:swedish', gulp.series(inlineSV, minifySV));
gulp.task('build:all', gulp.series('build:finnish', 'build:swedish'));
gulp.task('default', gulp.series('build:finnish', 'build:swedish'));

/**
 * First replaces placeholder strings(<--feedback/map_url/turku_logo-->) with correct Finnish urls,
 * then inlines all css(from css files in /css subfolder) before moving the final product to correct Finnish folder/subfolder.
 * 
 * info on replace/inlineCss:
 * 
 * https://www.npmjs.com/package/gulp-replace
 * https://www.npmjs.com/package/gulp-inline-css
 */
function inlineFI() {
    return gulp.src(fi.inline_path)
    .pipe(replace(logo_urls.src,logo_urls.fi))
    .pipe(replace(feedback_links.src,feedback_links.fi))
    .pipe(replace(map_urls.src,map_urls.fi))
    .pipe(inlineCss({
        url: 'file://' + __dirname + '/pages/', // specifies the base path for the stylesheet links
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
 * 
 * info on replace/inlineCss:
 * 
 * https://www.npmjs.com/package/gulp-replace
 * https://www.npmjs.com/package/gulp-inline-css
 */
function inlineSV() {
    return gulp.src(sv.inline_path)
    .pipe(replace(logo_urls.src,logo_urls.sv))
    .pipe(replace(feedback_links.src,feedback_links.sv))
    .pipe(replace(map_urls.src,map_urls.sv))
    .pipe(inlineCss({
        url: 'file://' + __dirname + '/pages/', // specifies the base path for the stylesheet links
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

