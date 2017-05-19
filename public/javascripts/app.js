
(function() {
  var app = angular.module("servicentro", ["ngTouch", "ngRoute", "duScroll"]);

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('', {
        templateUrl: 'partials/home.html'
      })
      .when('/', {
        templateUrl: 'partials/home.html'
      })
      .when('/conocenos', {
        templateUrl: 'partials/conocenos.html'
      })
      .when('/musica', {
        templateUrl: 'partials/musica.html'
      })
      .when('/letra', {
        templateUrl: 'partials/letra.html'
      })
      .when('/galeria', {
        templateUrl: 'partials/galeria.html',
        controller: 'albumsController'
      })
      .when('/contacto', {
        templateUrl: 'partials/contacto.html'
      })
      .otherwise({
        redirectTo: $routeProvider
      });
    $locationProvider.html5Mode(true);
  });

  app.controller('SmoothScroll', function($scope, $document) {
    $scope.toTheTop = function() {
      $document.scrollTopAnimated(0, 5000).then(function() {
        console && console.log('You just scrolled to the top!');
      });
    }
    var section3 = angular.element(document.getElementById('section-3'));
    $scope.toSection3 = function() {
      $document.scrollToElementAnimated(section3);
    }
  })

  app.controller("panelController", function() {
    this.tab = 0;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller("scrollController", function($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
      var old = $location.hash();
      $location.hash(id);
      $anchorScroll();
      $location.hash(old);
    }
  });

  var albums = [{
    id: 1,
    nombre: "Crowdfunding",
    descripcion: "Sesión para crowdfunding",
    ano: 2016,
    mes: 7,
    ciudad: "Santiago",
    pais: "Chile",
    fotos: ["01"]
  }, {
    id: 2,
    nombre: "Cristopalooza",
    descripcion: "Festival Cristopalooza en Villa Alemana",
    ano: 2016,
    mes: 5,
    ciudad: "Villa Alemana",
    pais: "Chile",
    fotos: ["01"]
  }, {
    id: 3,
    nombre: "Saname",
    descripcion: "Making of... Sáname",
    ano: 2015,
    mes: 12,
    ciudad: "Santiago",
    pais: "Chile",
    fotos: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
  }, {
    id: 4,
    nombre: "Encuentro",
    descripcion: "Encuentro por la Vida",
    ano: 2015,
    mes: 12,
    ciudad: "Santiago",
    pais: "Chile",
    fotos: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
  }, {
    id: 5,
    nombre: "HallelTemuco",
    descripcion: "Hallel Temuco",
    ano: 2014,
    mes: 12,
    ciudad: "Temuco",
    pais: "Chile",
    fotos: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"]
  }, {
    id: 6,
    nombre: "Hallel",
    descripcion: "Hallel",
    ano: 2014,
    mes: 9,
    ciudad: "Franca",
    pais: "Brasil",
    fotos: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17"]
  }, {
    id: 7,
    nombre: "Encuentrate",
    descripcion: "Encuéntrate",
    ano: 2012,
    mes: 8,
    ciudad: "Parque Bicentenario",
    pais: "Chile",
    fotos: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
  } ]

  app.controller("albumsController", function() {
    this.albums = albums;
  });

  app.directive('baguetteBox', ['$timeout', function($timeout) {
    return {
      restrict: "AC",
      link: function($scope, $elm, $attrs) {
        $timeout(function() {
          baguetteBox.run('.baguetteBox' + $scope.album.id, {
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

  app.directive('lyrics', function() {
    return {
      restrict: "C",
      link: function($scope, $elm) {
        $(".letra").hide();
        $('.nombre').click(function(event) {
          event.preventDefault();
          $(this).siblings().find('.letra:visible').siblings().find("i").toggleClass("fa-minus-square fa-plus-square");
          $(this).siblings().find('.letra').slideUp('slow');
          $('i', this).toggleClass("fa-minus-square fa-plus-square");
          $('.letra', this).toggle('slow');
        });
      }
    };
  });

  app.directive("menuSitio", function() {
    return {
      restrict: "E",
      templateUrl: "partials/menu-sitio.html"
    }
  })

  app.directive("conocenos", function() {
    return {
      restrict: "E",
      templateUrl: "partials/conocenos.html"
    }
  })

  app.directive("media", function() {
    return {
      restrict: "E",
      templateUrl: "partials/media.html"
    }
  })

  app.directive("musica", function() {
    return {
      restrict: "E",
      templateUrl: "partials/musica.html"
    }
  })

  app.directive("letra", function() {
    return {
      restrict: "E",
      templateUrl: "partials/letra.html"
    }
  })

  app.directive("contacto", function() {
    return {
      restrict: "E",
      templateUrl: "partials/contacto.html"
    }
  })

  app.directive("footerSitio", function() {
    return {
      restrict: "E",
      templateUrl: "partials/footer-sitio.html"
    }
  });

})();
