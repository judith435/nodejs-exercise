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