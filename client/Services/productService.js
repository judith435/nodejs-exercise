hwApp.service('productService', function($http) {
    
        this.getProducts = function (success) { 
            $http.get('http://localhost:8081/product',{}).then(success, error);
        }

        this.addProduct = function(prod, onSuccess, onError) {
            $http({
                url: 'http://localhost:8081/product',
                method: 'POST',
                params: {
                    product: prod
                }
            }).then(onSuccess, onError);
        }

        function error(response) {
            alert("Sorry Error occured in $http: " + JSON.stringify(response));
        }
    });
    