(function () {
    var app = angular.module("servicentro", ["ngTouch", "ngRoute"]);

    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html'
            })
            .when('/conocenos', {
                templateUrl: 'quienes-somos.html'
            })
            .when('/musica', {
                templateUrl: 'musica.html'
            })
            .when('/letra', {
                templateUrl: 'letra.html'
            })
            .when('/galeria', {
                templateUrl: 'galeria.html',
                controller: 'albumsController'
            })
            .when('/contacto', {
                templateUrl: 'contacto.html'
            });

        $locationProvider.html5Mode(true);
    });

    app.controller("panelController", function () {
        this.tab = 0;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

    var albums = [
        {
            id: 1,
            nombre: "Hallel",
            ano: 2014,
            mes: 9,
            ciudad: "Franca",
            pais: "Brasil",
            fotos: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17"]
        }
        , {
            id: 2,
            nombre: "Hallel",
            ano: 2014,
            mes: 9,
            ciudad: "Franca",
            pais: "Brasil",
            fotos: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17"]
        }
    ]

    app.controller("albumsController", function () {
        this.albums = albums;
    });

    app.directive('baguetteBox', ['$timeout', function ($timeout) {
        return {
            restrict: "AC",
            link: function ($scope, $elm, $attrs) {
                $timeout(function () {
                    baguetteBox.run('.baguetteBox' + $scope.$eval($attrs.albumid), {
                        captions: true, // true|false - Display image captions
                        buttons: 'auto', // 'auto'|true|false - Display buttons
                        async: true, // true|false - Load files asynchronously
                        preload: 2, // [number] - How many files should be preloaded from current image
                        animation: 'slideIn'
                    });
                });
            }
        };
    }]);

    app.directive('lyrics', function () {
        return {
            restrict: "C",
            link: function ($scope, $elm) {
                $(".letra").hide();
                $('.nombre').click(function (event) {
                    event.preventDefault();
                    $(this).siblings().find('.letra:visible').siblings().find("i").toggleClass("fa-minus-square fa-plus-square");
                    $(this).siblings().find('.letra').slideUp('slow');
                    $('i', this).toggleClass("fa-minus-square fa-plus-square");
                    $('.letra', this).toggle('slow');
                });
            }
        };
    });

    app.directive("menuPanel", function () {
        return {
            restrict: "E",
            templateUrl: "menu-panel.html"
        }
    });

    app.directive("menuSitio", function () {
        return {
            restrict: "E",
            templateUrl: "menu-sitio.html"
        }
    })

    app.directive("footerSitio", function () {
        return {
            restrict: "E",
            templateUrl: "footer-sitio.html"
        }
    });

})();