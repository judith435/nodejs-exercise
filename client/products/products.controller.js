hwApp.controller('showProductsCtrl', function handleProducts($scope, dataService) {
    getProducts();
    
    function getProducts() {
        dataService.getProducts(function(products) {
            const prods = products.data[0];
            $scope.keys = Object.keys(prods[0]);
            $scope.products = (products.data[0]);
        });
    }
});


hwApp.controller('addProductsCtrl', function handleProducts($scope, dataService) {

});
