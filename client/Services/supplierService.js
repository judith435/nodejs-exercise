hwApp.service('supplierService', function($http) {

    this.getSuppliers = function (success) { 
        $http.get('http://localhost:8081/supplier',{}).then(success, error);
    }

    this.getSuppliersForDDL = function (success) { 
        $http.get('http://localhost:8081/supplier/ddl',{}).then(success, error);
    }


    function error(response) {
        alert("Sorry Error occured in $http: " + JSON.stringify(response));
    }
});
