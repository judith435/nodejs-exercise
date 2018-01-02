hwApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'home.html'
    })
    .when('/showProducts', {
        templateUrl: 'showProducts.html'
    })
    .when('/addProduct', {
        templateUrl: 'addProduct.html'
    })
});