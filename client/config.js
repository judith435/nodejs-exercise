hwApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'templates/home.html'
    })
    .when('/showProducts', {
        templateUrl: 'products/products.view.html'
    })
    .when('/addProduct', {
        templateUrl: 'templates/addProduct.html'
    })
    .when('/showSuppliers', {
        templateUrl: 'suppliers/suppliers.view.html'
    })
});