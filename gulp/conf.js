exports.paths = {
    src: {
        general: 'client',
        favicon: 'client/favicon.ico',
        img: 'client/assets/img/**/*',
        fonts: 'client/assets/fonts/**/*',
        html: 'client/dev.html',
        js: 'client/app/**/*.js',
        css: 'client/app/**/*.css',
        lib: 'client/lib/**/*',
        tmpls: 'client/app/**/*.html',
        appjs: 'client/app.js',
        cssLibs: [
            'client/lib/angular-ui-grid/ui-grid.min.css',
            'client/lib/bootstrap/dist/css/bootstrap.min.css',
        ],
        jsLibs: [
            'client/lib/angular/angular.min.js',
            'client/lib/angular-cookies/angular-cookies.min.js',
            'client/lib/angular-animate/angular-animate.min.js',
            'client/lib/angular-touch/ui-touch.min.js',
            'client/lib/angular-bootstrap/ui-bootstrap.min.js',
            'client/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'client/lib/angular-ui-grid/ui-grid.min.js',
            'client/lib/angular-ui-router/release/angular-ui-router.min.js'
        ],
    },
    dest: {
        general: 'server/public',
        favicon: 'server/public/favicon.ico',
        img: 'server/public/assets/img',
        fonts: 'server/public/assets/fonts',
        html: 'server/public/index.html',
        js: 'server/public/js',
        css: 'server/public/css',
    },

};
exports.isProd = false;
