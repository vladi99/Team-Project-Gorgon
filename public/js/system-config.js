SystemJS.config({
    // tell SystemJS which transpiler to use
    transpiler: 'plugin-babel',
    // tell SystemJS where to look for the dependencies
    map: {
        'plugin-babel': 'libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'libs/systemjs-plugin-babel/systemjs-babel-browser.js',
        // app start script
        'app': './js/app.js',
        'genericRequester': './js/requesters/genericRequester.js',
        'userRequester': '/js/requesters/userRequester.js',
        'objectsRequester': './js/requesters/objectsRequester.js',
        'userController':'./js/controllers/userController.js',
        'itemsController': '/js/controllers/itemsController.js',
        'templateLoader': './js/templateLoader.js',
        'helperRegister': './js/helperRegister.js',
        'userValidator': './js/utils/userValidator.js',
        'propertyValidator': '/js/utils/propertyValidator.js',
        'controllersFactory': './js/factories/controllersFactory.js',
        'requesterFactory': './js/factories/requesterFactory.js',
        'addItemValidator': './js/utils/addItemValidator.js',
        // Libraries
        'jquery' : 'libs/jquery/dist/jquery.js',
        'bootstrap': 'libs/bootstrap/dist/js/bootstrap.js',
        'handlebars': 'libs/handlebars/dist/handlebars.js',
        'navigo': 'libs/navigo/lib/navigo.js',
        'toastr': 'libs/toastr/package/toastr.js'
    }
});