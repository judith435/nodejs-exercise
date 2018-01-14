hwApp.controller('showSuppliersCtrl', function handleSuppliers($scope, supplierService) {
    getSuppliers();
    
    function getSuppliers() {
        supplierService.getSuppliers(function(suppliers) {
            const suppl = suppliers.data[0];
            $scope.keys = Object.keys(suppl[0]);
            $scope.suppliers = (suppliers.data[0]);
        });
    }
});