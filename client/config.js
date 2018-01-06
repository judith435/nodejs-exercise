hwApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'templates/home.html'
    })
    .when('/showProducts', {
        templateUrl: 'templates/showProducts.html'
    })
    .when('/addProduct', {
        templateUrl: 'templates/addProduct.html'
    })
    .when('/showSuppliers', {
        templateUrl: 'templates/showSuppliers.html'
    })
});