hwApp.controller('showProductsCtrl', function handleProducts($scope, dataService) {
    getProducts();
    
    function getProducts() {
        dataService.getProducts(function(products) {
            $scope.products = products.data[0];
        });
    }
});



hwApp.controller('showSuppliersCtrl', function handleSuppliers($scope, dataService) {
    getSuppliers();
    
    function getSuppliers() {
        dataService.getSuppliers(function(suppliers) {
            $scope.suppliers = suppliers.data[0];
        });
    }
});