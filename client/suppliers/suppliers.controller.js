hwApp.controller('showSuppliersCtrl', function handleSuppliers($scope, supplierService) {
    getSuppliers();
    
    function getSuppliers() {
        supplierService.getSuppliers(function(suppliers) {
            const suppl = suppliers.data;
            $scope.keys = Object.keys(suppl[0]);
            $scope.suppliers = (suppliers.data);
        });
    }
});