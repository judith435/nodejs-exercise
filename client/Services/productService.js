hwApp.service('productService', function($http) {
    
        this.getProducts = function (success) { 
            $http.get('http://localhost:8081/product',{}).then(success, error);
        }

        this.checkDuplicateProduct = function (prod, success, error) { 
            $http({
                url: 'http://localhost:8081/product/duplicate', 
                method: 'GET',
                params: { product: prod }
             });
        }


        this.addProduct = function(prod, success, error) {
            $http({
                url: 'http://localhost:8081/product',
                method: 'POST',
                params: { product: prod }
            }).then(success, error);
        }

        function error(response) {
            alert("Sorry Error occured in $http: " + JSON.stringify(response));
        }
    });
    