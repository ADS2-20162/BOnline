app

//==================================
// auths routers
//==================================
    .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider




    //==================================
    // auths layout base
    //==================================
        .state('auths', {
        url: '/auths',
        views: {
            '': {
                templateUrl: 'app/views/layout.html'
            },
            'aside': {
                templateUrl: 'app/views/aside.html'
            },
            'content': {
                templateUrl: 'app/views/content.html'
            }
        }

    })

    //==================================
    // auths system page
    //==================================
    .state('auths.system', {
        url: '/system',
        template: '<div ui-view ></div>'
    })



    //==================================
    // url cat
    //==================================
    .state("auths.system.cat", {
        url: "/cat",
        data: { section: 'System', page: 'Cat' },
        templateUrl: "ioteca_web_apps/auths_web/views/cat/index.html"
    })

    //==================================
    // url  upeu
    //==================================
  

     .state("auths.system.upeu", {
        url: "/upeu",
        data: { section: 'System', page: 'Upeu' },
        templateUrl: "ioteca_web_apps/auths_web/views/upeu/index.html"
    })
      //==================================
    // url personal
    //==

    .state("auths.system.personal", {
        url: "/personal",
        data: { section: 'System', page: 'Personal' },
        templateUrl: "ioteca_web_apps/auths_web/views/personal/index.html"
    })
    .state("auths.system.contenttype", {
        url: "/contenttype",
        data: { section: 'System', page: 'Aplicaciones' },
        templateUrl: "ioteca_web_apps/auths_web/views/contenttype/index.html"
    })
    //==================================
    // url mision
    //====

    .state("auths.system.mision", {
        url: "/mision",
        data: { section: 'System', page: 'Misions' },
        templateUrl: "ioteca_web_apps/auths_web/views/mision/index.html"
    })

    //==================================
    // url  visitas
    //==================================

    .state("auths.system.visita", {
        url: "/visita",
        data: { section: 'System', page: 'VISITA' },
        templateUrl: "ioteca_web_apps/auths_web/views/visita/index.html",

        settings: {
            //loginRequired: true,
            //roles: ['User'],

        },
        resolve: {
            //checkSecurity: checkSecurity,
        },
    });

});
