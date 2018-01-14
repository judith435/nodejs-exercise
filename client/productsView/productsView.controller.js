hwApp.controller('showProductsCtrl', function handleProducts($scope, productService) {
    getProducts();
    
    function getProducts() {
        productService.getProducts(function(products) {
            const prods = products.data[0];
            $scope.keys = Object.keys(prods[0]);
            $scope.products = (products.data[0]);
        });
    }
});
