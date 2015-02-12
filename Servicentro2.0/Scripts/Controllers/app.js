(function () {
    var app = angular.module("servicentro", ["ngTouch"]);

    app.controller("panelController", function () {
        this.tab = 0;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
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