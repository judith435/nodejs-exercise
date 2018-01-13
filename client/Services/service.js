hwApp.service('dataService', function($http) {
    
        this.getProducts = function (success) { 
            $http.get('http://localhost:8081/product',{}).then(success, error);
        }

        this.getSuppliers = function (success) { 
            $http.get('http://localhost:8081/supplier',{}).then(success, error);
        }

        this.getSuppliersForDDL = function (success) { 
            $http.get('http://localhost:8081/supplierDDL',{}).then(success, error);
        }

        this.getCategoriesForDDL = function (success) { 
            $http.get('http://localhost:8081/categoryDDL',{}).then(success, error);
        }

        function error(response) {
            alert("Sorry Error occured in $http: " + JSON.stringify(response));
        }
    });
    