 
app
//------------------------------
// TODO: API menu
// por lo pronto colocar aqui el menu para su Modelo, vease test1
//------------------------------
    .factory("menuService", function(authService) {


    var sections = [
        /*
        {
          title: 'Getting Started',
          state: 'getting-started',
          url: '/getting-started',
          type: 'link'
        }
        */
    ];

    sections.push({
        title: 'INICIO',
        state: 'app.dashboard',
        type: 'link'
    });

    sections.push({
        //title: 'Sección ui',
        //type: 'heading',
        menu: [{
            title: 'MANTENIMIENTO',
            type: 'toggle',
            state: 'ui',
            menu_items: [{
                title: 'Trabajador',
                state: 'ui.test1',
                type: 'link'
            }, {
                title: 'Medicinas',
                state: 'ui.test2',
                type: 'link'
            },  ]
        }]
    });

    sections.push({

        menu: [{
            title: 'REPORTES',
            type: 'toggle',
            state: 'auths.system',
            menu_items: [{
                title: 'UPeU',
                state: 'auths.system.upeu',
                type: 'link'
            }, {
                title: 'CAT',
                state: 'auths.system.cat',
                type: 'link'
            }, {
                title: 'Personal',
                state: 'auths.system.personal',
                type: 'link'
            }, {
                title: 'Visita',
                state: 'auths.system.visita',
                type: 'link'
            }, {
                title: 'Mision',
                state: 'auths.system.mision',
                type: 'link'
            }, ]
        }]
    });


    sections.push({

        menu: [{
            title: 'Catálogo',
            type: 'toggle',
            state: 'catalogo.catalogo',
            menu_items: [{
                title: 'Categorías',
                state: 'catalogo.catalogo.categorias',
                type: 'link'
            }, {
                title: 'Autores',
                state: 'catalogo.catalogo.autores',
                type: 'link'
            }, ]
        }]
    });

    authService.getMenu().then(function(r) {
        menu = r.data;
        console.log("menuService.authService.getMenu():" + JSON.stringify(menu));
        sections.push(

            menu
        );

    }, function(error) {
        console.log("error in menuService.authService.getMenu():" + JSON.stringify(error));
    });








    return {
        sections: sections,
    };
});





