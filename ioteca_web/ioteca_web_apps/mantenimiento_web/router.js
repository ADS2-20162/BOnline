

app
//==================================
// ui app routers
//==================================
    .config(function($stateProvider) {

    $stateProvider
    //==================================
    // ui layout base
    //==================================
        .state('ui', {
        url: '/ui',
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
    // test1
    //==================================
    .state("ui.test1", {
        url: "/test1",
        data: { section: 'UI', page: 'Trabajador' },
        settings: {
            //loginRequired: true,
            //roles: ['User'],
        },
        templateUrl: "ioteca_web_apps/mantenimiento_web/views/trabajador/trabajador.html",
        resolve: {
            //checkSecurity: checkSecurity,
        },

    })

    //==================================
    // test
    //==================================
    .state("ui.test2", {
        url: "/test2",
        data: { page: 'Medicamentos' },
        templateUrl: "ioteca_web_apps/mantenimiento_web/views/medicinas/medicinas.html",
        resolve: {
            //checkSecurity: checkSecurity,
        },
        settings: {
            //loginRequired: false,
            //roles: ['User2'],
        },
    })

    
    
    


    ;
});
