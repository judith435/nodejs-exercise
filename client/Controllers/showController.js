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



hwApp.controller('showSuppliersCtrl', function handleSuppliers($scope, dataService) {
    getSuppliers();
    
    function getSuppliers() {
        dataService.getSuppliers(function(suppliers) {
            const suppl = suppliers.data[0];
            $scope.keys = Object.keys(suppl[0]);
            $scope.suppliers = (suppliers.data[0]);
        });
    }
});