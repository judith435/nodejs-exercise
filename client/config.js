hwApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'templates/home.html'
    })
    .when('/showProducts', {
        templateUrl: 'productsView/products.html'
    })
    .when('/addProduct', {
        templateUrl: 'productsAdd/addProduct.html'
    })
    .when('/showSuppliers', {
        templateUrl: 'suppliers/suppliers.view.html'
    })
});